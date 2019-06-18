import { Address } from './address.view-model';

export class CustomerObject {

  name: string;
  address: Address;
  image: string;
  constructor(name, addressLine1, addressLine2, addressLine3, city, state, zipcode, country, image) {
    this.name = name;
    this.address = new Address(addressLine1, addressLine2, addressLine3, city, state, zipcode, country);
    this.image = image;
  }
}
