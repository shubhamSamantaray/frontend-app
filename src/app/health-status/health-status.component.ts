import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health-status',
  imports: [CommonModule],
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent {
  healthStatus: string = 'Click refresh to check health status';

  constructor(private http: HttpClient) {}

  fetchHealthStatus(): void {
    this.healthStatus = 'Checking health...';
    this.http.get<{ status: string }>('http://localhost:8080/api/health').subscribe(
      (response) => {
        this.healthStatus = response.status;
      },
      (error) => {
        this.healthStatus = 'Error fetching health status';
      }
    );
  }
}
