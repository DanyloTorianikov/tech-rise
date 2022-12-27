import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { IUser } from '@interfaces/user.interface';

@Directive({
  selector: '[appShowForAdmin]'
})
export class ShowForAdminDirective implements OnChanges {
  @Input() public user!: IUser;
  @Input() public onlyForSuperAdmin: boolean = false;
  @Input() public notShowForAdmin: boolean = false;

  constructor(private element: ElementRef) { }

  public ngOnChanges(): void {
    const userIsAdmin = this.user?.roles?.some((role: string) => (!this.onlyForSuperAdmin && role === 'ADMIN') || role === 'SUPER_ADMIN');
    if (!userIsAdmin && !this.notShowForAdmin) {
      this.element.nativeElement.style.display = 'none';
    }

    if (userIsAdmin && this.notShowForAdmin) {
      this.element.nativeElement.style.display = 'none';
    }
  }
}
