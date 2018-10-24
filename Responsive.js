/*Using JQuery*/

/*Unobtrusive JavaScript*/
window.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('hamburguer').addEventListener("click", sidebarToogle, false);

    document.getElementById('hamburguer').addEventListener("click", function () { buttonToogle('#hamburguer'); }, false);
    document.getElementById('profileButton').addEventListener("click", function () { buttonToogle('#profileButton'); }, false);

    var buttons = document.getElementsByClassName('inboxButton');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () { buttonToogle('.inboxButton'); }, false);
    }

    var buttons = document.getElementsByClassName('searchButton');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () { buttonToogle('.searchButton'); }, false);
    }

    var buttons = document.getElementsByClassName('settingsButton');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () { buttonToogle('.settingsButton'); }, false);
    }
});

/*Functions*/
function sidebarToogle() {
    var sidebar = $('#sidebar').css('display');
    if (sidebar == 'none') {
        $('#sidebar').css({ 'display': 'block' });
    } else {
        $('#sidebar').css({ 'display': 'none' });
    }
}

function buttonToogle(id) {
    var color = $(id).css('color');
    if (color == 'rgb(0, 0, 0)') {
        $(id).css({ 'color': 'green' });
    } else {
        $(id).css({ 'color': 'black' });
    }
}

