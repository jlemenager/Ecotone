const db = require('../db')
const { Brand,Category,Product } = require('../models')

const createProducts = async() => {
    const tShirts = Category.find({name: 'T-Shirts', gender:'Neutral'})
    const tShirtsWomen = Category.find({name: 'T-Shirts', gender:'Women'})
    const longsleeves = Category.find({name: 'Longsleeves', gender: 'Neutral'})
    const longsleevesWomen = Category.find({name: 'Longsleeves', gender: 'Women'})

    const happyEarthApparel = Brand.find({name: 'Happy Earth Apparel'})
    const mpgSport = Brand.find({name: 'MPG Sport'})
    const products = [
        {
            name: 'California Poppies',
            category: tShirts[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 32,
            color: 'Black',
            size: 'M, L',
            inStock: true,
            description: "Designed for comfort in all of life's adventures. A relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1889_gray_1x1_b2b71027-871c-4c2c-856f-e4df7620288f_1080x.jpg?v=1680966385'),
            image2: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/ig2_1080x.jpg?v=1682019038'),
            image3: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/ig1_1080x.jpg?v=1682019038')
        },
        {
            name: 'Tree of Life',
            category: tShirts[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 32,
            color: 'Tan',
            size: 'XS, S, M, L, XL, 2XL, 3XL',
            inStock: true,
            description: "Designed for comfort in all of life's adventures. A relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/files/IMG_2452_1x1_972eef78-e39c-45de-8596-f54f10b11725_1080x.jpg?v=1683224431'),
            image2: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/files/IMG_2453_1x1_835e4699-d7ef-419b-bcfd-e21babe5eb68_1080x.jpg?v=1683224339')
        },
        {
            name: 'Summer Waves',
            category: tShirts[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 32,
            color: 'Green',
            size: 'S, M, L, XL, 2XL, 3XL',
            inStock: true,
            description: "Designed for comfort in all of life's adventures. A relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1853_gray_1x1_c3ebe091-b681-4465-a805-63f353dfe9c8_1080x.jpg?v=1681002740')
        },
        {
            name: 'Make Waves',
            category: tShirts[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 32,
            color: 'Tan',
            size: 'XS, S, M, L, XL, 2XL, 3XL',
            inStock: true,
            description: "Designed for comfort in all of life's adventures. A relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1860_gray_1x1_253d3914-e4b8-404f-a17a-2f255e075265_1080x.jpg?v=1681138408'),
            image2: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1856_gray_1x1_86e04f66-d5cd-4d3e-8f64-13de4fcd521b_1080x.jpg?v=1681138293')
        },
        {
            name: 'Sea Turtles',
            category: tShirts[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 32,
            color: 'Green',
            size: 'XS, S, M, L, XL, 3XL',
            inStock: true,
            description: "Designed for comfort in all of life's adventures. A relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1883_gray_1x1_e421a43d-2ca5-4a01-8b4a-0d31827454c4_1080x.jpg?v=1681141505'),
            image2: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1882_gray_1x1_e590ad19-fea5-4b99-a8fe-8a5c7f907b06_1080x.jpg?v=1681141504')
        },
        {
            name: 'Day and Night',
            category: tShirts[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 32,
            color: 'Tan',
            size: 'S, M, L, XL, 3XL',
            inStock: true,
            description: "Designed for comfort in all of life's adventures. A relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1862_gray_1x1_4f04da7f-22ed-4fd5-93a7-c6898cbc2702_1080x.jpg?v=1682019081'),
            image2: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1861_gray_1x1_ea22112d-e186-4fd7-9985-50c7fdb9c4a5_1080x.jpg?v=1681138651'),
            image3: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/p5_1080x.jpg?v=1682019081')
        },
        {
            name: 'Cosmos',
            category: tShirts[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 32,
            color: 'Black',
            size: 'XS, S, M, L, XL, 2XL, 3XL',
            inStock: true,
            description: "Designed for comfort in all of life's adventures. A relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1881_gray_1x1_73739feb-765c-40b7-bc17-c595ef3fc29a_1080x.jpg?v=1682019102'),
            image2: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1879_gray_1x1_f94daf8c-540e-44f1-83fe-f9c12ea27309_1080x.jpg?v=1681139618'),
            image3: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/p7_1080x.jpg?v=1682019102')
        },
        {
            name: 'Heat Waves',
            category: tShirts[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 32,
            color: 'Tan',
            size: 'XS, S, M, L, XL, 2XL, 3XL',
            inStock: true,
            description: "Designed for comfort in all of life's adventures. A relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/files/IMG_2452_1x1_d8614776-e240-40e7-a9dc-88dd353ea982_1080x.jpg?v=1683224867'),
            image2: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/files/IMG_2454_1x1_faddfb5a-b67d-476c-9453-4d91828f8bc3_1080x.jpg?v=1683224867')
        },
        {
            name: 'Peace',
            category: tShirts[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 32,
            color: 'Green',
            size: 'XS, S, M, L, XL',
            inStock: true,
            description: "Designed for comfort in all of life's adventures. A relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/IMG_1888_gray_1x1_5c71829d-159e-4c65-b5f9-b3dcd8ed96ff_1080x.jpg?v=1681142339')
        },
        {
            name: 'Cacao Tree | Alter Eco x Happy Earth',
            category: longsleeves[0]._id,
            brand: happyEarthApparel[0]._id,
            price: 38,
            color: 'Green',
            size: 'S, M, L, XL',
            inStock: true,
            description: "Relaxed, ultra-soft organic cotton tee that's great for everyday wear: your go-to worry-free style that's made to live-in.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/1101008AlterEcoCacaoTree-3_1080x.jpg?v=1680199843'),
            image2: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/1101008AlterEcoCacaoTree-2_1080x.jpg?v=1680199843'),
            image3: new URL('https://cdn.shopify.com/s/files/1/0272/1500/3781/products/1101008AlterEcoCacaoTree-1_1080x.jpg?v=1680199843')
        },
        {
            name: 'Dynamic Recycled Stink-Free Sleeveless Top',
            category: tShirtsWomen[0]._id,
            brand: mpgSport[0]._id,
            price: 34,
            color: 'Red',
            size: 'XS, S, M, L, XL',
            inStock: true,
            description: "You're a dynamo. Anti-stink technology works to nix odour so that you can wear this top on repeat. Throw it on as a cover-up post-workout or on its own for an on-trend everyday look. Now available in recycled fabric.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/2785/1604/products/11A0509-C0613-1_800x.jpg?v=1679325178'),
            image2: new URL('https://cdn.shopify.com/s/files/1/2785/1604/products/11A0509-C0613-3_800x.jpg?v=1679325178'),
            image3: new URL('https://cdn.shopify.com/s/files/1/2785/1604/products/11A0509-C0613-4_800x.jpg?v=1679325178')
        },
        {
            name: 'Dynamic Recycled Polyester Relaxed Short Sleeve T- Shirt',
            category: tShirtsWomen[0]._id,
            brand: mpgSport[0]._id,
            price: 42,
            color: 'Red',
            size: 'XS, S, M, L, XL',
            inStock: true,
            description: "You’re a dynamo. Relaxed, oversized, boxy… whichever way you want to describe it, the look is on fire, and this t-shirt captures the essence of the trend perfectly.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/2785/1604/products/11A0920-C0613-1_800x.jpg?v=1675037686'),
            image2: new URL('https://cdn.shopify.com/s/files/1/2785/1604/products/11A0920-C0613-3_800x.jpg?v=1675037686'),
            image3: new URL('https://cdn.shopify.com/s/files/1/2785/1604/products/11A0920-Dynamic-SS-Tee-Cardinal_800x.jpg?v=1676665496')
        },
        {
            name: 'Calm Short Sleeve T-Shirt',
            category: tShirtsWomen[0]._id,
            brand: mpgSport[0]._id,
            price: 44,
            color: 'Black',
            size: 'XS, S, M, L, XL, 2XL',
            inStock: true,
            description: "Turn down the noise. And share your Pride or show your support for the LGBTQ community in this cut-out tee made for maximum comfort while you’re on the go.",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/2785/1604/files/11M0006-1401-1_800x.jpg?v=1685718609'),
            image2: new URL('https://cdn.shopify.com/s/files/1/2785/1604/files/11M0006-1401-3_800x.jpg?v=1685718609'),
            image3: new URL('https://cdn.shopify.com/s/files/1/2785/1604/files/11M0006-1401-7_800x.jpg?v=1685731831')
        },
        {
            name: 'Dynamic Recycled Cover-Up Stink-Free Long Sleeve Top',
            category: longsleevesWomen[0]._id,
            brand: mpgSport[0]._id,
            price: 30,
            color: 'Green',
            size: 'XS, S, M, L, XL',
            inStock: true,
            description: "You're a dynamo. This recycled fabric is made with anti-stink technology to go longer between washes. (The planet and your water bill will thank you.)",
            mainImage: new URL('https://cdn.shopify.com/s/files/1/2785/1604/products/11A0514-C0623-1_800x.jpg?v=1675286891'),
            image2: new URL('https://cdn.shopify.com/s/files/1/2785/1604/products/11A0514-C0623-3_800x.jpg?v=1675286891'),
            image3: new URL('https://cdn.shopify.com/s/files/1/2785/1604/products/11A0514-C0623-6_800x.jpg?v=1675286891')
        }
    ]
    await Product.insertMany(products)
    console.log('added products')
}

const run = async() => {
    await createProducts()
    db.close()
}

run()