import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./views/pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  template: `
    <router-outlet></router-outlet>
    <app-home />
  `,
})
export class AppComponent {
  title = 'cds-gestor';
}
