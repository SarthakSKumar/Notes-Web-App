(this["webpackJsonpkeeper-app"] = this["webpackJsonpkeeper-app"] || []).push([
    [0], {
        52: function (e, t, n) {
            e.exports = n(79)
        },
        79: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                c = n(8),
                r = n.n(c),
                l = n(21),
                u = n(38),
                i = n.n(u);
            var m = function () {
                return o.a.createElement("header", null, o.a.createElement("h1", null, " ", o.a.createElement(i.a, null), " Note App "))
            };
            var s = function () {
                var e = (new Date).getFullYear();
                return o.a.createElement("footer", null, o.a.createElement("p", null, "Sarthak S Kumar - ", "Satyam Kumar - ", "Sathish Kumar"))
            },
                f = n(43),
                d = n.n(f),
                p = n(93);
            var h = function (e) {
                return o.a.createElement("div", {
                    className: "note"
                }, o.a.createElement("h1", null, e.title), o.a.createElement("p", null, e.content), o.a.createElement(p.a, {
                    "aria-label": "delete",
                    onClick: function () {
                        return e.deleteNote(e.id)
                    }
                }, o.a.createElement(d.a, {
                    fontSize: "small"
                })))
            },
                E = n(24),
                v = n(28),
                g = n(44),
                b = n.n(g),
                O = n(95),
                j = n(94),
                w = n(16),
                k = n.n(w);
            var N = function (e) {
                var t = Object(a.useState)({
                    title: "",
                    content: ""
                }),
                    n = Object(l.a)(t, 2),
                    c = n[0],
                    r = n[1],
                    u = Object(a.useState)(!1),
                    i = Object(l.a)(u, 2),
                    m = i[0],
                    s = i[1];

                function f(e) {
                    var t = e.target,
                        n = t.name,
                        a = t.value;
                    r((function (e) {
                        return Object(v.a)(Object(v.a)({}, e), {}, Object(E.a)({}, n, a))
                    }))
                }
                return o.a.createElement("div", null, o.a.createElement("form", {
                    className: "create-note",
                    onSubmit: function (t) {
                        k.a.post("/api/", c).then((function () {
                            return e.updateNotes(c)
                        }), r({
                            title: "",
                            content: ""
                        })).catch((function (e) {
                            return console.log(e)
                        })), t.preventDefault(), r({
                            title: "",
                            content: ""
                        })
                    },
                    onMouseOver: function () {
                        s(!0)
                    },
                    onMouseOut: function () {
                        s(!1)
                    },
                    autoComplete: "off"
                }, o.a.createElement("input", {
                    name: "title",
                    placeholder: "Title",
                    onChange: f,
                    value: c.title,
                    hidden: !m
                }), o.a.createElement("textarea", {
                    name: "content",
                    placeholder: "Take a note...",
                    rows: m ? 3 : 1,
                    onChange: f,
                    value: c.content
                }), o.a.createElement(O.a, {
                    in: !!m
                }, o.a.createElement(j.a, {
                    type: "submit"
                }, o.a.createElement(b.a, null)))))
            };
            var S = function () {
                var e = Object(a.useState)({
                    notes: []
                }),
                    t = Object(l.a)(e, 2),
                    n = t[0],
                    c = t[1];

                function r() {
                    k.a.get("/api/").then((function (e) {
                        c({
                            notes: e.data
                        })
                    })).catch((function (e) {
                        return console.log(e)
                    }))
                }

                function u(e) {
                    k.a.delete("/api/" + e || !1).then((function () {
                        return r()
                    })).catch((function (e) {
                        return console.log(e)
                    }))
                }
                return Object(a.useEffect)((function () {
                    k.a.get("/api/").then((function (e) {
                        c({
                            notes: e.data
                        })
                    })).catch((function (e) {
                        return console.log(e)
                    }))
                }), []), o.a.createElement("div", null, o.a.createElement(m, null), o.a.createElement(N, {
                    updateNotes: r
                }), n.notes.map((function (e) {
                    return o.a.createElement(h, {
                        key: e._id,
                        id: e._id,
                        title: e.title,
                        content: e.content,
                        deleteNote: u
                    })
                })), o.a.createElement(s, null))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            r.a.render(o.a.createElement(o.a.StrictMode, null, o.a.createElement(S, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
                e.unregister()
            })).catch((function (e) {
                console.error(e.message)
            }))
        }
    },
    [
        [52, 1, 2]
    ]
]);