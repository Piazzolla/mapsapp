import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-full-screen-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './full-screen-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullScreenPageComponent { }
