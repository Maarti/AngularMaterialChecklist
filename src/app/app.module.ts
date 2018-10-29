import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChecklistModule } from 'checklist';

const routes: Routes = [
  { path: 'demo', component: AppComponent },
  { path: '**', redirectTo: '/demo', }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ChecklistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
