const burg=document.querySelector('.burger');
const logo=document.querySelector('.logo');
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
const links=document.querySelectorAll('.nav-item');
const backgr=document.querySelector('.backgr');
const body=document.querySelector('body');

//========================================================================================
/*burger*/
burg.addEventListener('click', burger)

links.forEach(link=>{
        link.addEventListener('click',backgrClick)
})

backgr.addEventListener('click', backgrClick)

function backgrClick(){
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

/*======================================================================================*/
/*Pop-up*/
const popup=document.querySelector('.popup');
const cross=document.querySelector('.cross')

const cards=document.querySelector('.pets-items');
const petsCards=document.querySelectorAll('.pets-item')
let startArr=[0,1,2,3,4,5,6,7];

function shuffle(arr){
    arr.sort(()=>Math.random()-0.5)
    return arr;
}

let tempArr=[];

for (let i=0;i<8;i++){
    tempArr[i]=startArr[i]
}

let cardsArray=[];
let tempCounter=0;

for (let i=0;i<48;i++){
    if(tempCounter<8){
        cardsArray[i]=tempArr[tempCounter];
        tempCounter++;
    }
    else{
        shuffle(tempArr)
        tempCounter=0;
        cardsArray[i]=tempArr[tempCounter];
        tempCounter++;
    }
}

shuffle(startArr)

for(let i=0;i<petsCards.length;i++){
    petsCards[i].children[0].src=pets[cardsArray[i]].img;
    petsCards[i].children[1].textContent=pets[cardsArray[i]].name
}

for(let i=0;i<petsCards.length;i++){
    petsCards[i].children[0].src=pets[cardsArray[i]].img;
    petsCards[i].children[1].textContent=pets[cardsArray[i]].name
}



let current;
cards.addEventListener('click', e=>{
current=0;
    if(e.target.classList.contains('pets-items')){
        return;
    }

    else if(e.target.classList.contains('pets-item')){
        for (let i=0;i<8;i++){
            if(e.target==petsCards[i]){
                current=i;
            }
        }
    }
    
    else if(e.target.parentNode.classList.contains('pets-item')){
        for (let i=0;i<8;i++){
            if(e.target.parentNode==petsCards[i]){
                current=i;
            }
        }
    }

    popup.classList.toggle('active');
    body.classList.toggle('active');
    cross.classList.toggle('active');
    backgr.classList.toggle('active');


    document.querySelector('.popup_img').src=pets[startArr[current]].img;
    document.querySelector('.popup_name').textContent=pets[startArr[current]].name;
    document.querySelector('.popup_breed_type').textContent=pets[startArr[current]].type+' - '+pets[startArr[current]].breed
    document.querySelector('.popup_p').textContent=pets[startArr[current]].description;
    document.querySelector('.pos-value_age').textContent=pets[startArr[current]].age;
    document.querySelector('.pos-value_inoc').textContent=pets[startArr[current]].inoculations;
    document.querySelector('.pos-value_disease').textContent=pets[startArr[current]].diseases
    document.querySelector('.pos-value_parasites').textContent=pets[startArr[current]].parasites
})

cross.addEventListener('click', backgrClick)

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
/*===================================================================================================*/
//Pagination

let media1 = window.matchMedia("(min-width: 1101px)").matches;
let media2 = window.matchMedia("(min-width: 768px) and (max-width:1100px)").matches;
let media3 = window.matchMedia("(max-width:767px)").matches;

const controllers = document.querySelector('#pagination');

 


const next=document.querySelector('.next');
const prev=document.querySelector('.prev');
const firstPage=document.querySelector('.first-page');
const lastPage=document.querySelector('.last-page');
const counterT=document.querySelector('.counter');

let counter=1;
controllers.addEventListener('click', e=>{
    e.preventDefault();
    if(media1){
    if(e.target.classList.contains('next')){
        counter++;
        if(counter!=1){
            prev.removeAttribute('disabled');
            firstPage.removeAttribute('disabled');
        }
        if(counter<7){
            let temp=0;
            for(let i=(counter-1)*8;i<counter*8;i++){
                petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                temp++;
            }
        }
        if(counter==6){
            e.target.setAttribute('disabled','disabled')
            lastPage.setAttribute('disabled','disabled')
        }
    }
    

    if(e.target.classList.contains('prev')){
        counter--;
        if(counter!=6){
            next.removeAttribute('disabled');
            lastPage.removeAttribute('disabled');
        }

        if(counter>0){
            let temp=0;
            for(let i=(counter-1)*8;i<counter*8;i++){
                petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                temp++;
            }
        }

        if(counter==1){
            e.target.setAttribute('disabled','disabled')
            firstPage.setAttribute('disabled','disabled')
        }
    }

    if(e.target.classList.contains('first-page')){
        counter=1;
        let temp=0;
        for(let i=(counter-1)*8;i<counter*8;i++){
            petsCards[temp].children[0].src=pets[cardsArray[i]].img;
            petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
            temp++;
        }
        e.target.setAttribute('disabled','disabled')
        prev.setAttribute('disabled','disabled')
        next.removeAttribute('disabled')
        lastPage.removeAttribute('disabled')
    }


    if(e.target.classList.contains('last-page')){
        counter=6;
        let temp=0;
        for(let i=(counter-1)*8;i<counter*8;i++){
            petsCards[temp].children[0].src=pets[cardsArray[i]].img;
            petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
            temp++;
        }
        e.target.setAttribute('disabled','disabled')
        next.setAttribute('disabled','disabled')
        prev.removeAttribute('disabled')
        firstPage.removeAttribute('disabled')
    }
        counterT.textContent=counter
    }

    else if(media2){
        if(e.target.classList.contains('next')){
            counter++;
            if(counter!=1){
                prev.removeAttribute('disabled');
                firstPage.removeAttribute('disabled');
            }
            if(counter<9){
                let temp=0;
                for(let i=(counter-1)*6;i<counter*6;i++){
                    petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                    petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                    temp++;
                }
            }
            if(counter==8){
                e.target.setAttribute('disabled','disabled')
                lastPage.setAttribute('disabled','disabled')
            }
        }

        if(e.target.classList.contains('prev')){
            counter--;
            if(counter!=1){
                next.removeAttribute('disabled');
                lastPage.removeAttribute('disabled');
            }
            if(counter<9){
                let temp=0;
                for(let i=(counter-1)*6;i<counter*6;i++){
                    petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                    petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                    temp++;
                }
            }
            if(counter==1){
                e.target.setAttribute('disabled','disabled')
                firstPage.setAttribute('disabled','disabled')
            }
        }

        if(e.target.classList.contains('first-page')){
            counter=1;
            let temp=0;
            for(let i=(counter-1)*6;i<counter*6;i++){
                petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                temp++;
            }
            e.target.setAttribute('disabled','disabled')
            prev.setAttribute('disabled','disabled')
            next.removeAttribute('disabled')
            lastPage.removeAttribute('disabled')
        }
    
        if(e.target.classList.contains('last-page')){
            counter=8;
            let temp=0;
            for(let i=(counter-1)*6;i<counter*6;i++){
                petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                temp++;
            }
            e.target.setAttribute('disabled','disabled')
            next.setAttribute('disabled','disabled')
            prev.removeAttribute('disabled')
            firstPage.removeAttribute('disabled')
        }

        counterT.textContent=counter
    }

    else{
        if(e.target.classList.contains('next')){
            counter++;
            if(counter!=1){
                prev.removeAttribute('disabled');
                firstPage.removeAttribute('disabled');
            }
            if(counter<17){
                let temp=0;
                for(let i=(counter-1)*3;i<counter*3;i++){
                    petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                    petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                    temp++;
                }
            }
            if(counter==16){
                e.target.setAttribute('disabled','disabled')
                lastPage.setAttribute('disabled','disabled')
            }
        }

        if(e.target.classList.contains('prev')){
            counter--;
            if(counter!=1){
                next.removeAttribute('disabled');
                lastPage.removeAttribute('disabled');
            }
            if(counter<17){
                let temp=0;
                for(let i=(counter-1)*3;i<counter*3;i++){
                    petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                    petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                    temp++;
                }
            }
            if(counter==1){
                e.target.setAttribute('disabled','disabled')
                firstPage.setAttribute('disabled','disabled')
            }
        }

        if(e.target.classList.contains('first-page')){
            counter=1;
            let temp=0;
            for(let i=(counter-1)*3;i<counter*3;i++){
                petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                temp++;
            }
            e.target.setAttribute('disabled','disabled')
            prev.setAttribute('disabled','disabled')
            next.removeAttribute('disabled')
            lastPage.removeAttribute('disabled')
        }
    
        if(e.target.classList.contains('last-page')){
            counter=16;
            let temp=0;
            for(let i=(counter-1)*3;i<counter*3;i++){
                petsCards[temp].children[0].src=pets[cardsArray[i]].img;
                petsCards[temp].children[1].textContent=pets[cardsArray[i]].name
                temp++;
            }
            e.target.setAttribute('disabled','disabled')
            next.setAttribute('disabled','disabled')
            prev.removeAttribute('disabled')
            firstPage.removeAttribute('disabled')
        }

        counterT.textContent=counter
    }
})

//======================================================================================================
