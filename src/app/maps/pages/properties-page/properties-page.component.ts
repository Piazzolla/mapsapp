import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './properties-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesPageComponent { }
