import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubcompComponent } from './subcomp/subcomp.component';
import { FormsModule } from '@angular/forms';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SeccompComponent } from './seccomp/seccomp.component';

@NgModule({
  declarations: [
    AppComponent,
    SubcompComponent,
    FirstcompComponent,
    SeccompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
