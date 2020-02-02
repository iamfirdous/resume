import { Component, OnInit, NgZone } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
import { map } from 'rxjs/operators';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '108px',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ])
  ]
})
export class HeaderComponent implements OnInit {

  private readonly SHRINK_TOP_SCROLL_POSITION: number = 400;
  hideToolbar: boolean = false;

  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.scrollDispatcher.scrolled()
      .pipe(map((event: CdkScrollable) => this.getScrollPosition(event)))
      .subscribe((scrollTop: number) => this.ngZone.run(() => this.hideToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION));
  }

  getScrollPosition(event: CdkScrollable): number {
    return event ? event.getElementRef().nativeElement.scrollTop : window.scrollY;
  }

}
