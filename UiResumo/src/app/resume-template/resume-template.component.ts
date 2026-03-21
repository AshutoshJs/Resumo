import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import { EducationSectionComponent } from '../education-section/education-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';

@Component({
  selector: 'app-resume-template',
  imports: [HeaderSectionComponent,ExperienceSectionComponent,EducationSectionComponent,SkillsSectionComponent],
  templateUrl: './resume-template.component.html',
  styleUrl: './resume-template.component.scss'
})
export class ResumeTemplateComponent {

}
