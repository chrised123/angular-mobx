import { CustomerObject } from '../view-models/customer.view-model';

export class CustomersDummy {
  list: CustomerObject[];

  constructor() {
    this.list = [
      new CustomerObject(
        1,
        'Darlene M Fricke',
        '3292',
        'Parkway Street',
        '',
        'victorville',
        'California',
        '92392',
        'United states',
        'https://randomuser.me/api/portraits/men/1.jpg'
      ),
      new CustomerObject(
        2,
        'Arthur D Romero',
        '4556',
        'Pursglove Court',
        '',
        'Dayton',
        'Ohio',
        '45402',
        'United states',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ),
      new CustomerObject(
        3,
        'Douglas L Zamora',
        '1706',
        'Marshville Road',
        '',
        'Spring valley',
        'New York',
        '10977',
        'United states',
        'https://randomuser.me/api/portraits/men/3.jpg'
      ),
      new CustomerObject(
        4,
        'Chris Edward',
        'Blk80',
        'Edelweiss condo',
        'Flora road',
        'Singapore',
        'Singapore',
        '506998',
        'Singapore',
        'https://randomuser.me/api/portraits/men/4.jpg'
      ),
      new CustomerObject(
        5,
        'Sanjith Edward',
        'Blk80',
        'Edelweiss condo',
        'Flora road',
        'Colombo',
        'Western',
        '506998',
        'singapore',
        'https://randomuser.me/api/portraits/men/5.jpg'
      ),
      new CustomerObject(
        6,
        'Sanjith Edward',
        'Blk80',
        'Edelweiss condo',
        'Flora road',
        'singapore',
        '',
        '506998',
        'singapore',
        'https://randomuser.me/api/portraits/men/6.jpg'
      ),
      new CustomerObject(
        7,
        'Chris Edward',
        'Blk80',
        'Edelweiss condo',
        'Flora road',
        'Phoenix',
        'Arizona',
        '506998',
        'United states',
        'https://randomuser.me/api/portraits/men/7.jpg'
      ),
      new CustomerObject(
        8,
        'Sanjith Edward',
        'Blk80',
        'Edelweiss condo',
        'Flora road',
        'Colombo',
        'Western',
        '506998',
        'singapore',
        'https://randomuser.me/api/portraits/men/8.jpg'
      ),
      new CustomerObject(
        9,
        'Sanjith Edward',
        'Blk80',
        'Edelweiss condo',
        'Flora road',
        'singapore',
        '',
        '506998',
        'singapore',
        'https://randomuser.me/api/portraits/men/9.jpg'
      )
    ];
  }
}
