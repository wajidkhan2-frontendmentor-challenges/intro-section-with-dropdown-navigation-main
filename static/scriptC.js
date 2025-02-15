$(document).ready(function() {
    let nav_bar_open = false;
    let mobile_open_btn = $("#mobileNavOpenBtn");
    let page_navbar = $("#page-navbar");
    let body = $("body");

    mobile_open_btn.click( function() {
        nav_bar_open = true
        mobile_open_btn.attr("aria-expanded", nav_bar_open);
        page_navbar.attr("data-open", nav_bar_open);
        body.addClass("no_scroll");
    });

    $("#mobileNavCloseBtn").click( function() {
        nav_bar_open = false;
        mobile_open_btn.attr("aria-expanded", nav_bar_open);
        page_navbar.attr("data-open", nav_bar_open);
        mobile_open_btn.focus();
        body.removeClass("no_scroll");
    } );

    let bool_prim_state = false;
    $("#dropdown-prim-open-close-btn").click( function() {
        if (bool_prim_state == false)
        {
            bool_prim_state = true;
            $(this).attr("aria-expanded", bool_prim_state);
        } else {
            bool_prim_state = false;
            $(this).attr("aria-expanded", bool_prim_state);
        }
    });

    let bool_secnd_state = false;
    $("#dropdown-secnd-open-close-btn").click( function() {
        if (bool_secnd_state == false)
        {
            bool_secnd_state = true;
            $(this).attr("aria-expanded", bool_secnd_state);
        } else {
            bool_secnd_state = false;
            $(this).attr("aria-expanded", bool_secnd_state);
        }
    })



//     page_navbar.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
//         // your event handler
//         console.log("transitionend")
//     });

});

































// $(document).ready( function() {
//     $("#navOverlay").hide();
//     $("#navMobile").addClass("nav-close");

//     $("#mobileNavOpenBtn").click( function() {
//         $("#mobileNavOpenBtn").attr("aria-expanded","true");
//         $("#navOverlay").show();
//         $("#navMobile").removeClass("nav-close");
//         $("body").addClass("no_scroll");
//     } );
//     $("#mobileNavCloseBtn").click( function() {
//         $("#mobileNavOpenBtn").attr("aria-expanded","false");
//         $("#navOverlay").hide();
//         $("#navMobile").addClass("nav-close");
//         $("body").removeClass("no_scroll");
//     } );
// } );