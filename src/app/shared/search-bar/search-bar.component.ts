import { Component, ViewEncapsulation } from '@angular/core';
import { mdiMagnify } from '@mdi/js';
import { IconData, IconSize } from '../services/iconProvider/icon-list';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchBarComponent {
  public searchIcon: IconData = new IconData(mdiMagnify, 'rgba(0, 0, 0, 0.4)', IconSize.Small);

}
