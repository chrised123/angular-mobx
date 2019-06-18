export class NavItems {
    items: any = [
        {
            id: 'customers',
            innerHTML: '',
            class: '',
            navClass: 'nav-link',
            module: 'Customers',
            link: ['/app/customer']
        }, {
            id: 'orders',
            innerHTML: '',
            class: '',
            navClass: 'nav-link',
            module: 'Orders',
            link: ['/app/orders']
        }, {
            id: 'about',
            innerHTML: '',
            class: '',
            navClass: 'nav-link',
            module: 'About',
            link: 'javascript:void(0)'
        }, {
            id: 'login',
            innerHTML: '',
            class: '',
            navClass: 'nav-link',
            module: 'Login',
            link: 'javascript:void(0)'
        }
    ];
    constructor() {
    }
}
