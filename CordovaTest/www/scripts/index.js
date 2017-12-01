$(document).ready(function () {

    $('.btn-login').click(function () {
        verifyLogin();
    });

});

function verifyLogin() {

    var username = $('.input-username').val();
    var password = $('.input-password').val();

    console.log(username);
    console.log(password);
}
