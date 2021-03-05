import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
//Components
import { LoginComponent } from './domain/views/login/login.component';
import { MaxlengthPipe } from './domain/pipes/maxlength.pipe';
import { NotFoundPage } from "./domain/views/notFound/notFound.component";
import { RegisterComponent } from './domain/views/register/register.component';
import { ToFormatPhonePipe } from './domain/pipes/to-format-phone.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';

//Libraries
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { HomeComponent } from './domain/views/home/home.component';
import { DishcardComponent } from './domain/components/dishcard/dishcard.component';
import { NavbarComponent } from './domain/components/navbar/navbar.component';
import { DishComponent } from './domain/views/dish/dish.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaxlengthPipe,
    RegisterComponent,
    NotFoundPage,
    ToFormatPhonePipe,
    HomeComponent,
    DishcardComponent,
    NavbarComponent,
    DishComponent 
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebas),
    AngularFireAuthModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
