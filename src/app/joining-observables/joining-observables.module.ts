import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JoiningObservablesComponent } from './containers/joining-observables/joining-observables.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: JoiningObservablesComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [JoiningObservablesComponent]
})
export class JoiningObservablesModule {}
