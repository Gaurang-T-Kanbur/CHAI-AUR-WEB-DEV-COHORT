function changeBackground(colour) {
    document.body.style.backgroundColor = colour;
}

//Dark Mode
const darkButton = document.getElementById("dark-button");


darkButton.addEventListener('click', function(){
    console.log(`I got clicked.`);
    changeBackground('black')
    
})

//Toggle Mode

const themeButton = document.getElementById("theme-button")

themeButton.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor; 
    console.log(currentColor);
    
    if(!currentColor || currentColor == 'white'){
        changeBackground('black');
        themeButton.innerText = 'Light Mode'
        document.body.style.color = 'white'
    } else {
        changeBackground('white');
        themeButton.innerText = 'Dark Mode'
        document.body.style.color = 'black'
    }
})