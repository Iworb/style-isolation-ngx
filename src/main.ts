import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  styles: `:host { display: block; border: 1px dashed red; } .cool-button { color: red; background-color: aliceblue }`,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <button class="cool-button">Button inside Angular</button>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
