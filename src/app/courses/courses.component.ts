import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import { University } from '../university/university.component';

export interface Courses {
  name: string;
  _id: any;
  university: [{ name: any; _id: any }];
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses: Courses[];
  universities: University[];
  displayedColumns: string[] = ['University Name', 'Course Name'];
  name: string;
  selectedUniversity: Courses;
  uni_id: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getCourses().subscribe((data) => {
      this.courses = data;
    });
    this.sharedService.getUniversity().subscribe((data) => {
      this.universities = data;
      console.log(data);
    });
  }
  createCourse() {
    this.sharedService.createCourse(this.uni_id, this.name).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
    this.name = '';
    window.location.reload();
  }
  onUniversitySelect() {
    const uni_name = this.selectedUniversity._id;
    this.uni_id = uni_name;
    console.log(this.uni_id);
  }
}
