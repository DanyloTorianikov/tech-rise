import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { ShowForAdminDirective } from './directives/show-for-admin.directive';

const TRANSLATION_CONFIG = {
  loader: {
    provide: TranslateLoader,
    useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
    deps: [HttpClient],
  },
  defaultLanguage: 'en',
};


const COMPONENTS = [
  ButtonComponent,
  TitleComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ShowForAdminDirective
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
    TranslateModule.forRoot(TRANSLATION_CONFIG),
  ],
  exports: [
    ...COMPONENTS,
    MatIconModule,
    ShowForAdminDirective,
    TranslateModule,
  ]
})
export class SharedModule { }
