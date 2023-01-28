import {Component, ElementRef, OnDestroy, OnInit, ViewChildren, ViewEncapsulation} from '@angular/core';
import { IconProviderService } from "../services/iconProvider/icon-provider.service";
import {Subscription} from "rxjs";
import { IconData, IconSize } from '../services/iconProvider/icon-list';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class NavBarComponent implements OnDestroy{
  public icons: IconData[] = [];
  private subscription: Subscription;

  constructor(private _iconService: IconProviderService) {
    this.subscription = this._iconService.dataStream.subscribe(data => this.icons = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isSmall(size: IconSize): boolean {
    return size === IconSize.Small;
  }
}
