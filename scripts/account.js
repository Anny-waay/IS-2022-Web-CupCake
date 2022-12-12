const getUser = async () => {
    return await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json());
}

const container = document.getElementById('user-container');
const template_users = document.getElementById("user-template");
const template_error = document.getElementById("error-template");

const loadUser = async () => {
    container.innerHTML = '' +
        '<img src="images/loading.gif" width="200" height="200" alt="mask">';

    const userNum = Math.floor(Math.random() * 10);
    try {
        container.innerHTML = '';
        const item = (await getUser()).slice(userNum, userNum + 1)[0]
        const user = template_users.content.cloneNode(true);
        let p = user.querySelectorAll("p");
        p[0].textContent = "Имя: " + item.name
        p[1].textContent = "Логин: " + item.username
        p[2].textContent = "Почта: " + item.email;
        p[3].textContent = "Улица: " + item.address.street;
        p[4].textContent = "Телефон: " + item.phone;
        container.appendChild(user);
    } catch (e) {
        const error = template_error.content.cloneNode(true);
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.appendChild(error);
    }
}

loadUser();