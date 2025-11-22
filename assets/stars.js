var h;
h || (h = typeof Module !== 'undefined' ? Module : {});
var aa = {},
    ba;
for (ba in h)
    h.hasOwnProperty(ba) && (aa[ba] = h[ba]);
var ca = "./this.program";
function da(a, b) {
    throw b;
}
var ea = !1,
    fa = !1,
    ha = !1,
    ia = !1;
ea = "object" === typeof window;
fa = "function" === typeof importScripts;
ha = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
ia = !ea && !ha && !fa;
var k = "",
    ja,
    ka,
    la,
    ma,
    na,
    oa;
if (ha)
    k = fa ? require("path").dirname(k) + "/" : __dirname + "/",
    ja = function(a, b) {
        na || (na = require("fs"));
        oa || (oa = require("path"));
        a = oa.normalize(a);
        return na.readFileSync(a, b ? null : "utf8")
    },
    la = function(a) {
        a = ja(a, !0);
        a.buffer || (a = new Uint8Array(a));
        assert(a.buffer);
        return a
    },
    1 < process.argv.length && (ca = process.argv[1].replace(/\\/g, "/")),
    process.argv.slice(2),
    "undefined" !== typeof module && (module.exports = h),
    process.on("uncaughtException", function(a) {
        if (!(a instanceof pa))
            throw a;
    }),
    process.on("unhandledRejection",
    l),
    da = function(a) {
        process.exit(a)
    },
    h.inspect = function() {
        return "[Emscripten Module object]"
    };
else if (ia)
    "undefined" != typeof read && (ja = function(a) {
        return read(a)
    }),
    la = function(a) {
        if ("function" === typeof readbuffer)
            return new Uint8Array(readbuffer(a));
        a = read(a, "binary");
        assert("object" === typeof a);
        return a
    },
    "function" === typeof quit && (da = function(a) {
        quit(a)
    }),
    "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ?
    printErr : print);
else if (ea || fa)
    fa ? k = self.location.href : "undefined" !== typeof document && document.currentScript && (k = document.currentScript.src),
    k = 0 !== k.indexOf("blob:") ? k.substr(0, k.lastIndexOf("/") + 1) : "",
    ja = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText
    },
    fa && (la = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.responseType = "arraybuffer";
        b.send(null);
        return new Uint8Array(b.response)
    }),
    ka = function(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function() {
            200 == d.status || 0 == d.status && d.response ? b(d.response) : c()
        };
        d.onerror = c;
        d.send(null)
    },
    ma = function(a) {
        document.title = a
    };
var qa = h.print || console.log.bind(console),
    q = h.printErr || console.warn.bind(console);
for (ba in aa)
    aa.hasOwnProperty(ba) && (h[ba] = aa[ba]);
aa = null;
h.thisProgram && (ca = h.thisProgram);
h.quit && (da = h.quit);
function ra(a) {
    sa || (sa = {});
    sa[a] || (sa[a] = 1, q(a))
}
var sa,
    ta;
h.wasmBinary && (ta = h.wasmBinary);
var noExitRuntime = h.noExitRuntime || !0;
"object" !== typeof WebAssembly && l("no native wasm support detected");
function ua(a, b) {
    var c = "float";
    "*" === c.charAt(c.length - 1) && (c = "i32");
    switch (c) {
    case "i1":
        r[a >> 0] = b;
        break;
    case "i8":
        r[a >> 0] = b;
        break;
    case "i16":
        va[a >> 1] = b;
        break;
    case "i32":
        u[a >> 2] = b;
        break;
    case "i64":
        wa = [b >>> 0, (v = b, 1 <= +Math.abs(v) ? 0 < v ? (Math.min(+Math.floor(v / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((v - +(~~v >>> 0)) / 4294967296) >>> 0 : 0)];
        u[a >> 2] = wa[0];
        u[a + 4 >> 2] = wa[1];
        break;
    case "float":
        w[a >> 2] = b;
        break;
    case "double":
        x[a >> 3] = b;
        break;
    default:
        l("invalid type for setValue: " + c)
    }
}
var xa,
    ya = !1;
function assert(a, b) {
    a || l("Assertion failed: " + b)
}
function za(a) {
    var b = h["_" + a];
    assert(b, "Cannot call unknown function " + a + ", make sure it is exported");
    return b
}
function Aa(a, b, c, d) {
    var e = {
            string: function(p) {
                var t = 0;
                if (null !== p && void 0 !== p && 0 !== p) {
                    var z = (p.length << 2) + 1;
                    t = Ba(z);
                    y(p, t, z)
                }
                return t
            },
            array: function(p) {
                var t = Ba(p.length);
                r.set(p, t);
                return t
            }
        },
        f = za(a),
        g = [];
    a = 0;
    if (d)
        for (var m = 0; m < d.length; m++) {
            var n = e[c[m]];
            n ? (0 === a && (a = Ca()), g[m] = n(d[m])) : g[m] = d[m]
        }
    c = f.apply(null, g);
    c = function(p) {
        return "string" === b ? A(p) : "boolean" === b ? !!p : p
    }(c);
    0 !== a && Da(a);
    return c
}
var Ea = new TextDecoder("utf8");
function Fa(a) {
    for (var b = 0; a[b] && !(NaN <= b);)
        ++b;
    return Ea.decode(a.subarray ? a.subarray(0, b) : new Uint8Array(a.slice(0, b)))
}
function A(a, b) {
    if (!a)
        return "";
    b = a + b;
    for (var c = a; !(c >= b) && C[c];)
        ++c;
    return Ea.decode(C.subarray(a, c))
}
function Ga(a, b, c, d) {
    if (!(0 < d))
        return 0;
    var e = c;
    d = c + d - 1;
    for (var f = 0; f < a.length; ++f) {
        var g = a.charCodeAt(f);
        if (55296 <= g && 57343 >= g) {
            var m = a.charCodeAt(++f);
            g = 65536 + ((g & 1023) << 10) | m & 1023
        }
        if (127 >= g) {
            if (c >= d)
                break;
            b[c++] = g
        } else {
            if (2047 >= g) {
                if (c + 1 >= d)
                    break;
                b[c++] = 192 | g >> 6
            } else {
                if (65535 >= g) {
                    if (c + 2 >= d)
                        break;
                    b[c++] = 224 | g >> 12
                } else {
                    if (c + 3 >= d)
                        break;
                    b[c++] = 240 | g >> 18;
                    b[c++] = 128 | g >> 12 & 63
                }
                b[c++] = 128 | g >> 6 & 63
            }
            b[c++] = 128 | g & 63
        }
    }
    b[c] = 0;
    return c - e
}
function y(a, b, c) {
    return Ga(a, C, b, c)
}
function Ha(a) {
    for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
        127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4
    }
    return b
}
function Ia(a) {
    var b = Ha(a) + 1,
        c = D(b);
    c && Ga(a, r, c, b);
    return c
}
var Ja,
    r,
    C,
    va,
    Ka,
    u,
    La,
    w,
    x,
    E,
    Ma = [],
    Na = [],
    Oa = [],
    Pa = [],
    Qa = [];
Na.push({
    jg: function() {
        Ra()
    }
});
function Sa() {
    var a = h.preRun.shift();
    Ma.unshift(a)
}
var Ta = 0,
    Ua = null,
    Va = null;
h.preloadedImages = {};
h.preloadedAudios = {};
function l(a) {
    if (h.onAbort)
        h.onAbort(a);
    q(a);
    ya = !0;
    throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
}
function Wa(a) {
    var b = Xa;
    return String.prototype.startsWith ? b.startsWith(a) : 0 === b.indexOf(a)
}
function Ya() {
    return Wa("data:application/octet-stream;base64,")
}
var Xa = "stars.wasm";
if (!Ya()) {
    var Za = Xa;
    Xa = h.locateFile ? h.locateFile(Za, k) : k + Za
}
function $a() {
    var a = Xa;
    try {
        if (a == Xa && ta)
            return new Uint8Array(ta);
        if (la)
            return la(a);
        throw "both async and sync fetching of the wasm failed";
    } catch (b) {
        l(b)
    }
}
function ab() {
    if (!ta && (ea || fa)) {
        if ("function" === typeof fetch && !Wa("file://"))
            return fetch(Xa, {
                credentials: "same-origin"
            }).then(function(a) {
                if (!a.ok)
                    throw "failed to load wasm binary file at '" + Xa + "'";
                return a.arrayBuffer()
            }).catch(function() {
                return $a()
            });
        if (ka)
            return new Promise(function(a, b) {
                ka(Xa, function(c) {
                    a(new Uint8Array(c))
                }, b)
            })
    }
    return Promise.resolve().then(function() {
        return $a()
    })
}
var v,
    wa,
    cb = {
        7356: function() {
            return h.gravity
        },
        7494: function() {
            return window.innerWidth
        },
        7524: function() {
            return window.innerHeight
        },
        7555: function() {
            h.canvas.style.position = "absolute";
            h.canvas.style.top = 0;
            h.canvas.style.left = 0;
            h.canvas.style.pointerEvents = "none"
        },
        7717: function(a, b) {
            h.canvas.width = a;
            h.canvas.height = b
        },
        42292: function(a, b, c) {
            h.SDL2 || (h.SDL2 = {});
            var d = h.SDL2;
            d.tg !== h.canvas && (d.wf = h.createContext(h.canvas, !1, !0), d.tg = h.canvas);
            if (d.w !== a || d.Ag !== b || d.Cg !== d.wf)
                d.image = d.wf.createImageData(a,
                b),
                d.w = a,
                d.Ag = b,
                d.Cg = d.wf;
            a = d.image.data;
            b = c >> 2;
            var e = 0;
            if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray)
                for (c = a.length; e < c;) {
                    var f = u[b];
                    a[e] = f & 255;
                    a[e + 1] = f >> 8 & 255;
                    a[e + 2] = f >> 16 & 255;
                    a[e + 3] = 255;
                    b++;
                    e += 4
                }
            else if (d.$g !== a && (d.ug = new Int32Array(a.buffer), d.vg = new Uint8Array(a.buffer)), a = d.ug, c = a.length, a.set(u.subarray(b, b + c)), a = d.vg, b = 3, e = b + 4 * c, 0 == c % 8)
                for (; b < e;)
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0,
                    a[b] = 255,
                    b = b + 4 | 0;
            else
                for (; b < e;)
                    a[b] = 255,
                    b = b + 4 | 0;
            d.wf.putImageData(d.image, 0, 0);
            return 0
        },
        44962: function(a) {
            h.canvas && (h.canvas.style.cursor = A(a));
            return 0
        },
        45055: function() {
            h.canvas && (h.canvas.style.cursor = "none")
        },
        45124: function(a, b, c, d, e) {
            var f = document.createElement("canvas");
            f.width = a;
            f.height = b;
            var g = f.getContext("2d");
            a = g.createImageData(a, b);
            b = a.data;
            e >>= 2;
            var m = 0,
                n;
            if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray)
                for (n = b.length; m < n;) {
                    var p = u[e];
                    b[m] = p & 255;
                    b[m + 1] = p >>
                    8 & 255;
                    b[m + 2] = p >> 16 & 255;
                    b[m + 3] = p >> 24 & 255;
                    e++;
                    m += 4
                }
            else
                b = new Int32Array(b.buffer),
                n = b.length,
                b.set(u.subarray(e, e + n));
            g.putImageData(a, 0, 0);
            c = 0 === c && 0 === d ? "url(" + f.toDataURL() + "), auto" : "url(" + f.toDataURL() + ") " + c + " " + d + ", auto";
            d = D(c.length + 1);
            y(c, d, c.length + 1);
            return d
        },
        47087: function(a) {
            "undefined" !== typeof ma && ma(A(a));
            return 0
        },
        47227: function() {
            return window.innerWidth
        },
        47259: function() {
            return window.innerHeight
        },
        47292: function() {
            return screen.width
        },
        47319: function() {
            return screen.height
        },
        47386: function() {
            return "undefined" !==
            typeof AudioContext || "undefined" !== typeof webkitAudioContext ? 1 : 0
        },
        47552: function() {
            return "undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? 1 : 0
        },
        47778: function(a) {
            var b = h.SDL2;
            if (a) {
                void 0 !== b.capture.Kf && clearTimeout(b.capture.Kf);
                if (void 0 !== b.capture.stream) {
                    a = b.capture.stream.getAudioTracks();
                    for (var c = 0; c < a.length; c++)
                        b.capture.stream.removeTrack(a[c]);
                    b.capture.stream = void 0
                }
                void 0 !== b.capture.rf &&
                (b.capture.rf.onaudioprocess = function() {}, b.capture.rf.disconnect(), b.capture.rf = void 0);
                void 0 !== b.capture.Pf && (b.capture.Pf.disconnect(), b.capture.Pf = void 0);
                void 0 !== b.capture.Tf && (b.capture.Tf = void 0);
                b.capture = void 0
            } else
                void 0 != b.audio.rf && (b.audio.rf.disconnect(), b.audio.rf = void 0),
                b.audio = void 0;
            void 0 !== b.pf && void 0 === b.audio && void 0 === b.capture && (b.pf.close(), b.pf = void 0)
        },
        48950: function(a) {
            "undefined" === typeof h.SDL2 && (h.SDL2 = {});
            var b = h.SDL2;
            a ? b.capture = {} : b.audio = {};
            b.pf || ("undefined" !==
            typeof AudioContext ? b.pf = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.pf = new webkitAudioContext), b.pf && bb(b.pf));
            return void 0 === b.pf ? -1 : 0
        },
        49503: function() {
            return h.SDL2.pf.sampleRate
        },
        49573: function(a, b, c, d) {
            function e() {}
            function f(m) {
                void 0 !== g.capture.Kf && (clearTimeout(g.capture.Kf), g.capture.Kf = void 0);
                g.capture.Pf = g.pf.createMediaStreamSource(m);
                g.capture.rf = g.pf.createScriptProcessor(b, a, 1);
                g.capture.rf.onaudioprocess = function(n) {
                    void 0 !== g && void 0 !== g.capture && (n.outputBuffer.getChannelData(0).fill(0),
                    g.capture.Vf = n.inputBuffer, n = [d], E.get(c).apply(null, n))
                };
                g.capture.Pf.connect(g.capture.rf);
                g.capture.rf.connect(g.pf.destination);
                g.capture.stream = m
            }
            var g = h.SDL2;
            g.capture.Tf = g.pf.createBuffer(a, b, g.pf.sampleRate);
            g.capture.Tf.getChannelData(0).fill(0);
            g.capture.Kf = setTimeout(function() {
                g.capture.Vf = g.capture.Tf;
                var m = [d];
                E.get(c).apply(null, m)
            }, b / g.pf.sampleRate * 1E3);
            void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
                audio: !0,
                video: !1
            }).then(f).catch(e) :
            void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({
                audio: !0,
                video: !1
            }, f, e)
        },
        51225: function(a, b, c, d) {
            var e = h.SDL2;
            e.audio.rf = e.pf.createScriptProcessor(b, 0, a);
            e.audio.rf.onaudioprocess = function(f) {
                void 0 !== e && void 0 !== e.audio && (e.audio.fg = f.outputBuffer, f = [d], E.get(c).apply(null, f))
            };
            e.audio.rf.connect(e.pf.destination)
        },
        51635: function(a, b) {
            for (var c = h.SDL2, d = c.audio.fg.numberOfChannels, e = 0; e < d; ++e) {
                var f = c.audio.fg.getChannelData(e);
                if (f.length != b)
                    throw "Web Audio output buffer length mismatch! Destination size: " +
                    f.length + " samples vs expected " + b + " samples!";
                for (var g = 0; g < b; ++g)
                    f[g] = w[a + (g * d + e << 2) >> 2]
            }
        },
        52115: function(a, b) {
            for (var c = h.SDL2, d = c.capture.Vf.numberOfChannels, e = 0; e < d; ++e) {
                var f = c.capture.Vf.getChannelData(e);
                if (f.length != b)
                    throw "Web Audio capture buffer length mismatch! Destination size: " + f.length + " samples vs expected " + b + " samples!";
                if (1 == d)
                    for (var g = 0; g < b; ++g)
                        ua(a + 4 * g, f[g]);
                else
                    for (g = 0; g < b; ++g)
                        ua(a + 4 * (g * d + e), f[g])
            }
        }
    };
