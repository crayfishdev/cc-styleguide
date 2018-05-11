import { OnInit, Input, Directive, Output, EventEmitter, OnDestroy, ChangeDetectorRef, ElementRef, Optional } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AccordianDirective } from './accordian.directive';

@Directive({
  selector: '[uxdAccordianItem]',
  exportAs: 'uxdAccordianItem'
})
export class AccordianItemDirective implements OnInit, OnDestroy {
  private _openCloseAllStream: Subscription = Subscription.EMPTY;

  @Output() opened: EventEmitter<void> = new EventEmitter<void>();
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();

  @Output() expandedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  get expanded(): boolean { return this._isExpanded; }
  set expanded(isExpanded: boolean) {
    if (this._isExpanded !== isExpanded) {
      this._isExpanded = isExpanded;
      this.expandedChanged.emit(isExpanded);

      if (isExpanded) {
        this.opened.emit();
      } else {
        this.closed.emit();
      }

      this._changeDetectorRef.markForCheck();
    }
  }
  private _isExpanded: boolean = false;

  public toggle(): void {
    this.expanded = !this._isExpanded;
  }

  public open(): void {
    this.expanded = true;
  }

  public close(): void {
    this.expanded = false;
  }

  private _subscribeToOpenCloseStream(): Subscription {
    return this.accordian._openCloseAllStream.subscribe((isExpaned: boolean) => {
      console.log(isExpaned);
      this.expanded = isExpaned;
    });
  }

  constructor(@Optional() public accordian: AccordianDirective,
    public elRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) {
      if (accordian && accordian._openCloseAllStream) {
        this._openCloseAllStream = this._subscribeToOpenCloseStream();
      }
    }

  ngOnInit() {  }

  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.expandedChanged.complete();
    this._openCloseAllStream.unsubscribe();
  }

}
