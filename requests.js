export function fetchPost() {
    const requestString = composeQuery();
    fetch('https://httpbin.org/post?',
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/x-www-formurlencoded',}),
        body: requestString
    }).then(response => {
        if(response.status === 200) {
            return response.text();
        } else {
            throw new Error('Error: ' + response.status);
        }
    }).then(response => displayResult(JSON.parse(response)))
    .catch(alert);
}

export function fetchGet() {
    const queryString = composeQuery();
    fetch('https://httpbin.org/get?' + queryString,
    {
        method: 'GET'
    }).then(response => {
        if(response.status === 200) {
            return response.text();
        } else {
            throw new Error('Error: ' + response.status);
        }
    }).then(response => displayResult(JSON.parse(response)))
    .catch(alert);
}

export function fetchPut() {
    const requestString = composeQuery();
    fetch('https://httpbin.org/put?',
    {
        method: 'PUT',
        headers: new Headers({'Content-Type': 'application/x-www-formurlencoded',}),
        body: requestString
    }).then(response => {
        if(response.status === 200) {
            return response.text();
        } else {
            throw new Error('Error: ' + response.status);
        }
    }).then(response => displayResult(JSON.parse(response)))
    .catch(alert);
}

export function fetchDelete() {
    const queryString = composeQuery();
    fetch('https://httpbin.org/delete?' + queryString,
    {
        method: 'DELETE'
    }).then(response => {
        if(response.status === 200) {
            return response.text();
        } else {
            throw new Error('Error: ' + response.status);
        }
    }).then(response => displayResult(JSON.parse(response)))
    .catch(alert);
}

export function ajaxPost() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                displayResult(JSON.parse(this.responseText));
            } else {
                alert('Error:', this.statusText);
            }
        }
    };
    xhr.open('POST', 'https://httpbin.org/post', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-formurlencoded');
    const requestBody = composeQuery();
    xhr.send(requestBody);
}

export function ajaxGet() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                displayResult(JSON.parse(this.responseText));
            } else {
                alert('Error:', this.statusText);
            }
        }
    };
    const queryString = composeQuery();
    xhr.open('GET', 'https://httpbin.org/get?' + queryString, true);
    xhr.send();
}

export function ajaxPut() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                displayResult(JSON.parse(this.responseText));
            } else {
                alert('Error:', this.statusText);
            }
        }
    };
    xhr.open('PUT', 'https://httpbin.org/put', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-formurlencoded');
    const requestBody = composeQuery();
    xhr.send(requestBody);
}

export function ajaxDelete() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                displayResult(JSON.parse(this.responseText));
            } else {
                alert('Error:', this.statusText);
            }
        }
    };
    const queryString = composeQuery();
    xhr.open('DELETE', 'https://httpbin.org/delete?' + queryString, true);
    xhr.send();
}

export function clearOutput() {
    let id = document.getElementById('id');
    id.value = '';
    let article_name = document.getElementById('article_name');
    article_name.value = '';
    let article_body = document.getElementById('article_body');
    article_body.value = '';
}

function composeQuery() {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    let quertString = '';
    for (const [key, value] of formData) {
        if(key === 'requests') {
            continue;
        }
        quertString += `${key}=${value}&`;
    }
    quertString = quertString.substring(0, quertString.length - 1);
    return quertString;
}

function displayResult(respJson) {
    let response = document.getElementById('response');
    response.innerHTML = 'HTTP Response:\n' + JSON.stringify(respJson, null, 4);
}