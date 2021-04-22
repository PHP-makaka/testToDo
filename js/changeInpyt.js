function changeInput(e) {
    e.preventDefault()
    let bodySend
    if (e.target.dataset.idserv) {
        bodySend = {
            status: "inputTEXT",
            inputText: e.target.value,
            id:e.target.dataset.idserv
        }
        console.log(bodySend.id)
    } else {
        bodySend = {
            status: "inputTEXT",
            inputText: e.target.value,
        }
    }
    sendRequest('POST', requestURL, bodySend)
        .then((data) => upload(bodySend, JSON.parse(data)))
        .catch((er) => console.log(er))
}