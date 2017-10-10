import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { RoutePartsService } from './services/route-parts/route-parts.service';
import { NavigationService } from './services/navigation/navigation.service';
import { AuthService } from './services/auth/auth.service';
import { AppCommonModule } from './components/common/app-common.module';

// export function createTranslateLoader(http: Http) {
//   return new TranslateStaticLoader(http, './assets/i18n', '.json');
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    AppCommonModule,
    // TranslateModule.forRoot({
    //   provide: TranslateLoader,
    //   useFactory: (createTranslateLoader),
    //   deps: [Http]
    // }),
  ],
  // providers: [RoutePartsService, NavigationService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
