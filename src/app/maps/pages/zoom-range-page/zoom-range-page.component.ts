import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-zoom-range-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './zoom-range-page.component.html',
  styles: `
    :host {
      display: block;
    }

    #map {
      width: 100vw;
      height: 100vh;

    }

    .floating-range {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 999;
      width: 500px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0px 5px 10px rgba(0,0,0, 0.1);
      }

      .floating-content {
        display: flex;
        align-items: center;
      }

      button {
        width: 40px;
      }


    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomRangePageComponent implements AfterViewInit {

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'HTML element not found';

    const map = new mapboxgl.Map({
      accessToken: environment.mapbox_key,
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}


