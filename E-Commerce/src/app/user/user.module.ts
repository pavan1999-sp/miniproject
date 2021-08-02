import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { FilterPipe } from './pipes/filter.pipe';





@NgModule({
  declarations: [
    SideNavbarComponent,
    UserProfileComponent,
    AddressComponent,
  
    OrdersComponent,
    TrackingComponent
    ,FilterPipe
  ],
  imports: [
    CommonModule,HttpClientModule,RouterModule,AngmaterialModule
  ],providers:[],
  exports:[SideNavbarComponent,OrdersComponent,UserProfileComponent,TrackingComponent]
})
export class UserModule { }
