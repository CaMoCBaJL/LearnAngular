import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IconData, navBarIconList } from "./icon-list";

@Injectable()
export class IconProviderService {

  public dataStream: Observable<IconData[]>;
  constructor() {
    this.dataStream = new Observable<IconData[]>(subscriber =>
      subscriber.next(navBarIconList));
  }
}
