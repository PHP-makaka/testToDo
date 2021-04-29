function checkEvent() {
    return {
        delete_Task: delete_Task,
        complited_Task: complited_Task
    }
    function delete_Task(target) {
        return target.className.indexOf('taskComplited')>=0 ? true : false
    }

    function complited_Task(target) {
        return target.className.indexOf('new')>=0 ? true : false
    }
}