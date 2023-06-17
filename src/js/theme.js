const toggleToChangeTheme = document.querySelector('#toggle-button');

function setDarkTheme(){
    document.body.classList.add('dark')
    localStorage.theme = 'dark'
}

function setLightTheme(){
    document.body.classList.remove('dark')
    localStorage.theme = 'light'

}


toggleToChangeTheme.addEventListener('click', () => {
   if( document.body.classList.contains('dark')){
    setLightTheme()

   }else{
    setDarkTheme()
   }
})

if (localStorage.theme === 'dark'){
    document.body.classList.add('dark')
    toggleToChangeTheme.textContent = 'Black'
}