import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from './services/courses.service';


interface Course {
  id: number;
  name: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses: Course[];
  displayedColumns: string[] = ['Id', 'name'];
  name: string;
  id: string;

  constructor(
    private http: HttpClient,
    private coursesSerivice: CoursesService
  ) {}

  ngOnInit(): void {
    this.http
      .get<Course[]>('http://localhost:3000/courses')
      .subscribe((data) => {
        this.courses = data;
      });
  }
  createUser() {
    this.coursesSerivice.createUser(this.id, this.name).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
     this.name = '';
     this.id = '';
     window.location.reload()
  }
}
