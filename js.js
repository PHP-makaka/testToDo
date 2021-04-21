const $startPageSubmit =document.getElementById("startPage")
const $startPage =document.getElementById("page")
const ulList =document.getElementById("list")
const $taskText = document.getElementById('userTask')
const $inputName =document.getElementById("name")

document.addEventListener('click', addNewItem);

$startPageSubmit.addEventListener("click",authorization)

// drow(name)

function addNewItem(e) {
    e.preventDefault();
    let imem =new List_Item()
    let eventChek= checkEvent()
    let $target = e.target

    // console.log(event.search_btn($target,$taskText))

    if (eventChek.add_Task($target,$taskText)) {
        // ulList.innerHTML+= `<li class='newTask'>${$taskText.value}</li>`
        let bodySend ={
            text:$taskText.value,
        }
        sendRequest('POST', requestURL,bodySend)
            .then((data)=> upload(bodySend.text))
            .catch((er)=>console.log(er))

        // let node = document.createElement("LI");
        // node.className = "newTask"
        // let textnode = document.createTextNode(`${$taskText.value}`);
        // node.appendChild(textnode);
        // document.getElementById("list").appendChild(node);
        // $taskText.value = ""
        // document.getElementById('feedback').innerHTML = ""
    } else if (eventChek.add_Task_null($target,$taskText)){
        $taskText.value = ""
        document.getElementById('feedback').innerHTML = "Enter text pleace..."
    }

    if (eventChek.delete_Task($target)) {
        let target = e.target;
        target.className = "deleteTask"
        setTimeout(() => target.parentNode.removeChild(target), 500)
    } else if (eventChek.complited_Task($target)) {
        let target = e.target;
        // console.log(e)
        target.innerText += " -Complited"
        target.className = "taskComplited"
    }
}


// xhr.open('GET', requestURL)
// xhr.onload = () => {
//     if (xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//         console.log(JSON.parse(xhr.response))
//     }
// }
// xhr.onerror = () => {
//     console.log(xhr.response)
// }
// xhr.send()




let body = {
    text:"привет мир",
    name:"ddddd"
}
let body1 = {
    text:"как дела ",
    name: "ZHEBTMax",
    age: 24
}
// sendRequesr('POST',requestURL,body)
//     .then(data=>console.log(data))
//     .catch(er=>console.log(er))

