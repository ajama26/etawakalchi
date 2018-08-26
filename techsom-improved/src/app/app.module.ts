import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AppService } from './serv-int-cla/app.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DaynComponent } from './dayn/dayn.component';
import { AmanoComponent } from './amano/amano.component';
import { BalanceComponent } from './balance/balance.component';
import { HistoryComponent } from './history/history.component';
import { ComComponent } from './com/com.component';
import { LandingComponent } from './landing/landing.component';
import { OperationsComponent } from './operations/operations.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { 
  FilterPipe, 
  FiltersPipe, 
  FiltPipe, 
  AmfilterPipe, 
  EntryPipe, 
  FilterCashPipe, 
  FilterCheckOnePipe, 
  FilterCheckTwoPipe, 
  FilterCashDesPipe, 
  TotalPipe, 
  FilPipe, 
  AmFilPipe, 
  FilterPipe_dayn } from './serv-int-cla/filter.pipe';
import { AuthService } from './auth.service';
import { AuthManager } from './authmanager.service';




@NgModule({
  declarations: [
    AppComponent,
    FilterPipe_dayn, 
    DaynComponent, 
    AmanoComponent, 
    BalanceComponent, 
    HomeComponent, 
    FilterPipe, 
    FilterPipe, 
    FiltersPipe, 
    FiltPipe, 
    AmfilterPipe, 
    EntryPipe, 
    FilterCashPipe, 
    FilterCheckOnePipe, 
    FilterCheckTwoPipe, 
    FilterCashDesPipe, 
    TotalPipe, 
    FilPipe, 
    AmFilPipe, 
    FilterPipe, 
    HistoryComponent, 
    ComComponent, 
    OperationsComponent,
    LandingComponent, 
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [AppService, AuthService, AuthManager, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
