import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanUserPopupComponent } from './ban-user-popup.component';

describe('BanUserPopupComponent', () => {
  let component: BanUserPopupComponent;
  let fixture: ComponentFixture<BanUserPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanUserPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanUserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