function eb(a, b, c) {
    a.addEventListener(b, c, {
        once: !0
    })
}
function bb(a) {
    var b;
    b || (b = [document, document.getElementById("canvas")]);
    ["keydown", "mousedown", "touchstart"].forEach(function(c) {
        b.forEach(function(d) {
            d && eb(d, c, function() {
                "suspended" === a.state && a.resume()
            })
        })
    })
}
function fb(a) {
    for (; 0 < a.length;) {
        var b = a.shift();
        if ("function" == typeof b)
            b(h);
        else {
            var c = b.jg;
            "number" === typeof c ? void 0 === b.Lf ? E.get(c)() : E.get(c)(b.Lf) : c(void 0 === b.Lf ? null : b.Lf)
        }
    }
}
function gb(a) {
    this.If = a - 16;
    this.Sg = function(b) {
        u[this.If + 8 >> 2] = b
    };
    this.Pg = function(b) {
        u[this.If + 0 >> 2] = b
    };
    this.Qg = function() {
        u[this.If + 4 >> 2] = 0
    };
    this.Og = function() {
        r[this.If + 12 >> 0] = 0
    };
    this.Rg = function() {
        r[this.If + 13 >> 0] = 0
    };
    this.Dg = function(b, c) {
        this.Sg(b);
        this.Pg(c);
        this.Qg();
        this.Og();
        this.Rg()
    }
}
var hb = 0;
function ib(a, b) {
    for (var c = 0, d = a.length - 1; 0 <= d; d--) {
        var e = a[d];
        "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
    }
    if (b)
        for (; c; c--)
            a.unshift("..");
    return a
}
function jb(a) {
    var b = "/" === a.charAt(0),
        c = "/" === a.substr(-1);
    (a = ib(a.split("/").filter(function(d) {
        return !!d
    }), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a
}
function kb(a) {
    var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
    a = b[0];
    b = b[1];
    if (!a && !b)
        return ".";
    b && (b = b.substr(0, b.length - 1));
    return a + b
}
function lb(a) {
    if ("/" === a)
        return "/";
    a = jb(a);
    a = a.replace(/\/$/, "");
    var b = a.lastIndexOf("/");
    return -1 === b ? a : a.substr(b + 1)
}
function mb() {
    if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
        var a = new Uint8Array(1);
        return function() {
            crypto.getRandomValues(a);
            return a[0]
        }
    }
    if (ha)
        try {
            var b = require("crypto");
            return function() {
                return b.randomBytes(1)[0]
            }
        } catch (c) {}
    return function() {
        l("randomDevice")
    }
}
function nb() {
    for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" !== typeof b)
            throw new TypeError("Arguments to path.resolve must be strings");
        if (!b)
            return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0)
    }
    a = ib(a.split("/").filter(function(d) {
        return !!d
    }), !b).join("/");
    return (b ? "/" : "") + a || "."
}
var ob = [];
function pb(a, b) {
    ob[a] = {
        input: [],
        output: [],
        Hf: b
    };
    qb(a, rb)
}
var rb = {
        open: function(a) {
            var b = ob[a.node.rdev];
            if (!b)
                throw new G(43);
            a.tty = b;
            a.seekable = !1
        },
        close: function(a) {
            a.tty.Hf.flush(a.tty)
        },
        flush: function(a) {
            a.tty.Hf.flush(a.tty)
        },
        read: function(a, b, c, d) {
            if (!a.tty || !a.tty.Hf.kg)
                throw new G(60);
            for (var e = 0, f = 0; f < d; f++) {
                try {
                    var g = a.tty.Hf.kg(a.tty)
                } catch (m) {
                    throw new G(29);
                }
                if (void 0 === g && 0 === e)
                    throw new G(6);
                if (null === g || void 0 === g)
                    break;
                e++;
                b[c + f] = g
            }
            e && (a.node.timestamp = Date.now());
            return e
        },
        write: function(a, b, c, d) {
            if (!a.tty || !a.tty.Hf.Xf)
                throw new G(60);
            try {
                for (var e = 0; e < d; e++)
                    a.tty.Hf.Xf(a.tty, b[c + e])
            } catch (f) {
                throw new G(29);
            }
            d && (a.node.timestamp = Date.now());
            return e
        }
    },
    sb = {
        kg: function(a) {
            if (!a.input.length) {
                var b = null;
                if (ha) {
                    var c = Buffer.Nf ? Buffer.Nf(256) : new Buffer(256),
                        d = 0;
                    try {
                        d = na.readSync(process.stdin.fd, c, 0, 256, null)
                    } catch (e) {
                        if (-1 != e.toString().indexOf("EOF"))
                            d = 0;
                        else
                            throw e;
                    }
                    0 < d ? b = c.slice(0, d).toString("utf-8") : b = null
                } else
                    "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" ==
                    typeof readline && (b = readline(), null !== b && (b += "\n"));
                if (!b)
                    return null;
                c = Array(Ha(b) + 1);
                b = Ga(b, c, 0, c.length);
                c.length = b;
                a.input = c
            }
            return a.input.shift()
        },
        Xf: function(a, b) {
            null === b || 10 === b ? (qa(Fa(a.output)), a.output = []) : 0 != b && a.output.push(b)
        },
        flush: function(a) {
            a.output && 0 < a.output.length && (qa(Fa(a.output)), a.output = [])
        }
    },
    tb = {
        Xf: function(a, b) {
            null === b || 10 === b ? (q(Fa(a.output)), a.output = []) : 0 != b && a.output.push(b)
        },
        flush: function(a) {
            a.output && 0 < a.output.length && (q(Fa(a.output)), a.output = [])
        }
    },
    H = {
        zf: null,
        Cf: function() {
            return H.createNode(null, "/", 16895, 0)
        },
        createNode: function(a, b, c, d) {
            if (24576 === (c & 61440) || 4096 === (c & 61440))
                throw new G(63);
            H.zf || (H.zf = {
                dir: {
                    node: {
                        Ef: H.lf.Ef,
                        Af: H.lf.Af,
                        lookup: H.lf.lookup,
                        Qf: H.lf.Qf,
                        rename: H.lf.rename,
                        unlink: H.lf.unlink,
                        rmdir: H.lf.rmdir,
                        readdir: H.lf.readdir,
                        symlink: H.lf.symlink
                    },
                    stream: {
                        Gf: H.mf.Gf
                    }
                },
                file: {
                    node: {
                        Ef: H.lf.Ef,
                        Af: H.lf.Af
                    },
                    stream: {
                        Gf: H.mf.Gf,
                        read: H.mf.read,
                        write: H.mf.write,
                        bg: H.mf.bg,
                        ng: H.mf.ng,
                        pg: H.mf.pg
                    }
                },
                link: {
                    node: {
                        Ef: H.lf.Ef,
                        Af: H.lf.Af,
                        readlink: H.lf.readlink
                    },
                    stream: {}
                },
                eg: {
                    node: {
                        Ef: H.lf.Ef,
                        Af: H.lf.Af
                    },
                    stream: ub
                }
            });
            c = vb(a, b, c, d);
            16384 === (c.mode & 61440) ? (c.lf = H.zf.dir.node, c.mf = H.zf.dir.stream, c.kf = {}) : 32768 === (c.mode & 61440) ? (c.lf = H.zf.file.node, c.mf = H.zf.file.stream, c.nf = 0, c.kf = null) : 40960 === (c.mode & 61440) ? (c.lf = H.zf.link.node, c.mf = H.zf.link.stream) : 8192 === (c.mode & 61440) && (c.lf = H.zf.eg.node, c.mf = H.zf.eg.stream);
            c.timestamp = Date.now();
            a && (a.kf[b] = c, a.timestamp = c.timestamp);
            return c
        },
        bh: function(a) {
            return a.kf ? a.kf.subarray ? a.kf.subarray(0, a.nf) : new Uint8Array(a.kf) :
            new Uint8Array(0)
        },
        gg: function(a, b) {
            var c = a.kf ? a.kf.length : 0;
            c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.kf, a.kf = new Uint8Array(b), 0 < a.nf && a.kf.set(c.subarray(0, a.nf), 0))
        },
        Mg: function(a, b) {
            if (a.nf != b)
                if (0 == b)
                    a.kf = null,
                    a.nf = 0;
                else {
                    var c = a.kf;
                    a.kf = new Uint8Array(b);
                    c && a.kf.set(c.subarray(0, Math.min(b, a.nf)));
                    a.nf = b
                }
        },
        lf: {
            Ef: function(a) {
                var b = {};
                b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
                b.ino = a.id;
                b.mode = a.mode;
                b.nlink = 1;
                b.uid = 0;
                b.gid = 0;
                b.rdev = a.rdev;
                16384 === (a.mode & 61440) ?
                b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.nf : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                b.atime = new Date(a.timestamp);
                b.mtime = new Date(a.timestamp);
                b.ctime = new Date(a.timestamp);
                b.sg = 4096;
                b.blocks = Math.ceil(b.size / b.sg);
                return b
            },
            Af: function(a, b) {
                void 0 !== b.mode && (a.mode = b.mode);
                void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                void 0 !== b.size && H.Mg(a, b.size)
            },
            lookup: function() {
                throw wb[44];
            },
            Qf: function(a, b, c, d) {
                return H.createNode(a, b, c, d)
            },
            rename: function(a, b, c) {
                if (16384 === (a.mode & 61440)) {
                    try {
                        var d =
                        xb(b, c)
                    } catch (f) {}
                    if (d)
                        for (var e in d.kf)
                            throw new G(55);
                }
                delete a.parent.kf[a.name];
                a.parent.timestamp = Date.now();
                a.name = c;
                b.kf[c] = a;
                b.timestamp = a.parent.timestamp;
                a.parent = b
            },
            unlink: function(a, b) {
                delete a.kf[b];
                a.timestamp = Date.now()
            },
            rmdir: function(a, b) {
                var c = xb(a, b),
                    d;
                for (d in c.kf)
                    throw new G(55);
                delete a.kf[b];
                a.timestamp = Date.now()
            },
            readdir: function(a) {
                var b = [".", ".."],
                    c;
                for (c in a.kf)
                    a.kf.hasOwnProperty(c) && b.push(c);
                return b
            },
            symlink: function(a, b, c) {
                a = H.createNode(a, b, 41471, 0);
                a.link = c;
                return a
            },
            readlink: function(a) {
                if (40960 !== (a.mode & 61440))
                    throw new G(28);
                return a.link
            }
        },
        mf: {
            read: function(a, b, c, d, e) {
                var f = a.node.kf;
                if (e >= a.node.nf)
                    return 0;
                a = Math.min(a.node.nf - e, d);
                if (8 < a && f.subarray)
                    b.set(f.subarray(e, e + a), c);
                else
                    for (d = 0; d < a; d++)
                        b[c + d] = f[e + d];
                return a
            },
            write: function(a, b, c, d, e, f) {
                if (!d)
                    return 0;
                a = a.node;
                a.timestamp = Date.now();
                if (b.subarray && (!a.kf || a.kf.subarray)) {
                    if (f)
                        return a.kf = b.subarray(c, c + d), a.nf = d;
                    if (0 === a.nf && 0 === e)
                        return a.kf = b.slice(c, c + d), a.nf = d;
                    if (e + d <= a.nf)
                        return a.kf.set(b.subarray(c,
                        c + d), e), d
                }
                H.gg(a, e + d);
                if (a.kf.subarray && b.subarray)
                    a.kf.set(b.subarray(c, c + d), e);
                else
                    for (f = 0; f < d; f++)
                        a.kf[e + f] = b[c + f];
                a.nf = Math.max(a.nf, e + d);
                return d
            },
            Gf: function(a, b, c) {
                1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.nf);
                if (0 > b)
                    throw new G(28);
                return b
            },
            bg: function(a, b, c) {
                H.gg(a.node, b + c);
                a.node.nf = Math.max(a.node.nf, b + c)
            },
            ng: function(a, b, c, d, e, f) {
                if (0 !== b)
                    throw new G(28);
                if (32768 !== (a.node.mode & 61440))
                    throw new G(43);
                a = a.node.kf;
                if (f & 2 || a.buffer !== Ja) {
                    if (0 < d || d + c < a.length)
                        a.subarray ?
                        a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c);
                    d = !0;
                    f = 16384 * Math.ceil(c / 16384);
                    for (b = D(f); c < f;)
                        r[b + c++] = 0;
                    c = b;
                    if (!c)
                        throw new G(48);
                    r.set(a, c)
                } else
                    d = !1,
                    c = a.byteOffset;
                return {
                    If: c,
                    Xg: d
                }
            },
            pg: function(a, b, c, d, e) {
                if (32768 !== (a.node.mode & 61440))
                    throw new G(43);
                if (e & 2)
                    return 0;
                H.mf.write(a, b, 0, d, c, !1);
                return 0
            }
        }
    },
    yb = null,
    zb = {},
    Ab = [],
    Bb = 1,
    Cb = null,
    Db = !0,
    Eb = {},
    G = null,
    wb = {};
