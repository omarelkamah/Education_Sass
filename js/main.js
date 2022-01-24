/*global $, document*/
$(document).ready(function () {
    "use strict";

    // add class active to the nav bar on click in it
    // $("nav ul li").on("click", function () {
    //     $(this).addClass("active").siblings().removeClass("active");
    // });

    // prevent Default for the last li who change the light mode
    $(".nav li:last-of-type").on("click", function (event) {
        event.preventDefault();
    });
});

var li = document.querySelectorAll("nav ul li");