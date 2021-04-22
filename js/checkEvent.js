function checkEvent() {
    return {
        add_Task: add_Task,
        add_Task_null: add_Task_null,
        delete_Task: delete_Task,
        complited_Task: complited_Task
    }

    function add_Task(target, taskText) {
        if (target.className == 'search-btn' && taskText.value.trim().length != 0) {
            return true
        } else return false
    }

    function add_Task_null(target, taskText) {
        if (target.className == 'search-btn' && taskText.value.trim().length == 0) {
            return true
        } else return false
    }

    function delete_Task(target) {
        return target.className == 'taskComplited' ? true : false
    }

    function complited_Task(target) {
        return target.className == 'new' ? true : false
    }
}