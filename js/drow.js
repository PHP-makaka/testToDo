const ulList = document.getElementById("list")
const $startPage = document.getElementById("page")

function drow(data) {
    $startPage.classList.remove("nonePage");
    $startPageSubmit.classList.remove("startPage")
    $startPageSubmit.classList.add("nonePage")
    data.map(elem => {
        if (elem.status == "inputTEXT") {
            $taskText.value = elem.inputText
            $taskText.dataset.idserv = elem.id
            return
        }
        ulList.innerHTML += `<li class='${elem.status}' id='${elem.id}' >${elem.text}</li>`
    })
}

function upload(body, data) {

    if (body.status == 'new') {
        let node = document.createElement("li");
        node.className = "new"
        node.id = `${data[data.length - 1].id}`;
        let textnode = document.createTextNode(`${body.text}`);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
        document.getElementById('feedback').innerHTML = ""
    }
    if (body.status == 'deleteTask') {
        body.target.className = "deleteTask"
        setTimeout(() => body.target.parentNode.removeChild(body.target), 500)
    }
    if (body.status == 'taskComplited') {
        body.target.className = "taskComplited"
    }
    if (body.inputText.trim().length) {
        if (!body.id) {
            data.map(elem => {
                if (elem.status == "inputTEXT") {
                    $taskText.dataset.idserv = elem.id
                }
            })
        }
        console.log(data)
    }
}