//CONSTANTS

const frontPageMain = document.querySelector('#frontPageMain')
const frontPageBanners = document.querySelector('#frontPageBanners')
const products = document.querySelector('#products')
let product = document.querySelectorAll('.product')
const logo = document.querySelector('#logo')
const searchBar = document.querySelector('#searchBar')

        //Display Product List Constants

// const dropdownOptions = document.querySelectorAll('select')
const brandDropdownOptions = document.querySelectorAll('.brands')
const categoryDropdownOptions = document.querySelectorAll('.categories')

const allCategoriesOption = document.querySelector('.allCategories')
const allBrandsOption = document.querySelector('.allBrands')

let changedCategorytoAll = true
let changedBrandtoAll = true
let changedDropdown = false

let categories = []
let brands = []

    //Display Product Page Constants

const productPage = document.querySelector('#productPage')
const productPageImage = document.querySelector('#imageContainerLeft')
const productPageInfo = document.querySelector('#productPageInfo')
const brandInfoChart = document.querySelector('.brandInfoChart')

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
    
const displayCategoriesFromModal = async(category) => {
    products.style.display = 'block'
    modal.style.display = 'none'
    brandInfoChart.style.display = 'none'
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    updateUserInfoPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
    const response = await axios.get('http://localhost:3001/api/products')
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
    modal.style.display = 'none'
    brandInfoChart.style.display = 'none'
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    updateUserInfoPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
    const response = await axios.get('http://localhost:3001/api/products')
    product.forEach((elem, idx)=> {
        if(brand.target.innerHTML === response.data.products[idx].brand.name){
            elem.style.display = 'block'
            elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
        } else {
            console.log(`Not from ${response.data.products[idx].brand.name}`)
            elem.style.display = 'none'
            elem.innerHTML = ''
        }
})
}

    // Event Listeners

document.querySelector('#hamburgerMenu').addEventListener('click', ()=>setTimeout(showModal,50))
document.querySelector('#modalCloseButton').addEventListener('click', ()=>setTimeout(closeModal,50))
modalButtonCategory.forEach((elem)=>{elem.addEventListener('click', displayCategoriesFromModal)})
modalButtonBrand.forEach((elem)=>{elem.addEventListener('click', displayBrandsFromModal)})

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
        
        //Functions

const changeSelectedCategory = async(category) => {
        categories.push(category.target.value)
        if (categories.length > 1){
            categories.pop()
        }
        // if (category.target.value === 'All Categories'){
        //     changedCategorytoAll = true
        // }
        // allCategoriesOption.removeAttribute('selected')
        // category.target.setAttribute('selected','selected')
        console.log(category.target.value)
        const response = await axios.get('http://localhost:3001/api/products')
        document.querySelector('#productGrid').style.display = 'grid'
        products.style.display = 'block'
        productPage.style.display = 'none'
        brandInfoChart.style.display = 'none'
        modal.style.display = 'none'
        deleteAccountPage.style.display = 'none'
        logoutPage.style.display = 'none'
        updateUserInfoPage.style.display = 'none'
        loginPage.style.display = 'none'
        createAccountPage.style.display = 'none'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        product.forEach((elem, idx)=>{
        if(changedBrandtoAll === true){
            if(category.target.value === response.data.products[idx].category.name){
                elem.style.display = 'block'
                elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
                console.log('chose cat no brand')
                changedCategorytoAll = false
                } else {
                    console.log(`Not a ${response.data.products[idx].category.name} or from ${response.data.products[idx].brand.name}`)
                    elem.style.display = 'none'
                    elem.innerHTML = ''
                }
        } else {
            if(category.target.value === response.data.products[idx].category.name && brands[0] === response.data.products[idx].brand.name){
                elem.style.display = 'block'
                elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
                console.log('chose cat with brand')
                changedBrandtoAll = false
                } else {
                    console.log(`Not a ${response.data.products[idx].category.name} or from ${response.data.products[idx].brand.name}`)
                    elem.style.display = 'none'
                    elem.innerHTML = ''
                }
                
        }
        })
    }
    
