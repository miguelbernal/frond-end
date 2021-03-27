document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const alert = document.getElementById('alert');
    const table = document.getElementById('table');
    const btn = document.getElementById('add');
    let id = 0;
    if(localStorage.getItem("id") !== null){
        id = parseInt(localStorage.getItem("id"));
        console.log(localStorage.getItem("tbody"));
        table.children[1].innerHTML = localStorage.getItem("tbody");
    }
    let idActual = 0;

    editTodo = (id) => {
        idActual = id;
        xtitle = document.getElementById(id).children[0].textContent;
        xdescription = document.getElementById(id).children[1].textContent;
        title.value = xtitle;
        description.value = xdescription;
        btn.innerText = "Change"
    }

    deleteTodo = (id) => {
        console.log(document.getElementById(id));
        document.getElementById(id).remove();
    }

    function addTodo() {
        if (title.value === '' || description === '') {
            alert.classList.remove('d-none');
            alert.innerText = 'Title y description son requeridos';
            return;
        }
        alert.classList.add('d-none');
        if(idActual === 0){
            const row = table.children[1].insertRow();
            id = id + 1;
            localStorage.setItem("id",id);
            row.setAttribute("id", id);
            row.innerHTML = `
                <td>${title.value}</td>
                <td>${description.value}</td>
                <td class="text-center">
                    <input type="checkbox">
                </td>
                <td class="text-right">
                    <button class="btn btn-primary mb-1" onclick="editTodo(${id})">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="btn btn-danger mb-1 ml-1" onclick="deleteTodo(${id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            `;
            localStorage.setItem("tbody",table.children[1].innerHTML);
        } else {
            document.getElementById(idActual).children[0].textContent = title.value;
            document.getElementById(idActual).children[1].textContent = description.value;
            btn.innerText = "Add"
            idActual = 0;
            localStorage.setItem("tbody",table.children[1].innerHTML);
        }

        title.value = '';
        description.value = '';
        title.focus();

    }

    btn.onclick = addTodo;

});