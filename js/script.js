// navigation bar animation //

// const nav = document.querySelector("navigation");

// window.addEventListener("scroll", () =>{
//     if(window.scrollY > 100){
//         nav.classList.add("active");
//     }
//     else{
//         nav.classList.remove("active");
//     }
// })


// const lastScrollTop = 0;

// const navbar = document.querySelector(".navigation"); 
// window.addEventListener("scroll", function(){
//     const scrollTop = window.scrollY || document
//     .documentElement.scrollTop;
//     if(scrollTop > lastScrollTop){
//         navbar.style.top = "-74px";
//     } else{
//         navbar.style.top = "0";
//     }
//     lastScrollTop = scrollTop;
// })



const nav = document.querySelector('.navigation');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if(lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden")
  } else {
    nav.classList.remove("nav-hidden");
  }

  lastScrollY = window.scrollY;
});




const commentForm = document.querySelector('.comment-form');
const commentsContainer = document.querySelector('.comments');

document.addEventListener('DOMContentLoaded', () => {

    if (commentForm && commentsContainer) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = commentForm.querySelector('#name');
            const messageInput = commentForm.querySelector('#message');
            
            if (nameInput.value && messageInput.value) {
                const comment = document.createElement('div');
                comment.classList.add('comment');
                comment.innerHTML = `
                    <h3>${nameInput.value}</h3>
                    <p>${messageInput.value}</p>
                `;
                commentsContainer.appendChild(comment);
                
                nameInput.value = '';
                messageInput.value = '';
            }
        });
    }
});

