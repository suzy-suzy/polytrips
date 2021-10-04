

//
function run_limit_timer() {
    $("[data-time]").each(function (idx, item) {
        var limit_sec = $(item).data('time') - 1;
        if (limit_sec < 0) {
            $(item).closest("li").remove();
        }
        $(item).data('time', limit_sec);
        var min = parseInt(limit_sec / 60);
        var sec = parseInt(limit_sec % 60);
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;
        $(item).text(min + " : " + sec);
    });
}


$(document).ready(function () {
    if ($("[data-time]").length) {
        run_limit_timer();
        setInterval(run_limit_timer, 1000);
    }

    // aside menu--start
    $(function () {
        var asideMenu = $(".aside .menu > li > p"),
            asideClose = $(".aside .close-btn");

        asideMenu.click(function (e) {
            e.preventDefault();
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).next().slideUp();
                $(this).nextAll("span").css("transform", "rotate(0)");
            } else {
                $(this).addClass("active");
                $(this).next().slideDown();
                $(this).nextAll("span").css("transform", "rotate(180deg)");
            }
        })
        asideClose.click(function(){
            window.history.back();
        })
    })
    // aside menu--end

    // share-popup--start
    $(document).on('click', ".share-btn", function (event) {
        event.preventDefault();
        $(this).closest("div").find(".share__popup").css('display', 'flex');
    });
    $(document).on('click', ".hide-share-popup", function (event) {
        event.preventDefault();
        $(this).closest(".share__popup").hide();
    });
    // share-popup--end

    // Tab--start
    $(function () {
        var hotelTabNav = $(".hotel-room-types .tab-nav li"),
            hotelTabContent = $(".hotel-room-types .tab-contents > div");

        hotelTabNav.click(function (e) {
            e.preventDefault();
            hotelTabNav.removeClass("active");
            hotelTabContent.hide();
            $(this).addClass("active");
            var target = $(this).children("a").attr("href");
            $(target).show();
        });
    });

    $(function () {
        var bookingTabNav = $(".booking-policies .tab-nav li a"),
            bookingTabContent = $(".booking-policies .tab-contents > div");

        bookingTabNav.click(function (e) {
            e.preventDefault();
            bookingTabNav.removeClass("active");
            $(this).addClass("active");
            bookingTabContent.hide();
            var target = $(this).attr("href");
            $(target).show();
        });
    });
    // Tab--end

    // footer-copyright--start
    $(document).on('click', ".copyright .wrap  .more", function (event) {
        event.preventDefault();
        $(this).closest("div").siblings(".info").slideDown(300);
        $(this).removeClass("more").addClass("close");
    });
    $(document).on('click', ".copyright .wrap  .close", function (event) {
        event.preventDefault();
        $(this).closest("div").siblings(".info").slideUp(300);
        $(this).removeClass("close").addClass("more");
    });
    // footer-copyright--end

    //ScrollTop--start
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > 100) {
            $(".top-btn").fadeIn();
            $(".book-now__btn").fadeIn();
            $(".sold-out__btn").fadeIn();
        } else {
            $(".top-btn").fadeOut();
            $(".book-now__btn").fadeOut();
            $(".sold-out__btn").fadeOut();
        }
    })
    //ScrollTop--end

    $(document).on('click', "div > .more", function (event) {
        event.preventDefault();
        $(this).closest("div").find(".detail_content").css({ "display": "block", "height": "auto" });
        $(this).removeClass("more").addClass("close");
    });

    $(document).on('click', "div > .close", function (event) {
        event.preventDefault();
        $(this).closest("div").find(".detail_content").css({ "display": "-webkit-box", "height": "2.6rem" });
        $(this).removeClass("close").addClass("more");
    });

    $(document).on('click', "dd > .close", function (event) {
        event.preventDefault();
        $(this).closest("dd").hide();
    });

    $(document).on('click', ".itinerary dt > .more", function (event) {
        event.preventDefault();
        $(this).closest("dt").next("dd").addClass("active");
        $(this).removeClass("more").addClass("close");
    });

    $(document).on('click', ".itinerary dt > .close", function (event) {
        event.preventDefault();
        $(this).closest("dt").next("dd").removeClass("active");
        $(this).removeClass("close").addClass("more");
    });

    $(document).on('click', ".select-rooms dt > .more", function (event) {
        event.preventDefault();
        $(this).closest("dt").next("dd").css("display", "block");
    });

    $(document).on('click', ".select-rooms dt > .close", function (event) {
        event.preventDefault();
        $(this).closest("dt").next("dd").css("display", "none");
    });

    $(document).on('click', ".per-person__btn", function (event) {
        event.preventDefault();
        $(".per-person__tab").show('fast');
    });

    $(document).on('click', ".per-person__tab", function (event) {
        event.preventDefault();
        $(this).hide('fast');
    });

    $(document).on('click', ".now_currency", function (event) {
        event.preventDefault();
        $(this).closest("div").find(".other_currency").show('fast');
        //$(this).hide('fast');
    });

    $(document).on('click', ".other_currency", function (event) {
        event.preventDefault();
        $(this).hide('fast');
        //$(this).closest("div").find(".now_currency").show('fast');
    });

    $(document).on('click', ".view-thema", function (event) {
        event.preventDefault();
        $(this).closest("div").find(".view-trips__popup").css('display', 'flex');
    });

    $(document).on('click', ".hide-thema", function (event) {
        event.preventDefault();
        $(this).closest(".view-trips__popup").hide();
    });

    $(document).on("click", ".toggle-wish", function (event) {
        event.preventDefault();
        var no = $(this).data('no');
        var $this = $(this).find("img");
        var $obj = $('.same_trips').find("img");
        $.post("/api/goods/wish", {
            gd_no: no,
            _token: csrf_token,
        },
            function (data) {
                /*                if(data.ret == 1) {
                                    $(".wish-on__popup").css("display", "block").hide('slow');
                                }*/
                if (data.ret != '1') {
                    $this.attr('src', $this.attr('src').replaceAll('on', 'off'));
                }
                else {
                    $this.attr('src', $this.attr('src').replaceAll('off', 'on'));
                }

                $obj.each(function (idx, item) {
                    if (data.ret != '1') {
                        $(item).attr('src', $(item).attr('src').replaceAll('on', 'off'));
                    }
                    else {
                        $(item).attr('src', $(item).attr('src').replaceAll('off', 'on'));
                    }
                });
            }
        );
    });

    $(document).on("click", "[data-view]", function (event) {
        event.preventDefault();
        location.href = "/Detail?no=" + $(this).data('view');
    });

    /*$(document).on("click", ".select-room-container .select-rooms .info dl dt::before", function (event) {
        alert("dsadsa");
    });*/

    $(document).on("click", ".quick_search", function (event) {
        event.preventDefault();
        var s = $(this).closest("div").find(".quick_text").val();
        if(s.length <= 0) return;
        location.href="/TripList?q="+encodeURI(s);
    });
});
