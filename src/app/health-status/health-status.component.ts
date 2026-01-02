import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health-status',
  imports: [CommonModule],
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent {
  healthStatus: string = 'Click refresh to check health status';
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  fetchHealthStatus(): void {
    this.isLoading = true;
    this.healthStatus = 'Checking health...';
    this.http.get<{ status: string }>('http://localhost:8080/api/health').subscribe(
      (response) => {
        this.healthStatus = `Status: ${response.status}`;
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => {
        console.error('Health check error:', error);
        
        if (error.status === 0) {
          this.healthStatus = '🔴 Backend is DOWN - Cannot connect to server';
        } else if (error.status === 404) {
          this.healthStatus = '❌ Endpoint not found (404)';
        } else if (error.status >= 500) {
          this.healthStatus = '🔴 Backend Server Error (5xx)';
        } else {
          this.healthStatus = `❌ Error: ${error.status} ${error.statusText}`;
        }
        
        this.isLoading = false;
      }
    );
  }
}
