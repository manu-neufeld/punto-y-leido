import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private http: HttpClient){}
  
  form: any = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      // this.http.post('https://formspree.io/mleqnqbk',
      //   { name: this.form.name, replyto: this.form.email, telephone: this.form.phone, message: this.form.message},
      //   { 'headers': headers }).subscribe(
      //     response => {
      //       console.log(response);
      //     }
      //   );
      this.onReset(contactForm);
    }
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
