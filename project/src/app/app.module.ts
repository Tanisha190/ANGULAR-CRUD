import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { NewTeacherComponent } from './new-teacher/new-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    NewTeacherComponent,
    ListTeacherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
