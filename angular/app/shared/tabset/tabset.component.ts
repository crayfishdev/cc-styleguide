import { Component, OnInit, Directive, Input, ContentChild, ContentChildren, QueryList, TemplateRef, Output , EventEmitter, AfterContentChecked} from '@angular/core';

let nextId = 0;

@Directive({ selector: 'ng-template[tabTitle]'})
export class TabTitleDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({ selector: 'ng-template[tabContent]'})
export class TabContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({ selector: 'cc-tab'})
export class TabDirective implements OnInit {

  /** Unique tab id; used in HTML as an id attribute */
  @Input() id: string;

  @ContentChild(TabTitleDirective) tabTitle: TabTitleDirective;
  @ContentChild(TabContentDirective) tabContent: TabContentDirective;

  ngOnInit() {
    this.id = this.id || `tab-${nextId++}`;
  }
}


@Component({
  selector: 'cc-tabset',
  template: `
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item nav-tabs__item" *ngFor="let tab of tabs">
      <button class="tab-button" [class.active]="tab.id === activeTabId"
        [id]="tab.id" role="tab" [attr.aria-expanded]="tab.id === activeTabId" 
        (click)="selectTab(tab.id)">
        <ng-container *ngTemplateOutlet="tab.tabTitle?.templateRef"></ng-container>
      </button>
    </li>
  </ul>
  <div class="tab-content">
    <ng-container *ngFor="let tab of tabs">
      <div class="tab-pane" [class.active]="tab.id === activeTabId"
        role="tabpanel" [attr.aria-labelledby]="tab.id"  [attr.aria-expanded]="tab.id === activeTabId">
        <ng-container *ngTemplateOutlet="tab.tabContent?.templateRef"></ng-container>
      </div>
    </ng-container>
  </div>
  `,
})
export class TabsetComponent implements OnInit, AfterContentChecked {
  @Input() activeTabId: string;

  @ContentChildren(TabDirective) tabs: QueryList<TabDirective>;

    /**
   * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
   */
  @Output() tabChange = new EventEmitter<any>();

  constructor() {
    this.activeTabId = 'tab-0';
  }

  ngOnInit() {}

  ngAfterContentChecked() {
    const activeTab = this._getTabById(this.activeTabId);
    this.activeTabId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
  }

  public selectTab(tabId: string): void {
    const selectedTab = this._getTabById(tabId);
    this.tabChange.emit(true);
    if (selectedTab && this.activeTabId !== selectedTab.id) {
      this.activeTabId = selectedTab.id;
    }
  }

  private _getTabById(tabId: string): TabDirective {
    const tabsWithId: TabDirective[] = this.tabs.filter(tab => tab.id === tabId);
    return tabsWithId.length ? tabsWithId[0] : null;
  }

}
