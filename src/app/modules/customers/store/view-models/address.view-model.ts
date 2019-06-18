export class Address {
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;

  constructor(addressLine1, addressLine2, addressLine3, city, state, zipcode, country) {
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.addressLine3 = addressLine3;
    this.city = city ? city : 'singapore';
    this.state = state ? state : 'singapore';
    this.zipcode = zipcode;
    this.country = country ? country : 'singapore';
  }
}
