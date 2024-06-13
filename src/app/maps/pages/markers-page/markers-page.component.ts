import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import mapboxgl, { LngLat, Marker } from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-markers-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './markers-page.component.html',
  styles: `
    :host {
      display: block;
    }

    #map {
      width: 100vw;
      height: 100vh;
    }

    button {
      position: fixed;
      bottom: 20px;
      right: 20px;
    }

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map')
  public divMap?: ElementRef;

  public zoom: number = 10;
  public map?: mapboxgl.Map;
  public currentLngLat: LngLat = new LngLat(-68.84454230018787, -32.88975864013289);


  constructor(private cdRef: ChangeDetectorRef) { }
  ngAfterViewInit(): void {

    if (!this.divMap) throw 'HTML element not found';

    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox_key,
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });

      // const markerHtml = document.createElement('div');
      // markerHtml.innerHTML = 'Mariano'
      // const marker = new Marker({ element: markerHtml}).setLngLat(this.currentLngLat).addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

}
