import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  MatToolbarModule

  ],
  exports:[
  MatProgressSpinnerModule,
  MatToolbarModule

  ]
})
export class MaterialModule { }
