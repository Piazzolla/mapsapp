import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
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

  public zoom: number = 10;
  public map?: mapboxgl.Map;


  constructor(private cdRef: ChangeDetectorRef) {}
  ngAfterViewInit(): void {

    if (!this.divMap) throw 'HTML element not found';

    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox_key,
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }

  mapListeners() {
    if( !this.map) throw 'Map not initialized';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
//      this.cdRef.detectChanges();
      this.cdRef.markForCheck();
    });

    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18)
      this.cdRef.markForCheck();
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }
  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged( value: string) {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

}


