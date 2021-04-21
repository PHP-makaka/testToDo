class List_Item{
    constructor(target) {
        this.target = target
        this.taskTest =document.getElementById('userTask')
    }
    refreshDATA(){

    }
    complitetItem(){

    }
    addNewItem(){
        let node = document.createElement("li");
        node.className = "newTask"
        let textnode = document.createTextNode(`${this.$taskText.value}`);
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
        this.$taskText.value = ""
        document.getElementById('feedback').innerHTML = ""

        this.refreshDATA()
    }
    deleteItem(){

        this.refreshDATA()
    }

}