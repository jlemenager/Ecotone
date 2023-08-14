//CONSTANTS

const frontPageMain = document.querySelector('#frontPageMain')
const frontPageBanners = document.querySelector('#frontPageBanners')
const products = document.querySelector('#products')
let product = document.querySelectorAll('.product')
const logo = document.querySelector('#logo')
const searchBar = document.querySelector('#searchBar')

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.env.APIKEY
    },
}

const data = {
    "collection":"",
    "database":"ecotoneDatabase",
    "dataSource":"Cluster0",
    "projection": {"_id": 1}
}

    //Display Product List Constants

// const dropdownOptions = document.querySelectorAll('select')
const brandDropdownOptions = document.querySelectorAll('.brands')
const categoryDropdownOptions = document.querySelectorAll('.categories')

const allCategoriesOption = document.querySelector('.allCategories')
const allBrandsOption = document.querySelector('.allBrands')


let changedCategorytoAll = false
let changedBrandtoAll = false
let changedDropdown = false

let categories = []
let brands = []
if (categories.length === 0){
    changedCategorytoAll = true
}
if (brands.length === 0){
    changedBrandtoAll = true
}

    //Display Product Page Constants

const productPage = document.querySelector('#productPage')
const productPageImage = document.querySelector('#imageContainerLeft')
const productPageInfo = document.querySelector('#productPageInfo')
const brandInfoChart = document.querySelector('.brandInfoChart')

    //Display About Page Constants

const aboutPage = document.querySelector('#aboutPage')
const aboutButton = document.querySelector('#modalAboutLink')

    //Footer Constants

const footer = document.querySelector('footer')

//MODAL

    //Constants
const modal = document.querySelector('#modal')
let modalButtonCategory = document.querySelectorAll('.modalCategory')
let modalButtonBrand = document.querySelectorAll('.modalBrand')

    // Functions
const showModal = () => {
        modal.style.display = 'block'
    }
    
const closeModal = () => {
        modal.style.display = 'none'
    }

const displayAbout = () =>{
    aboutPage.style.display = 'block'
    products.style.display = 'none'
    productPage.style.display = 'none'
    modal.style.display = 'none'
    brandInfoChart.style.display = 'none'
    brandInfoChart.innerHTML = ''
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    updateUserInfoPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}
    
const displayCategoriesFromModal = async(category) => {
    products.style.display = 'block'
    productPage.style.display = 'none'
    aboutPage.style.display = 'none'
    modal.style.display = 'none'
    brandInfoChart.innerHTML = ''
    brandInfoChart.style.display = 'none'
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    updateUserInfoPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
    const response = await axios.get('http://ecotone-production.up.railway.app/api/products')
    product.forEach((elem, idx)=> {
        console.log('forEach working')
        if(category.target.innerHTML === response.data.products[idx].category.name){
            console.log('categories match')
            elem.style.display = 'block'
            elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
        } else {
            console.log(`Not a ${response.data.products[idx].category.name}`)
            elem.style.display = 'none'
            elem.innerHTML = ''
        }
})
}

const displayBrandsFromModal = async(brand) => {
    products.style.display = 'block'
    productPage.style.display = 'none'
    aboutPage.style.display = 'none'
    modal.style.display = 'none'
    brandInfoChart.style.display = 'none'
    brandInfoChart.innerHTML = ''
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    updateUserInfoPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
    const response = await axios.get('http://ecotone-production.up.railway.app/api/products')
    let brandsArray = []
        for(let i =0;i<response.data.products.length;i++){
            if(brand.target.innerHTML === response.data.products[i].brand.name){
                brandsArray.push(i)
            } else {
                console.log(`This is from ${response.data.products[i].brand.name}`)
            }
        }
    brandsArray.forEach((elem, idx)=> {
            document.querySelectorAll('.product')[idx].style.display = 'block'
            document.querySelectorAll('.product')[idx].innerHTML = `<img class='productImage' src='${response.data.products[elem].mainImage}'><p class='productInfo productPrice'>$${response.data.products[elem].price}</p><p class='productInfo productName'>${response.data.products[elem].name}</p><p class='productInfo productBrand'>${response.data.products[elem].brand.name}</p><p class='productInfo productSize'>${response.data.products[elem].size}</p>`
})
}

    // Event Listeners

document.querySelector('#hamburgerMenu').addEventListener('click', ()=>setTimeout(showModal,50))
document.querySelector('#modalCloseButton').addEventListener('click', ()=>setTimeout(closeModal,50))
modalButtonCategory.forEach((elem)=>{elem.addEventListener('click', displayCategoriesFromModal)})
modalButtonBrand.forEach((elem)=>{elem.addEventListener('click', displayBrandsFromModal)})
aboutButton.addEventListener('click', displayAbout)

//TYPING EFFECT  
    
    //Constants

const placeForTypewriterText = document.querySelector('span')
let typewriterText = 'save lives?'
let l = 0
const typeSpeed = 150

    //Typing Effect Functions

