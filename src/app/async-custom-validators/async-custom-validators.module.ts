import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsyncCustomValidatorsComponent } from './containers/async-custom-validators/async-custom-validators.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: AsyncCustomValidatorsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [AsyncCustomValidatorsComponent]
})
export class AsyncCustomValidatorsModule {}
