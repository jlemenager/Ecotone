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

    //Constants

const dropdownOptions = document.querySelectorAll('select')

let product = document.querySelectorAll('.product')

    //Functions

const displayProducts = async() => {
        products.style.display = 'block'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        const response = await axios.get('http://localhost:3001/api/products')
        console.log(response)
        product.forEach((elem, idx)=>elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><br>${response.data.products[idx].name}<br>${response.data.products[idx].brand}<br>$${response.data.products[idx].price}<br>${response.data.products[idx].size}`)
}

    //Event Listener

document.querySelector('#searchButton').addEventListener('click',displayProducts)


//GO TO HOME PAGE

    //Functions

const goToHomePage = () => {
    frontPageMain.style.display = 'block'
    frontPageBanners.style.display = 'block'
    products.style.display = 'none'
}

    //Event Listeners

logo.addEventListener('click', goToHomePage)