// 서브메뉴 제어를 위한 스크립트
$(function() {
    $(".main-menu > li").hover(
        function() {
            $(this).find("ul").css("display", "block");
        },
        function() {
            $(this).find("ul").css("display", "none");
        }
    );

    $(".main-menu span").focusin(
        function() {
            $(this).siblings("ul").css("display", "block");
        }
    );
    $(".main-menu ul li:last-child a").focusout(
        function() {
            $(this).parent().parent().css("display", "none");
        }
    );
});
// 탭메뉴 제어를 위한 자바스크립트
$(function() {
    $(".board h2").click(function() {
        $(this).parent().addClass("act")
            .siblings().removeClass("act");
    });
});