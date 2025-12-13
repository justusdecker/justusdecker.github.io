function open_close(id) {
    const object = document.getElementById(id);
    if (object.style.height == 0) object.style.height = '0px';
    if (object.style.height == '0px') {
        object.style.height = '5.5em';
    } else {
        object.style.height = '0px';
    }
}