import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsSubpageComponent } from './components/electronics-subpage/electronics-subpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { KitchenSubpageComponent } from './components/kitchen-subpage/kitchen-subpage.component';
import { MensSubpageComponent } from './components/mens-subpage/mens-subpage.component';
import { AddressComponent } from './user/components/address/address.component';
import { OrdersComponent } from './user/components/orders/orders.component';
import { TrackingComponent } from './user/components/tracking/tracking.component';
import { UserProfileComponent } from './user/components/user-profile/user-profile.component';
import { UserModule } from './user/user.module';

const routes: Routes = [


  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
},
{
    path: 'home',
    component: HomepageComponent
},
{
  path: 'mens',
  component: MensSubpageComponent
},
{
  path: 'elctronics',
  component: ElectronicsSubpageComponent,
  
},
{
  path: 'kitchen',
  component: KitchenSubpageComponent
}
,
{
    path: 'adress',
    component: AddressComponent
},
{
  path: 'profile',
  component:UserProfileComponent
},
{
  path: 'order',
  component: OrdersComponent,
  children:[{path:"tracking",component:TrackingComponent}
  ]
}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
