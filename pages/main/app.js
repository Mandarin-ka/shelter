/*burger */

const burg=document.querySelector('.burger');
const logo=document.querySelector('.logo');
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
const links=document.querySelectorAll('.nav-item');
const backgr=document.querySelector('.backgr');
const body=document.querySelector('body');


burg.addEventListener('click', burger)

links.forEach(link=>{
        link.addEventListener('click',backgrClick)
})

backgr.addEventListener('click', backgrClick)

function backgrClick(){
    cross.classList.remove('active');
    popup.classList.remove('active');
    backgr.classList.remove('active');
    body.classList.remove('active');
    burg.classList.remove('active');
    logo.classList.remove('active');
    menu.classList.remove('active');
    nav.classList.remove('active');
}

function burger(e){
    e.preventDefault();
    burg.classList.toggle('active');
    logo.classList.toggle('active');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('active');
    backgr.classList.toggle('active');
} 



/*==============================================================================================*/


/*slider*/
const left=document.querySelector('.left');
const right=document.querySelector('.right');

let imgs=document.querySelectorAll('.item-img')
let names = document.querySelectorAll('.item-h2');

function startPets(){
    for (let i=0;i<3;i++){
        imgs[i].src=pets[i].img;
        names[i].textContent=pets[i].name
    }
}
startPets();

console.log(imgs[0].src)

let counter1=0;
let counter2=1;
let counter3=2;
right.addEventListener('click', e=>{
    if(counter1+3<8){
        counter1+=3;
        imgs[0].src=pets[counter1].img; 
        names[0].textContent=pets[counter1].name
    }
    else{
        counter1=Math.abs(8-counter1-3);
        imgs[0].src=pets[counter1].img; 
        names[0].textContent=pets[counter1].name
    }

    if(counter2+3<8){
        counter2+=3;
        imgs[1].src=pets[counter2].img; 
        names[1].textContent=pets[counter2].name
    }
    else{
        counter2=Math.abs(8-counter2-3);
        imgs[1].src=pets[counter2].img; 
        names[1].textContent=pets[counter2].name
    }

    if(counter3+3<8){
        counter3+=3;
        imgs[2].src=pets[counter3].img; 
        names[2].textContent=pets[counter3].name
    }
    else{
        counter3=Math.abs(8-counter3-3);
        imgs[2].src=pets[counter3].img; 
        names[2].textContent=pets[counter3].name
    }


})

left.addEventListener('click', e=>{
    
    if(counter1-3>-1){
        counter1-=3;
        imgs[0].src=pets[counter1].img; 
        names[0].textContent=pets[counter1].name
    }
    else{
        counter1=Math.abs(8-counter1-3);
        imgs[0].src=pets[counter1].img; 
        names[0].textContent=pets[counter1].name
    }

    if(counter2-3>-1){
        counter2-=3;
        imgs[1].src=pets[counter2].img; 
        names[1].textContent=pets[counter2].name
    }
    else{
        counter2=Math.abs(8-counter2-3);
        imgs[1].src=pets[counter2].img; 
        names[1].textContent=pets[counter2].name
    }

    if(counter3-3>-1){
        counter3-=3;
        imgs[2].src=pets[counter3].img; 
        names[2].textContent=pets[counter3].name
    }
    else{
        counter3=Math.abs(8-counter3-3);
        imgs[2].src=pets[counter3].img; 
        names[2].textContent=pets[counter3].name
    }
    
})

/*=============================================================================================================*/

/*Pop-up*/

const popup=document.querySelector('.popup');
const cross=document.querySelector('.cross');
const popupBtns=document.querySelectorAll('.item-btn');
console.log(popupBtns)



document.querySelectorAll('.slider-item').forEach(e=>{
    e.addEventListener('click',Popup)
})

function Popup(e){
    e.preventDefault();
    popup.classList.toggle('active');
    body.classList.toggle('active');
    cross.classList.toggle('active');
    backgr.classList.toggle('active');

    let counter=0;
    if(this.classList.contains('first')){
        counter=counter1;
    }
    else if (this.classList.contains('second')){
        counter=counter2
    }
    else {
        counter=counter3;
    }

    console.log(e);

    document.querySelector('.popup_img').src=pets[counter].img;
    document.querySelector('.popup_name').textContent=pets[counter].name;
    document.querySelector('.popup_breed_type').textContent=pets[counter].type+' - '+pets[counter].breed
    document.querySelector('.popup_p').textContent=pets[counter].description;
    document.querySelector('.pos-value_age').textContent=pets[counter].age;
    document.querySelector('.pos-value_inoc').textContent=pets[counter].inoculations;
    document.querySelector('.pos-value_disease').textContent=pets[counter].diseases
    document.querySelector('.pos-value_parasites').textContent=pets[counter].parasites
}


cross.addEventListener('click',backgrClick)