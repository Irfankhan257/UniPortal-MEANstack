import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from './services/student.service';

interface Student {
  id: number;
  name: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students: Student[];
  displayedColumns: string[] = ['Id', 'name'];
  name: string;
  id: string;
  constructor(
    private http: HttpClient,
    private studentservice: StudentService
  ) {}

  ngOnInit(): void {
    this.http
      .get<Student[]>('http://localhost:3000/students')
      .subscribe((data) => {
        this.students = data;
        console.log(data);
      });
  }
  createUser() {
    this.studentservice.createUser(this.id, this.name).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
     this.name = '';
     this.id = '';
     window.location.reload()
  }
}
