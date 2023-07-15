const name_item = document.querySelectorAll('.item-head');
const search_item = document.getElementById('search-item')
const element_app = document.querySelectorAll('.item-app');
const filter_button = document.querySelectorAll('.list-name');

search_item.addEventListener('keyup',searchItem)

function searchItem(){
    let value_item = search_item.value.toLowerCase();
    Array.from(element_app).forEach(function(ele){
        let name_item = ele.querySelector('.infor').firstElementChild.textContent
        if(name_item.toLocaleLowerCase().indexOf(value_item) !== -1){
            ele.style.display = 'block'
        }
        else{
            ele.style.display = 'none'
        }
    })
    checkEmpty(element_app)
}

function checkEmpty(element){
    let count =0
    for(let i=0; i<element.length ; i++){
        if(element[i].style.display === 'block'){
            count++;
        }
    }
    if(count === 0){
        document.querySelector('#showtext').textContent = 'can\'t find'
    }
    else{
        document.querySelector('#showtext').textContent = ''
    }
}

Array.from(filter_button).forEach(function(button){
    button.addEventListener('click',function(event){
        document.querySelector('.more').style.display = 'block'
        for(let i=0;i<filter_button.length;i++){
            filter_button[i].classList.remove('color-filter');
        }
        this.classList.add('color-filter');

        let buttonAttr = event.target.dataset.filter;
        
        Array.from(element_app).forEach(function(element){
            let elementAttr = element.dataset.item;
            if(buttonAttr === elementAttr  || buttonAttr === 'all'){
                element.style.display = 'block';
            }   
            else {
                element.style.display = 'none';
            }
        })
    })
})


let thisPage =1;
let limit = 16;
let list = document.querySelectorAll('.section .item-app')

function loadItem(){
    let beginGet = limit *(thisPage - 1)
    let endGet = limit * thisPage - 1
    list.forEach((item,key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
    })
    listPage()
}

function btnActiveItemApp(){
    let btn_activeitem = document.getElementById('btn-search')
    btn.addEventListener('click', function(e){
})}

loadItem()
btnActiveItemApp()
function listPage(){
    let count = Math.ceil(list.length / limit)
    document.querySelector('.more').innerHTML = ''

    if(thisPage != 1){
        let prev = document.createElement('li')
        prev.innerText = '<'
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")")
        document.querySelector('.more').appendChild(prev)
    }

    for(i=1; i<=count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i
        if(i===thisPage){
            newPage.classList.add('active')
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")")
        document.querySelector('.more').appendChild(newPage)
    }

    if(thisPage != count){
        let next = document.createElement('li')
        next.innerText = '>'
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")")
        document.querySelector('.more').appendChild(next)
    }

}
function changePage(i){
    thisPage = i
    loadItem()
}
/*                      <li class="more-page">
								<i class="fa-solid fa-angles-left fa-sm more-page"></i>
						</li>
						<li class="more-page active">1</li>
						<li class="more-page">2</li>
						<li class="more-page">3</li>
						<li class="more-page">
								<i class="fa-solid fa-angles-right fa-sm more-page"></i>
						</li>*/