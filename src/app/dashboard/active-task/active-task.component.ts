import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild, } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.css']
})
export class ActiveTaskComponent implements AfterViewInit {
  @Input() lastUpdate: moment.Moment;
  @Input() title: string;
  @Input() taskCurrentStep: string;
  @Input() releaseDate: moment.Moment;
  @Input() contributors: string[];
  @Input() leftDaysBackground: string;
  @Input() leftDaysColor: string;
  public daysTillEnd: number;

  @ViewChild('leftDays') _leftDaysIndicator: ElementRef;

  constructor(private _renderer: Renderer2) {
    this.lastUpdate = moment();
    this.title = 'test title';
    this.taskCurrentStep = 'test task step';
    this.daysTillEnd = this.releaseDate ? this.releaseDate.diff(moment()) : 1;
    this.releaseDate = this.releaseDate ? this.releaseDate : moment();
    this.contributors = ['1', '2', '3'];
  }

  ngAfterViewInit(): void {
    this._renderer.setStyle(this._leftDaysIndicator.nativeElement, 'background', this.leftDaysBackground);
    this._renderer.setStyle(this._leftDaysIndicator.nativeElement, 'color', this.leftDaysColor);
  }
}
