// ZHEN
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
         // console.log(name)

        $inputName.value=""
    }else {
        $inputName.value=""
    }
}