const typingEffect = () => {
    if (l<typewriterText.length && typewriterText === 'save lives?'){
        placeForTypewriterText.innerHTML += typewriterText.charAt(l)
        l++
        setTimeout(typingEffect,typeSpeed)
    } else if (l===typewriterText.length && typewriterText === 'save lives?'){
        setTimeout(()=>{
        l=0
        typewriterText = 'protect land?'
        placeForTypewriterText.innerHTML = ''
        setTimeout(typingEffect,100)
    },700)
    } else if (l<typewriterText.length && typewriterText === 'protect land?'){
        placeForTypewriterText.innerHTML += typewriterText.charAt(l)
        l++
        setTimeout(typingEffect,typeSpeed)
    } else if (l===typewriterText.length && typewriterText === 'protect land?'){
        setTimeout(()=>{
        l=0
        typewriterText = 'boost eco-tech?'
        placeForTypewriterText.innerHTML = ''
        setTimeout(typingEffect, 100)
        }
        ,700)
    } else if (l<typewriterText.length && typewriterText === 'boost eco-tech?'){
        placeForTypewriterText.innerHTML += typewriterText.charAt(l)
        l++
        setTimeout(typingEffect,typeSpeed)
    } else if (l===typewriterText.length && typewriterText === 'boost eco-tech?'){
        setTimeout(()=>{
        l=0
        typewriterText = 'save lives?'
        placeForTypewriterText.innerHTML = ''
        setTimeout(typingEffect,100)
    },700)
    }
}

typingEffect()

//ABOUT SECTION

    //Constants

    let shownAbout = false

    // Event Listeners

document.querySelector('#aboutIcon').addEventListener('click', ()=>{
    if(shownAbout === false){
        document.querySelector(`#aboutDropdownContent`).style.display = 'block'
        document.querySelector(`#userDropdownContent`).style.display = 'none'
        shownAbout = true
    } else {
        document.querySelector(`#aboutDropdownContent`).style.display = 'none'
        shownAbout = false
    }
})

document.querySelector('.aboutOption').addEventListener('click', displayAbout)

//DISPLAY PRODUCT LIST
        
        //Functions

        // const changeSelectedCategory = async(category) => {
        //     console.log(changedCategorytoAll)
        //     console.log(changedBrandtoAll)
        //     console.log(category.target.value)
        //     categories.unshift(category.target.value)
        //     if (categories.length > 1){
        //         categories.pop()
        //     }
        //     const response = await axios.get('http://localhost:3001/api/products')
        //     document.querySelector('#productGrid').style.display = 'grid'
        //     products.style.display = 'block'
        //     productPage.style.display = 'none'
        //     brandInfoChart.style.display = 'none'
        //     brandInfoChart.innerHTML = ''
        //     modal.style.display = 'none'
        //     deleteAccountPage.style.display = 'none'
        //     logoutPage.style.display = 'none'
        //     updateUserInfoPage.style.display = 'none'
        //     loginPage.style.display = 'none'
        //     createAccountPage.style.display = 'none'
        //     aboutPage.style.display = 'none'
        //     frontPageMain.style.display = 'none'
        //     frontPageBanners.style.display = 'none'
        //     product.forEach((elem, idx)=>{
        //     if(changedBrandtoAll === true){
        //         changedCategorytoAll = false
        //         if(category.target.value === response.data.products[idx].category.name){
        //             elem.style.display = 'block'
        //             elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
        //             console.log('chose cat no brand')
        //             console.log(category.target.value)
        //             } else {
        //                 // console.log(`Not a ${response.data.products[idx].category.name} or from ${response.data.products[idx].brand.name}`)
        //                 elem.style.display = 'none'
        //                 elem.innerHTML = ''
        //             }
        //     } else {
        //         if(category.target.value === response.data.products[idx].category.name && brands[0] === response.data.products[idx].brand.name){
        //             elem.style.display = 'block'
        //             elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
        //             console.log('chose cat with brand')
        //             console.log(brands[0])
        //             } else {
        //                 console.log(`Not selected because its a ${response.data.products[idx].category.name} and from ${response.data.products[idx].brand.name}`)
        //                 elem.style.display = 'none'
        //                 elem.innerHTML = ''
        //             }
                    
        //     }
        //     })
        // }
