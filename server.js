const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Setting EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files service (CSS and images)
app.use(express.static('css'));
app.use(express.static('images'));

// Route for the homepage - FB menu
app.get('/', (req, res) => {
    const menuData = {
        schoolName: 'FB school',
        today: 'Friday',
        meals: [
            { name: 'Breakfast', description: 'Oatmeal with milk + Dates + Fresh orange juice', price: 5, image: 'breakfast.jpg' },
             { name: 'Lunch', description: 'Bukhari rice with chicken + Salad + Yogurt', price: 10, image: 'lunch.jpg' },
             { name: 'Snack', description: 'Cookies', price: 3, image: 'snack.jpg' }
        ],
        weeklyMenu: [
            { day: 'Monday', meals: ['Pancakes', 'Spaghetti', 'Fruit salad'] },
            { day: 'Tuesday', meals: ['French toast', 'Grilled cheese', 'Ice cream'] },
            { day: 'Wednesday', meals: ['Bagel with cream cheese', 'Chicken wrap', 'Brownie'] },
            { day: 'Thursday', meals: ['Muffin', 'Fish and chips', 'Cupcake'] },
            { day: 'Friday', meals: ['Croissant', 'Pizza', 'Chocolate pudding'] }
        ]
    };

    res.render('menu', menuData);
});

// Route to the second page - Gullfoss Waterfall, Iceland
app.get('/location', (req, res) => {
    const locationData = {
        schoolName: 'FB School',
        siteName: 'Gullfoss Waterfall',
        country: 'Iceland',
        description: 'Gullfoss (Golden Falls) is a magnificent two-tiered waterfall located in the canyon of Hvítá river in southwest Iceland. It is one of the most popular tourist attractions in the country.',
        location: 'Hvítá river canyon, Southwestern Iceland',
        height: '32 meters (105 feet) total drop',
        features: ['Two tiers: 11m and 21m', 'Part of the Golden Circle route', 'Spray creates rainbows on sunny days', 'Ice cave behind waterfall in winter'],
        image: 'gullfoss.jpg',
        coordinates: '64.3275° N, 20.1211° W',
        bestTime: 'Summer (June to August) for full flow, or Winter for frozen beauty',
        flowRate: 'Up to 140 cubic meters per second in summer'
    };
    
    res.render('location', locationData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Food Menu: http://localhost:${PORT}/`);
    console.log(`Gullfoss Waterfall: http://localhost:${PORT}/location`);
});