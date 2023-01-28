import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'card-widget',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.css']
})
export class CardWidgetComponent implements OnInit {
  @Input() width: string;

  constructor(private _hostElem: ElementRef,
    private _renderer: Renderer2) {

  }

  ngOnInit(): void {
    this._renderer.setStyle(this._hostElem.nativeElement, 'min-width', this.width);
  }
}
