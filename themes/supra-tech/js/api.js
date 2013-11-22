/*!
 * The Drawing Room
 * Developed by Scotty Vernon
 * www.kingscooty.com
 */
/* **********************************************
     Begin main.js
********************************************** */
var drawingroom = drawingroom || {};
(function () {
    var e, t = function () {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"],
        r = n.length,
        i = window.console = window.console || {};
    while (r--) {
        e = n[r];
        i[e] || (i[e] = t)
    }
})();
(function () {
    jQuery.browser = {};
    jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase())
})();
! function (e) {
    "use strict";

    function t(t, n) {
        var r = e.proxy(this.process, this),
            i = e(t).is("body") ? e(window) : e(t),
            s;
        this.options = e.extend({}, e.fn.scrollspy.defaults, n);
        this.$scrollElement = i.on("scroll.scroll-spy.data-api", r);
        this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
        this.$body = e("body");
        this.refresh();
        this.process()
    }
    t.prototype = {
        constructor: t,
        refresh: function () {
            var t = this,
                n;
            this.offsets = e([]);
            this.targets = e([]);
            n = this.$body.find(this.selector).map(function () {
                var n = e(this),
                    r = n.data("target") || n.attr("href"),
                    i = /^#\w/.test(r) && e(r);
                return i && i.length && [
                    [i.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r]
                ] || null
            }).sort(function (e, t) {
                return e[0] - t[0]
            }).each(function () {
                t.offsets.push(this[0]);
                t.targets.push(this[1])
            })
        },
        process: function () {
            var e = this.$scrollElement.scrollTop() + this.options.offset,
                t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                n = t - this.$scrollElement.height(),
                r = this.offsets,
                i = this.targets,
                s = this.activeTarget,
                o;
            if (e >= n) return s != (o = i.last()[0]) && this.activate(o);
            for (o = r.length; o--;) s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
        },
        activate: function (t) {
            var n, r;
            this.activeTarget = t;
            e(this.selector).parent(".active").removeClass("active");
            r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]';
            n = e(r).parent("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active"));
            n.trigger("activate")
        }
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("scrollspy"),
                s = typeof n == "object" && n;
            i || r.data("scrollspy", i = new t(this, s));
            typeof n == "string" && i[n]()
        })
    };
    e.fn.scrollspy.Constructor = t;
    e.fn.scrollspy.defaults = {
        offset: 10
    };
    e.fn.scrollspy.noConflict = function () {
        e.fn.scrollspy = n;
        return this
    };
    e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery);
(function (e) {
    function r(t, n, r) {
        var i = n.hash.slice(1),
            s = document.getElementById(i) || document.getElementsByName(i)[0];
        if (!s) return;
        t && t.preventDefault();
        var o = e(r.target);
        if (r.lock && o.is(":animated") || r.onBefore && r.onBefore(t, s, o) === !1) return;
        r.stop && o._scrollable().stop(!0);
        if (r.hash) {
            var u = s.id == i ? "id" : "name",
                a = e("<a> </a>").attr(u, i).css({
                    position: "absolute",
                    top: e(window).scrollTop(),
                    left: e(window).scrollLeft()
                });
            s[u] = "";
            e("body").prepend(a);
            location = n.hash;
            a.remove();
            s[u] = i
        }
        o.scrollTo(s, r).trigger("notify.serialScroll", [s])
    }
    var t = location.href.replace(/#.*/, ""),
        n = e.localScroll = function (t) {
            e("body").localScroll(t)
        };
    n.defaults = {
        duration: 1e3,
        axis: "y",
        event: "click",
        stop: !0,
        target: window,
        reset: !0
    };
    n.hash = function (t) {
        if (location.hash) {
            t = e.extend({}, n.defaults, t);
            t.hash = !1;
            if (t.reset) {
                var i = t.duration;
                delete t.duration;
                e(t.target).scrollTo(0, t);
                t.duration = i
            }
            r(0, location, t)
        }
    };
    e.fn.localScroll = function (i) {
        function s() {
            return !!this.href && !! this.hash && this.href.replace(this.hash, "") == t && (!i.filter || e(this).is(i.filter))
        }
        i = e.extend({}, n.defaults, i);
        return i.lazy ? this.bind(i.event, function (t) {
            var n = e([t.target, t.target.parentNode]).filter(s)[0];
            n && r(t, n, i)
        }) : this.find("a,area").filter(s).bind(i.event, function (e) {
            r(e, this, i)
        }).end().end()
    }
})(jQuery);
(function (e) {
    function n(e) {
        return typeof e == "object" ? e : {
            top: e,
            left: e
        }
    }
    var t = e.scrollTo = function (t, n, r) {
        e(window).scrollTo(t, n, r)
    };
    t.defaults = {
        axis: "xy",
        duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
        limit: !0
    };
    t.window = function (t) {
        return e(window)._scrollable()
    };
    e.fn._scrollable = function () {
        return this.map(function () {
            var t = this,
                n = !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!n) return t;
            var r = (t.contentWindow || t).document || t.ownerDocument || t;
            return /webkit/i.test(navigator.userAgent) || r.compatMode == "BackCompat" ? r.body : r.documentElement
        })
    };
    e.fn.scrollTo = function (r, i, s) {
        if (typeof i == "object") {
            s = i;
            i = 0
        }
        typeof s == "function" && (s = {
            onAfter: s
        });
        r == "max" && (r = 9e9);
        s = e.extend({}, t.defaults, s);
        i = i || s.duration;
        s.queue = s.queue && s.axis.length > 1;
        s.queue && (i /= 2);
        s.offset = n(s.offset);
        s.over = n(s.over);
        return this._scrollable().each(function () {
            function d(e) {
                u.animate(c, i, s.easing, e && function () {
                    e.call(this, r, s)
                })
            }
            if (r == null) return;
            var o = this,
                u = e(o),
                a = r,
                l, c = {}, p = u.is("html,body");
            switch (typeof a) {
            case "number":
            case "string":
                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(a)) {
                    a = n(a);
                    break
                }
                a = e(a, this);
                if (!a.length) return;
            case "object":
                if (a.is || a.style) l = (a = e(a)).offset()
            }
            e.each(s.axis.split(""), function (e, n) {
                var r = n == "x" ? "Left" : "Top",
                    i = r.toLowerCase(),
                    f = "scroll" + r,
                    v = o[f],
                    m = t.max(o, n);
                if (l) {
                    c[f] = l[i] + (p ? 0 : v - u.offset()[i]);
                    if (s.margin) {
                        c[f] -= parseInt(a.css("margin" + r)) || 0;
                        c[f] -= parseInt(a.css("border" + r + "Width")) || 0
                    }
                    c[f] += s.offset[i] || 0;
                    s.over[i] && (c[f] += a[n == "x" ? "width" : "height"]() * s.over[i])
                } else {
                    var y = a[i];
                    c[f] = y.slice && y.slice(-1) == "%" ? parseFloat(y) / 100 * m : y
                }
                s.limit && /^\d+$/.test(c[f]) && (c[f] = c[f] <= 0 ? 0 : Math.min(c[f], m));
                if (!e && s.queue) {
                    v != c[f] && d(s.onAfterFirst);
                    delete c[f]
                }
            });
            d(s.onAfter)
        }).end()
    };
    t.max = function (t, n) {
        var r = n == "x" ? "Width" : "Height",
            i = "scroll" + r;
        if (!e(t).is("html,body")) return t[i] - e(t)[r.toLowerCase()]();
        var s = "client" + r,
            o = t.ownerDocument.documentElement,
            u = t.ownerDocument.body;
        return Math.max(o[i], u[i]) - Math.min(o[s], u[s])
    }
})(jQuery);
window.Swipe = function (e, t) {
    var n = this;
    if (!e) return;
    this.container = e;
    this.element = this.container.children[0];
    this.browser = {
        touch: function () {
            return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
        }(),
        transitions: function () {
            var e = document.createElement("swipe"),
                t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
            for (var n in t)
                if (e.style[t[n]] !== undefined) return !0;
            return !1
        }()
    };
    t = t || {};
    this.index = t.startSlide || 0;
    this.speed = t.speed || 300;
    this.callback = t.callback || function () {};
    this.transitionEnd = t.transitionEnd || function () {};
    this.delay = t.auto || 0;
    this.cont = t.continuous != undefined ? !! t.continuous : !0;
    this.disableScroll = !! t.disableScroll;
    this.index = parseInt(this.index, 10);
    this.setup();
    this.begin();
    if (this.element.addEventListener) {
        if ( !! this.browser.touch) {
            this.element.addEventListener("touchstart", this, !1);
            this.element.addEventListener("touchmove", this, !1);
            this.element.addEventListener("touchend", this, !1)
        }
        if ( !! this.browser.transitions) {
            this.element.addEventListener("webkitTransitionEnd", this, !1);
            this.element.addEventListener("msTransitionEnd", this, !1);
            this.element.addEventListener("oTransitionEnd", this, !1);
            this.element.addEventListener("transitionend", this, !1)
        }
        window.addEventListener("resize", this, !1)
    } else window.onresize = function () {
        n.setup()
    }
};
Swipe.prototype = {
    setup: function () {
        this.slides = this.element.children;
        this.length = this.slides.length;
        this.cache = new Array(this.length);
        if (this.length < 2) return;
        this.width = this.container.getBoundingClientRect().width || this.container.offsetWidth;
        if (!this.width) return;
        var e = [
            [],
            [],
            []
        ];
        this.element.style.width = this.slides.length * this.width + "px";
        for (var t = this.length - 1; t > -1; t--) {
            var n = this.slides[t];
            n.style.width = this.width + "px";
            n.setAttribute("data-index", t);
            this.browser.transitions && (n.style.left = t * -this.width + "px");
            e[this.index > t ? 0 : this.index < t ? 2 : 1].push(t)
        }
        if (this.browser.transitions) {
            this._stack(e[0], -1);
            this._stack(e[1], 0);
            this._stack(e[2], 1)
        } else this.element.style.left = this.index * -this.width + "px";
        this.container.style.visibility = "visible"
    },
    kill: function () {
        this.delay = 0;
        clearTimeout(this.interval);
        var e = [];
        for (var t = this.slides.length - 1; t >= 0; t--) {
            this.slides[t].style.width = "";
            e.push(t)
        }
        this._stack(e, 0);
        var n = this.element;
        n.className = n.className.replace("swipe-active", "");
        if (this.element.removeEventListener) {
            if ( !! this.browser.touch) {
                this.element.removeEventListener("touchstart", this, !1);
                this.element.removeEventListener("touchmove", this, !1);
                this.element.removeEventListener("touchend", this, !1)
            }
            if ( !! this.browser.transitions) {
                this.element.removeEventListener("webkitTransitionEnd", this, !1);
                this.element.removeEventListener("msTransitionEnd", this, !1);
                this.element.removeEventListener("oTransitionEnd", this, !1);
                this.element.removeEventListener("transitionend", this, !1)
            }
            window.removeEventListener("resize", this, !1)
        } else window.onresize = null
    },
    getPos: function () {
        return this.index
    },
    prev: function (e) {
        this.delay = e || 0;
        clearTimeout(this.interval);
        this.index ? this.slide(this.index - 1, this.speed) : this.cont && this.slide(this.length - 1, this.speed)
    },
    next: function (e) {
        this.delay = e || 0;
        clearTimeout(this.interval);
        this.index < this.length - 1 ? this.slide(this.index + 1, this.speed) : this.cont && this.slide(0, this.speed)
    },
    begin: function () {
        var e = this;
        this.interval = this.delay ? setTimeout(function () {
            e.next(e.delay)
        }, this.delay) : 0
    },
    handleEvent: function (e) {
        switch (e.type) {
        case "touchstart":
            this.onTouchStart(e);
            break;
        case "touchmove":
            this.onTouchMove(e);
            break;
        case "touchend":
            this.onTouchEnd(e);
            break;
        case "webkitTransitionEnd":
        case "msTransitionEnd":
        case "oTransitionEnd":
        case "otransitionend":
        case "transitionend":
            this.onTransitionEnd(e);
            break;
        case "resize":
            this.setup()
        }
        e.stopPropagation()
    },
    onTouchStart: function (e) {
        var t = this;
        t.start = {
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY,
            time: Number(new Date)
        };
        t.isScrolling = undefined;
        t.deltaX = 0
    },
    onTouchMove: function (e) {
        var t = this;
        if (e.touches.length > 1 || e.scale && e.scale !== 1) return;
        t.deltaX = e.touches[0].pageX - t.start.pageX;
        typeof t.isScrolling == "undefined" && (t.isScrolling = !! (t.isScrolling || Math.abs(t.deltaX) < Math.abs(e.touches[0].pageY - t.start.pageY)));
        if (!t.isScrolling) {
            e.preventDefault();
            t.delay = 0;
            clearTimeout(t.interval);
            t.deltaX = t.deltaX / (!t.index && t.deltaX > 0 || t.index == t.length - 1 && t.deltaX < 0 ? Math.abs(t.deltaX) / t.width + 1 : 1);
            t._move([t.index - 1, t.index, t.index + 1], t.deltaX)
        } else t.disableScroll && e.preventDefault()
    },
    onTouchEnd: function (e) {
        var t = this,
            n = Number(new Date) - t.start.time < 250 && Math.abs(t.deltaX) > 20 || Math.abs(t.deltaX) > t.width / 2,
            r = !t.index && t.deltaX > 0 || t.index == t.length - 1 && t.deltaX < 0,
            i = t.deltaX < 0;
        if (!t.isScrolling)
            if (n && !r) {
                if (i) {
                    t._stack([t.index - 1], -1);
                    t._slide([t.index, t.index + 1], -t.width, t.speed);
                    t.index += 1
                } else {
                    t._stack([t.index + 1], 1);
                    t._slide([t.index - 1, t.index], t.width, t.speed);
                    t.index += -1
                }
                t.callback(t.index, t.slides[t.index])
            } else t._slide([t.index - 1, t.index, t.index + 1], 0, t.speed)
    },
    onTransitionEnd: function (e) {
        if (this._getElemIndex(e.target) == this.index) {
            this.delay && this.begin();
            this.transitionEnd(this.index, this.slides[this.index])
        }
    },
    slide: function (e, t) {
        var n = this.index;
        if (n == e) return;
        var t = typeof t == "undefined" ? this.speed : t;
        if (this.browser.transitions) {
            var r = Math.abs(n - e) - 1,
                i = Math.abs(n - e) / (n - e),
                s = [];
            while (r--) s.push((e > n ? e : n) - r - 1);
            this._stack(s, i);
            this._slide([n, e], this.width * i, t)
        } else this._animate(n * -this.width, e * -this.width, t);
        this.index = e;
        this.callback(this.index, this.slides[this.index])
    },
    _slide: function (e, t, n) {
        var r = this.slides,
            i = e.length;
        while (i--) {
            this._translate(r[e[i]], t + this.cache[e[i]], n ? n : 0);
            this.cache[e[i]] += t
        }
    },
    _stack: function (e, t) {
        var n = this.slides,
            r = e.length,
            i = this.width * t;
        while (r--) {
            this._translate(n[e[r]], i, 0);
            this.cache[e[r]] = i
        }
    },
    _move: function (e, t) {
        var n = this.slides,
            r = e.length;
        while (r--) this._translate(n[e[r]], t + this.cache[e[r]], 0)
    },
    _translate: function (e, t, n) {
        if (!e) return;
        var r = e.style;
        r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = n + "ms";
        r.webkitTransform = "translate(" + t + "px,0)" + "translateZ(0)";
        r.msTransform = r.MozTransform = r.OTransform = "translateX(" + t + "px)"
    },
    _animate: function (e, t, n) {
        var r = this.element;
        if (!n) {
            r.style.left = t + "px";
            return
        }
        var i = this,
            s = new Date,
            o = setInterval(function () {
                var u = new Date - s;
                if (u > n) {
                    r.style.left = t + "px";
                    i.delay && i.begin();
                    i.transitionEnd(i.index, i.slides[i.index]);
                    clearInterval(o);
                    return
                }
                r.style.left = (t - e) * (Math.floor(u / n * 100) / 100) + e + "px"
            }, 4)
    },
    _getElemIndex: function (e) {
        return parseInt(e.getAttribute("data-index"), 10)
    }
};
(window.jQuery || window.Zepto) && function (e) {
    e.fn.Swipe = function (t) {
        return this.each(function () {
            var n = e(this);
            n.data("Swipe", new Swipe(n[0], t))
        })
    }
}(window.jQuery || window.Zepto);
(function (e, t) {
    "use strict";
    var n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    e.fn.imagesLoaded = function (r) {
        function c() {
            var t = e(f),
                n = e(l);
            s && (l.length ? s.reject(u, t, n) : s.resolve(u));
            e.isFunction(r) && r.call(i, u, t, n)
        }

        function h(e) {
            p(e.target, e.type === "error")
        }

        function p(t, r) {
            if (t.src === n || e.inArray(t, a) !== -1) return;
            a.push(t);
            r ? l.push(t) : f.push(t);
            e.data(t, "", {
                isBroken: r,
                src: t.src
            });
            o && s.notifyWith(e(t), [r, u, e(f), e(l)]);
            if (u.length === a.length) {
                setTimeout(c);
                u.unbind(".imagesLoaded", h)
            }
        }
        var i = this,
            s = e.isFunction(e.Deferred) ? e.Deferred() : 0,
            o = e.isFunction(s.notify),
            u = i.find("img").add(i.filter("img")),
            a = [],
            f = [],
            l = [];
        e.isPlainObject(r) && e.each(r, function (e, t) {
            e === "callback" ? r = t : s && s[e](t)
        });
        u.length ? u.bind("load.imagesLoaded error.imagesLoaded", h).each(function (r, i) {
            var s = i.src,
                o = e.data(i, "");
            if (o && o.src === s) {
                p(i, o.isBroken);
                return
            }
            if (i.complete && i.naturalWidth !== t) {
                p(i, i.naturalWidth === 0 || i.naturalHeight === 0);
                return
            }
            if (i.readyState || i.complete) {
                i.src = n;
                i.src = s
            }
        }) : c();
        return s ? s.promise(i) : i
    }
})(jQuery);
(function (e) {
    "use strict";
    e.fn.fitVids = function (t) {
        var n = {
            customSelector: null
        }, r = document.createElement("div"),
            i = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
        return r.className = "fit-vids-style", r.innerHTML = "&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>", i.parentNode.insertBefore(r, i), t && e.extend(n, t), this.each(function () {
            var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.youtube-nocookie.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var r = e(this).find(t.join(","));
            r.each(function () {
                var t = e(this);
                if (!("embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                    var n = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                        r = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
                        i = n / r;
                    if (!t.attr("id")) {
                        var s = "fitvid" + Math.floor(999999 * Math.random());
                        t.attr("id", s)
                    }
                    t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * i + "%"), t.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
})(jQuery);
(function (e) {
    "use strict";

    function r(e) {
        if (e in t.style) return e;
        var n = ["Moz", "Webkit", "O", "ms"],
            r = e.charAt(0).toUpperCase() + e.substr(1);
        if (e in t.style) return e;
        for (var i = 0; i < n.length; ++i) {
            var s = n[i] + r;
            if (s in t.style) return s
        }
    }

    function i() {
        t.style[n.transform] = "";
        t.style[n.transform] = "rotateY(90deg)";
        return t.style[n.transform] !== ""
    }

    function f(e) {
        typeof e == "string" && this.parse(e);
        return this
    }

    function l(e, t, n) {
        t === !0 ? e.queue(n) : t ? e.queue(t, n) : n()
    }

    function c(t) {
        var n = [];
        e.each(t, function (t) {
            t = e.camelCase(t);
            t = e.transit.propertyMap[t] || e.cssProps[t] || t;
            t = d(t);
            e.inArray(t, n) === -1 && n.push(t)
        });
        return n
    }

    function h(t, n, r, i) {
        var s = c(t);
        e.cssEase[r] && (r = e.cssEase[r]);
        var o = "" + m(n) + " " + r;
        parseInt(i, 10) > 0 && (o += " " + m(i));
        var u = [];
        e.each(s, function (e, t) {
            u.push(t + " " + o)
        });
        return u.join(", ")
    }

    function p(t, r) {
        r || (e.cssNumber[t] = !0);
        e.transit.propertyMap[t] = n.transform;
        e.cssHooks[t] = {
            get: function (n) {
                var r = e(n).css("transit:transform");
                return r.get(t)
            },
            set: function (n, r) {
                var i = e(n).css("transit:transform");
                i.setFromString(t, r);
                e(n).css({
                    "transit:transform": i
                })
            }
        }
    }

    function d(e) {
        return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase()
        })
    }

    function v(e, t) {
        return typeof e == "string" && !e.match(/^[\-0-9\.]+$/) ? e : "" + e + t
    }

    function m(t) {
        var n = t;
        e.fx.speeds[n] && (n = e.fx.speeds[n]);
        return v(n, "ms")
    }
    e.transit = {
        version: "0.9.9",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: !0,
        useTransitionEnd: !1
    };
    var t = document.createElement("div"),
        n = {}, s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    n.transition = r("transition");
    n.transitionDelay = r("transitionDelay");
    n.transform = r("transform");
    n.transformOrigin = r("transformOrigin");
    n.transform3d = i();
    var o = {
        transition: "transitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    }, u = n.transitionEnd = o[n.transition] || null;
    for (var a in n) n.hasOwnProperty(a) && typeof e.support[a] == "undefined" && (e.support[a] = n[a]);
    t = null;
    e.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    e.cssHooks["transit:transform"] = {
        get: function (t) {
            return e(t).data("transform") || new f
        },
        set: function (t, r) {
            var i = r;
            i instanceof f || (i = new f(i));
            n.transform === "WebkitTransform" && !s ? t.style[n.transform] = i.toString(!0) : t.style[n.transform] = i.toString();
            e(t).data("transform", i)
        }
    };
    e.cssHooks.transform = {
        set: e.cssHooks["transit:transform"].set
    };
    if (e.fn.jquery < "1.8") {
        e.cssHooks.transformOrigin = {
            get: function (e) {
                return e.style[n.transformOrigin]
            },
            set: function (e, t) {
                e.style[n.transformOrigin] = t
            }
        };
        e.cssHooks.transition = {
            get: function (e) {
                return e.style[n.transition]
            },
            set: function (e, t) {
                e.style[n.transition] = t
            }
        }
    }
    p("");
    p("");
    p("");
    p("");
    p("");
    p("");
    p("");
    p("");
    p("");
    p("x", !0);
    p("y", !0);
    f.prototype = {
        setFromString: function (e, t) {
            var n = typeof t == "string" ? t.split(",") : t.constructor === Array ? t : [t];
            n.unshift(e);
            f.prototype.set.apply(this, n)
        },
        set: function (e) {
            var t = Array.prototype.slice.apply(arguments, [1]);
            this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
        },
        get: function (e) {
            return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
        },
        setter: {
            rotate: function (e) {
                this.rotate = v(e, "deg")
            },
            rotateX: function (e) {
                this.rotateX = v(e, "deg")
            },
            rotateY: function (e) {
                this.rotateY = v(e, "deg")
            },
            scale: function (e, t) {
                t === undefined && (t = e);
                this.scale = e + "," + t
            },
            skewX: function (e) {
                this.skewX = v(e, "deg")
            },
            skewY: function (e) {
                this.skewY = v(e, "deg")
            },
            perspective: function (e) {
                this.perspective = v(e, "px")
            },
            x: function (e) {
                this.set("translate", e, null)
            },
            y: function (e) {
                this.set("translate", null, e)
            },
            translate: function (e, t) {
                this._translateX === undefined && (this._translateX = 0);
                this._translateY === undefined && (this._translateY = 0);
                e !== null && e !== undefined && (this._translateX = v(e, "px"));
                t !== null && t !== undefined && (this._translateY = v(t, "px"));
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function () {
                return this._translateX || 0
            },
            y: function () {
                return this._translateY || 0
            },
            scale: function () {
                var e = (this.scale || "1,1").split(",");
                e[0] && (e[0] = parseFloat(e[0]));
                e[1] && (e[1] = parseFloat(e[1]));
                return e[0] === e[1] ? e[0] : e
            },
            rotate3d: function () {
                var e = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var t = 0; t <= 3; ++t) e[t] && (e[t] = parseFloat(e[t]));
                e[3] && (e[3] = v(e[3], "deg"));
                return e
            }
        },
        parse: function (e) {
            var t = this;
            e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (e, n, r) {
                t.setFromString(n, r)
            })
        },
        toString: function (e) {
            var t = [];
            for (var r in this)
                if (this.hasOwnProperty(r)) {
                    if (!n.transform3d && (r === "rotateX" || r === "rotateY" || r === "perspective" || r === "transformOrigin")) continue;
                    r[0] !== "_" && (e && r === "scale" ? t.push(r + "3d(" + this[r] + ",1)") : e && r === "translate" ? t.push(r + "3d(" + this[r] + ",0)") : t.push(r + "(" + this[r] + ")"))
                }
            return t.join(" ")
        }
    };
    e.fn.transition = e.fn.transit = function (t, r, i, s) {
        var o = this,
            a = 0,
            f = !0;
        if (typeof r == "function") {
            s = r;
            r = undefined
        }
        if (typeof i == "function") {
            s = i;
            i = undefined
        }
        if (typeof t.easing != "undefined") {
            i = t.easing;
            delete t.easing
        }
        if (typeof t.duration != "undefined") {
            r = t.duration;
            delete t.duration
        }
        if (typeof t.complete != "undefined") {
            s = t.complete;
            delete t.complete
        }
        if (typeof t.queue != "undefined") {
            f = t.queue;
            delete t.queue
        }
        if (typeof t.delay != "undefined") {
            a = t.delay;
            delete t.delay
        }
        typeof r == "undefined" && (r = e.fx.speeds._default);
        typeof i == "undefined" && (i = e.cssEase._default);
        r = m(r);
        var c = h(t, r, i, a),
            p = e.transit.enabled && n.transition,
            d = p ? parseInt(r, 10) + parseInt(a, 10) : 0;
        if (d === 0) {
            var v = function (e) {
                o.css(t);
                s && s.apply(o);
                e && e()
            };
            l(o, f, v);
            return o
        }
        var g = {}, y = function (r) {
                var i = !1,
                    a = function () {
                        i && o.unbind(u, a);
                        d > 0 && o.each(function () {
                            this.style[n.transition] = g[this] || null
                        });
                        typeof s == "function" && s.apply(o);
                        typeof r == "function" && r()
                    };
                if (d > 0 && u && e.transit.useTransitionEnd) {
                    i = !0;
                    o.bind(u, a)
                } else window.setTimeout(a, d);
                o.each(function () {
                    d > 0 && (this.style[n.transition] = c);
                    e(this).css(t)
                })
            }, b = function (e) {
                this.offsetWidth;
                y(e)
            };
        l(o, f, b);
        return this
    };
    e.transit.getTransitionValue = h
})(jQuery);
(function (e) {
    function t(t, n) {
        function g() {
            r.update();
            b();
            return r
        }

        function y() {
            var e = h.toLowerCase();
            f.obj.css(c, p / u.ratio);
            o.obj.css(c, -p);
            v.start = f.obj.offset()[c];
            u.obj.css(e, a[n.axis]);
            a.obj.css(e, a[n.axis]);
            f.obj.css(e, f[n.axis])
        }

        function b() {
            if (!m) {
                f.obj.bind("mousedown", w);
                a.obj.bind("mouseup", S)
            } else s.obj[0].ontouchstart = function (e) {
                if (1 === e.touches.length) {
                    w(e.touches[0]);
                    e.stopPropagation()
                }
            }; if (n.scroll && window.addEventListener) {
                i[0].addEventListener("DOMMouseScroll", E, !1);
                i[0].addEventListener("mousewheel", E, !1);
                i[0].addEventListener("MozMousePixelScroll", function (e) {
                    e.preventDefault()
                }, !1)
            } else n.scroll && (i[0].onmousewheel = E)
        }

        function w(t) {
            e("body").addClass("noSelect");
            var n = parseInt(f.obj.css(c), 10);
            v.start = l ? t.pageX : t.pageY;
            d.start = n == "auto" ? 0 : n;
            if (!m) {
                e(document).bind("mousemove", S);
                e(document).bind("mouseup", x);
                f.obj.bind("mouseup", x)
            } else {
                document.ontouchmove = function (e) {
                    e.preventDefault();
                    S(e.touches[0])
                };
                document.ontouchend = x
            }
        }

        function E(t) {
            if (o.ratio < 1) {
                var r = t || window.event,
                    i = r.wheelDelta ? r.wheelDelta / 120 : -r.detail / 3;
                p -= i * n.wheel;
                p = Math.min(o[n.axis] - s[n.axis], Math.max(0, p));
                f.obj.css(c, p / u.ratio);
                o.obj.css(c, -p);
                o.obj.trigger("tinyscroll");
                if (n.lockscroll || p !== o[n.axis] - s[n.axis] && p !== 0) {
                    r = e.event.fix(r);
                    r.preventDefault()
                }
            }
        }

        function S(e) {
            if (o.ratio < 1) {
                n.invertscroll && m ? d.now = Math.min(a[n.axis] - f[n.axis], Math.max(0, d.start + (v.start - (l ? e.pageX : e.pageY)))) : d.now = Math.min(a[n.axis] - f[n.axis], Math.max(0, d.start + ((l ? e.pageX : e.pageY) - v.start)));
                p = d.now * u.ratio;
                o.obj.css(c, -p);
                f.obj.css(c, d.now)
            }
        }

        function x() {
            e("body").removeClass("noSelect");
            e(document).unbind("mousemove", S);
            e(document).unbind("mouseup", x);
            f.obj.unbind("mouseup", x);
            document.ontouchmove = document.ontouchend = null
        }
        var r = this,
            i = t,
            s = {
                obj: e(".diamonds")
            }, o = {
                obj: e(".lattice--continuous")
            }, u = {
                obj: e(".scrollbar")
            }, a = {
                obj: e(".scrollbar")
            }, f = {
                obj: e(".handle")
            }, l = n.axis === "x",
            c = l ? "left" : "top",
            h = l ? "Width" : "Height",
            p = 0,
            d = {
                start: 0,
                now: 0
            }, v = {}, m = "ontouchstart" in document.documentElement;
        this.update = function (e) {
            s[n.axis] = s.obj[0]["offset" + h];
            o[n.axis] = o.obj[0]["scroll" + h];
            o.ratio = s[n.axis] / o[n.axis];
            u.obj.toggleClass("disable", o.ratio >= 1);
            a[n.axis] = n.size === "auto" ? s[n.axis] : n.size;
            f[n.axis] = Math.min(a[n.axis], Math.max(0, n.sizethumb === "auto" ? a[n.axis] * o.ratio : n.sizethumb));
            u.ratio = n.sizethumb === "auto" ? o[n.axis] / a[n.axis] : (o[n.axis] - s[n.axis]) / (a[n.axis] - f[n.axis]);
            p = e === "relative" && o.ratio <= 1 ? Math.min(o[n.axis] - s[n.axis], Math.max(0, p)) : 0;
            p = e === "bottom" && o.ratio <= 1 ? o[n.axis] - s[n.axis] : isNaN(parseInt(e, 10)) ? p : parseInt(e, 10);
            y()
        };
        return g()
    }
    e.tiny = e.tiny || {};
    e.tiny.scrollbar = {
        options: {
            axis: "y",
            wheel: 40,
            scroll: !0,
            lockscroll: !0,
            size: "auto",
            sizethumb: "auto",
            invertscroll: !1
        }
    };
    e.fn.tinyscrollbar = function (n) {
        var r = e.extend({}, e.tiny.scrollbar.options, n);
        this.each(function () {
            e(this).data("tsb", new t(e(this), r))
        });
        return this
    };
    e.fn.tinyscrollbar_update = function (t) {
        return e(this).data("tsb").update(t)
    }
})(jQuery);
drawingroom.config = function () {
    return {
        routes: {
            home: {
                name: "home",
                visited: !1,
                init: function () {
                    drawingroom.home.init()
                },
                destroy: function () {
                    drawingroom.home.destroy()
                }
            },
            work: {
                name: "work",
                visited: !1,
                init: function () {
                    drawingroom.work.init()
                },
                destroy: function () {
                    drawingroom.work.destroy()
                }
            },
            blog: {
                name: "blog",
                visited: !1,
                init: function () {
                    drawingroom.blog.init()
                },
                destroy: function () {
                    drawingroom.blog.destroy()
                }
            },
            about: {
                name: "about",
                visited: !1,
                init: function () {
                    drawingroom.about.init()
                },
                destroy: function () {
                    drawingroom.about.destroy()
                }
            },
            contact: {
                name: "contact",
                visited: !1,
                init: function () {
                    drawingroom.contact.init()
                },
                destroy: function () {
                    drawingroom.contact.destroy()
                }
            },
            "work--sub": {
                name: "work--sub",
                visited: !1,
                init: function () {
                    $(".post").fitVids()
                },
                destroy: function () {
                    drawingroom.ajaxpages.switchpage()
                }
            }
        }
    }
}();
drawingroom.checkPage = function (e) {
    var t;
    t = function () {
        var t;
        for (var n in drawingroom.config.routes)
            if (e("html").hasClass("page--" + drawingroom.config.routes[n].name)) {
                drawingroom.config.routes[n].init();
                drawingroom.config.routes[n].visited = !0
            }
    };
    destroy = function () {
        for (var t in drawingroom.config.routes)
            if (e("html").hasClass("page--" + drawingroom.config.routes[t].name)) {
                drawingroom.config.routes[t].destroy();
                return !0
            }
        drawingroom.ajaxpages.switchpage()
    };
    return {
        init: t,
        destroy: destroy
    }
}(jQuery);
(function (e, t) {
    "use strict";
    var n = e.History = e.History || {}, r = e.jQuery;
    if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    n.Adapter = {
        bind: function (e, t, n) {
            r(e).bind(t, n)
        },
        trigger: function (e, t, n) {
            r(e).trigger(t, n)
        },
        extractEventData: function (e, n, r) {
            var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
            return i
        },
        onDomLoad: function (e) {
            r(e)
        }
    }, typeof n.init != "undefined" && n.init()
})(window),
function (e, t) {
    "use strict";
    var n = e.console || t,
        r = e.document,
        i = e.navigator,
        s = e.sessionStorage || !1,
        o = e.setTimeout,
        u = e.clearTimeout,
        a = e.setInterval,
        f = e.clearInterval,
        l = e.JSON,
        c = e.alert,
        h = e.History = e.History || {}, p = e.history;
    l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
    if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
    h.init = function () {
        return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
    }, h.initCore = function () {
        if (typeof h.initCore.initialized != "undefined") return !1;
        h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.intervalList = [], h.clearAllIntervals = function () {
            var e, t = h.intervalList;
            if (typeof t != "undefined" && t !== null) {
                for (e = 0; e < t.length; e++) f(t[e]);
                h.intervalList = null
            }
        }, h.debug = function () {
            (h.options.debug || !1) && h.log.apply(h, arguments)
        }, h.log = function () {
            var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                t = r.getElementById("log"),
                i, s, o, u, a;
            e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
            for (s = 1, o = arguments.length; s < o; ++s) {
                a = arguments[s];
                if (typeof a == "object" && typeof l != "undefined") try {
                    a = l.stringify(a)
                } catch (f) {}
                i += "\n" + a + "\n"
            }
            return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
        }, h.getInternetExplorerMajorVersion = function () {
            var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function () {
                    var e = 3,
                        t = r.createElement("div"),
                        n = t.getElementsByTagName("i");
                    while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                    return e > 4 ? e : !1
                }();
            return e
        }, h.isInternetExplorer = function () {
            var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
            return e
        }, h.emulated = {
            pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
            hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
        }, h.enabled = !h.emulated.pushState, h.bugs = {
            setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
        }, h.isEmptyObject = function (e) {
            for (var t in e) return !1;
            return !0
        }, h.cloneObject = function (e) {
            var t, n;
            return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
        }, h.getRootUrl = function () {
            var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
            if (r.location.port || !1) e += ":" + r.location.port;
            return e += "/", e
        }, h.getBaseHref = function () {
            var e = r.getElementsByTagName("base"),
                t = null,
                n = "";
            return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
        }, h.getBaseUrl = function () {
            var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
            return e
        }, h.getPageUrl = function () {
            var e = h.getState(!1, !1),
                t = (e || {}).url || r.location.href,
                n;
            return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
                return /\./.test(e) ? e : e + "/"
            }), n
        }, h.getBasePageUrl = function () {
            var e = r.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function (e, t, n) {
                return /[^\/]$/.test(e) ? "" : e
            }).replace(/\/+$/, "") + "/";
            return e
        }, h.getFullUrl = function (e, t) {
            var n = e,
                r = e.substring(0, 1);
            return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
        }, h.getShortUrl = function (e) {
            var t = e,
                n = h.getBaseUrl(),
                r = h.getRootUrl();
            return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
        }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
            h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
        }, h.getState = function (e, t) {
            typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
            var n = h.getLastSavedState();
            return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
        }, h.getIdByState = function (e) {
            var t = h.extractId(e.url),
                n;
            if (!t) {
                n = h.getStateString(e);
                if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                else {
                    for (;;) {
                        t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                    }
                    h.stateToId[n] = t, h.idToState[t] = e
                }
            }
            return t
        }, h.normalizeState = function (e) {
            var t, n;
            if (!e || typeof e != "object") e = {};
            if (typeof e.normalized != "undefined") return e;
            if (!e.data || typeof e.data != "object") e.data = {};
            t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(h.unescapeString(e.url || r.location.href)), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data);
            if (t.title || n) t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id;
            return t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
        }, h.createStateObject = function (e, t, n) {
            var r = {
                data: e,
                title: t,
                url: n
            };
            return r = h.normalizeState(r), r
        }, h.getStateById = function (e) {
            e = String(e);
            var n = h.idToState[e] || h.store.idToState[e] || t;
            return n
        }, h.getStateString = function (e) {
            var t, n, r;
            return t = h.normalizeState(e), n = {
                data: t.data,
                title: e.title,
                url: e.url
            }, r = l.stringify(n), r
        }, h.getStateId = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.id, n
        }, h.getHashByState = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.hash, n
        }, h.extractId = function (e) {
            var t, n, r;
            return n = /(.*)\&_suid=([0-9]+)$/.exec(e), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
        }, h.isTraditionalAnchor = function (e) {
            var t = !/[\/\?\.]/.test(e);
            return t
        }, h.extractState = function (e, t) {
            var n = null,
                r, i;
            return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
        }, h.getIdByUrl = function (e) {
            var n = h.urlToId[e] || h.store.urlToId[e] || t;
            return n
        }, h.getLastSavedState = function () {
            return h.savedStates[h.savedStates.length - 1] || t
        }, h.getLastStoredState = function () {
            return h.storedStates[h.storedStates.length - 1] || t
        }, h.hasUrlDuplicate = function (e) {
            var t = !1,
                n;
            return n = h.extractState(e.url), t = n && n.id !== e.id, t
        }, h.storeState = function (e) {
            return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
        }, h.isLastSavedState = function (e) {
            var t = !1,
                n, r, i;
            return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
        }, h.saveState = function (e) {
            return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
        }, h.getStateByIndex = function (e) {
            var t = null;
            return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
        }, h.getHash = function () {
            var e = h.unescapeHash(r.location.hash);
            return e
        }, h.unescapeString = function (t) {
            var n = t,
                r;
            for (;;) {
                r = e.unescape(n);
                if (r === n) break;
                n = r
            }
            return n
        }, h.unescapeHash = function (e) {
            var t = h.normalizeHash(e);
            return t = h.unescapeString(t), t
        }, h.normalizeHash = function (e) {
            var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
            return t
        }, h.setHash = function (e, t) {
            var n, i, s;
            return t !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.setHash,
                args: arguments,
                queue: t
            }), !1) : (n = h.escapeHash(e), h.busy(!0), i = h.extractState(e, !0), i && !h.emulated.pushState ? h.pushState(i.data, i.title, i.url, !1) : r.location.hash !== n && (h.bugs.setHash ? (s = h.getPageUrl(), h.pushState(null, null, s + "#" + n, !1)) : r.location.hash = n), h)
        }, h.escapeHash = function (t) {
            var n = h.normalizeHash(t);
            return n = e.escape(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
        }, h.getHashByUrl = function (e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return t = h.unescapeHash(t), t
        }, h.setTitle = function (e) {
            var t = e.title,
                n;
            t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
            try {
                r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (i) {}
            return r.title = t, h
        }, h.queues = [], h.busy = function (e) {
            typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
            if (!h.busy.flag) {
                u(h.busy.timeout);
                var t = function () {
                    var e, n, r;
                    if (h.busy.flag) return;
                    for (e = h.queues.length - 1; e >= 0; --e) {
                        n = h.queues[e];
                        if (n.length === 0) continue;
                        r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                    }
                };
                h.busy.timeout = o(t, h.options.busyDelay)
            }
            return h.busy.flag
        }, h.busy.flag = !1, h.fireQueueItem = function (e) {
            return e.callback.apply(e.scope || h, e.args || [])
        }, h.pushQueue = function (e) {
            return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
        }, h.queue = function (e, t) {
            return typeof e == "function" && (e = {
                callback: e
            }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
        }, h.clearQueue = function () {
            return h.busy.flag = !1, h.queues = [], h
        }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
            return h.stateChanged = !0, h.doubleCheckClear(), h
        }, h.doubleCheckClear = function () {
            return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
        }, h.doubleCheck = function (e) {
            return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function () {
                return h.doubleCheckClear(), h.stateChanged || e(), !0
            }, h.options.doubleCheckInterval)), h
        }, h.safariStatePoll = function () {
            var t = h.extractState(r.location.href),
                n;
            if (!h.isLastSavedState(t)) {
                n = t;
                return n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h
            }
            return
        }, h.back = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.back,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.back(!1)
            }), p.go(-1), !0)
        }, h.forward = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.forward,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.forward(!1)
            }), p.go(1), !0)
        }, h.go = function (e, t) {
            var n;
            if (e > 0)
                for (n = 1; n <= e; ++n) h.forward(t);
            else {
                if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (n = -1; n >= e; --n) h.back(t)
            }
            return h
        };
        if (h.emulated.pushState) {
            var v = function () {};
            h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
        } else h.onPopState = function (t, n) {
            var i = !1,
                s = !1,
                o, u;
            return h.doubleCheckComplete(), o = h.getHash(), o ? (u = h.extractState(o || r.location.href, !0), u ? h.replaceState(u.data, u.title, u.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (i = h.Adapter.extractEventData("state", t, n) || !1, i ? s = h.getStateById(i) : h.expectedStateId ? s = h.getStateById(h.expectedStateId) : s = h.extractState(r.location.href), s || (s = h.createStateObject(null, null, r.location.href)), h.expectedStateId = !1, h.isLastSavedState(s) ? (h.busy(!1), !1) : (h.storeState(s), h.saveState(s), h.setTitle(s), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
        }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.pushState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        }, h.replaceState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.replaceState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        }; if (s) {
            try {
                h.store = l.parse(s.getItem("History.store")) || {}
            } catch (y) {
                h.store = {}
            }
            h.normalizeStore()
        } else h.store = {}, h.normalizeStore();
        h.Adapter.bind(e, "beforeunload", h.clearAllIntervals), h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(r.location.href, !0))), s && (h.onUnload = function () {
            var e, t;
            try {
                e = l.parse(s.getItem("History.store")) || {}
            } catch (n) {
                e = {}
            }
            e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
            for (t in h.idToState) {
                if (!h.idToState.hasOwnProperty(t)) continue;
                e.idToState[t] = h.idToState[t]
            }
            for (t in h.urlToId) {
                if (!h.urlToId.hasOwnProperty(t)) continue;
                e.urlToId[t] = h.urlToId[t]
            }
            for (t in h.stateToId) {
                if (!h.stateToId.hasOwnProperty(t)) continue;
                e.stateToId[t] = h.stateToId[t]
            }
            h.store = e, h.normalizeStore(), s.setItem("History.store", l.stringify(e))
        }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
        if (!h.emulated.pushState) {
            h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
            if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function () {
                h.Adapter.trigger(e, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function () {
                h.Adapter.trigger(e, "hashchange")
            })
        }
    }, h.init()
}(window);
Number.prototype.roundTo = function (e) {
    var t = this % e;
    return t <= e / 2 ? this - t : this + e - t
};
drawingroom.calcItemSize = function (e) {
    var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k;
    t = function () {
        i = e(".row"), s = e(".item"), o = e(".item img"), u = e(".col"), a = e(".item .wrap"), f = e(".slide .container"), l = e(".row:nth-child(odd)"), c = e(".row2"), h = e(".row3"), m = e(".row--shift-bottom");
        p = e(".group .item"), d = e(".group .item .wrap"), v = e(".group .item img"), g = 20
    };
    n = function () {
        var t = function (t) {
            windowWidth = e(window).outerWidth();
            windowHeight = e(window).outerHeight() - 100;
            b = (windowWidth - g * 7) / 8;
            t ? y = t : y = b / 2;
            w = Math.floor(y * 2);
            E = Math.round(w * 2 / Math.sqrt(2));
            S = Math.floor(y * 4 + g);
            x = Math.round(S * 2 / Math.sqrt(2));
            C = Math.round((x - S) / 2);
            k = Math.round((E - w) / 2)
        };
        t();
        T = S * 3 + (w + g) * 2;
        if (T >= windowWidth) {
            y -= (T - windowWidth) / 8 / 2;
        }
        N = S * 3 - (w + g);
        if (N >= windowHeight) {
            y -= (N - windowHeight) / 6 / 2;
            t(y)
        }
        f.css({
            margin: "-" + g + "px" + " auto " + ("-" + (w + g) + "px")
        });
        i.css({
            height: S + "px"
        });
        l.css({
            left: w * 1.5 + g + "px"
        });
        c.css({
            top: "-" + w / 2 + "px"
        });
        h.css({
            height: w + "px"
        });
        m.css({
            top: "-" + w + "px"
        });
        u.css({
            width: S + "px",
            height: S + "px",
            margin: "0 0 0 " + (w + g) + "px"
        });
        s.css({
            width: S + "px",
            height: S + "px"
        });
        a.css({
            left: "-" + C + "px",
            top: "-" + C + "px",
            width: x + "px",
            height: x + "px"
        });
        o.css({
            width: x + "px",
            height: x + "px"
        });
        p.css({
            width: w + "px",
            height: w + "px"
        });
        d.css({
            left: "-" + k + "px",
            top: "-" + k + "px",
            width: E + "px",
            height: E + "px"
        });
        v.css({
            width: E + "px",
            height: E + "px"
        })
    };
    r = function () {
        t();
        n();
        e(window).resize(function () {
            n()
        })
    };
    return {
        init: r
    }
}(jQuery);
drawingroom.f = function () {
    var e = this;
    return {
        appendLoadElement: function (e) {
            e.has("img").prepend('<span class="item--loading"><span class="spinner"><i class="icon-repeat"></i></span></span>')
        },
        detachImage: function (e) {
            var t = [],
                n;
            e.each(function (e, r) {
                n = Math.floor(Math.random() * 1001);
                $(this)[0].src = $(this)[0].src + "?" + n;
                t[e] = $(this).detach()
            });
            return t
        },
        reattachImages: function (e, t) {
            e.each(function (e, n) {
                $("", this).show()
                $(this).append(t[e]);                
            })
        }
    }
}();
drawingroom.intro = function (e) {
    var t;
    t = function (t) {
        var n = e(".page-head").outerHeight(),
            r = e(window).outerHeight();
        e("body").append('<div class="intro--home"><div class="intro__logo branding">The Drawing Room</div></div>');
        e(".intro--home").transition({
            bottom: (r - n) / 2 - e(".intro--home").outerHeight() / 2,
            opacity: 100
        }, 1e3, "snap", function () {
            e(".item--loader").transition({
                opacity: 100
            }, function () {
                typeof t == "function" && t()
            })
        })
    };
    return {
        init: t
    }
}(jQuery);
drawingroom.pageLoad = function (e) {
    var t = window.History,
        n = window.document;
    if (!t.enabled) return !1;
    e(window).on("statechangecomplete", function (e, t) {
        drawingroom.checkPage.init()
    })
}(jQuery);
drawingroom.item = function (e) {
    var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g = [];
    r = function (e) {
        typeof e == "function" && e()
    };
    i = function (t) {
        var n = e(".item:not(.item--loader) .wrap");
        if (e("img", n).length === 0) {
            e.when(drawingroom.f.reattachImages(e(".wrap", ".item--image, .item--post-thumbnail"), g)).done(function () {
                r(c)
            })
        } else {
            r(c)
        }
    };
    f = function (t, n, s) {
        function h(t) {
            var n = e(window).scrollTop(),
                r = n + e(window).height(),
                i = e(window).scrollLeft() - 300,
                s = i + e(window).outerWidth() + 600,
                o = e(t).offset().top,
                u = o + e(t).height(),
                a = e(t).offset().left,
                f = a + e(t).outerWidth();
            return u <= r && o >= n && f <= s && a >= i
        }

        function g(t) {
            var n = [];
            t.each(function (t, r) {
                h(e(this)) === !0 && n.push(e(this))
            });
            return n
        }
        var o = 0,
            u, f = {
                enter: 1,
                exit: 0
            }, l;
        if (n === "exit")
            if (a === "home") {
                l = [];
                t.each(function (t, n) {
                    e(this).hasClass("static") || l.push(e(this))
                })
            } else l = g(t);
            else {
                l = [];
                t.each(function (t, n) {
                    l.push(e(this))
                })
            }(u = function (h) {
                if (h < l.length) {
                    l[h].transition(p[n], d[n].speed, v[n], function () {
                        l[h].siblings(".external-meta") && e(".external-meta").eq(h).transition({
                            opacity: f[n]
                        }, 400, v[n]);
                        h + 1 === t.length && n === "enter" && (s === !0 ? i() : r(c))
                    });
                    e(".spinner", l[h]).delay(650).transition({
                        opacity: .35
                    }, 1200);
                    setTimeout(function () {
                        o++;
                        u(o)
                    }, m[a])
                } else n === "exit" && r(c)
            })(o)
    };
    l = function () {
        e(".diamonds").transition({
            scale: .8
        }, 100, function () {
            e(this).transition({
                x: -(e(this).width() + 500)
            }, 800, v.enter, function () {
                r(c)
            })
        })
    };
    t = function (t, n) {
        var r;
        a = t;
        s = e(".item"), o = e(".wrap", s), u = e(".item__image");
        Modernizr.csstransitions ? r = "cubic-bezier(0.785, 0.135, 0.150, 0.860)" : r = "swing";
        p = {
            initial: {
                opacity: 100,
                scale: 1,
                rotate: 0
            },
            enter: {
                opacity: 100,
                scale: 1,
                rotate: 0
            },
            exit: {
                opacity: 0,
                rotate: 0,
                scale: 0
            }
        }, d = {
            enter: {
                speed: 1e3
            },
            exit: {
                speed: 100
            }
        }, m = {
            home: 45,
            work: 85,
            blog: 220
        };
        v = {
            enter: r,
            exit: "ease-in-out"
        }, c = n;
        s.transition(p.initial, 0);
        drawingroom.f.appendLoadElement(o);
        if (drawingroom.config.routes[t].visited === !1) {
            g = drawingroom.f.detachImage(u)
        }
        f(s, "enter", !0)
    };
    n = function (e) {
        c = e;
        f(s, "exit")
    };
    return {
        init: t,
        destroy: n
    }
}(jQuery);
drawingroom.home = function () {
    var e;
    e = function () {
        drawingroom.calcItemSize.init();
    };
    return {
        init: e
    }
}();
(function (e) {
    function r(e) {
        document.addEventListener("DOMContentLoaded", function () {
            document.removeEventListener("DOMContentLoaded", arguments.callee, !1);
            e()
        }, !1)
    }

    function i(e) {
        if (screen.width > 980 || screen.height > 980) return;
        if (window.navigator.standalone === !0) return;
        if (window.innerWidth !== document.documentElement.clientWidth && window.innerWidth - 1 !== document.documentElement.clientWidth) return;
        if (e === !0 && document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
            t = document.getElementsByTagName("body")[0];
            t.style.height = document.documentElement.clientWidth / screen.width * screen.height + "px"
        }
        setTimeout(function () {
            if (window.pageYOffset !== 0) return;
            window.scrollTo(0, 1);
            t !== undefined && (t.style.height = window.innerHeight + "px");
            window.scrollTo(0, 0)
        }, 1e3)
    }

    function s() {
        setTimeout(function () {
            if (window.pageYOffset !== 0) return;
            window.scrollTo(0, window.pageYOffset + 1)
        }, 1e3)
    }
    $.support.transition || ($.fn.transition = $.fn.animate);
    e.checkPage.init();
    var t, n = (new Date).getTime();
    r(function () {
        var e = (new Date).getTime();
        e - n < 3e3 && i(!0)
    })
})(drawingroom);