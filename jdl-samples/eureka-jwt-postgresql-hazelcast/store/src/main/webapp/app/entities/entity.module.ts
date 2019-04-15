import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: './crm/product/product.module#CrmProductModule'
      },
      {
        path: 'customer',
        loadChildren: './crm/customer/customer.module#CrmCustomerModule'
      },
      {
        path: 'product-order',
        loadChildren: './crm/product-order/product-order.module#CrmProductOrderModule'
      },
      {
        path: 'order-item',
        loadChildren: './crm/order-item/order-item.module#CrmOrderItemModule'
      },
      {
        path: 'invoice',
        loadChildren: './accountancy/invoice/invoice.module#AccountancyInvoiceModule'
      },
      {
        path: 'shipment',
        loadChildren: './accountancy/shipment/shipment.module#AccountancyShipmentModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreEntityModule {}
