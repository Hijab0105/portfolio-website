import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendEmail(form: any) {

    emailjs.send(
      'service_ot7tson',
      'template_cueog0g',
      {
        from_name: this.contactData.name,
        from_email: this.contactData.email,
        subject: this.contactData.subject,
        message: this.contactData.message
      },
      'mkAzXrZRDJF3QozFM'
    ).then(() => {

      alert('✅ Message sent successfully!');

      this.contactData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      form.resetForm();

    }).catch((error) => {

      console.error(error);

      alert('❌ Failed to send message.');

    });

  }

}
