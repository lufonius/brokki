import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { ReactComponentComponent } from './react-component/react-component.component';

@NgModule({
  declarations: [CommonComponent, ReactComponentComponent],
  imports: [
  ],
  exports: [CommonComponent]
})
export class CommonModule { }
