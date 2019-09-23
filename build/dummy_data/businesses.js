'use strict';

var businesses = [{
    id: 101,
    name: 'Abc company',
    categories: ['tech', 'agric', 'education'],
    location: 'Nigeria'
}];

var reviews = [{
    id: 101,
    average_rating: 4,
    review: [{
        name: 'adura oyewole',
        rating: 4,
        comment: 'It is a good business'
    }, {
        name: 'modupe Ayoola',
        rating: 3,
        comment: 'Good business. They need to focus on customer satisfaction'
    }]
}];

module.exports = { businesses: businesses, reviews: reviews };