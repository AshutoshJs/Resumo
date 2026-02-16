import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResumeTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UiResumo';
}
