function drow(data) {
    $startPage.classList.remove("nonePage");
    $startPageSubmit.classList.remove("startPage")
    $startPageSubmit.classList.add("nonePage")
    console.log(data)
    data.map(elem => {
        if (elem.text===0){
            return
        }else {
        ulList.innerHTML += `<li class='newTask' id='${elem.id}' >${elem.text}</li>`
        console.log(elem)
        }
    })

}
function upload(text, id){
    let node = document.createElement("LI");
    node.className = "newTask"
    node.id =`${id}`;
    let textnode = document.createTextNode(`${text}`);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    $taskText.value = ""
    document.getElementById('feedback').innerHTML = ""
}