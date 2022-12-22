import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableDesktopComponent } from './user-table-desktop.component';

describe('UserTableDesktopComponent', () => {
  let component: UserTableDesktopComponent;
  let fixture: ComponentFixture<UserTableDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTableDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
