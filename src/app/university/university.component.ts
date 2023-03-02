import { RouterModule, Router } from '@angular/router';
import { UniversityService } from './services/university.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface University {
  id: number;
  name: string;
}

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'],
})
export class UniversityComponent {
  universities: University[];
  displayedColumns: string[] = ['Id', 'name'];
  name: string;
  id: string;

  constructor(
    private http: HttpClient,
    private universityService: UniversityService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.http
      .get<University[]>('http://localhost:3000/universities')
      .subscribe((data) => {
        this.universities = data;
      });
  }

  createUser() {
    this.universityService.createUser(this.id, this.name).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
      
    );
    this.name = '';
    this.id = '';
    window.location.reload();
  }

}
