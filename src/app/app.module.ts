import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './domain/views/login/login.component';
import { MaxlengthPipe } from './domain/pipes/maxlength.pipe';
import { RegisterComponent } from './domain/views/register/register.component';
import { NotFoundPage } from "./domain/views/notFound/notFound.component";
import { ToFormatPhonePipe } from './domain/pipes/to-format-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaxlengthPipe,
    RegisterComponent,
    NotFoundPage,
    ToFormatPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
