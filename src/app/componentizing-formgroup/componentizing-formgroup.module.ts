import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentizingFormGroupComponent } from './containers/componentizing-formgroup/componentizing-formgroup.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const ROUTES: Routes = [
  {
    path: '',
    component: ComponentizingFormGroupComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), StockInventoryModule],
  declarations: [ComponentizingFormGroupComponent]
})
export class ComponentizingFormGroupModule {}
