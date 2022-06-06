import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations'

const defaults = {
    delayEnter: '50ms',
    delayLeave: '0ms',
    timingEnter: '1s',
    timingLeave: '0.5s'
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('flyInOutRTL', [
        state('in', style({ transform: 'translate(0)' })),
        transition(':enter', [
            style({ transform: 'translate(100vw)' }),
            animate('{{timingEnter}} {{delayEnter}} ease-in-out')
        ], { params: { delayEnter: defaults.delayEnter, timingEnter: defaults.timingEnter } }),
        transition(':leave', [
            style({ transform: 'translate(0)' }),
            animate('{{timingLeave}} {{delayLeave}} ease-in-out', style({ transform: 'translateX(-100vw)' }))
        ], { params: { delayLeave: defaults.delayLeave, timingLeave: defaults.timingLeave } })
    ])
  ]
})


export class AppComponent implements OnInit {

  sliderIndex: number = 0;
  items: any[] = [] as any[];

  constructor() { }

  ngOnInit(): void {
    this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
    
  leftScroll() {
    console.log('leftScroll')
    if (this.sliderIndex > 0) {
      this.sliderIndex--;

    }
  }

  rightScroll() {
    console.log('rightScroll')
    if (this.sliderIndex < this.items.length - 4) {
      this.sliderIndex++;
    }
  }

  getBackground(i: number): string {
    if (i == 4) {
      return "green";
    }

    if (i == 1) {
      return "blue";
    }

    if (i == 2) {
      return "purple";
    }

    if (i == 3) {
      return "yellow";
    }
    return "white";
  }

}

