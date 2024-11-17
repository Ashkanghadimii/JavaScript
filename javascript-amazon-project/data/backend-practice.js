const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    xhr.response
});

xhr.open('Get','https://supersimplebackend.dev');
xhr.send();
