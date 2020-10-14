import faker from 'faker';
import niceColors from 'nice-color-palettes';
faker.seed(1);

export const ORANGE = '#FB9B06';

const data = [
    {
        type: 'Soup',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480438.png'
    },
    {
        type: 'Salad',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480473.png'
    },
    {
        type: 'Rice',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480484.png'
    },
    {
        type: 'Sushi',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480504.png'
    },
    {
        type: 'Spaguetti',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480618.png'
    },
    {
        type: 'Pizza',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480627.png'
    },
    {
        type: 'Burger',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480641.png'
    },
    {
        type: 'Steak',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480720.png'
    },
    {
        type: 'Ice cream',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480729.png'
    },
    {
        type: 'Cheese',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480749.png'
    },
    {
        type: 'Ramen',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480765.png'
    },
    {
        type: 'Orange Juice',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480808.png'
    },
    {
        type: 'Hot dog',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480814.png'
    },
    {
        type: 'English breakfast',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480823.png'
    },
    {
        type: 'Tea',
        image: 'https://image.flaticon.com/icons/png/256/3480/3480828.png'
    },
];

const colors = niceColors[1];

export const tabs = [
    'Today',
    'Chips',
    'Fish',
    'Tea',
    'Burger',
    'Coffee',
    'Drinks',
    'Breakfast',
];

export default data.map((item, index) => ({
    ...item,
    key: faker.random.uuid(),
    subType: faker.commerce.productName(),
    color: `${colors[index % colors.length]}66`,
    fullColor : colors[index % colors.length],
    description: [...Array(2).keys()].map(faker.commerce.productDescription).join('. '),
    price: `$${(faker.random.number(200) + 50) / 100}`,
    subcategories: faker.helpers.shuffle(data).slice(0, 3),
}));

export const popularFood = faker.helpers.shuffle(data).map((item) => ({
    ...item,
    key: faker.random.uuid(),
    rating: (faker.random.number(30) + 20) /10,
    price: `$${(faker.random.number(200) + 50) / 100}`,
}));