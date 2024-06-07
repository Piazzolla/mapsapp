import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './side-menu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent { }
