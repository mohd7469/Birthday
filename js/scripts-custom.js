!function (a) {
    "use strict";
    function e() {
        var a = navigator.userAgent.indexOf("MSIE") > -1;
        navigator.appVersion;
        return a ? !0 : !1
    }

    function s() {
        return Math.max(a(window).height(), window.innerHeight)
    }

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var t = document.createElement("style");
        t.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.getElementsByTagName("head")[0].appendChild(t)
    }
    a(window).load(function () {
        setTimeout(function () {
            a("#preload-content").fadeOut(900, function () {
                a("#preloadcontainer").fadeOut(900), setTimeout(function () {
                    a(".fade-in").each(function (e) {
                        a(this).delay(600 * e).animate({top: 0, opacity: 1}, 900)
                    })
                }, 900)
            })
        }, 300), a("body").hasClass("mobile") || (e() ? a(".animated").css({display: "block", visibility: "visible"}) : a(".animationonstart").each(function () {
            var e = a(this);
            if (!e.hasClass("visible")) {
                var s = e.data("animation-delay"), t = e.data("animation");
                s ? setTimeout(function () {
                    e.addClass(t + " visible")
                }, s) : e.addClass(t + " visible")
            }
        }))
    }), jQuery(document).ready(function (a) {
        function e() {
            var e = (a(".site-nav").height(), a("section")), t = s();
            e.hasClass("fullscreen") && a("section.fullscreen").css("min-height", t - 0)
        }

        function t() {
            var e = navigator.userAgent.toLowerCase(), s = e.match(/(iphone|ipod|ipad)/);
            if (s) {
                var t = a("#home"), o = a("#video_background"), r = window.innerHeight, n = a("#home").height();
                t.css({position: "relative", top: (r - n) / 2, "margin-top": "0"}), o.css({display: "none"}), a(window).resize(function () {
                    var e = a("#home"), s = window.innerHeight, t = a("#home").height();
                    e.css({position: "relative", top: (s - t) / 2, "margin-top": "0"})
                })
            }
        }

        var imageArray, birthdayDate, reloadTime, now, todayDate, todayTime;

        birthdayDate = '5 7 2016';
        reloadTime = '0 0 0';

        now = new Date();

        imageArray = [
            "background/image-1.jpg",
            "background/image-2.jpg"
        ];
        todayDate = now.getDate() + ' ' + now.getMonth() + ' ' + now.getFullYear();
        todayTime = now.getHours() + ' ' + now.getMinutes() + ' ' + now.getSeconds();
//console.log(todayDate)

        var o = navigator.userAgent.indexOf("Chrome") > -1, r = (navigator.userAgent.indexOf("MSIE") > -1, navigator.userAgent.indexOf("Firefox") > -1, navigator.userAgent.indexOf("Safari") > -1);
        navigator.userAgent.indexOf("Presto") > -1;
        o && r && (r = !1);
        navigator.appVersion;
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && a("body").addClass("mobile"), o && a("body").addClass("chrome"), r && a("body").addClass("safari"), a("html").niceScroll({cursorcolor: "#fff", cursoropacitymin: "0", cursoropacitymax: "1", cursorwidth: "3px", zindex: 1e4, horizrailenabled: !1, enablekeyboard: !1}), a(".countdown").downCount({date: launchdatetime, offset: 10}, function () {
//            var reload = true;
//
//            if (reload) {
//                reload = false;
//                pageReload();
//            }
//            function pageReload() {
//                window.location.reload();
//                break;
//            }
//
            var birthdayDate, reloadTime, now, todayDate, todayTime;

            birthdayDate = '5 7 2016';
            reloadTime = '0 0 0';
            now = new Date();
//            console.log(imageArray);

            todayDate = now.getDate() + ' ' + now.getMonth() + ' ' + now.getFullYear();
            todayTime = now.getHours() + ' ' + now.getMinutes() + ' ' + now.getSeconds();


            if (todayTime === reloadTime) {
//                imageArray = [
//                    "background/image-1.jpg",
//                    "background/image-2.jpg",
//                    "background/image-3.jpg",
//                    "background/image-4.jpg",
//                    "background/image-5.jpg",
//                    "background/image-6.jpg"
//                ];
                $("#reload")[0].click();

            }

            if (todayDate === birthdayDate) {
//                imageArray = [
//                    "background/image-1.jpg",
//                    "background/image-2.jpg",
//                    "background/image-3.jpg",
//                    "background/image-4.jpg",
//                    "background/image-5.jpg",
//                    "background/image-6.jpg"
//                ];
                $('#birthday').trigger('click');
                console.log('Happy Birthday To You!');
                $('.noWords').hide();
                $('.words').show();
            }
            else {
//                imageArray = [
//                    "background/image-1.jpg",
//                    "background/image-2.jpg",
//                    "background/image-3.jpg",
//                ];
                if (todayTime === reloadTime) {
                    $("#reload")[0].click();
                }
                $('.words').hide();
                $('.stopImage').hide();
                $('.theEnd').hide();
            }


        });


        if (todayDate === birthdayDate) {
            console.log("Time's up : " + todayDate);

            imageArray = [
//                "background/image-1.jpg",
//                "background/image-2.jpg",
                "fonts/scope/light/me.jpg",
                "fonts/scope/light/image.jpg",

            ];
        }
        else {
            do {
                if (todayTime === reloadTime) {
                    $("#reload")[0].click();
                }
            } while (false);
//            if (
//                todayDate === '6 7 2016' ||
//                todayDate === '7 7 2016' ||
//                todayDate === '8 7 2016' ||
//                todayDate === '9 7 2016' ||
//                todayDate === '10 7 2016'
//                ) {
//                console.log("session expired!");
//                $('.song').show();
//                imageArray = [
//                    "background/image-1.jpg",
//                    "background/image-2.jpg",
//                ];
//            }
//            if(false){
//                $('#expire').show();
//
//            }

        }

//        console.log(imageArray);
        var n = a("#owl-demo");
        if (n.owlCarousel({slideSpeed: 900, paginationSpeed: 600, navigation: !1, singleItem: !0, transitionStyle: "goDown", responsive: !0, responsiveRefreshRate: 200, responsiveBaseWidth: !0, mouseDrag: !0, touchDrag: !0, addClassActive: !0, afterMove: function () {
            a(".owl-item").hasClass("active") && (a(".navigation-dot li").removeClass("navcurrent").fadeIn(20), a(".active").children().hasClass("introcontent") ? a(".homestart").toggleClass("navcurrent").fadeIn(120) : a(".active").children().hasClass("aboutcontent") ? a(".about").toggleClass("navcurrent").fadeIn(120) : a(".active").children().hasClass("servicescontent") ? a(".services").toggleClass("navcurrent").fadeIn(120) : a(".active").children().hasClass("contactcontent") && a(".contact").toggleClass("navcurrent").fadeIn(120))
        }}), a(".homestart").click(function () {
            n.trigger("owl.goTo", 0)
        }), a(".about").click(function () {
            n.trigger("owl.goTo", 1)
        }), a(".services").click(function () {
            n.trigger("owl.goTo", 2)
        }), a(".contact").click(function () {
            n.trigger("owl.goTo", 3)
        }), a("body").hasClass("slideshow-background"))a(".morestars").removeClass("star"), a(".videoicon").remove(), a("body").backstretch(imageArray, {duration: 3e3, fade: 1200}); else if (a("body").hasClass("image-background"))a(".morestars").removeClass("star"), a(".videoicon").remove(), a("body").backstretch(["background/image-1.jpg"]); else if (a("body").hasClass("gradient-background"))a(".morestars").removeClass("star"), a(".videoicon").remove(), a("body").backstretch(["background/gradient-bg-picture.jpg"]); else if (a("body").hasClass("snow-background"))a(".morestars").removeClass("star"), a(".videoicon").remove(), a("body").backstretch(["background/snow-bg-picture.jpg"]), a("body").append('<div id="snowcontainer"></div>'); else if (a("body").hasClass("star-background")) {
            a(".pageoverlay").addClass("particles"), a(".videoicon").remove();
            var i, d, l, c = a(window).width(), u = a(window).height();
            for (i = 1; 150 >= i; i++)d = Math.ceil(3 * Math.random()), a(".particles").append('<div class="star" data-parallaxify-range="' + Math.round(100 * Math.random()) + '" style="top: ' + Math.round(u * Math.random()) + "px; left: " + Math.round(c * Math.random()) + "px; width: " + d + "px; height: " + d + 'px;"></div>');
            for (i = 1; 30 >= i; i++)d = Math.ceil(5 * Math.random()) + 2, a(".particles").append('<div class="star" data-parallaxify-range="' + Math.round(400 * Math.random()) + '" style="top: ' + Math.round(u * Math.random()) + "px; left: " + Math.round(c * Math.random()) + "px; width: " + d + "px; height: " + d + 'px;"></div>');
            for (i = 1; 15 >= i; i++)d = Math.ceil(5 * Math.random()) + 5, l = "rgba(" + Math.round(256 * Math.random()) + ", " + Math.round(256 * Math.random()) + ", " + Math.round(256 * Math.random()) + ", " + Math.round(100 * Math.random()) / 100 + ")", a(".particles").append('<div class="star" data-parallaxify-range="' + Math.round(600 * Math.random()) + '" style="top: ' + Math.round(u * Math.random()) + "px; left: " + Math.round(c * Math.random()) + "px; width: " + d + "px; height: " + d + "px; background: " + l + "; box-shadow: 0px 0px 10px " + l + ';"></div>');
            a("body").backstretch(["background/star-bg-image.jpg"]), a(".particles").parallaxify({positionProperty: "transform", responsive: !0, motionType: "natural", mouseMotionType: "gaussian", motionAngleX: 30, motionAngleY: 30, alphaFilter: .5, adjustBasePosition: !0, alphaPosition: .0025})
        } else if (a("body").hasClass("parallax-background")) {
            a(".parallax-wallpaper").backstretch(["background/parallax-image-1.jpg"]), a.parallaxify({positionProperty: "transform", responsive: !0, motionType: "natural", mouseMotionType: "gaussian", motionAngleX: 30, motionAngleY: 30, alphaFilter: .5, adjustBasePosition: !0, alphaPosition: .0025}), a(".morestars").removeClass("star"), a(".videoicon").remove();
            var i, d, l, c = a(window).width(), u = a(window).height();
            for (i = 1; 150 >= i; i++)d = Math.ceil(3 * Math.random()), a(".morestars").append('<div class="star" data-parallaxify-range="' + Math.round(100 * Math.random()) + '" style="top: ' + Math.round(u * Math.random()) + "px; left: " + Math.round(c * Math.random()) + "px; width: " + d + "px; height: " + d + 'px;"></div>');
            for (i = 1; 30 >= i; i++)d = Math.ceil(5 * Math.random()) + 2, a(".morestars").append('<div class="star" data-parallaxify-range="' + Math.round(400 * Math.random()) + '" style="top: ' + Math.round(u * Math.random()) + "px; left: " + Math.round(c * Math.random()) + "px; width: " + d + "px; height: " + d + 'px;"></div>');
            for (i = 1; 15 >= i; i++)d = Math.ceil(5 * Math.random()) + 5, l = "rgba(" + Math.round(256 * Math.random()) + ", " + Math.round(256 * Math.random()) + ", " + Math.round(256 * Math.random()) + ", " + Math.round(100 * Math.random()) / 100 + ")", a(".morestars").append('<div class="star" data-parallaxify-range="' + Math.round(600 * Math.random()) + '" style="top: ' + Math.round(u * Math.random()) + "px; left: " + Math.round(c * Math.random()) + "px; width: " + d + "px; height: " + d + "px; background: " + l + "; box-shadow: 0px 0px 10px " + l + ';"></div>')
        } else if (a("body").hasClass("pattern-background"))a(".pageoverlay").addClass("patternbackground"), a(".morestars").removeClass("star"), a(".videoicon").remove(); else if (a("body").hasClass("pattern1-background"))a(".pageoverlay").addClass("patternbackground1"), a(".morestars").removeClass("star"), a(".videoicon").remove(); else if (a("body").hasClass("pattern2-background"))a(".pageoverlay").addClass("patternbackground2"), a(".morestars").removeClass("star"), a(".videoicon").remove(); else if (a("body").hasClass("pattern3-background"))a(".pageoverlay").addClass("patternbackground3"), a(".morestars").removeClass("star"), a(".videoicon").remove(); else if (a("body").hasClass("pattern4-background"))a(".pageoverlay").addClass("patternbackground4"), a(".morestars").removeClass("star"), a(".videoicon").remove(); else if (a("body").hasClass("youtube-background")) {
            a(".morestars").removeClass("star"), a("#youtube_background").css("display", "block");
            var m = a(".player");
            m.each(function () {
                m.mb_YTPlayer()
            }), a("#bg-video-volume").click(function (e) {
                var s = a(this);
                e.preventDefault(), s.hasClass("fa-volume-off") ? (s.removeClass("fa-volume-off tubular-mute").addClass("fa-volume-up tubular-volume-up").attr("title", "Mute"), m.unmuteYTPVolume(), m.setYTPVolume(5)) : (s.removeClass("fa-volume-up tubular-volume-up").addClass("fa-volume-off  tubular-mute").attr("title", "Unmute"), m.muteYTPVolume())
            }), a("#bg-video-play").click(function (e) {
                var s = a(this);
                e.preventDefault(), s.hasClass("fa-pause") ? (s.removeClass("fa-pause tubular-play").addClass("fa-play tubular-pause").attr("title", "Play"), m.pauseYTP()) : (s.removeClass("fa-play tubular-pause").addClass("fa-pause tubular-play").attr("title", "Pause"), m.playYTP())
            }), a(".vcontroll").css("visibility", "visible")
        } else a("body").hasClass("video-background") ? (a(".morestars").removeClass("star"), a(".videoicon").remove(), a("#video_background").css("display", "block"), a("body").hasClass("mobile") && a("body").backstretch(["background/video-fallback.jpg"])) : a("body").hasClass("mobile") && a("body").hasClass("video-background") && a("body").backstretch(["background/video-fallback.jpg"]);
        a(".particles").particleground({minSpeedX: .1, maxSpeedX: .7, minSpeedY: .1, maxSpeedY: .7, density: 14e3, dotColor: "#414141", lineColor: "#2b2b2b", curvedLines: !0, particleRadius: 5, proximity: 133, parallax: !1, parallaxMultiplier: 5, opacity: .5}), e(), a(window).on("resize", function () {
            e()
        }), t(), a(".video-container").fitVids(), a("input, textarea").placeholder(), a("#subscribe_form").submit(function (e) {
            e.preventDefault();
            var s = !1, t = a("#email").val();
            s = 0 === t.length || -1 === t.indexOf("@") ? !0 : !1, s === !0 && ("" === t ? (a(".subscriberesponse").html('<i class="fa fa-exclamation-triangle"> Sorry , please enter a valid e-mail address.'), a("#email").addClass("formerror")) : (a(".subscriberesponse").html('<i class="fa fa-exclamation-triangle"> Sorry , <span class="highlight">' + t + "</span> is not a valid e-mail address. Try again with valid email."), a("#email").focus(), a("#email").addClass("formerror")), a(".subscriberesponse").addClass("fadeInDown").fadeIn("slow"), a("#subscribe_form").addClass("animate fadeInDown").fadeIn("slow")), s === !1 && (a("#subscribesubmit").attr({disabled: "true"}), a("#subscribesubmit").val("Please Wait..."), a.post("php/send_email.php", a("#subscribe_form").serialize(), function (e) {
                "sent" === e ? (a(".subscribesuccess").html('<i class="fa fa-check-circle-o"> Successfully Subscribed!!'), a(".subscribesuccess").addClass("fadeInDown").fadeIn("slow"), a("#subscribesubmit").val("Subscribed")) : (a(".subscriberesponse").html('<i class="fa fa-exclamation-triangle"> Network connection error!! Please try again later'), a(".subscriberesponse").addClass("fadeInDown").fadeIn("slow"), a("#subscribesubmit").attr("disabled") && a("#subscribesubmit").removeAttr("disabled"), a("#subscribesubmit").val("Subscribe"), a("#email").addClass("formerror"))
            }))
        }), a("#email").focus(function () {
            a(".subscriberesponse").fadeOut(), a(".subscribesuccess").fadeOut()
        }), a("#email").keydown(function () {
            a(".subscriberesponse").fadeOut(), a(".subscribesuccess").fadeOut()
        }), a("#contacts_form").submit(function (e) {
            e.preventDefault();
            var s = !1, t = a("#name").val(), o = a("#useremail").val(), r = a("#usermessage").val();
            0 === t.length || 0 === o.length || -1 === o.indexOf("@") || 0 === r.length ? (s = !0, a(".contactresponse").html("")) : s = !1, s === !0 && ("" === t && (a(".contactresponse").html('<i class="fa fa-exclamation-triangle"> Please enter your name. '), a("#name").addClass("formerror")), "" === o ? (a(".contactresponse").append(' <i class="fa fa-exclamation-triangle"> Please enter a valid e-mail address. '), a("#useremail").addClass("formerror")) : -1 === o.indexOf("@") && (a(".contactresponse").append(' <i class="fa fa-exclamation-triangle"> Sorry <span class="highlight">' + o + "</span> is not a valid e-mail address. Try again with valid email."), a("#useremail").focus(), a("#useremail").addClass("formerror")), "" === r && (a(".contactresponse").append(' <i class="fa fa-exclamation-triangle"> Please enter some message.'), a("#usermessage").addClass("formerror")), a(".contactresponse").addClass("fadeInDown").fadeIn("slow"), a("#contacts_form").addClass("animate fadeInDown").fadeIn("slow")), s === !1 && (a("#contactsubmit").attr({disabled: "true"}), a("#contactsubmit").val("Please Wait..."), a.post("php/send_contact.php", a("#contacts_form").serialize(), function (e) {
                "sent" === e ? (a(".contactsuccess").html('<i class="fa fa-check-circle-o"> Successfully Sent!!'), a(".contactsuccess").addClass("fadeInDown").fadeIn("slow"), a("#contactsubmit").val("Email Sent")) : (a(".contactresponse").html('<i class="fa fa-exclamation-triangle"> Network connection error!! Please try again later'), a(".contactresponse").addClass("fadeInDown").fadeIn("slow"), a("#contactsubmit").attr("disabled") && a("#contactsubmit").removeAttr("disabled"), a("#contactsubmit").val("Send Email"))
            }))
        }), a("#name").focus(function () {
            a(".contactresponse").fadeOut(), a(".contactsuccess").fadeOut()
        }), a("#useremail").focus(function () {
            a(".contactresponse").fadeOut("slow"), a(".contactsuccess").fadeOut()
        }), a("#usermessage").focus(function () {
            a(".contactresponse").fadeOut("slow"), a(".contactsuccess").fadeOut()
        }), a("#name").keydown(function () {
            a(".contactresponse").fadeOut("slow"), a(".contactsuccess").fadeOut()
        }), a("#useremail").keydown(function () {
            a(".contactresponse").fadeOut("slow"), a(".contactsuccess").fadeOut()
        }), a("#usermessage").keydown(function () {
            a(".contactresponse").fadeOut("slow"), a(".contactsuccess").fadeOut()
        })
    })
}(jQuery);