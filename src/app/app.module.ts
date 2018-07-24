import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import 'hammerjs';

import { AppComponent } from './app.component'

import { NotificationService } from './services/notification/notification.service';

import { AppRouting } from './app.routing';


import { NotificationComponent } from './components/notification/notification.component';
import { NotificationDetailComponent } from './components/notification-detail/notification-detail.component';


// setting application to production mode
enableProdMode();

@NgModule({
  declarations: [
    // Registering Components
    AppComponent,
    NotificationComponent,
    NotificationDetailComponent,

  ],
  imports: [
     // Registering modules
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    ChartsModule,
    GridModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    DialogsModule,
    LabelModule,
    DateInputsModule,
    InputsModule,

    // Registering Routing:
    AppRouting,

  
  ],
  providers: [

    // Registering Services:
    NotificationService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
