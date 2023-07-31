import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { LeftcardComponent } from './leftcard/leftcard.component';
import { RightcardComponent } from './rightcard/rightcard.component';
import { FullcardComponent } from './fullcard/fullcard.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LeftcardComponent,
    RightcardComponent,
    FullcardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,MatCardModule,MatToolbarModule,MatIconModule,MatDatepickerModule,MatGridListModule,MatButtonModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
