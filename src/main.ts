import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import localeCs from '@angular/common/locales/cs';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeCs)

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
