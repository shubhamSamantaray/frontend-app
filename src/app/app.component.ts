import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HealthStatusComponent } from './health-status/health-status.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HealthStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Full Stack Journey – Day 1';
}
