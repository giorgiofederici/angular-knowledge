import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ValueChangesObservablesComponent } from './containers/value-changes-observables/value-changes-observables.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: ValueChangesObservablesComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [ValueChangesObservablesComponent]
})
export class ValueChangesObservablesModule {}