function Fb(a, b) {
    a = nb("/", a);
    b = b || {};
    if (!a)
        return {
            path: "",
            node: null
        };
    var c = {
            ig: !0,
            Yf: 0
        },
        d;
    for (d in c)
        void 0 === b[d] && (b[d] = c[d]);
    if (8 < b.Yf)
        throw new G(32);
    a = ib(a.split("/").filter(function(g) {
        return !!g
    }), !1);
    var e = yb;
    c = "/";
    for (d = 0; d < a.length; d++) {
        var f = d === a.length - 1;
        if (f && b.parent)
            break;
        e = xb(e, a[d]);
        c = jb(c + "/" + a[d]);
        e.Rf && (!f || f && b.ig) && (e = e.Rf.root);
        if (!f || b.hg)
            for (f = 0; 40960 === (e.mode & 61440);)
                if (e = Gb(c), c = nb(kb(c), e), e = Fb(c, {
                    Yf: b.Yf
                }).node, 40 < f++)
                    throw new G(32);
    }
    return {
        path: c,
        node: e
    }
}
function Hb(a) {
    for (var b;;) {
        if (a === a.parent)
            return a = a.Cf.og, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
        b = b ? a.name + "/" + b : a.name;
        a = a.parent
    }
}
function Ib(a, b) {
    for (var c = 0, d = 0; d < b.length; d++)
        c = (c << 5) - c + b.charCodeAt(d) | 0;
    return (a + c >>> 0) % Cb.length
}
function xb(a, b) {
    var c;
    if (c = (c = Jb(a, "x")) ? c : a.lf.lookup ? 0 : 2)
        throw new G(c, a);
    for (c = Cb[Ib(a.id, b)]; c; c = c.Jg) {
        var d = c.name;
        if (c.parent.id === a.id && d === b)
            return c
    }
    return a.lf.lookup(a, b)
}
function vb(a, b, c, d) {
    a = new Kb(a, b, c, d);
    b = Ib(a.parent.id, a.name);
    a.Jg = Cb[b];
    return Cb[b] = a
}
var Lb = {
    r: 0,
    "r+": 2,
    w: 577,
    "w+": 578,
    a: 1089,
    "a+": 1090
};
function Mb(a) {
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b
}
function Jb(a, b) {
    if (Db)
        return 0;
    if (-1 === b.indexOf("r") || a.mode & 292) {
        if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73))
            return 2
    } else
        return 2;
    return 0
}
function Nb(a, b) {
    try {
        return xb(a, b), 20
    } catch (c) {}
    return Jb(a, "wx")
}
function Ob(a) {
    var b = 4096;
    for (a = a || 0; a <= b; a++)
        if (!Ab[a])
            return a;
    throw new G(33);
}
function Pb(a, b) {
    Qb || (Qb = function() {}, Qb.prototype = {});
    var c = new Qb,
        d;
    for (d in a)
        c[d] = a[d];
    a = c;
    b = Ob(b);
    a.fd = b;
    return Ab[b] = a
}
var ub = {
    open: function(a) {
        a.mf = zb[a.node.rdev].mf;
        a.mf.open && a.mf.open(a)
    },
    Gf: function() {
        throw new G(70);
    }
};
function qb(a, b) {
    zb[a] = {
        mf: b
    }
}
function Rb(a, b) {
    var c = "/" === b,
        d = !b;
    if (c && yb)
        throw new G(10);
    if (!c && !d) {
        var e = Fb(b, {
            ig: !1
        });
        b = e.path;
        e = e.node;
        if (e.Rf)
            throw new G(10);
        if (16384 !== (e.mode & 61440))
            throw new G(54);
    }
    b = {
        type: a,
        kh: {},
        og: b,
        Ig: []
    };
    a = a.Cf(b);
    a.Cf = b;
    b.root = a;
    c ? yb = a : e && (e.Rf = b, e.Cf && e.Cf.Ig.push(b))
}
function Sb(a, b, c) {
    var d = Fb(a, {
        parent: !0
    }).node;
    a = lb(a);
    if (!a || "." === a || ".." === a)
        throw new G(28);
    var e = Nb(d, a);
    if (e)
        throw new G(e);
    if (!d.lf.Qf)
        throw new G(63);
    return d.lf.Qf(d, a, b, c)
}
function Tb(a) {
    return Sb(a, 16895, 0)
}
function Ub(a, b, c) {
    "undefined" === typeof c && (c = b, b = 438);
    Sb(a, b | 8192, c)
}
function Vb(a, b) {
    if (!nb(a))
        throw new G(44);
    var c = Fb(b, {
        parent: !0
    }).node;
    if (!c)
        throw new G(44);
    b = lb(b);
    var d = Nb(c, b);
    if (d)
        throw new G(d);
    if (!c.lf.symlink)
        throw new G(63);
    c.lf.symlink(c, b, a)
}
function Gb(a) {
    a = Fb(a).node;
    if (!a)
        throw new G(44);
    if (!a.lf.readlink)
        throw new G(28);
    return nb(Hb(a.parent), a.lf.readlink(a))
}
function Wb(a, b, c, d) {
    if ("" === a)
        throw new G(44);
    if ("string" === typeof b) {
        var e = Lb[b];
        if ("undefined" === typeof e)
            throw Error("Unknown file open mode: " + b);
        b = e
    }
    c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" === typeof a)
        var f = a;
    else {
        a = jb(a);
        try {
            f = Fb(a, {
                hg: !(b & 131072)
            }).node
        } catch (m) {}
    }
    e = !1;
    if (b & 64)
        if (f) {
            if (b & 128)
                throw new G(20);
        } else
            f = Sb(a, c, 0),
            e = !0;
    if (!f)
        throw new G(44);
    8192 === (f.mode & 61440) && (b &= -513);
    if (b & 65536 && 16384 !== (f.mode & 61440))
        throw new G(54);
    if (!e && (c = f ? 40960 === (f.mode & 61440) ?
    32 : 16384 === (f.mode & 61440) && ("r" !== Mb(b) || b & 512) ? 31 : Jb(f, Mb(b)) : 44))
        throw new G(c);
    if (b & 512) {
        c = f;
        var g;
        "string" === typeof c ? g = Fb(c, {
            hg: !0
        }).node : g = c;
        if (!g.lf.Af)
            throw new G(63);
        if (16384 === (g.mode & 61440))
            throw new G(31);
        if (32768 !== (g.mode & 61440))
            throw new G(28);
        if (c = Jb(g, "w"))
            throw new G(c);
        g.lf.Af(g, {
            size: 0,
            timestamp: Date.now()
        })
    }
    b &= -131713;
    d = Pb({
        node: f,
        path: Hb(f),
        flags: b,
        seekable: !0,
        position: 0,
        mf: f.mf,
        Ug: [],
        error: !1
    }, d);
    d.mf.open && d.mf.open(d);
    !h.logReadFiles || b & 1 || (Xb || (Xb = {}), a in Xb || (Xb[a] = 1, q("FS.trackingDelegate error on read file: " +
    a)));
    try {
        Eb.onOpenFile && (f = 0, 1 !== (b & 2097155) && (f |= 1), 0 !== (b & 2097155) && (f |= 2), Eb.onOpenFile(a, f))
    } catch (m) {
        q("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + m.message)
    }
    return d
}
function Yb(a, b, c) {
    if (null === a.fd)
        throw new G(8);
    if (!a.seekable || !a.mf.Gf)
        throw new G(70);
    if (0 != c && 1 != c && 2 != c)
        throw new G(28);
    a.position = a.mf.Gf(a, b, c);
    a.Ug = []
}
function Zb() {
    G || (G = function(a, b) {
        this.node = b;
        this.Ng = function(c) {
            this.Bf = c
        };
        this.Ng(a);
        this.message = "FS error"
    }, G.prototype = Error(), G.prototype.constructor = G, [44].forEach(function(a) {
        wb[a] = new G(a);
        wb[a].stack = "<generic error, no stack>"
    }))
}
var $b;
function ac(a, b) {
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c
}
function bc(a, b, c) {
    a = jb("/dev/" + a);
    var d = ac(!!b, !!c);
    cc || (cc = 64);
    var e = cc++ << 8 | 0;
    qb(e, {
        open: function(f) {
            f.seekable = !1
        },
        close: function() {
            c && c.buffer && c.buffer.length && c(10)
        },
        read: function(f, g, m, n) {
            for (var p = 0, t = 0; t < n; t++) {
                try {
                    var z = b()
                } catch (F) {
                    throw new G(29);
                }
                if (void 0 === z && 0 === p)
                    throw new G(6);
                if (null === z || void 0 === z)
                    break;
                p++;
                g[m + t] = z
            }
            p && (f.node.timestamp = Date.now());
            return p
        },
        write: function(f, g, m, n) {
            for (var p = 0; p < n; p++)
                try {
                    c(g[m + p])
                } catch (t) {
                    throw new G(29);
                }
            n && (f.node.timestamp = Date.now());
            return p
        }
    });
    Ub(a, d, e)
}
var cc,
    dc = {},
    Qb,
    Xb,
    ec = void 0;
function fc() {
    ec += 4;
    return u[ec - 4 >> 2]
}
function hc(a) {
    a = Ab[a];
    if (!a)
        throw new G(8);
    return a
}
var ic;
ha ? ic = function() {
    var a = process.hrtime();
    return 1E3 * a[0] + a[1] / 1E6
} : "undefined" !== typeof dateNow ? ic = dateNow : ic = function() {
    return performance.now()
};
function jc(a, b) {
    kc = a;
    lc = b;
    if (!mc)
        return 1;
    if (0 == a)
        nc = function() {
            var d = Math.max(0, oc + b - ic()) | 0;
            setTimeout(pc, d)
        };
    else if (1 == a)
        nc = function() {
            qc(pc)
        };
    else if (2 == a) {
        if ("undefined" === typeof setImmediate) {
            var c = [];
            addEventListener("message", function(d) {
                if ("setimmediate" === d.data || "setimmediate" === d.data.target)
                    d.stopPropagation(),
                    c.shift()()
            }, !0);
            setImmediate = function(d) {
                c.push(d);
                fa ? (void 0 === h.setImmediates && (h.setImmediates = []), h.setImmediates.push(d), postMessage({
                    target: "setimmediate"
                })) : postMessage("setimmediate",
                "*")
            }
        }
        nc = function() {
            setImmediate(pc)
        }
    }
    return 0
}
function rc(a, b, c, d, e) {
    noExitRuntime = !0;
    assert(!mc, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    mc = a;
    sc = d;
    var f = tc;
    pc = function() {
        if (!ya)
            if (0 < uc.length) {
                var g = Date.now(),
                    m = uc.shift();
                m.jg(m.Lf);
                if (vc) {
                    var n = vc,
                        p = 0 == n % 1 ? n - 1 : Math.floor(n);
                    vc = m.Zg ? p : (8 * n + (p + .5)) / 9
                }
                console.log('main loop blocker "' + m.name + '" took ' + (Date.now() - g) + " ms");
                h.setStatus && (g = h.statusMessage ||
                "Please wait...", m = vc, n = wc.ah, m ? m < n ? h.setStatus(g + " (" + (n - m) + "/" + n + ")") : h.setStatus(g) : h.setStatus(""));
                f < tc || setTimeout(pc, 0)
            } else if (!(f < tc))
                if (xc = xc + 1 | 0, 1 == kc && 1 < lc && 0 != xc % lc)
                    nc();
                else {
                    0 == kc && (oc = ic());
                    a:
                    if (!(ya || h.preMainLoop && !1 === h.preMainLoop())) {
                        try {
                            a()
                        } catch (t) {
                            if (t instanceof pa || "unwind" == t)
                                break a;
                            t && "object" === typeof t && t.stack && q("exception thrown: " + [t, t.stack]);
                            throw t;
                        }
                        h.postMainLoop && h.postMainLoop()
                    }
                    f < tc || ("object" === typeof SDL && SDL.audio && SDL.audio.Lg && SDL.audio.Lg(), nc())
                }
    };
    e ||
    (b && 0 < b ? jc(0, 1E3 / b) : jc(1, 1), nc());
    if (c)
        throw "unwind";
}
var nc = null,
    tc = 0,
    mc = null,
    sc = 0,
    kc = 0,
    lc = 0,
    xc = 0,
    uc = [],
    wc = {},
    oc,
    pc,
    vc,
    yc = !1,
    zc = !1,
    Ac = [];
function Bc() {
    function a() {
        zc = document.pointerLockElement === h.canvas || document.mozPointerLockElement === h.canvas || document.webkitPointerLockElement === h.canvas || document.msPointerLockElement === h.canvas
    }
    h.preloadPlugins || (h.preloadPlugins = []);
    if (!Cc) {
        Cc = !0;
        try {
            Dc = !0
        } catch (c) {
            Dc = !1,
            console.log("warning: no blob constructor, cannot create blobs with mimetypes")
        }
        Ec = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Dc ? null : console.log("warning: no BlobBuilder");
        Fc = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
        h.qg || "undefined" !== typeof Fc || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), h.qg = !0);
        h.preloadPlugins.push({
            canHandle: function(c) {
                return !h.qg && /\.(jpg|jpeg|png|bmp)$/i.test(c)
            },
            handle: function(c, d, e, f) {
                var g = null;
                if (Dc)
                    try {
                        g = new Blob([c], {
                            type: Gc(d)
                        }),
                        g.size !== c.length && (g = new Blob([(new Uint8Array(c)).buffer], {
                            type: Gc(d)
                        }))
                    } catch (p) {
                        ra("Blob constructor present but fails: " +
                        p + "; falling back to blob builder")
                    }
                g || (g = new Ec, g.append((new Uint8Array(c)).buffer), g = g.getBlob());
                var m = Fc.createObjectURL(g),
                    n = new Image;
                n.onload = function() {
                    assert(n.complete, "Image " + d + " could not be decoded");
                    var p = document.createElement("canvas");
                    p.width = n.width;
                    p.height = n.height;
                    p.getContext("2d").drawImage(n, 0, 0);
                    h.preloadedImages[d] = p;
                    Fc.revokeObjectURL(m);
                    e && e(c)
                };
                n.onerror = function() {
                    console.log("Image " + m + " could not be decoded");
                    f && f()
                };
                n.src = m
            }
        });
        h.preloadPlugins.push({
            canHandle: function(c) {
                return !h.jh &&
                    c.substr(-4) in {
                        ".ogg": 1,
                        ".wav": 1,
                        ".mp3": 1
                    }
            },
            handle: function(c, d, e, f) {
                function g(z) {
                    n || (n = !0, h.preloadedAudios[d] = z, e && e(c))
                }
                function m() {
                    n || (n = !0, h.preloadedAudios[d] = new Audio, f && f())
                }
                var n = !1;
                if (Dc) {
                    try {
                        var p = new Blob([c], {
                            type: Gc(d)
                        })
                    } catch (z) {
                        return m()
                    }
                    p = Fc.createObjectURL(p);
                    var t = new Audio;
                    t.addEventListener("canplaythrough", function() {
                        g(t)
                    }, !1);
                    t.onerror = function() {
                        if (!n) {
                            console.log("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
                            for (var z = "", F = 0, B = 0,
                                Q = 0; Q < c.length; Q++)
                                for (F = F << 8 | c[Q], B += 8; 6 <= B;) {
                                    var R = F >> B - 6 & 63;
                                    B -= 6;
                                    z += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[R]
                                }
                            2 == B ? (z += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(F & 3) << 4], z += "==") : 4 == B && (z += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(F & 15) << 2], z += "=");
                            t.src = "data:audio/x-" + d.substr(-3) + ";base64," + z;
                            g(t)
                        }
                    };
                    t.src = p;
                    Hc(function() {
                        g(t)
                    })
                } else
                    return m()
            }
        });
        var b = h.canvas;
        b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock ||
        b.webkitRequestPointerLock || b.msRequestPointerLock || function() {}, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), h.elementPointerLock &&
        b.addEventListener("click", function(c) {
            !zc && h.canvas.requestPointerLock && (h.canvas.requestPointerLock(), c.preventDefault())
        }, !1))
    }
}
function Ic(a, b, c, d) {
    if (b && h.wf && a == h.canvas)
        return h.wf;
    var e;
    if (b) {
        var f = {
            antialias: !1,
            alpha: !1,
            mg: 1
        };
        if (d)
            for (var g in d)
                f[g] = d[g];
        if ("undefined" !== typeof Jc && (e = Kc(a, f)))
            var m = I[e].Df
    } else
        m = a.getContext("2d");
    if (!m)
        return null;
    c && (b || assert("undefined" === typeof J, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), h.wf = m, b && Lc(e), h.Vg = b, Ac.forEach(function(n) {
        n()
    }), Bc());
    return m
}
var Mc = !1,
    Nc = void 0,
    Oc = void 0;
function Pc(a, b) {
    function c() {
        yc = !1;
        var f = d.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === f ? (d.exitFullscreen = Qc, Nc && d.requestPointerLock(), yc = !0, Oc ? ("undefined" != typeof SDL && (u[SDL.screen >> 2] = La[SDL.screen >> 2] | 8388608), Rc(h.canvas), Sc()) : Rc(d)) : (f.parentNode.insertBefore(d, f), f.parentNode.removeChild(f), Oc ? ("undefined" != typeof SDL && (u[SDL.screen >> 2] = La[SDL.screen >> 2] &
        -8388609), Rc(h.canvas), Sc()) : Rc(d));
        if (h.onFullScreen)
            h.onFullScreen(yc);
        if (h.onFullscreen)
            h.onFullscreen(yc)
    }
    Nc = a;
    Oc = b;
    "undefined" === typeof Nc && (Nc = !0);
    "undefined" === typeof Oc && (Oc = !1);
    var d = h.canvas;
    Mc || (Mc = !0, document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1));
    var e = document.createElement("div");
    d.parentNode.insertBefore(e, d);
    e.appendChild(d);
    e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? function() {
        e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    } : null) || (e.webkitRequestFullScreen ? function() {
        e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
    } : null);
    e.requestFullscreen()
}
function Qc() {
    if (!yc)
        return !1;
    (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []);
    return !0
}
var Tc = 0;
function qc(a) {
    if ("function" === typeof requestAnimationFrame)
        requestAnimationFrame(a);
    else {
        var b = Date.now();
        if (0 === Tc)
            Tc = b + 1E3 / 60;
        else
            for (; b + 2 >= Tc;)
                Tc += 1E3 / 60;
        setTimeout(a, Math.max(Tc - b, 0))
    }
}
function Hc(a) {
    noExitRuntime = !0;
    setTimeout(function() {
        ya || a()
    }, 1E4)
}
function Gc(a) {
    return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
    }[a.substr(a.lastIndexOf(".") + 1)]
}
var Uc = [];
function Sc() {
    var a = h.canvas;
    Uc.forEach(function(b) {
        b(a.width, a.height)
    })
}
function Rc(a, b, c) {
    b && c ? (a.Wg = b, a.Bg = c) : (b = a.Wg, c = a.Bg);
    var d = b,
        e = c;
    h.forcedAspectRatio && 0 < h.forcedAspectRatio && (d / e < h.forcedAspectRatio ? d = Math.round(e * h.forcedAspectRatio) : e = Math.round(d / h.forcedAspectRatio));
    if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
        var f = Math.min(screen.width / d, screen.height / e);
        d = Math.round(d * f);
        e = Math.round(e *
        f)
    }
    Oc ? (a.width != d && (a.width = d), a.height != e && (a.height = e), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))))
}
var Cc,
    Dc,
    Ec,
    Fc,
    K = 12288,
    Vc = !1,
    Wc = 0,
    Xc = 0,
    Yc = 0,
    L = {
        alpha: !1,
        depth: !1,
        stencil: !1,
        antialias: !1
    },
    Zc = {},
    $c;
function ad(a) {
    var b = a.getExtension("ANGLE_instanced_arrays");
    b && (a.vertexAttribDivisor = function(c, d) {
        b.vertexAttribDivisorANGLE(c, d)
    }, a.drawArraysInstanced = function(c, d, e, f) {
        b.drawArraysInstancedANGLE(c, d, e, f)
    }, a.drawElementsInstanced = function(c, d, e, f, g) {
        b.drawElementsInstancedANGLE(c, d, e, f, g)
    })
}
function bd(a) {
    var b = a.getExtension("OES_vertex_array_object");
    b && (a.createVertexArray = function() {
        return b.createVertexArrayOES()
    }, a.deleteVertexArray = function(c) {
        b.deleteVertexArrayOES(c)
    }, a.bindVertexArray = function(c) {
        b.bindVertexArrayOES(c)
    }, a.isVertexArray = function(c) {
        return b.isVertexArrayOES(c)
    })
}
function cd(a) {
    var b = a.getExtension("WEBGL_draw_buffers");
    b && (a.drawBuffers = function(c, d) {
        b.drawBuffersWEBGL(c, d)
    })
}
var dd = 1,
    ed = [],
    M = [],
    fd = [],
    gd = [],
    N = [],
    O = [],
    P = [],
    hd = [],
    I = [],
    S = [],
    id = {},
    jd = {},
    kd = 4;
function T(a) {
    ld || (ld = a)
}
function md(a) {
    for (var b = dd++, c = a.length; c < b; c++)
        a[c] = null;
    return b
}
function nd(a, b, c) {
    for (var d = "", e = 0; e < a; ++e) {
        var f = c ? u[c + 4 * e >> 2] : -1;
        d += A(u[b + 4 * e >> 2], 0 > f ? void 0 : f)
    }
    return d
}
function Kc(a, b) {
    if (a = a.getContext("webgl", b)) {
        var c = md(I),
            d = {
                dh: c,
                attributes: b,
                version: b.mg,
                Df: a
            };
        a.canvas && (a.canvas.Jf = d);
        I[c] = d;
        ("undefined" === typeof b.xg || b.xg) && od(d);
        b = c
    } else
        b = 0;
    return b
}
function Lc(a) {
    pd = I[a];
    h.wf = J = pd && pd.Df
}
function od(a) {
    a || (a = pd);
    if (!a.Eg) {
        a.Eg = !0;
        var b = a.Df;
        ad(b);
        bd(b);
        cd(b);
        b.uf = b.getExtension("EXT_disjoint_timer_query");
        b.hh = b.getExtension("WEBGL_multi_draw");
        (b.getSupportedExtensions() || []).forEach(function(c) {
            0 > c.indexOf("lose_context") && 0 > c.indexOf("debug") && b.getExtension(c)
        })
    }
}
function qd(a) {
    var b = M[a];
    a = id[a] = {
        ag: {},
        Of: 0,
        xf: -1,
        yf: -1
    };
    for (var c = a.ag, d = J.getProgramParameter(b, 35718), e = 0; e < d; ++e) {
        var f = J.getActiveUniform(b, e),
            g = f.name;
        a.Of = Math.max(a.Of, g.length + 1);
        "]" == g.slice(-1) && (g = g.slice(0, g.lastIndexOf("[")));
        var m = J.getUniformLocation(b, g);
        if (m) {
            var n = md(O);
            c[g] = [f.size, n];
            O[n] = m;
            for (var p = 1; p < f.size; ++p)
                m = J.getUniformLocation(b, g + "[" + p + "]"),
                n = md(O),
                O[n] = m
        }
    }
}
var Jc = {},
    ld,
    pd,
    rd = 0;
