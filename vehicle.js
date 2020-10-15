import faker from 'faker';
import niceColors from 'nice-color-palettes';
faker.seed(1);

export const ORANGE = '#FB9B06';

const data = [
    {
        type: 'Truck',
        image: 'https://image.flaticon.com/icons/png/256/741/741435.png'
    },
    {
        type: 'Car',
        image: 'https://image.flaticon.com/icons/png/256/741/741436.png'
    },
    {
        type: 'Train',
        image: 'https://image.flaticon.com/icons/png/256/741/741464.png'
    },
    {
        type: 'Car',
        image: 'https://image.flaticon.com/icons/png/256/741/741458.png'
    },
    {
        type: 'Car',
        image: 'https://image.flaticon.com/icons/png/256/741/741403.png'
    },
    {
        type: 'Scooter',
        image: 'https://image.flaticon.com/icons/png/256/741/741452.png'
    },
    {
        type: 'Bus',
        image: 'https://image.flaticon.com/icons/png/256/741/741400.png'
    },
    {
        type: 'Car',
        image: 'https://image.flaticon.com/icons/png/256/741/741433.png'
    },
    {
        type: 'Train',
        image: 'https://image.flaticon.com/icons/png/256/741/741398.png'
    },
    {
        type: 'Plane',
        image: 'https://image.flaticon.com/icons/png/256/741/741466.png'
    },
    {
        type: 'Train',
        image: 'https://image.flaticon.com/icons/png/256/741/741434.png'
    },
    {
        type: 'Bus',
        image: 'https://image.flaticon.com/icons/png/256/741/741399.png'
    },
    {
        type: 'Boat',
        image: 'https://image.flaticon.com/icons/png/256/741/741428.png'
    },
    {
        type: 'Taxi',
        image: 'https://image.flaticon.com/icons/png/256/741/741446.png'
    },
    {
        type: 'Bike',
        image: 'https://image.flaticon.com/icons/png/256/741/741431.png'
    },
];

const colors = niceColors[22];

export const tabs = [
    'Car',
    'Truck',
    'Train',
    'Van',
    'Taxi',
    'Boat',
    'Scooter',
    'Bike',
    'Bus',
    'Plane',
    'Boat'
];

export default data.map((item, index) => ({
    ...item,
    key: faker.random.uuid(),
    subType: faker.vehicle.fuel(),
    color: `${colors[index % colors.length]}66`,
    fullColor : colors[index % colors.length],
    description: faker.lorem.paragraph(),
    price: `${faker.random.number({
        'min': 1000,
        'max': 20000
    })+'€'}`,
    subcategories: faker.helpers.shuffle(data).slice(0, 3),
    seler: {
        avatar: faker.internet.avatar(),
        city: faker.address.city(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
    }
}));

export const popularVehicle = faker.helpers.shuffle(data).map((item) => ({
    ...item,
    key: faker.random.uuid(),
    rating: (faker.random.number(30) + 20) /10,
    price: `${faker.random.number({
        'min': 1000,
        'max': 20000
    })+'€'}`,
}));