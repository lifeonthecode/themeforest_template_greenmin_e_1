
// header is sticky 
const header = document.querySelector('.header_section');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 250) {
        header.classList.add('is_sticky');
    } else {
        header.classList.remove('is_sticky');
    }

});

// menu bar icon 
const mobile_menu_container = document.querySelector('.mobile_menu_container')
const mobile_menu_wrapper = document.querySelector('.mobile_menu_wrapper')
const clickx = document.getElementById('pencet');

clickx.addEventListener('click', () => {
    clickx.classList.toggle('Diam');
    mobile_menu_container.classList.toggle('toggle');
    mobile_menu_wrapper.classList.toggle('toggle');
});


// current page active js code 
const nav_links = document.querySelectorAll('.menu_bar');


const activePage = (links) => {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('click', (e) => {
            links.forEach(element => {
                if (element.className == 'active') {
                    element.classList.remove('active');
                }
            });
            links[i].classList.add('active');

            // toogle 
            // clickx.classList.toggle('Diam');
            // mobile_menu_container.classList.toggle('toggle');
            // mobile_menu_wrapper.classList.toggle('toggle');
        })

    }
}

activePage(nav_links[0].childNodes);
activePage(nav_links[1].childNodes);


// user button click to user information show 
const user_information_container = document.querySelector('.user_information_container')
const user_info = document.getElementById('user_info').addEventListener('click',() => {
    user_information_container.classList.toggle('toggle')
})



// form mouseover then form button show and form mouseout form button hidden 
const searchBtn_hover = document.querySelector('.banner_search_box form');
const searchBtn = document.querySelector('.banner_search_box form button');
searchBtn_hover.addEventListener('mouseover', () => {
    console.log('mouserover')
    searchBtn.classList.toggle('show')
})
searchBtn_hover.addEventListener('mouseout', () => {
    console.log('mouserout')
    searchBtn.classList.toggle('show')
});




// current years 
const current_years = document.getElementById('current_year');
const year = new Date().getFullYear();
current_years.innerText = year;