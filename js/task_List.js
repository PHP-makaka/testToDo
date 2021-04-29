class Task_List {
    constructor(htmlList, data, url) {
        this.htmlList = htmlList
        this.data = data;
        this.url = url;
    }

    getDrowData() {
        sendRequest('GET', tasks_List.url)
            .then((data)=> this.drow(JSON.parse(data)))
            .catch((er)=>console.log(er))

    };
    drow(data){
        setTimeout(() => {
            $Task_Page.classList.add("containerTask")
            $Task_Page.classList.remove("nonePage");
        }, 500)
        $startPageSubmit.classList.remove("startPage")
        $startPageSubmit.classList.add("startPageOff")

        data.map((elem, ind) => {
            if (elem.status == "inputTEXT") {
                $taskText.value = elem.inputText
                $taskText.dataset.idserv = elem.id
                return
            }
            this.htmlList.innerHTML += `<li class='${elem.status}' id='${elem.id}' >${elem.text}</li>`

        })

    };

    uploudNewTask(body,data){
        let node = document.createElement("li");
        node.className = "new appead"
        node.id = `${data[data.length - 1].id}`;
        let textnode = document.createTextNode(`${body.text}`);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
        document.getElementById('feedback').innerHTML = ""
        data.map(elem=>{
                if (elem.status =='inputTEXT'){
                    let bodySend ={
                        status: "inputTEXT",
                        inputText: '',
                        id:elem.id
                    }
                    sendRequestDeb('POST',this.url,bodySend)
            }
        })
    }
    complitedTask(body,data){
        body.target.className = "taskComplited"
        body.target.classList.add("complitAnimate")
    }
    deleteTask(body,data){
        body.target.className = "deleteTask"
        setTimeout(() => body.target.parentNode.removeChild(body.target), 300)
    }

}