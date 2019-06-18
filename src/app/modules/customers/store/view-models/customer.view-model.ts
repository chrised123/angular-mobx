import { Address } from './address.view-model';
import { Order } from 'src/app/shared/store/view-models/order.view-model';

export class CustomerObject {
  id: any;
  name: string;
  address: Address;
  image: string;
  orders: Order[];
  constructor(id, name, addressLine1, addressLine2, addressLine3, city, state, zipcode, country, image) {
    this.id = id;
    this.name = name;
    this.address = new Address(addressLine1, addressLine2, addressLine3, city, state, zipcode, country);
    this.image = image;
    const orders = [
      new Order(Math.floor(Math.random() * 1000), 'Test order', 'Test description'),
      new Order(Math.floor(Math.random() * 1000), 'Test order', 'Test description'),
      new Order(Math.floor(Math.random() * 1000), 'Test order', 'Test description'),
      new Order(Math.floor(Math.random() * 1000), 'Test order', 'Test description'),
      new Order(Math.floor(Math.random() * 1000), 'Test order', 'Test description')
    ]
    this.orders = orders;
  }
}
