import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app-root/app.component';
import { HomePageComponent } from './views/home-page/home-page.component'
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { TransferFundsComponent } from './views/transfer-funds/transfer-funds.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { AboutComponent } from './cmps/about/about.component';
import { ChartsComponent } from './views/charts/charts.component';
import { MarketPriceChartComponent } from './cmps/market-price-chart/market-price-chart.component';
import { NTransactionsComponent } from './cmps/n-transactions/n-transactions.component';
import { AvgBlockSizeComponent } from './cmps/avg-block-size/avg-block-size.component';
import { ChartComponent } from './cmps/chart/chart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppHeaderComponent,
    ContactIndexComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactEditComponent,
    ContactDetailsComponent,
    SignupComponent,
    TransferFundsComponent,
    MovesListComponent,
    ContactFilterComponent,
    AppFooterComponent,
    AboutComponent,
    ChartsComponent,
    MarketPriceChartComponent,
    NTransactionsComponent,
    AvgBlockSizeComponent,
    ChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
