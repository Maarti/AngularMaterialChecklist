import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { ChecklistComponent } from './checklist.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  declarations: [ChecklistComponent],
  exports: [ChecklistComponent]
})
export class ChecklistModule { }
