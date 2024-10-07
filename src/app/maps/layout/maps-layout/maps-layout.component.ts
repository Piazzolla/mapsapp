import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
    standalone: true,
    templateUrl: './maps-layout.component.html',
    styles: `
    :host {
      display: block;
    }

    maps-side-menu {
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 999;
     /* width: 180px; */

    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        SideMenuComponent
    ],
})
export class MapsLayoutComponent { }
