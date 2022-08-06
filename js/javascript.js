$(function(){

    $(".SKS_list").hover(function(){
        $("#top_menu").show();
    },function(){
        $("#top_menu").hide();
        
    })

    $(".SKS_list_2").hover(function(){
        $("#top_menu_2").show();
    },function(){
        $("#top_menu_2").hide();
        
    })
    $(window).scroll(function(){
        
        $("#logo_img").attr("src","Images//csm_SKS_logo_solutions_cmyk_transparent_61fa9f5554.png");
        $("#top_nav").addClass("scroll_style");
        $("#mand_list").addClass("scroll_style");
        $("#toggler-icon").addClass("scroll_style");
        $("#menu_icon").addClass("navbar-light").removeClass("navbar-dark");

    })
    $(window).scroll(function () {
        if ($(this).scrollTop()  <= 0 ){
            $("#logo_img").attr("src","Images//csm_SKS_logo_solutions_cmyk_weiss_280624437f.png");
            $("#top_nav").removeClass("scroll_style");
            $("#mand_list").removeClass("scroll_style");
            $("#toggler-icon").removeClass("scroll_style");
            $("#menu_icon").removeClass("navbar-light").addClass("navbar-dark");
     
        }
    });

});



