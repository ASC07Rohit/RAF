import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosisResult } from '../model/raf-score.model';

@Injectable({
  providedIn: 'root',
})
export class IcdCodeSearchService {
  private apiUrl = 'http://127.0.0.1:5000/api/risk-score';

  constructor(private http: HttpClient) {}

  searchDiagnosisCode(data: { diagnosis_code: string, gender: string, dob: string, eligibility:string }): Observable<DiagnosisResult[]> {
    return this.http.post<DiagnosisResult[]>(this.apiUrl, data);
  }
}
