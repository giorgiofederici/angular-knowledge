import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResetUpdateFormControlsComponent } from './containers/reset-update-form-controls/reset-update-form-controls.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: ResetUpdateFormControlsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [ResetUpdateFormControlsComponent]
})
export class ResetUpdateFormControlsModule {}
