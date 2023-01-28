import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { IconProviderService } from "./services/iconProvider/icon-provider.service";
import { MatIconModule } from "@angular/material/icon";
import { SvgIconComponent } from './icon/svg-icon.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardWidgetComponent } from './card-widget/card-widget.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SvgIconComponent,
    SearchBarComponent,
    CardWidgetComponent,
    ProgressBarComponent,
  ],
  exports: [
    NavBarComponent,
    SearchBarComponent,
    CardWidgetComponent,
    ProgressBarComponent,
  ],
  providers: [
    IconProviderService
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class SharedModule { }
