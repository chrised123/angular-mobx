import { Order } from './../../../../shared/store/view-models/order.view-model';

export class CustomerOrder extends Order {
  customerName: string;
  customerUrl: string;
  customerImage: string;

  constructor(order: Order, name, id, image) {
    super(order.id, order.name, order.description);
    this.customerName = name;
    this.customerUrl = '/app/customer/id/' + id;
    this.customerImage = image;
  }
}
