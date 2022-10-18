import { Component, AfterViewInit, ViewChild } from '@angular/core'

import { trigger, query, animateChild, transition, animate } from '@angular/animations';
import { timer, delay, Observable, of, max, observable, Subscription } from 'rxjs';
import type {
  FireworksDirective,
  FireworksOptions
} from '@fireworks-js/angular'

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])
    ])
    //...
  ]
})
export class AppComponent implements AfterViewInit {
  enabled = true
  is_button_visible = true;
  is_bday_button_visible = false;
  is_msg_viewable = false;
  hue_max = 70;
  rockets_max = 50;
  options: FireworksOptions = {
    opacity: 0.5,
    hue: {
      min: 0,
      max: 70
    },
    rocketsPoint: {
      min: 10,
      max: 10
    },
  }

  constructor(private router: Router) { }

  ngAfterViewInit(): void {

    this.waitStop();
  }

  @ViewChild('fireworks') fireworks?: FireworksDirective

  public waitStop(): void {
    this.fireworks?.waitStop()
  }

  private updateFirworkColors(hue_min: number, hue_max: number): void {
    let options = {
      opacity: 0.7,
      hue: {
        min: hue_min,
        max: hue_max
      },
      rocketsPoint: {
        min: 10,
        max: 90
      },
    }
    this.fireworks?.updateOptions(options);
  }


  private setFinalFireworks(): void {
    let options = {
      opacity: 0.7,
      explosion: 10,
      intensity: 40,
      hue: {
        min: 0,
        max: 360
      },
      brightness: {
        min: 60,
        max: 90
      },

      rocketsPoint: {
        min: 45,
        max: 50
      },
      particles: 200
    }
    this.fireworks?.updateOptions(options);
  }

  private playFinale(): void {

    let ms_delay: number = 0;
    let hue_max: number = 0;
    let delay_increment: number = 2000;

    ms_delay = ms_delay + delay_increment;
    hue_max = hue_max + 40;
    const source3 = timer(ms_delay);
    const subscribe3 = source3.subscribe(val => this.updateFirworkColors(0, 30));

    ms_delay = ms_delay + delay_increment;
    hue_max = hue_max + 40;

    const source4 = timer(ms_delay);
    const subscribe4 = source4.subscribe(val => this.updateFirworkColors(70, 100));

    ms_delay = ms_delay + delay_increment;
    hue_max = hue_max + 40;

    const source5 = timer(ms_delay);
    const subscribe5 = source5.subscribe(val => this.updateFirworkColors(100, 140));

    ms_delay = ms_delay + delay_increment;
    hue_max = hue_max + 40;

    const source6 = timer(ms_delay);
    const subscribe6 = source6.subscribe(val => this.updateFirworkColors(140, 180));

    ms_delay = ms_delay + delay_increment;
    hue_max = hue_max + 40;

    const source7 = timer(ms_delay);
    const subscribe7 = source7.subscribe(val => this.updateFirworkColors(180, 220));

    ms_delay = ms_delay + delay_increment;
    hue_max = hue_max + 40;

    const source8 = timer(ms_delay);
    const subscribe8 = source8.subscribe(val => this.updateFirworkColors(220, 260));

    ms_delay = ms_delay + delay_increment;
    hue_max = hue_max + 40;

    const source9 = timer(ms_delay);
    const subscribe9 = source7.subscribe(val => this.updateFirworkColors(260, 300));

    ms_delay = ms_delay + delay_increment;
    hue_max = hue_max + 40;

    const source10 = timer(ms_delay);
    const subscribe10 = source10.subscribe(val => this.updateFirworkColors(300, 360));

    ms_delay = ms_delay + delay_increment;
    hue_max = hue_max + 40;

    const source11 = timer(ms_delay);
    const subscribe11 = source11.subscribe(val => this.setFinalFireworks());
  }

  public start(): void {
    this.is_button_visible = false;
    this.fireworks?.start()
    this.is_msg_viewable = true;

    const source2 = timer(5000);
    const subscribe2 = source2.subscribe(val => this.is_bday_button_visible = true);

  }

  public finale(): void {

    this.is_msg_viewable = false
    this.is_bday_button_visible = false;
    const source2 = timer(1000);
    const subscribe2 = source2.subscribe(val => this.playFinale());

  }
}


