//CONSTANTS

const frontPageMain = document.querySelector('#frontPageMain')
const frontPageBanners = document.querySelector('#frontPageBanners')
const products = document.querySelector('#products')
let product = document.querySelectorAll('.product')
const logo = document.querySelector('#logo')


//MODAL

    //Constants

const modal = document.querySelector('#modal')

    //Functions

const showModal = () => {
    modal.style.display = 'block'
}

const closeModal = () => {
    modal.style.display = 'none'
}

    //Event Listeners

document.querySelector('#hamburgerMenu').addEventListener('click', ()=>setTimeout(showModal,50))
document.querySelector('#modalCloseButton').addEventListener('click', ()=>setTimeout(closeModal,50))


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
        l=0
        typewriterText = 'protect land?'
        placeForTypewriterText.innerHTML = ''
        setTimeout(typingEffect,500)
    } else if (l<typewriterText.length && typewriterText === 'protect land?'){
        placeForTypewriterText.innerHTML += typewriterText.charAt(l)
        l++
        setTimeout(typingEffect,typeSpeed)
    } else if (l===typewriterText.length && typewriterText === 'protect land?'){
        l=0
        typewriterText = 'boost eco-tech?'
        placeForTypewriterText.innerHTML = ''
        setTimeout(typingEffect,500)
    } else if (l<typewriterText.length && typewriterText === 'boost eco-tech?'){
        placeForTypewriterText.innerHTML += typewriterText.charAt(l)
        l++
        setTimeout(typingEffect,typeSpeed)
    } else if (l===typewriterText.length && typewriterText === 'boost eco-tech?'){
        l=0
        typewriterText = 'save lives?'
        placeForTypewriterText.innerHTML = ''
        setTimeout(typingEffect,500)
    }
}

typingEffect()


//DISPLAY PRODUCT LIST

        //Constants

// const dropdownOptions = document.querySelectorAll('select')
const brandDropdownOptions = document.querySelectorAll('.brands')
const categoryDropdownOptions = document.querySelectorAll('.categories')

const allCategoriesOption = document.querySelector('.allCategories')
const allBrandsOption = document.querySelector('.allBrands')

let changedCategorytoAll = false
let changedBrandtoAll = false
let changedDropdown = false
        
        //Functions

const changeSelectedCategory = () => {
    document.querySelector('#categoriesDropdownButton').addEventListener('change', async(category)=>{
        changedDropdown = true
        changedCategorytoAll = false
        // allCategoriesOption.removeAttribute('selected')
        // category.target.setAttribute('selected','selected')
        console.log(category.target.value)
        const response = await axios.get('http://localhost:3001/api/products')
        products.style.display = 'block'
        document.querySelector('#productGrid').style.display = 'grid'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        product.forEach((elem, idx)=>{
        elem.classList.remove('productStyle')
        elem.innerHTML = ''
        if(category.target.value === response.data.products[idx].category.name){
        elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
        elem.setAttribute('class','productStyle')
        } else {
            console.log(`Not a ${response.data.products[idx].category.name}`)
            if (category.target.value === 'All Categories'){
                changedCategorytoAll = true
            } else {
                console.log('Not All Categories')
            }
        }
    })
    })
}

