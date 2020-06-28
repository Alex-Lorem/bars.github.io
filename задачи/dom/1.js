
//let position = 0;
//const slidesToShow = 3;
//const slidesToScroll = 1;
//const container = document.querySelector('.slider__container');
//const track = document.querySelector('.slider__track');
////const item = document.querySelector('.slider__item');
//const btnPrev = document.querySelector('.slider__prev');
//const btnNext = document.querySelector('.slider__next');
//const items = document.querySelectorAll('.slider__item');
//const itemsCount = items.length;
//const itemWidth = container.clientWidth / slidesToShow;
//const movePosition = slidesToScroll * itemWidth;
//
//
//items.forEach((item) => {
//    item.style.minWidth = '${itemWidth}';
//});
//
//btnNext.addEventListener('click',() => {
//    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth)/itemWidth;
//    
//    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//    
//    setPosition();
//    checkBtns();
//});
//
//btnPrev.addEventListener('click',() => {
//    const itemsLeft = Math.abs(position) / itemWidth;
//    
//    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//    
//    setPosition();
//    checkBtns();
//});
//const setPosition = () => {
//    track.style.transform = 'translateX(${position}px)';
//};
//
//const checkBtns = () => {
//    btnPrev.disabled = position === 0;
//    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
//};
//checkBtns();


const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const items = document.querySelector('#items');

let currentRight = 0;
rightBtn.addEventListener("click", e =>{
    e.preventDefault();
    
    currentRight+=193;
    
    items.style.right = '${currentRight}px';
})

leftBtn.addEventListener('click', e =>{
    e.preventDefault();
})


























