import { Component, ViewEncapsulation } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatButton } from '@angular/material/button';
import { createApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./main.scss'],
  imports: [MatButton],
  template: `
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <h1>Hello from {{ name }}!</h1>
    <div class="row">
      <div>Regular area</div>
      <div class="cool-area">My cool area</div>
      <button mat-flat-button color="primary">Material button</button>
    </div>
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class App {
  name = 'Angular';
}

(async () => {

  const app = await createApplication({
    providers: [provideAnimationsAsync()],
  });

  const appComponent = createCustomElement(App, {
    injector: app.injector,
  });

  customElements.define('app-root', appComponent);
})();
