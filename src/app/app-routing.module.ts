import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { AboutComponent } from './cmps/about/about.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { TransferFundsComponent } from './views/transfer-funds/transfer-funds.component';
import { ChartsComponent } from './views/charts/charts.component';
import { MarketPriceChartComponent } from './cmps/market-price-chart/market-price-chart.component';

const routes: Routes = [
  {path:'',redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactIndexComponent},
  {path:'details/:id',component:ContactDetailsComponent},
  {path:'edit/:id',component:ContactEditComponent},
  {path:'edit',component:ContactEditComponent},
  {path:'transfer-funds/:id',component:TransferFundsComponent},
  {path:'charts',component:ChartsComponent, children:[
    {path:'market-price',component:MarketPriceChartComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
