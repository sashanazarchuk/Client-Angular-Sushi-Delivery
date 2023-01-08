import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { CreateFoodComponent } from './components/create-food/create-food.component';
import { MainComponent } from './components/main/main.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
import { PipesPipe } from './pipes/pipes.pipe';
import { HeaderComponent } from './components/header/header.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { CartComponent } from './components/cart/cart.component';
import { AddresComponent } from './components/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CreateFoodComponent,
    MainComponent,
    PipesPipe,
    HeaderComponent,
    DeliveryComponent,
    CartComponent,
    AddresComponent

  ],
  imports: [
    AccordionModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    TabMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
