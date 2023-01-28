import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements AfterViewInit {
  @Input() maxValue: number = 10000;
  @Input() currentValue: number = 1000;
  @Input() step: number = 0;
  @Input() title: string = '';
  @Input() color: string = '#9854CB'
  public progressPercent: string = `${(this.currentValue / this.maxValue) * 100}%`;

  @ViewChild('filledpart') progress: ElementRef;

  constructor(private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.progress.nativeElement, 'width', this.progressPercent);
    this.renderer.setStyle(this.progress.nativeElement, 'background', this.color);
  }
}