const changeSelectedBrand = async(brand) => {
        brands.push(brand.target.value)
        if (brands.length > 1){
            brands.pop()
        }
        // if (brand.target.value === 'All Brands'){
        //     changedBrandtoAll = true
        // }
        // allBrandsOption.removeAttribute('selected')
        // brand.target.setAttribute('selected','selected')
        console.log(brands)
        const response = await axios.get('http://localhost:3001/api/products')
        document.querySelector('#productGrid').style.display = 'grid'
        products.style.display = 'block'
        productPage.style.display = 'none'
        brandInfoChart.style.display = 'none'
        deleteAccountPage.style.display = 'none'
        logoutPage.style.display = 'none'
        updateUserInfoPage.style.display = 'none'
        loginPage.style.display = 'none'
        createAccountPage.style.display = 'none'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'
        product.forEach((elem, idx)=> {
        if (changedCategorytoAll === true) {
            if(brand.target.value === response.data.products[idx].brand.name){
                elem.style.display = 'block'
                elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
                console.log('chose brand no cat')
                changedBrandtoAll = false
            } else {
                console.log(`Not from ${response.data.products[idx].brand.name} or a ${response.data.products[idx].category.name}`)
                elem.style.display = 'none'
                elem.innerHTML = ''
            }
        } else {
            if(brand.target.value === response.data.products[idx].brand.name && categories[0] === response.data.products[idx].category.name){
                elem.style.display = 'block'
                elem.innerHTML = `<img class='productImage' src='${response.data.products[idx].mainImage}'><p class='productInfo productPrice'>$${response.data.products[idx].price}</p><p class='productInfo productName'>${response.data.products[idx].name}</p><p class='productInfo productBrand'>${response.data.products[idx].brand.name}</p><p class='productInfo productSize'>${response.data.products[idx].size}</p>`
                console.log('chose brand with cat')
            } else {
                console.log(`Not from ${response.data.products[idx].brand.name} or a ${response.data.products[idx].category.name}`)
                elem.style.display = 'none'
                elem.innerHTML = ''
            }
        }
    })
}

const displayAllProducts = async() => {
    document.querySelector('#categoriesDropdownButton').addEventListener('change', changeSelectedCategory)
    document.querySelector('#brandsDropdownButton').addEventListener('change', changeSelectedBrand)
}

displayAllProducts()

const reset = () => {
    products.style.display = 'block'
    productPage.style.display = 'none'
    product.forEach((elem)=>{elem.style.display = 'none'})
    brandInfoChart.style.display = 'none'
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    updateUserInfoPage.style.display = 'none'
    loginPage.style.display = 'none'
    createAccountPage.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const showSearch = async() => {
    let search = searchBar.value

    const response = await axios.get('http://localhost:3001/api/products')

let searchBarColorMatches = search.match(/(blue?|green?|red?|purple?|pink?|yellow?|black|brown|tan)/gi)
let searchBarCategoryMatches = search.match(/(t-shirts?|longsleeves?|sweaters?|sweatshirts?|socks?|shoes?|jackets?|coats?)/gi)
  if (searchBarColorMatches.length>0 || searchBarCategoryMatches.length>0){
    console.log(searchBarColorMatches)
    console.log(searchBarCategoryMatches)
    reset()
    let searchBarMatches = searchBarColorMatches.concat(searchBarCategoryMatches)
    //https://blog.gitnux.com/code/javascript-append-array/#:~:text=In%20JavaScript%2C%20you%20can%20append,using%20the%20Array%20Spread%20Operator.&text=Both%20of%20these%20methods%20will,without%20modifying%20the%20original%20arrays.
    console.log(response.data)
    searchBarMatches.forEach((elem, idx)=>{
        for(let i = 0;i<response.data.products.length;i++){
            let color = response.data.products[i].color
            console.log(color)
            let category = response.data.products[i].category.name
            console.log(category)
            if(color.includes(elem) || category.includes(elem)){
                document.querySelectorAll('.product')[0].style.display = 'block'
                document.querySelectorAll('.product')[0].innerHTML = `<img class='productImage' src='${response.data.products[i].mainImage}'><p class='productInfo productPrice'>$${response.data.products[i].price}</p><p class='productInfo productName'>${response.data.products[i].name}</p><p class='productInfo productBrand'>${response.data.products[i].brand.name}</p><p class='productInfo productSize'>${response.data.products[i].size}</p>`
                console.log('working')
            } else {
                console.log("didn't match")
            }
        }
    })
}
}

        //Event Listener

document.querySelector('#searchButton').addEventListener('click',showSearch)

//DISPLAY PRODUCT PAGE
    
    //Functions

const affiliateLink = async() => {
    const productResponse = await axios.get('http://localhost:3001/api/products')
    window.open(`${productResponse.data.products[idx].link}`)
}
    
    //Event Listeners

product.forEach(async(elem,idx) =>{
    const productResponse = await axios.get('http://localhost:3001/api/products')
    elem.addEventListener('click', async()=>{
        console.log('clicked')
        productPage.style.display = 'block'
        brandInfoChart.style.display = 'block'
        deleteAccountPage.style.display = 'none'
        logoutPage.style.display = 'none'
        updateUserInfoPage.style.display = 'none'
        loginPage.style.display = 'none'
        createAccountPage.style.display = 'none'
        products.style.display = 'none'
        frontPageMain.style.display = 'none'
        frontPageBanners.style.display = 'none'

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
                        {x:'Donates to Charities', y:productResponse.data.products[idx].brand.donateToCharities},
                        {x:'Vegan', y:productResponse.data.products[idx].brand.vegan},
                        {x:'Organic', y:productResponse.data.products[idx].brand.percentOrganic},
                        {x:'Carbon Neutral', y:productResponse.data.products[idx].brand.percentOrganic},
                        {x:'Uses Recycled Materials', y:productResponse.data.products[idx].brand.recycledMaterialsUsed}
                    ]
                }
            ]
        })
        // productPageChart.setAttribute('id','productPageChart')

        productPageImage.innerHTML = `<img id='productPageImage' src='${productResponse.data.products[idx].mainImage}'>`
        productPageInfo.innerHTML = `<h1 id='productPageName'>${productResponse.data.products[idx].name}</h1><p id='productPageBrand'>${productResponse.data.products[idx].brand.name}</p><p id='productPagePrice'>$${productResponse.data.products[idx].price}</p><button id='productPageBuyButton' onclick='affiliateLink'>Buy Now</button><p id='productPageSize'>${productResponse.data.products[idx].size}</p><p id='productPageDescription'>${productResponse.data.products[idx].description}</p>`
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

