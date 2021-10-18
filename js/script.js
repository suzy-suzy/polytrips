

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

    //mypage-top-banner
    $(function(){
        var topBannerCloseBtn = $(".top-banner .close");

        topBannerCloseBtn.click(function(){
            $(".top-banner").hide();
        })
    })

    // info-tab
    $(function(){
        var infoBtn = $(".info__btn"),
             infoTab = $(".info__tab");

        infoBtn.click(function(){
          $(this).next().slideToggle(200); 
          $(this).toggleClass("active");
        })

        infoTab.click(function(){
            $(this).slideUp(200);
            $(this).siblings().removeClass("active");
        })
    })

    // per-person-tab
    $(function(){
        var perPersonBtn = $(".per-person__btn"),
            perPersonTab = $(".per-person__tab");

        perPersonBtn.click(function(){
            $(this).parents().siblings(".per-person__tab").slideToggle(200);
        })

        perPersonTab.click(function(){
            $(this).slideUp(200);
        })
    })

    // aside menu
    $(function () {
        var asideMenu = $(".aside .menu > li > p");

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
    })


    // share-popup
    $(document).on('click', ".share-btn", function (event) {
        event.preventDefault();
        $(this).closest("div").find(".share__popup").css('display', 'flex');
    });
    $(document).on('click', ".hide-share-popup", function (event) {
        event.preventDefault();
        $(this).closest(".share__popup").hide();
    });


    // Tab
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

    var giMenuDuration = 700;

    // 전체 메뉴를 오른쪽으로 슬라이드하여서 보여준다.
    $(document).on('click', ".left_menu", function (event) {
        event.preventDefault();
        $('.menu-wrap' ).css( { 'display' : 'block' } );
        $('.menu-wrap' ).css( { 'left' : '-100%' } );
        $('.menu-wrap' ).animate( { left: '0px' }, { duration: giMenuDuration } );
    });

    // 전체 메뉴를 왼쪽으로 슬라이드하여서 닫는다.
    $(document).on('click', ".close-btn", function (event) {
        event.preventDefault();
        $('.menu-wrap' ).animate( { left: '-100%' }, { duration: giMenuDuration, complete:function(){ $('.menu-wrap' ).css( { 'display' : 'none' } ); } } );
    });

    // footer-copyright
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

    //scroll-top
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > 200) {
            $(".top-btn").fadeIn();
            $(".book-now__btn").fadeIn();
            $(".sold-out__btn").fadeIn();
        } else {
            $(".top-btn").fadeOut();
            $(".book-now__btn").fadeOut();
            $(".sold-out__btn").fadeOut();
        }
    })
    //scroll-top--end

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

    // $(document).on('click', ".per-person__btn", function (event) {
    //     event.preventDefault();
    //     $(".per-person__tab").show('fast');
    // });

    // $(document).on('click', ".per-person__tab", function (event) {
    //     event.preventDefault();
    //     $(this).hide('fast');
    // });

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

    $(document).on( 'click', ".login_price", function( event ) {
        event.preventDefault();
        alert(i18n.member.messages.login_please);
        location.href = '/Login';
    });

    $(document).on( 'change', "#avata_upload", function( event ) {
        event.preventDefault();

        var formData = new FormData();
        var filedata = $(this)[0];

        var i = 0, len = filedata.files.length, file;

        for (; i < len; i++) {
            file = filedata.files[i];
            formData.append("imgAttach[]", file);
        }
        formData.append("exec_mode", "upload_image");
        formData.append("_token", csrf_token);

        $.ajax({
            async: false,
            cache: false,
            processData: false,
            contentType: false,
            url: "/" + current_mid,
            method: "POST",
            contentsType: "multipart/form-data",
            data: formData,
        })
            .done(function (data) {
                if(!data || !data.ret) {
                    alert(i18n.error.message);
                }
                else {
                    if(data.ret == '1') {
                        $(".avata_img").attr("src", data.avata_url);
                    }
                }
                return false;
            });
        return false;
    });

});
