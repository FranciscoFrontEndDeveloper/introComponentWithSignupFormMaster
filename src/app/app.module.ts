import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponent } from './components/text/text.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconerrorComponent } from './components/iconerror/iconerror.component';
import { ErrormessgeComponent } from './components/errormessge/errormessge.component';
@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    FormComponent,
    FooterComponent,
    InputComponent,
    IconerrorComponent,
    ErrormessgeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
