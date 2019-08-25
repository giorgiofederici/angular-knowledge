import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormControlBaseComponent } from './containers/custom-form-control-base/custom-form-control-base.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: CustomFormControlBaseComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [CustomFormControlBaseComponent]
})
export class CustomFormControlBaseModule {}
