import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRolePopupComponent } from './change-role-popup.component';

describe('ChangeRolePopupComponent', () => {
  let component: ChangeRolePopupComponent;
  let fixture: ComponentFixture<ChangeRolePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeRolePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeRolePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
