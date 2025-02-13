$(document).ready(function() {
    let nav_bar_open = false;
    let mobile_open_btn = $("#mobileNavOpenBtn");

    mobile_open_btn.click( function() {
        mobile_open_btn.attr("aria-expanded", "true");
        $("#page-navbar").attr("data-open", "true");
    });

    $("#mobileNavCloseBtn").click( function() {
        mobile_open_btn.attr("aria-expanded", "false");
        $("#page-navbar").attr("data-open", "false");
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