const changeSelectedCategory = async(category) => {
        categories.unshift(category.target.value)
        if (categories.length > 1){
            categories.pop()
        }
        const response = await axios.get('http://ecotone-production.up.railway.app/api/products')
        document.querySelector('#productGrid').style.display = 'grid'
        products.style.display = 'block'
        productPage.style.display = 'none'
        brandInfoChart.style.display = 'none'
        brandInfoChart.innerHTML = ''
        modal.style.display = 'none'
        deleteAccountPage.style.display = 'none'
        logoutPage.style.display = 'none'
        updateUserInfoPage.style.display = 'none'
        loginPage.style.display = 'none'
        createAccountPage.style.display = 'none'
        aboutPage.style.display = 'none'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        let categoryArray = []
        for(let i =0;i<response.data.products.length;i++){
            if(category.target.value === response.data.products[i].category.name){
                categoryArray.push(i)
            } else {
                console.log(`This is from ${response.data.products[i].category.name}`)
            }
        }
        console.log(categoryArray)
        categoryArray.forEach((elem, idx)=>{
        if(changedBrandtoAll === true){
            changedCategorytoAll = false
                document.querySelectorAll('.product')[idx].style.display = 'block'
                document.querySelectorAll('.product')[idx].innerHTML = `<img class='productImage' src='${response.data.products[elem].mainImage}'><p class='productInfo productPrice'>$${response.data.products[elem].price}</p><p class='productInfo productName'>${response.data.products[elem].name}</p><p class='productInfo productBrand'>${response.data.products[elem].brand.name}</p><p class='productInfo productSize'>${response.data.products[elem].size}</p>`
                console.log('chose cat no brand')
                console.log(category.target.value)
                    // console.log(`Not a ${response.data.products[idx].category.name} or from ${response.data.products[idx].brand.name}`)
                
        } else {
            changedCategorytoAll = false
            if(category.target.value === response.data.products[elem].category.name && brands[0] === response.data.products[elem].brand.name){
                document.querySelectorAll('.product')[idx].style.display = 'block'
                document.querySelectorAll('.product')[idx].innerHTML = `<img class='productImage' src='${response.data.products[elem].mainImage}'><p class='productInfo productPrice'>$${response.data.products[elem].price}</p><p class='productInfo productName'>${response.data.products[elem].name}</p><p class='productInfo productBrand'>${response.data.products[elem].brand.name}</p><p class='productInfo productSize'>${response.data.products[elem].size}</p>`
                console.log('chose cat with brand')
                console.log(brands[0])
                } else {
                    console.log(`Not selected because its a ${response.data.products[idx].category.name} and from ${response.data.products[idx].brand.name}`)
                    elem.style.display = 'none'
                    elem.innerHTML = ''
                }
                
        }
        })
    }
    
const changeSelectedBrand = async(brand) => {
        brands.unshift(brand.target.value)
        if (brands.length > 1){
        brands.pop()
        }
        const response = await axios.get('http://ecotone-production.up.railway.app/api/products')
        document.querySelector('#productGrid').style.display = 'grid'
        products.style.display = 'block'
        aboutPage.style.display = 'none'
        productPage.style.display = 'none'
        brandInfoChart.style.display = 'none'
        brandInfoChart.innerHTML = ''
        deleteAccountPage.style.display = 'none'
        logoutPage.style.display = 'none'
        updateUserInfoPage.style.display = 'none'
        loginPage.style.display = 'none'
        createAccountPage.style.display = 'none'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        let brandArray = []
        for(let i =0;i<response.data.products.length;i++){
            if(brand.target.value === response.data.products[i].brand.name){
                brandArray.push(i)
            } else {
                console.log(`This is from ${response.data.products[i].brand.name}`)
            }
        }
        console.log(brandArray)
        brandArray.forEach((elem, idx)=> {
            if (changedCategorytoAll === true) {
                changedBrandtoAll = false
                    document.querySelectorAll('.product')[idx].style.display = 'block'
                    document.querySelectorAll('.product')[idx].innerHTML = `<img class='productImage' src='${response.data.products[elem].mainImage}'><p class='productInfo productPrice'>$${response.data.products[elem].price}</p><p class='productInfo productName'>${response.data.products[elem].name}</p><p class='productInfo productBrand'>${response.data.products[elem].brand.name}</p><p class='productInfo productSize'>${response.data.products[elem].size}</p>`
                    console.log('chose brand no cat')
                    console.log(elem)
                    // console.log(`Not from ${response.data.products[idx].brand.name} or a ${response.data.products[idx].category.name}`)
                    // // elem.style.display = 'none'
                    // // elem.innerHTML = ''
                    // products.insertAdjacentHTML('beforeend',"<div class='product productStyle'></div>")
                } else {
                changedBrandtoAll = false
                if(brand.target.value === response.data.products[elem].brand.name && categories[0] === response.data.products[elem].category.name){
                    document.querySelectorAll('.product')[idx].style.display = 'block'
                    document.querySelectorAll('.product')[idx].innerHTML = `<img class='productImage' src='${response.data.products[elem].mainImage}'><p class='productInfo productPrice'>$${response.data.products[elem].price}</p><p class='productInfo productName'>${response.data.products[elem].name}</p><p class='productInfo productBrand'>${response.data.products[elem].brand.name}</p><p class='productInfo productSize'>${response.data.products[elem].size}</p>`
                    console.log('chose brand with cat')
                } else {
                    console.log(`Not selected because its from ${response.data.products[elem].brand.name} and a ${response.data.products[elem].category.name}`)
                    document.querySelectorAll('.product')[idx].style.display = 'none'
                    // document.querySelectorAll('.product')[idx].innerHTML = ''
                }
            }
        })
        brandArray = []
}

