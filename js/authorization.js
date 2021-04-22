// ZHEN
const $inputName =document.getElementById("name")

let requestURL;

function authorization(e){
    e.preventDefault();
    let $target =e.target
    let name =$inputName.value.trim()

    if ($target.className=='submitName' && $inputName.value.trim().length!=0){

        requestURL= `https://jsfeajax.herokuapp.com/${name}/todo`

        sendRequest('GET', requestURL)
            .then((data)=> drow(JSON.parse(data)))
            .catch((er)=>console.log(er))

        $inputName.value=""

    }else if ($target.className=='submitName' && $inputName.value.trim().length ==0){
        $inputName.value=""
    }
}