import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
})
export class MemberProfileComponent {
  memberForm: FormGroup;
  activeTab: string = 'profile'; // Set default tab to 'profile'
  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.memberForm = this.fb.group({
      conditions: ['', Validators.required],
      additionalDetails: [''],
      age: ['', [Validators.required, Validators.min(0)]],
      dosYear: ['HCC/2022/v24', Validators.required],
      riskModel: ['CN', Validators.required],
      baseRate: ['', [Validators.required, Validators.min(0)]],
      gender: ['M', Validators.required],
      entitlement: ['Old Age', Validators.required],
      dob: ['', Validators.required],
      plate: ['Silver', Validators.required],
      calcYear: [2022, Validators.required],
      enrollmentDuration: [12, [Validators.required, Validators.min(1)]],
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  onSubmit() {
    if (this.memberForm.valid) {
      this.isFormSubmitted = true;
      // Handle form submission logic here
      console.log(this.memberForm.value);
    } else {
      this.memberForm.markAllAsTouched();
    }
  }

  onClear() {
    this.memberForm.reset();
    this.isFormSubmitted = false;
  }
}
