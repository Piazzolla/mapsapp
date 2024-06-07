import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mini-map',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './miniMap.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniMapComponent { }
