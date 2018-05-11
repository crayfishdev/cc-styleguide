import { Directive, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export enum AccordianType {
  MULTIPLE,
  SINGULAR
}

@Directive({
  selector: '[uxdAccordian]',
  exportAs: 'uxdAccordian'
})
export class AccordianDirective {
  readonly _openCloseAllStream: Subject<boolean> = new Subject<boolean>();

  @Input()
  get type(): AccordianType {
    return this._type;
  }
  set type(accordianType: AccordianType) {
    this._type = accordianType;
  }
  private _type: AccordianType;

  constructor() {
    this._type = this.type || AccordianType.MULTIPLE;
  }

  openAll(): void {
    this._openCloseAll(true);
  }

  closeAll(): void {
    this._openCloseAll(false);
  }

  private _openCloseAll(isExpanded: boolean): void {
    if (this.type === AccordianType.MULTIPLE) {
      this._openCloseAllStream.next(isExpanded);
    }
  }
}
