const db = require('../db')
const { Brand, Category } = require('../models')

const createBrands = async() => {
    const tShirts = Category.findOne({ name: 'T-Shirts' })
    const longsleeves = Category.find({ name: 'Longsleeves', gender: 'Neutral' })
    const hoodies = Category.find({ name: 'Hoodies', gender: 'Neutral' })
    const jackets = Category.find({ name: 'Jackets', gender: 'Neutral' })
    const brands = [
        {
            name: 'Happy Earth Apparel',
            category : tShirts[0]._id,
            description: 'Happy Earth is a social enterprise built around protecting the planet, from how our products are made to our overall impact. With every product purchased, we give back to create positive change. Combating climate change, planting trees, or cleaning up trash - you get to choose the campaign your purchase supports. We make giving back accessible, fun, and fulfilling. From make to mission, people and the planet come first. -HEA Website',
            ethicallyMade: true,
            sustainablyMade: true,
            locationMade: 'Texas',
            bCorp: 100,
            ethicallyMade: 100,
            vegan: 100,
            percentOrganic: 95,
            percentCarbonNeutral: 100,
            donateToCharities: 100,
            recycledMaterialsUsed: 100
        },
        {
            name: 'MPG Sport',
            category : tShirts[0]._id,
            description: "We’re growing up and taking responsibility; minimizing our impact on the planet and maximizing the potential of everyone in our supply chain and beyond is at the forefront of everything we do. -MPG Website",
            ethicallyMade: true,
            sustainablyMade: true,
            locationMade: 'Texas',
            bCorp: 100,
            ethicallyMade: 100,
            vegan: 0,
            percentOrganic: 86,
            percentCarbonNeutral: 80,
            donateToCharities: 100,
            recycledMaterialsUsed: 86
        }
    ]
    await Brand.insertMany(brands)
    console.log('added Brands')
}

const run = async() => {
    await createBrands()
    db.close()
}

run()