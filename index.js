$(function() {
    $("body").on("click", ".menu", function() {
        $(this).find(".Projects").toggleClass("shown");
    });
});
