import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';
  submitted = false;

  sendMessage(): void {
    const name = this.name.trim();
    const email = this.email.trim();
    const subject = this.subject.trim();
    const message = this.message.trim();

    if (!name || !email || !subject || !message) {
      return;
    }

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${emailSubject}&body=${emailBody}`;

    this.submitted = true;
  }
}
