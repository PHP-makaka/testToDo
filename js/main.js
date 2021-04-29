const $startPageSubmit = document.getElementById("startPage");
const $taskText = document.getElementById('userTask');
const $submitTask = document.getElementById('submitTask');
const $ulList = document.getElementById("list");
const $Task_Page =document.getElementById('containerTask');

const tasks_List= new Task_List($ulList);

$startPageSubmit.addEventListener("click", authorization)

$taskText.addEventListener("input", saveLastChangeInput)

$submitTask.addEventListener('click', addNewTask)

tasks_List.htmlList.addEventListener('click', changeStatus);

function addNewTask(e) {
    e.preventDefault();

    if ($taskText.value.trim().length != 0) {

        const taskBody = new Task($taskText.value, "new")

        change_Tasks_List(taskBody,'uploudNewTask')

        return $taskText.value = ""

    } else if ($taskText.value.trim().length == 0) {
        $taskText.value = ""
        document.getElementById('feedback').innerHTML = "Enter text pleace..."
        return
    }

}

function changeStatus(e) {

    e.preventDefault();

    const eventChek = checkEvent()
    const $target = e.target

    if (eventChek.delete_Task($target)) {

        const taskBody = new Task($target.innerText, "deleteTask", $target.id, $target)
        const deleteReqURL = tasks_List.url + '/delete'

        change_Tasks_List(taskBody,"deleteTask", deleteReqURL)
        return
    }
    if (eventChek.complited_Task($target)) {

        const taskBody = new Task($target.innerText, "taskComplited", $target.id, $target)

        change_Tasks_List(taskBody,"complitedTask")

        return
    }


}


function change_Tasks_List(taskBody,method, url=tasks_List.url) {

    sendRequest('POST', url, taskBody)
        .then((data) => tasks_List[method](taskBody,JSON.parse(data)))
        .catch((er) => console.log(er))
}
