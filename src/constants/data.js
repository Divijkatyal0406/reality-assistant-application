import images from './images';

const wines = [
  {
    title: 'Tea',
    //price: '$56',
    tags:  ' Hot ',
  },
  {
    title: 'Hot Coffee',
    //price: '$59',
    tags: ' Fresh ',
  },
  {
    title: 'Cold Coffee',
    //price: '$59',
    tags: ' Fresh ',
  },
  {
    title: 'Ice Tea',
    //price: '$44',
    tags: 'Fresh | 750 ml',
  },
  {
    title: 'Green Tea',
   // price: '$31',
    tags: 'Hot | 750 ml',
  },
  {
    title: 'Fresh Lime Soda',
   // price: '$26',
    tags: 'Fresh | 750 ml',
  },
  {
    title: 'Coconut Water',
   // price: '$26',
    tags: 'Fresh | 750 ml',
  },
  {
    title: 'Seasonal Fresh Juice',
   // price: '$26',
    tags: 'Fresh | 750 ml',
  },
  {
    title: 'Chocolate Shake',
   // price: '$26',
    tags: 'Fresh | 750 ml',
  },
  {
    title: 'Oreo Shake',
   // price: '$26',
    tags: 'Fresh | 750 ml',
  },
  {
    title: 'Banana Shake',
   // price: '$26',
    tags: 'Fresh | 750 ml',
  },
  {
    title: 'Pineapple Shake',
   // price: '$26',
    tags: 'Fresh | 750 ml',
  },
  {
    title: 'Seasonal Fruit Shake',
   // price: '$26',
    tags: 'Fresh | 750 ml',
  },

  

];

const cocktails = [
  {
    title: 'Masala French Fries',
    //price: '$20',
    tags: ' Hot| Fresh',
  },
  {
    title: 'Plain French Fries',
    //price: '$20',
    tags: ' Hot| Fresh',
  },
  {
    title: 'Corn & Cheese Nuggets',
    //price: '$20',
    tags: ' Cheesy | Hot ',
  },
  {
    title: 'Fresh Cut Fruits',
    //price: '$20',
    tags: ' Seasonal  | Fruits ',
  },
  {
    title: "Pizza Pockets",
    //price: '$16',
    tags: 'Hot | Fresh',
  },
  {
    title: 'Veg Mayonnaise Sandwich',
    //price: '$10',
    tags: 'White Bread',
  },
  {
    title: 'Veg Mayonnaise Sandwich',
    //price: '$20',
    tags: ' Brown Bread ',
  },
  {
    title: 'Veg Mayonnaise  Grill Sandwich',
    //price: '$20',
    tags: ' Brown Bread ',
  },
  {
    title: 'Veg Mayonnaise  Grill Sandwich',
    //price: '$20',
    tags: ' White Bread ',
  },
  {
    title: 'Veg Cheese Sandwich',
    //price: '$20',
    tags: ' Brown Bread ',
  },
  {
    title: 'Veg Cheese Sandwich',
    //price: '$20',
    tags: ' White Bread ',
  },
  {
    title: 'Potato Bites',
    //price: '$20',
    tags: ' Hot | Fresh ',
  },
  {
    title: 'Cheese Balls',
    //price: '$20',
    tags: ' Hot | Fresh ',
  },
  {
    title: 'Veggie Fingers',
    //price: '$20',
    tags: ' Hot | Fresh ',
  },
  {
    title: 'Potato Wedges',
    //price: '$20',
    tags: ' Hot | Fresh ',
  },
  
  
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const MAX_QUANTITY = 5;

export default { wines, cocktails, awards, MAX_QUANTITY };