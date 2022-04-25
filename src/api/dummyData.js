import {gradient} from '../config/colors';

export const dummyData = {
  products: [
    {
      title: 'Product 1',
      price: '39.00',
      image: require('../assets/products/product_1.jpg'),
    },
    {
      title: 'Product 2',
      price: '7.00',
      image: require('../assets/products/product_2.jpg'),
    },
    {
      title: 'Product 3',
      price: '3.00',
      image: require('../assets/products/product_3.jpg'),
    },
    {
      title: 'Product 4',
      price: '227.00',
      image: require('../assets/products/product_4.jpg'),
    },
    {
      title: 'Product 5',
      price: '292.00',
      image: require('../assets/products/product_5.jpg'),
    },
    {
      title: 'Product 6',
      price: '129.00',
      image: require('../assets/products/product_6.jpg'),
    },
    {
      title: 'Product 7',
      price: '290.00',
      image: require('../assets/products/product_7.jpg'),
    },
    {
      title: 'Product 8',
      price: '120.00',
      image: require('../assets/products/product_8.jpg'),
    },
    {
      title: 'Product 9',
      price: '291.00',
      image: require('../assets/products/product_9.jpg'),
    },
    {
      title: 'Product 10',
      price: '91.00',
      image: require('../assets/products/product_10.jpg'),
    },
    {
      title: 'Product 11',
      price: '21.00',
      image: require('../assets/products/product_11.jpg'),
    },
  ],

  categories: [
    {id: 1, text: 'Woman', colors: gradient.blue},
    {id: 2, text: 'Man', colors: gradient.red},
    {id: 3, text: 'Kids', colors: gradient.green},
    {id: 4, text: 'Recent', colors: gradient.blue},
    {id: 5, text: 'All', colors: gradient.red},
  ],

  subCategories: [
    {
      id: 1,
      text: 'T-Shirts',
      colors: gradient.blue,
      image: require('../assets/products/product_12.jpg'),
    },
    {
      id: 2,
      text: 'Jackets',
      colors: gradient.red,
      image: require('../assets/products/product_12.jpg'),
    },
    {
      id: 3,
      text: "Men's Sets",
      colors: gradient.green,
      image: require('../assets/products/product_12.jpg'),
    },
    {
      id: 4,
      text: 'Sweater',
      colors: gradient.blue,
      image: require('../assets/products/product_12.jpg'),
    },
    {
      id: 5,
      text: 'Suits',
      colors: gradient.red,
      image: require('../assets/products/product_12.jpg'),
    },
    {
      id: 6,
      text: 'Coats',
      colors: gradient.blue,
      image: require('../assets/products/product_12.jpg'),
    },
    {
      id: 7,
      text: 'Jeans',
      colors: gradient.red,
      image: require('../assets/products/product_12.jpg'),
    },
  ],

  brands: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

  currencyOptinos: [
    {title: 'Us Dollor', id: 1},
    {title: 'Euro', id: 2},
  ],
  languageOptions: [
    {title: 'English', id: 1},
    {title: 'Arabic', id: 2},
    {title: 'French', id: 3},
  ],
  carouselItems: [
    {id: 1, image: require('../assets/products/product_1.jpg')},
    {id: 2, image: require('../assets/products/product_6.jpg')},
    {id: 3, image: require('../assets/products/product_10.jpg')},
  ],
};
