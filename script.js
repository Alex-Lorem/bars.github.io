




document.addEventListener("DOMContentLoaded", function(event) {
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

    var currentRight = 1;
leftBtn.addEventListener("click", e =>{
    
    e.preventDefault();
    
    
    if(currentRight<0){
        
        document.getElementById("items").style.transform = "translateX(0%)";
        currentRight+=2;
        console.log(currentRight);
    } else {
         document.getElementById("items").style.transform = "translateX(-100%)";
         currentRight-=2;
    }
    
})

rightBtn.addEventListener('click', e =>{
    e.preventDefault();
    
     if(currentRight>0){
         
        document.getElementById("items").style.transform = "translateX(-100%)";
         currentRight-=2;
         
    }
    else {
        document.getElementById("items").style.transform = "translateX(0%)";
        currentRight+=2;
    }
    
})

//acardeon
    const openItem = (item) =>{
        const container = item.closest(".team__member");
        const contentBlock = container.find(".team__drop");
        const textBlock = contentBlock.find(".team__content-block");
        const polygon = container.find('.polygon');
        const reqHeight = textBlock.height();
        $(polygon).css('transform','rotate(0deg)');
        $(polygon).css('margin-top','0%');
        container.addClass("drop-active");
        contentBlock.height(reqHeight);
    };
    
    const closeEveryItem = (container) =>{
        
        const items = container.find(".team__drop");
        const itemContainer = container.find(".team__member");
        const polygon = container.find('.polygon');
        $(polygon).css('transform','rotate(180deg)');
        $(polygon).css('margin-top','3%');
        itemContainer.removeClass("drop-active");
        items.height(0);
    };
    
    
    
    $(".team__title").click((e) =>{
        const $this = $(e.currentTarget);
        const container = $this.closest(".team__list");
        const elemContainer = $this.closest(".team__member");
        
        
        if(elemContainer.hasClass("drop-active")){
             
             closeEveryItem(container);
            
       } else {
                closeEveryItem(container);
                openItem($this);
            }
        
    });
    
//vertical acardeon                      
        const mesureWidth = item =>{
            const screenWidth = $(window).width();
            const container = item.closest(".sec-8__content");
            const titlesBlocks = container.find(".visible-part");
            const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
            return screenWidth - titlesWidth;
        }             
                      
        const openItems = (item) =>{
        const container = item.closest(".sec-8__item");
        const items = container.find(".hidden");
        const text = container.find(".sec-8__text");
        const reqWidth = mesureWidth(item);
        container.addClass("item-active");
        items.width(reqWidth);
        text.width(reqWidth-55);//-30
    };
    
    const closeEveryItems = (container) =>{
        
        const items = container.find(".hidden");
        const itemContainer = container.find(".sec-8__item");
        
        itemContainer.removeClass("item-active");
        items.width('0px');
    };
    
    
    
    $(".visible-part").click((e) =>{
        const $this = $(e.currentTarget);
        const container = $this.closest(".sec-8__content");
        const elemContainer = $this.closest(".sec-8__item");
        
        
        if(elemContainer.hasClass("item-active")){
             
             closeEveryItems(container);
            
       } else {
                closeEveryItems(container);
                openItems($this);
            }
        
    });
        $(".sec-8-close").click((e)=>{
           e.preventDefault();
           const $this = $(e.currentTarget);
           const elemContainer = $this.closest(".sec-8__item");
           closeEveryItems(elemContainer);
        });
                      
                                   
    //form

    
  const body = document.querySelector('body');
  const myForm = document.querySelector('#myForm');
  const sendBtn = document.querySelector('#send');
  const modal = document.querySelector('#modal');
  const modalText = document.querySelector('#modalText');

  sendBtn.addEventListener('click', sendForm);
  modal.addEventListener('click', closePopup);

  function sendForm(e) {
    e.preventDefault();

    if(validateForm(myForm)) {
           console.log('валидация прошла!');

          let data = new FormData();
          data.append("name", myForm.elements.name.value);
          data.append("phone", myForm.elements.phone.value);
          data.append("comment", myForm.elements.comment.value);
          data.append("to", "my@mail.ru");
          const xhr = new XMLHttpRequest();

          xhr.responseType = 'json';
          xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
          xhr.send(data);
          xhr.addEventListener('load', () => {
            modal.classList.add('active');
            body.classList.add('locked');
            if(xhr.response.status === 0) {
              modalText.innerText = xhr.response.message;
            } else {
              modalText.innerText = xhr.response.message;
            }
          })
    }
  }

  function validateForm(form) {
    let valid = true;

    if(!validateField(form.elements.name)) {
      valid = false;
    }

    if(!validateField(form.elements.phone)) {
      valid = false;
    }

    if(!validateField(form.elements.comment)) {
      valid = false;
    }

    return valid;
  }

  function  validateField(field) {
    if(!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;
      return false;
    } else {
      field.nextElementSibling.textContent = '';
      return true;
    }
  }

  function closePopup(e) {
    e.preventDefault();
    modal.classList.remove('active');
    body.classList.remove('locked');
  }







$(".slider-btn-hover").click((e)=>{
           e.preventDefault();
});       
        
///////scroll
        
const sections = $(".section");
const display = $(".maincontent");

        
let inScroll = false;
sections.first().addClass("scroll-active");        
        
const performTransition = sectionEq =>{
    if(inScroll==false){
    inScroll = true;
    var position = 0;
    const sideMenu = $(".fixed-menu");
    if(sectionEq>8){
        sectionEq = 0
        position = sectionEq * -100;
    }else{
        position = sectionEq * -100;
    }
            
        
    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr("data-theme");
    const fixedlink = $(".fixed-menu");
        
        if(menuTheme == "black"){
            fixedlink.addClass("shadowed");
        } else {
            fixedlink.removeClass("shadowed");
        }
    display.css({
        transform: `translateY(${position}%)`
    });
    sections.eq(sectionEq).addClass("scroll-active").siblings().removeClass("scroll-active");
    
    
    setTimeout(()=>{
        inScroll = false;

        sideMenu
            .find(".fixed-menu__link")
            .eq(sectionEq)
            .addClass("fixed-menu__link--active")
            .siblings()
            .removeClass("fixed-menu__link--active");
        
        },1300);
        
         
        
    }
}
const scrollViewport = direction => {
    const activeSection = sections.filter(".scroll-active"); 
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
    
    if(direction == "next" && nextSection.length){
        performTransition(nextSection.index());
    }
    if(direction == "prev" && prevSection.length){
        performTransition(prevSection.index());
    }
}
        
        
$(window).on("wheel", e=>{
   const deltaY = e.originalEvent.deltaY;
    
    if(deltaY > 0){
        
        scrollViewport("next");
    }
    if(deltaY < 0){
        scrollViewport("prev");
    }
});

$(window).on("keydown", e=>{
    const tagName = e.target.tagName.toLowerCase();
    if(tagName != "input" && tagName !="textarea"){
    switch(e.keyCode){
        case 38: //prev
            scrollViewport("prev");
            break;
            
        case 40: //next
            scrollViewport("next");
            break;
    }}
});
    
        
        
        
           
        
        
        

//fixed menu

$("[data-scroll-to]").click(e =>{
    e.preventDefault();
    const $this = $(e.currentTarget);
    const container = $this.closest(".fixed-menu__list");   
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-sec-id=${target}]`);
    
    if($this.hasClass("fix-active")){
             
             closeFixItem(container);
            
       } else {
                closeFixItem(container);
                openFixItem($this);
            }
    performTransition(reqSection.index());
})
        const closeFixItem = (container) =>{
            
           const itemContainer = container.find(".fixed-menu__link");
           itemContainer.removeClass("fix-active");
           $(itemContainer).css('border-color','transparent');
            
        };
        
        const openFixItem = (item) =>{
            item.addClass("fix-active");
            const activecolor = $(".fixed-menu");
            if(activecolor.hasClass("shadowed")){
                $(item).css('border-color','black');
            } else{
            $(item).css('border-color','white');
            }
        }

//player
let player;
const playerContainer = $('.player');
const playerStart = $('.player__start');
const volumeBtn = $(".volume__pic");


let eventsInit = () => {
    $(".player__start").click(e => {
        e.preventDefault();

        const btn = $(e.currentTarget);

        if (playerStart.hasClass("player--paused")){

            
            player.pauseVideo();

        }else{
            
            player.playVideo();
        }
        
        onPlayerReady();
    });

    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = 
            (player.getDuration() / 100) * newButtonPositionPercent;


        $(".player__playback-button").css({
            left: `${newButtonPositionPercent}%`
        });

        player.seekTo(newPlaybackPositionSec);
    });

    $(".player__splash").click(e => {
        player.playVideo();
    });


    $(".volume__pic").click(e => {
        e.preventDefault();

        if (volumeBtn.hasClass("volume__pic--nosound")){

            player.unMute();
            volumeBtn.removeClass("volume__pic--nosound");

        }else{
            
            player.mute();
            volumeBtn.addClass("volume__pic--nosound");
        }
    });

    $(".volume__playback").click(e => {

        const barVolume = $(e.currentTarget);
        const clickedPositionVolume = e.originalEvent.layerX;
        const newVolumeButtonPositionPercent = (clickedPositionVolume / barVolume.width()) * 100;
        let volumePoint = player.getVolume();
    
    
        $(".volume__playback-button").css({
            left: `${newVolumeButtonPositionPercent}%`
        });

        player.setVolume(newVolumeButtonPositionPercent);
        
    });

    
};


const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();

    if (typeof interval !== "undefined"){
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;

        $(".player__playback-button").css({
            left: `${completedPercent}%`
        });

    }, 1000);
};


const onPlayerStateChange = event => {
    switch(event.data){
        case 1:
            playerContainer.addClass("active");
            playerStart.addClass("player--paused");
            break;
        case 2:
            playerContainer.removeClass("active");
            playerStart.removeClass("player--paused");
            break;
    }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '405',
        width: '660',
        videoId: 'LXb3EKWsInQ',
        events:{
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modesbranding: 0
        }
    })
};


eventsInit();
     
        
        
        
        
        
        
        
        
        
//map
let myMap;

const init = () =>{
    myMap = new ymaps.Map("map",{
    center: [55.755,37.60],
    zoom:14,
    controls:[]
});
    
   const points = [
       [55.7429,37.5814],
       [55.758858,37.58289],
       [55.749823,37.604427],
       [55.757818,37.620551]
   ];
    
    const myCollection = new ymaps.GeoObjectCollection({},{
        draggable:false,
        iconLayout: 'default#image',
        iconImageHref:'./img/section_5/point.png',
        iconImageSize: [35, 47],
        iconImageOffset: [-3, -42]
    });
    
    points.forEach(point =>{
        myCollection.add(new ymaps.Placemark(point));
    })
    
    myMap.geoObjects.add(myCollection);
    //myMap.behaviors.disable('scrollZoom');
}
        
ymaps.ready(init);



}); 