const changeSelectedBrand = () => {
    document.querySelector('#brandsDropdownButton').addEventListener('change',async(brand)=>{
        changedDropdown = true
        changedBrandtoAll = false
        // allBrandsOption.removeAttribute('selected')
        // brand.target.setAttribute('selected','selected')
        console.log(brand.target.value)
        const response = await axios.get('http://localhost:3001/api/products')
        products.style.display = 'block'
        document.querySelector('#productGrid').style.display = 'grid'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        product.forEach((elem, idx)=> {
        elem.classList.remove('productStyle')
        elem.innerHTML = ''
        if(brand.target.value === response.data.products[idx].brand.name){
            elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
            elem.setAttribute('class','productStyle product')
        } else {
            console.log(`Not from ${response.data.products[idx].brand.name}`)
            if (brand.target.value === 'All Brands'){
                changedBrandtoAll = true
            } else {
                console.log('Not All Brands')
            }
        }
    })
    })
}
changeSelectedCategory()
changeSelectedBrand()
const displayAllProducts = async() => {
    const response = await axios.get('http://localhost:3001/api/products')
    document.querySelector('#brandsDropdownButton').addEventListener('change',(brand)=>{
    })
    if((changedCategorytoAll === true && changedBrandtoAll === true) || changedDropdown === false){
        products.style.display = 'block'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        console.log(response)
        product.forEach((elem, idx)=>elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`)
    } else  {
        console.log('happy days')
    }
}

        //Event Listener

document.querySelector('#searchButton').addEventListener('click',displayAllProducts)

//DISPLAY PRODUCT LIST

    //Constants

const productPage = document.querySelector('#productPage')
const productPageImage = document.querySelector('#imageContainerLeft')
const productPageInfo = document.querySelector('#productPageInfo')
const brandInfoChart = document.querySelector('.brandInfoChart')
    
    //Functions
    
    //Event Listeners

product.forEach((elem,idx) =>{
    elem.addEventListener('click', async()=>{
        productPage.style.display = 'block'
        products.style.display = 'none'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'

        const productResponse = await axios.get('http://localhost:3001/api/products')
        const brandResponse = await axios.get('http://localhost:3001/api/brands')
        const productPageChart = new JSC.Chart('brandInfoChart', {
            type: 'horizontal column',
            width:'800px',
            height:'400px',
            series: [
                {
                    palette: {
                        stops: [
                            [0, '#618242'],
                            [100, '#d9d9d9']
                        ]
                    },
                    points: [
                        {x:'B Corporation', y:productResponse.data.products[idx].brand.bCorp},
                        {x:'Ethically Made', y:productResponse.data.products[idx].brand.ethicallyMade},
                        {x:'Donate to Charities', y:productResponse.data.products[idx].brand.donateToCharities},
                        {x:'Vegan', y:productResponse.data.products[idx].brand.vegan},
                        {x:'Organic', y:productResponse.data.products[idx].brand.percentOrganic},
                        {x:'Carbon Neutral', y:productResponse.data.products[idx].brand.percentOrganic},
                        {x:'Recycled Materials', y:productResponse.data.products[idx].brand.recycledMaterialsUsed}
                    ]
                }
            ]
        })
        // productPageChart.setAttribute('id','productPageChart')

        productPageImage.innerHTML = `<img id='productPageImage' src='${productResponse.data.products[idx].mainImage}'>`
        productPageInfo.innerHTML = `<h1 id='productPageName'>${productResponse.data.products[idx].name}</h1><p id='productPageBrand'>${productResponse.data.products[idx].brand.name}</p><p id='productPagePrice'>${productResponse.data.products[idx].price}</p><p id='productPageSize'>${productResponse.data.products[idx].size}</p><p id='productPageDescription'>${productResponse.data.products[idx].description}</p>`
        brandInfoChart.innerHTML = `<h2>${productResponse.data.products[idx].brand.name}'s Score</h2>${productPageChart}`
    })
})

//GO TO HOME PAGE

    //Functions

// const goToHomePage = () => {
//     frontPageMain.style.display = 'block'
//     frontPageBanners.style.display = 'block'
//     products.style.display = 'none'
// }

    //Event Listeners

logo.addEventListener('click', ()=>location.reload())

//GO TO USER LOGIN

    //Constants

const createAccountPage = document.querySelector('#createAccountPage')

let shown = false

    //Functions

const displayCreateAccountPage = () => {
    createAccountPage.style.display = 'block'
    productPage.style.display = 'none'
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

    // Event Listeners

document.querySelector('#userIcon').addEventListener('click', ()=>{
    if(shown === false){
        document.querySelector(`#userDropdownContent`).style.display = 'block'
        shown = true
    } else {
        document.querySelector(`#userDropdownContent`).style.display = 'none'
        shown = false
    }
})

document.querySelector('.createAccountOption').addEventListener('click', displayCreateAccountPage)