import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IcdCodeSearchService } from '../services/icd-code.service';
import { DiagnosisResult } from '../model/raf-score.model';

@Component({
  selector: 'app-raf-score',
  templateUrl: './raf-score.component.html',
  styleUrls: ['./raf-score.component.css'],
})
export class RafScoreComponent implements OnInit {
  riskScoreForm: FormGroup;
  results: DiagnosisResult[] = [];
  age: number = 0;
  demographicRiskFactor: number = 0.142;
  hccRiskFactor: number = 0;
  totalRiskScore: number = 0;

  constructor(
    private fb: FormBuilder,
    private icdService: IcdCodeSearchService
  ) {
    this.riskScoreForm = this.fb.group({
      gender: ['', Validators.required],
      diagnosis_code: ['', Validators.required],
      dob: ['', Validators.required],
      eligibility: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.riskScoreForm.get('dob')?.valueChanges.subscribe((dob: string) => {
      if (dob) {
        this.age = this.calculateAge(new Date(dob));
      } else {
        this.age = 0;
      }
    });
  }

  calculateAge(dob: Date): number {
    const currentYear = 2025;
    const birthYear = dob.getFullYear();
    return currentYear - birthYear;
  }

  onReset() {
    this.riskScoreForm.reset();
  }

  onSubmit() {
    const data = this.riskScoreForm.value;

    if (data.diagnosis_code && data.gender && data.dob && data.eligibility) {
      this.icdService.searchDiagnosisCode(data).subscribe(
        (response) => {
          this.results = response;  // Directly use the response as the results
          
          this.hccRiskFactor = this.results.reduce((sum, result) => sum + parseFloat(result.Risk_Score), 0);
          this.totalRiskScore = this.demographicRiskFactor + this.hccRiskFactor;

          this.riskScoreForm.reset();
        },
        (error) => {
          alert('Please Enter valid Detail');
          this.riskScoreForm.reset();
        }
      );
    } else {
      alert('Please fill all fields');
    }
  }
}
