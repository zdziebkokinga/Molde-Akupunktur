// navigation         
let mobileNav = document.querySelector(".navigation_nav");
let displayBar = document.querySelector("#navigation_bar");

let bar = document.querySelector("#navigation_bar_close");
        
    displayBar.addEventListener('click', () => {
        if (mobileNav.style.display = "none"){
            mobileNav.style.display = "block";
            displayBar.style.display = "none";
            bar.style.display = 'block';
            }
        });

    bar.addEventListener('click', () =>{
        if(mobileNav.style.display  = 'block'){
            mobileNav.style.display = 'none';
            bar.style.display = 'none';
            displayBar.style.display = 'block';
            }
    });