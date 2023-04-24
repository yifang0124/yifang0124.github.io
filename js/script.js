
$(document).ready(function(){
    $("#collapse").on("click",function(){
        $("#sidebar").toggleClass("active")
        // 讓圖示轉換成另一個圖示
        $(".fa-bars").toggleClass("fa-arrow-right")
        $(".fa-solid").toggleClass("fa-shake")  

    })
    // $("a#dropdown").on("click",function(){
    //     $(".list-unstyled").removeClass("show");
    //     console.log("ok");
    // })
})