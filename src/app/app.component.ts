import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrige aquí 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'routing4';
}
