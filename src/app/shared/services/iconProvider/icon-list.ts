import { mdiFireCircle } from '@mdi/js';
import { mdiChartDonutVariant } from '@mdi/js';
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js';
import { mdiChatOutline } from '@mdi/js';
import { mdiFaceManProfile } from '@mdi/js';
import { mdiCogOutline } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';

export enum IconSize {
  Small,
  Medium,
  Large,
  Huge
}

export class IconData {
  constructor(public path: string, public color: string, public size: IconSize) {

  }
}

export var navBarIconList: IconData[] = [
  new IconData(mdiFireCircle, '#DDACF5', IconSize.Large),
  new IconData(mdiChartDonutVariant, '#9854CB', IconSize.Huge),
  new IconData(mdiCheckboxMarkedCircleOutline, '#27104E', IconSize.Small),
  new IconData(mdiChatOutline, '#27104E', IconSize.Small),
  new IconData(mdiFaceManProfile, '#27104E', IconSize.Small),
  new IconData(mdiCogOutline, '#27104E', IconSize.Small),
];
