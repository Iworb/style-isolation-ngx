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

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
  
  .cool-area {
    color: red;
    background-color: aliceblue
  }
  `,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <div class="row">
      <div>Regular area</div>
      <div class="cool-area">My cool area</div>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
