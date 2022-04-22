import {gradient} from '../config/colors';

export const dummyData = {
  products: [
    {
      title: 'Product 1',
      price: '29.00',
      image: require('../assets/products/product_1.jpg'),
    },
    {
      title: 'Product 2',
      price: '27.00',
      image: require('../assets/products/product_2.jpg'),
    },
    {
      title: 'Product 3',
      price: '34.00',
      image: require('../assets/products/product_3.jpg'),
    },
    {
      title: 'Product 4',
      price: '27.00',
      image: require('../assets/products/product_4.jpg'),
    },
    {
      title: 'Product 5',
      price: '29.00',
      image: require('../assets/products/product_5.jpg'),
    },
    {
      title: 'Product 6',
      price: '29.00',
      image: require('../assets/products/product_6.jpg'),
    },
    {
      title: 'Product 7',
      price: '29.00',
      image: require('../assets/products/product_7.jpg'),
    },
    {
      title: 'Product 8',
      price: '29.00',
      image: require('../assets/products/product_8.jpg'),
    },
    {
      title: 'Product 9',
      price: '29.00',
      image: require('../assets/products/product_9.jpg'),
    },
    {
      title: 'Product 10',
      price: '29.00',
      image: require('../assets/products/product_10.jpg'),
    },
    {
      title: 'Product 11',
      price: '29.00',
      image: require('../assets/products/product_11.jpg'),
    },
  ],

  categories: [
    {key: 1, text: 'Woman', colors: gradient.blue},
    {key: 2, text: 'Man', colors: gradient.red},
    {key: 3, text: 'Kids', colors: gradient.green},
    {key: 4, text: 'Recent', colors: gradient.blue},
    {key: 5, text: 'All', colors: gradient.red},
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
};
