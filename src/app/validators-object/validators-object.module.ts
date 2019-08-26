import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorsObjectComponent } from './containers/validators-object/validators-object.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: ValidatorsObjectComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [ValidatorsObjectComponent]
})
export class ValidatorsObjectModule {}
