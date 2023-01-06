import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BREAKPOINTS } from '@constants/breakpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  private readonly isDesktop$: Observable<boolean>;
  private readonly isMobile$: Observable<boolean>;
  private readonly isTablet$: Observable<boolean>;
  private readonly isSmallTablet$: Observable<boolean>;

  private readonly desktopQuery: string = `(max-width: ${BREAKPOINTS.xl})`;
  private readonly tabletQuery: string = `(max-width: ${BREAKPOINTS.md})`;
  private readonly smallTabletQuery: string = `(max-width: ${BREAKPOINTS.sm})`;
  private readonly mobileQuery: string = `(max-width: ${BREAKPOINTS.xs})`; 

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.isDesktop$ = this.breakpointObserver.observe(this.desktopQuery).pipe(
      map(({matches}: BreakpointState) => matches),
      shareReplay(1)
    );

    this.isMobile$ = this.breakpointObserver.observe(this.mobileQuery).pipe(
      map(({matches}: BreakpointState) => matches),
      shareReplay(1)
    );

    this.isTablet$ = this.breakpointObserver.observe(this.tabletQuery).pipe(
      map(({matches}: BreakpointState) => !matches),
      shareReplay(1)
    );

    this.isSmallTablet$ = this.breakpointObserver.observe(this.smallTabletQuery).pipe(
      map(({matches}: BreakpointState) => matches),
      shareReplay(1)
    );
  }

  public isDesktop(): Observable<boolean> {
    return this.isDesktop$;
  }

  public isMobile(): Observable<boolean> {
    return this.isMobile$;
  }

  public isTablet(): Observable<boolean> {
    return this.isTablet$;
  }

  public isSmallTablet(): Observable<boolean> {
    return this.isSmallTablet$;
  }
}
