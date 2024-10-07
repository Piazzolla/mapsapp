import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'map-mini-map',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './miniMap.component.html',
  styles: `
    :host {
      display: block;
    }

    div {
      width: 100%;
      height: 150px;
      margin: 0px;
      background-color: red;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniMapComponent {
  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;



  ngAfterViewInit() {
    if (!this.divMap?.nativeElement) throw "Map Div not found"
    if (!this.lngLat) throw "LngLat can't be nulll"
    // mapa

    const map = new mapboxgl.Map({
      accessToken: environment.mapbox_key,
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    // marker
    new mapboxgl.Marker().setLngLat( this.lngLat).addTo( map)
  }

}
