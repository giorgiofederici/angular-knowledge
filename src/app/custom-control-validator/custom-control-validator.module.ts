import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomControlValidatorComponent } from './containers/custom-control-validator/custom-control-validator.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: CustomControlValidatorComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [CustomControlValidatorComponent]
})
export class CustomControlValidatorModule {}
