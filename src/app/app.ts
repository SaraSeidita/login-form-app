import { Component } from '@angular/core';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Login],
   template: `
    <main>
      <section class="content">
        <app-login></app-login>
      </section>
    </main>
  `,

  styleUrl: './app.css'
})
export class App {
  title = 'login-form';
}
