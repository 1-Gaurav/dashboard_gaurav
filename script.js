const sideMenu=document.querySelector('aside');
const themeToggler=document.querySelector('.theme-toggler')
// Toggle sidebar visibility
const closeBtn = document.querySelector('#close_btn');
const menuBtn = document.querySelector('#menu_bar');

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display="block"
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display="none"
})
// theme 
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})
// Real-time bold date and time display
function updateDateTime() {
    const dateTimeDisplay = document.getElementById('dateTime');
    const now = new Date();

    const options = {
        weekday: 'long',  // Show day of the week
        year: 'numeric',
        month: 'long',  // Full month name
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    dateTimeDisplay.innerHTML = now.toLocaleString('en-US', options);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);



