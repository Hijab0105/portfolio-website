import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


  sendEmail() {
  window.location.href = "mailto:zhijab408@example.com?subject=Hiring Request&body=Hi, I want to hire you for a project.";
}

  downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/resume/Zahra1-Resume.pdf';
  link.download = 'Zahra1-Resume.pdf';
  link.target = '_blank';
  link.click();
}
}
