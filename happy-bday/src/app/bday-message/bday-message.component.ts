import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-bday-message',
  template: `
  <div class="bday-message"
    [@simpleFadeAnimation]="'in'">
    {{ msg }}
    <div class="bday-submsg">
      {{ sub_msg }}
    </div>
  </div>
`,
  styleUrls: ['./bday-message.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 0.8 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(5000)
      ]),

      transition(':leave',
        animate(5000, style({ opacity: 0 })))
    ])
  ]
})
export class BdayMessageComponent implements OnInit {

  msg: String = "Happy Birthday Ming!";
  sub_msg: String = "You are a badass and I love to see you playing guitar, rocking squash, and living life. At 30 you are sexier and stronger than ever. Keep it up and cheers to you! <3"

  constructor() { }

  ngOnInit(): void {
  }

}
