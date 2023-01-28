import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { IconData, IconSize } from '../services/iconProvider/icon-list';

export var iconSizes = [
  { type: IconSize.Small, class: 'icon__small' },
  { type: IconSize.Medium, class: 'icon__medium' },
  { type: IconSize.Large, class: 'icon__large' },
  { type: IconSize.Huge, class: 'icon__huge' }
];

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css'],
})
export class SvgIconComponent implements AfterViewInit {
  @ViewChild('image') iconImage: ElementRef;
  @Input() iconData: IconData = new IconData('', '', IconSize.Small);

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    let iconSizeData = iconSizes.find(item => item.type === this.iconData.size);

    this.renderer.addClass(
      this.iconImage.nativeElement,
      iconSizeData.class
    );
  }
}
