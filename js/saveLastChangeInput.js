const f = debounce(sendRequestDeb, 300);

function saveLastChangeInput(e) {
    e.preventDefault()
    let bodySend
    if (e.target.dataset.idserv) {
        bodySend = {
            status: "inputTEXT",
            inputText: e.target.value,
            id:e.target.dataset.idserv
        }

        // console.log(bodySend.id)

    } else {
        bodySend = {
            status: "inputTEXT",
            inputText: e.target.value,
        }

    }

    f('POST',tasks_List.url,bodySend)


}

function sendRequestDeb(method,url,bodySend){
    sendRequest(method,  url, bodySend)
        .then((data) => saveTextInput(bodySend, JSON.parse(data)))
        .catch((er) => console.log(er))
}

function saveTextInput(body,data){
    if (!body.id) {
        data.map(elem => {
            if (elem.status == "inputTEXT") {
                $taskText.dataset.idserv = elem.id
            }
        })
    }
        console.log(data)
}


function debounce(f, ms) {

    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };

}