import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import {ModalModule} from 'ngx-bootstrap';

import {ToolbarComponent} from './toolbar/toolbar.component';
import {SidenavComponent} from './sidenav/sidenav.component';

import {HomeComponent} from './home/home.component';
import {TaskComponent} from './task/task.component';
import {PageNotFoundComponent} from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

