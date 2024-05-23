import { Component, ViewEncapsulation } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  styles: `
  :host {
    display: block;
    border: 1px dashed red;    
  }
  
  .cool-button {
    color: red;
    background-color: aliceblue
  }
  
  button + button {
    margin-left: 8px;
  }
  `,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <button>Regular button</button>
    <button class="cool-button">My cool button</button>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
