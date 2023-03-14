import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { University } from '../university/university.component';
import { Courses } from '../courses/courses.component';
import { Student } from '../students/students.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/students');
  }
  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>('http://localhost:3000/courses');
  }
  getUniversity(): Observable<University[]> {
    return this.http.get<University[]>('http://localhost:3000/universities');
  }
  createCourse(university: string, name: string) {
    const body = { university, name };

    return this.http.post('http://localhost:3000/courses', body);
  }

  createStudent(university: string, courses: string, name: string) {
    const body = { university, courses, name };

    return this.http.post('http://localhost:3000/students', body);
  }

  createUni(id: string, name: string) {
    const body = { id, name };

    return this.http.post('http://localhost:3000/universities', body);
  }
}
