const $startPageSubmit = document.getElementById("startPage")
const $taskText = document.getElementById('userTask')


$startPageSubmit.addEventListener("click", authorization)

$taskText.addEventListener("input",changeInput)
document.addEventListener('click', itemTask);


function itemTask(e) {
    e.preventDefault();

    const eventChek = checkEvent()
    const $target = e.target

    if (eventChek.add_Task($target, $taskText)) {
        const bodySend = {
            text: $taskText.value,
            status: 'new'
        }

        sendRequest('POST', requestURL, bodySend)
            .then((data) => upload(bodySend, JSON.parse(data)))
            .catch((er) => console.log(er))

        return $taskText.value = ""

    }
    if (eventChek.add_Task_null($target, $taskText)) {
        $taskText.value = ""
        document.getElementById('feedback').innerHTML = "Enter text pleace..."
    }
    if (eventChek.delete_Task($target)) {

        const deleteReqURL = requestURL + '/delete'

        const bodySend = {
            text: $target.value,
            id: $target.id,
            target: $target,
            status: 'deleteTask'
        }

        sendRequest('POST', deleteReqURL, bodySend)
            .then((data) => upload(bodySend))
            .catch((er) => console.log(er))
    }
    if (eventChek.complited_Task($target)) {
        const bodySend = {
            text: $target.innerText,
            id: $target.id,
            target: $target,
            status: 'taskComplited'
        }
        sendRequest('POST', requestURL, bodySend)
            .then((data) => upload(bodySend))
            .catch((er) => console.log(er))

    }

}