const displayProducts = async() => {
    document.querySelector('#categoriesDropdownButton').addEventListener('change', changeSelectedCategory)
    document.querySelector('#brandsDropdownButton').addEventListener('change', changeSelectedBrand)
}

displayProducts()

const displayAllProducts = async() => {
    const response = await axios.get('http://ecotone-production.up.railway.app/api/products')
        document.querySelector('#productGrid').style.display = 'grid'
        products.style.display = 'block'
        aboutPage.style.display = 'none'
        productPage.style.display = 'none'
        brandInfoChart.style.display = 'none'
        brandInfoChart.innerHTML = ''
        deleteAccountPage.style.display = 'none'
        logoutPage.style.display = 'none'
        updateUserInfoPage.style.display = 'none'
        loginPage.style.display = 'none'
        createAccountPage.style.display = 'none'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        product.forEach((elem,idx)=>{
            elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
        })
}

const reset = () => {
    products.style.display = 'block'
    productPage.style.display = 'none'
    product.forEach((elem)=>{elem.style.display = 'none'})
    brandInfoChart.style.display = 'none'
    brandInfoChart.innerHTML = ''
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    updateUserInfoPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    aboutPage.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

// const showColorSearch = async() => {
// let search = searchBar.value

// const response = await axios.get('http://localhost:3001/api/products')

// let searchBarColorMatches = search.match(/([Bb]lue?|[Gg]reen?|(R|r)ed?|(P|p)urple?|(P|p)ink?|(Y|y)ellow?|(B|b)lack?|(B|b)rown?|(T|t)an?)/gi)
// let searchBarCategoryMatches = search.match(/(t-shirts?|longsleeves?|sweaters?|sweatshirts?|socks?|shoes?|jackets?|coats?)/gi)
//   if (searchBarColorMatches.length>0 || searchBarCategoryMatches.length>0){
//     console.log(searchBarColorMatches)
//     console.log(searchBarCategoryMatches)
//     reset()
//     let searchBarMatches = searchBarColorMatches.concat(searchBarCategoryMatches)
//     //https://blog.gitnux.com/code/javascript-append-array/#:~:text=In%20JavaScript%2C%20you%20can%20append,using%20the%20Array%20Spread%20Operator.&text=Both%20of%20these%20methods%20will,without%20modifying%20the%20original%20arrays.
//     console.log(response.data)
//     searchBarMatches.forEach((elem, idx)=>{
//         for(let i = 0;i<response.data.products.length;i++){
//             let color = response.data.products[i].color
//             console.log(color)
//             let category = response.data.products[i].category.name
//             console.log(category)
//             if(color.includes(elem) || category.includes(elem)){
//                 document.querySelectorAll('.product')[i].style.display = 'block'
//                 document.querySelectorAll('.product')[i].innerHTML = `<img class='productImage' src='${response.data.products[i].mainImage}'><p class='productInfo productPrice'>$${response.data.products[i].price}</p><p class='productInfo productName'>${response.data.products[i].name}</p><p class='productInfo productBrand'>${response.data.products[i].brand.name}</p><p class='productInfo productSize'>${response.data.products[i].size}</p>`
//                 console.log('working')
//             } else {
//                 console.log("didn't match")
//             }
//         }
//     })
// }
// }

const showSearch = async() => {
    let search = searchBar.value
    let searchList = []
    let sortedList = []
    let x = 0
    const response = await axios.get('http://ecotone-production.up.railway.app/api/products')
    
    let searchBarMatches = search.match(/(blue?|green?|red?|purple?|pink?|yellow?|black?|brown?|white?|gray?|tan?|t-shirts?|longsleeves?|sweaters?|sweatshirts?|socks?|shoes?|jackets?|coats?|neutral?|womens?|mens?)/gi)
      if (searchBarMatches.length>0){
        reset()
        //https://blog.gitnux.com/code/javascript-append-array/#:~:text=In%20JavaScript%2C%20you%20can%20append,using%20the%20Array%20Spread%20Operator.&text=Both%20of%20these%20methods%20will,without%20modifying%20the%20original%20arrays.
            for(let i = 0;i<response.data.products.length;i++){
                let category = response.data.products[i].category.name
                let color = response.data.products[i].color
                let gender = response.data.products[i].category.gender
                let categorySearch = searchBarMatches.filter(word => category.includes(word))
                let colorSearch = searchBarMatches.filter(word => color.includes(word))
                let genderSearch = searchBarMatches.filter(word => gender.includes(word))
                if(categorySearch.includes(response.data.products[i].category.name) && colorSearch.includes(response.data.products[i].color) && genderSearch.includes(response.data.products[i].category.gender)){
                    searchList.push(`A${i}`)
                    // document.querySelectorAll('.product')[i].innerHTML = `<img class='productImage' src='${response.data.products[i].mainImage}'><p class='productInfo productPrice'>$${response.data.products[i].price}</p><p class='productInfo productName'>${response.data.products[i].name}</p><p class='productInfo productBrand'>${response.data.products[i].brand.name}</p><p class='productInfo productSize'>${response.data.products[i].size}</p>`
                    // document.querySelectorAll('.product')[i].style.display = 'block'
                    // console.log('working')
                } else if(categorySearch.includes(response.data.products[i].category.name) && genderSearch.includes(response.data.products[i].category.gender)){
                    searchList.push(`B${i}`)
                } else if(categorySearch.includes(response.data.products[i].category.name) && colorSearch.includes(response.data.products[i].color)){
                    searchList.push(`C${i}`)
                } else if(colorSearch.includes(response.data.products[i].color) && genderSearch.includes(response.data.products[i].category.gender)){
                    searchList.push(`D${i}`)
                } else if(categorySearch.includes(response.data.products[i].category.name) || colorSearch.includes(response.data.products[i].color) || genderSearch.includes(response.data.products[i].category.gender)){
                    searchList.push(`E${i}`)
                }
            }
            searchList.sort()

            
            searchList.forEach((elem, idx)=>{
                // elem.slice(0,1)
                elem = elem.substring(1)
                elem = parseInt(elem)
                sortedList.push(elem)
        })
        sortedList.forEach((e)=>{
                let constant = document.querySelectorAll('.product')[x]
                x++
                //https://www.geeksforgeeks.org/how-to-remove-a-character-from-string-in-javascript/
                constant.style.display = 'block'
                constant.innerHTML = `<img class='productImage' src='${response.data.products[e].mainImage}'><p class='productInfo productPrice'>$${response.data.products[e].price}</p><p class='productInfo productName'>${response.data.products[e].name}</p><p class='productInfo productBrand'>${response.data.products[e].brand.name}</p><p class='productInfo productSize'>${response.data.products[e].size}</p>`
                console.log('working')
            
        })
        
            }
    }

    // const searchFilter = () => {
    //     showColorSearch()
    //     showCategorySearch()
    // }

        //Event Listener

document.querySelector('#searchButton').addEventListener('click',showSearch)

//DISPLAY PRODUCT PAGE
    
    //Functions

// const affiliateLink = async() => {
//     const productResponse = await axios.get('http://localhost:3001/api/products')
//     window.open(`${productResponse.data.products[idx].link}`)
// }
    
    //Event Listeners

// product.forEach(async(elem,idx) =>{
    
//     elem.addEventListener('click', async()=>{
//         // const productResponse = await axios.get('http://localhost:3001/api/products')
//         productPage.style.display = 'block'
//         brandInfoChart.style.display = 'block'
//         brandInfoChart.innerHTML = ''
//         aboutPage.style.display = 'none'
//         deleteAccountPage.style.display = 'none'
//         logoutPage.style.display = 'none'
//         updateUserInfoPage.style.display = 'none'
//         loginPage.style.display = 'none'
//         createAccountPage.style.display = 'none'
//         products.style.display = 'none'
//         frontPageMain.style.display = 'none'
//         frontPageBanners.style.display = 'none'
//         footer.style.display = 'none'
//         let image = elem.querySelector('.productImage').attributes.src
//         let name = elem.querySelector('.productName').innerHTML
//         let price = elem.querySelector('.productPrice').innerHTML
//         let brand = elem.querySelector('.productBrand').innerHTML
//         let size = elem.querySelector('.productSize').innerHTML
//         console.log(image)
//         // productPageChart.setAttribute('id','productPageChart')
//         const productResponse = await axios.get('http://localhost:3001/api/products')
//         const productPageChart = new JSC.Chart('brandInfoChart', {
//             type: 'horizontal column',
//             width:'800px',
//             height:'400px',
//             series: [
//                 {
//                     palette: {
//                         stops: [
//                             [0, '#618242'],
//                             [100, '#d9d9d9']
//                         ]
//                     },
//                     points: [
//                         {x:'B Corporation', y:productResponse.data.products[idx].brand.bCorp},
//                         {x:'Ethically Made', y:productResponse.data.products[idx].brand.ethicallyMade},
//                         {x:'Donates to Charities', y:productResponse.data.products[idx].brand.donateToCharities},
//                         {x:'Vegan', y:productResponse.data.products[idx].brand.vegan},
//                         {x:'Organic', y:productResponse.data.products[idx].brand.percentOrganic},
//                         {x:'Carbon Neutral', y:productResponse.data.products[idx].brand.percentOrganic},
//                         {x:'Uses Recycled Materials', y:productResponse.data.products[idx].brand.recycledMaterialsUsed}
//                     ]
//                 }
//             ]
//         })
//         productPageImage.innerHTML = `<img id='productPageImage' src='${productResponse.data.products[idx].mainImage}'>`
//         productPageInfo.innerHTML = `<h1 id='productPageName'>${productResponse.data.products[idx].name}</h1><p id='productPageBrand'>${productResponse.data.products[idx].brand.name}</p><p id='productPagePrice'>$${productResponse.data.products[idx].price}</p><button id='productPageBuyButton'><a id='buyNowLink' href=${productResponse.data.products[idx].link}>Buy Now</a></button><p id='productPageSize'>Sizes Available: ${productResponse.data.products[idx].size}</p><p id='productPageDescription'>${productResponse.data.products[idx].description}</p>`
//         brandInfoChart.innerHTML = `<h2>${productResponse.data.products[idx].brand.name}'s Score</h2>${productPageChart}`

//     })
// })

product.forEach(async(elem,idx) =>{
    
    elem.addEventListener('click', async()=>{
        // const productResponse = await axios.get('http://localhost:3001/api/products')
        productPage.style.display = 'block'
        brandInfoChart.style.display = 'block'
        brandInfoChart.innerHTML = ''
        aboutPage.style.display = 'none'
        deleteAccountPage.style.display = 'none'
        logoutPage.style.display = 'none'
        updateUserInfoPage.style.display = 'none'
        loginPage.style.display = 'none'
        createAccountPage.style.display = 'none'
        products.style.display = 'none'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        // footer.style.display = 'none'
        let imageElement = elem.querySelector('.productImage')
        let image = imageElement.getAttributeNode('src').value
        let name = elem.querySelector('.productName').innerHTML
        let price = elem.querySelector('.productPrice').innerHTML
        let brand = elem.querySelector('.productBrand').innerHTML
        let size = elem.querySelector('.productSize').innerHTML
        let trackerArray = []
        console.log(trackerArray)
        const removeData = () =>{
            productPageChart.data.datasets.forEach((dataset)=>{
                dataset.data = []
            })
            productPageChart.update()
        }
        product.forEach((elem)=>{
            elem.addEventListener('click',()=>{removeData()})
    })
        // productPageChart.setAttribute('id','productPageChart')
        const productResponse = await axios.get('http://ecotone-production.up.railway.app/api/products')
        for (let i=0;i<productResponse.data.products.length;i++){
            if(productResponse.data.products[i].name === name){
                trackerArray.push(i)
            }
        }
        const productPageChart = new Chart('myChart', {
            type:'horizontalBar',
            data: {
                labels: ['B Corporation', 'Ethically Sourced', 'Donates to Charities', 'Vegan', 'Organic', 'Carbon Neutral', 'Uses Recycled Materials'],
                datasets: [{
                    label: 'Ecotone Score',
                    backgroundColor: '#d9d9d9',
                    data: [productResponse.data.products[trackerArray[0]].brand.bCorp, productResponse.data.products[trackerArray[0]].brand.ethicallyMade, productResponse.data.products[trackerArray[0]].brand.donateToCharities, productResponse.data.products[trackerArray[0]].brand.vegan, productResponse.data.products[trackerArray[0]].brand.percentOrganic, productResponse.data.products[trackerArray[0]].brand.percentCarbonNeutral, productResponse.data.products[trackerArray[0]].brand.recycledMaterialsUsed],
                    borderColor: ['#618242','#618242','#618242','#618242','#618242','#618242','#618242'],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        })

        // const productPageChart = new JSC.Chart('brandInfoChart', {
        //     type: 'horizontal column',
        //     width:'800px',
        //     height:'400px',
        //     series: [
        //         {
        //             palette: {
        //                 stops: [
        //                     [0, '#618242'],
        //                     [100, '#d9d9d9']
        //                 ]
        //             },
        //             points: [
        //                 {x:'B Corporation', y:productResponse.data.products[trackerArray[0]].brand.bCorp},
        //                 {x:'Ethically Made', y:productResponse.data.products[trackerArray[0]].brand.ethicallyMade},
        //                 {x:'Donates to Charities', y:productResponse.data.products[trackerArray[0]].brand.donateToCharities},
        //                 {x:'Vegan', y:productResponse.data.products[trackerArray[0]].brand.vegan},
        //                 {x:'Organic', y:productResponse.data.products[trackerArray[0]].brand.percentOrganic},
        //                 {x:'Carbon Neutral', y:productResponse.data.products[trackerArray[0]].brand.carbonNeutral},
        //                 {x:'Uses Recycled Materials', y:productResponse.data.products[trackerArray[0]].brand.recycledMaterialsUsed}
        //             ]
        //         }
        //     ]
        // })
        let productImage = document.querySelector('.productsPageImage')
        productImage.setAttribute('src', image)
        productPageInfo.innerHTML = `<h1 id='productPageName'>${name}</h1><p id='productPageBrand'>${brand}</p><p id='productPagePrice'>${price}</p><button id='productPageBuyButton'><a id='buyNowLink' href=${productResponse.data.products[trackerArray[0]].link}>Buy Now</a></button><p id='productPageSize'>Sizes Available: ${size}</p><p id='productPageDescription'>${productResponse.data.products[trackerArray[0]].description}</p>`
        brandInfoChart.style.display = 'block'
        console.log(trackerArray)
        console.log(productPageChart.data.datasets.data)

    })
})

// document.addEventListener('click', ()=>{
//     if (productPage.style.display === 'none'){
//         trackerArray = []
//     }
// })



//GO TO HOME PAGE

    //Functions

// const goToHomePage = () => {
//     frontPageMain.style.display = 'block'
//     frontPageBanners.style.display = 'block'
//     products.style.display = 'none'
// }

    //Event Listeners

logo.addEventListener('click', ()=>location.reload())

//BANNERS

    //Constants

const bannerProductPhoto = document.querySelector('#productPhoto')
let x = 1

    //Functions

const showProductBanner = async(req,res)=>{
    const response = await axios.get('http://ecotone-production.up.railway.app/api/products')
    let num = Math.round(Math.random()*12)
    for(let i = 0; i<response.data.products.length;i++){
        bannerProductPhoto.innerHTML = `<img class='productBannerImage' src='${response.data.products[num].mainImage}'>`
    } 
}
    // Event Listeners


document.querySelector('#bannerLeft').addEventListener('mouseenter', showProductBanner)
document.querySelector('#bannerLeft').addEventListener('click', displayAllProducts)
document.querySelector('#bannerRightTop').addEventListener('click', displayAllProducts)
document.querySelector('#bannerRightBottom').addEventListener('click', displayAbout)
// document.querySelector('#frontPageBanners').addEventListener('mouseleave', ()=>{bannerProductPhoto.innerHTML = ''})

//CRUD USER 

    //Constants

const createAccountPage = document.querySelector('#createAccountPage')
const loginPage = document.querySelector('#loginPage')
const updateUserInfoPage = document.querySelector('#userInfoPage')
const logoutPage = document.querySelector('#logoutPage')
const deleteAccountPage = document.querySelector('#deleteAccountPage')

const userIcon = document.querySelector('#userIcon')

let shownUser = false

    //Functions

const displayCreateAccountPage = () => {
    createAccountPage.style.display = 'block'
    updateUserInfoPage.style.display = 'none'
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    loginPage.style.display = 'none'
    aboutPage.style.display = 'none'
    productPage.style.display = 'none'
    brandInfoChart.style.display = 'none'
    brandInfoChart.innerHTML = ''
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const createUser = async() => {
    const usernameInput = document.querySelector('#createUsername').value
    const emailInput = document.querySelector('#createEmail').value
    const passwordInput = document.querySelector('#createPassword').value

    await axios.post('http://ecotone-production.up.railway.app/api/users/post', {
        username: usernameInput,
        loggedIn: true,
        email: emailInput,
        password: passwordInput
    })
    userIcon.setAttribute('src', 'images/loggedInIcon.png')
    alert('Welcome to the Ecotone family!')
}

const displayLoginPage = () =>{
    loginPage.style.display = 'block'
    updateUserInfoPage.style.display = 'none'
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    aboutPage.style.display = 'none'
    productPage.style.display = 'none'
    brandInfoChart.style.display = 'none'
    brandInfoChart.innerHTML = ''
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const updateUserLogin = async() => {
    const usernameInput = document.querySelector('#insertUsername').value
    const emailInput = document.querySelector('#insertEmail').value
    const passwordInput = document.querySelector('#insertPassword').value
    
    const user = await axios.get(`http://ecotone-production.up.railway.app/api/users`)
    let userData = user.data.users
    console.log(userData)
    userData.forEach(async(elem)=>{
        await axios.put(`http://ecotone-production.up.railway.app/api/users/put/${elem._id}`, {
            loggedIn:false
        })
    })
    for(let i = 0;i<userData.length;i++){
        if(usernameInput === userData[i].username && emailInput === userData[i].email && passwordInput === userData[i].password){
            if(userData[i].loggedIn === false){
                await axios.put(`http://ecotone-production.up.railway.app/api/users/put/${userData[i]._id}`, {
                    loggedIn:true
                })
                console.log('logged in')
                alert('You are logged in.')
                userIcon.setAttribute('src', 'images/loggedInIcon.png')
            } else {
                console.log('Already logged in')
                alert('You are already logged in.')
            }
        } else {
            console.log('Not valid login')
            // alert('No account listed with that information.')
        }
}}

const displayUserInfoPage = () =>{
    updateUserInfoPage.style.display = 'block'
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    aboutPage.style.display = 'none'
    productPage.style.display = 'none'
    brandInfoChart.style.display = 'none'
    brandInfoChart.innerHTML = ''
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const updateUserInfo = async() => {
    const usernameInput = document.querySelector('#changeUsername').value
    const emailInput = document.querySelector('#changeEmail').value
    const passwordInput = document.querySelector('#changePassword').value
    const user = await axios.get(`http://ecotone-production.up.railway.app/api/users`)
    let userData = user.data.users
    console.log(userData)
    for(let i = 0;i<userData.length;i++){
        if(userData[i].loggedIn === true){
            await axios.put(`http://ecotone-production.up.railway.app/api/users/put/${userData[i]._id}`, {
                username: usernameInput,
                loggedIn:true,
                email: emailInput,
                password: passwordInput
            })
            console.log('Updated account')
            alert('Your account is updated.')
        } else {
            console.log('Not logged in')
            // alert('You are not logged in.')
        }
    }
}

const displayLogoutPage = () =>{
    logoutPage.style.display = 'block'
    updateUserInfoPage.style.display = 'none'
    deleteAccountPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    aboutPage.style.display = 'none'
    productPage.style.display = 'none'
    brandInfoChart.style.display = 'none'
    brandInfoChart.innerHTML = ''
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const updateUserLogout = async() => {
    const user = await axios.get(`http://ecotone-production.up.railway.app/api/users`)
    let userData = user.data.users

    for(let i = 0;i<userData.length;i++){
        if(userData[i].loggedIn === true){
            await axios.put(`http://ecotone-production.up.railway.app/api/users/put/${userData[i]._id}`, {
                loggedIn:false,
            })
            console.log('Logged out')
            userIcon.setAttribute('src', 'images/userIcon.png')
            alert('You are logged out.')
        } else {
            console.log('Didnt log out')
            // alert('Log out not successful.')
        }
    }
}

const displayDeleteAccountPage = () =>{
    deleteAccountPage.style.display = 'block'
    logoutPage.style.display = 'none'
    updateUserInfoPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    aboutPage.style.display = 'none'
    productPage.style.display = 'none'
    brandInfoChart.style.display = 'none'
    brandInfoChart.innerHTML = ''
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const deleteAccount = async() => {
    const users = await axios.get('http://ecotone-production.up.railway.app/api/users')
    let userData = users.data.users
    userData.forEach(async(elem)=>{
        if (elem.loggedIn === true){
            await axios.delete(`http://ecotone-production.up.railway.app/api/users/delete/${elem._id}`)
            console.log('Account deleted')
            userIcon.setAttribute('src', 'images/userIcon.png')
            alert('Your account is successfully deleted.')
        } else {
            // console.log("We couldn't find your account. Either you are not logged in or you haven't created one yet.")
        }
    })
}

    // Event Listeners

document.querySelector('#userIcon').addEventListener('click', ()=>{
    if(shownUser === false){
        document.querySelector(`#userDropdownContent`).style.display = 'block'
        document.querySelector(`#aboutDropdownContent`).style.display = 'none'
        shownUser = true
    } else {
        document.querySelector(`#userDropdownContent`).style.display = 'none'
        shownUser = false
    }
})

document.querySelector('.createAccountOption').addEventListener('click', displayCreateAccountPage)
document.querySelector('.loginOption').addEventListener('click', displayLoginPage)
document.querySelector('.updateUserInfoOption').addEventListener('click', displayUserInfoPage)
document.querySelector('.logoutOption').addEventListener('click', displayLogoutPage)
document.querySelector('.deleteAccountOption').addEventListener('click', displayDeleteAccountPage)


document.querySelector('#submitCreateButton').addEventListener('click', ()=>{
    createUser()
    document.querySelector('#createUsername').value = ''
    document.querySelector('#createEmail').value = ''
    document.querySelector('#createPassword').value = ''
})

document.querySelector('#submitLoginButton').addEventListener('click', ()=>{
    updateUserLogin()
    document.querySelector('#insertUsername').value = ''
    document.querySelector('#insertEmail').value = ''
    document.querySelector('#insertPassword').value = ''
})
document.querySelector('#submitUserInfoButton').addEventListener('click', ()=>{
    updateUserInfo()
    document.querySelector('#changeUsername').value = ''
    document.querySelector('#changeEmail').value = ''
    document.querySelector('#changePassword').value = ''
})
document.querySelector('#submitLogoutButton').addEventListener('click', updateUserLogout)
document.querySelector('#submitDeleteAccountButton').addEventListener('click', deleteAccount)

// MongoDB Atlas

// curl --location --request POST 'https://us-east-2.aws.data.mongodb-api.com/app/data-fdivb/endpoint/data/v1/action/findOne' \
// --header 'Content-Type: application/json' \
// --header 'Access-Control-Request-Headers: *' \
// --header 'api-key: MzmmAGWwR9ki94781xeYp1LX4zYEXsjXhbUGVcy0oS8WR2sMXW95bCJtY4Kiej67' \
// --data-raw '{
//     "collection":"<COLLECTION_NAME>",
//     "database":"<DATABASE_NAME>",
//     "dataSource":"Cluster0",
//     "projection": {"_id": 1}
// }'