function sd() {
    for (var a = U.length - 1; 0 <= a; --a)
        td(a);
    U = [];
    V = []
}
var V = [];
function ud(a, b, c) {
    function d(g, m) {
        if (g.length != m.length)
            return !1;
        for (var n in g)
            if (g[n] != m[n])
                return !1;
        return !0
    }
    for (var e in V) {
        var f = V[e];
        if (f.$f == a && d(f.cg, c))
            return
    }
    V.push({
        $f: a,
        rg: b,
        cg: c
    });
    V.sort(function(g, m) {
        return g.rg < m.rg
    })
}
function vd(a) {
    for (var b = 0; b < V.length; ++b)
        V[b].$f == a && (V.splice(b, 1), --b)
}
function wd() {
    if (rd && xd.Ff)
        for (var a = 0; a < V.length; ++a) {
            var b = V[a];
            V.splice(a, 1);
            --a;
            b.$f.apply(null, b.cg)
        }
}
var U = [];
function td(a) {
    var b = U[a];
    b.target.removeEventListener(b.qf, b.yg, b.sf);
    U.splice(a, 1)
}
function W(a) {
    function b(d) {
        ++rd;
        xd = a;
        wd();
        a.vf(d);
        wd();
        --rd
    }
    if (a.tf)
        a.yg = b,
        a.target.addEventListener(a.qf, b, a.sf),
        U.push(a),
        yd || (Pa.push(sd), yd = !0);
    else
        for (var c = 0; c < U.length; ++c)
            U[c].target == a.target && U[c].qf == a.qf && td(c--)
}
function zd(a) {
    return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : ""
}
function Ad() {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled
}
var Bd = {},
    yd,
    xd,
    Cd,
    Dd,
    Ed,
    Fd,
    Gd,
    Hd,
    Id,
    Jd,
    Kd,
    Ld,
    Md,
    Nd,
    Od = {},
    Pd = [0, "undefined" !== typeof document ? document : 0, "undefined" !== typeof window ? window : 0];
