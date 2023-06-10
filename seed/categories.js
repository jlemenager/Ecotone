const db = require('../db')
const { Category } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB not connecting'))

const createCategories = async() => {
    const categories = [
        {
            name: 'T-Shirts',
            gender: 'Neutral'
        },
        {
            name: 'T-Shirts',
            gender: 'Men'
        },
        {
            name: 'T-Shirts',
            gender: 'Women'
        },
        {
            name: 'Longsleeves',
            gender: 'Neutral'
        },
        {
            name: 'Longsleeves',
            gender: 'Men'
        },
        {
            name: 'Longsleeves',
            gender: 'Women'
        },
        {
            name: 'Jackets',
            gender: 'Neutral'
        },
        {
            name: 'Jackets',
            gender: 'Men'
        },
        {
            name: 'Jackets',
            gender: 'Women'
        },
        {
            name: 'Hoodies',
            gender: 'Neutral'
        },
        {
            name: 'Hoodies',
            gender: 'Men'
        },
        {
            name: 'Hoodies',
            gender: 'Women'
        },
        {
            name: 'Sweaters',
            gender: 'Neutral'
        },
        {
            name: 'Sweaters',
            gender: 'Men'
        },
        {
            name: 'Sweaters',
            gender: 'Women'
        },
        {
            name: 'Caps',
            gender: 'Neutral'
        },
        {
            name: 'Caps',
            gender: 'Men'
        },
        {
            name: 'Caps',
            gender: 'Women'
        },
        {
            name: 'Winter Hats',
            gender: 'Neutral'
        },
        {
            name: 'Winter Hats',
            gender: 'Men'
        },
        {
            name: 'Winter Hats',
            gender: 'Women'
        },
        {
            name: 'Dresses',
            gender: 'Women'
        },
        {
            name: 'Sunglasses',
            gender: 'Neutral'
        },
        {
            name: 'Sunglasses',
            gender: 'Men'
        },
        {
            name: 'Sunglasses',
            gender: 'Women'
        }
    ]
    await Category.insertMany(categories)
    console.log('added categories')
}

const run = async() => {
    await createCategories()
    db.close()
}

run()