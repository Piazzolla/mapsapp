import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'maps-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './side-menu.component.html',
  styles: `
    :host {
      display: block;
    }

  li {
    cursor: pointer;
    transition: 0.2s all;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {

  public menuItems: MenuItem[] =[
    {route: '/maps/fullscreen', name: 'FullScreen'},
    {route: '/maps/zoom-range', name: 'ZoomRange'},
    {route: '/maps/markers', name: 'Markers'},
    {route: '/maps/properties', name: 'Houses'},
]

 }
