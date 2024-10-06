import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import mapboxgl, { LngLat, Marker } from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

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
      bottom: 30px;
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

  public markers: MarkerAndColor[] = [];

  public zoom: number = 13;
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


  createMarker() {

    if(!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker( lngLat, color);
  }

  addMarker( lngLat: LngLat, color: string ) {
    if(!this.map) return;
    const marker = new Marker( {
      color: color,
      draggable: true
    }).setLngLat( lngLat)
      .addTo(this.map);

    this.markers.push({color, marker});
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1)
  }

  flyTo( marker: Marker ) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    });
  }

}