function X(a) {
    a = 2 < a ? A(a) : a;
    return Pd[a] || ("undefined" !== typeof document ? document.querySelector(a) : void 0)
}
function Qd(a) {
    var b = Ca(),
        c = Ba(8),
        d = c + 4,
        e = Ba(a.id.length + 1);
    y(a.id, e, a.id.length + 1);
    if (a = X(e))
        u[c >> 2] = a.width,
        u[d >> 2] = a.height;
    c = [u[c >> 2], u[d >> 2]];
    Da(b);
    return c
}
function Rd(a, b, c) {
    a = X(a);
    if (!a)
        return -4;
    a.width = b;
    a.height = c;
    return 0
}
function Sd(a, b, c) {
    if (a.Yg) {
        var d = Ca(),
            e = Ba(a.id.length + 1);
        y(a.id, e, a.id.length + 1);
        Rd(e, b, c);
        Da(d)
    } else
        a.width = b,
        a.height = c
}
function Td(a) {
    function b() {
        document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (document.removeEventListener("fullscreenchange", b), document.removeEventListener("webkitfullscreenchange", b), Sd(a, d, e), a.style.width = f, a.style.height = g, a.style.backgroundColor = m, n || (document.body.style.backgroundColor = "white"), document.body.style.backgroundColor = n, a.style.paddingLeft = p, a.style.paddingRight = t, a.style.paddingTop = z, a.style.paddingBottom = F, a.style.marginLeft = B, a.style.marginRight =
        Q, a.style.marginTop = R, a.style.marginBottom = db, document.body.style.margin = ze, document.documentElement.style.overflow = Ae, document.body.scroll = Be, a.style.lg = Ce, a.Jf && a.Jf.Df.viewport(0, 0, d, e), Od.Mf && E.get(Od.Mf)(37, 0, Od.dg))
    }
    var c = Qd(a),
        d = c[0],
        e = c[1],
        f = a.style.width,
        g = a.style.height,
        m = a.style.backgroundColor,
        n = document.body.style.backgroundColor,
        p = a.style.paddingLeft,
        t = a.style.paddingRight,
        z = a.style.paddingTop,
        F = a.style.paddingBottom,
        B = a.style.marginLeft,
        Q = a.style.marginRight,
        R = a.style.marginTop,
        db =
        a.style.marginBottom,
        ze = document.body.style.margin,
        Ae = document.documentElement.style.overflow,
        Be = document.body.scroll,
        Ce = a.style.lg;
    document.addEventListener("fullscreenchange", b);
    document.addEventListener("webkitfullscreenchange", b)
}
function Ud(a, b, c) {
    a.style.paddingLeft = a.style.paddingRight = c + "px";
    a.style.paddingTop = a.style.paddingBottom = b + "px"
}
function Vd(a) {
    return 0 > Pd.indexOf(a) ? a.getBoundingClientRect() : {
        left: 0,
        top: 0
    }
}
function Wd(a, b) {
    if (0 != b.Zf || 0 != b.Uf) {
        Td(a);
        var c = b.Tg ? innerWidth : screen.width,
            d = b.Tg ? innerHeight : screen.height,
            e = Vd(a),
            f = e.width;
        e = e.height;
        var g = Qd(a),
            m = g[0];
        g = g[1];
        3 == b.Zf ? (Ud(a, (d - e) / 2, (c - f) / 2), c = f, d = e) : 2 == b.Zf && (c * g < m * d ? (f = g * c / m, Ud(a, (d - f) / 2, 0), d = f) : (f = m * d / g, Ud(a, 0, (c - f) / 2), c = f));
        a.style.backgroundColor || (a.style.backgroundColor = "black");
        document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
        a.style.width = c + "px";
        a.style.height = d + "px";
        1 == b.zg && (a.style.lg = "pixelated");
        f = 2 == b.Uf ? devicePixelRatio : 1;
        0 != b.Uf && (c = c * f | 0, d = d * f | 0, Sd(a, c, d), a.Jf && a.Jf.Df.viewport(0, 0, c, d))
    }
    if (a.requestFullscreen)
        a.requestFullscreen();
    else if (a.webkitRequestFullscreen)
        a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    else
        return Ad() ? -3 : -1;
    Od = b;
    b.Mf && E.get(b.Mf)(37, 0, b.dg);
    return 0
}
function Xd(a) {
    if (a.requestPointerLock)
        a.requestPointerLock();
    else if (a.Sf)
        a.Sf();
    else
        return document.body.requestPointerLock || document.body.Sf ? -3 : -1;
    return 0
}
function Yd(a, b) {
    x[a >> 3] = b.timestamp;
    for (var c = 0; c < b.axes.length; ++c)
        x[a + 8 * c + 16 >> 3] = b.axes[c];
    for (c = 0; c < b.buttons.length; ++c)
        x[a + 8 * c + 528 >> 3] = "object" === typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
    for (c = 0; c < b.buttons.length; ++c)
        u[a + 4 * c + 1040 >> 2] = "object" === typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
    u[a + 1296 >> 2] = b.connected;
    u[a + 1300 >> 2] = b.index;
    u[a + 8 >> 2] = b.axes.length;
    u[a + 12 >> 2] = b.buttons.length;
    y(b.id, a + 1304, 64);
    y(b.mapping, a + 1368, 64)
}
var Zd = [];
function $d(a, b, c, d) {
    for (var e = 0; e < a; e++) {
        var f = J[c](),
            g = f && md(d);
        f ? (f.name = g, d[g] = f) : T(1282);
        u[b + 4 * e >> 2] = g
    }
}
function ae(a, b, c, d, e, f, g, m) {
    b = M[b];
    if (a = J[a](b, c))
        d = m && y(a.name, m, d),
        e && (u[e >> 2] = d),
        f && (u[f >> 2] = a.size),
        g && (u[g >> 2] = a.type)
}
function be(a, b) {
    La[a >> 2] = b;
    La[a + 4 >> 2] = (b - La[a >> 2]) / 4294967296
}
function ce(a, b, c) {
    if (b) {
        var d = void 0;
        switch (a) {
        case 36346:
            d = 1;
            break;
        case 36344:
            0 != c && 1 != c && T(1280);
            return;
        case 36345:
            d = 0;
            break;
        case 34466:
            var e = J.getParameter(34467);
            d = e ? e.length : 0
        }
        if (void 0 === d)
            switch (e = J.getParameter(a), typeof e) {
            case "number":
                d = e;
                break;
            case "boolean":
                d = e ? 1 : 0;
                break;
            case "string":
                T(1280);
                return;
            case "object":
                if (null === e)
                    switch (a) {
                    case 34964:
                    case 35725:
                    case 34965:
                    case 36006:
                    case 36007:
                    case 32873:
                    case 34229:
                    case 34068:
                        d = 0;
                        break;
                    default:
                        T(1280);
                        return
                    }
                else {
                    if (e instanceof Float32Array ||
                    e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
                        for (a = 0; a < e.length; ++a)
                            switch (c) {
                            case 0:
                                u[b + 4 * a >> 2] = e[a];
                                break;
                            case 2:
                                w[b + 4 * a >> 2] = e[a];
                                break;
                            case 4:
                                r[b + a >> 0] = e[a] ? 1 : 0
                            }
                        return
                    }
                    try {
                        d = e.name | 0
                    } catch (f) {
                        T(1280);
                        q("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + f + ")");
                        return
                    }
                }
                break;
            default:
                T(1280);
                q("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + e + " of type " + typeof e + "!");
                return
            }
        switch (c) {
        case 1:
            be(b,
            d);
            break;
        case 0:
            u[b >> 2] = d;
            break;
        case 2:
            w[b >> 2] = d;
            break;
        case 4:
            r[b >> 0] = d ? 1 : 0
        }
    } else
        T(1281)
}
function de(a) {
    var b = Ha(a) + 1,
        c = D(b);
    y(a, c, b);
    return c
}
function ee(a, b, c, d) {
    if (c)
        if (a = J.getUniform(M[a], O[b]), "number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                u[c >> 2] = a;
                break;
            case 2:
                w[c >> 2] = a
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    u[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    w[c + 4 * b >> 2] = a[b]
                }
    else
        T(1281)
}
function fe(a, b, c, d) {
    if (c)
        if (a = J.getVertexAttrib(a, b), 34975 == b)
            u[c >> 2] = a && a.name;
        else if ("number" == typeof a || "boolean" == typeof a)
            switch (d) {
            case 0:
                u[c >> 2] = a;
                break;
            case 2:
                w[c >> 2] = a;
                break;
            case 5:
                u[c >> 2] = Math.fround(a)
            }
        else
            for (b = 0; b < a.length; b++)
                switch (d) {
                case 0:
                    u[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    w[c + 4 * b >> 2] = a[b];
                    break;
                case 5:
                    u[c + 4 * b >> 2] = Math.fround(a[b])
                }
    else
        T(1281)
}
function ge(a, b, c, d, e) {
    a -= 5120;
    a = 1 == a ? C : 4 == a ? u : 6 == a ? w : 5 == a || 28922 == a ? La : Ka;
    var f = 31 - Math.clz32(a.BYTES_PER_ELEMENT),
        g = kd;
    return a.subarray(e >> f, e + d * (c * ({
        5: 3,
        6: 4,
        8: 2,
        29502: 3,
        29504: 4
    }[b - 6402] || 1) * (1 << f) + g - 1 & -g) >> f)
}
var Y = [],
    he = [];
function ie(a, b) {
    if (!Ad())
        return -1;
    a = X(a);
    return a ? a.requestFullscreen || a.webkitRequestFullscreen ? rd && xd.Ff ? Wd(a, b) : b.wg ? (ud(Wd, 1, [a, b]), 1) : -2 : -3 : -4
}
function je(a, b) {
    var c = {
        target: X(2),
        qf: "beforeunload",
        tf: b,
        vf: function(d) {
            d = d || event;
            var e = E.get(b)(28, 0, a);
            e && (e = A(e));
            if (e)
                return d.preventDefault(), d.returnValue = e
        },
        sf: !0
    };
    W(c)
}
function ke(a, b, c, d, e, f) {
    Dd || (Dd = D(256));
    a = {
        target: X(a),
        qf: f,
        tf: d,
        vf: function(g) {
            g = g || event;
            var m = g.target.id ? g.target.id : "",
                n = Dd;
            y(zd(g.target), n + 0, 128);
            y(m, n + 128, 128);
            E.get(d)(e, n, b) && g.preventDefault()
        },
        sf: c
    };
    W(a)
}
function le(a, b, c) {
    a >>= 2;
    u[a] = b.screenX;
    u[a + 1] = b.screenY;
    u[a + 2] = b.clientX;
    u[a + 3] = b.clientY;
    u[a + 4] = b.ctrlKey;
    u[a + 5] = b.shiftKey;
    u[a + 6] = b.altKey;
    u[a + 7] = b.metaKey;
    va[2 * a + 16] = b.button;
    va[2 * a + 17] = b.buttons;
    u[a + 9] = b.movementX;
    u[a + 10] = b.movementY;
    c = Vd(c);
    u[a + 11] = b.clientX - c.left;
    u[a + 12] = b.clientY - c.top
}
function me(a, b, c, d, e, f) {
    Ed || (Ed = D(64));
    a = X(a);
    W({
        target: a,
        Ff: "mousemove" != f && "mouseenter" != f && "mouseleave" != f,
        qf: f,
        tf: d,
        vf: function(g) {
            g = g || event;
            le(Ed, g, a);
            E.get(d)(e, Ed, b) && g.preventDefault()
        },
        sf: c
    })
}
function ne(a, b, c, d, e) {
    Gd || (Gd = D(280));
    W({
        target: a,
        qf: e,
        tf: d,
        vf: function(f) {
            f = f || event;
            var g = Gd,
                m = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement,
                n = !!m;
            u[g >> 2] = n;
            u[g + 4 >> 2] = Ad();
            var p = n ? m : Fd,
                t = p && p.id ? p.id : "";
            y(zd(p), g + 8, 128);
            y(t, g + 136, 128);
            u[g + 264 >> 2] = p ? p.clientWidth : 0;
            u[g + 268 >> 2] = p ? p.clientHeight : 0;
            u[g + 272 >> 2] = screen.width;
            u[g + 276 >> 2] = screen.height;
            n && (Fd = m);
            E.get(d)(19, g, b) && f.preventDefault()
        },
        sf: c
    })
}
function oe(a, b, c, d, e) {
    Hd || (Hd = D(1432));
    b = {
        target: X(2),
        Ff: !0,
        qf: e,
        tf: c,
        vf: function(f) {
            f = f || event;
            var g = Hd;
            Yd(g, f.gamepad);
            E.get(c)(d, g, a) && f.preventDefault()
        },
        sf: b
    };
    W(b)
}
function pe(a, b, c, d, e, f) {
    Id || (Id = D(164));
    a = {
        target: X(a),
        Ff: !0,
        qf: f,
        tf: d,
        vf: function(g) {
            var m = Id,
                n = m >> 2;
            u[n] = g.location;
            u[n + 1] = g.ctrlKey;
            u[n + 2] = g.shiftKey;
            u[n + 3] = g.altKey;
            u[n + 4] = g.metaKey;
            u[n + 5] = g.repeat;
            u[n + 6] = g.charCode;
            u[n + 7] = g.keyCode;
            u[n + 8] = g.which;
            y(g.key || "", m + 36, 32);
            y(g.code || "", m + 68, 32);
            y(g.char || "", m + 100, 32);
            y(g.locale || "", m + 132, 32);
            E.get(d)(e, m, b) && g.preventDefault()
        },
        sf: c
    };
    W(a)
}
function qe(a, b, c, d, e) {
    Jd || (Jd = D(260));
    W({
        target: a,
        qf: e,
        tf: d,
        vf: function(f) {
            f = f || event;
            var g = Jd,
                m = document.pointerLockElement || document.Hg || document.ih || document.fh;
            u[g >> 2] = !!m;
            var n = m && m.id ? m.id : "";
            y(zd(m), g + 4, 128);
            y(n, g + 132, 128);
            E.get(d)(20, g, b) && f.preventDefault()
        },
        sf: c
    })
}
function re(a, b, c, d) {
    Kd || (Kd = D(36));
    a = X(a);
    W({
        target: a,
        qf: "resize",
        tf: d,
        vf: function(e) {
            e = e || event;
            if (e.target == a) {
                var f = document.body;
                if (f) {
                    var g = Kd;
                    u[g >> 2] = e.detail;
                    u[g + 4 >> 2] = f.clientWidth;
                    u[g + 8 >> 2] = f.clientHeight;
                    u[g + 12 >> 2] = innerWidth;
                    u[g + 16 >> 2] = innerHeight;
                    u[g + 20 >> 2] = outerWidth;
                    u[g + 24 >> 2] = outerHeight;
                    u[g + 28 >> 2] = pageXOffset;
                    u[g + 32 >> 2] = pageYOffset;
                    E.get(d)(10, g, b) && e.preventDefault()
                }
            }
        },
        sf: c
    })
}
function se(a, b, c, d, e, f) {
    Ld || (Ld = D(1684));
    a = X(a);
    W({
        target: a,
        Ff: "touchstart" == f || "touchend" == f,
        qf: f,
        tf: d,
        vf: function(g) {
            for (var m = {}, n = g.touches, p = 0; p < n.length; ++p) {
                var t = n[p];
                m[t.identifier] = t
            }
            n = g.changedTouches;
            for (p = 0; p < n.length; ++p)
                t = n[p],
                t.Gg = 1,
                m[t.identifier] = t;
            n = g.targetTouches;
            for (p = 0; p < n.length; ++p)
                m[n[p].identifier].Kg = 1;
            n = Ld;
            t = n >> 2;
            u[t + 1] = g.ctrlKey;
            u[t + 2] = g.shiftKey;
            u[t + 3] = g.altKey;
            u[t + 4] = g.metaKey;
            t += 5;
            var z = Vd(a),
                F = 0;
            for (p in m) {
                var B = m[p];
                u[t] = B.identifier;
                u[t + 1] = B.screenX;
                u[t + 2] = B.screenY;
                u[t + 3] = B.clientX;
                u[t + 4] = B.clientY;
                u[t + 5] = B.pageX;
                u[t + 6] = B.pageY;
                u[t + 7] = B.Gg;
                u[t + 8] = B.Kg;
                u[t + 9] = B.clientX - z.left;
                u[t + 10] = B.clientY - z.top;
                t += 13;
                if (31 < ++F)
                    break
            }
            u[n >> 2] = F;
            E.get(d)(e, n, b) && g.preventDefault()
        },
        sf: c
    })
}
function te(a, b, c) {
    var d = Pd[1];
    Md || (Md = D(8));
    W({
        target: d,
        qf: "visibilitychange",
        tf: c,
        vf: function(e) {
            e = e || event;
            var f = Md,
                g = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
            u[f >> 2] = document.hidden;
            u[f + 4 >> 2] = g;
            E.get(c)(21, f, a) && e.preventDefault()
        },
        sf: b
    })
}
function ue(a, b, c, d) {
    Nd || (Nd = D(96));
    W({
        target: a,
        Ff: !0,
        qf: "wheel",
        tf: d,
        vf: function(e) {
            e = e || event;
            var f = Nd;
            le(f, e, a);
            x[f + 64 >> 3] = e.deltaX;
            x[f + 72 >> 3] = e.deltaY;
            x[f + 80 >> 3] = e.deltaZ;
            u[f + 88 >> 2] = e.deltaMode;
            E.get(d)(9, f, b) && e.preventDefault()
        },
        sf: c
    })
}
var ve = {};
function we() {
    if (!xe) {
        var a = {
                USER: "web_user",
                LOGNAME: "web_user",
                PATH: "/",
                PWD: "/",
                HOME: "/home/web_user",
                LANG: ("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                _: ca || "./this.program"
            },
            b;
        for (b in ve)
            a[b] = ve[b];
        var c = [];
        for (b in a)
            c.push(b + "=" + a[b]);
        xe = c
    }
    return xe
}
var xe,
    ye = [];
function Kb(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.Cf = a.Cf;
    this.Rf = null;
    this.id = Bb++;
    this.name = b;
    this.mode = c;
    this.lf = {};
    this.mf = {};
    this.rdev = d
}
Object.defineProperties(Kb.prototype, {
    read: {
        get: function() {
            return 365 === (this.mode & 365)
        },
        set: function(a) {
            a ? this.mode |= 365 : this.mode &= -366
        }
    },
    write: {
        get: function() {
            return 146 === (this.mode & 146)
        },
        set: function(a) {
            a ? this.mode |= 146 : this.mode &= -147
        }
    }
});
Zb();
Cb = Array(4096);
Rb(H, "/");
Tb("/tmp");
Tb("/home");
Tb("/home/web_user");
(function() {
    Tb("/dev");
    qb(259, {
        read: function() {
            return 0
        },
        write: function(b, c, d, e) {
            return e
        }
    });
    Ub("/dev/null", 259);
    pb(1280, sb);
    pb(1536, tb);
    Ub("/dev/tty", 1280);
    Ub("/dev/tty1", 1536);
    var a = mb();
    bc("random", a);
    bc("urandom", a);
    Tb("/dev/shm");
    Tb("/dev/shm/tmp")
})();
(function() {
    Tb("/proc");
    var a = Tb("/proc/self");
    Tb("/proc/self/fd");
    Rb({
        Cf: function() {
            var b = vb(a, "fd", 16895, 73);
            b.lf = {
                lookup: function(c, d) {
                    var e = Ab[+d];
                    if (!e)
                        throw new G(8);
                    c = {
                        parent: null,
                        Cf: {
                            og: "fake"
                        },
                        lf: {
                            readlink: function() {
                                return e.path
                            }
                        }
                    };
                    return c.parent = c
                }
            };
            return b
        }
    }, "/proc/self/fd")
})();
h.requestFullscreen = function(a, b) {
    Pc(a, b)
};
h.requestAnimationFrame = function(a) {
    qc(a)
};
h.setCanvasSize = function(a, b, c) {
    Rc(h.canvas, a, b);
    c || Sc()
};
h.pauseMainLoop = function() {
    nc = null;
    tc++
};
h.resumeMainLoop = function() {
    tc++;
    var a = kc,
        b = lc,
        c = mc;
    mc = null;
    rc(c, 0, !1, sc, !0);
    jc(a, b);
    nc()
};
h.getUserMedia = function() {
    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
    window.getUserMedia(void 0)
};
h.createContext = function(a, b, c, d) {
    return Ic(a, b, c, d)
};
for (var J, Z = 0; 32 > Z; ++Z)
    Zd.push(Array(Z));
var De = new Float32Array(288);
for (Z = 0; 288 > Z; ++Z)
    Y[Z] = De.subarray(0, Z + 1);
var Ee = new Int32Array(288);
for (Z = 0; 288 > Z; ++Z)
    he[Z] = Ee.subarray(0, Z + 1);
var He = {
    v: function(a, b, c, d) {
        l("Assertion failed: " + A(a) + ", at: " + [b ? A(b) : "unknown filename", c, d ? A(d) : "unknown function"])
    },
    Pa: function(a) {
        return D(a + 16) + 16
    },
    La: function(a, b, c) {
        (new gb(a)).Dg(b, c);
        hb++;
        throw a;
    },
    fa: function(a, b, c) {
        ec = c;
        try {
            var d = hc(a);
            switch (b) {
            case 0:
                var e = fc();
                return 0 > e ? -28 : Wb(d.path, d.flags, 0, e).fd;
            case 1:
            case 2:
                return 0;
            case 3:
                return d.flags;
            case 4:
                return e = fc(), d.flags |= e, 0;
            case 12:
                return e = fc(), va[e + 0 >> 1] = 2, 0;
            case 13:
            case 14:
                return 0;
            case 16:
            case 8:
                return -28;
            case 9:
                return u[Fe() >>
                2] = 28, -1;
            default:
                return -28
            }
        } catch (f) {
            return "undefined" !== typeof dc && f instanceof G || l(f), -f.Bf
        }
    },
    Ce: function(a, b, c) {
        ec = c;
        try {
            var d = hc(a);
            switch (b) {
            case 21509:
            case 21505:
                return d.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
                return d.tty ? 0 : -59;
            case 21519:
                if (!d.tty)
                    return -59;
                var e = fc();
                return u[e >> 2] = 0;
            case 21520:
                return d.tty ? -28 : -59;
            case 21531:
                a = e = fc();
                if (!d.mf.Fg)
                    throw new G(59);
                return d.mf.Fg(d, b, a);
            case 21523:
                return d.tty ? 0 : -59;
            case 21524:
                return d.tty ? 0 : -59;
            default:
                l("bad ioctl syscall " +
                b)
            }
        } catch (f) {
            return "undefined" !== typeof dc && f instanceof G || l(f), -f.Bf
        }
    },
    De: function(a, b, c) {
        ec = c;
        try {
            var d = A(a),
                e = c ? fc() : 0;
            return Wb(d, b, e).fd
        } catch (f) {
            return "undefined" !== typeof dc && f instanceof G || l(f), -f.Bf
        }
    },
    we: function() {
        l()
    },
    y: function(a, b) {
        if (0 === a)
            a = Date.now();
        else if (1 === a || 4 === a)
            a = ic();
        else
            return u[Fe() >> 2] = 28, -1;
        u[b >> 2] = a / 1E3 | 0;
        u[b + 4 >> 2] = a % 1E3 * 1E6 | 0;
        return 0
    },
    ga: function() {
        l("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking")
    },
    Me: function(a) {
        if (12448 == a)
            return K = 12288, 1;
        K = 12300;
        return 0
    },
    Aa: function(a, b, c, d, e) {
        if (62E3 != a)
            K = 12296,
            c = 0;
        else {
            if (b)
                for (;;) {
                    a = u[b >> 2];
                    if (12321 == a)
                        L.alpha = 0 < u[b + 4 >> 2];
                    else if (12325 == a)
                        L.depth = 0 < u[b + 4 >> 2];
                    else if (12326 == a)
                        L.stencil = 0 < u[b + 4 >> 2];
                    else if (12337 == a)
                        a = u[b + 4 >> 2],
                        L.antialias = 0 < a;
                    else if (12338 == a)
                        a = u[b + 4 >> 2],
                        L.antialias = 1 == a;
                    else if (12544 == a)
                        L.eh = 12547 != u[b + 4 >> 2];
                    else if (12344 == a)
                        break;
                    b += 8
                }
            c && d || e ? (e && (u[e >> 2] = 1), c && 0 < d && (u[c >> 2] = 62002), K = 12288, c = 1) : (K = 12300, c = 0)
        }
        return c
    },
    Ve: function(a,
    b, c, d) {
        if (62E3 != a)
            return K = 12296, 0;
        for (a = 1;;) {
            b = u[d >> 2];
            if (12440 == b)
                a = u[d + 4 >> 2];
            else if (12344 == b)
                break;
            else
                return K = 12292, 0;
            d += 8
        }
        if (2 != a)
            return K = 12293, 0;
        L.mg = a - 1;
        L.gh = 0;
        $c = Kc(h.canvas, L);
        if (0 != $c)
            return K = 12288, Lc($c), h.Vg = !0, Ac.forEach(function(e) {
                e()
            }), Lc(null), 62004;
        K = 12297;
        return 0
    },
    Te: function(a, b) {
        if (62E3 != a)
            return K = 12296, 0;
        if (62002 != b)
            return K = 12293, 0;
        K = 12288;
        return 62006
    },
    Ue: function(a, b) {
        if (62E3 != a)
            return K = 12296, 0;
        if (62004 != b)
            return K = 12294, 0;
        a = $c;
        pd === I[a] && (pd = null);
        if ("object" === typeof Bd)
            for (var c =
                I[a].Df.canvas, d = 0; d < U.length; ++d)
                U[d].target != c || td(d--);
        I[a] && I[a].Df.canvas && (I[a].Df.canvas.Jf = void 0);
        I[a] = null;
        K = 12288;
        Wc == b && (Wc = 0);
        return 1
    },
    Se: function(a, b) {
        if (62E3 != a)
            return K = 12296, 0;
        if (62006 != b)
            return K = 12301, 1;
        Xc == b && (Xc = 0);
        Yc == b && (Yc = 0);
        K = 12288;
        return 1
    },
    za: function(a, b, c, d) {
        if (62E3 != a)
            return K = 12296, 0;
        if (62002 != b)
            return K = 12293, 0;
        if (!d)
            return K = 12300, 0;
        K = 12288;
        switch (c) {
        case 12320:
            return u[d >> 2] = L.alpha ? 32 : 24, 1;
        case 12321:
            return u[d >> 2] = L.alpha ? 8 : 0, 1;
        case 12322:
            return u[d >> 2] = 8, 1;
        case 12323:
            return u[d >>
            2] = 8, 1;
        case 12324:
            return u[d >> 2] = 8, 1;
        case 12325:
            return u[d >> 2] = L.depth ? 24 : 0, 1;
        case 12326:
            return u[d >> 2] = L.stencil ? 8 : 0, 1;
        case 12327:
            return u[d >> 2] = 12344, 1;
        case 12328:
            return u[d >> 2] = 62002, 1;
        case 12329:
            return u[d >> 2] = 0, 1;
        case 12330:
            return u[d >> 2] = 4096, 1;
        case 12331:
            return u[d >> 2] = 16777216, 1;
        case 12332:
            return u[d >> 2] = 4096, 1;
        case 12333:
            return u[d >> 2] = 0, 1;
        case 12334:
            return u[d >> 2] = 0, 1;
        case 12335:
            return u[d >> 2] = 12344, 1;
        case 12337:
            return u[d >> 2] = L.antialias ? 4 : 0, 1;
        case 12338:
            return u[d >> 2] = L.antialias ? 1 : 0,
            1;
        case 12339:
            return u[d >> 2] = 4, 1;
        case 12340:
            return u[d >> 2] = 12344, 1;
        case 12341:
        case 12342:
        case 12343:
            return u[d >> 2] = -1, 1;
        case 12345:
        case 12346:
            return u[d >> 2] = 0, 1;
        case 12347:
            return u[d >> 2] = 0, 1;
        case 12348:
            return u[d >> 2] = 1;
        case 12349:
        case 12350:
            return u[d >> 2] = 0, 1;
        case 12351:
            return u[d >> 2] = 12430, 1;
        case 12352:
            return u[d >> 2] = 4, 1;
        case 12354:
            return u[d >> 2] = 0, 1;
        default:
            return K = 12292, 0
        }
    },
    S: function() {
        K = 12288;
        return 62E3
    },
    Ke: function() {
        return K
    },
    Da: function(a) {
        return Ge(a)
    },
    Ca: function(a, b, c) {
        if (62E3 == a)
            return b &&
            (u[b >> 2] = 1), c && (u[c >> 2] = 4), Vc = !0, K = 12288, 1;
        K = 12296;
        return 0
    },
    Re: function(a, b, c, d) {
        if (62E3 != a)
            return K = 12296, 0;
        if (0 != d && 62004 != d)
            return K = 12294, 0;
        if (0 != c && 62006 != c || 0 != b && 62006 != b)
            return K = 12301, 0;
        Lc(d ? $c : null);
        Wc = d;
        Yc = b;
        Xc = c;
        K = 12288;
        return 1
    },
    Le: function(a, b) {
        if (62E3 != a)
            return K = 12296, 0;
        K = 12288;
        if (Zc[b])
            return Zc[b];
        switch (b) {
        case 12371:
            a = Ia("Emscripten");
            break;
        case 12372:
            a = Ia("1.4 Emscripten EGL");
            break;
        case 12373:
            a = Ia("");
            break;
        case 12429:
            a = Ia("OpenGL_ES");
            break;
        default:
            return K = 12300, 0
        }
        return Zc[b] =
        a
    },
    Qe: function() {
        if (Vc)
            if (h.wf)
                if (h.wf.isContextLost())
                    K = 12302;
                else
                    return K = 12288, 1;
            else
                K = 12290;
        else
            K = 12289;
        return 0
    },
    Pe: function(a, b) {
        if (62E3 != a)
            return K = 12296, 0;
        0 == b ? jc(0, 0) : jc(1, b);
        K = 12288;
        return 1
    },
    Ba: function(a) {
        if (62E3 != a)
            return K = 12296, 0;
        Yc = Xc = Wc = 0;
        Vc = !1;
        K = 12288;
        return 1
    },
    Ne: function() {
        K = 12288;
        return 1
    },
    Oe: function() {
        K = 12288;
        return 1
    },
    b: function(a, b, c) {
        ye.length = 0;
        var d;
        for (c >>= 2; d = C[b++];)
            (d = 105 > d) && c & 1 && c++,
            ye.push(d ? x[c++ >> 1] : u[c]),
            ++c;
        return cb[a].apply(null, ye)
    },
    He: function() {
        if (!Ad())
            return -1;
        vd(Wd);
        var a = Pd[1];
        if (a.exitFullscreen)
            a.fullscreenElement && a.exitFullscreen();
        else if (a.webkitExitFullscreen)
            a.webkitFullscreenElement && a.webkitExitFullscreen();
        else
            return -1;
        return 0
    },
    Je: function() {
        vd(Xd);
        if (document.exitPointerLock)
            document.exitPointerLock();
        else if (document.Nf)
            document.Nf();
        else
            return -1;
        return 0
    },
    z: function() {
        return "number" === typeof devicePixelRatio && devicePixelRatio || 1
    },
    r: function(a, b, c) {
        a = X(a);
        if (!a)
            return -4;
        a = Vd(a);
        x[b >> 3] = a.width;
        x[c >> 3] = a.height;
        return 0
    },
    Ee: function(a,
    b) {
        if (0 > a || a >= Cd.length)
            return -5;
        if (!Cd[a])
            return -7;
        Yd(b, Cd[a]);
        return 0
    },
    Fe: function() {
        return Cd.length
    },
    $d: function(a) {
        J.activeTexture(a)
    },
    _d: function(a, b) {
        J.attachShader(M[a], P[b])
    },
    qe: function(a, b) {
        J.uf.beginQueryEXT(a, S[b])
    },
    Zd: function(a, b, c) {
        J.bindAttribLocation(M[a], b, A(c))
    },
    Yd: function(a, b) {
        J.bindBuffer(a, ed[b])
    },
    Wd: function(a, b) {
        J.bindFramebuffer(a, fd[b])
    },
    Vd: function(a, b) {
        J.bindRenderbuffer(a, gd[b])
    },
    Ud: function(a, b) {
        J.bindTexture(a, N[b])
    },
    ie: function(a) {
        J.bindVertexArray(hd[a])
    },
    Td: function(a,
    b, c, d) {
        J.blendColor(a, b, c, d)
    },
    Sd: function(a) {
        J.blendEquation(a)
    },
    Rd: function(a, b) {
        J.blendEquationSeparate(a, b)
    },
    Qd: function(a, b) {
        J.blendFunc(a, b)
    },
    Pd: function(a, b, c, d) {
        J.blendFuncSeparate(a, b, c, d)
    },
    Od: function(a, b, c, d) {
        J.bufferData(a, c ? C.subarray(c, c + b) : b, d)
    },
    Nd: function(a, b, c, d) {
        J.bufferSubData(a, b, C.subarray(d, d + c))
    },
    Md: function(a) {
        return J.checkFramebufferStatus(a)
    },
    Ld: function(a) {
        J.clear(a)
    },
    Kd: function(a, b, c, d) {
        J.clearColor(a, b, c, d)
    },
    Jd: function(a) {
        J.clearDepth(a)
    },
    Id: function(a) {
        J.clearStencil(a)
    },
    Hd: function(a, b, c, d) {
        J.colorMask(!!a, !!b, !!c, !!d)
    },
    Gd: function(a) {
        J.compileShader(P[a])
    },
    Fd: function(a, b, c, d, e, f, g, m) {
        J.compressedTexImage2D(a, b, c, d, e, f, m ? C.subarray(m, m + g) : null)
    },
    Ed: function(a, b, c, d, e, f, g, m, n) {
        J.compressedTexSubImage2D(a, b, c, d, e, f, g, n ? C.subarray(n, n + m) : null)
    },
    Dd: function(a, b, c, d, e, f, g, m) {
        J.copyTexImage2D(a, b, c, d, e, f, g, m)
    },
    Bd: function(a, b, c, d, e, f, g, m) {
        J.copyTexSubImage2D(a, b, c, d, e, f, g, m)
    },
    Ad: function() {
        var a = md(M),
            b = J.createProgram();
        b.name = a;
        M[a] = b;
        return a
    },
    zd: function(a) {
        var b =
        md(P);
        P[b] = J.createShader(a);
        return b
    },
    yd: function(a) {
        J.cullFace(a)
    },
    xd: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2],
                e = ed[d];
            e && (J.deleteBuffer(e), e.name = 0, ed[d] = null)
        }
    },
    wd: function(a, b) {
        for (var c = 0; c < a; ++c) {
            var d = u[b + 4 * c >> 2],
                e = fd[d];
            e && (J.deleteFramebuffer(e), e.name = 0, fd[d] = null)
        }
    },
    vd: function(a) {
        if (a) {
            var b = M[a];
            b ? (J.deleteProgram(b), b.name = 0, M[a] = null, id[a] = null) : T(1281)
        }
    },
    te: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2],
                e = S[d];
            e && (J.uf.deleteQueryEXT(e), S[d] = null)
        }
    },
    ud: function(a,
    b) {
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2],
                e = gd[d];
            e && (J.deleteRenderbuffer(e), e.name = 0, gd[d] = null)
        }
    },
    td: function(a) {
        if (a) {
            var b = P[a];
            b ? (J.deleteShader(b), P[a] = null) : T(1281)
        }
    },
    sd: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2],
                e = N[d];
            e && (J.deleteTexture(e), e.name = 0, N[d] = null)
        }
    },
    he: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2];
            J.deleteVertexArray(hd[d]);
            hd[d] = null
        }
    },
    qd: function(a) {
        J.depthFunc(a)
    },
    pd: function(a) {
        J.depthMask(!!a)
    },
    od: function(a, b) {
        J.depthRange(a, b)
    },
    nd: function(a, b) {
        J.detachShader(M[a],
        P[b])
    },
    md: function(a) {
        J.disable(a)
    },
    ld: function(a) {
        J.disableVertexAttribArray(a)
    },
    kd: function(a, b, c) {
        J.drawArrays(a, b, c)
    },
    ce: function(a, b, c, d) {
        J.drawArraysInstanced(a, b, c, d)
    },
    de: function(a, b) {
        for (var c = Zd[a], d = 0; d < a; d++)
            c[d] = u[b + 4 * d >> 2];
        J.drawBuffers(c)
    },
    jd: function(a, b, c, d) {
        J.drawElements(a, b, c, d)
    },
    be: function(a, b, c, d, e) {
        J.drawElementsInstanced(a, b, c, d, e)
    },
    id: function(a) {
        J.enable(a)
    },
    hd: function(a) {
        J.enableVertexAttribArray(a)
    },
    pe: function(a) {
        J.uf.endQueryEXT(a)
    },
    gd: function() {
        J.finish()
    },
    fd: function() {
        J.flush()
    },
    ed: function(a, b, c, d) {
        J.framebufferRenderbuffer(a, b, c, gd[d])
    },
    dd: function(a, b, c, d, e) {
        J.framebufferTexture2D(a, b, c, N[d], e)
    },
    cd: function(a) {
        J.frontFace(a)
    },
    bd: function(a, b) {
        $d(a, b, "createBuffer", ed)
    },
    $c: function(a, b) {
        $d(a, b, "createFramebuffer", fd)
    },
    ue: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = J.uf.createQueryEXT();
            if (!d) {
                for (T(1282); c < a;)
                    u[b + 4 * c++ >> 2] = 0;
                break
            }
            var e = md(S);
            d.name = e;
            S[e] = d;
            u[b + 4 * c >> 2] = e
        }
    },
    _c: function(a, b) {
        $d(a, b, "createRenderbuffer", gd)
    },
    Zc: function(a, b) {
        $d(a, b, "createTexture", N)
    },
    fe: function(a,
    b) {
        $d(a, b, "createVertexArray", hd)
    },
    ad: function(a) {
        J.generateMipmap(a)
    },
    Yc: function(a, b, c, d, e, f, g) {
        ae("getActiveAttrib", a, b, c, d, e, f, g)
    },
    Xc: function(a, b, c, d, e, f, g) {
        ae("getActiveUniform", a, b, c, d, e, f, g)
    },
    Wc: function(a, b, c, d) {
        a = J.getAttachedShaders(M[a]);
        var e = a.length;
        e > b && (e = b);
        u[c >> 2] = e;
        for (b = 0; b < e; ++b)
            u[d + 4 * b >> 2] = P.indexOf(a[b])
    },
    Vc: function(a, b) {
        return J.getAttribLocation(M[a], A(b))
    },
    Uc: function(a, b) {
        ce(a, b, 4)
    },
    Tc: function(a, b, c) {
        c ? u[c >> 2] = J.getBufferParameter(a, b) : T(1281)
    },
    Sc: function() {
        var a = J.getError() ||
        ld;
        ld = 0;
        return a
    },
    Rc: function(a, b) {
        ce(a, b, 2)
    },
    Qc: function(a, b, c, d) {
        a = J.getFramebufferAttachmentParameter(a, b, c);
        if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture)
            a = a.name | 0;
        u[d >> 2] = a
    },
    Pc: function(a, b) {
        ce(a, b, 0)
    },
    Nc: function(a, b, c, d) {
        a = J.getProgramInfoLog(M[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? y(a, d, b) : 0;
        c && (u[c >> 2] = b)
    },
    Oc: function(a, b, c) {
        if (c)
            if (a >= dd)
                T(1281);
            else {
                var d = id[a];
                if (d)
                    if (35716 == b)
                        a = J.getProgramInfoLog(M[a]),
                        null === a && (a = "(unknown error)"),
                        u[c >> 2] = a.length + 1;
                    else if (35719 ==
                    b)
                        u[c >> 2] = d.Of;
                    else if (35722 == b) {
                        if (-1 == d.xf) {
                            a = M[a];
                            var e = J.getProgramParameter(a, 35721);
                            for (b = d.xf = 0; b < e; ++b)
                                d.xf = Math.max(d.xf, J.getActiveAttrib(a, b).name.length + 1)
                        }
                        u[c >> 2] = d.xf
                    } else if (35381 == b) {
                        if (-1 == d.yf)
                            for (a = M[a], e = J.getProgramParameter(a, 35382), b = d.yf = 0; b < e; ++b)
                                d.yf = Math.max(d.yf, J.getActiveUniformBlockName(a, b).length + 1);
                        u[c >> 2] = d.yf
                    } else
                        u[c >> 2] = J.getProgramParameter(M[a], b);
                else
                    T(1282)
            }
        else
            T(1281)
    },
    ke: function(a, b, c) {
        if (c) {
            a = J.uf.getQueryObjectEXT(S[a], b);
            var d;
            "boolean" == typeof a ?
            d = a ? 1 : 0 : d = a;
            be(c, d)
        } else
            T(1281)
    },
    me: function(a, b, c) {
        if (c) {
            a = J.uf.getQueryObjectEXT(S[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            u[c >> 2] = d
        } else
            T(1281)
    },
    je: function(a, b, c) {
        if (c) {
            a = J.uf.getQueryObjectEXT(S[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            be(c, d)
        } else
            T(1281)
    },
    le: function(a, b, c) {
        if (c) {
            a = J.uf.getQueryObjectEXT(S[a], b);
            var d;
            "boolean" == typeof a ? d = a ? 1 : 0 : d = a;
            u[c >> 2] = d
        } else
            T(1281)
    },
    ne: function(a, b, c) {
        c ? u[c >> 2] = J.uf.getQueryEXT(a, b) : T(1281)
    },
    Mc: function(a, b, c) {
        c ? u[c >> 2] = J.getRenderbufferParameter(a,
        b) : T(1281)
    },
    Kc: function(a, b, c, d) {
        a = J.getShaderInfoLog(P[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? y(a, d, b) : 0;
        c && (u[c >> 2] = b)
    },
    Jc: function(a, b, c, d) {
        a = J.getShaderPrecisionFormat(a, b);
        u[c >> 2] = a.rangeMin;
        u[c + 4 >> 2] = a.rangeMax;
        u[d >> 2] = a.precision
    },
    Ic: function(a, b, c, d) {
        if (a = J.getShaderSource(P[a]))
            b = 0 < b && d ? y(a, d, b) : 0,
            c && (u[c >> 2] = b)
    },
    Lc: function(a, b, c) {
        c ? 35716 == b ? (a = J.getShaderInfoLog(P[a]), null === a && (a = "(unknown error)"), u[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = J.getShaderSource(P[a]), u[c >> 2] = a ? a.length + 1 :
        0) : u[c >> 2] = J.getShaderParameter(P[a], b) : T(1281)
    },
    Hc: function(a) {
        if (jd[a])
            return jd[a];
        switch (a) {
        case 7939:
            var b = J.getSupportedExtensions() || [];
            b = b.concat(b.map(function(d) {
                return "GL_" + d
            }));
            b = de(b.join(" "));
            break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
            (b = J.getParameter(a)) || T(1280);
            b = de(b);
            break;
        case 7938:
            b = de("OpenGL ES 2.0 (" + J.getParameter(7938) + ")");
            break;
        case 35724:
            b = J.getParameter(35724);
            var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
            null !== c && (3 == c[1].length && (c[1] += "0"),
            b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
            b = de(b);
            break;
        default:
            return T(1280), 0
        }
        return jd[a] = b
    },
    Gc: function(a, b, c) {
        c ? w[c >> 2] = J.getTexParameter(a, b) : T(1281)
    },
    Fc: function(a, b, c) {
        c ? u[c >> 2] = J.getTexParameter(a, b) : T(1281)
    },
    Cc: function(a, b) {
        b = A(b);
        var c = 0;
        if ("]" == b[b.length - 1]) {
            var d = b.lastIndexOf("[");
            c = "]" != b[d + 1] ? parseInt(b.slice(d + 1)) : 0;
            b = b.slice(0, d)
        }
        return (a = id[a] && id[a].ag[b]) && 0 <= c && c < a[0] ? a[1] + c : -1
    },
    Ec: function(a, b, c) {
        ee(a, b, c, 2)
    },
    Dc: function(a, b, c) {
        ee(a, b, c, 0)
    },
    zc: function(a, b, c) {
        c ? u[c >> 2] = J.getVertexAttribOffset(a,
        b) : T(1281)
    },
    Bc: function(a, b, c) {
        fe(a, b, c, 2)
    },
    Ac: function(a, b, c) {
        fe(a, b, c, 5)
    },
    yc: function(a, b) {
        J.hint(a, b)
    },
    xc: function(a) {
        return (a = ed[a]) ? J.isBuffer(a) : 0
    },
    wc: function(a) {
        return J.isEnabled(a)
    },
    vc: function(a) {
        return (a = fd[a]) ? J.isFramebuffer(a) : 0
    },
    tc: function(a) {
        return (a = M[a]) ? J.isProgram(a) : 0
    },
    se: function(a) {
        return (a = S[a]) ? J.uf.isQueryEXT(a) : 0
    },
    sc: function(a) {
        return (a = gd[a]) ? J.isRenderbuffer(a) : 0
    },
    rc: function(a) {
        return (a = P[a]) ? J.isShader(a) : 0
    },
    qc: function(a) {
        return (a = N[a]) ? J.isTexture(a) : 0
    },
    ee: function(a) {
        return (a =
        hd[a]) ? J.isVertexArray(a) : 0
    },
    pc: function(a) {
        J.lineWidth(a)
    },
    oc: function(a) {
        J.linkProgram(M[a]);
        qd(a)
    },
    nc: function(a, b) {
        3317 == a && (kd = b);
        J.pixelStorei(a, b)
    },
    mc: function(a, b) {
        J.polygonOffset(a, b)
    },
    oe: function(a, b) {
        J.uf.queryCounterEXT(S[a], b)
    },
    lc: function(a, b, c, d, e, f, g) {
        (g = ge(f, e, c, d, g)) ? J.readPixels(a, b, c, d, e, f, g) : T(1280)
    },
    kc: function() {},
    ic: function(a, b, c, d) {
        J.renderbufferStorage(a, b, c, d)
    },
    hc: function(a, b) {
        J.sampleCoverage(a, !!b)
    },
    gc: function(a, b, c, d) {
        J.scissor(a, b, c, d)
    },
    fc: function() {
        T(1280)
    },
    ec: function(a,
    b, c, d) {
        b = nd(b, c, d);
        J.shaderSource(P[a], b)
    },
    dc: function(a, b, c) {
        J.stencilFunc(a, b, c)
    },
    cc: function(a, b, c, d) {
        J.stencilFuncSeparate(a, b, c, d)
    },
    bc: function(a) {
        J.stencilMask(a)
    },
    ac: function(a, b) {
        J.stencilMaskSeparate(a, b)
    },
    $b: function(a, b, c) {
        J.stencilOp(a, b, c)
    },
    _b: function(a, b, c, d) {
        J.stencilOpSeparate(a, b, c, d)
    },
    Zb: function(a, b, c, d, e, f, g, m, n) {
        J.texImage2D(a, b, c, d, e, f, g, m, n ? ge(m, g, d, e, n) : null)
    },
    Yb: function(a, b, c) {
        J.texParameterf(a, b, c)
    },
    Xb: function(a, b, c) {
        J.texParameterf(a, b, w[c >> 2])
    },
    Wb: function(a, b, c) {
        J.texParameteri(a,
        b, c)
    },
    Vb: function(a, b, c) {
        J.texParameteri(a, b, u[c >> 2])
    },
    Ub: function(a, b, c, d, e, f, g, m, n) {
        var p = null;
        n && (p = ge(m, g, e, f, n));
        J.texSubImage2D(a, b, c, d, e, f, g, m, p)
    },
    Tb: function(a, b) {
        J.uniform1f(O[a], b)
    },
    Sb: function(a, b, c) {
        if (288 >= b)
            for (var d = Y[b - 1], e = 0; e < b; ++e)
                d[e] = w[c + 4 * e >> 2];
        else
            d = w.subarray(c >> 2, c + 4 * b >> 2);
        J.uniform1fv(O[a], d)
    },
    Rb: function(a, b) {
        J.uniform1i(O[a], b)
    },
    Pb: function(a, b, c) {
        if (288 >= b)
            for (var d = he[b - 1], e = 0; e < b; ++e)
                d[e] = u[c + 4 * e >> 2];
        else
            d = u.subarray(c >> 2, c + 4 * b >> 2);
        J.uniform1iv(O[a], d)
    },
    Ob: function(a,
    b, c) {
        J.uniform2f(O[a], b, c)
    },
    Nb: function(a, b, c) {
        if (144 >= b)
            for (var d = Y[2 * b - 1], e = 0; e < 2 * b; e += 2)
                d[e] = w[c + 4 * e >> 2],
                d[e + 1] = w[c + (4 * e + 4) >> 2];
        else
            d = w.subarray(c >> 2, c + 8 * b >> 2);
        J.uniform2fv(O[a], d)
    },
    Mb: function(a, b, c) {
        J.uniform2i(O[a], b, c)
    },
    Lb: function(a, b, c) {
        if (144 >= b)
            for (var d = he[2 * b - 1], e = 0; e < 2 * b; e += 2)
                d[e] = u[c + 4 * e >> 2],
                d[e + 1] = u[c + (4 * e + 4) >> 2];
        else
            d = u.subarray(c >> 2, c + 8 * b >> 2);
        J.uniform2iv(O[a], d)
    },
    Kb: function(a, b, c, d) {
        J.uniform3f(O[a], b, c, d)
    },
    Jb: function(a, b, c) {
        if (96 >= b)
            for (var d = Y[3 * b - 1], e = 0; e < 3 * b; e += 3)
                d[e] = w[c +
                4 * e >> 2],
                d[e + 1] = w[c + (4 * e + 4) >> 2],
                d[e + 2] = w[c + (4 * e + 8) >> 2];
        else
            d = w.subarray(c >> 2, c + 12 * b >> 2);
        J.uniform3fv(O[a], d)
    },
    Ib: function(a, b, c, d) {
        J.uniform3i(O[a], b, c, d)
    },
    Hb: function(a, b, c) {
        if (96 >= b)
            for (var d = he[3 * b - 1], e = 0; e < 3 * b; e += 3)
                d[e] = u[c + 4 * e >> 2],
                d[e + 1] = u[c + (4 * e + 4) >> 2],
                d[e + 2] = u[c + (4 * e + 8) >> 2];
        else
            d = u.subarray(c >> 2, c + 12 * b >> 2);
        J.uniform3iv(O[a], d)
    },
    Gb: function(a, b, c, d, e) {
        J.uniform4f(O[a], b, c, d, e)
    },
    Eb: function(a, b, c) {
        if (72 >= b) {
            var d = Y[4 * b - 1],
                e = w;
            c >>= 2;
            for (var f = 0; f < 4 * b; f += 4) {
                var g = c + f;
                d[f] = e[g];
                d[f + 1] = e[g + 1];
                d[f +
                2] = e[g + 2];
                d[f + 3] = e[g + 3]
            }
        } else
            d = w.subarray(c >> 2, c + 16 * b >> 2);
        J.uniform4fv(O[a], d)
    },
    Db: function(a, b, c, d, e) {
        J.uniform4i(O[a], b, c, d, e)
    },
    Cb: function(a, b, c) {
        if (72 >= b)
            for (var d = he[4 * b - 1], e = 0; e < 4 * b; e += 4)
                d[e] = u[c + 4 * e >> 2],
                d[e + 1] = u[c + (4 * e + 4) >> 2],
                d[e + 2] = u[c + (4 * e + 8) >> 2],
                d[e + 3] = u[c + (4 * e + 12) >> 2];
        else
            d = u.subarray(c >> 2, c + 16 * b >> 2);
        J.uniform4iv(O[a], d)
    },
    Bb: function(a, b, c, d) {
        if (72 >= b)
            for (var e = Y[4 * b - 1], f = 0; f < 4 * b; f += 4)
                e[f] = w[d + 4 * f >> 2],
                e[f + 1] = w[d + (4 * f + 4) >> 2],
                e[f + 2] = w[d + (4 * f + 8) >> 2],
                e[f + 3] = w[d + (4 * f + 12) >> 2];
        else
            e = w.subarray(d >>
            2, d + 16 * b >> 2);
        J.uniformMatrix2fv(O[a], !!c, e)
    },
    Ab: function(a, b, c, d) {
        if (32 >= b)
            for (var e = Y[9 * b - 1], f = 0; f < 9 * b; f += 9)
                e[f] = w[d + 4 * f >> 2],
                e[f + 1] = w[d + (4 * f + 4) >> 2],
                e[f + 2] = w[d + (4 * f + 8) >> 2],
                e[f + 3] = w[d + (4 * f + 12) >> 2],
                e[f + 4] = w[d + (4 * f + 16) >> 2],
                e[f + 5] = w[d + (4 * f + 20) >> 2],
                e[f + 6] = w[d + (4 * f + 24) >> 2],
                e[f + 7] = w[d + (4 * f + 28) >> 2],
                e[f + 8] = w[d + (4 * f + 32) >> 2];
        else
            e = w.subarray(d >> 2, d + 36 * b >> 2);
        J.uniformMatrix3fv(O[a], !!c, e)
    },
    zb: function(a, b, c, d) {
        if (18 >= b) {
            var e = Y[16 * b - 1],
                f = w;
            d >>= 2;
            for (var g = 0; g < 16 * b; g += 16) {
                var m = d + g;
                e[g] = f[m];
                e[g + 1] = f[m + 1];
                e[g +
                2] = f[m + 2];
                e[g + 3] = f[m + 3];
                e[g + 4] = f[m + 4];
                e[g + 5] = f[m + 5];
                e[g + 6] = f[m + 6];
                e[g + 7] = f[m + 7];
                e[g + 8] = f[m + 8];
                e[g + 9] = f[m + 9];
                e[g + 10] = f[m + 10];
                e[g + 11] = f[m + 11];
                e[g + 12] = f[m + 12];
                e[g + 13] = f[m + 13];
                e[g + 14] = f[m + 14];
                e[g + 15] = f[m + 15]
            }
        } else
            e = w.subarray(d >> 2, d + 64 * b >> 2);
        J.uniformMatrix4fv(O[a], !!c, e)
    },
    yb: function(a) {
        J.useProgram(M[a])
    },
    xb: function(a) {
        J.validateProgram(M[a])
    },
    wb: function(a, b) {
        J.vertexAttrib1f(a, b)
    },
    vb: function(a, b) {
        J.vertexAttrib1f(a, w[b >> 2])
    },
    tb: function(a, b, c) {
        J.vertexAttrib2f(a, b, c)
    },
    sb: function(a, b) {
        J.vertexAttrib2f(a,
        w[b >> 2], w[b + 4 >> 2])
    },
    rb: function(a, b, c, d) {
        J.vertexAttrib3f(a, b, c, d)
    },
    qb: function(a, b) {
        J.vertexAttrib3f(a, w[b >> 2], w[b + 4 >> 2], w[b + 8 >> 2])
    },
    pb: function(a, b, c, d, e) {
        J.vertexAttrib4f(a, b, c, d, e)
    },
    ob: function(a, b) {
        J.vertexAttrib4f(a, w[b >> 2], w[b + 4 >> 2], w[b + 8 >> 2], w[b + 12 >> 2])
    },
    ae: function(a, b) {
        J.vertexAttribDivisor(a, b)
    },
    nb: function(a, b, c, d, e, f) {
        J.vertexAttribPointer(a, b, c, !!d, e, f)
    },
    mb: function(a, b, c, d) {
        J.viewport(a, b, c, d)
    },
    o: function() {
        return 0
    },
    ve: function(a, b, c) {
        C.copyWithin(a, b, b + c)
    },
    Ie: function(a, b, c) {
        return ie(a,
        {
            Zf: u[c >> 2],
            Uf: u[c + 4 >> 2],
            zg: u[c + 8 >> 2],
            wg: b,
            Mf: u[c + 12 >> 2],
            dg: u[c + 16 >> 2]
        })
    },
    ya: function(a, b) {
        a = X(a);
        return a ? a.requestPointerLock || a.Sf ? rd && xd.Ff ? Xd(a) : b ? (ud(Xd, 2, [a]), 1) : -2 : -1 : -4
    },
    q: function() {
        l("OOM")
    },
    Ge: function() {
        return (Cd = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
    },
    ha: function(a, b, c) {
        if ("undefined" === typeof onbeforeunload)
            return -1;
        if (1 !== c)
            return -5;
        je(a, b);
        return 0
    },
    ra: function(a, b, c, d) {
        ke(a, b, c, d, 12, "blur");
        return 0
    },
    u: Rd,
    We: function(a, b, c, d) {
        me(a, b, c, d, 4, "click");
        return 0
    },
    R: function(a, b, c) {
        a = X(a);
        if (!a)
            return -4;
        a.style.width = b + "px";
        a.style.height = c + "px";
        return 0
    },
    sa: function(a, b, c, d) {
        ke(a, b, c, d, 13, "focus");
        return 0
    },
    ja: function(a, b, c, d) {
        if (!Ad())
            return -1;
        a = X(a);
        if (!a)
            return -4;
        ne(a, b, c, d, "fullscreenchange");
        ne(a, b, c, d, "webkitfullscreenchange");
        return 0
    },
    Q: function(a, b, c) {
        if (!navigator.getGamepads && !navigator.webkitGetGamepads)
            return -1;
        oe(a, b, c, 26, "gamepadconnected");
        return 0
    },
    P: function(a, b, c) {
        if (!navigator.getGamepads &&
        !navigator.webkitGetGamepads)
            return -1;
        oe(a, b, c, 27, "gamepaddisconnected");
        return 0
    },
    ma: function(a, b, c, d) {
        pe(a, b, c, d, 2, "keydown");
        return 0
    },
    ka: function(a, b, c, d) {
        pe(a, b, c, d, 1, "keypress");
        return 0
    },
    la: function(a, b, c, d) {
        pe(a, b, c, d, 3, "keyup");
        return 0
    },
    _a: function(a, b, c, d) {
        rc(function() {
            E.get(a)(b)
        }, c, d, b)
    },
    Xe: jc,
    xa: function(a, b, c, d) {
        me(a, b, c, d, 5, "mousedown");
        return 0
    },
    va: function(a, b, c, d) {
        me(a, b, c, d, 33, "mouseenter");
        return 0
    },
    ua: function(a, b, c, d) {
        me(a, b, c, d, 34, "mouseleave");
        return 0
    },
    N: function(a, b, c,
    d) {
        me(a, b, c, d, 8, "mousemove");
        return 0
    },
    wa: function(a, b, c, d) {
        me(a, b, c, d, 6, "mouseup");
        return 0
    },
    na: function(a, b, c, d) {
        if (!document || !document.body || !(document.body.requestPointerLock || document.body.Nf || document.body.Hg || document.body.Sf))
            return -1;
        a = X(a);
        if (!a)
            return -4;
        qe(a, b, c, d, "pointerlockchange");
        qe(a, b, c, d, "mozpointerlockchange");
        qe(a, b, c, d, "webkitpointerlockchange");
        qe(a, b, c, d, "mspointerlockchange");
        return 0
    },
    K: function(a, b, c, d) {
        re(a, b, c, d);
        return 0
    },
    oa: function(a, b, c, d) {
        se(a, b, c, d, 25, "touchcancel");
        return 0
    },
    qa: function(a, b, c, d) {
        se(a, b, c, d, 23, "touchend");
        return 0
    },
    pa: function(a, b, c, d) {
        se(a, b, c, d, 24, "touchmove");
        return 0
    },
    J: function(a, b, c, d) {
        se(a, b, c, d, 22, "touchstart");
        return 0
    },
    ia: function(a, b, c) {
        if (!Pd[1])
            return -4;
        te(a, b, c);
        return 0
    },
    ta: function(a, b, c, d) {
        a = X(a);
        return "undefined" !== typeof a.onwheel ? (ue(a, b, c, d), 0) : -1
    },
    n: function() {
        throw "Please compile your program with async support in order to use asynchronous operations like emscripten_sleep";
    },
    ze: function(a) {
        for (var b = ic(); ic() - b < a;)
            ;
    },
    xe: function(a,
    b) {
        try {
            var c = 0;
            we().forEach(function(d, e) {
                var f = b + c;
                e = u[a + 4 * e >> 2] = f;
                for (f = 0; f < d.length; ++f)
                    r[e++ >> 0] = d.charCodeAt(f);
                r[e >> 0] = 0;
                c += d.length + 1
            });
            return 0
        } catch (d) {
            return "undefined" !== typeof dc && d instanceof G || l(d), d.Bf
        }
    },
    ye: function(a, b) {
        try {
            var c = we();
            u[a >> 2] = c.length;
            var d = 0;
            c.forEach(function(e) {
                d += e.length + 1
            });
            u[b >> 2] = d;
            return 0
        } catch (e) {
            return "undefined" !== typeof dc && e instanceof G || l(e), e.Bf
        }
    },
    da: function(a) {
        try {
            var b = hc(a);
            if (null === b.fd)
                throw new G(8);
            b.Wf && (b.Wf = null);
            try {
                b.mf.close && b.mf.close(b)
            } catch (c) {
                throw c;
            } finally {
                Ab[b.fd] = null
            }
            b.fd = null;
            return 0
        } catch (c) {
            return "undefined" !== typeof dc && c instanceof G || l(c), c.Bf
        }
    },
    Be: function(a, b, c, d) {
        try {
            a:
            {
                for (var e = hc(a), f = a = 0; f < c; f++) {
                    var g = u[b + (8 * f + 4) >> 2],
                        m = e,
                        n = u[b + 8 * f >> 2],
                        p = g,
                        t = void 0,
                        z = r;
                    if (0 > p || 0 > t)
                        throw new G(28);
                    if (null === m.fd)
                        throw new G(8);
                    if (1 === (m.flags & 2097155))
                        throw new G(8);
                    if (16384 === (m.node.mode & 61440))
                        throw new G(31);
                    if (!m.mf.read)
                        throw new G(28);
                    var F = "undefined" !== typeof t;
                    if (!F)
                        t = m.position;
                    else if (!m.seekable)
                        throw new G(70);
                    var B = m.mf.read(m,
                    z, n, p, t);
                    F || (m.position += B);
                    var Q = B;
                    if (0 > Q) {
                        var R = -1;
                        break a
                    }
                    a += Q;
                    if (Q < g)
                        break
                }
                R = a
            }u[d >> 2] = R;
            return 0
        } catch (db) {
            return "undefined" !== typeof dc && db instanceof G || l(db), db.Bf
        }
    },
    lb: function(a, b, c, d, e) {
        try {
            var f = hc(a);
            a = 4294967296 * c + (b >>> 0);
            if (-9007199254740992 >= a || 9007199254740992 <= a)
                return -61;
            Yb(f, a, d);
            wa = [f.position >>> 0, (v = f.position, 1 <= +Math.abs(v) ? 0 < v ? (Math.min(+Math.floor(v / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((v - +(~~v >>> 0)) / 4294967296) >>> 0 : 0)];
            u[e >> 2] = wa[0];
            u[e + 4 >> 2] = wa[1];
            f.Wf && 0 === a && 0 ===
            d && (f.Wf = null);
            return 0
        } catch (g) {
            return "undefined" !== typeof dc && g instanceof G || l(g), g.Bf
        }
    },
    Ae: function(a, b, c, d) {
        try {
            a:
            {
                for (var e = hc(a), f = a = 0; f < c; f++) {
                    var g = e,
                        m = u[b + 8 * f >> 2],
                        n = u[b + (8 * f + 4) >> 2],
                        p = void 0,
                        t = r;
                    if (0 > n || 0 > p)
                        throw new G(28);
                    if (null === g.fd)
                        throw new G(8);
                    if (0 === (g.flags & 2097155))
                        throw new G(8);
                    if (16384 === (g.node.mode & 61440))
                        throw new G(31);
                    if (!g.mf.write)
                        throw new G(28);
                    g.seekable && g.flags & 1024 && Yb(g, 0, 2);
                    var z = "undefined" !== typeof p;
                    if (!z)
                        p = g.position;
                    else if (!g.seekable)
                        throw new G(70);
                    var F =
                    g.mf.write(g, t, m, n, p, void 0);
                    z || (g.position += F);
                    try {
                        if (g.path && Eb.onWriteToFile)
                            Eb.onWriteToFile(g.path)
                    } catch (R) {
                        q("FS.trackingDelegate['onWriteToFile']('" + g.path + "') threw an exception: " + R.message)
                    }
                    var B = F;
                    if (0 > B) {
                        var Q = -1;
                        break a
                    }
                    a += B
                }
                Q = a
            }u[d >> 2] = Q;
            return 0
        } catch (R) {
            return "undefined" !== typeof dc && R instanceof G || l(R), R.Bf
        }
    },
    x: function(a) {
        var b = Date.now();
        u[a >> 2] = b / 1E3 | 0;
        u[a + 4 >> 2] = b % 1E3 * 1E3 | 0;
        return 0
    },
    $: function(a) {
        J.activeTexture(a)
    },
    $a: function(a, b) {
        J.attachShader(M[a], P[b])
    },
    Za: function(a,
    b, c) {
        J.bindAttribLocation(M[a], b, A(c))
    },
    f: function(a, b) {
        J.bindBuffer(a, ed[b])
    },
    a: function(a, b) {
        J.bindFramebuffer(a, fd[b])
    },
    Ia: function(a, b) {
        J.bindRenderbuffer(a, gd[b])
    },
    d: function(a, b) {
        J.bindTexture(a, N[b])
    },
    ge: function(a) {
        J.blendEquation(a)
    },
    Xd: function(a, b) {
        J.blendEquationSeparate(a, b)
    },
    ea: function(a, b) {
        J.blendFunc(a, b)
    },
    re: function(a, b, c, d) {
        J.blendFuncSeparate(a, b, c, d)
    },
    e: function(a, b, c, d) {
        J.bufferData(a, c ? C.subarray(c, c + b) : b, d)
    },
    C: function(a) {
        return J.checkFramebufferStatus(a)
    },
    X: function(a) {
        J.clear(a)
    },
    Y: function(a, b, c, d) {
        J.clearColor(a, b, c, d)
    },
    Sa: function(a) {
        J.compileShader(P[a])
    },
    Va: function() {
        var a = md(M),
            b = J.createProgram();
        b.name = a;
        M[a] = b;
        return a
    },
    Ua: function(a) {
        var b = md(P);
        P[b] = J.createShader(a);
        return b
    },
    D: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2],
                e = ed[d];
            e && (J.deleteBuffer(e), e.name = 0, ed[d] = null)
        }
    },
    W: function(a, b) {
        for (var c = 0; c < a; ++c) {
            var d = u[b + 4 * c >> 2],
                e = fd[d];
            e && (J.deleteFramebuffer(e), e.name = 0, fd[d] = null)
        }
    },
    _: function(a) {
        if (a) {
            var b = M[a];
            b ? (J.deleteProgram(b), b.name = 0, M[a] =
            null, id[a] = null) : T(1281)
        }
    },
    Z: function(a) {
        if (a) {
            var b = P[a];
            b ? (J.deleteShader(b), P[a] = null) : T(1281)
        }
    },
    T: function(a, b) {
        for (var c = 0; c < a; c++) {
            var d = u[b + 4 * c >> 2],
                e = N[d];
            e && (J.deleteTexture(e), e.name = 0, N[d] = null)
        }
    },
    Cd: function(a) {
        J.depthFunc(a)
    },
    O: function(a) {
        J.depthMask(!!a)
    },
    ab: function(a, b) {
        J.detachShader(M[a], P[b])
    },
    l: function(a) {
        J.disable(a)
    },
    h: function(a) {
        J.disableVertexAttribArray(a)
    },
    Ma: function(a, b, c) {
        J.drawArrays(a, b, c)
    },
    H: function(a, b, c, d) {
        J.drawElements(a, b, c, d)
    },
    t: function(a) {
        J.enable(a)
    },
    k: function(a) {
        J.enableVertexAttribArray(a)
    },
    Ga: function(a, b, c, d) {
        J.framebufferRenderbuffer(a, b, c, gd[d])
    },
    U: function(a, b, c, d, e) {
        J.framebufferTexture2D(a, b, c, N[d], e)
    },
    A: function(a, b) {
        $d(a, b, "createBuffer", ed)
    },
    V: function(a, b) {
        $d(a, b, "createFramebuffer", fd)
    },
    Ja: function(a, b) {
        $d(a, b, "createRenderbuffer", gd)
    },
    Ka: function(a, b) {
        $d(a, b, "createTexture", N)
    },
    Oa: function(a) {
        J.generateMipmap(a)
    },
    bb: function(a, b) {
        return J.getAttribLocation(M[a], A(b))
    },
    Fa: function(a, b) {
        ce(a, b, 0)
    },
    Wa: function(a, b, c, d) {
        a = J.getProgramInfoLog(M[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? y(a, d, b) : 0;
        c && (u[c >> 2] = b)
    },
    Xa: function(a, b, c) {
        if (c)
            if (a >= dd)
                T(1281);
            else {
                var d = id[a];
                if (d)
                    if (35716 == b)
                        a = J.getProgramInfoLog(M[a]),
                        null === a && (a = "(unknown error)"),
                        u[c >> 2] = a.length + 1;
                    else if (35719 == b)
                        u[c >> 2] = d.Of;
                    else if (35722 == b) {
                        if (-1 == d.xf) {
                            a = M[a];
                            var e = J.getProgramParameter(a, 35721);
                            for (b = d.xf = 0; b < e; ++b)
                                d.xf = Math.max(d.xf, J.getActiveAttrib(a, b).name.length + 1)
                        }
                        u[c >> 2] = d.xf
                    } else if (35381 == b) {
                        if (-1 == d.yf)
                            for (a = M[a], e = J.getProgramParameter(a, 35382), b = d.yf = 0; b < e; ++b)
                                d.yf = Math.max(d.yf, J.getActiveUniformBlockName(a,
                                b).length + 1);
                        u[c >> 2] = d.yf
                    } else
                        u[c >> 2] = J.getProgramParameter(M[a], b);
                else
                    T(1282)
            }
        else
            T(1281)
    },
    Qa: function(a, b, c, d) {
        a = J.getShaderInfoLog(P[a]);
        null === a && (a = "(unknown error)");
        b = 0 < b && d ? y(a, d, b) : 0;
        c && (u[c >> 2] = b)
    },
    Ra: function(a, b, c) {
        c ? 35716 == b ? (a = J.getShaderInfoLog(P[a]), null === a && (a = "(unknown error)"), u[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = J.getShaderSource(P[a]), u[c >> 2] = a ? a.length + 1 : 0) : u[c >> 2] = J.getShaderParameter(P[a], b) : T(1281)
    },
    g: function(a) {
        if (jd[a])
            return jd[a];
        switch (a) {
        case 7939:
            var b = J.getSupportedExtensions() ||
            [];
            b = b.concat(b.map(function(d) {
                return "GL_" + d
            }));
            b = de(b.join(" "));
            break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
            (b = J.getParameter(a)) || T(1280);
            b = de(b);
            break;
        case 7938:
            b = de("OpenGL ES 2.0 (" + J.getParameter(7938) + ")");
            break;
        case 35724:
            b = J.getParameter(35724);
            var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
            null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
            b = de(b);
            break;
        default:
            return T(1280), 0
        }
        return jd[a] = b
    },
    Na: function(a, b, c) {
        c ? u[c >> 2] = J.getTexParameter(a,
        b) : T(1281)
    },
    cb: function(a, b) {
        b = A(b);
        var c = 0;
        if ("]" == b[b.length - 1]) {
            var d = b.lastIndexOf("[");
            c = "]" != b[d + 1] ? parseInt(b.slice(d + 1)) : 0;
            b = b.slice(0, d)
        }
        return (a = id[a] && id[a].ag[b]) && 0 <= c && c < a[0] ? a[1] + c : -1
    },
    ib: function(a, b, c) {
        ee(a, b, c, 2)
    },
    db: function(a, b, c) {
        ee(a, b, c, 0)
    },
    rd: function(a) {
        J.lineWidth(a)
    },
    Ya: function(a) {
        J.linkProgram(M[a]);
        qd(a)
    },
    c: function(a, b) {
        3317 == a && (kd = b);
        J.pixelStorei(a, b)
    },
    E: function(a, b, c, d, e, f, g) {
        (g = ge(f, e, c, d, g)) ? J.readPixels(a, b, c, d, e, f, g) : T(1280)
    },
    Ha: function(a, b, c, d) {
        J.renderbufferStorage(a,
        b, c, d)
    },
    G: function(a, b, c, d) {
        J.scissor(a, b, c, d)
    },
    Ta: function(a, b, c, d) {
        b = nd(b, c, d);
        J.shaderSource(P[a], b)
    },
    B: function(a, b, c, d, e, f, g, m, n) {
        J.texImage2D(a, b, c, d, e, f, g, m, n ? ge(m, g, d, e, n) : null)
    },
    j: function(a, b, c) {
        J.texParameteri(a, b, c)
    },
    p: function(a, b, c, d, e, f, g, m, n) {
        var p = null;
        n && (p = ge(m, g, e, f, n));
        J.texSubImage2D(a, b, c, d, e, f, g, m, p)
    },
    jb: function(a, b) {
        J.uniform1f(O[a], b)
    },
    Qb: function(a, b, c) {
        if (288 >= b)
            for (var d = Y[b - 1], e = 0; e < b; ++e)
                d[e] = w[c + 4 * e >> 2];
        else
            d = w.subarray(c >> 2, c + 4 * b >> 2);
        J.uniform1fv(O[a], d)
    },
    aa: function(a,
    b) {
        J.uniform1i(O[a], b)
    },
    hb: function(a, b, c) {
        if (288 >= b)
            for (var d = he[b - 1], e = 0; e < b; ++e)
                d[e] = u[c + 4 * e >> 2];
        else
            d = u.subarray(c >> 2, c + 4 * b >> 2);
        J.uniform1iv(O[a], d)
    },
    Fb: function(a, b, c) {
        if (144 >= b)
            for (var d = Y[2 * b - 1], e = 0; e < 2 * b; e += 2)
                d[e] = w[c + 4 * e >> 2],
                d[e + 1] = w[c + (4 * e + 4) >> 2];
        else
            d = w.subarray(c >> 2, c + 8 * b >> 2);
        J.uniform2fv(O[a], d)
    },
    gb: function(a, b, c) {
        if (144 >= b)
            for (var d = he[2 * b - 1], e = 0; e < 2 * b; e += 2)
                d[e] = u[c + 4 * e >> 2],
                d[e + 1] = u[c + (4 * e + 4) >> 2];
        else
            d = u.subarray(c >> 2, c + 8 * b >> 2);
        J.uniform2iv(O[a], d)
    },
    ub: function(a, b, c) {
        if (96 >= b)
            for (var d =
                Y[3 * b - 1], e = 0; e < 3 * b; e += 3)
                d[e] = w[c + 4 * e >> 2],
                d[e + 1] = w[c + (4 * e + 4) >> 2],
                d[e + 2] = w[c + (4 * e + 8) >> 2];
        else
            d = w.subarray(c >> 2, c + 12 * b >> 2);
        J.uniform3fv(O[a], d)
    },
    fb: function(a, b, c) {
        if (96 >= b)
            for (var d = he[3 * b - 1], e = 0; e < 3 * b; e += 3)
                d[e] = u[c + 4 * e >> 2],
                d[e + 1] = u[c + (4 * e + 4) >> 2],
                d[e + 2] = u[c + (4 * e + 8) >> 2];
        else
            d = u.subarray(c >> 2, c + 12 * b >> 2);
        J.uniform3iv(O[a], d)
    },
    kb: function(a, b, c) {
        if (72 >= b) {
            var d = Y[4 * b - 1],
                e = w;
            c >>= 2;
            for (var f = 0; f < 4 * b; f += 4) {
                var g = c + f;
                d[f] = e[g];
                d[f + 1] = e[g + 1];
                d[f + 2] = e[g + 2];
                d[f + 3] = e[g + 3]
            }
        } else
            d = w.subarray(c >> 2, c + 16 * b >> 2);
        J.uniform4fv(O[a],
        d)
    },
    eb: function(a, b, c) {
        if (72 >= b)
            for (var d = he[4 * b - 1], e = 0; e < 4 * b; e += 4)
                d[e] = u[c + 4 * e >> 2],
                d[e + 1] = u[c + (4 * e + 4) >> 2],
                d[e + 2] = u[c + (4 * e + 8) >> 2],
                d[e + 3] = u[c + (4 * e + 12) >> 2];
        else
            d = u.subarray(c >> 2, c + 16 * b >> 2);
        J.uniform4iv(O[a], d)
    },
    uc: function(a, b, c, d) {
        if (72 >= b)
            for (var e = Y[4 * b - 1], f = 0; f < 4 * b; f += 4)
                e[f] = w[d + 4 * f >> 2],
                e[f + 1] = w[d + (4 * f + 4) >> 2],
                e[f + 2] = w[d + (4 * f + 8) >> 2],
                e[f + 3] = w[d + (4 * f + 12) >> 2];
        else
            e = w.subarray(d >> 2, d + 16 * b >> 2);
        J.uniformMatrix2fv(O[a], !!c, e)
    },
    jc: function(a, b, c, d) {
        if (32 >= b)
            for (var e = Y[9 * b - 1], f = 0; f < 9 * b; f += 9)
                e[f] = w[d + 4 *
                f >> 2],
                e[f + 1] = w[d + (4 * f + 4) >> 2],
                e[f + 2] = w[d + (4 * f + 8) >> 2],
                e[f + 3] = w[d + (4 * f + 12) >> 2],
                e[f + 4] = w[d + (4 * f + 16) >> 2],
                e[f + 5] = w[d + (4 * f + 20) >> 2],
                e[f + 6] = w[d + (4 * f + 24) >> 2],
                e[f + 7] = w[d + (4 * f + 28) >> 2],
                e[f + 8] = w[d + (4 * f + 32) >> 2];
        else
            e = w.subarray(d >> 2, d + 36 * b >> 2);
        J.uniformMatrix3fv(O[a], !!c, e)
    },
    ca: function(a, b, c, d) {
        if (18 >= b) {
            var e = Y[16 * b - 1],
                f = w;
            d >>= 2;
            for (var g = 0; g < 16 * b; g += 16) {
                var m = d + g;
                e[g] = f[m];
                e[g + 1] = f[m + 1];
                e[g + 2] = f[m + 2];
                e[g + 3] = f[m + 3];
                e[g + 4] = f[m + 4];
                e[g + 5] = f[m + 5];
                e[g + 6] = f[m + 6];
                e[g + 7] = f[m + 7];
                e[g + 8] = f[m + 8];
                e[g + 9] = f[m + 9];
                e[g + 10] = f[m +
                10];
                e[g + 11] = f[m + 11];
                e[g + 12] = f[m + 12];
                e[g + 13] = f[m + 13];
                e[g + 14] = f[m + 14];
                e[g + 15] = f[m + 15]
            }
        } else
            e = w.subarray(d >> 2, d + 64 * b >> 2);
        J.uniformMatrix4fv(O[a], !!c, e)
    },
    I: function(a) {
        J.useProgram(M[a])
    },
    s: function(a, b) {
        J.vertexAttrib1f(a, b)
    },
    M: function(a, b, c) {
        J.vertexAttrib2f(a, b, c)
    },
    L: function(a, b, c, d) {
        J.vertexAttrib3f(a, b, c, d)
    },
    w: function(a, b, c, d, e) {
        J.vertexAttrib4f(a, b, c, d, e)
    },
    i: function(a, b, c, d, e, f) {
        J.vertexAttribPointer(a, b, c, !!d, e, f)
    },
    F: function(a, b, c, d) {
        J.viewport(a, b, c, d)
    },
    ba: function() {},
    m: function() {
        return 0
    },
    Ea: function() {
        return 0
    }
};
(function() {
    function a(e) {
        h.asm = e.exports;
        xa = h.asm.Ye;
        Ja = e = xa.buffer;
        h.HEAP8 = r = new Int8Array(e);
        h.HEAP16 = va = new Int16Array(e);
        h.HEAP32 = u = new Int32Array(e);
        h.HEAPU8 = C = new Uint8Array(e);
        h.HEAPU16 = Ka = new Uint16Array(e);
        h.HEAPU32 = La = new Uint32Array(e);
        h.HEAPF32 = w = new Float32Array(e);
        h.HEAPF64 = x = new Float64Array(e);
        E = h.asm.gf;
        Ta--;
        h.monitorRunDependencies && h.monitorRunDependencies(Ta);
        0 == Ta && (null !== Ua && (clearInterval(Ua), Ua = null), Va && (e = Va, Va = null, e()))
    }
    function b(e) {
        a(e.instance)
    }
    function c(e) {
        return ab().then(function(f) {
            return WebAssembly.instantiate(f,
            d)
        }).then(e, function(f) {
            q("failed to asynchronously prepare wasm: " + f);
            l(f)
        })
    }
    var d = {
        a: He
    };
    Ta++;
    h.monitorRunDependencies && h.monitorRunDependencies(Ta);
    if (h.instantiateWasm)
        try {
            return h.instantiateWasm(d, a)
        } catch (e) {
            return q("Module.instantiateWasm callback failed with error: " + e), !1
        }
    (function() {
        return ta || "function" !== typeof WebAssembly.instantiateStreaming || Ya() || Wa("file://") || "function" !== typeof fetch ? c(b) : fetch(Xa, {
            credentials: "same-origin"
        }).then(function(e) {
            return WebAssembly.instantiateStreaming(e,
            d).then(b, function(f) {
                q("wasm streaming compile failed: " + f);
                q("falling back to ArrayBuffer instantiation");
                return c(b)
            })
        })
    })();
    return {}
})();
var Ra = h.___wasm_call_ctors = function() {
    return (Ra = h.___wasm_call_ctors = h.asm.Ze).apply(null, arguments)
};
h._startStars = function() {
    return (h._startStars = h.asm._e).apply(null, arguments)
};
h._main = function() {
    return (h._main = h.asm.$e).apply(null, arguments)
};
var D = h._malloc = function() {
        return (D = h._malloc = h.asm.af).apply(null, arguments)
    },
    Fe = h.___errno_location = function() {
        return (Fe = h.___errno_location = h.asm.bf).apply(null, arguments)
    },
    Ge = h._emscripten_GetProcAddress = function() {
        return (Ge = h._emscripten_GetProcAddress = h.asm.cf).apply(null, arguments)
    },
    Ca = h.stackSave = function() {
        return (Ca = h.stackSave = h.asm.df).apply(null, arguments)
    },
    Da = h.stackRestore = function() {
        return (Da = h.stackRestore = h.asm.ef).apply(null, arguments)
    },
    Ba = h.stackAlloc = function() {
        return (Ba = h.stackAlloc =
        h.asm.ff).apply(null, arguments)
    };
h.dynCall_jiji = function() {
    return (h.dynCall_jiji = h.asm.hf).apply(null, arguments)
};
h.dynCall_ji = function() {
    return (h.dynCall_ji = h.asm.jf).apply(null, arguments)
};
h.ccall = Aa;
h.cwrap = function(a, b, c, d) {
    c = c || [];
    var e = c.every(function(f) {
        return "number" === f
    });
    return "string" !== b && e && !d ? za(a) : function() {
        return Aa(a, b, c, arguments, d)
    }
};
var Ie;
function pa(a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + a + ")";
    this.status = a
}
Va = function Je() {
    Ie || Ke();
    Ie || (Va = Je)
};
function Ke() {
    function a() {
        if (!Ie && (Ie = !0, h.calledRun = !0, !ya)) {
            h.noFSInit || $b || ($b = !0, Zb(), h.stdin = h.stdin, h.stdout = h.stdout, h.stderr = h.stderr, h.stdin ? bc("stdin", h.stdin) : Vb("/dev/tty", "/dev/stdin"), h.stdout ? bc("stdout", null, h.stdout) : Vb("/dev/tty", "/dev/stdout"), h.stderr ? bc("stderr", null, h.stderr) : Vb("/dev/tty1", "/dev/stderr"), Wb("/dev/stdin", 0), Wb("/dev/stdout", 1), Wb("/dev/stderr", 1));
            fb(Na);
            Db = !1;
            fb(Oa);
            if (h.onRuntimeInitialized)
                h.onRuntimeInitialized();
            if (Le) {
                var b = h._main;
                try {
                    var c = b(0, 0);
                    if (!noExitRuntime ||
                    0 !== c) {
                        if (!noExitRuntime) {
                            if (h.onExit)
                                h.onExit(c);
                            ya = !0
                        }
                        da(c, new pa(c))
                    }
                } catch (d) {
                    d instanceof pa || ("unwind" == d ? noExitRuntime = !0 : ((b = d) && "object" === typeof d && d.stack && (b = [d, d.stack]), q("exception thrown: " + b), da(1, d)))
                } finally {}
            }
            if (h.postRun)
                for ("function" == typeof h.postRun && (h.postRun = [h.postRun]); h.postRun.length;)
                    b = h.postRun.shift(),
                    Qa.unshift(b);
            fb(Qa)
        }
    }
    if (!(0 < Ta)) {
        if (h.preRun)
            for ("function" == typeof h.preRun && (h.preRun = [h.preRun]); h.preRun.length;)
                Sa();
        fb(Ma);
        0 < Ta || (h.setStatus ? (h.setStatus("Running..."),
        setTimeout(function() {
            setTimeout(function() {
                h.setStatus("")
            }, 1);
            a()
        }, 1)) : a())
    }
}
h.run = Ke;
if (h.preInit)
    for ("function" == typeof h.preInit && (h.preInit = [h.preInit]); 0 < h.preInit.length;)
        h.preInit.pop()();
var Le = !0;
h.noInitialRun && (Le = !1);
Ke();

