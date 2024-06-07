import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomRangePageComponent { }
