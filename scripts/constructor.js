function choosePicture(cake, cream, filling){
    if (cake === "Торт"){
        if (filling === "Клубника"){
            if (cream === "Шоколадный"){
                return "../images/cake-chocolate-strawberry.jpeg"
            }
            else{
                return "../images/cake-vanila-strawberry.jpeg"
            }
        }
        else{
            if (cream === "Шоколадный"){
                return "../images/cake-chocolate.jpeg"
            }
            else{
                return "../images/cake-berries.jpeg"
            }
        }
    }
    else{
        if (cream === "Шоколадный"){
            return "../images/bento-cake-chocolate.jpeg"
        }
        else{
            if (filling === "Клубника"){
                return "../images/bento-cake-vanila-strawberry.jpeg"
            }
            else{
                return "../images/bento-cake-blueberry.jpeg"
            }
        }
    }
}

function mapForm(){
    const biscuit= document.getElementById("biscuit").value;
    const cream =  document.getElementById("cream").value;
    const filling = document.getElementById("filling").value;

    const text1 = document.getElementById("cake").value;
    const text2 = "Бисквит: " + biscuit;
    const text3 = "Крем: " + cream;
    const text4 = "Наполнитель: " + filling;
    const text5 = "Пожелания по дизайну: " + document.getElementById("design").value;
    const pic = choosePicture(text1, cream, filling);

    return { text1, text2, text3, text4, text5, pic};
}

function createElementMap(order){
    let li = document.createElement("li");
    li.classList.add("constructor-grid")

    let div1 = document.createElement("div");
    div1.textContent = order.text1;
    div1.classList.add("text-1")
    li.appendChild(div1);

    let div2 = document.createElement("div");
    div2.textContent = order.text2;
    div2.classList.add("text-2")
    li.appendChild(div2);

    let div3 = document.createElement("div");
    div3.textContent = order.text3;
    div3.classList.add("text-3")
    li.appendChild(div3);

    let div4 = document.createElement("div");
    div4.textContent = order.text4;
    div4.classList.add("text-4")
    li.appendChild(div4);

    let div5 = document.createElement("div");
    div5.textContent = order.text5;
    div5.classList.add("text-5")
    li.appendChild(div5);

    let div6 = document.createElement("div");
    div6.textContent = "*на фото изображен стандартный дизайн торта, если вы указали другой дизайн, его с вами обсудит оператор";
    div6.classList.add("text-6")
    li.appendChild(div6);

    for (let i = 0; i < li.childNodes.length; i++){
        li.childNodes[i].classList.add("constructor-text");
    }

    let pic = document.createElement("img")
    pic.src = order.pic
    pic.classList.add("picture")
    li.appendChild(pic);

    document.getElementById("constructor-list").appendChild(li);
}

function createNewElement() {
    createElementMap(mapForm())
}

function updateStorage(){
    const items = document.querySelectorAll('.constructor-grid');

    let values = [];
    items.forEach((item) => {
        const text1 = item.getElementsByClassName('text-1')[0].innerText;
        const text2 = item.getElementsByClassName('text-2')[0].innerText;
        const text3 = item.getElementsByClassName('text-3')[0].innerText;
        const text4 = item.getElementsByClassName('text-4')[0].innerText;
        const text5 = item.getElementsByClassName('text-5')[0].innerText;
        const pic = item.getElementsByClassName('picture')[0].src;
        values.push({ text1, text2, text3, text4, text5, pic});
    });

    localStorage.setItem('order', JSON.stringify(values));
}

function setFormOnSubmit () {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        createNewElement();
        updateStorage()
        form.reset();
    })
}

function initData(){
    if (localStorage.getItem('order')) {
        const orders= JSON.parse(localStorage.getItem('order'));
        orders.forEach(order => {
            createElementMap(order);
        });
    }
}

// localStorage.removeItem('order')
initData();
setFormOnSubmit();