import { SharedService } from '../shared/shared.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface University {
  id: number;
  courses: any[];
  name: string;
}

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'],
})
export class UniversityComponent {
  universities: University[];
  displayedColumns: string[] = ['name'];
  name: string;
  id: string;

  constructor(private http: HttpClient, private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.getUniversity().subscribe((data) => {
      this.universities = data;
      console.log(data);
    });
  }

  createUni() {
    this.sharedService.createUni(this.id, this.name).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
    this.name = '';
    this.id = '';
    window.location.reload();
  }
}
