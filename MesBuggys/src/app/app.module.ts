import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BuggysComponent } from './buggys/buggys.component';
import { AddBuggyComponent } from './add-buggy/add-buggy.component';
import { FormsModule } from '@angular/forms';
import { UpdateBuggyComponent } from './update-buggy/update-buggy.component';
@NgModule({
  declarations: [
    AppComponent,
    BuggysComponent,
    AddBuggyComponent,
    UpdateBuggyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
