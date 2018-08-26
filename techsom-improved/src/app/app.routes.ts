import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DaynComponent } from './dayn/dayn.component';
import { AmanoComponent } from './amano/amano.component';
import { BalanceComponent } from './balance/balance.component';
import { HistoryComponent } from './history/history.component';
import { ComComponent } from './com/com.component';
import { LandingComponent } from './landing/landing.component';
import { OperationsComponent } from './operations/operations.component';
import {AuthManager} from './authmanager.service';


const APP_ROUTES: Routes = [
    {path: '', component: LandingComponent, canActivate: [AuthManager]},
    {path: 'home', component: LandingComponent, canActivate: [AuthManager]},
    {path: 'checks-cash', component: HomeComponent, canActivate: [AuthManager]},
    {path: 'dayn', component: DaynComponent, canActivate: [AuthManager]},
    {path: 'accounts', component: AmanoComponent, canActivate: [AuthManager]},
    {path: 'balance', component: BalanceComponent, canActivate: [AuthManager]},
    {path: 'history', component: HistoryComponent, canActivate: [AuthManager]},
    {path: 'comm', component: ComComponent, canActivate: [AuthManager]},
    {path: 'operations', component: OperationsComponent, canActivate: [AuthManager]},
];

export const APP_ROUTES_PROVIDER: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


