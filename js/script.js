/*
const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
*/

const item = document.getElementsByClassName('item');  
const item2 = document.getElementsByClassName('item2')

let cont = 0;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


next.addEventListener('click',function(){
     item[cont].classList.remove('active');
     item2[cont].classList.remove('selected');

    cont++;

    if(cont > item.length - 1) cont = 0;

    item[cont].classList.add('active');
    item2[cont].classList.add('selected');
});

prev.addEventListener('click',function(){
    item[cont].classList.remove('active');
    item2[cont].classList.remove('selected');

    cont--;

    if(cont < 0) cont = item.length - 1;

    item[cont].classList.add('active');
    item2[cont].classList.add('selected');
});