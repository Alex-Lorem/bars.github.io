
document.addEventListener("DOMContentLoaded", function(event){
 //burger                                 
window.onload=function(){
let burger  = document.querySelector('.burger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('burger--active');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--active-menu');
}

burger.addEventListener('click' , toggleMenu);
        }
//reviews
const $findBlock = (allies) =>{
    return $(".reviews__display").filter((index, item)=>{
       return $(item).attr("data-linked-with") == allies; 
    });
}
$(".interactive__avatar-link").click(e =>{ 
    e.preventDefault();
    const $this = $(e.currentTarget)   
    const target = $this.attr("data-open");
    const itemToShow =  $findBlock(target);
    const curItem = $this.closest(".reviews__switcher-item");
    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
});


    
//slider
const leftBtn = document.querySelector('#arrow-left');
const rightBtn = document.querySelector('#arrow-right');
const items = document.querySelector('#items');
//const computedStyles = getComputedStyle(items);


//let currentRight = computedStyles.right;
    var currentRight = 1;
leftBtn.addEventListener("click", e =>{
    
    e.preventDefault();
    //let currentRight = parseInt(computedStyles.right);
    
    if(currentRight<0){
        
         document.getElementById("items").style.transform = "translateX(0%)";
        currentRight+=2;
    }
    
})

rightBtn.addEventListener('click', e =>{
    e.preventDefault();
    
     if(currentRight>0 && currentRight<2){
         
        document.getElementById("items").style.transform = "translateX(-100%)";
         currentRight-=2;
    }
    
})

//acardeon
    const openItem = (item) =>{
        const polygon = document.getElementsByClassName('polygon');
        const container = item.closest(".team__member");
        const contentBlock = container.find(".team__drop");
        const textBlock = contentBlock.find(".team__content-block");
        const reqHeight = textBlock.height();
        $(polygon).css('transform','rotate(0deg)');
        container.addClass("drop-active");
        contentBlock.height(reqHeight);
    };
    
    const closeEveryItem = (container) =>{
        
        const items = container.find(".team__drop");
        const itemContainer = container.find(".team__member");
        
        itemContainer.removeClass("drop-active");
        items.height(0);
    };
    
    
    
    $(".team__title").click((e) =>{
        const $this = $(e.currentTarget);
        const container = $this.closest(".team__list");
        const elemContainer = $this.closest(".team__member");
        
        
        if(elemContainer.hasClass("drop-active")){
             //$(polygon).css('transform','rotate(180deg)');
             closeEveryItem(container);
            
       } else {
                closeEveryItem(container);
                openItem($this);
            }
        
    });
    
    //form
    const myForm = document.querySelector('#myForm');
    const send = document.querySelector('#send');
   
    send.addEventListener('click',e =>{
       e.preventDefault();
        
       if(validateForm(myForm)){
           const data = {
             name: myForm.elements.name.value,
             phone: myForm.elements.phone.value, 
             street: myForm.elements.street.value,
             house: myForm.elements.house.value,   
           };
           const xhr = new XMLHttpRequest();
           xhr.responseType = 'json';
           xhr.open('POST','http://localhost');
           xhr.send(JSON.stringify(data));
           xhr.addEventListener('load', ()=>{
               if(xhr.response.status){
                   console.log("done");
               }
           });
       }
        
       function validateForm(form){
           let valid = true;
           
           if(!validateField(form.elements.name)){
               valid = false;
           }
           if(!validateField(form.elements.phone)){
               valid = false;
           }
           if(!validateField(form.elements.street)){
               valid = false;
           }
           return valid;
       }
        
       function validateField(field){
           
          field.nextElementSibling.textContent = field.validationMessage;
               
          return field.checkValidity();       
               
           
           
       }
    });
    
});








