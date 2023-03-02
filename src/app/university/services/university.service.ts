import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  constructor(private http: HttpClient) {}

  createUser(id: string,name: string ) {
    const body = { id,name };
    
    return this.http.post('http://localhost:3000/universities', body);
  }
}
