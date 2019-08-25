import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { MaterialModule } from '../../material-module/material.module';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';

import { StockInventoryService } from './services/stock-inventory.service';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [StockInventoryService],
  exports: [StockInventoryComponent]
})
export class StockInventoryModule {}
