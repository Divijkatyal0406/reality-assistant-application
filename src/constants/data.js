import images from './images';

const wines = [
  {
    title: 'Tea',
    //price: '$56',
    tags: 'Hot | Ginger',
  },
  {
    title: 'Coffee',
    //price: '$59',
    tags: 'Hot | Cold',
  },
  {
    title: 'Ice Tea',
    //price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Fresh Lime Soda',
    //price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Coconut Water',
   // price: '$26',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Fresh Juice',
    //price: '$26',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Oreo Shake',
    //price: '$26',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Chocolate Shake',
   // price: '$26',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Banana Shake',
   // price: '$26',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Pineapple Shake',
    //price: '$26',
    tags: 'IE | 750 ml',
  },
  {
    title: 'Fruit Shake',
   // price: '$26',
    tags: 'IE | 750 ml',
  },
  
];

const cocktails = [
  {
    title: 'French Fries',
    //price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Corn & Cheese Nuggets",
    //price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Fresh Fruits',
    //price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    //price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    //price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
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

export default { wines, cocktails, awards };