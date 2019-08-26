import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormGroupValidatorComponent } from './containers/custom-formgroup-validator/custom-formgroup-validator.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: CustomFormGroupValidatorComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [CustomFormGroupValidatorComponent]
})
export class CustomFormGroupValidatorModule {}
