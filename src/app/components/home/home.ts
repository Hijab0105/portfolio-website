import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
constructor( private router: Router) { }


goToContact() {
  this.router.navigate(['/contact']);
}


  private http = inject(HttpClient);

   downloadCV()
  {
 this.http.get('/resume/my-resume.pdf', { responseType: 'blob' })
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