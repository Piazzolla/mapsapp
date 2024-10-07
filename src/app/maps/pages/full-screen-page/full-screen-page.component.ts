import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../../environments/environment';

//(mapboxgl as any).accessToken = 'pk.eyJ1IjoicGlhenpvbGxhMTIzIiwiYSI6ImNseDkyYjZ5bjJpZWoycXExYTZ3OG92Nm0ifQ.deybHs7sQ2ufl-JmE4gThg';

@Component({
  selector: 'app-full-screen-page',
  standalone: true,
  imports: [
    CommonModule,
    ],
    templateUrl: './full-screen-page.component.html',
    styles: `
    :host {
      display: block;
      }

      div {
        width: 100vw;
        height: 100vh;
        /* background-color: red;*/

        }
        `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class FullScreenPageComponent implements AfterViewInit {


  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'HTML element not found';

    const map = new mapboxgl.Map({
      accessToken: environment.mapbox_key,
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }



}
