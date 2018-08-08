import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h1>
   {{ title }}!
  </h1>
  <h2>
    {{title2}}
    </h2>
</div>


  `,
  styles: [`
    h1
    {
      color:red;

    }
    h2
    {
      color:green;
    }
  
  `]
})
export class AppComponent {
  title = 'Marvellous';
  title2="Inline"
}
