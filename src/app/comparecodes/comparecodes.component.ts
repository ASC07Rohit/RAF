import { Component } from '@angular/core';

@Component({
  selector: 'app-comparecodes',
  templateUrl: './comparecodes.component.html',
  styleUrls: ['./comparecodes.component.css']
})
export class CompareCodesComponent {

  constructor() { }

  onReset(): void {
    // Logic to reset form fields or values (if any)
    document.getElementById('codeOne')?.setAttribute('value', '');
    document.getElementById('codeTwo')?.setAttribute('value', '');
    document.getElementById('ageCompare')?.setAttribute('value', '65');
    document.getElementById('riskModelCompare')?.setAttribute('value', 'CN - Community Non-Dual');
    document.getElementById('planCompare')?.setAttribute('value', 'Silver');
    document.getElementById('enrollmentDurationCompare')?.setAttribute('value', '11');
    document.getElementById('calculationYearCompare')?.setAttribute('value', '2022');
  }

}
