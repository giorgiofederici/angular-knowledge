import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { MaterialModule } from '../../material-module/material.module';

@NgModule({
  declarations: [StockInventoryComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [StockInventoryComponent]
})
export class StockInventoryModule {}
