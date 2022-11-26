import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const SVG_ICONS_PATH = 'assets/images/icons/';

const SVG_ICONS = [
  { name: 'logo', path: SVG_ICONS_PATH + 'logo.svg' }
];

@Injectable()
export class IconsRegistrarService {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) { }

  public registerIcons(): Promise<void> {
    SVG_ICONS.forEach(({ name, path }) => {
      this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(path));
    });
    return Promise.resolve();
  }
}