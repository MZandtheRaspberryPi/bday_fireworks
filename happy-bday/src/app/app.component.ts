import { Component, AfterViewInit, ViewChild } from '@angular/core'

import { trigger, query, animateChild, transition, animate } from '@angular/animations';
import { timer, delay, Observable, of, max, observable, Subscription } from 'rxjs';
import type {
  FireworksDirective,
  FireworksOptions
} from '@fireworks-js/angular'

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

  ngAfterViewInit(): void {

    this.waitStop();
  }

  @ViewChild('fireworks') fireworks?: FireworksDirective

  public waitStop(): void {
    this.fireworks?.waitStop()
  }

  private playFinale(): void {
    let hue_max: number = 120;
    source: Observable;
    sub: Subscription;
    while (hue_max < 360) {
      hue_max = hue_max + 20;
      this.options = {
        opacity: 0.7,
        hue: {
          min: hue_max - 20,
          max: hue_max
        },
        rocketsPoint: {
          min: 10,
          max: 10
        },
      }
      this.fireworks?.updateOptions(this.options);
      let source = timer(500);
      let subscribe = source.subscribe(val => this.enabled);
    }

    this.options = {
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
        min: 10,
        max: 90
      },
      particles: 200
    }
  }

  public start(): void {
    this.is_button_visible = false;
    this.fireworks?.start()
    this.is_msg_viewable = true;

    const source = timer(10000);
    const subscribe = source.subscribe(val => this.is_msg_viewable = false);

    const source2 = timer(12000);
    const subscribe2 = source2.subscribe(val => this.playFinale());

  }
}


