import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private http = inject(HttpClient);

  sendEmail() {
  window.location.href = "mailto:zhijab408@example.com?subject=Hiring Request&body=Hi, I want to hire you for a project.";
}

  downloadCV() {
  
 this.http.get('/assets/resume/my-resume.pdf', { responseType: 'blob' })
      .subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'my-resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);   // Clean up
        },
        error: (err) => {
          console.error('Download failed', err);
          // Show user error message
        }
      });
}
}
