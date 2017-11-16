import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safeurl.pipe';


@NgModule({
    declarations:[
        SafePipe
    ],
  exports: [
    SafePipe
  ]
})
export class ExternalModule { }