//CRUD USER 

    //Constants

const createAccountPage = document.querySelector('#createAccountPage')
const loginPage = document.querySelector('#loginPage')
const updateUserInfoPage = document.querySelector('#userInfoPage')
const logoutPage = document.querySelector('#logoutPage')
const deleteAccountPage = document.querySelector('#deleteAccountPage')

const userIcon = document.querySelector('#userIcon')

let shown = false

    //Functions

const displayCreateAccountPage = () => {
    createAccountPage.style.display = 'block'
    updateUserInfoPage.style.display = 'none'
    deleteAccountPage.style.display = 'none'
    logoutPage.style.display = 'none'
    loginPage.style.display = 'none'
    productPage.style.display = 'none'
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const createUser = async() => {
    const usernameInput = document.querySelector('#createUsername').value
    const emailInput = document.querySelector('#createEmail').value
    const passwordInput = document.querySelector('#createPassword').value

    await axios.post('http://localhost:3001/api/users/post', {
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
    productPage.style.display = 'none'
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const updateUserLogin = async() => {
    const usernameInput = document.querySelector('#insertUsername').value
    const emailInput = document.querySelector('#insertEmail').value
    const passwordInput = document.querySelector('#insertPassword').value
    
    const user = await axios.get(`http://localhost:3001/api/users`)
    let userData = user.data.users
    console.log(userData)
    userData.forEach(async(elem)=>{
        await axios.put(`http://localhost:3001/api/users/put/${elem._id}`, {
            loggedIn:false
        })
    })
    for(let i = 0;i<userData.length;i++){
        if(usernameInput === userData[i].username && emailInput === userData[i].email && passwordInput === userData[i].password){
            if(userData[i].loggedIn === false){
                await axios.put(`http://localhost:3001/api/users/put/${userData[i]._id}`, {
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
    productPage.style.display = 'none'
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const updateUserInfo = async() => {
    const usernameInput = document.querySelector('#changeUsername').value
    const emailInput = document.querySelector('#changeEmail').value
    const passwordInput = document.querySelector('#changePassword').value
    const user = await axios.get(`http://localhost:3001/api/users`)
    let userData = user.data.users
    console.log(userData)
    for(let i = 0;i<userData.length;i++){
        if(userData[i].loggedIn === true){
            await axios.put(`http://localhost:3001/api/users/put/${userData[i]._id}`, {
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
    productPage.style.display = 'none'
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const updateUserLogout = async() => {
    const user = await axios.get(`http://localhost:3001/api/users`)
    let userData = user.data.users

    for(let i = 0;i<userData.length;i++){
        if(userData[i].loggedIn === true){
            await axios.put(`http://localhost:3001/api/users/put/${userData[i]._id}`, {
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
    productPage.style.display = 'none'
    products.style.display = 'none'
    frontPageMain.style.display = 'none'
    frontPageBanners.style.display = 'none'
}

const deleteAccount = async() => {
    const users = await axios.get('http://localhost:3001/api/users')
    let userData = users.data.users
    userData.forEach(async(elem)=>{
        if (elem.loggedIn === true){
            await axios.delete(`http://localhost:3001/api/users/delete/${elem._id}`)
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
    if(shown === false){
        document.querySelector(`#userDropdownContent`).style.display = 'block'
        shown = true
    } else {
        document.querySelector(`#userDropdownContent`).style.display = 'none'
        shown = false
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