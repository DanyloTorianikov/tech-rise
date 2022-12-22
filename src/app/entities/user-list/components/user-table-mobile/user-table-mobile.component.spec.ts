import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableMobileComponent } from './user-table-mobile.component';

describe('UserTableMobileComponent', () => {
  let component: UserTableMobileComponent;
  let fixture: ComponentFixture<UserTableMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTableMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
