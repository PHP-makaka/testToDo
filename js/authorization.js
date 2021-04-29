// ZHEN
const $inputName =document.getElementById("name")


function authorization(e){
    e.preventDefault();
    let $target =e.target

    let name =$inputName.value.trim()

    if ($target.className=='submitName' && $inputName.value.trim().length!=0){

        tasks_List.url =`https://jsfeajax.herokuapp.com/${name}/todo`

        tasks_List.getDrowData()

        $inputName.value=""

    }else if ($target.className=='submitName' && $inputName.value.trim().length ==0){
        $inputName.value=""
    }
}