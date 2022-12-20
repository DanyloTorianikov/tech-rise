import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertService } from '@services/alert.service';
import { AVAILABLE_FORMATS, AVAILABLE_SIZE_PHOTO } from './constants/profile-picture.constant';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureComponent {
  @Output() public emitPhoto: EventEmitter<string> = new EventEmitter<string>();
  @Input() public profilePicture?: string;
  public maxFileSize: number = AVAILABLE_SIZE_PHOTO;
  private availableFormats: string[] = AVAILABLE_FORMATS;

  constructor(
    private cdr: ChangeDetectorRef,
    private alertService: AlertService
  ) { }

  public selectPhoto(selectedPhoto: any): void {
    if (!this.isValidatePhoto(selectedPhoto?.target.files[0])) return;

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.profilePicture = (fileReader.result as string);
      this.emitPhoto.emit(fileReader.result as string);
      this.cdr.markForCheck();
    };

    fileReader.readAsDataURL(selectedPhoto.target.files[0]);
  }

  public deletePhoto(): void {
    this.profilePicture = '';
    this.emitPhoto.emit('');
  }

  private isValidatePhoto(file: File): boolean {
    if (file.size / 1024 / 1024 >= this.maxFileSize) {
      this.showError('Invalid size');
      return false;
    }
    if (!this.availableFormats.includes(file.type.split('/')[1])) {
      this.showError('Invalid format');
      return false;
    }

    return true;
  }

  public get possibleFormats(): string {
    return '.' + this.availableFormats.join(', .');
  }

  private showError(error: string): void {
    this.alertService.onError(error);
  }

}
