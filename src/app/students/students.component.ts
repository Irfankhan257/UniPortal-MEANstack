import { SharedService } from '../shared/shared.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from '../courses/courses.component';

export interface Student {
  id: number;
  name: string;
  university: [{ name: any; _id: any }];
  courses: [{ name: any; _id: any }];
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students: Student[];
  courses: Courses[];
  displayedColumns: string[] = ['University', 'courses', 'name'];
  name: string;
  id: string;
  selectedUniversity: Courses;
  selectedCourse: Courses;
  uni_id: string;
  course_id: any;

  constructor(private http: HttpClient, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getStudents().subscribe((data) => {
      this.students = data;
    });

    this.sharedService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
  createStudent() {
    this.sharedService
      .createStudent(this.uni_id, this.course_id, this.name)
      .subscribe(
        (response) => console.log(response),
        (error) => console.error(error)
      );
    this.name = '';
    window.location.reload();
  }
  onUniversitySelect() {
    const uni_name = this.selectedUniversity.university[0]._id;
    this.uni_id = uni_name;
    console.log(this.uni_id);
  }
  onCourseSelect() {
    const course_name = this.selectedCourse._id;
    this.course_id = course_name;
    console.log(this.course_id);
  }
}
