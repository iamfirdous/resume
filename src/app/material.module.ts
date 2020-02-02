import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatButtonToggleModule
} from '@angular/material';

const ALL_MAT_MODULES: any[] = [
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule
];

@NgModule({
  imports: ALL_MAT_MODULES,
  exports: ALL_MAT_MODULES
})
export class MaterialModule { }
