import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyFormComponent } from './reactive-form/my-form/my-form.component';


import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { MessageSenderComponent } from './message-sender/message-sender.component';
import { MessageReceiverComponent } from './message-receiver/message-receiver.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MyFormComponent,
    MessageSenderComponent,
    MessageReceiverComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MessageService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
