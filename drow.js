function drow(data) {
    $startPage.classList.remove("nonePage");
    $startPageSubmit.classList.remove("startPage")
    $startPageSubmit.classList.add("nonePage")

    data.map(elem => {
        ulList.innerHTML += `<li class='newTask'>${elem.text}</li>`
        console.log(elem.text)
    })

}
function upload(text){
    let node = document.createElement("LI");
    node.className = "newTask"
    let textnode = document.createTextNode(`${text}`);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    $taskText.value = ""
    document.getElementById('feedback').innerHTML = ""
}