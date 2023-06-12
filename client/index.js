//TYPING EFFECT  
    
    //Constants

const placeForTypewriterText = document.querySelector('span')
let typewriterText = 'save lives?'
const typewriterText2 = 'protect land'
const typewriterText3 = 'support ecopreneurs'
let l = 0
let l2 = 0
let l3 = 0
const typeSpeed = 150

    //Typing Effect Functions

const typingEffect1 = () => {
    if (l<typewriterText.length && typewriterText === 'save lives?'){
        placeForTypewriterText.innerHTML += typewriterText.charAt(l)
        l++
        setTimeout(typingEffect1,typeSpeed)
    } else if (l===typewriterText.length && typewriterText === 'save lives?'){
        l=0
        typewriterText = 'protect land?'
        placeForTypewriterText.innerHTML = ''
        setTimeout(typingEffect1,500)
    } else if (l<typewriterText.length && typewriterText === 'protect land?'){
        placeForTypewriterText.innerHTML += typewriterText.charAt(l)
        l++
        setTimeout(typingEffect1,typeSpeed)
    } else if (l===typewriterText.length && typewriterText === 'protect land?'){
        l=0
        typewriterText = 'boost eco-tech?'
        placeForTypewriterText.innerHTML = ''
        setTimeout(typingEffect1,500)
    } else if (l<typewriterText.length && typewriterText === 'boost eco-tech?'){
        placeForTypewriterText.innerHTML += typewriterText.charAt(l)
        l++
        setTimeout(typingEffect1,typeSpeed)
    } else if (l===typewriterText.length && typewriterText === 'boost eco-tech?'){
        l=0
        typewriterText = 'save lives?'
        placeForTypewriterText.innerHTML = ''
        setTimeout(typingEffect1,500)
    }
}

const typingEffect2 = () => {
    if (l2<typewriterText2.length && l>=typewriterText.length){
        placeForTypewriterText.innerText += typewriterText2.charAt(l2)
        l2++
        setTimeout(typingEffect2,typeSpeed)
    } 
}

const typingEffect3 = () => {
    if (l3<typewriterText3.length && l2>=typewriterText2.length && l>=typewriterText.length){
        placeForTypewriterText.innerText += typewriterText3.charAt(l3)
        l3++
        setTimeout(typingEffect3,typeSpeed)
    } 
}

    //Pauses and Clear Functions

const clear = () => {
    placeForTypewriterText.innerText = ''
}

    //Total Function

const fullTypingEffect = () => {
    typingEffect1()
    clear()
    typingEffect2()
    clear()
    typingEffect3()
    clear()
}

    //Event Listeners

document.querySelector('#searchButton').addEventListener('click', typingEffect1)