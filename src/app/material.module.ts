import {NgModule} from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatGridListModule
  ],
  providers: [],
  exports: [
    MatSelectModule,
    MatGridListModule
  ]
})
export class MaterialModule{}
