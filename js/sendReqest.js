function sendRequest(method, url, body = null) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest

        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                rej(xhr.response)
            } else {
                res(xhr.response)
            }
        }
        xhr.onerror = () => {
            rej(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}