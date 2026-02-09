import { Component } from '@angular/core';
import { MainTemplateComponent } from "./templates/main-template/main-template.component";


@Component({
  selector: 'app-root',
  imports: [MainTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reservation';
}
