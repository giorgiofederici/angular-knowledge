import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormControlFormGroupComponent } from './containers/form-control-form-group/form-control-form-group.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: FormControlFormGroupComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [FormControlFormGroupComponent]
})
export class FormControlFormGroupModule {}
