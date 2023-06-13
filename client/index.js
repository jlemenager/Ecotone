//CONSTANTS

const frontPageMain = document.querySelector('#frontPageMain')
const frontPageBanners = document.querySelector('#frontPageBanners')
const products = document.querySelector('#products')
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


//DISPLAY PRODUCT FUNCTIONS

    //Main Product Search

        //Constants

const dropdownOptions = document.querySelectorAll('select')
const brandDropdownOptions = document.querySelectorAll('.brands')
const categoryDropdownOptions = document.querySelectorAll('.categories')

let product = document.querySelectorAll('.product')

const allCategoriesOption = document.querySelector('.allCategories')
const allBrandsOption = document.querySelector('.allBrands')
        
        //Functions

const changeSelectedCategory = () => {
    document.querySelector('#categoriesDropdownButton').addEventListener('change',(category)=>{
        allCategoriesOption.removeAttribute('selected')
        category.target.setAttribute('selected','selected')
        console.log(category.target.value)
    })
}

const changeSelectedBrand = () => {
    document.querySelector('#brandsDropdownButton').addEventListener('change',(brand)=>{
        allBrandsOption.removeAttribute('selected')
        brand.target.setAttribute('selected','selected')
        console.log(brand.target.value)
    })
}
changeSelectedCategory()
changeSelectedBrand()
const displayAllProducts = async() => {
    if(allCategoriesOption.hasAttribute('selected') && allBrandsOption.hasAttribute('selected')){
        products.style.display = 'block'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        const response = await axios.get('http://localhost:3001/api/products')
        console.log(response)
        product.forEach((elem, idx)=>elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`)
    } else if (allCategoriesOption.hasAttribute('selected') === false && allBrandsOption.hasAttribute('selected')){
        console.log('happy days')
        categoryDropdownOptions.forEach((elem)=>console.log(elem))
        
    } else if (allCategoriesOption.hasAttribute('selected') && allBrandsOption.hasAttribute('selected')===false){
        console.log('happy days brand')
    }
}

        //Event Listener

document.querySelector('#searchButton').addEventListener('click',displayAllProducts)




//GO TO HOME PAGE

    //Functions

// const goToHomePage = () => {
//     frontPageMain.style.display = 'block'
//     frontPageBanners.style.display = 'block'
//     products.style.display = 'none'
// }

    //Event Listeners

logo.addEventListener('click', ()=>location.reload())