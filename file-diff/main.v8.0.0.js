(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [8792],
  {
    6031: (_t, He, F) => {
      "use strict";
      F.d(He, {
        L: () => a,
        a: () => l,
        b: () => j,
        c: () => se,
        d: () => G,
        g: () => Me,
      });
      const a = "ionViewWillEnter",
        l = "ionViewDidEnter",
        j = "ionViewWillLeave",
        se = "ionViewDidLeave",
        G = "ionViewWillUnload",
        Me = (he) =>
          he.classList.contains("ion-page")
            ? he
            : he.querySelector(
                ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
              ) || he;
    },
    9986: (_t, He, F) => {
      "use strict";
      F.d(He, { c: () => ae });
      var a = F(8476);
      let l;
      const se = (X, $e, Ne) => {
          const Ie = $e.startsWith("animation")
            ? ((X) => (
                void 0 === l &&
                  (l =
                    void 0 === X.style.animationName &&
                    void 0 !== X.style.webkitAnimationName
                      ? "-webkit-"
                      : ""),
                l
              ))(X)
            : "";
          X.style.setProperty(Ie + $e, Ne);
        },
        G = (X = [], $e) => {
          if (void 0 !== $e) {
            const Ne = Array.isArray($e) ? $e : [$e];
            return [...X, ...Ne];
          }
          return X;
        },
        ae = (X) => {
          let $e,
            Ne,
            Ie,
            ne,
            De,
            ve,
            _e,
            he,
            Y,
            Se,
            qe,
            ce = [],
            ue = [],
            ke = [],
            Oe = !1,
            we = {},
            Ye = [],
            Ae = [],
            te = {},
            fe = 0,
            xe = !1,
            Me = !1,
            Ce = !0,
            We = !1,
            Ge = !0,
            vt = !1;
          const jt = X,
            je = [],
            ee = [],
            K = [],
            J = [],
            re = [],
            be = [],
            ge = [],
            me = [],
            ft = [],
            Tt = [],
            lt = [],
            It =
              "function" == typeof AnimationEffect ||
              (void 0 !== a.w && "function" == typeof a.w.AnimationEffect),
            Rt =
              "function" == typeof Element &&
              "function" == typeof Element.prototype.animate &&
              It,
            Ot = () => lt,
            Ue = (Ve, ht) => {
              const Mt = ht.findIndex((yt) => yt.c === Ve);
              Mt > -1 && ht.splice(Mt, 1);
            },
            Fe = (Ve, ht) => (
              (null != ht && ht.oneTimeCallback ? ee : je).push({
                c: Ve,
                o: ht,
              }),
              qe
            ),
            Lt = () => {
              Rt &&
                (lt.forEach((Ve) => {
                  Ve.cancel();
                }),
                (lt.length = 0));
            },
            Xt = () => {
              be.forEach((Ve) => {
                null != Ve && Ve.parentNode && Ve.parentNode.removeChild(Ve);
              }),
                (be.length = 0);
            },
            kt = () => (void 0 !== De ? De : _e ? _e.getFill() : "both"),
            xt = () =>
              void 0 !== he
                ? he
                : void 0 !== ve
                ? ve
                : _e
                ? _e.getDirection()
                : "normal",
            Nt = () =>
              xe
                ? "linear"
                : void 0 !== Ie
                ? Ie
                : _e
                ? _e.getEasing()
                : "linear",
            Zt = () =>
              Me
                ? 0
                : void 0 !== Y
                ? Y
                : void 0 !== Ne
                ? Ne
                : _e
                ? _e.getDuration()
                : 0,
            zn = () => (void 0 !== ne ? ne : _e ? _e.getIterations() : 1),
            or = () =>
              void 0 !== Se ? Se : void 0 !== $e ? $e : _e ? _e.getDelay() : 0,
            Fn = () => {
              0 !== fe &&
                (fe--,
                0 === fe &&
                  ((() => {
                    ft.forEach((pn) => pn()), Tt.forEach((pn) => pn());
                    const Ve = Ce ? 1 : 0,
                      ht = Ye,
                      Mt = Ae,
                      yt = te;
                    J.forEach((pn) => {
                      const On = pn.classList;
                      ht.forEach((ir) => On.add(ir)),
                        Mt.forEach((ir) => On.remove(ir));
                      for (const ir in yt)
                        yt.hasOwnProperty(ir) && se(pn, ir, yt[ir]);
                    }),
                      (Y = void 0),
                      (he = void 0),
                      (Se = void 0),
                      je.forEach((pn) => pn.c(Ve, qe)),
                      ee.forEach((pn) => pn.c(Ve, qe)),
                      (ee.length = 0),
                      (Ge = !0),
                      Ce && (We = !0),
                      (Ce = !0);
                  })(),
                  _e && _e.animationFinish()));
            },
            zr = () => {
              (() => {
                ge.forEach((yt) => yt()), me.forEach((yt) => yt());
                const Ve = ue,
                  ht = ke,
                  Mt = we;
                J.forEach((yt) => {
                  const pn = yt.classList;
                  Ve.forEach((On) => pn.add(On)),
                    ht.forEach((On) => pn.remove(On));
                  for (const On in Mt)
                    Mt.hasOwnProperty(On) && se(yt, On, Mt[On]);
                });
              })(),
                ce.length > 0 &&
                  Rt &&
                  (J.forEach((Ve) => {
                    const ht = Ve.animate(ce, {
                      id: jt,
                      delay: or(),
                      duration: Zt(),
                      easing: Nt(),
                      iterations: zn(),
                      fill: kt(),
                      direction: xt(),
                    });
                    ht.pause(), lt.push(ht);
                  }),
                  lt.length > 0 &&
                    (lt[0].onfinish = () => {
                      Fn();
                    })),
                (Oe = !0);
            },
            yn = (Ve) => {
              (Ve = Math.min(Math.max(Ve, 0), 0.9999)),
                Rt &&
                  lt.forEach((ht) => {
                    (ht.currentTime =
                      ht.effect.getComputedTiming().delay + Zt() * Ve),
                      ht.pause();
                  });
            },
            Ct = (Ve) => {
              lt.forEach((ht) => {
                ht.effect.updateTiming({
                  delay: or(),
                  duration: Zt(),
                  easing: Nt(),
                  iterations: zn(),
                  fill: kt(),
                  direction: xt(),
                });
              }),
                void 0 !== Ve && yn(Ve);
            },
            qn = (Ve = !1, ht = !0, Mt) => (
              Ve &&
                re.forEach((yt) => {
                  yt.update(Ve, ht, Mt);
                }),
              Rt && Ct(Mt),
              qe
            ),
            ur = () => {
              Oe &&
                (Rt
                  ? lt.forEach((Ve) => {
                      Ve.pause();
                    })
                  : J.forEach((Ve) => {
                      se(Ve, "animation-play-state", "paused");
                    }),
                (vt = !0));
            },
            dr = (Ve) =>
              new Promise((ht) => {
                null != Ve &&
                  Ve.sync &&
                  ((Me = !0), Fe(() => (Me = !1), { oneTimeCallback: !0 })),
                  Oe || zr(),
                  We && (Rt && (yn(0), Ct()), (We = !1)),
                  Ge && ((fe = re.length + 1), (Ge = !1));
                const Mt = () => {
                    Ue(yt, ee), ht();
                  },
                  yt = () => {
                    Ue(Mt, K), ht();
                  };
                Fe(yt, { oneTimeCallback: !0 }),
                  ((Ve, ht) => {
                    K.push({ c: Ve, o: { oneTimeCallback: !0 } });
                  })(Mt),
                  re.forEach((pn) => {
                    pn.play();
                  }),
                  Rt
                    ? (lt.forEach((Ve) => {
                        Ve.play();
                      }),
                      (0 === ce.length || 0 === J.length) && Fn())
                    : Fn(),
                  (vt = !1);
              }),
            Or = (Ve, ht) => {
              const Mt = ce[0];
              return (
                void 0 === Mt || (void 0 !== Mt.offset && 0 !== Mt.offset)
                  ? (ce = [{ offset: 0, [Ve]: ht }, ...ce])
                  : (Mt[Ve] = ht),
                qe
              );
            };
          return (qe = {
            parentAnimation: _e,
            elements: J,
            childAnimations: re,
            id: jt,
            animationFinish: Fn,
            from: Or,
            to: (Ve, ht) => {
              const Mt = ce[ce.length - 1];
              return (
                void 0 === Mt || (void 0 !== Mt.offset && 1 !== Mt.offset)
                  ? (ce = [...ce, { offset: 1, [Ve]: ht }])
                  : (Mt[Ve] = ht),
                qe
              );
            },
            fromTo: (Ve, ht, Mt) => Or(Ve, ht).to(Ve, Mt),
            parent: (Ve) => ((_e = Ve), qe),
            play: dr,
            pause: () => (
              re.forEach((Ve) => {
                Ve.pause();
              }),
              ur(),
              qe
            ),
            stop: () => {
              re.forEach((Ve) => {
                Ve.stop();
              }),
                Oe && (Lt(), (Oe = !1)),
                (xe = !1),
                (Me = !1),
                (Ge = !0),
                (he = void 0),
                (Y = void 0),
                (Se = void 0),
                (fe = 0),
                (We = !1),
                (Ce = !0),
                (vt = !1),
                K.forEach((Ve) => Ve.c(0, qe)),
                (K.length = 0);
            },
            destroy: (Ve) => (
              re.forEach((ht) => {
                ht.destroy(Ve);
              }),
              ((Ve) => {
                Lt(), Ve && Xt();
              })(Ve),
              (J.length = 0),
              (re.length = 0),
              (ce.length = 0),
              (je.length = 0),
              (ee.length = 0),
              (Oe = !1),
              (Ge = !0),
              qe
            ),
            keyframes: (Ve) => {
              const ht = ce !== Ve;
              return (
                (ce = Ve),
                ht &&
                  ((Ve) => {
                    Rt &&
                      Ot().forEach((ht) => {
                        const Mt = ht.effect;
                        if (Mt.setKeyframes) Mt.setKeyframes(Ve);
                        else {
                          const yt = new KeyframeEffect(
                            Mt.target,
                            Ve,
                            Mt.getTiming()
                          );
                          ht.effect = yt;
                        }
                      });
                  })(ce),
                qe
              );
            },
            addAnimation: (Ve) => {
              if (null != Ve)
                if (Array.isArray(Ve))
                  for (const ht of Ve) ht.parent(qe), re.push(ht);
                else Ve.parent(qe), re.push(Ve);
              return qe;
            },
            addElement: (Ve) => {
              if (null != Ve)
                if (1 === Ve.nodeType) J.push(Ve);
                else if (Ve.length >= 0)
                  for (let ht = 0; ht < Ve.length; ht++) J.push(Ve[ht]);
                else console.error("Invalid addElement value");
              return qe;
            },
            update: qn,
            fill: (Ve) => ((De = Ve), qn(!0), qe),
            direction: (Ve) => ((ve = Ve), qn(!0), qe),
            iterations: (Ve) => ((ne = Ve), qn(!0), qe),
            duration: (Ve) => (
              !Rt && 0 === Ve && (Ve = 1), (Ne = Ve), qn(!0), qe
            ),
            easing: (Ve) => ((Ie = Ve), qn(!0), qe),
            delay: (Ve) => (($e = Ve), qn(!0), qe),
            getWebAnimations: Ot,
            getKeyframes: () => ce,
            getFill: kt,
            getDirection: xt,
            getDelay: or,
            getIterations: zn,
            getEasing: Nt,
            getDuration: Zt,
            afterAddRead: (Ve) => (ft.push(Ve), qe),
            afterAddWrite: (Ve) => (Tt.push(Ve), qe),
            afterClearStyles: (Ve = []) => {
              for (const ht of Ve) te[ht] = "";
              return qe;
            },
            afterStyles: (Ve = {}) => ((te = Ve), qe),
            afterRemoveClass: (Ve) => ((Ae = G(Ae, Ve)), qe),
            afterAddClass: (Ve) => ((Ye = G(Ye, Ve)), qe),
            beforeAddRead: (Ve) => (ge.push(Ve), qe),
            beforeAddWrite: (Ve) => (me.push(Ve), qe),
            beforeClearStyles: (Ve = []) => {
              for (const ht of Ve) we[ht] = "";
              return qe;
            },
            beforeStyles: (Ve = {}) => ((we = Ve), qe),
            beforeRemoveClass: (Ve) => ((ke = G(ke, Ve)), qe),
            beforeAddClass: (Ve) => ((ue = G(ue, Ve)), qe),
            onFinish: Fe,
            isRunning: () => 0 !== fe && !vt,
            progressStart: (Ve = !1, ht) => (
              re.forEach((Mt) => {
                Mt.progressStart(Ve, ht);
              }),
              ur(),
              (xe = Ve),
              Oe || zr(),
              qn(!1, !0, ht),
              qe
            ),
            progressStep: (Ve) => (
              re.forEach((ht) => {
                ht.progressStep(Ve);
              }),
              yn(Ve),
              qe
            ),
            progressEnd: (Ve, ht, Mt) => (
              (xe = !1),
              re.forEach((yt) => {
                yt.progressEnd(Ve, ht, Mt);
              }),
              void 0 !== Mt && (Y = Mt),
              (We = !1),
              (Ce = !0),
              0 === Ve
                ? ((he = "reverse" === xt() ? "normal" : "reverse"),
                  "reverse" === he && (Ce = !1),
                  Rt
                    ? (qn(), yn(1 - ht))
                    : ((Se = (1 - ht) * Zt() * -1), qn(!1, !1)))
                : 1 === Ve &&
                  (Rt ? (qn(), yn(ht)) : ((Se = ht * Zt() * -1), qn(!1, !1))),
              void 0 !== Ve && !_e && dr(),
              qe
            ),
          });
        };
    },
    464: (_t, He, F) => {
      "use strict";
      F.d(He, { E: () => Ie, a: () => a, s: () => $e });
      const a = (ne) => {
          try {
            if (ne instanceof X) return ne.value;
            if (!se() || "string" != typeof ne || "" === ne) return ne;
            if (ne.includes("onload=")) return "";
            const De = document.createDocumentFragment(),
              ve = document.createElement("div");
            De.appendChild(ve),
              (ve.innerHTML = ne),
              ae.forEach((Oe) => {
                const _e = De.querySelectorAll(Oe);
                for (let we = _e.length - 1; we >= 0; we--) {
                  const Ye = _e[we];
                  Ye.parentNode
                    ? Ye.parentNode.removeChild(Ye)
                    : De.removeChild(Ye);
                  const Ae = j(Ye);
                  for (let te = 0; te < Ae.length; te++) l(Ae[te]);
                }
              });
            const ce = j(De);
            for (let Oe = 0; Oe < ce.length; Oe++) l(ce[Oe]);
            const ue = document.createElement("div");
            ue.appendChild(De);
            const ke = ue.querySelector("div");
            return null !== ke ? ke.innerHTML : ue.innerHTML;
          } catch (De) {
            return console.error(De), "";
          }
        },
        l = (ne) => {
          if (ne.nodeType && 1 !== ne.nodeType) return;
          if (
            typeof NamedNodeMap < "u" &&
            !(ne.attributes instanceof NamedNodeMap)
          )
            return void ne.remove();
          for (let ve = ne.attributes.length - 1; ve >= 0; ve--) {
            const ce = ne.attributes.item(ve),
              ue = ce.name;
            if (!G.includes(ue.toLowerCase())) {
              ne.removeAttribute(ue);
              continue;
            }
            const ke = ce.value,
              Oe = ne[ue];
            ((null != ke && ke.toLowerCase().includes("javascript:")) ||
              (null != Oe && Oe.toLowerCase().includes("javascript:"))) &&
              ne.removeAttribute(ue);
          }
          const De = j(ne);
          for (let ve = 0; ve < De.length; ve++) l(De[ve]);
        },
        j = (ne) => (null != ne.children ? ne.children : ne.childNodes),
        se = () => {
          var ne;
          const De = window,
            ve =
              null === (ne = null == De ? void 0 : De.Ionic) || void 0 === ne
                ? void 0
                : ne.config;
          return (
            !ve ||
            (ve.get
              ? ve.get("sanitizerEnabled", !0)
              : !0 === ve.sanitizerEnabled || void 0 === ve.sanitizerEnabled)
          );
        },
        G = ["class", "id", "href", "src", "name", "slot"],
        ae = ["script", "style", "iframe", "meta", "link", "object", "embed"];
      class X {
        constructor(De) {
          this.value = De;
        }
      }
      const $e = (ne) => {
          const De = window,
            ve = De.Ionic;
          if (!ve || !ve.config || "Object" === ve.config.constructor.name)
            return (
              (De.Ionic = De.Ionic || {}),
              (De.Ionic.config = Object.assign(
                Object.assign({}, De.Ionic.config),
                ne
              )),
              De.Ionic.config
            );
        },
        Ie = !1;
    },
    8621: (_t, He, F) => {
      "use strict";
      F.d(He, { C: () => G, a: () => j, d: () => se });
      var a = F(467),
        l = F(4920);
      const j = (function () {
          var ae = (0, a.A)(function* (X, $e, Ne, Ie, ne, De) {
            var ve;
            if (X) return X.attachViewToDom($e, Ne, ne, Ie);
            if (!(De || "string" == typeof Ne || Ne instanceof HTMLElement))
              throw new Error("framework delegate is missing");
            const ce =
              "string" == typeof Ne
                ? null === (ve = $e.ownerDocument) || void 0 === ve
                  ? void 0
                  : ve.createElement(Ne)
                : Ne;
            return (
              Ie && Ie.forEach((ue) => ce.classList.add(ue)),
              ne && Object.assign(ce, ne),
              $e.appendChild(ce),
              yield new Promise((ue) => (0, l.c)(ce, ue)),
              ce
            );
          });
          return function ($e, Ne, Ie, ne, De, ve) {
            return ae.apply(this, arguments);
          };
        })(),
        se = (ae, X) => {
          if (X) {
            if (ae) return ae.removeViewFromDom(X.parentElement, X);
            X.remove();
          }
          return Promise.resolve();
        },
        G = () => {
          let ae, X;
          return {
            attachViewToDom: (function () {
              var Ie = (0, a.A)(function* (ne, De, ve = {}, ce = []) {
                var ue, ke;
                let Oe;
                if (((ae = ne), De)) {
                  const we =
                    "string" == typeof De
                      ? null === (ue = ae.ownerDocument) || void 0 === ue
                        ? void 0
                        : ue.createElement(De)
                      : De;
                  ce.forEach((Ye) => we.classList.add(Ye)),
                    Object.assign(we, ve),
                    ae.appendChild(we),
                    (Oe = we),
                    yield new Promise((Ye) => (0, l.c)(we, Ye));
                } else if (
                  ae.children.length > 0 &&
                  ("ION-MODAL" === ae.tagName ||
                    "ION-POPOVER" === ae.tagName) &&
                  !(Oe = ae.children[0]).classList.contains("ion-delegate-host")
                ) {
                  const Ye =
                    null === (ke = ae.ownerDocument) || void 0 === ke
                      ? void 0
                      : ke.createElement("div");
                  Ye.classList.add("ion-delegate-host"),
                    ce.forEach((Ae) => Ye.classList.add(Ae)),
                    Ye.append(...ae.children),
                    ae.appendChild(Ye),
                    (Oe = Ye);
                }
                const _e = document.querySelector("ion-app") || document.body;
                return (
                  (X = document.createComment("ionic teleport")),
                  ae.parentNode.insertBefore(X, ae),
                  _e.appendChild(ae),
                  null != Oe ? Oe : ae
                );
              });
              return function (De, ve) {
                return Ie.apply(this, arguments);
              };
            })(),
            removeViewFromDom: () => (
              ae && X && (X.parentNode.insertBefore(ae, X), X.remove()),
              Promise.resolve()
            ),
          };
        };
    },
    1970: (_t, He, F) => {
      "use strict";
      F.d(He, { B: () => se, G: () => G });
      class l {
        constructor(X, $e, Ne, Ie, ne) {
          (this.id = $e),
            (this.name = Ne),
            (this.disableScroll = ne),
            (this.priority = 1e6 * Ie + $e),
            (this.ctrl = X);
        }
        canStart() {
          return !!this.ctrl && this.ctrl.canStart(this.name);
        }
        start() {
          return (
            !!this.ctrl && this.ctrl.start(this.name, this.id, this.priority)
          );
        }
        capture() {
          if (!this.ctrl) return !1;
          const X = this.ctrl.capture(this.name, this.id, this.priority);
          return X && this.disableScroll && this.ctrl.disableScroll(this.id), X;
        }
        release() {
          this.ctrl &&
            (this.ctrl.release(this.id),
            this.disableScroll && this.ctrl.enableScroll(this.id));
        }
        destroy() {
          this.release(), (this.ctrl = void 0);
        }
      }
      class j {
        constructor(X, $e, Ne, Ie) {
          (this.id = $e),
            (this.disable = Ne),
            (this.disableScroll = Ie),
            (this.ctrl = X);
        }
        block() {
          if (this.ctrl) {
            if (this.disable)
              for (const X of this.disable)
                this.ctrl.disableGesture(X, this.id);
            this.disableScroll && this.ctrl.disableScroll(this.id);
          }
        }
        unblock() {
          if (this.ctrl) {
            if (this.disable)
              for (const X of this.disable) this.ctrl.enableGesture(X, this.id);
            this.disableScroll && this.ctrl.enableScroll(this.id);
          }
        }
        destroy() {
          this.unblock(), (this.ctrl = void 0);
        }
      }
      const se = "backdrop-no-scroll",
        G = new (class a {
          constructor() {
            (this.gestureId = 0),
              (this.requestedStart = new Map()),
              (this.disabledGestures = new Map()),
              (this.disabledScroll = new Set());
          }
          createGesture(X) {
            var $e;
            return new l(
              this,
              this.newID(),
              X.name,
              null !== ($e = X.priority) && void 0 !== $e ? $e : 0,
              !!X.disableScroll
            );
          }
          createBlocker(X = {}) {
            return new j(this, this.newID(), X.disable, !!X.disableScroll);
          }
          start(X, $e, Ne) {
            return this.canStart(X)
              ? (this.requestedStart.set($e, Ne), !0)
              : (this.requestedStart.delete($e), !1);
          }
          capture(X, $e, Ne) {
            if (!this.start(X, $e, Ne)) return !1;
            const Ie = this.requestedStart;
            let ne = -1e4;
            if (
              (Ie.forEach((De) => {
                ne = Math.max(ne, De);
              }),
              ne === Ne)
            ) {
              (this.capturedId = $e), Ie.clear();
              const De = new CustomEvent("ionGestureCaptured", {
                detail: { gestureName: X },
              });
              return document.dispatchEvent(De), !0;
            }
            return Ie.delete($e), !1;
          }
          release(X) {
            this.requestedStart.delete(X),
              this.capturedId === X && (this.capturedId = void 0);
          }
          disableGesture(X, $e) {
            let Ne = this.disabledGestures.get(X);
            void 0 === Ne &&
              ((Ne = new Set()), this.disabledGestures.set(X, Ne)),
              Ne.add($e);
          }
          enableGesture(X, $e) {
            const Ne = this.disabledGestures.get(X);
            void 0 !== Ne && Ne.delete($e);
          }
          disableScroll(X) {
            this.disabledScroll.add(X),
              1 === this.disabledScroll.size && document.body.classList.add(se);
          }
          enableScroll(X) {
            this.disabledScroll.delete(X),
              0 === this.disabledScroll.size &&
                document.body.classList.remove(se);
          }
          canStart(X) {
            return !(void 0 !== this.capturedId || this.isDisabled(X));
          }
          isCaptured() {
            return void 0 !== this.capturedId;
          }
          isScrollDisabled() {
            return this.disabledScroll.size > 0;
          }
          isDisabled(X) {
            const $e = this.disabledGestures.get(X);
            return !!($e && $e.size > 0);
          }
          newID() {
            return this.gestureId++, this.gestureId;
          }
        })();
    },
    2723: (_t, He, F) => {
      "use strict";
      F.r(He),
        F.d(He, {
          MENU_BACK_BUTTON_PRIORITY: () => Ne,
          OVERLAY_BACK_BUTTON_PRIORITY: () => $e,
          blockHardwareBackButton: () => ae,
          shouldUseCloseWatcher: () => G,
          startHardwareBackButton: () => X,
        });
      var a = F(467),
        l = F(8476),
        j = F(694);
      F(8737);
      const G = () =>
          j.c.get("experimentalCloseWatcher", !1) &&
          void 0 !== l.w &&
          "CloseWatcher" in l.w,
        ae = () => {
          document.addEventListener("backbutton", () => {});
        },
        X = () => {
          const Ie = document;
          let ne = !1;
          const De = () => {
            if (ne) return;
            let ve = 0,
              ce = [];
            const ue = new CustomEvent("ionBackButton", {
              bubbles: !1,
              detail: {
                register(_e, we) {
                  ce.push({ priority: _e, handler: we, id: ve++ });
                },
              },
            });
            Ie.dispatchEvent(ue);
            const ke = (function () {
                var _e = (0, a.A)(function* (we) {
                  try {
                    if (null != we && we.handler) {
                      const Ye = we.handler(Oe);
                      null != Ye && (yield Ye);
                    }
                  } catch (Ye) {
                    console.error(Ye);
                  }
                });
                return function (Ye) {
                  return _e.apply(this, arguments);
                };
              })(),
              Oe = () => {
                if (ce.length > 0) {
                  let _e = {
                    priority: Number.MIN_SAFE_INTEGER,
                    handler: () => {},
                    id: -1,
                  };
                  ce.forEach((we) => {
                    we.priority >= _e.priority && (_e = we);
                  }),
                    (ne = !0),
                    (ce = ce.filter((we) => we.id !== _e.id)),
                    ke(_e).then(() => (ne = !1));
                }
              };
            Oe();
          };
          if (G()) {
            let ve;
            const ce = () => {
              null == ve || ve.destroy(),
                (ve = new l.w.CloseWatcher()),
                (ve.onclose = () => {
                  De(), ce();
                });
            };
            ce();
          } else Ie.addEventListener("backbutton", De);
        },
        $e = 100,
        Ne = 99;
    },
    4920: (_t, He, F) => {
      "use strict";
      F.d(He, {
        a: () => $e,
        b: () => Ne,
        c: () => j,
        d: () => ce,
        e: () => we,
        f: () => ve,
        g: () => Ie,
        h: () => G,
        i: () => X,
        j: () => ue,
        k: () => se,
        l: () => De,
        m: () => ke,
        n: () => _e,
        o: () => Ye,
        p: () => Oe,
        r: () => ne,
        s: () => Ae,
        t: () => a,
      });
      const a = (te, fe = 0) =>
          new Promise((xe) => {
            l(te, fe, xe);
          }),
        l = (te, fe = 0, xe) => {
          let Me, he;
          const Y = { passive: !0 },
            Ce = () => {
              Me && Me();
            },
            We = (Ge) => {
              (void 0 === Ge || te === Ge.target) && (Ce(), xe(Ge));
            };
          return (
            te &&
              (te.addEventListener("webkitTransitionEnd", We, Y),
              te.addEventListener("transitionend", We, Y),
              (he = setTimeout(We, fe + 500)),
              (Me = () => {
                void 0 !== he && (clearTimeout(he), (he = void 0)),
                  te.removeEventListener("webkitTransitionEnd", We, Y),
                  te.removeEventListener("transitionend", We, Y);
              })),
            Ce
          );
        },
        j = (te, fe) => {
          te.componentOnReady
            ? te.componentOnReady().then((xe) => fe(xe))
            : ne(() => fe(te));
        },
        se = (te) => void 0 !== te.componentOnReady,
        G = (te, fe = []) => {
          const xe = {};
          return (
            fe.forEach((Me) => {
              te.hasAttribute(Me) &&
                (null !== te.getAttribute(Me) && (xe[Me] = te.getAttribute(Me)),
                te.removeAttribute(Me));
            }),
            xe
          );
        },
        ae = [
          "role",
          "aria-activedescendant",
          "aria-atomic",
          "aria-autocomplete",
          "aria-braillelabel",
          "aria-brailleroledescription",
          "aria-busy",
          "aria-checked",
          "aria-colcount",
          "aria-colindex",
          "aria-colindextext",
          "aria-colspan",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-description",
          "aria-details",
          "aria-disabled",
          "aria-errormessage",
          "aria-expanded",
          "aria-flowto",
          "aria-haspopup",
          "aria-hidden",
          "aria-invalid",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-level",
          "aria-live",
          "aria-multiline",
          "aria-multiselectable",
          "aria-orientation",
          "aria-owns",
          "aria-placeholder",
          "aria-posinset",
          "aria-pressed",
          "aria-readonly",
          "aria-relevant",
          "aria-required",
          "aria-roledescription",
          "aria-rowcount",
          "aria-rowindex",
          "aria-rowindextext",
          "aria-rowspan",
          "aria-selected",
          "aria-setsize",
          "aria-sort",
          "aria-valuemax",
          "aria-valuemin",
          "aria-valuenow",
          "aria-valuetext",
        ],
        X = (te, fe) => {
          let xe = ae;
          return (
            fe && fe.length > 0 && (xe = xe.filter((Me) => !fe.includes(Me))),
            G(te, xe)
          );
        },
        $e = (te, fe, xe, Me) => {
          var he;
          if (typeof window < "u") {
            const Y = window,
              Se =
                null === (he = null == Y ? void 0 : Y.Ionic) || void 0 === he
                  ? void 0
                  : he.config;
            if (Se) {
              const Ce = Se.get("_ael");
              if (Ce) return Ce(te, fe, xe, Me);
              if (Se._ael) return Se._ael(te, fe, xe, Me);
            }
          }
          return te.addEventListener(fe, xe, Me);
        },
        Ne = (te, fe, xe, Me) => {
          var he;
          if (typeof window < "u") {
            const Y = window,
              Se =
                null === (he = null == Y ? void 0 : Y.Ionic) || void 0 === he
                  ? void 0
                  : he.config;
            if (Se) {
              const Ce = Se.get("_rel");
              if (Ce) return Ce(te, fe, xe, Me);
              if (Se._rel) return Se._rel(te, fe, xe, Me);
            }
          }
          return te.removeEventListener(fe, xe, Me);
        },
        Ie = (te, fe = te) => te.shadowRoot || fe,
        ne = (te) =>
          "function" == typeof __zone_symbol__requestAnimationFrame
            ? __zone_symbol__requestAnimationFrame(te)
            : "function" == typeof requestAnimationFrame
            ? requestAnimationFrame(te)
            : setTimeout(te),
        De = (te) => !!te.shadowRoot && !!te.attachShadow,
        ve = (te) => {
          if ((te.focus(), te.classList.contains("ion-focusable"))) {
            const fe = te.closest("ion-app");
            fe && fe.setFocus([te]);
          }
        },
        ce = (te, fe, xe, Me, he) => {
          if (te || De(fe)) {
            let Y = fe.querySelector("input.aux-input");
            Y ||
              ((Y = fe.ownerDocument.createElement("input")),
              (Y.type = "hidden"),
              Y.classList.add("aux-input"),
              fe.appendChild(Y)),
              (Y.disabled = he),
              (Y.name = xe),
              (Y.value = Me || "");
          }
        },
        ue = (te, fe, xe) => Math.max(te, Math.min(fe, xe)),
        ke = (te, fe) => {
          if (!te) {
            const xe = "ASSERT: " + fe;
            throw (console.error(xe), new Error(xe));
          }
        },
        Oe = (te) => {
          if (te) {
            const fe = te.changedTouches;
            if (fe && fe.length > 0) {
              const xe = fe[0];
              return { x: xe.clientX, y: xe.clientY };
            }
            if (void 0 !== te.pageX) return { x: te.pageX, y: te.pageY };
          }
          return { x: 0, y: 0 };
        },
        _e = (te) => {
          const fe = "rtl" === document.dir;
          switch (te) {
            case "start":
              return fe;
            case "end":
              return !fe;
            default:
              throw new Error(
                `"${te}" is not a valid value for [side]. Use "start" or "end" instead.`
              );
          }
        },
        we = (te, fe) => {
          const xe = te._original || te;
          return { _original: te, emit: Ye(xe.emit.bind(xe), fe) };
        },
        Ye = (te, fe = 0) => {
          let xe;
          return (...Me) => {
            clearTimeout(xe), (xe = setTimeout(te, fe, ...Me));
          };
        },
        Ae = (te, fe) => {
          if ((null != te || (te = {}), null != fe || (fe = {}), te === fe))
            return !0;
          const xe = Object.keys(te);
          if (xe.length !== Object.keys(fe).length) return !1;
          for (const Me of xe) if (!(Me in fe) || te[Me] !== fe[Me]) return !1;
          return !0;
        };
    },
    8607: (_t, He, F) => {
      "use strict";
      F.r(He),
        F.d(He, { GESTURE_CONTROLLER: () => a.G, createGesture: () => Ne });
      var a = F(1970);
      const l = (ve, ce, ue, ke) => {
          const Oe = j(ve)
            ? { capture: !!ke.capture, passive: !!ke.passive }
            : !!ke.capture;
          let _e, we;
          return (
            ve.__zone_symbol__addEventListener
              ? ((_e = "__zone_symbol__addEventListener"),
                (we = "__zone_symbol__removeEventListener"))
              : ((_e = "addEventListener"), (we = "removeEventListener")),
            ve[_e](ce, ue, Oe),
            () => {
              ve[we](ce, ue, Oe);
            }
          );
        },
        j = (ve) => {
          if (void 0 === se)
            try {
              const ce = Object.defineProperty({}, "passive", {
                get: () => {
                  se = !0;
                },
              });
              ve.addEventListener("optsTest", () => {}, ce);
            } catch {
              se = !1;
            }
          return !!se;
        };
      let se;
      const X = (ve) => (ve instanceof Document ? ve : ve.ownerDocument),
        Ne = (ve) => {
          let ce = !1,
            ue = !1,
            ke = !0,
            Oe = !1;
          const _e = Object.assign(
              {
                disableScroll: !1,
                direction: "x",
                gesturePriority: 0,
                passive: !0,
                maxAngle: 40,
                threshold: 10,
              },
              ve
            ),
            we = _e.canStart,
            Ye = _e.onWillStart,
            Ae = _e.onStart,
            te = _e.onEnd,
            fe = _e.notCaptured,
            xe = _e.onMove,
            Me = _e.threshold,
            he = _e.passive,
            Y = _e.blurOnStart,
            Se = {
              type: "pan",
              startX: 0,
              startY: 0,
              startTime: 0,
              currentX: 0,
              currentY: 0,
              velocityX: 0,
              velocityY: 0,
              deltaX: 0,
              deltaY: 0,
              currentTime: 0,
              event: void 0,
              data: void 0,
            },
            Ce = ((ve, ce, ue) => {
              const ke = ue * (Math.PI / 180),
                Oe = "x" === ve,
                _e = Math.cos(ke),
                we = ce * ce;
              let Ye = 0,
                Ae = 0,
                te = !1,
                fe = 0;
              return {
                start(xe, Me) {
                  (Ye = xe), (Ae = Me), (fe = 0), (te = !0);
                },
                detect(xe, Me) {
                  if (!te) return !1;
                  const he = xe - Ye,
                    Y = Me - Ae,
                    Se = he * he + Y * Y;
                  if (Se < we) return !1;
                  const Ce = Math.sqrt(Se),
                    We = (Oe ? he : Y) / Ce;
                  return (fe = We > _e ? 1 : We < -_e ? -1 : 0), (te = !1), !0;
                },
                isGesture: () => 0 !== fe,
                getDirection: () => fe,
              };
            })(_e.direction, _e.threshold, _e.maxAngle),
            We = a.G.createGesture({
              name: ve.gestureName,
              priority: ve.gesturePriority,
              disableScroll: ve.disableScroll,
            }),
            vt = () => {
              ce && ((Oe = !1), xe && xe(Se));
            },
            jt = () =>
              !!We.capture() &&
              ((ce = !0),
              (ke = !1),
              (Se.startX = Se.currentX),
              (Se.startY = Se.currentY),
              (Se.startTime = Se.currentTime),
              Ye ? Ye(Se).then(ee) : ee(),
              !0),
            ee = () => {
              Y &&
                (() => {
                  if (typeof document < "u") {
                    const ge = document.activeElement;
                    null != ge && ge.blur && ge.blur();
                  }
                })(),
                Ae && Ae(Se),
                (ke = !0);
            },
            K = () => {
              (ce = !1), (ue = !1), (Oe = !1), (ke = !0), We.release();
            },
            J = (ge) => {
              const me = ce,
                ft = ke;
              if ((K(), ft)) {
                if ((Ie(Se, ge), me)) return void (te && te(Se));
                fe && fe(Se);
              }
            },
            re = ((ve, ce, ue, ke, Oe) => {
              let _e,
                we,
                Ye,
                Ae,
                te,
                fe,
                xe,
                Me = 0;
              const he = (je) => {
                  (Me = Date.now() + 2e3),
                    ce(je) &&
                      (!we && ue && (we = l(ve, "touchmove", ue, Oe)),
                      Ye || (Ye = l(je.target, "touchend", Se, Oe)),
                      Ae || (Ae = l(je.target, "touchcancel", Se, Oe)));
                },
                Y = (je) => {
                  Me > Date.now() ||
                    (ce(je) &&
                      (!fe && ue && (fe = l(X(ve), "mousemove", ue, Oe)),
                      xe || (xe = l(X(ve), "mouseup", Ce, Oe))));
                },
                Se = (je) => {
                  We(), ke && ke(je);
                },
                Ce = (je) => {
                  Ge(), ke && ke(je);
                },
                We = () => {
                  we && we(), Ye && Ye(), Ae && Ae(), (we = Ye = Ae = void 0);
                },
                Ge = () => {
                  fe && fe(), xe && xe(), (fe = xe = void 0);
                },
                qe = () => {
                  We(), Ge();
                },
                vt = (je = !0) => {
                  je
                    ? (_e || (_e = l(ve, "touchstart", he, Oe)),
                      te || (te = l(ve, "mousedown", Y, Oe)))
                    : (_e && _e(), te && te(), (_e = te = void 0), qe());
                };
              return {
                enable: vt,
                stop: qe,
                destroy: () => {
                  vt(!1), (ke = ue = ce = void 0);
                },
              };
            })(
              _e.el,
              (ge) => {
                const me = De(ge);
                return (
                  !(
                    ue ||
                    !ke ||
                    (ne(ge, Se),
                    (Se.startX = Se.currentX),
                    (Se.startY = Se.currentY),
                    (Se.startTime = Se.currentTime = me),
                    (Se.velocityX = Se.velocityY = Se.deltaX = Se.deltaY = 0),
                    (Se.event = ge),
                    we && !1 === we(Se)) ||
                    (We.release(), !We.start())
                  ) &&
                  ((ue = !0),
                  0 === Me ? jt() : (Ce.start(Se.startX, Se.startY), !0))
                );
              },
              (ge) => {
                ce
                  ? !Oe &&
                    ke &&
                    ((Oe = !0), Ie(Se, ge), requestAnimationFrame(vt))
                  : (Ie(Se, ge),
                    Ce.detect(Se.currentX, Se.currentY) &&
                      (!Ce.isGesture() || !jt()) &&
                      be());
              },
              J,
              { capture: !1, passive: he }
            ),
            be = () => {
              K(), re.stop(), fe && fe(Se);
            };
          return {
            enable(ge = !0) {
              ge || (ce && J(void 0), K()), re.enable(ge);
            },
            destroy() {
              We.destroy(), re.destroy();
            },
          };
        },
        Ie = (ve, ce) => {
          if (!ce) return;
          const ue = ve.currentX,
            ke = ve.currentY,
            Oe = ve.currentTime;
          ne(ce, ve);
          const _e = ve.currentX,
            we = ve.currentY,
            Ae = (ve.currentTime = De(ce)) - Oe;
          if (Ae > 0 && Ae < 100) {
            const fe = (we - ke) / Ae;
            (ve.velocityX = ((_e - ue) / Ae) * 0.7 + 0.3 * ve.velocityX),
              (ve.velocityY = 0.7 * fe + 0.3 * ve.velocityY);
          }
          (ve.deltaX = _e - ve.startX),
            (ve.deltaY = we - ve.startY),
            (ve.event = ce);
        },
        ne = (ve, ce) => {
          let ue = 0,
            ke = 0;
          if (ve) {
            const Oe = ve.changedTouches;
            if (Oe && Oe.length > 0) {
              const _e = Oe[0];
              (ue = _e.clientX), (ke = _e.clientY);
            } else void 0 !== ve.pageX && ((ue = ve.pageX), (ke = ve.pageY));
          }
          (ce.currentX = ue), (ce.currentY = ke);
        },
        De = (ve) => ve.timeStamp || Date.now();
    },
    9560: (_t, He, F) => {
      "use strict";
      F.d(He, { m: () => ve });
      var a = F(467),
        l = F(8476),
        j = F(2723),
        se = F(4929),
        G = F(4920),
        ae = F(694),
        X = F(9986);
      const $e = (ce) => (0, X.c)().duration(ce ? 400 : 300),
        Ne = (ce) => {
          let ue, ke;
          const Oe = ce.width + 8,
            _e = (0, X.c)(),
            we = (0, X.c)();
          ce.isEndSide
            ? ((ue = Oe + "px"), (ke = "0px"))
            : ((ue = -Oe + "px"), (ke = "0px")),
            _e
              .addElement(ce.menuInnerEl)
              .fromTo("transform", `translateX(${ue})`, `translateX(${ke})`);
          const Ae = "ios" === (0, ae.b)(ce),
            te = Ae ? 0.2 : 0.25;
          return (
            we.addElement(ce.backdropEl).fromTo("opacity", 0.01, te),
            $e(Ae).addAnimation([_e, we])
          );
        },
        Ie = (ce) => {
          let ue, ke;
          const Oe = (0, ae.b)(ce),
            _e = ce.width;
          ce.isEndSide
            ? ((ue = -_e + "px"), (ke = _e + "px"))
            : ((ue = _e + "px"), (ke = -_e + "px"));
          const we = (0, X.c)()
              .addElement(ce.menuInnerEl)
              .fromTo("transform", `translateX(${ke})`, "translateX(0px)"),
            Ye = (0, X.c)()
              .addElement(ce.contentEl)
              .fromTo("transform", "translateX(0px)", `translateX(${ue})`),
            Ae = (0, X.c)()
              .addElement(ce.backdropEl)
              .fromTo("opacity", 0.01, 0.32);
          return $e("ios" === Oe).addAnimation([we, Ye, Ae]);
        },
        ne = (ce) => {
          const ue = (0, ae.b)(ce),
            ke = ce.width * (ce.isEndSide ? -1 : 1) + "px",
            Oe = (0, X.c)()
              .addElement(ce.contentEl)
              .fromTo("transform", "translateX(0px)", `translateX(${ke})`);
          return $e("ios" === ue).addAnimation(Oe);
        },
        ve = (() => {
          const ce = new Map(),
            ue = [],
            ke = (function () {
              var K = (0, a.A)(function* (J) {
                const re = yield fe(J, !0);
                return !!re && re.open();
              });
              return function (re) {
                return K.apply(this, arguments);
              };
            })(),
            Oe = (function () {
              var K = (0, a.A)(function* (J) {
                const re = yield void 0 !== J ? fe(J, !0) : xe();
                return void 0 !== re && re.close();
              });
              return function (re) {
                return K.apply(this, arguments);
              };
            })(),
            _e = (function () {
              var K = (0, a.A)(function* (J) {
                const re = yield fe(J, !0);
                return !!re && re.toggle();
              });
              return function (re) {
                return K.apply(this, arguments);
              };
            })(),
            we = (function () {
              var K = (0, a.A)(function* (J, re) {
                const be = yield fe(re);
                return be && (be.disabled = !J), be;
              });
              return function (re, be) {
                return K.apply(this, arguments);
              };
            })(),
            Ye = (function () {
              var K = (0, a.A)(function* (J, re) {
                const be = yield fe(re);
                return be && (be.swipeGesture = J), be;
              });
              return function (re, be) {
                return K.apply(this, arguments);
              };
            })(),
            Ae = (function () {
              var K = (0, a.A)(function* (J) {
                if (null != J) {
                  const re = yield fe(J);
                  return void 0 !== re && re.isOpen();
                }
                return void 0 !== (yield xe());
              });
              return function (re) {
                return K.apply(this, arguments);
              };
            })(),
            te = (function () {
              var K = (0, a.A)(function* (J) {
                const re = yield fe(J);
                return !!re && !re.disabled;
              });
              return function (re) {
                return K.apply(this, arguments);
              };
            })(),
            fe = (function () {
              var K = (0, a.A)(function* (J, re = !1) {
                if ((yield ee(), "start" === J || "end" === J)) {
                  const ge = ue.filter((ft) => ft.side === J && !ft.disabled);
                  if (ge.length >= 1)
                    return (
                      ge.length > 1 &&
                        re &&
                        (0, se.p)(
                          `menuController queried for a menu on the "${J}" side, but ${ge.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,
                          ge.map((ft) => ft.el)
                        ),
                      ge[0].el
                    );
                  const me = ue.filter((ft) => ft.side === J);
                  if (me.length >= 1)
                    return (
                      me.length > 1 &&
                        re &&
                        (0, se.p)(
                          `menuController queried for a menu on the "${J}" side, but ${me.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,
                          me.map((ft) => ft.el)
                        ),
                      me[0].el
                    );
                } else if (null != J) return je((ge) => ge.menuId === J);
                return (
                  je((ge) => !ge.disabled) ||
                  (ue.length > 0 ? ue[0].el : void 0)
                );
              });
              return function (re) {
                return K.apply(this, arguments);
              };
            })(),
            xe = (function () {
              var K = (0, a.A)(function* () {
                return yield ee(), qe();
              });
              return function () {
                return K.apply(this, arguments);
              };
            })(),
            Me = (function () {
              var K = (0, a.A)(function* () {
                return yield ee(), vt();
              });
              return function () {
                return K.apply(this, arguments);
              };
            })(),
            he = (function () {
              var K = (0, a.A)(function* () {
                return yield ee(), jt();
              });
              return function () {
                return K.apply(this, arguments);
              };
            })(),
            Y = (K, J) => {
              ce.set(K, J);
            },
            We = (function () {
              var K = (0, a.A)(function* (J, re, be) {
                if (jt()) return !1;
                if (re) {
                  const ge = yield xe();
                  ge && J.el !== ge && (yield ge.setOpen(!1, !1));
                }
                return J._setOpen(re, be);
              });
              return function (re, be, ge) {
                return K.apply(this, arguments);
              };
            })(),
            qe = () => je((K) => K._isOpen),
            vt = () => ue.map((K) => K.el),
            jt = () => ue.some((K) => K.isAnimating),
            je = (K) => {
              const J = ue.find(K);
              if (void 0 !== J) return J.el;
            },
            ee = () =>
              Promise.all(
                Array.from(document.querySelectorAll("ion-menu")).map(
                  (K) => new Promise((J) => (0, G.c)(K, J))
                )
              );
          return (
            Y("reveal", ne),
            Y("push", Ie),
            Y("overlay", Ne),
            null == l.d ||
              l.d.addEventListener("ionBackButton", (K) => {
                const J = qe();
                J &&
                  K.detail.register(j.MENU_BACK_BUTTON_PRIORITY, () =>
                    J.close()
                  );
              }),
            {
              registerAnimation: Y,
              get: fe,
              getMenus: Me,
              getOpen: xe,
              isEnabled: te,
              swipeGesture: Ye,
              isAnimating: he,
              isOpen: Ae,
              enable: we,
              toggle: _e,
              close: Oe,
              open: ke,
              _getOpenSync: qe,
              _createAnimation: (K, J) => {
                const re = ce.get(K);
                if (!re) throw new Error("animation not registered");
                return re(J);
              },
              _register: (K) => {
                ue.indexOf(K) < 0 && ue.push(K);
              },
              _unregister: (K) => {
                const J = ue.indexOf(K);
                J > -1 && ue.splice(J, 1);
              },
              _setOpen: We,
            }
          );
        })();
    },
    4929: (_t, He, F) => {
      "use strict";
      F.d(He, { a: () => l, b: () => j, p: () => a });
      const a = (se, ...G) => console.warn(`[Ionic Warning]: ${se}`, ...G),
        l = (se, ...G) => console.error(`[Ionic Error]: ${se}`, ...G),
        j = (se, ...G) =>
          console.error(
            `<${se.tagName.toLowerCase()}> must be used inside ${G.join(
              " or "
            )}.`
          );
    },
    8476: (_t, He, F) => {
      "use strict";
      F.d(He, { d: () => l, w: () => a });
      const a = typeof window < "u" ? window : void 0,
        l = typeof document < "u" ? document : void 0;
    },
    8737: (_t, He, F) => {
      "use strict";
      F.d(He, {
        B: () => De,
        a: () => co,
        b: () => pn,
        c: () => ft,
        d: () => Rt,
        e: () => O,
        f: () => jt,
        g: () => Tt,
        h: () => qe,
        i: () => It,
        j: () => At,
        k: () => ve,
        r: () => _o,
        w: () => q,
      });
      var a = F(467);
      let se,
        G,
        ae,
        X = !1,
        $e = !1,
        Ne = !1,
        Ie = !1,
        ne = !1;
      const De = { isDev: !1, isBrowser: !0, isServer: !1, isTesting: !1 },
        ve = (_) => {
          const T = new URL(_, pt.$resourcesUrl$);
          return T.origin !== gn.location.origin ? T.href : T.pathname;
        },
        Ye = "s-id",
        Ae = "sty-id",
        xe = "slot-fb{display:contents}slot-fb[hidden]{display:none}",
        Me = "http://www.w3.org/1999/xlink",
        he = {},
        We = (_) => "object" == (_ = typeof _) || "function" === _;
      function Ge(_) {
        var T, V, c;
        return null !==
          (c =
            null ===
              (V =
                null === (T = _.head) || void 0 === T
                  ? void 0
                  : T.querySelector('meta[name="csp-nonce"]')) || void 0 === V
              ? void 0
              : V.getAttribute("content")) && void 0 !== c
          ? c
          : void 0;
      }
      const qe = (_, T, ...V) => {
          let c = null,
            v = null,
            E = null,
            m = !1,
            R = !1;
          const B = [],
            Re = (tt) => {
              for (let Dt = 0; Dt < tt.length; Dt++)
                (c = tt[Dt]),
                  Array.isArray(c)
                    ? Re(c)
                    : null != c &&
                      "boolean" != typeof c &&
                      ((m = "function" != typeof _ && !We(c)) &&
                        (c = String(c)),
                      m && R
                        ? (B[B.length - 1].$text$ += c)
                        : B.push(m ? vt(null, c) : c),
                      (R = m));
            };
          if ((Re(V), T)) {
            T.key && (v = T.key), T.name && (E = T.name);
            {
              const tt = T.className || T.class;
              tt &&
                (T.class =
                  "object" != typeof tt
                    ? tt
                    : Object.keys(tt)
                        .filter((Dt) => tt[Dt])
                        .join(" "));
            }
          }
          if ("function" == typeof _) return _(null === T ? {} : T, B, ee);
          const et = vt(_, null);
          return (
            (et.$attrs$ = T),
            B.length > 0 && (et.$children$ = B),
            (et.$key$ = v),
            (et.$name$ = E),
            et
          );
        },
        vt = (_, T) => ({
          $flags$: 0,
          $tag$: _,
          $text$: T,
          $elm$: null,
          $children$: null,
          $attrs$: null,
          $key$: null,
          $name$: null,
        }),
        jt = {},
        ee = {
          forEach: (_, T) => _.map(K).forEach(T),
          map: (_, T) => _.map(K).map(T).map(J),
        },
        K = (_) => ({
          vattrs: _.$attrs$,
          vchildren: _.$children$,
          vkey: _.$key$,
          vname: _.$name$,
          vtag: _.$tag$,
          vtext: _.$text$,
        }),
        J = (_) => {
          if ("function" == typeof _.vtag) {
            const V = Object.assign({}, _.vattrs);
            return (
              _.vkey && (V.key = _.vkey),
              _.vname && (V.name = _.vname),
              qe(_.vtag, V, ...(_.vchildren || []))
            );
          }
          const T = vt(_.vtag, _.vtext);
          return (
            (T.$attrs$ = _.vattrs),
            (T.$children$ = _.vchildren),
            (T.$key$ = _.vkey),
            (T.$name$ = _.vname),
            T
          );
        },
        be = (_, T, V, c, v, E, m) => {
          let R, B, Re, et;
          if (1 === E.nodeType) {
            for (
              R = E.getAttribute("c-id"),
                R &&
                  ((B = R.split(".")),
                  (B[0] === m || "0" === B[0]) &&
                    ((Re = {
                      $flags$: 0,
                      $hostId$: B[0],
                      $nodeId$: B[1],
                      $depth$: B[2],
                      $index$: B[3],
                      $tag$: E.tagName.toLowerCase(),
                      $elm$: E,
                      $attrs$: null,
                      $children$: null,
                      $key$: null,
                      $name$: null,
                      $text$: null,
                    }),
                    T.push(Re),
                    E.removeAttribute("c-id"),
                    _.$children$ || (_.$children$ = []),
                    (_.$children$[Re.$index$] = Re),
                    (_ = Re),
                    c && "0" === Re.$depth$ && (c[Re.$index$] = Re.$elm$))),
                et = E.childNodes.length - 1;
              et >= 0;
              et--
            )
              be(_, T, V, c, v, E.childNodes[et], m);
            if (E.shadowRoot)
              for (et = E.shadowRoot.childNodes.length - 1; et >= 0; et--)
                be(_, T, V, c, v, E.shadowRoot.childNodes[et], m);
          } else if (8 === E.nodeType)
            (B = E.nodeValue.split(".")),
              (B[1] === m || "0" === B[1]) &&
                ((R = B[0]),
                (Re = {
                  $flags$: 0,
                  $hostId$: B[1],
                  $nodeId$: B[2],
                  $depth$: B[3],
                  $index$: B[4],
                  $elm$: E,
                  $attrs$: null,
                  $children$: null,
                  $key$: null,
                  $name$: null,
                  $tag$: null,
                  $text$: null,
                }),
                "t" === R
                  ? ((Re.$elm$ = E.nextSibling),
                    Re.$elm$ &&
                      3 === Re.$elm$.nodeType &&
                      ((Re.$text$ = Re.$elm$.textContent),
                      T.push(Re),
                      E.remove(),
                      _.$children$ || (_.$children$ = []),
                      (_.$children$[Re.$index$] = Re),
                      c && "0" === Re.$depth$ && (c[Re.$index$] = Re.$elm$)))
                  : Re.$hostId$ === m &&
                    ("s" === R
                      ? ((Re.$tag$ = "slot"),
                        (E["s-sn"] = B[5] ? (Re.$name$ = B[5]) : ""),
                        (E["s-sr"] = !0),
                        c &&
                          ((Re.$elm$ = _n.createElement(Re.$tag$)),
                          Re.$name$ && Re.$elm$.setAttribute("name", Re.$name$),
                          E.parentNode.insertBefore(Re.$elm$, E),
                          E.remove(),
                          "0" === Re.$depth$ && (c[Re.$index$] = Re.$elm$)),
                        V.push(Re),
                        _.$children$ || (_.$children$ = []),
                        (_.$children$[Re.$index$] = Re))
                      : "r" === R &&
                        (c
                          ? E.remove()
                          : ((v["s-cr"] = E), (E["s-cn"] = !0)))));
          else if (_ && "style" === _.$tag$) {
            const tt = vt(null, E.textContent);
            (tt.$elm$ = E), (tt.$index$ = "0"), (_.$children$ = [tt]);
          }
        },
        ge = (_, T) => {
          if (1 === _.nodeType) {
            let V = 0;
            for (; V < _.childNodes.length; V++) ge(_.childNodes[V], T);
            if (_.shadowRoot)
              for (V = 0; V < _.shadowRoot.childNodes.length; V++)
                ge(_.shadowRoot.childNodes[V], T);
          } else if (8 === _.nodeType) {
            const V = _.nodeValue.split(".");
            "o" === V[0] &&
              (T.set(V[1] + "." + V[2], _),
              (_.nodeValue = ""),
              (_["s-en"] = V[3]));
          }
        },
        ft = (_) => jn.push(_),
        Tt = (_) => Qn(_).$modeName$,
        It = (_) => Qn(_).$hostElement$,
        Rt = (_, T, V) => {
          const c = It(_);
          return {
            emit: (v) =>
              Ot(c, T, {
                bubbles: !!(4 & V),
                composed: !!(2 & V),
                cancelable: !!(1 & V),
                detail: v,
              }),
          };
        },
        Ot = (_, T, V) => {
          const c = pt.ce(T, V);
          return _.dispatchEvent(c), c;
        },
        Yt = new WeakMap(),
        tn = (_, T, V) => {
          let c = yr.get(_);
          uo && V
            ? ((c = c || new CSSStyleSheet()),
              "string" == typeof c ? (c = T) : c.replaceSync(T))
            : (c = T),
            yr.set(_, c);
        },
        an = (_, T, V) => {
          var c;
          const v = Ue(T, V),
            E = yr.get(v);
          if (((_ = 11 === _.nodeType ? _ : _n), E))
            if ("string" == typeof E) {
              let R,
                m = Yt.get((_ = _.head || _));
              if ((m || Yt.set(_, (m = new Set())), !m.has(v))) {
                if (_.host && (R = _.querySelector(`[${Ae}="${v}"]`)))
                  R.innerHTML = E;
                else {
                  (R = _n.createElement("style")), (R.innerHTML = E);
                  const B =
                    null !== (c = pt.$nonce$) && void 0 !== c ? c : Ge(_n);
                  null != B && R.setAttribute("nonce", B),
                    _.insertBefore(R, _.querySelector("link"));
                }
                4 & T.$flags$ && (R.innerHTML += xe), m && m.add(v);
              }
            } else
              _.adoptedStyleSheets.includes(E) ||
                (_.adoptedStyleSheets = [..._.adoptedStyleSheets, E]);
          return v;
        },
        Ue = (_, T) =>
          "sc-" + (T && 32 & _.$flags$ ? _.$tagName$ + "-" + T : _.$tagName$),
        le = (_) => _.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{"),
        Fe = (_, T, V, c, v, E) => {
          if (V !== c) {
            let m = kn(_, T),
              R = T.toLowerCase();
            if ("class" === T) {
              const B = _.classList,
                Re = Lt(V),
                et = Lt(c);
              B.remove(...Re.filter((tt) => tt && !et.includes(tt))),
                B.add(...et.filter((tt) => tt && !Re.includes(tt)));
            } else if ("style" === T) {
              for (const B in V)
                (!c || null == c[B]) &&
                  (B.includes("-")
                    ? _.style.removeProperty(B)
                    : (_.style[B] = ""));
              for (const B in c)
                (!V || c[B] !== V[B]) &&
                  (B.includes("-")
                    ? _.style.setProperty(B, c[B])
                    : (_.style[B] = c[B]));
            } else if ("key" !== T)
              if ("ref" === T) c && c(_);
              else if (m || "o" !== T[0] || "n" !== T[1]) {
                const B = We(c);
                if ((m || (B && null !== c)) && !v)
                  try {
                    if (_.tagName.includes("-")) _[T] = c;
                    else {
                      const et = null == c ? "" : c;
                      "list" === T
                        ? (m = !1)
                        : (null == V || _[T] != et) && (_[T] = et);
                    }
                  } catch {}
                let Re = !1;
                R !== (R = R.replace(/^xlink\:?/, "")) && ((T = R), (Re = !0)),
                  null == c || !1 === c
                    ? (!1 !== c || "" === _.getAttribute(T)) &&
                      (Re ? _.removeAttributeNS(Me, T) : _.removeAttribute(T))
                    : (!m || 4 & E || v) &&
                      !B &&
                      ((c = !0 === c ? "" : c),
                      Re ? _.setAttributeNS(Me, T, c) : _.setAttribute(T, c));
              } else if (
                ((T =
                  "-" === T[2]
                    ? T.slice(3)
                    : kn(gn, R)
                    ? R.slice(2)
                    : R[2] + T.slice(3)),
                V || c)
              ) {
                const B = T.endsWith(Xt);
                (T = T.replace(cn, "")),
                  V && pt.rel(_, T, V, B),
                  c && pt.ael(_, T, c, B);
              }
          }
        },
        at = /\s/,
        Lt = (_) => (_ ? _.split(at) : []),
        Xt = "Capture",
        cn = new RegExp(Xt + "$"),
        Bt = (_, T, V, c) => {
          const v =
              11 === T.$elm$.nodeType && T.$elm$.host ? T.$elm$.host : T.$elm$,
            E = (_ && _.$attrs$) || he,
            m = T.$attrs$ || he;
          for (c of dt(Object.keys(E)))
            c in m || Fe(v, c, E[c], void 0, V, T.$flags$);
          for (c of dt(Object.keys(m))) Fe(v, c, E[c], m[c], V, T.$flags$);
        };
      function dt(_) {
        return _.includes("ref") ? [..._.filter((T) => "ref" !== T), "ref"] : _;
      }
      const mt = (_, T, V, c) => {
          var v;
          const E = T.$children$[V];
          let R,
            B,
            Re,
            m = 0;
          if (
            (X ||
              ((Ne = !0),
              "slot" === E.$tag$ &&
                (se && c.classList.add(se + "-s"),
                (E.$flags$ |= E.$children$ ? 2 : 1))),
            null !== E.$text$)
          )
            R = E.$elm$ = _n.createTextNode(E.$text$);
          else if (1 & E.$flags$) R = E.$elm$ = _n.createTextNode("");
          else {
            if (
              (Ie || (Ie = "svg" === E.$tag$),
              (R = E.$elm$ =
                _n.createElementNS(
                  Ie
                    ? "http://www.w3.org/2000/svg"
                    : "http://www.w3.org/1999/xhtml",
                  2 & E.$flags$ ? "slot-fb" : E.$tag$
                )),
              Ie && "foreignObject" === E.$tag$ && (Ie = !1),
              Bt(null, E, Ie),
              ((_) => null != _)(se) &&
                R["s-si"] !== se &&
                R.classList.add((R["s-si"] = se)),
              E.$children$)
            )
              for (m = 0; m < E.$children$.length; ++m)
                (B = mt(_, E, m, R)), B && R.appendChild(B);
            "svg" === E.$tag$
              ? (Ie = !1)
              : "foreignObject" === R.tagName && (Ie = !0);
          }
          return (
            (R["s-hn"] = ae),
            3 & E.$flags$ &&
              ((R["s-sr"] = !0),
              (R["s-cr"] = G),
              (R["s-sn"] = E.$name$ || ""),
              (R["s-rf"] =
                null === (v = E.$attrs$) || void 0 === v ? void 0 : v.ref),
              (Re = _ && _.$children$ && _.$children$[V]),
              Re && Re.$tag$ === E.$tag$ && _.$elm$ && In(_.$elm$)),
            R
          );
        },
        In = (_) => {
          pt.$flags$ |= 1;
          const T = _.closest(ae.toLowerCase());
          if (null != T) {
            const V = Array.from(T.childNodes).find((v) => v["s-cr"]),
              c = Array.from(_.childNodes);
            for (const v of V ? c.reverse() : c)
              null != v["s-sh"] &&
                (T.insertBefore(v, null != V ? V : null),
                (v["s-sh"] = void 0),
                (Ne = !0));
          }
          pt.$flags$ &= -2;
        },
        An = (_, T) => {
          pt.$flags$ |= 1;
          const V = Array.from(_.childNodes);
          if (_["s-sr"]) {
            let c = _;
            for (; (c = c.nextSibling); )
              c && c["s-sn"] === _["s-sn"] && c["s-sh"] === ae && V.push(c);
          }
          for (let c = V.length - 1; c >= 0; c--) {
            const v = V[c];
            v["s-hn"] !== ae &&
              v["s-ol"] &&
              (lr(v).insertBefore(v, Et(v)),
              v["s-ol"].remove(),
              (v["s-ol"] = void 0),
              (v["s-sh"] = void 0),
              (Ne = !0)),
              T && An(v, T);
          }
          pt.$flags$ &= -2;
        },
        wn = (_, T, V, c, v, E) => {
          let R,
            m = (_["s-cr"] && _["s-cr"].parentNode) || _;
          for (
            m.shadowRoot && m.tagName === ae && (m = m.shadowRoot);
            v <= E;
            ++v
          )
            c[v] &&
              ((R = mt(null, V, v, _)),
              R && ((c[v].$elm$ = R), m.insertBefore(R, Et(T))));
        },
        Bn = (_, T, V) => {
          for (let c = T; c <= V; ++c) {
            const v = _[c];
            if (v) {
              const E = v.$elm$;
              or(v),
                E &&
                  (($e = !0),
                  E["s-ol"] ? E["s-ol"].remove() : An(E, !0),
                  E.remove());
            }
          }
        },
        Dr = (_, T, V = !1) =>
          _.$tag$ === T.$tag$ &&
          ("slot" === _.$tag$
            ? _.$name$ === T.$name$
            : !!V || _.$key$ === T.$key$),
        Et = (_) => (_ && _["s-ol"]) || _,
        lr = (_) => (_["s-ol"] ? _["s-ol"] : _).parentNode,
        kt = (_, T, V = !1) => {
          const c = (T.$elm$ = _.$elm$),
            v = _.$children$,
            E = T.$children$,
            m = T.$tag$,
            R = T.$text$;
          let B;
          null === R
            ? ((Ie = "svg" === m || ("foreignObject" !== m && Ie)),
              "slot" !== m || X
                ? Bt(_, T, Ie)
                : _.$name$ !== T.$name$ &&
                  ((T.$elm$["s-sn"] = T.$name$ || ""),
                  In(T.$elm$.parentElement)),
              null !== v && null !== E
                ? ((_, T, V, c, v = !1) => {
                    let Ln,
                      un,
                      E = 0,
                      m = 0,
                      R = 0,
                      B = 0,
                      Re = T.length - 1,
                      et = T[0],
                      tt = T[Re],
                      Dt = c.length - 1,
                      Ze = c[0],
                      sn = c[Dt];
                    for (; E <= Re && m <= Dt; )
                      if (null == et) et = T[++E];
                      else if (null == tt) tt = T[--Re];
                      else if (null == Ze) Ze = c[++m];
                      else if (null == sn) sn = c[--Dt];
                      else if (Dr(et, Ze, v))
                        kt(et, Ze, v), (et = T[++E]), (Ze = c[++m]);
                      else if (Dr(tt, sn, v))
                        kt(tt, sn, v), (tt = T[--Re]), (sn = c[--Dt]);
                      else if (Dr(et, sn, v))
                        ("slot" === et.$tag$ || "slot" === sn.$tag$) &&
                          An(et.$elm$.parentNode, !1),
                          kt(et, sn, v),
                          _.insertBefore(et.$elm$, tt.$elm$.nextSibling),
                          (et = T[++E]),
                          (sn = c[--Dt]);
                      else if (Dr(tt, Ze, v))
                        ("slot" === et.$tag$ || "slot" === sn.$tag$) &&
                          An(tt.$elm$.parentNode, !1),
                          kt(tt, Ze, v),
                          _.insertBefore(tt.$elm$, et.$elm$),
                          (tt = T[--Re]),
                          (Ze = c[++m]);
                      else {
                        for (R = -1, B = E; B <= Re; ++B)
                          if (
                            T[B] &&
                            null !== T[B].$key$ &&
                            T[B].$key$ === Ze.$key$
                          ) {
                            R = B;
                            break;
                          }
                        R >= 0
                          ? ((un = T[R]),
                            un.$tag$ !== Ze.$tag$
                              ? (Ln = mt(T && T[m], V, R, _))
                              : (kt(un, Ze, v),
                                (T[R] = void 0),
                                (Ln = un.$elm$)),
                            (Ze = c[++m]))
                          : ((Ln = mt(T && T[m], V, m, _)), (Ze = c[++m])),
                          Ln && lr(et.$elm$).insertBefore(Ln, Et(et.$elm$));
                      }
                    E > Re
                      ? wn(
                          _,
                          null == c[Dt + 1] ? null : c[Dt + 1].$elm$,
                          V,
                          c,
                          m,
                          Dt
                        )
                      : m > Dt && Bn(T, E, Re);
                  })(c, v, T, E, V)
                : null !== E
                ? (null !== _.$text$ && (c.textContent = ""),
                  wn(c, null, T, E, 0, E.length - 1))
                : null !== v && Bn(v, 0, v.length - 1),
              Ie && "svg" === m && (Ie = !1))
            : (B = c["s-cr"])
            ? (B.parentNode.textContent = R)
            : _.$text$ !== R && (c.data = R);
        },
        xt = (_) => {
          const T = _.childNodes;
          for (const V of T)
            if (1 === V.nodeType) {
              if (V["s-sr"]) {
                const c = V["s-sn"];
                V.hidden = !1;
                for (const v of T)
                  if (v !== V)
                    if (v["s-hn"] !== V["s-hn"] || "" !== c) {
                      if (
                        1 === v.nodeType &&
                        (c === v.getAttribute("slot") || c === v["s-sn"])
                      ) {
                        V.hidden = !0;
                        break;
                      }
                    } else if (
                      1 === v.nodeType ||
                      (3 === v.nodeType && "" !== v.textContent.trim())
                    ) {
                      V.hidden = !0;
                      break;
                    }
              }
              xt(V);
            }
        },
        Nt = [],
        Zt = (_) => {
          let T, V, c;
          for (const v of _.childNodes) {
            if (v["s-sr"] && (T = v["s-cr"]) && T.parentNode) {
              V = T.parentNode.childNodes;
              const E = v["s-sn"];
              for (c = V.length - 1; c >= 0; c--)
                if (
                  ((T = V[c]),
                  !(
                    T["s-cn"] ||
                    T["s-nr"] ||
                    T["s-hn"] === v["s-hn"] ||
                    (T["s-sh"] && T["s-sh"] === v["s-hn"])
                  ))
                )
                  if (zn(T, E)) {
                    let m = Nt.find((R) => R.$nodeToRelocate$ === T);
                    ($e = !0),
                      (T["s-sn"] = T["s-sn"] || E),
                      m
                        ? ((m.$nodeToRelocate$["s-sh"] = v["s-hn"]),
                          (m.$slotRefNode$ = v))
                        : ((T["s-sh"] = v["s-hn"]),
                          Nt.push({ $slotRefNode$: v, $nodeToRelocate$: T })),
                      T["s-sr"] &&
                        Nt.map((R) => {
                          zn(R.$nodeToRelocate$, T["s-sn"]) &&
                            ((m = Nt.find((B) => B.$nodeToRelocate$ === T)),
                            m &&
                              !R.$slotRefNode$ &&
                              (R.$slotRefNode$ = m.$slotRefNode$));
                        });
                  } else
                    Nt.some((m) => m.$nodeToRelocate$ === T) ||
                      Nt.push({ $nodeToRelocate$: T });
            }
            1 === v.nodeType && Zt(v);
          }
        },
        zn = (_, T) =>
          1 === _.nodeType
            ? (null === _.getAttribute("slot") && "" === T) ||
              _.getAttribute("slot") === T
            : _["s-sn"] === T || "" === T,
        or = (_) => {
          _.$attrs$ && _.$attrs$.ref && _.$attrs$.ref(null),
            _.$children$ && _.$children$.map(or);
        },
        Un = (_, T) => {
          T &&
            !_.$onRenderResolve$ &&
            T["s-p"] &&
            T["s-p"].push(new Promise((V) => (_.$onRenderResolve$ = V)));
        },
        pe = (_, T) => {
          if (((_.$flags$ |= 16), !(4 & _.$flags$)))
            return Un(_, _.$ancestorComponent$), q(() => de(_, T));
          _.$flags$ |= 512;
        },
        de = (_, T) => {
          const c = _.$lazyInstance$;
          let v;
          return (
            T &&
              ((_.$flags$ |= 256),
              _.$queuedListeners$ &&
                (_.$queuedListeners$.map(([E, m]) => Jt(c, E, m)),
                (_.$queuedListeners$ = void 0)),
              (v = Jt(c, "componentWillLoad"))),
            (v = Ee(v, () => Jt(c, "componentWillRender"))),
            Ee(v, () => Le(_, c, T))
          );
        },
        Ee = (_, T) => (ie(_) ? _.then(T) : T()),
        ie = (_) =>
          _ instanceof Promise || (_ && _.then && "function" == typeof _.then),
        Le = (function () {
          var _ = (0, a.A)(function* (T, V, c) {
            var v;
            const E = T.$hostElement$,
              R = E["s-rc"];
            c &&
              ((_) => {
                const T = _.$cmpMeta$,
                  V = _.$hostElement$,
                  c = T.$flags$,
                  E = an(
                    V.shadowRoot ? V.shadowRoot : V.getRootNode(),
                    T,
                    _.$modeName$
                  );
                10 & c &&
                  ((V["s-sc"] = E),
                  V.classList.add(E + "-h"),
                  2 & c && V.classList.add(E + "-s"));
              })(T);
            Je(T, V, E, c), R && (R.map((Re) => Re()), (E["s-rc"] = void 0));
            {
              const Re = null !== (v = E["s-p"]) && void 0 !== v ? v : [],
                et = () => ut(T);
              0 === Re.length
                ? et()
                : (Promise.all(Re).then(et), (T.$flags$ |= 4), (Re.length = 0));
            }
          });
          return function (V, c, v) {
            return _.apply(this, arguments);
          };
        })(),
        Je = (_, T, V, c) => {
          try {
            (T = T.render && T.render()),
              (_.$flags$ &= -17),
              (_.$flags$ |= 2),
              ((_, T, V = !1) => {
                var c, v, E, m, R;
                const B = _.$hostElement$,
                  Re = _.$cmpMeta$,
                  et = _.$vnode$ || vt(null, null),
                  tt = ((_) => _ && _.$tag$ === jt)(T) ? T : qe(null, null, T);
                if (
                  ((ae = B.tagName),
                  Re.$attrsToReflect$ &&
                    ((tt.$attrs$ = tt.$attrs$ || {}),
                    Re.$attrsToReflect$.map(
                      ([Dt, Ze]) => (tt.$attrs$[Ze] = B[Dt])
                    )),
                  V && tt.$attrs$)
                )
                  for (const Dt of Object.keys(tt.$attrs$))
                    B.hasAttribute(Dt) &&
                      !["key", "ref", "style", "class"].includes(Dt) &&
                      (tt.$attrs$[Dt] = B[Dt]);
                if (
                  ((tt.$tag$ = null),
                  (tt.$flags$ |= 4),
                  (_.$vnode$ = tt),
                  (tt.$elm$ = et.$elm$ = B.shadowRoot || B),
                  (se = B["s-sc"]),
                  (X = !!(1 & Re.$flags$)),
                  (G = B["s-cr"]),
                  ($e = !1),
                  kt(et, tt, V),
                  (pt.$flags$ |= 1),
                  Ne)
                ) {
                  Zt(tt.$elm$);
                  for (const Dt of Nt) {
                    const Ze = Dt.$nodeToRelocate$;
                    if (!Ze["s-ol"]) {
                      const sn = _n.createTextNode("");
                      (sn["s-nr"] = Ze),
                        Ze.parentNode.insertBefore((Ze["s-ol"] = sn), Ze);
                    }
                  }
                  for (const Dt of Nt) {
                    const Ze = Dt.$nodeToRelocate$,
                      sn = Dt.$slotRefNode$;
                    if (sn) {
                      const Ln = sn.parentNode;
                      let un = sn.nextSibling;
                      if (un && 1 === un.nodeType) {
                        let er =
                          null === (c = Ze["s-ol"]) || void 0 === c
                            ? void 0
                            : c.previousSibling;
                        for (; er; ) {
                          let Rn =
                            null !== (v = er["s-nr"]) && void 0 !== v
                              ? v
                              : null;
                          if (
                            Rn &&
                            Rn["s-sn"] === Ze["s-sn"] &&
                            Ln === Rn.parentNode
                          ) {
                            for (
                              Rn = Rn.nextSibling;
                              Rn === Ze || (null != Rn && Rn["s-sr"]);

                            )
                              Rn = null == Rn ? void 0 : Rn.nextSibling;
                            if (!Rn || !Rn["s-nr"]) {
                              un = Rn;
                              break;
                            }
                          }
                          er = er.previousSibling;
                        }
                      }
                      ((!un && Ln !== Ze.parentNode) ||
                        Ze.nextSibling !== un) &&
                        Ze !== un &&
                        (Ln.insertBefore(Ze, un),
                        1 === Ze.nodeType &&
                          (Ze.hidden =
                            null !== (E = Ze["s-ih"]) && void 0 !== E && E)),
                        Ze && "function" == typeof sn["s-rf"] && sn["s-rf"](Ze);
                    } else
                      1 === Ze.nodeType &&
                        (V &&
                          (Ze["s-ih"] =
                            null !== (m = Ze.hidden) && void 0 !== m && m),
                        (Ze.hidden = !0));
                  }
                }
                if (
                  ($e && xt(tt.$elm$),
                  (pt.$flags$ &= -2),
                  (Nt.length = 0),
                  2 & Re.$flags$)
                )
                  for (const Dt of tt.$elm$.childNodes)
                    Dt["s-hn"] !== ae &&
                      !Dt["s-sh"] &&
                      (V &&
                        null == Dt["s-ih"] &&
                        (Dt["s-ih"] =
                          null !== (R = Dt.hidden) && void 0 !== R && R),
                      (Dt.hidden = !0));
                G = void 0;
              })(_, T, c);
          } catch (v) {
            Tn(v, _.$hostElement$);
          }
          return null;
        },
        ut = (_) => {
          const V = _.$hostElement$,
            v = _.$lazyInstance$,
            E = _.$ancestorComponent$;
          Jt(v, "componentDidRender"),
            64 & _.$flags$
              ? Jt(v, "componentDidUpdate")
              : ((_.$flags$ |= 64),
                Nn(V),
                Jt(v, "componentDidLoad"),
                _.$onReadyResolve$(V),
                E || qt()),
            _.$onInstanceResolve$(V),
            _.$onRenderResolve$ &&
              (_.$onRenderResolve$(), (_.$onRenderResolve$ = void 0)),
            512 & _.$flags$ && Z(() => pe(_, !1)),
            (_.$flags$ &= -517);
        },
        At = (_) => {
          {
            const T = Qn(_),
              V = T.$hostElement$.isConnected;
            return V && 2 == (18 & T.$flags$) && pe(T, !1), V;
          }
        },
        qt = (_) => {
          Nn(_n.documentElement),
            Z(() => Ot(gn, "appload", { detail: { namespace: "ionic" } }));
        },
        Jt = (_, T, V) => {
          if (_ && _[T])
            try {
              return _[T](V);
            } catch (c) {
              Tn(c);
            }
        },
        Nn = (_) => _.classList.add("hydrated"),
        no = (_, T, V) => {
          var c;
          const v = _.prototype;
          if (T.$members$) {
            _.watchers && (T.$watchers$ = _.watchers);
            const E = Object.entries(T.$members$);
            if (
              (E.map(([m, [R]]) => {
                31 & R || (2 & V && 32 & R)
                  ? Object.defineProperty(v, m, {
                      get() {
                        return ((_, T) => Qn(this).$instanceValues$.get(T))(
                          0,
                          m
                        );
                      },
                      set(B) {
                        ((_, T, V, c) => {
                          const v = Qn(_),
                            E = v.$hostElement$,
                            m = v.$instanceValues$.get(T),
                            R = v.$flags$,
                            B = v.$lazyInstance$;
                          V = ((_, T) =>
                            null == _ || We(_)
                              ? _
                              : 4 & T
                              ? "false" !== _ && ("" === _ || !!_)
                              : 2 & T
                              ? parseFloat(_)
                              : 1 & T
                              ? String(_)
                              : _)(V, c.$members$[T][0]);
                          const Re = Number.isNaN(m) && Number.isNaN(V);
                          if (
                            (!(8 & R) || void 0 === m) &&
                            V !== m &&
                            !Re &&
                            (v.$instanceValues$.set(T, V), B)
                          ) {
                            if (c.$watchers$ && 128 & R) {
                              const tt = c.$watchers$[T];
                              tt &&
                                tt.map((Dt) => {
                                  try {
                                    B[Dt](V, m, T);
                                  } catch (Ze) {
                                    Tn(Ze, E);
                                  }
                                });
                            }
                            2 == (18 & R) && pe(v, !1);
                          }
                        })(this, m, B, T);
                      },
                      configurable: !0,
                      enumerable: !0,
                    })
                  : 1 & V &&
                    64 & R &&
                    Object.defineProperty(v, m, {
                      value(...B) {
                        var Re;
                        const et = Qn(this);
                        return null ===
                          (Re = null == et ? void 0 : et.$onInstancePromise$) ||
                          void 0 === Re
                          ? void 0
                          : Re.then(() => {
                              var tt;
                              return null === (tt = et.$lazyInstance$) ||
                                void 0 === tt
                                ? void 0
                                : tt[m](...B);
                            });
                      },
                    });
              }),
              1 & V)
            ) {
              const m = new Map();
              (v.attributeChangedCallback = function (R, B, Re) {
                pt.jmp(() => {
                  var et;
                  const tt = m.get(R);
                  if (this.hasOwnProperty(tt)) (Re = this[tt]), delete this[tt];
                  else {
                    if (
                      v.hasOwnProperty(tt) &&
                      "number" == typeof this[tt] &&
                      this[tt] == Re
                    )
                      return;
                    if (null == tt) {
                      const Dt = Qn(this),
                        Ze = null == Dt ? void 0 : Dt.$flags$;
                      if (Ze && !(8 & Ze) && 128 & Ze && Re !== B) {
                        const sn = Dt.$lazyInstance$,
                          Ln =
                            null === (et = T.$watchers$) || void 0 === et
                              ? void 0
                              : et[R];
                        null == Ln ||
                          Ln.forEach((un) => {
                            null != sn[un] && sn[un].call(sn, Re, B, R);
                          });
                      }
                      return;
                    }
                  }
                  this[tt] =
                    (null !== Re || "boolean" != typeof this[tt]) && Re;
                });
              }),
                (_.observedAttributes = Array.from(
                  new Set([
                    ...Object.keys(
                      null !== (c = T.$watchers$) && void 0 !== c ? c : {}
                    ),
                    ...E.filter(([R, B]) => 15 & B[0]).map(([R, B]) => {
                      var Re;
                      const et = B[1] || R;
                      return (
                        m.set(et, R),
                        512 & B[0] &&
                          (null === (Re = T.$attrsToReflect$) ||
                            void 0 === Re ||
                            Re.push([R, et])),
                        et
                      );
                    }),
                  ])
                ));
            }
          }
          return _;
        },
        zr = (function () {
          var _ = (0, a.A)(function* (T, V, c, v) {
            let E;
            if (!(32 & V.$flags$)) {
              if (((V.$flags$ |= 32), c.$lazyBundleId$)) {
                if (((E = Wn(c)), E.then)) {
                  const et = () => {};
                  (E = yield E), et();
                }
                E.isProxied ||
                  ((c.$watchers$ = E.watchers),
                  no(E, c, 2),
                  (E.isProxied = !0));
                const Re = () => {};
                V.$flags$ |= 8;
                try {
                  new E(V);
                } catch (et) {
                  Tn(et);
                }
                (V.$flags$ &= -9),
                  (V.$flags$ |= 128),
                  Re(),
                  yn(V.$lazyInstance$);
              } else
                (E = T.constructor),
                  customElements
                    .whenDefined(c.$tagName$)
                    .then(() => (V.$flags$ |= 128));
              if (E.style) {
                let Re = E.style;
                "string" != typeof Re &&
                  (Re =
                    Re[
                      (V.$modeName$ = ((_) =>
                        jn.map((T) => T(_)).find((T) => !!T))(T))
                    ]);
                const et = Ue(c, V.$modeName$);
                if (!yr.has(et)) {
                  const tt = () => {};
                  tn(et, Re, !!(1 & c.$flags$)), tt();
                }
              }
            }
            const m = V.$ancestorComponent$,
              R = () => pe(V, !0);
            m && m["s-rc"] ? m["s-rc"].push(R) : R();
          });
          return function (V, c, v, E) {
            return _.apply(this, arguments);
          };
        })(),
        yn = (_) => {
          Jt(_, "connectedCallback");
        },
        qn = (_) => {
          const T = (_["s-cr"] = _n.createComment(""));
          (T["s-cn"] = !0), _.insertBefore(T, _.firstChild);
        },
        cr = (_) => {
          Jt(_, "disconnectedCallback");
        },
        Gr = (function () {
          var _ = (0, a.A)(function* (T) {
            if (!(1 & pt.$flags$)) {
              const V = Qn(T);
              V.$rmListeners$ &&
                (V.$rmListeners$.map((c) => c()), (V.$rmListeners$ = void 0)),
                null != V && V.$lazyInstance$
                  ? cr(V.$lazyInstance$)
                  : null != V &&
                    V.$onReadyPromise$ &&
                    V.$onReadyPromise$.then(() => cr(V.$lazyInstance$));
            }
          });
          return function (V) {
            return _.apply(this, arguments);
          };
        })(),
        ur = (_) => {
          const T = _.cloneNode;
          _.cloneNode = function (V) {
            const c = this,
              v = c.shadowRoot && Xn,
              E = T.call(c, !!v && V);
            if (!v && V) {
              let R,
                B,
                m = 0;
              const Re = [
                "s-id",
                "s-cr",
                "s-lr",
                "s-rc",
                "s-sc",
                "s-p",
                "s-cn",
                "s-sr",
                "s-sn",
                "s-hn",
                "s-ol",
                "s-nr",
                "s-si",
                "s-rf",
              ];
              for (; m < c.childNodes.length; m++)
                (R = c.childNodes[m]["s-nr"]),
                  (B = Re.every((et) => !c.childNodes[m][et])),
                  R &&
                    (E.__appendChild
                      ? E.__appendChild(R.cloneNode(!0))
                      : E.appendChild(R.cloneNode(!0))),
                  B && E.appendChild(c.childNodes[m].cloneNode(!0));
            }
            return E;
          };
        },
        Ht = (_) => {
          (_.__appendChild = _.appendChild),
            (_.appendChild = function (T) {
              const V = (T["s-sn"] = ht(T)),
                c = Mt(this.childNodes, V, this.tagName);
              if (c) {
                const v = yt(c, V),
                  E = v[v.length - 1],
                  m = E.parentNode.insertBefore(T, E.nextSibling);
                return xt(this), m;
              }
              return this.__appendChild(T);
            });
        },
        Rr = (_) => {
          (_.__removeChild = _.removeChild),
            (_.removeChild = function (T) {
              if (T && typeof T["s-sn"] < "u") {
                const V = Mt(this.childNodes, T["s-sn"], this.tagName);
                if (V) {
                  const v = yt(V, T["s-sn"]).find((E) => E === T);
                  if (v) return v.remove(), void xt(this);
                }
              }
              return this.__removeChild(T);
            });
        },
        Nr = (_) => {
          const T = _.prepend;
          _.prepend = function (...V) {
            V.forEach((c) => {
              "string" == typeof c &&
                (c = this.ownerDocument.createTextNode(c));
              const v = (c["s-sn"] = ht(c)),
                E = Mt(this.childNodes, v, this.tagName);
              if (E) {
                const m = document.createTextNode("");
                (m["s-nr"] = c),
                  E["s-cr"].parentNode.__appendChild(m),
                  (c["s-ol"] = m);
                const B = yt(E, v)[0];
                return B.parentNode.insertBefore(c, B.nextSibling);
              }
              return (
                1 === c.nodeType && c.getAttribute("slot") && (c.hidden = !0),
                T.call(this, c)
              );
            });
          };
        },
        Gn = (_) => {
          _.append = function (...T) {
            T.forEach((V) => {
              "string" == typeof V &&
                (V = this.ownerDocument.createTextNode(V)),
                this.appendChild(V);
            });
          };
        },
        dr = (_) => {
          const T = _.insertAdjacentHTML;
          _.insertAdjacentHTML = function (V, c) {
            if ("afterbegin" !== V && "beforeend" !== V)
              return T.call(this, V, c);
            const v = this.ownerDocument.createElement("_");
            let E;
            if (((v.innerHTML = c), "afterbegin" === V))
              for (; (E = v.firstChild); ) this.prepend(E);
            else if ("beforeend" === V)
              for (; (E = v.firstChild); ) this.append(E);
          };
        },
        br = (_) => {
          _.insertAdjacentText = function (T, V) {
            this.insertAdjacentHTML(T, V);
          };
        },
        Or = (_) => {
          const T = _.insertAdjacentElement;
          _.insertAdjacentElement = function (V, c) {
            return "afterbegin" !== V && "beforeend" !== V
              ? T.call(this, V, c)
              : "afterbegin" === V
              ? (this.prepend(c), c)
              : ("beforeend" === V && this.append(c), c);
          };
        },
        fr = (_) => {
          const T = Object.getOwnPropertyDescriptor(
            Node.prototype,
            "textContent"
          );
          Object.defineProperty(_, "__textContent", T),
            Object.defineProperty(_, "textContent", {
              get() {
                return (
                  " " +
                  Ve(this.childNodes)
                    .map((v) => {
                      var E, m;
                      const R = [];
                      let B = v.nextSibling;
                      for (; B && B["s-sn"] === v["s-sn"]; )
                        (3 === B.nodeType || 1 === B.nodeType) &&
                          R.push(
                            null !==
                              (m =
                                null === (E = B.textContent) || void 0 === E
                                  ? void 0
                                  : E.trim()) && void 0 !== m
                              ? m
                              : ""
                          ),
                          (B = B.nextSibling);
                      return R.filter((Re) => "" !== Re).join(" ");
                    })
                    .filter((v) => "" !== v)
                    .join(" ") +
                  " "
                );
              },
              set(V) {
                Ve(this.childNodes).forEach((v) => {
                  let E = v.nextSibling;
                  for (; E && E["s-sn"] === v["s-sn"]; ) {
                    const m = E;
                    (E = E.nextSibling), m.remove();
                  }
                  if ("" === v["s-sn"]) {
                    const m = this.ownerDocument.createTextNode(V);
                    (m["s-sn"] = ""),
                      v.parentElement.insertBefore(m, v.nextSibling);
                  } else v.remove();
                });
              },
            });
        },
        hr = (_, T) => {
          class V extends Array {
            item(v) {
              return this[v];
            }
          }
          if (8 & T.$flags$) {
            const c = _.__lookupGetter__("childNodes");
            Object.defineProperty(_, "children", {
              get() {
                return this.childNodes.map((v) => 1 === v.nodeType);
              },
            }),
              Object.defineProperty(_, "childElementCount", {
                get: () => _.children.length,
              }),
              Object.defineProperty(_, "childNodes", {
                get() {
                  const v = c.call(this);
                  if (!(1 & pt.$flags$) && 2 & Qn(this).$flags$) {
                    const E = new V();
                    for (let m = 0; m < v.length; m++) {
                      const R = v[m]["s-nr"];
                      R && E.push(R);
                    }
                    return E;
                  }
                  return V.from(v);
                },
              });
          }
        },
        Ve = (_) => {
          const T = [];
          for (const V of Array.from(_))
            V["s-sr"] && T.push(V), T.push(...Ve(V.childNodes));
          return T;
        },
        ht = (_) =>
          _["s-sn"] || (1 === _.nodeType && _.getAttribute("slot")) || "",
        Mt = (_, T, V) => {
          let v,
            c = 0;
          for (; c < _.length; c++)
            if (
              ((v = _[c]),
              (v["s-sr"] && v["s-sn"] === T && v["s-hn"] === V) ||
                ((v = Mt(v.childNodes, T, V)), v))
            )
              return v;
          return null;
        },
        yt = (_, T) => {
          const V = [_];
          for (; (_ = _.nextSibling) && _["s-sn"] === T; ) V.push(_);
          return V;
        },
        pn = (_, T = {}) => {
          var V;
          const v = [],
            E = T.exclude || [],
            m = gn.customElements,
            R = _n.head,
            B = R.querySelector("meta[charset]"),
            Re = _n.createElement("style"),
            et = [],
            tt = _n.querySelectorAll(`[${Ae}]`);
          let Dt,
            Ze = !0,
            sn = 0;
          for (
            Object.assign(pt, T),
              pt.$resourcesUrl$ = new URL(
                T.resourcesUrl || "./",
                _n.baseURI
              ).href,
              pt.$flags$ |= 2;
            sn < tt.length;
            sn++
          )
            tn(tt[sn].getAttribute(Ae), le(tt[sn].innerHTML), !0);
          let Ln = !1;
          if (
            (_.map((un) => {
              un[1].map((er) => {
                var Rn;
                const tr = {
                  $flags$: er[0],
                  $tagName$: er[1],
                  $members$: er[2],
                  $listeners$: er[3],
                };
                4 & tr.$flags$ && (Ln = !0),
                  (tr.$members$ = er[2]),
                  (tr.$listeners$ = er[3]),
                  (tr.$attrsToReflect$ = []),
                  (tr.$watchers$ =
                    null !== (Rn = er[4]) && void 0 !== Rn ? Rn : {});
                const fo = tr.$tagName$,
                  Co = class extends HTMLElement {
                    constructor(Do) {
                      super(Do),
                        lo((Do = this), tr),
                        1 & tr.$flags$ &&
                          Do.attachShadow({
                            mode: "open",
                            delegatesFocus: !!(16 & tr.$flags$),
                          });
                    }
                    connectedCallback() {
                      Dt && (clearTimeout(Dt), (Dt = null)),
                        Ze
                          ? et.push(this)
                          : pt.jmp(() =>
                              ((_) => {
                                if (!(1 & pt.$flags$)) {
                                  const T = Qn(_),
                                    V = T.$cmpMeta$,
                                    c = () => {};
                                  if (1 & T.$flags$)
                                    On(_, T, V.$listeners$),
                                      null != T && T.$lazyInstance$
                                        ? yn(T.$lazyInstance$)
                                        : null != T &&
                                          T.$onReadyPromise$ &&
                                          T.$onReadyPromise$.then(() =>
                                            yn(T.$lazyInstance$)
                                          );
                                  else {
                                    let v;
                                    if (
                                      ((T.$flags$ |= 1),
                                      (v = _.getAttribute(Ye)),
                                      v)
                                    ) {
                                      if (1 & V.$flags$) {
                                        const E = an(
                                          _.shadowRoot,
                                          V,
                                          _.getAttribute("s-mode")
                                        );
                                        _.classList.remove(E + "-h", E + "-s");
                                      }
                                      ((_, T, V, c) => {
                                        const E = _.shadowRoot,
                                          m = [],
                                          B = E ? [] : null,
                                          Re = (c.$vnode$ = vt(T, null));
                                        pt.$orgLocNodes$ ||
                                          ge(
                                            _n.body,
                                            (pt.$orgLocNodes$ = new Map())
                                          ),
                                          (_[Ye] = V),
                                          _.removeAttribute(Ye),
                                          be(Re, m, [], B, _, _, V),
                                          m.map((et) => {
                                            const tt =
                                                et.$hostId$ + "." + et.$nodeId$,
                                              Dt = pt.$orgLocNodes$.get(tt),
                                              Ze = et.$elm$;
                                            Dt &&
                                              Xn &&
                                              "" === Dt["s-en"] &&
                                              Dt.parentNode.insertBefore(
                                                Ze,
                                                Dt.nextSibling
                                              ),
                                              E ||
                                                ((Ze["s-hn"] = T),
                                                Dt &&
                                                  ((Ze["s-ol"] = Dt),
                                                  (Ze["s-ol"]["s-nr"] = Ze))),
                                              pt.$orgLocNodes$.delete(tt);
                                          }),
                                          E &&
                                            B.map((et) => {
                                              et && E.appendChild(et);
                                            });
                                      })(_, V.$tagName$, v, T);
                                    }
                                    v || (12 & V.$flags$ && qn(_));
                                    {
                                      let E = _;
                                      for (; (E = E.parentNode || E.host); )
                                        if (
                                          (1 === E.nodeType &&
                                            E.hasAttribute("s-id") &&
                                            E["s-p"]) ||
                                          E["s-p"]
                                        ) {
                                          Un(T, (T.$ancestorComponent$ = E));
                                          break;
                                        }
                                    }
                                    V.$members$ &&
                                      Object.entries(V.$members$).map(
                                        ([E, [m]]) => {
                                          if (31 & m && _.hasOwnProperty(E)) {
                                            const R = _[E];
                                            delete _[E], (_[E] = R);
                                          }
                                        }
                                      ),
                                      zr(_, T, V);
                                  }
                                  c();
                                }
                              })(this)
                            );
                    }
                    disconnectedCallback() {
                      pt.jmp(() => Gr(this));
                    }
                    componentOnReady() {
                      return Qn(this).$onReadyPromise$;
                    }
                  };
                2 & tr.$flags$ &&
                  ((_, T) => {
                    ur(_),
                      Ht(_),
                      Gn(_),
                      Nr(_),
                      Or(_),
                      dr(_),
                      br(_),
                      fr(_),
                      hr(_, T),
                      Rr(_);
                  })(Co.prototype, tr),
                  (tr.$lazyBundleId$ = un[0]),
                  !E.includes(fo) &&
                    !m.get(fo) &&
                    (v.push(fo), m.define(fo, no(Co, tr, 1)));
              });
            }),
            v.length > 0 &&
              (Ln && (Re.textContent += xe),
              (Re.textContent +=
                v + "{visibility:hidden}.hydrated{visibility:inherit}"),
              Re.innerHTML.length))
          ) {
            Re.setAttribute("data-styles", "");
            const un = null !== (V = pt.$nonce$) && void 0 !== V ? V : Ge(_n);
            null != un && Re.setAttribute("nonce", un),
              R.insertBefore(Re, B ? B.nextSibling : R.firstChild);
          }
          (Ze = !1),
            et.length
              ? et.map((un) => un.connectedCallback())
              : pt.jmp(() => (Dt = setTimeout(qt, 30)));
        },
        On = (_, T, V, c) => {
          V &&
            V.map(([v, E, m]) => {
              const R = $r(_, v),
                B = ir(T, m),
                Re = ro(v);
              pt.ael(R, E, B, Re),
                (T.$rmListeners$ = T.$rmListeners$ || []).push(() =>
                  pt.rel(R, E, B, Re)
                );
            });
        },
        ir = (_, T) => (V) => {
          try {
            256 & _.$flags$
              ? _.$lazyInstance$[T](V)
              : (_.$queuedListeners$ = _.$queuedListeners$ || []).push([T, V]);
          } catch (c) {
            Tn(c);
          }
        },
        $r = (_, T) => (4 & T ? _n : 8 & T ? gn : 16 & T ? _n.body : _),
        ro = (_) =>
          Vr ? { passive: !!(1 & _), capture: !!(2 & _) } : !!(2 & _),
        Er = new WeakMap(),
        Qn = (_) => Er.get(_),
        _o = (_, T) => Er.set((T.$lazyInstance$ = _), T),
        lo = (_, T) => {
          const V = {
            $flags$: 0,
            $hostElement$: _,
            $cmpMeta$: T,
            $instanceValues$: new Map(),
          };
          return (
            (V.$onInstancePromise$ = new Promise(
              (c) => (V.$onInstanceResolve$ = c)
            )),
            (V.$onReadyPromise$ = new Promise((c) => (V.$onReadyResolve$ = c))),
            (_["s-p"] = []),
            (_["s-rc"] = []),
            On(_, V, T.$listeners$),
            Er.set(_, V)
          );
        },
        kn = (_, T) => T in _,
        Tn = (_, T) => (0, console.error)(_, T),
        $t = new Map(),
        Wn = (_, T, V) => {
          const c = _.$tagName$.replace(/-/g, "_"),
            v = _.$lazyBundleId$,
            E = $t.get(v);
          return E
            ? E[c]
            : F(8996)(`./${v}.entry.js`).then((m) => ($t.set(v, m), m[c]), Tn);
        },
        yr = new Map(),
        jn = [],
        gn = typeof window < "u" ? window : {},
        _n = gn.document || { head: {} },
        pt = {
          $flags$: 0,
          $resourcesUrl$: "",
          jmp: (_) => _(),
          raf: (_) => requestAnimationFrame(_),
          ael: (_, T, V, c) => _.addEventListener(T, V, c),
          rel: (_, T, V, c) => _.removeEventListener(T, V, c),
          ce: (_, T) => new CustomEvent(_, T),
        },
        co = (_) => {
          Object.assign(pt, _);
        },
        Xn = !0,
        Vr = (() => {
          let _ = !1;
          try {
            _n.addEventListener(
              "e",
              null,
              Object.defineProperty({}, "passive", {
                get() {
                  _ = !0;
                },
              })
            );
          } catch {}
          return _;
        })(),
        uo = (() => {
          try {
            return (
              new CSSStyleSheet(),
              "function" == typeof new CSSStyleSheet().replaceSync
            );
          } catch {}
          return !1;
        })(),
        Br = [],
        zt = [],
        oo = (_, T) => (V) => {
          _.push(V), ne || ((ne = !0), T && 4 & pt.$flags$ ? Z(x) : pt.raf(x));
        },
        L = (_) => {
          for (let T = 0; T < _.length; T++)
            try {
              _[T](performance.now());
            } catch (V) {
              Tn(V);
            }
          _.length = 0;
        },
        x = () => {
          L(Br), L(zt), (ne = Br.length > 0) && pt.raf(x);
        },
        Z = (_) => Promise.resolve(void 0).then(_),
        O = oo(Br, !1),
        q = oo(zt, !0);
    },
    6861: (_t, He, F) => {
      "use strict";
      F.d(He, {
        b: () => ae,
        c: () => X,
        d: () => $e,
        e: () => Me,
        g: () => Se,
        l: () => fe,
        s: () => he,
        t: () => ne,
        w: () => xe,
      });
      var a = F(467),
        l = F(8737),
        j = F(4920);
      const ae = "ionViewWillLeave",
        X = "ionViewDidLeave",
        $e = "ionViewWillUnload",
        ne = (Ce) =>
          new Promise((We, Ge) => {
            (0, l.w)(() => {
              De(Ce),
                ve(Ce).then(
                  (qe) => {
                    qe.animation && qe.animation.destroy(), ce(Ce), We(qe);
                  },
                  (qe) => {
                    ce(Ce), Ge(qe);
                  }
                );
            });
          }),
        De = (Ce) => {
          const We = Ce.enteringEl,
            Ge = Ce.leavingEl;
          Y(We, Ge, Ce.direction),
            Ce.showGoBack
              ? We.classList.add("can-go-back")
              : We.classList.remove("can-go-back"),
            he(We, !1),
            We.style.setProperty("pointer-events", "none"),
            Ge && (he(Ge, !1), Ge.style.setProperty("pointer-events", "none"));
        },
        ve = (function () {
          var Ce = (0, a.A)(function* (We) {
            const Ge = yield ue(We);
            return Ge && l.B.isBrowser ? ke(Ge, We) : Oe(We);
          });
          return function (Ge) {
            return Ce.apply(this, arguments);
          };
        })(),
        ce = (Ce) => {
          const We = Ce.enteringEl,
            Ge = Ce.leavingEl;
          We.classList.remove("ion-page-invisible"),
            We.style.removeProperty("pointer-events"),
            void 0 !== Ge &&
              (Ge.classList.remove("ion-page-invisible"),
              Ge.style.removeProperty("pointer-events"));
        },
        ue = (function () {
          var Ce = (0, a.A)(function* (We) {
            return We.leavingEl && We.animated && 0 !== We.duration
              ? We.animationBuilder
                ? We.animationBuilder
                : "ios" === We.mode
                ? (yield Promise.resolve().then(F.bind(F, 9435)))
                    .iosTransitionAnimation
                : (yield Promise.resolve().then(F.bind(F, 3792)))
                    .mdTransitionAnimation
              : void 0;
          });
          return function (Ge) {
            return Ce.apply(this, arguments);
          };
        })(),
        ke = (function () {
          var Ce = (0, a.A)(function* (We, Ge) {
            yield _e(Ge, !0);
            const qe = We(Ge.baseEl, Ge);
            Ae(Ge.enteringEl, Ge.leavingEl);
            const vt = yield Ye(qe, Ge);
            return (
              Ge.progressCallback && Ge.progressCallback(void 0),
              vt && te(Ge.enteringEl, Ge.leavingEl),
              { hasCompleted: vt, animation: qe }
            );
          });
          return function (Ge, qe) {
            return Ce.apply(this, arguments);
          };
        })(),
        Oe = (function () {
          var Ce = (0, a.A)(function* (We) {
            const Ge = We.enteringEl,
              qe = We.leavingEl;
            return (
              yield _e(We, !1), Ae(Ge, qe), te(Ge, qe), { hasCompleted: !0 }
            );
          });
          return function (Ge) {
            return Ce.apply(this, arguments);
          };
        })(),
        _e = (function () {
          var Ce = (0, a.A)(function* (We, Ge) {
            (void 0 !== We.deepWait ? We.deepWait : Ge) &&
              (yield Promise.all([Me(We.enteringEl), Me(We.leavingEl)])),
              yield we(We.viewIsReady, We.enteringEl);
          });
          return function (Ge, qe) {
            return Ce.apply(this, arguments);
          };
        })(),
        we = (function () {
          var Ce = (0, a.A)(function* (We, Ge) {
            We && (yield We(Ge));
          });
          return function (Ge, qe) {
            return Ce.apply(this, arguments);
          };
        })(),
        Ye = (Ce, We) => {
          const Ge = We.progressCallback,
            qe = new Promise((vt) => {
              Ce.onFinish((jt) => vt(1 === jt));
            });
          return Ge ? (Ce.progressStart(!0), Ge(Ce)) : Ce.play(), qe;
        },
        Ae = (Ce, We) => {
          fe(We, ae), fe(Ce, "ionViewWillEnter");
        },
        te = (Ce, We) => {
          fe(Ce, "ionViewDidEnter"), fe(We, X);
        },
        fe = (Ce, We) => {
          if (Ce) {
            const Ge = new CustomEvent(We, { bubbles: !1, cancelable: !1 });
            Ce.dispatchEvent(Ge);
          }
        },
        xe = () => new Promise((Ce) => (0, j.r)(() => (0, j.r)(() => Ce()))),
        Me = (function () {
          var Ce = (0, a.A)(function* (We) {
            const Ge = We;
            if (Ge) {
              if (null != Ge.componentOnReady) {
                if (null != (yield Ge.componentOnReady())) return;
              } else if (null != Ge.__registerHost)
                return void (yield new Promise((vt) => (0, j.r)(vt)));
              yield Promise.all(Array.from(Ge.children).map(Me));
            }
          });
          return function (Ge) {
            return Ce.apply(this, arguments);
          };
        })(),
        he = (Ce, We) => {
          We
            ? (Ce.setAttribute("aria-hidden", "true"),
              Ce.classList.add("ion-page-hidden"))
            : ((Ce.hidden = !1),
              Ce.removeAttribute("aria-hidden"),
              Ce.classList.remove("ion-page-hidden"));
        },
        Y = (Ce, We, Ge) => {
          void 0 !== Ce && (Ce.style.zIndex = "back" === Ge ? "99" : "101"),
            void 0 !== We && (We.style.zIndex = "100");
        },
        Se = (Ce) =>
          Ce.classList.contains("ion-page")
            ? Ce
            : Ce.querySelector(
                ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
              ) || Ce;
    },
    694: (_t, He, F) => {
      "use strict";
      F.d(He, { a: () => ne, b: () => vt, c: () => j, i: () => jt });
      var a = F(8737);
      class l {
        constructor() {
          this.m = new Map();
        }
        reset(ee) {
          this.m = new Map(Object.entries(ee));
        }
        get(ee, K) {
          const J = this.m.get(ee);
          return void 0 !== J ? J : K;
        }
        getBoolean(ee, K = !1) {
          const J = this.m.get(ee);
          return void 0 === J ? K : "string" == typeof J ? "true" === J : !!J;
        }
        getNumber(ee, K) {
          const J = parseFloat(this.m.get(ee));
          return isNaN(J) ? (void 0 !== K ? K : NaN) : J;
        }
        set(ee, K) {
          this.m.set(ee, K);
        }
      }
      const j = new l(),
        Ne = "ionic-persist-config",
        ne = (je, ee) => (
          "string" == typeof je && ((ee = je), (je = void 0)),
          ((je) => De(je))(je).includes(ee)
        ),
        De = (je = window) => {
          if (typeof je > "u") return [];
          je.Ionic = je.Ionic || {};
          let ee = je.Ionic.platforms;
          return (
            null == ee &&
              ((ee = je.Ionic.platforms = ve(je)),
              ee.forEach((K) =>
                je.document.documentElement.classList.add(`plt-${K}`)
              )),
            ee
          );
        },
        ve = (je) => {
          const ee = j.get("platform");
          return Object.keys(Ge).filter((K) => {
            const J = null == ee ? void 0 : ee[K];
            return "function" == typeof J ? J(je) : Ge[K](je);
          });
        },
        ue = (je) => !!(Ce(je, /iPad/i) || (Ce(je, /Macintosh/i) && te(je))),
        _e = (je) => Ce(je, /android|sink/i),
        te = (je) => We(je, "(any-pointer:coarse)"),
        xe = (je) => Me(je) || he(je),
        Me = (je) => !!(je.cordova || je.phonegap || je.PhoneGap),
        he = (je) => {
          const ee = je.Capacitor;
          return !(null == ee || !ee.isNative);
        },
        Ce = (je, ee) => ee.test(je.navigator.userAgent),
        We = (je, ee) => {
          var K;
          return null === (K = je.matchMedia) || void 0 === K
            ? void 0
            : K.call(je, ee).matches;
        },
        Ge = {
          ipad: ue,
          iphone: (je) => Ce(je, /iPhone/i),
          ios: (je) => Ce(je, /iPhone|iPod/i) || ue(je),
          android: _e,
          phablet: (je) => {
            const ee = je.innerWidth,
              K = je.innerHeight,
              J = Math.min(ee, K),
              re = Math.max(ee, K);
            return J > 390 && J < 520 && re > 620 && re < 800;
          },
          tablet: (je) => {
            const ee = je.innerWidth,
              K = je.innerHeight,
              J = Math.min(ee, K),
              re = Math.max(ee, K);
            return (
              ue(je) ||
              ((je) => _e(je) && !Ce(je, /mobile/i))(je) ||
              (J > 460 && J < 820 && re > 780 && re < 1400)
            );
          },
          cordova: Me,
          capacitor: he,
          electron: (je) => Ce(je, /electron/i),
          pwa: (je) => {
            var ee;
            return !!(
              (null !== (ee = je.matchMedia) &&
                void 0 !== ee &&
                ee.call(je, "(display-mode: standalone)").matches) ||
              je.navigator.standalone
            );
          },
          mobile: te,
          mobileweb: (je) => te(je) && !xe(je),
          desktop: (je) => !te(je),
          hybrid: xe,
        };
      let qe;
      const vt = (je) => (je && (0, a.g)(je)) || qe,
        jt = (je = {}) => {
          if (typeof window > "u") return;
          const ee = window.document,
            K = window,
            J = (K.Ionic = K.Ionic || {}),
            re = {};
          je._ael && (re.ael = je._ael),
            je._rel && (re.rel = je._rel),
            je._ce && (re.ce = je._ce),
            (0, a.a)(re);
          const be = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    ((je) => {
                      try {
                        const ee = je.sessionStorage.getItem(Ne);
                        return null !== ee ? JSON.parse(ee) : {};
                      } catch {
                        return {};
                      }
                    })(K)
                  ),
                  { persistConfig: !1 }
                ),
                J.config
              ),
              ((je) => {
                const ee = {};
                return (
                  je.location.search
                    .slice(1)
                    .split("&")
                    .map((K) => K.split("="))
                    .map(([K, J]) => [
                      decodeURIComponent(K),
                      decodeURIComponent(J),
                    ])
                    .filter(([K]) =>
                      ((je, ee) => je.substr(0, ee.length) === ee)(K, "ionic:")
                    )
                    .map(([K, J]) => [K.slice(6), J])
                    .forEach(([K, J]) => {
                      ee[K] = J;
                    }),
                  ee
                );
              })(K)
            ),
            je
          );
          j.reset(be),
            j.getBoolean("persistConfig") &&
              ((je, ee) => {
                try {
                  je.sessionStorage.setItem(Ne, JSON.stringify(ee));
                } catch {
                  return;
                }
              })(K, be),
            De(K),
            (J.config = j),
            (J.mode = qe =
              j.get(
                "mode",
                ee.documentElement.getAttribute("mode") ||
                  (ne(K, "ios") ? "ios" : "md")
              )),
            j.set("mode", qe),
            ee.documentElement.setAttribute("mode", qe),
            ee.documentElement.classList.add(qe),
            j.getBoolean("_testing") && j.set("animated", !1);
          const ge = (ft) => {
              var Tt;
              return null === (Tt = ft.tagName) || void 0 === Tt
                ? void 0
                : Tt.startsWith("ION-");
            },
            me = (ft) => ["ios", "md"].includes(ft);
          (0, a.c)((ft) => {
            for (; ft; ) {
              const Tt = ft.mode || ft.getAttribute("mode");
              if (Tt) {
                if (me(Tt)) return Tt;
                ge(ft) &&
                  console.warn(
                    'Invalid ionic mode: "' + Tt + '", expected: "ios" or "md"'
                  );
              }
              ft = ft.parentElement;
            }
            return qe;
          });
        };
    },
    9435: (_t, He, F) => {
      "use strict";
      F.r(He), F.d(He, { iosTransitionAnimation: () => ve, shadow: () => X });
      var a = F(9986),
        l = F(6861);
      F(8476), F(8737);
      const ae = (ue) => document.querySelector(`${ue}.ion-cloned-element`),
        X = (ue) => ue.shadowRoot || ue,
        $e = (ue) => {
          const ke =
              "ION-TABS" === ue.tagName ? ue : ue.querySelector("ion-tabs"),
            Oe =
              "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
          if (null != ke) {
            const _e = ke.querySelector(
              "ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)"
            );
            return null != _e ? _e.querySelector(Oe) : null;
          }
          return ue.querySelector(Oe);
        },
        Ne = (ue, ke) => {
          const Oe =
            "ION-TABS" === ue.tagName ? ue : ue.querySelector("ion-tabs");
          let _e = [];
          if (null != Oe) {
            const we = Oe.querySelector(
              "ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)"
            );
            null != we && (_e = we.querySelectorAll("ion-buttons"));
          } else _e = ue.querySelectorAll("ion-buttons");
          for (const we of _e) {
            const Ye = we.closest("ion-header"),
              Ae =
                Ye &&
                !Ye.classList.contains("header-collapse-condense-inactive"),
              te = we.querySelector("ion-back-button"),
              fe = we.classList.contains("buttons-collapse");
            if (
              null !== te &&
              ("start" === we.slot || "" === we.slot) &&
              ((fe && Ae && ke) || !fe)
            )
              return te;
          }
          return null;
        },
        ne = (ue, ke, Oe, _e, we, Ye, Ae, te, fe) => {
          var xe, Me;
          const he = ke ? `calc(100% - ${we.right + 4}px)` : we.left - 4 + "px",
            Y = ke ? "right" : "left",
            Se = ke ? "left" : "right",
            Ce = ke ? "right" : "left",
            We =
              (null === (xe = Ye.textContent) || void 0 === xe
                ? void 0
                : xe.trim()) ===
              (null === (Me = te.textContent) || void 0 === Me
                ? void 0
                : Me.trim()),
            qe = (fe.height - ce) / Ae.height,
            vt = We ? `scale(${fe.width / Ae.width}, ${qe})` : `scale(${qe})`,
            jt = "scale(1)",
            ee = X(_e).querySelector("ion-icon").getBoundingClientRect(),
            K = ke
              ? ee.width / 2 - (ee.right - we.right) + "px"
              : we.left - ee.width / 2 + "px",
            J = ke ? `-${window.innerWidth - we.right}px` : `${we.left}px`,
            re = `${fe.top}px`,
            be = `${we.top}px`,
            ft = Oe
              ? [
                  { offset: 0, transform: `translate3d(${J}, ${be}, 0)` },
                  { offset: 1, transform: `translate3d(${K}, ${re}, 0)` },
                ]
              : [
                  { offset: 0, transform: `translate3d(${K}, ${re}, 0)` },
                  { offset: 1, transform: `translate3d(${J}, ${be}, 0)` },
                ],
            It = Oe
              ? [
                  { offset: 0, opacity: 1, transform: jt },
                  { offset: 1, opacity: 0, transform: vt },
                ]
              : [
                  { offset: 0, opacity: 0, transform: vt },
                  { offset: 1, opacity: 1, transform: jt },
                ],
            Yt = Oe
              ? [
                  { offset: 0, opacity: 1, transform: "scale(1)" },
                  { offset: 0.2, opacity: 0, transform: "scale(0.6)" },
                  { offset: 1, opacity: 0, transform: "scale(0.6)" },
                ]
              : [
                  { offset: 0, opacity: 0, transform: "scale(0.6)" },
                  { offset: 0.6, opacity: 0, transform: "scale(0.6)" },
                  { offset: 1, opacity: 1, transform: "scale(1)" },
                ],
            tn = (0, a.c)(),
            an = (0, a.c)(),
            ct = (0, a.c)(),
            Ue = ae("ion-back-button"),
            le = X(Ue).querySelector(".button-text"),
            Fe = X(Ue).querySelector("ion-icon");
          (Ue.text = _e.text),
            (Ue.mode = _e.mode),
            (Ue.icon = _e.icon),
            (Ue.color = _e.color),
            (Ue.disabled = _e.disabled),
            Ue.style.setProperty("display", "block"),
            Ue.style.setProperty("position", "fixed"),
            an.addElement(Fe),
            tn.addElement(le),
            ct.addElement(Ue),
            ct
              .beforeStyles({ position: "absolute", top: "0px", [Ce]: "0px" })
              .keyframes(ft),
            tn
              .beforeStyles({ "transform-origin": `${Y} top` })
              .beforeAddWrite(() => {
                _e.style.setProperty("display", "none"),
                  Ue.style.setProperty(Y, he);
              })
              .afterAddWrite(() => {
                _e.style.setProperty("display", ""),
                  Ue.style.setProperty("display", "none"),
                  Ue.style.removeProperty(Y);
              })
              .keyframes(It),
            an
              .beforeStyles({ "transform-origin": `${Se} center` })
              .keyframes(Yt),
            ue.addAnimation([tn, an, ct]);
        },
        De = (ue, ke, Oe, _e, we, Ye, Ae, te) => {
          var fe, xe;
          const Me = ke ? "right" : "left",
            he = ke ? `calc(100% - ${we.right}px)` : `${we.left}px`,
            Se = `${we.top}px`,
            We = ke
              ? `-${window.innerWidth - te.right - 8}px`
              : te.x - 8 + "px",
            qe = te.y - 2 + "px",
            vt =
              (null === (fe = Ae.textContent) || void 0 === fe
                ? void 0
                : fe.trim()) ===
              (null === (xe = _e.textContent) || void 0 === xe
                ? void 0
                : xe.trim()),
            je = te.height / (Ye.height - ce),
            ee = "scale(1)",
            K = vt ? `scale(${te.width / Ye.width}, ${je})` : `scale(${je})`,
            be = Oe
              ? [
                  {
                    offset: 0,
                    opacity: 0,
                    transform: `translate3d(${We}, ${qe}, 0) ${K}`,
                  },
                  { offset: 0.1, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 1,
                    transform: `translate3d(0px, ${Se}, 0) ${ee}`,
                  },
                ]
              : [
                  {
                    offset: 0,
                    opacity: 0.99,
                    transform: `translate3d(0px, ${Se}, 0) ${ee}`,
                  },
                  { offset: 0.6, opacity: 0 },
                  {
                    offset: 1,
                    opacity: 0,
                    transform: `translate3d(${We}, ${qe}, 0) ${K}`,
                  },
                ],
            ge = ae("ion-title"),
            me = (0, a.c)();
          (ge.innerText = _e.innerText),
            (ge.size = _e.size),
            (ge.color = _e.color),
            me.addElement(ge),
            me
              .beforeStyles({
                "transform-origin": `${Me} top`,
                height: `${we.height}px`,
                display: "",
                position: "relative",
                [Me]: he,
              })
              .beforeAddWrite(() => {
                _e.style.setProperty("opacity", "0");
              })
              .afterAddWrite(() => {
                _e.style.setProperty("opacity", ""),
                  ge.style.setProperty("display", "none");
              })
              .keyframes(be),
            ue.addAnimation(me);
        },
        ve = (ue, ke) => {
          var Oe;
          try {
            const _e = "cubic-bezier(0.32,0.72,0,1)",
              we = "opacity",
              Ye = "transform",
              Ae = "0%",
              fe = "rtl" === ue.ownerDocument.dir,
              xe = fe ? "-99.5%" : "99.5%",
              Me = fe ? "33%" : "-33%",
              he = ke.enteringEl,
              Y = ke.leavingEl,
              Se = "back" === ke.direction,
              Ce = he.querySelector(":scope > ion-content"),
              We = he.querySelectorAll(
                ":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"
              ),
              Ge = he.querySelectorAll(":scope > ion-header > ion-toolbar"),
              qe = (0, a.c)(),
              vt = (0, a.c)();
            if (
              (qe
                .addElement(he)
                .duration(
                  (null !== (Oe = ke.duration) && void 0 !== Oe ? Oe : 0) || 540
                )
                .easing(ke.easing || _e)
                .fill("both")
                .beforeRemoveClass("ion-page-invisible"),
              Y && null != ue)
            ) {
              const K = (0, a.c)();
              K.addElement(ue), qe.addAnimation(K);
            }
            if (
              (Ce || 0 !== Ge.length || 0 !== We.length
                ? (vt.addElement(Ce), vt.addElement(We))
                : vt.addElement(
                    he.querySelector(
                      ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
                    )
                  ),
              qe.addAnimation(vt),
              Se
                ? vt
                    .beforeClearStyles([we])
                    .fromTo(
                      "transform",
                      `translateX(${Me})`,
                      `translateX(${Ae})`
                    )
                    .fromTo(we, 0.8, 1)
                : vt
                    .beforeClearStyles([we])
                    .fromTo(
                      "transform",
                      `translateX(${xe})`,
                      `translateX(${Ae})`
                    ),
              Ce)
            ) {
              const K = X(Ce).querySelector(".transition-effect");
              if (K) {
                const J = K.querySelector(".transition-cover"),
                  re = K.querySelector(".transition-shadow"),
                  be = (0, a.c)(),
                  ge = (0, a.c)(),
                  me = (0, a.c)();
                be
                  .addElement(K)
                  .beforeStyles({ opacity: "1", display: "block" })
                  .afterStyles({ opacity: "", display: "" }),
                  ge.addElement(J).beforeClearStyles([we]).fromTo(we, 0, 0.1),
                  me
                    .addElement(re)
                    .beforeClearStyles([we])
                    .fromTo(we, 0.03, 0.7),
                  be.addAnimation([ge, me]),
                  vt.addAnimation([be]);
              }
            }
            const jt = he.querySelector("ion-header.header-collapse-condense"),
              { forward: je, backward: ee } = ((ue, ke, Oe, _e, we) => {
                const Ye = Ne(_e, Oe),
                  Ae = $e(we),
                  te = $e(_e),
                  fe = Ne(we, Oe),
                  xe = null !== Ye && null !== Ae && !Oe,
                  Me = null !== te && null !== fe && Oe;
                if (xe) {
                  const he = Ae.getBoundingClientRect(),
                    Y = Ye.getBoundingClientRect(),
                    Se = X(Ye).querySelector(".button-text"),
                    Ce = Se.getBoundingClientRect(),
                    Ge = X(Ae)
                      .querySelector(".toolbar-title")
                      .getBoundingClientRect();
                  De(ue, ke, Oe, Ae, he, Ge, Se, Ce),
                    ne(ue, ke, Oe, Ye, Y, Se, Ce, Ae, Ge);
                } else if (Me) {
                  const he = te.getBoundingClientRect(),
                    Y = fe.getBoundingClientRect(),
                    Se = X(fe).querySelector(".button-text"),
                    Ce = Se.getBoundingClientRect(),
                    Ge = X(te)
                      .querySelector(".toolbar-title")
                      .getBoundingClientRect();
                  De(ue, ke, Oe, te, he, Ge, Se, Ce),
                    ne(ue, ke, Oe, fe, Y, Se, Ce, te, Ge);
                }
                return { forward: xe, backward: Me };
              })(qe, fe, Se, he, Y);
            if (
              (Ge.forEach((K) => {
                const J = (0, a.c)();
                J.addElement(K), qe.addAnimation(J);
                const re = (0, a.c)();
                re.addElement(K.querySelector("ion-title"));
                const be = (0, a.c)(),
                  ge = Array.from(
                    K.querySelectorAll("ion-buttons,[menuToggle]")
                  ),
                  me = K.closest("ion-header"),
                  ft =
                    null == me
                      ? void 0
                      : me.classList.contains(
                          "header-collapse-condense-inactive"
                        );
                let Tt;
                (Tt = ge.filter(
                  Se
                    ? (Yt) => {
                        const tn = Yt.classList.contains("buttons-collapse");
                        return (tn && !ft) || !tn;
                      }
                    : (Yt) => !Yt.classList.contains("buttons-collapse")
                )),
                  be.addElement(Tt);
                const lt = (0, a.c)();
                lt.addElement(
                  K.querySelectorAll(
                    ":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"
                  )
                );
                const It = (0, a.c)();
                It.addElement(X(K).querySelector(".toolbar-background"));
                const Rt = (0, a.c)(),
                  Ot = K.querySelector("ion-back-button");
                if (
                  (Ot && Rt.addElement(Ot),
                  J.addAnimation([re, be, lt, It, Rt]),
                  be.fromTo(we, 0.01, 1),
                  lt.fromTo(we, 0.01, 1),
                  Se)
                )
                  ft ||
                    re
                      .fromTo(
                        "transform",
                        `translateX(${Me})`,
                        `translateX(${Ae})`
                      )
                      .fromTo(we, 0.01, 1),
                    lt.fromTo(
                      "transform",
                      `translateX(${Me})`,
                      `translateX(${Ae})`
                    ),
                    Rt.fromTo(we, 0.01, 1);
                else if (
                  (jt ||
                    re
                      .fromTo(
                        "transform",
                        `translateX(${xe})`,
                        `translateX(${Ae})`
                      )
                      .fromTo(we, 0.01, 1),
                  lt.fromTo(
                    "transform",
                    `translateX(${xe})`,
                    `translateX(${Ae})`
                  ),
                  It.beforeClearStyles([we, "transform"]),
                  (null == me ? void 0 : me.translucent)
                    ? It.fromTo(
                        "transform",
                        fe ? "translateX(-100%)" : "translateX(100%)",
                        "translateX(0px)"
                      )
                    : It.fromTo(we, 0.01, "var(--opacity)"),
                  je || Rt.fromTo(we, 0.01, 1),
                  Ot && !je)
                ) {
                  const tn = (0, a.c)();
                  tn
                    .addElement(X(Ot).querySelector(".button-text"))
                    .fromTo(
                      "transform",
                      fe ? "translateX(-100px)" : "translateX(100px)",
                      "translateX(0px)"
                    ),
                    J.addAnimation(tn);
                }
              }),
              Y)
            ) {
              const K = (0, a.c)(),
                J = Y.querySelector(":scope > ion-content"),
                re = Y.querySelectorAll(":scope > ion-header > ion-toolbar"),
                be = Y.querySelectorAll(
                  ":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"
                );
              if (
                (J || 0 !== re.length || 0 !== be.length
                  ? (K.addElement(J), K.addElement(be))
                  : K.addElement(
                      Y.querySelector(
                        ":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"
                      )
                    ),
                qe.addAnimation(K),
                Se)
              ) {
                K.beforeClearStyles([we]).fromTo(
                  "transform",
                  `translateX(${Ae})`,
                  fe ? "translateX(-100%)" : "translateX(100%)"
                );
                const ge = (0, l.g)(Y);
                qe.afterAddWrite(() => {
                  "normal" === qe.getDirection() &&
                    ge.style.setProperty("display", "none");
                });
              } else
                K.fromTo(
                  "transform",
                  `translateX(${Ae})`,
                  `translateX(${Me})`
                ).fromTo(we, 1, 0.8);
              if (J) {
                const ge = X(J).querySelector(".transition-effect");
                if (ge) {
                  const me = ge.querySelector(".transition-cover"),
                    ft = ge.querySelector(".transition-shadow"),
                    Tt = (0, a.c)(),
                    lt = (0, a.c)(),
                    It = (0, a.c)();
                  Tt.addElement(ge)
                    .beforeStyles({ opacity: "1", display: "block" })
                    .afterStyles({ opacity: "", display: "" }),
                    lt
                      .addElement(me)
                      .beforeClearStyles([we])
                      .fromTo(we, 0.1, 0),
                    It.addElement(ft)
                      .beforeClearStyles([we])
                      .fromTo(we, 0.7, 0.03),
                    Tt.addAnimation([lt, It]),
                    K.addAnimation([Tt]);
                }
              }
              re.forEach((ge) => {
                const me = (0, a.c)();
                me.addElement(ge);
                const ft = (0, a.c)();
                ft.addElement(ge.querySelector("ion-title"));
                const Tt = (0, a.c)(),
                  lt = ge.querySelectorAll("ion-buttons,[menuToggle]"),
                  It = ge.closest("ion-header"),
                  Rt =
                    null == It
                      ? void 0
                      : It.classList.contains(
                          "header-collapse-condense-inactive"
                        ),
                  Ot = Array.from(lt).filter((le) => {
                    const Fe = le.classList.contains("buttons-collapse");
                    return (Fe && !Rt) || !Fe;
                  });
                Tt.addElement(Ot);
                const Yt = (0, a.c)(),
                  tn = ge.querySelectorAll(
                    ":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"
                  );
                tn.length > 0 && Yt.addElement(tn);
                const an = (0, a.c)();
                an.addElement(X(ge).querySelector(".toolbar-background"));
                const ct = (0, a.c)(),
                  Ue = ge.querySelector("ion-back-button");
                if (
                  (Ue && ct.addElement(Ue),
                  me.addAnimation([ft, Tt, Yt, ct, an]),
                  qe.addAnimation(me),
                  ct.fromTo(we, 0.99, 0),
                  Tt.fromTo(we, 0.99, 0),
                  Yt.fromTo(we, 0.99, 0),
                  Se)
                ) {
                  if (
                    (Rt ||
                      ft
                        .fromTo(
                          "transform",
                          `translateX(${Ae})`,
                          fe ? "translateX(-100%)" : "translateX(100%)"
                        )
                        .fromTo(we, 0.99, 0),
                    Yt.fromTo(
                      "transform",
                      `translateX(${Ae})`,
                      fe ? "translateX(-100%)" : "translateX(100%)"
                    ),
                    an.beforeClearStyles([we, "transform"]),
                    (null == It ? void 0 : It.translucent)
                      ? an.fromTo(
                          "transform",
                          "translateX(0px)",
                          fe ? "translateX(-100%)" : "translateX(100%)"
                        )
                      : an.fromTo(we, "var(--opacity)", 0),
                    Ue && !ee)
                  ) {
                    const Fe = (0, a.c)();
                    Fe.addElement(X(Ue).querySelector(".button-text")).fromTo(
                      "transform",
                      `translateX(${Ae})`,
                      `translateX(${(fe ? -124 : 124) + "px"})`
                    ),
                      me.addAnimation(Fe);
                  }
                } else
                  Rt ||
                    ft
                      .fromTo(
                        "transform",
                        `translateX(${Ae})`,
                        `translateX(${Me})`
                      )
                      .fromTo(we, 0.99, 0)
                      .afterClearStyles([Ye, we]),
                    Yt.fromTo(
                      "transform",
                      `translateX(${Ae})`,
                      `translateX(${Me})`
                    ).afterClearStyles([Ye, we]),
                    ct.afterClearStyles([we]),
                    ft.afterClearStyles([we]),
                    Tt.afterClearStyles([we]);
              });
            }
            return qe;
          } catch (_e) {
            throw _e;
          }
        },
        ce = 10;
    },
    3792: (_t, He, F) => {
      "use strict";
      F.r(He), F.d(He, { mdTransitionAnimation: () => G });
      var a = F(9986),
        l = F(6861);
      F(8476), F(8737);
      const G = (ae, X) => {
        var $e, Ne, Ie;
        const ve = "back" === X.direction,
          ue = X.leavingEl,
          ke = (0, l.g)(X.enteringEl),
          Oe = ke.querySelector("ion-toolbar"),
          _e = (0, a.c)();
        if (
          (_e
            .addElement(ke)
            .fill("both")
            .beforeRemoveClass("ion-page-invisible"),
          ve
            ? _e
                .duration(
                  (null !== ($e = X.duration) && void 0 !== $e ? $e : 0) || 200
                )
                .easing("cubic-bezier(0.47,0,0.745,0.715)")
            : _e
                .duration(
                  (null !== (Ne = X.duration) && void 0 !== Ne ? Ne : 0) || 280
                )
                .easing("cubic-bezier(0.36,0.66,0.04,1)")
                .fromTo("transform", "translateY(40px)", "translateY(0px)")
                .fromTo("opacity", 0.01, 1),
          Oe)
        ) {
          const we = (0, a.c)();
          we.addElement(Oe), _e.addAnimation(we);
        }
        if (ue && ve) {
          _e.duration(
            (null !== (Ie = X.duration) && void 0 !== Ie ? Ie : 0) || 200
          ).easing("cubic-bezier(0.47,0,0.745,0.715)");
          const we = (0, a.c)();
          we
            .addElement((0, l.g)(ue))
            .onFinish((Ye) => {
              1 === Ye &&
                we.elements.length > 0 &&
                we.elements[0].style.setProperty("display", "none");
            })
            .fromTo("transform", "translateY(0px)", "translateY(40px)")
            .fromTo("opacity", 1, 0),
            _e.addAnimation(we);
        }
        return _e;
      };
    },
    3972: (_t, He, F) => {
      "use strict";
      F.d(He, {
        B: () => It,
        G: () => Rt,
        O: () => Ot,
        a: () => Oe,
        b: () => _e,
        c: () => te,
        d: () => Yt,
        e: () => tn,
        f: () => ee,
        g: () => J,
        h: () => ge,
        i: () => ft,
        j: () => xe,
        k: () => Me,
        m: () => Ye,
        n: () => Ie,
        o: () => jt,
        q: () => ne,
        s: () => lt,
      });
      var a = F(467),
        l = F(8476),
        j = F(4920),
        se = F(2723),
        G = F(694),
        ae = F(8621),
        X = F(1970),
        $e = F(4929);
      const Ne =
          '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])',
        Ie = (Ue, le) => {
          const Fe = Ue.querySelector(Ne);
          De(Fe, null != le ? le : Ue);
        },
        ne = (Ue, le) => {
          const Fe = Array.from(Ue.querySelectorAll(Ne));
          De(Fe.length > 0 ? Fe[Fe.length - 1] : null, null != le ? le : Ue);
        },
        De = (Ue, le) => {
          let Fe = Ue;
          const at = null == Ue ? void 0 : Ue.shadowRoot;
          at && (Fe = at.querySelector(Ne) || Ue),
            Fe ? (0, j.f)(Fe) : le.focus();
        };
      let ve = 0,
        ce = 0;
      const ue = new WeakMap(),
        ke = (Ue) => ({
          create: (le) => he(Ue, le),
          dismiss: (le, Fe, at) => Ge(document, le, Fe, Ue, at),
          getTop: () =>
            (0, a.A)(function* () {
              return jt(document, Ue);
            })(),
        }),
        Oe = ke("ion-alert"),
        _e = ke("ion-action-sheet"),
        Ye = ke("ion-modal"),
        te = ke("ion-popover"),
        xe = (Ue) => {
          typeof document < "u" && We(document);
          const le = ve++;
          Ue.overlayIndex = le;
        },
        Me = (Ue) => (
          Ue.hasAttribute("id") || (Ue.id = "ion-overlay-" + ++ce), Ue.id
        ),
        he = (Ue, le) =>
          typeof window < "u" && typeof window.customElements < "u"
            ? window.customElements.whenDefined(Ue).then(() => {
                const Fe = document.createElement(Ue);
                return (
                  Fe.classList.add("overlay-hidden"),
                  Object.assign(
                    Fe,
                    Object.assign(Object.assign({}, le), { hasController: !0 })
                  ),
                  re(document).appendChild(Fe),
                  new Promise((at) => (0, j.c)(Fe, at))
                );
              })
            : Promise.resolve(),
        Se = (Ue, le) => {
          let Fe = Ue;
          const at = null == Ue ? void 0 : Ue.shadowRoot;
          at && (Fe = at.querySelector(Ne) || Ue),
            Fe ? (0, j.f)(Fe) : le.focus();
        },
        We = (Ue) => {
          0 === ve &&
            ((ve = 1),
            Ue.addEventListener(
              "focus",
              (le) => {
                ((Ue, le) => {
                  const Fe = jt(
                      le,
                      "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover"
                    ),
                    at = Ue.target;
                  Fe &&
                    at &&
                    !Fe.classList.contains("ion-disable-focus-trap") &&
                    (Fe.shadowRoot
                      ? (() => {
                          if (Fe.contains(at)) Fe.lastFocus = at;
                          else if ("ION-TOAST" === at.tagName)
                            Se(Fe.lastFocus, Fe);
                          else {
                            const cn = Fe.lastFocus;
                            Ie(Fe),
                              cn === le.activeElement && ne(Fe),
                              (Fe.lastFocus = le.activeElement);
                          }
                        })()
                      : (() => {
                          if (Fe === at) Fe.lastFocus = void 0;
                          else if ("ION-TOAST" === at.tagName)
                            Se(Fe.lastFocus, Fe);
                          else {
                            const cn = (0, j.g)(Fe);
                            if (!cn.contains(at)) return;
                            const Bt = cn.querySelector(".ion-overlay-wrapper");
                            if (!Bt) return;
                            if (
                              Bt.contains(at) ||
                              at === cn.querySelector("ion-backdrop")
                            )
                              Fe.lastFocus = at;
                            else {
                              const dt = Fe.lastFocus;
                              Ie(Bt, Fe),
                                dt === le.activeElement && ne(Bt, Fe),
                                (Fe.lastFocus = le.activeElement);
                            }
                          }
                        })());
                })(le, Ue);
              },
              !0
            ),
            Ue.addEventListener("ionBackButton", (le) => {
              const Fe = jt(Ue);
              null != Fe &&
                Fe.backdropDismiss &&
                le.detail.register(se.OVERLAY_BACK_BUTTON_PRIORITY, () => {
                  Fe.dismiss(void 0, It);
                });
            }),
            (0, se.shouldUseCloseWatcher)() ||
              Ue.addEventListener("keydown", (le) => {
                if ("Escape" === le.key) {
                  const Fe = jt(Ue);
                  null != Fe && Fe.backdropDismiss && Fe.dismiss(void 0, It);
                }
              }));
        },
        Ge = (Ue, le, Fe, at, Lt) => {
          const Xt = jt(Ue, at, Lt);
          return Xt
            ? Xt.dismiss(le, Fe)
            : Promise.reject("overlay does not exist");
        },
        vt = (Ue, le) =>
          ((Ue, le) => (
            void 0 === le &&
              (le =
                "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast"),
            Array.from(Ue.querySelectorAll(le)).filter(
              (Fe) => Fe.overlayIndex > 0
            )
          ))(Ue, le).filter(
            (Fe) => !((Ue) => Ue.classList.contains("overlay-hidden"))(Fe)
          ),
        jt = (Ue, le, Fe) => {
          const at = vt(Ue, le);
          return void 0 === Fe
            ? at[at.length - 1]
            : at.find((Lt) => Lt.id === Fe);
        },
        je = (Ue = !1) => {
          const Fe = re(document).querySelector(
            "ion-router-outlet, ion-nav, #ion-view-container-root"
          );
          Fe &&
            (Ue
              ? Fe.setAttribute("aria-hidden", "true")
              : Fe.removeAttribute("aria-hidden"));
        },
        ee = (function () {
          var Ue = (0, a.A)(function* (le, Fe, at, Lt, Xt) {
            var cn, Bt;
            if (le.presented) return;
            je(!0),
              document.body.classList.add(X.B),
              an(le.el),
              (le.presented = !0),
              le.willPresent.emit(),
              null === (cn = le.willPresentShorthand) ||
                void 0 === cn ||
                cn.emit();
            const dt = (0, G.b)(le),
              mt = le.enterAnimation
                ? le.enterAnimation
                : G.c.get(Fe, "ios" === dt ? at : Lt);
            (yield be(le, mt, le.el, Xt)) &&
              (le.didPresent.emit(),
              null === (Bt = le.didPresentShorthand) ||
                void 0 === Bt ||
                Bt.emit()),
              "ION-TOAST" !== le.el.tagName && K(le.el),
              le.keyboardClose &&
                (null === document.activeElement ||
                  !le.el.contains(document.activeElement)) &&
                le.el.focus(),
              le.el.removeAttribute("aria-hidden");
          });
          return function (Fe, at, Lt, Xt, cn) {
            return Ue.apply(this, arguments);
          };
        })(),
        K = (function () {
          var Ue = (0, a.A)(function* (le) {
            let Fe = document.activeElement;
            if (!Fe) return;
            const at = null == Fe ? void 0 : Fe.shadowRoot;
            at && (Fe = at.querySelector(Ne) || Fe),
              yield le.onDidDismiss(),
              (null === document.activeElement ||
                document.activeElement === document.body) &&
                Fe.focus();
          });
          return function (Fe) {
            return Ue.apply(this, arguments);
          };
        })(),
        J = (function () {
          var Ue = (0, a.A)(function* (le, Fe, at, Lt, Xt, cn, Bt) {
            var dt, mt;
            if (!le.presented) return !1;
            void 0 !== l.d &&
              1 === vt(l.d).length &&
              (je(!1), document.body.classList.remove(X.B)),
              (le.presented = !1);
            try {
              le.el.style.setProperty("pointer-events", "none"),
                le.willDismiss.emit({ data: Fe, role: at }),
                null === (dt = le.willDismissShorthand) ||
                  void 0 === dt ||
                  dt.emit({ data: Fe, role: at });
              const An = (0, G.b)(le),
                wn = le.leaveAnimation
                  ? le.leaveAnimation
                  : G.c.get(Lt, "ios" === An ? Xt : cn);
              at !== Rt && (yield be(le, wn, le.el, Bt)),
                le.didDismiss.emit({ data: Fe, role: at }),
                null === (mt = le.didDismissShorthand) ||
                  void 0 === mt ||
                  mt.emit({ data: Fe, role: at }),
                (ue.get(le) || []).forEach((En) => En.destroy()),
                ue.delete(le),
                le.el.classList.add("overlay-hidden"),
                le.el.style.removeProperty("pointer-events"),
                void 0 !== le.el.lastFocus && (le.el.lastFocus = void 0);
            } catch (An) {
              console.error(An);
            }
            return le.el.remove(), ct(), !0;
          });
          return function (Fe, at, Lt, Xt, cn, Bt, dt) {
            return Ue.apply(this, arguments);
          };
        })(),
        re = (Ue) => Ue.querySelector("ion-app") || Ue.body,
        be = (function () {
          var Ue = (0, a.A)(function* (le, Fe, at, Lt) {
            at.classList.remove("overlay-hidden");
            const cn = Fe(le.el, Lt);
            (!le.animated || !G.c.getBoolean("animated", !0)) && cn.duration(0),
              le.keyboardClose &&
                cn.beforeAddWrite(() => {
                  const dt = at.ownerDocument.activeElement;
                  null != dt &&
                    dt.matches("input,ion-input, ion-textarea") &&
                    dt.blur();
                });
            const Bt = ue.get(le) || [];
            return ue.set(le, [...Bt, cn]), yield cn.play(), !0;
          });
          return function (Fe, at, Lt, Xt) {
            return Ue.apply(this, arguments);
          };
        })(),
        ge = (Ue, le) => {
          let Fe;
          const at = new Promise((Lt) => (Fe = Lt));
          return (
            me(Ue, le, (Lt) => {
              Fe(Lt.detail);
            }),
            at
          );
        },
        me = (Ue, le, Fe) => {
          const at = (Lt) => {
            (0, j.b)(Ue, le, at), Fe(Lt);
          };
          (0, j.a)(Ue, le, at);
        },
        ft = (Ue) => "cancel" === Ue || Ue === It,
        Tt = (Ue) => Ue(),
        lt = (Ue, le) => {
          if ("function" == typeof Ue)
            return G.c.get(
              "_zoneGate",
              Tt
            )(() => {
              try {
                return Ue(le);
              } catch (at) {
                throw at;
              }
            });
        },
        It = "backdrop",
        Rt = "gesture",
        Ot = 39,
        Yt = (Ue) => {
          let Fe,
            le = !1;
          const at = (0, ae.C)(),
            Lt = (Bt = !1) => {
              if (Fe && !Bt) return { delegate: Fe, inline: le };
              const { el: dt, hasController: mt, delegate: In } = Ue;
              return (
                (le = null !== dt.parentNode && !mt),
                (Fe = le ? In || at : In),
                { inline: le, delegate: Fe }
              );
            };
          return {
            attachViewToDom: (function () {
              var Bt = (0, a.A)(function* (dt) {
                const { delegate: mt } = Lt(!0);
                if (mt) return yield mt.attachViewToDom(Ue.el, dt);
                const { hasController: In } = Ue;
                if (In && void 0 !== dt)
                  throw new Error("framework delegate is missing");
                return null;
              });
              return function (mt) {
                return Bt.apply(this, arguments);
              };
            })(),
            removeViewFromDom: () => {
              const { delegate: Bt } = Lt();
              Bt &&
                void 0 !== Ue.el &&
                Bt.removeViewFromDom(Ue.el.parentElement, Ue.el);
            },
          };
        },
        tn = () => {
          let Ue;
          const le = () => {
            Ue && (Ue(), (Ue = void 0));
          };
          return {
            addClickListener: (at, Lt) => {
              le();
              const Xt = void 0 !== Lt ? document.getElementById(Lt) : null;
              Xt
                ? (Ue = ((Bt, dt) => {
                    const mt = () => {
                      dt.present();
                    };
                    return (
                      Bt.addEventListener("click", mt),
                      () => {
                        Bt.removeEventListener("click", mt);
                      }
                    );
                  })(Xt, at))
                : (0, $e.p)(
                    `A trigger element with the ID "${Lt}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`,
                    at
                  );
            },
            removeClickListener: le,
          };
        },
        an = (Ue) => {
          var le;
          if (void 0 === l.d) return;
          const Fe = vt(l.d);
          for (let at = Fe.length - 1; at >= 0; at--) {
            const Lt = Fe[at],
              Xt = null !== (le = Fe[at + 1]) && void 0 !== le ? le : Ue;
            (Xt.hasAttribute("aria-hidden") || "ION-TOAST" !== Xt.tagName) &&
              Lt.setAttribute("aria-hidden", "true");
          }
        },
        ct = () => {
          if (void 0 === l.d) return;
          const Ue = vt(l.d);
          for (let le = Ue.length - 1; le >= 0; le--) {
            const Fe = Ue[le];
            if ((Fe.removeAttribute("aria-hidden"), "ION-TOAST" !== Fe.tagName))
              break;
          }
        };
    },
    7126: (_t, He, F) => {
      "use strict";
      var a = F(4438),
        l = F(345),
        j = F(70),
        se = F(5032),
        G = F(3819);
      const ae = [
        {
          path: "home",
          loadComponent: () =>
            F.e(1624)
              .then(F.bind(F, 1624))
              .then((Ne) => Ne.HomePage),
        },
        { path: "", redirectTo: "home", pathMatch: "full" },
      ];
      let X = (() => {
        var Ne;
        class Ie {
          constructor() {}
        }
        return (
          ((Ne = Ie).ɵfac = function (De) {
            return new (De || Ne)();
          }),
          (Ne.ɵcmp = a.VBU({
            type: Ne,
            selectors: [["app-root"]],
            standalone: !0,
            features: [a.aNF],
            decls: 2,
            vars: 0,
            template: function (De, ve) {
              1 & De &&
                (a.j41(0, "ion-app"), a.nrm(1, "ion-router-outlet"), a.k0s());
            },
            dependencies: [G.bv, G.U1, G.Rg],
            encapsulation: 2,
          })),
          Ie
        );
      })();
      (0, a.SmG)(),
        (0, l.B8)(X, {
          providers: [
            { provide: j.b, useClass: se.jM },
            (0, a.oKB)(G.bv.forRoot()),
            (0, j.lh)(ae),
          ],
        });
    },
    4412: (_t, He, F) => {
      "use strict";
      F.d(He, { t: () => l });
      var a = F(1413);
      class l extends a.B {
        constructor(se) {
          super(), (this._value = se);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(se) {
          const G = super._subscribe(se);
          return !G.closed && se.next(this._value), G;
        }
        getValue() {
          const { hasError: se, thrownError: G, _value: ae } = this;
          if (se) throw G;
          return this._throwIfClosed(), ae;
        }
        next(se) {
          super.next((this._value = se));
        }
      }
    },
    1985: (_t, He, F) => {
      "use strict";
      F.d(He, { c: () => $e });
      var a = F(7707),
        l = F(8359),
        j = F(3494),
        se = F(1203),
        G = F(1026),
        ae = F(8071),
        X = F(9786);
      let $e = (() => {
        class De {
          constructor(ce) {
            ce && (this._subscribe = ce);
          }
          lift(ce) {
            const ue = new De();
            return (ue.source = this), (ue.operator = ce), ue;
          }
          subscribe(ce, ue, ke) {
            const Oe = (function ne(De) {
              return (
                (De && De instanceof a.vU) ||
                ((function Ie(De) {
                  return (
                    De &&
                    (0, ae.T)(De.next) &&
                    (0, ae.T)(De.error) &&
                    (0, ae.T)(De.complete)
                  );
                })(De) &&
                  (0, l.Uv)(De))
              );
            })(ce)
              ? ce
              : new a.Ms(ce, ue, ke);
            return (
              (0, X.Y)(() => {
                const { operator: _e, source: we } = this;
                Oe.add(
                  _e
                    ? _e.call(Oe, we)
                    : we
                    ? this._subscribe(Oe)
                    : this._trySubscribe(Oe)
                );
              }),
              Oe
            );
          }
          _trySubscribe(ce) {
            try {
              return this._subscribe(ce);
            } catch (ue) {
              ce.error(ue);
            }
          }
          forEach(ce, ue) {
            return new (ue = Ne(ue))((ke, Oe) => {
              const _e = new a.Ms({
                next: (we) => {
                  try {
                    ce(we);
                  } catch (Ye) {
                    Oe(Ye), _e.unsubscribe();
                  }
                },
                error: Oe,
                complete: ke,
              });
              this.subscribe(_e);
            });
          }
          _subscribe(ce) {
            var ue;
            return null === (ue = this.source) || void 0 === ue
              ? void 0
              : ue.subscribe(ce);
          }
          [j.s]() {
            return this;
          }
          pipe(...ce) {
            return (0, se.m)(ce)(this);
          }
          toPromise(ce) {
            return new (ce = Ne(ce))((ue, ke) => {
              let Oe;
              this.subscribe(
                (_e) => (Oe = _e),
                (_e) => ke(_e),
                () => ue(Oe)
              );
            });
          }
        }
        return (De.create = (ve) => new De(ve)), De;
      })();
      function Ne(De) {
        var ve;
        return null !== (ve = null != De ? De : G.$.Promise) && void 0 !== ve
          ? ve
          : Promise;
      }
    },
    1413: (_t, He, F) => {
      "use strict";
      F.d(He, { B: () => X });
      var a = F(1985),
        l = F(8359);
      const se = (0, F(1853).L)(
        (Ne) =>
          function () {
            Ne(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      var G = F(7908),
        ae = F(9786);
      let X = (() => {
        class Ne extends a.c {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(ne) {
            const De = new $e(this, this);
            return (De.operator = ne), De;
          }
          _throwIfClosed() {
            if (this.closed) throw new se();
          }
          next(ne) {
            (0, ae.Y)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const De of this.currentObservers) De.next(ne);
              }
            });
          }
          error(ne) {
            (0, ae.Y)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = ne);
                const { observers: De } = this;
                for (; De.length; ) De.shift().error(ne);
              }
            });
          }
          complete() {
            (0, ae.Y)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: ne } = this;
                for (; ne.length; ) ne.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var ne;
            return (
              (null === (ne = this.observers) || void 0 === ne
                ? void 0
                : ne.length) > 0
            );
          }
          _trySubscribe(ne) {
            return this._throwIfClosed(), super._trySubscribe(ne);
          }
          _subscribe(ne) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(ne),
              this._innerSubscribe(ne)
            );
          }
          _innerSubscribe(ne) {
            const { hasError: De, isStopped: ve, observers: ce } = this;
            return De || ve
              ? l.Kn
              : ((this.currentObservers = null),
                ce.push(ne),
                new l.yU(() => {
                  (this.currentObservers = null), (0, G.o)(ce, ne);
                }));
          }
          _checkFinalizedStatuses(ne) {
            const { hasError: De, thrownError: ve, isStopped: ce } = this;
            De ? ne.error(ve) : ce && ne.complete();
          }
          asObservable() {
            const ne = new a.c();
            return (ne.source = this), ne;
          }
        }
        return (Ne.create = (Ie, ne) => new $e(Ie, ne)), Ne;
      })();
      class $e extends X {
        constructor(Ie, ne) {
          super(), (this.destination = Ie), (this.source = ne);
        }
        next(Ie) {
          var ne, De;
          null ===
            (De =
              null === (ne = this.destination) || void 0 === ne
                ? void 0
                : ne.next) ||
            void 0 === De ||
            De.call(ne, Ie);
        }
        error(Ie) {
          var ne, De;
          null ===
            (De =
              null === (ne = this.destination) || void 0 === ne
                ? void 0
                : ne.error) ||
            void 0 === De ||
            De.call(ne, Ie);
        }
        complete() {
          var Ie, ne;
          null ===
            (ne =
              null === (Ie = this.destination) || void 0 === Ie
                ? void 0
                : Ie.complete) ||
            void 0 === ne ||
            ne.call(Ie);
        }
        _subscribe(Ie) {
          var ne, De;
          return null !==
            (De =
              null === (ne = this.source) || void 0 === ne
                ? void 0
                : ne.subscribe(Ie)) && void 0 !== De
            ? De
            : l.Kn;
        }
      }
    },
    7707: (_t, He, F) => {
      "use strict";
      F.d(He, { Ms: () => ke, vU: () => De });
      var a = F(8071),
        l = F(8359),
        j = F(1026),
        se = F(5334),
        G = F(5343);
      const ae = Ne("C", void 0, void 0);
      function Ne(Ae, te, fe) {
        return { kind: Ae, value: te, error: fe };
      }
      var Ie = F(9270),
        ne = F(9786);
      class De extends l.yU {
        constructor(te) {
          super(),
            (this.isStopped = !1),
            te
              ? ((this.destination = te), (0, l.Uv)(te) && te.add(this))
              : (this.destination = Ye);
        }
        static create(te, fe, xe) {
          return new ke(te, fe, xe);
        }
        next(te) {
          this.isStopped
            ? we(
                (function $e(Ae) {
                  return Ne("N", Ae, void 0);
                })(te),
                this
              )
            : this._next(te);
        }
        error(te) {
          this.isStopped
            ? we(
                (function X(Ae) {
                  return Ne("E", void 0, Ae);
                })(te),
                this
              )
            : ((this.isStopped = !0), this._error(te));
        }
        complete() {
          this.isStopped
            ? we(ae, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(te) {
          this.destination.next(te);
        }
        _error(te) {
          try {
            this.destination.error(te);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const ve = Function.prototype.bind;
      function ce(Ae, te) {
        return ve.call(Ae, te);
      }
      class ue {
        constructor(te) {
          this.partialObserver = te;
        }
        next(te) {
          const { partialObserver: fe } = this;
          if (fe.next)
            try {
              fe.next(te);
            } catch (xe) {
              Oe(xe);
            }
        }
        error(te) {
          const { partialObserver: fe } = this;
          if (fe.error)
            try {
              fe.error(te);
            } catch (xe) {
              Oe(xe);
            }
          else Oe(te);
        }
        complete() {
          const { partialObserver: te } = this;
          if (te.complete)
            try {
              te.complete();
            } catch (fe) {
              Oe(fe);
            }
        }
      }
      class ke extends De {
        constructor(te, fe, xe) {
          let Me;
          if ((super(), (0, a.T)(te) || !te))
            Me = {
              next: null != te ? te : void 0,
              error: null != fe ? fe : void 0,
              complete: null != xe ? xe : void 0,
            };
          else {
            let he;
            this && j.$.useDeprecatedNextContext
              ? ((he = Object.create(te)),
                (he.unsubscribe = () => this.unsubscribe()),
                (Me = {
                  next: te.next && ce(te.next, he),
                  error: te.error && ce(te.error, he),
                  complete: te.complete && ce(te.complete, he),
                }))
              : (Me = te);
          }
          this.destination = new ue(Me);
        }
      }
      function Oe(Ae) {
        j.$.useDeprecatedSynchronousErrorHandling
          ? (0, ne.l)(Ae)
          : (0, se.m)(Ae);
      }
      function we(Ae, te) {
        const { onStoppedNotification: fe } = j.$;
        fe && Ie.f.setTimeout(() => fe(Ae, te));
      }
      const Ye = {
        closed: !0,
        next: G.l,
        error: function _e(Ae) {
          throw Ae;
        },
        complete: G.l,
      };
    },
    8359: (_t, He, F) => {
      "use strict";
      F.d(He, { Kn: () => ae, yU: () => G, Uv: () => X });
      var a = F(8071);
      const j = (0, F(1853).L)(
        (Ne) =>
          function (ne) {
            Ne(this),
              (this.message = ne
                ? `${ne.length} errors occurred during unsubscription:\n${ne
                    .map((De, ve) => `${ve + 1}) ${De.toString()}`)
                    .join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = ne);
          }
      );
      var se = F(7908);
      class G {
        constructor(Ie) {
          (this.initialTeardown = Ie),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let Ie;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: ne } = this;
            if (ne)
              if (((this._parentage = null), Array.isArray(ne)))
                for (const ce of ne) ce.remove(this);
              else ne.remove(this);
            const { initialTeardown: De } = this;
            if ((0, a.T)(De))
              try {
                De();
              } catch (ce) {
                Ie = ce instanceof j ? ce.errors : [ce];
              }
            const { _finalizers: ve } = this;
            if (ve) {
              this._finalizers = null;
              for (const ce of ve)
                try {
                  $e(ce);
                } catch (ue) {
                  (Ie = null != Ie ? Ie : []),
                    ue instanceof j
                      ? (Ie = [...Ie, ...ue.errors])
                      : Ie.push(ue);
                }
            }
            if (Ie) throw new j(Ie);
          }
        }
        add(Ie) {
          var ne;
          if (Ie && Ie !== this)
            if (this.closed) $e(Ie);
            else {
              if (Ie instanceof G) {
                if (Ie.closed || Ie._hasParent(this)) return;
                Ie._addParent(this);
              }
              (this._finalizers =
                null !== (ne = this._finalizers) && void 0 !== ne
                  ? ne
                  : []).push(Ie);
            }
        }
        _hasParent(Ie) {
          const { _parentage: ne } = this;
          return ne === Ie || (Array.isArray(ne) && ne.includes(Ie));
        }
        _addParent(Ie) {
          const { _parentage: ne } = this;
          this._parentage = Array.isArray(ne)
            ? (ne.push(Ie), ne)
            : ne
            ? [ne, Ie]
            : Ie;
        }
        _removeParent(Ie) {
          const { _parentage: ne } = this;
          ne === Ie
            ? (this._parentage = null)
            : Array.isArray(ne) && (0, se.o)(ne, Ie);
        }
        remove(Ie) {
          const { _finalizers: ne } = this;
          ne && (0, se.o)(ne, Ie), Ie instanceof G && Ie._removeParent(this);
        }
      }
      G.EMPTY = (() => {
        const Ne = new G();
        return (Ne.closed = !0), Ne;
      })();
      const ae = G.EMPTY;
      function X(Ne) {
        return (
          Ne instanceof G ||
          (Ne &&
            "closed" in Ne &&
            (0, a.T)(Ne.remove) &&
            (0, a.T)(Ne.add) &&
            (0, a.T)(Ne.unsubscribe))
        );
      }
      function $e(Ne) {
        (0, a.T)(Ne) ? Ne() : Ne.unsubscribe();
      }
    },
    1026: (_t, He, F) => {
      "use strict";
      F.d(He, { $: () => a });
      const a = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    4572: (_t, He, F) => {
      "use strict";
      F.d(He, { z: () => Ie });
      var a = F(1985),
        l = F(3073),
        j = F(6648),
        se = F(3669),
        G = F(6450),
        ae = F(3794),
        X = F(8496),
        $e = F(4360),
        Ne = F(5225);
      function Ie(...ve) {
        const ce = (0, ae.lI)(ve),
          ue = (0, ae.ms)(ve),
          { args: ke, keys: Oe } = (0, l.D)(ve);
        if (0 === ke.length) return (0, j.H)([], ce);
        const _e = new a.c(
          (function ne(ve, ce, ue = se.D) {
            return (ke) => {
              De(
                ce,
                () => {
                  const { length: Oe } = ve,
                    _e = new Array(Oe);
                  let we = Oe,
                    Ye = Oe;
                  for (let Ae = 0; Ae < Oe; Ae++)
                    De(
                      ce,
                      () => {
                        const te = (0, j.H)(ve[Ae], ce);
                        let fe = !1;
                        te.subscribe(
                          (0, $e._)(
                            ke,
                            (xe) => {
                              (_e[Ae] = xe),
                                fe || ((fe = !0), Ye--),
                                Ye || ke.next(ue(_e.slice()));
                            },
                            () => {
                              --we || ke.complete();
                            }
                          )
                        );
                      },
                      ke
                    );
                },
                ke
              );
            };
          })(ke, ce, Oe ? (we) => (0, X.e)(Oe, we) : se.D)
        );
        return ue ? _e.pipe((0, G.I)(ue)) : _e;
      }
      function De(ve, ce, ue) {
        ve ? (0, Ne.N)(ue, ve, ce) : ce();
      }
    },
    6648: (_t, He, F) => {
      "use strict";
      F.d(He, { H: () => xe });
      var a = F(8750),
        l = F(5225),
        j = F(9974),
        se = F(4360);
      function G(Me, he = 0) {
        return (0, j.N)((Y, Se) => {
          Y.subscribe(
            (0, se._)(
              Se,
              (Ce) => (0, l.N)(Se, Me, () => Se.next(Ce), he),
              () => (0, l.N)(Se, Me, () => Se.complete(), he),
              (Ce) => (0, l.N)(Se, Me, () => Se.error(Ce), he)
            )
          );
        });
      }
      function ae(Me, he = 0) {
        return (0, j.N)((Y, Se) => {
          Se.add(Me.schedule(() => Y.subscribe(Se), he));
        });
      }
      var Ne = F(1985),
        ne = F(4761),
        De = F(8071);
      function ce(Me, he) {
        if (!Me) throw new Error("Iterable cannot be null");
        return new Ne.c((Y) => {
          (0, l.N)(Y, he, () => {
            const Se = Me[Symbol.asyncIterator]();
            (0, l.N)(
              Y,
              he,
              () => {
                Se.next().then((Ce) => {
                  Ce.done ? Y.complete() : Y.next(Ce.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var ue = F(5055),
        ke = F(9858),
        Oe = F(7441),
        _e = F(5397),
        we = F(7953),
        Ye = F(591),
        Ae = F(5196);
      function xe(Me, he) {
        return he
          ? (function fe(Me, he) {
              if (null != Me) {
                if ((0, ue.l)(Me))
                  return (function X(Me, he) {
                    return (0, a.Tg)(Me).pipe(ae(he), G(he));
                  })(Me, he);
                if ((0, Oe.X)(Me))
                  return (function Ie(Me, he) {
                    return new Ne.c((Y) => {
                      let Se = 0;
                      return he.schedule(function () {
                        Se === Me.length
                          ? Y.complete()
                          : (Y.next(Me[Se++]), Y.closed || this.schedule());
                      });
                    });
                  })(Me, he);
                if ((0, ke.y)(Me))
                  return (function $e(Me, he) {
                    return (0, a.Tg)(Me).pipe(ae(he), G(he));
                  })(Me, he);
                if ((0, we.T)(Me)) return ce(Me, he);
                if ((0, _e.x)(Me))
                  return (function ve(Me, he) {
                    return new Ne.c((Y) => {
                      let Se;
                      return (
                        (0, l.N)(Y, he, () => {
                          (Se = Me[ne.l]()),
                            (0, l.N)(
                              Y,
                              he,
                              () => {
                                let Ce, We;
                                try {
                                  ({ value: Ce, done: We } = Se.next());
                                } catch (Ge) {
                                  return void Y.error(Ge);
                                }
                                We ? Y.complete() : Y.next(Ce);
                              },
                              0,
                              !0
                            );
                        }),
                        () =>
                          (0, De.T)(null == Se ? void 0 : Se.return) &&
                          Se.return()
                      );
                    });
                  })(Me, he);
                if ((0, Ae.U)(Me))
                  return (function te(Me, he) {
                    return ce((0, Ae.C)(Me), he);
                  })(Me, he);
              }
              throw (0, Ye.L)(Me);
            })(Me, he)
          : (0, a.Tg)(Me);
      }
    },
    3726: (_t, He, F) => {
      "use strict";
      F.d(He, { R: () => Ie });
      var a = F(8750),
        l = F(1985),
        j = F(1397),
        se = F(7441),
        G = F(8071),
        ae = F(6450);
      const X = ["addListener", "removeListener"],
        $e = ["addEventListener", "removeEventListener"],
        Ne = ["on", "off"];
      function Ie(ue, ke, Oe, _e) {
        if (((0, G.T)(Oe) && ((_e = Oe), (Oe = void 0)), _e))
          return Ie(ue, ke, Oe).pipe((0, ae.I)(_e));
        const [we, Ye] = (function ce(ue) {
          return (
            (0, G.T)(ue.addEventListener) && (0, G.T)(ue.removeEventListener)
          );
        })(ue)
          ? $e.map((Ae) => (te) => ue[Ae](ke, te, Oe))
          : (function De(ue) {
              return (0, G.T)(ue.addListener) && (0, G.T)(ue.removeListener);
            })(ue)
          ? X.map(ne(ue, ke))
          : (function ve(ue) {
              return (0, G.T)(ue.on) && (0, G.T)(ue.off);
            })(ue)
          ? Ne.map(ne(ue, ke))
          : [];
        if (!we && (0, se.X)(ue))
          return (0, j.Z)((Ae) => Ie(Ae, ke, Oe))((0, a.Tg)(ue));
        if (!we) throw new TypeError("Invalid event target");
        return new l.c((Ae) => {
          const te = (...fe) => Ae.next(1 < fe.length ? fe : fe[0]);
          return we(te), () => Ye(te);
        });
      }
      function ne(ue, ke) {
        return (Oe) => (_e) => ue[Oe](ke, _e);
      }
    },
    8750: (_t, He, F) => {
      "use strict";
      F.d(He, { Tg: () => ve });
      var a = F(1635),
        l = F(7441),
        j = F(9858),
        se = F(1985),
        G = F(5055),
        ae = F(7953),
        X = F(591),
        $e = F(5397),
        Ne = F(5196),
        Ie = F(8071),
        ne = F(5334),
        De = F(3494);
      function ve(Ae) {
        if (Ae instanceof se.c) return Ae;
        if (null != Ae) {
          if ((0, G.l)(Ae))
            return (function ce(Ae) {
              return new se.c((te) => {
                const fe = Ae[De.s]();
                if ((0, Ie.T)(fe.subscribe)) return fe.subscribe(te);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(Ae);
          if ((0, l.X)(Ae))
            return (function ue(Ae) {
              return new se.c((te) => {
                for (let fe = 0; fe < Ae.length && !te.closed; fe++)
                  te.next(Ae[fe]);
                te.complete();
              });
            })(Ae);
          if ((0, j.y)(Ae))
            return (function ke(Ae) {
              return new se.c((te) => {
                Ae.then(
                  (fe) => {
                    te.closed || (te.next(fe), te.complete());
                  },
                  (fe) => te.error(fe)
                ).then(null, ne.m);
              });
            })(Ae);
          if ((0, ae.T)(Ae)) return _e(Ae);
          if ((0, $e.x)(Ae))
            return (function Oe(Ae) {
              return new se.c((te) => {
                for (const fe of Ae) if ((te.next(fe), te.closed)) return;
                te.complete();
              });
            })(Ae);
          if ((0, Ne.U)(Ae))
            return (function we(Ae) {
              return _e((0, Ne.C)(Ae));
            })(Ae);
        }
        throw (0, X.L)(Ae);
      }
      function _e(Ae) {
        return new se.c((te) => {
          (function Ye(Ae, te) {
            var fe, xe, Me, he;
            return (0, a.sH)(this, void 0, void 0, function* () {
              try {
                for (fe = (0, a.xN)(Ae); !(xe = yield fe.next()).done; )
                  if ((te.next(xe.value), te.closed)) return;
              } catch (Y) {
                Me = { error: Y };
              } finally {
                try {
                  xe && !xe.done && (he = fe.return) && (yield he.call(fe));
                } finally {
                  if (Me) throw Me.error;
                }
              }
              te.complete();
            });
          })(Ae, te).catch((fe) => te.error(fe));
        });
      }
    },
    7673: (_t, He, F) => {
      "use strict";
      F.d(He, { of: () => j });
      var a = F(3794),
        l = F(6648);
      function j(...se) {
        const G = (0, a.lI)(se);
        return (0, l.H)(se, G);
      }
    },
    4360: (_t, He, F) => {
      "use strict";
      F.d(He, { _: () => l });
      var a = F(7707);
      function l(se, G, ae, X, $e) {
        return new j(se, G, ae, X, $e);
      }
      class j extends a.vU {
        constructor(G, ae, X, $e, Ne, Ie) {
          super(G),
            (this.onFinalize = Ne),
            (this.shouldUnsubscribe = Ie),
            (this._next = ae
              ? function (ne) {
                  try {
                    ae(ne);
                  } catch (De) {
                    G.error(De);
                  }
                }
              : super._next),
            (this._error = $e
              ? function (ne) {
                  try {
                    $e(ne);
                  } catch (De) {
                    G.error(De);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = X
              ? function () {
                  try {
                    X();
                  } catch (ne) {
                    G.error(ne);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var G;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: ae } = this;
            super.unsubscribe(),
              !ae &&
                (null === (G = this.onFinalize) ||
                  void 0 === G ||
                  G.call(this));
          }
        }
      }
    },
    5964: (_t, He, F) => {
      "use strict";
      F.d(He, { p: () => j });
      var a = F(9974),
        l = F(4360);
      function j(se, G) {
        return (0, a.N)((ae, X) => {
          let $e = 0;
          ae.subscribe((0, l._)(X, (Ne) => se.call(G, Ne, $e++) && X.next(Ne)));
        });
      }
    },
    6354: (_t, He, F) => {
      "use strict";
      F.d(He, { T: () => j });
      var a = F(9974),
        l = F(4360);
      function j(se, G) {
        return (0, a.N)((ae, X) => {
          let $e = 0;
          ae.subscribe(
            (0, l._)(X, (Ne) => {
              X.next(se.call(G, Ne, $e++));
            })
          );
        });
      }
    },
    1397: (_t, He, F) => {
      "use strict";
      F.d(He, { Z: () => $e });
      var a = F(6354),
        l = F(8750),
        j = F(9974),
        se = F(5225),
        G = F(4360),
        X = F(8071);
      function $e(Ne, Ie, ne = 1 / 0) {
        return (0, X.T)(Ie)
          ? $e(
              (De, ve) =>
                (0, a.T)((ce, ue) => Ie(De, ce, ve, ue))((0, l.Tg)(Ne(De, ve))),
              ne
            )
          : ("number" == typeof Ie && (ne = Ie),
            (0, j.N)((De, ve) =>
              (function ae(Ne, Ie, ne, De, ve, ce, ue, ke) {
                const Oe = [];
                let _e = 0,
                  we = 0,
                  Ye = !1;
                const Ae = () => {
                    Ye && !Oe.length && !_e && Ie.complete();
                  },
                  te = (xe) => (_e < De ? fe(xe) : Oe.push(xe)),
                  fe = (xe) => {
                    ce && Ie.next(xe), _e++;
                    let Me = !1;
                    (0, l.Tg)(ne(xe, we++)).subscribe(
                      (0, G._)(
                        Ie,
                        (he) => {
                          null == ve || ve(he), ce ? te(he) : Ie.next(he);
                        },
                        () => {
                          Me = !0;
                        },
                        void 0,
                        () => {
                          if (Me)
                            try {
                              for (_e--; Oe.length && _e < De; ) {
                                const he = Oe.shift();
                                ue ? (0, se.N)(Ie, ue, () => fe(he)) : fe(he);
                              }
                              Ae();
                            } catch (he) {
                              Ie.error(he);
                            }
                        }
                      )
                    );
                  };
                return (
                  Ne.subscribe(
                    (0, G._)(Ie, te, () => {
                      (Ye = !0), Ae();
                    })
                  ),
                  () => {
                    null == ke || ke();
                  }
                );
              })(De, ve, Ne, ne)
            ));
      }
    },
    5558: (_t, He, F) => {
      "use strict";
      F.d(He, { n: () => se });
      var a = F(8750),
        l = F(9974),
        j = F(4360);
      function se(G, ae) {
        return (0, l.N)((X, $e) => {
          let Ne = null,
            Ie = 0,
            ne = !1;
          const De = () => ne && !Ne && $e.complete();
          X.subscribe(
            (0, j._)(
              $e,
              (ve) => {
                null == Ne || Ne.unsubscribe();
                let ce = 0;
                const ue = Ie++;
                (0, a.Tg)(G(ve, ue)).subscribe(
                  (Ne = (0, j._)(
                    $e,
                    (ke) => $e.next(ae ? ae(ve, ke, ue, ce++) : ke),
                    () => {
                      (Ne = null), De();
                    }
                  ))
                );
              },
              () => {
                (ne = !0), De();
              }
            )
          );
        });
      }
    },
    9270: (_t, He, F) => {
      "use strict";
      F.d(He, { f: () => a });
      const a = {
        setTimeout(l, j, ...se) {
          const { delegate: G } = a;
          return null != G && G.setTimeout
            ? G.setTimeout(l, j, ...se)
            : setTimeout(l, j, ...se);
        },
        clearTimeout(l) {
          const { delegate: j } = a;
          return ((null == j ? void 0 : j.clearTimeout) || clearTimeout)(l);
        },
        delegate: void 0,
      };
    },
    4761: (_t, He, F) => {
      "use strict";
      F.d(He, { l: () => l });
      const l = (function a() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    3494: (_t, He, F) => {
      "use strict";
      F.d(He, { s: () => a });
      const a =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    3794: (_t, He, F) => {
      "use strict";
      F.d(He, { ms: () => se, lI: () => G });
      var a = F(8071);
      function j(X) {
        return X[X.length - 1];
      }
      function se(X) {
        return (0, a.T)(j(X)) ? X.pop() : void 0;
      }
      function G(X) {
        return (function l(X) {
          return X && (0, a.T)(X.schedule);
        })(j(X))
          ? X.pop()
          : void 0;
      }
    },
    3073: (_t, He, F) => {
      "use strict";
      F.d(He, { D: () => G });
      const { isArray: a } = Array,
        { getPrototypeOf: l, prototype: j, keys: se } = Object;
      function G(X) {
        if (1 === X.length) {
          const $e = X[0];
          if (a($e)) return { args: $e, keys: null };
          if (
            (function ae(X) {
              return X && "object" == typeof X && l(X) === j;
            })($e)
          ) {
            const Ne = se($e);
            return { args: Ne.map((Ie) => $e[Ie]), keys: Ne };
          }
        }
        return { args: X, keys: null };
      }
    },
    7908: (_t, He, F) => {
      "use strict";
      function a(l, j) {
        if (l) {
          const se = l.indexOf(j);
          0 <= se && l.splice(se, 1);
        }
      }
      F.d(He, { o: () => a });
    },
    1853: (_t, He, F) => {
      "use strict";
      function a(l) {
        const se = l((G) => {
          Error.call(G), (G.stack = new Error().stack);
        });
        return (
          (se.prototype = Object.create(Error.prototype)),
          (se.prototype.constructor = se),
          se
        );
      }
      F.d(He, { L: () => a });
    },
    8496: (_t, He, F) => {
      "use strict";
      function a(l, j) {
        return l.reduce((se, G, ae) => ((se[G] = j[ae]), se), {});
      }
      F.d(He, { e: () => a });
    },
    9786: (_t, He, F) => {
      "use strict";
      F.d(He, { Y: () => j, l: () => se });
      var a = F(1026);
      let l = null;
      function j(G) {
        if (a.$.useDeprecatedSynchronousErrorHandling) {
          const ae = !l;
          if ((ae && (l = { errorThrown: !1, error: null }), G(), ae)) {
            const { errorThrown: X, error: $e } = l;
            if (((l = null), X)) throw $e;
          }
        } else G();
      }
      function se(G) {
        a.$.useDeprecatedSynchronousErrorHandling &&
          l &&
          ((l.errorThrown = !0), (l.error = G));
      }
    },
    5225: (_t, He, F) => {
      "use strict";
      function a(l, j, se, G = 0, ae = !1) {
        const X = j.schedule(function () {
          se(), ae ? l.add(this.schedule(null, G)) : this.unsubscribe();
        }, G);
        if ((l.add(X), !ae)) return X;
      }
      F.d(He, { N: () => a });
    },
    3669: (_t, He, F) => {
      "use strict";
      function a(l) {
        return l;
      }
      F.d(He, { D: () => a });
    },
    7441: (_t, He, F) => {
      "use strict";
      F.d(He, { X: () => a });
      const a = (l) =>
        l && "number" == typeof l.length && "function" != typeof l;
    },
    7953: (_t, He, F) => {
      "use strict";
      F.d(He, { T: () => l });
      var a = F(8071);
      function l(j) {
        return (
          Symbol.asyncIterator &&
          (0, a.T)(null == j ? void 0 : j[Symbol.asyncIterator])
        );
      }
    },
    8071: (_t, He, F) => {
      "use strict";
      function a(l) {
        return "function" == typeof l;
      }
      F.d(He, { T: () => a });
    },
    5055: (_t, He, F) => {
      "use strict";
      F.d(He, { l: () => j });
      var a = F(3494),
        l = F(8071);
      function j(se) {
        return (0, l.T)(se[a.s]);
      }
    },
    5397: (_t, He, F) => {
      "use strict";
      F.d(He, { x: () => j });
      var a = F(4761),
        l = F(8071);
      function j(se) {
        return (0, l.T)(null == se ? void 0 : se[a.l]);
      }
    },
    9858: (_t, He, F) => {
      "use strict";
      F.d(He, { y: () => l });
      var a = F(8071);
      function l(j) {
        return (0, a.T)(null == j ? void 0 : j.then);
      }
    },
    5196: (_t, He, F) => {
      "use strict";
      F.d(He, { C: () => j, U: () => se });
      var a = F(1635),
        l = F(8071);
      function j(G) {
        return (0, a.AQ)(this, arguments, function* () {
          const X = G.getReader();
          try {
            for (;;) {
              const { value: $e, done: Ne } = yield (0, a.N3)(X.read());
              if (Ne) return yield (0, a.N3)(void 0);
              yield yield (0, a.N3)($e);
            }
          } finally {
            X.releaseLock();
          }
        });
      }
      function se(G) {
        return (0, l.T)(null == G ? void 0 : G.getReader);
      }
    },
    9974: (_t, He, F) => {
      "use strict";
      F.d(He, { N: () => j, S: () => l });
      var a = F(8071);
      function l(se) {
        return (0, a.T)(null == se ? void 0 : se.lift);
      }
      function j(se) {
        return (G) => {
          if (l(G))
            return G.lift(function (ae) {
              try {
                return se(ae, this);
              } catch (X) {
                this.error(X);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    6450: (_t, He, F) => {
      "use strict";
      F.d(He, { I: () => se });
      var a = F(6354);
      const { isArray: l } = Array;
      function se(G) {
        return (0, a.T)((ae) =>
          (function j(G, ae) {
            return l(ae) ? G(...ae) : G(ae);
          })(G, ae)
        );
      }
    },
    5343: (_t, He, F) => {
      "use strict";
      function a() {}
      F.d(He, { l: () => a });
    },
    1203: (_t, He, F) => {
      "use strict";
      F.d(He, { F: () => l, m: () => j });
      var a = F(3669);
      function l(...se) {
        return j(se);
      }
      function j(se) {
        return 0 === se.length
          ? a.D
          : 1 === se.length
          ? se[0]
          : function (ae) {
              return se.reduce((X, $e) => $e(X), ae);
            };
      }
    },
    5334: (_t, He, F) => {
      "use strict";
      F.d(He, { m: () => j });
      var a = F(1026),
        l = F(9270);
      function j(se) {
        l.f.setTimeout(() => {
          const { onUnhandledError: G } = a.$;
          if (!G) throw se;
          G(se);
        });
      }
    },
    591: (_t, He, F) => {
      "use strict";
      function a(l) {
        return new TypeError(
          `You provided ${
            null !== l && "object" == typeof l ? "an invalid object" : `'${l}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      F.d(He, { L: () => a });
    },
    8996: (_t, He, F) => {
      var a = {
        "./ion-accordion_2.entry.js": [2375, 2076, 2375],
        "./ion-action-sheet.entry.js": [8814, 2076, 8814],
        "./ion-alert.entry.js": [5222, 2076, 5222],
        "./ion-app_8.entry.js": [7720, 2076, 7720],
        "./ion-avatar_3.entry.js": [1049, 1049],
        "./ion-back-button.entry.js": [3162, 2076, 3162],
        "./ion-backdrop.entry.js": [7240, 7240],
        "./ion-breadcrumb_2.entry.js": [8314, 2076, 8314],
        "./ion-button_2.entry.js": [4591, 4591],
        "./ion-card_5.entry.js": [8584, 8584],
        "./ion-checkbox.entry.js": [3511, 3511],
        "./ion-chip.entry.js": [6024, 6024],
        "./ion-col_3.entry.js": [5100, 5100],
        "./ion-datetime-button.entry.js": [7428, 1293, 7428],
        "./ion-datetime_3.entry.js": [2885, 1293, 2076, 2885],
        "./ion-fab_3.entry.js": [4463, 2076, 4463],
        "./ion-img.entry.js": [4183, 4183],
        "./ion-infinite-scroll_2.entry.js": [4171, 2076, 4171],
        "./ion-input-password-toggle.entry.js": [6521, 2076, 6521],
        "./ion-input.entry.js": [9344, 2076, 9344],
        "./ion-item-option_3.entry.js": [5949, 2076, 5949],
        "./ion-item_8.entry.js": [3506, 2076, 3506],
        "./ion-loading.entry.js": [7372, 2076, 7372],
        "./ion-menu_3.entry.js": [2075, 2076, 2075],
        "./ion-modal.entry.js": [441, 2076, 441],
        "./ion-nav_2.entry.js": [5712, 2076, 5712],
        "./ion-picker-column-option.entry.js": [9013, 9013],
        "./ion-picker-column.entry.js": [1459, 2076, 1459],
        "./ion-picker.entry.js": [6840, 6840],
        "./ion-popover.entry.js": [6433, 2076, 6433],
        "./ion-progress-bar.entry.js": [9977, 9977],
        "./ion-radio_2.entry.js": [8066, 2076, 8066],
        "./ion-range.entry.js": [8477, 2076, 8477],
        "./ion-refresher_2.entry.js": [5197, 2076, 5197],
        "./ion-reorder_2.entry.js": [7030, 2076, 7030],
        "./ion-ripple-effect.entry.js": [964, 964],
        "./ion-route_4.entry.js": [8970, 8970],
        "./ion-searchbar.entry.js": [8193, 2076, 8193],
        "./ion-segment_2.entry.js": [2560, 2076, 2560],
        "./ion-select_3.entry.js": [7076, 2076, 7076],
        "./ion-spinner.entry.js": [8805, 2076, 8805],
        "./ion-split-pane.entry.js": [5887, 5887],
        "./ion-tab-bar_2.entry.js": [4406, 2076, 4406],
        "./ion-tab_2.entry.js": [1102, 1102],
        "./ion-text.entry.js": [1577, 1577],
        "./ion-textarea.entry.js": [2348, 2076, 2348],
        "./ion-toast.entry.js": [2415, 2076, 2415],
        "./ion-toggle.entry.js": [3814, 2076, 3814],
      };
      function l(j) {
        if (!F.o(a, j))
          return Promise.resolve().then(() => {
            var ae = new Error("Cannot find module '" + j + "'");
            throw ((ae.code = "MODULE_NOT_FOUND"), ae);
          });
        var se = a[j],
          G = se[0];
        return Promise.all(se.slice(1).map(F.e)).then(() => F(G));
      }
      (l.keys = () => Object.keys(a)), (l.id = 8996), (_t.exports = l);
    },
    177: (_t, He, F) => {
      "use strict";
      F.d(He, {
        AJ: () => er,
        MD: () => un,
        N0: () => Io,
        QT: () => j,
        T3: () => pt,
        VF: () => G,
        Vy: () => Do,
        ZD: () => se,
        _b: () => Ve,
        aZ: () => _e,
        bT: () => Er,
        hb: () => ce,
        qQ: () => X,
      });
      var a = F(4438);
      let l = null;
      function j() {
        return l;
      }
      function se(h) {
        var A;
        (null !== (A = l) && void 0 !== A) || (l = h);
      }
      class G {}
      const X = new a.nKC("");
      let $e = (() => {
          var h;
          class A {
            historyGo(b) {
              throw new Error("");
            }
          }
          return (
            ((h = A).ɵfac = function (b) {
              return new (b || h)();
            }),
            (h.ɵprov = a.jDH({
              token: h,
              factory: () => (0, a.WQX)(Ie),
              providedIn: "platform",
            })),
            A
          );
        })(),
        Ie = (() => {
          var h;
          class A extends $e {
            constructor() {
              super(),
                (this._doc = (0, a.WQX)(X)),
                (this._location = window.location),
                (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return j().getBaseHref(this._doc);
            }
            onPopState(b) {
              const $ = j().getGlobalEventTarget(this._doc, "window");
              return (
                $.addEventListener("popstate", b, !1),
                () => $.removeEventListener("popstate", b)
              );
            }
            onHashChange(b) {
              const $ = j().getGlobalEventTarget(this._doc, "window");
              return (
                $.addEventListener("hashchange", b, !1),
                () => $.removeEventListener("hashchange", b)
              );
            }
            get href() {
              return this._location.href;
            }
            get protocol() {
              return this._location.protocol;
            }
            get hostname() {
              return this._location.hostname;
            }
            get port() {
              return this._location.port;
            }
            get pathname() {
              return this._location.pathname;
            }
            get search() {
              return this._location.search;
            }
            get hash() {
              return this._location.hash;
            }
            set pathname(b) {
              this._location.pathname = b;
            }
            pushState(b, $, Q) {
              this._history.pushState(b, $, Q);
            }
            replaceState(b, $, Q) {
              this._history.replaceState(b, $, Q);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            historyGo(b = 0) {
              this._history.go(b);
            }
            getState() {
              return this._history.state;
            }
          }
          return (
            ((h = A).ɵfac = function (b) {
              return new (b || h)();
            }),
            (h.ɵprov = a.jDH({
              token: h,
              factory: () => new h(),
              providedIn: "platform",
            })),
            A
          );
        })();
      function ne(h, A) {
        if (0 == h.length) return A;
        if (0 == A.length) return h;
        let z = 0;
        return (
          h.endsWith("/") && z++,
          A.startsWith("/") && z++,
          2 == z ? h + A.substring(1) : 1 == z ? h + A : h + "/" + A
        );
      }
      function De(h) {
        const A = h.match(/#|\?|$/),
          z = (A && A.index) || h.length;
        return h.slice(0, z - ("/" === h[z - 1] ? 1 : 0)) + h.slice(z);
      }
      function ve(h) {
        return h && "?" !== h[0] ? "?" + h : h;
      }
      let ce = (() => {
        var h;
        class A {
          historyGo(b) {
            throw new Error("");
          }
        }
        return (
          ((h = A).ɵfac = function (b) {
            return new (b || h)();
          }),
          (h.ɵprov = a.jDH({
            token: h,
            factory: () => (0, a.WQX)(ke),
            providedIn: "root",
          })),
          A
        );
      })();
      const ue = new a.nKC("");
      let ke = (() => {
          var h;
          class A extends ce {
            constructor(b, $) {
              var Q, Be, st;
              super(),
                (this._platformLocation = b),
                (this._removeListenerFns = []),
                (this._baseHref =
                  null !==
                    (Q =
                      null !==
                        (Be =
                          null != $
                            ? $
                            : this._platformLocation.getBaseHrefFromDOM()) &&
                      void 0 !== Be
                        ? Be
                        : null === (st = (0, a.WQX)(X).location) ||
                          void 0 === st
                        ? void 0
                        : st.origin) && void 0 !== Q
                    ? Q
                    : "");
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(b) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(b),
                this._platformLocation.onHashChange(b)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(b) {
              return ne(this._baseHref, b);
            }
            path(b = !1) {
              const $ =
                  this._platformLocation.pathname +
                  ve(this._platformLocation.search),
                Q = this._platformLocation.hash;
              return Q && b ? `${$}${Q}` : $;
            }
            pushState(b, $, Q, Be) {
              const st = this.prepareExternalUrl(Q + ve(Be));
              this._platformLocation.pushState(b, $, st);
            }
            replaceState(b, $, Q, Be) {
              const st = this.prepareExternalUrl(Q + ve(Be));
              this._platformLocation.replaceState(b, $, st);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(b = 0) {
              var $, Q;
              null === ($ = (Q = this._platformLocation).historyGo) ||
                void 0 === $ ||
                $.call(Q, b);
            }
          }
          return (
            ((h = A).ɵfac = function (b) {
              return new (b || h)(a.KVO($e), a.KVO(ue, 8));
            }),
            (h.ɵprov = a.jDH({
              token: h,
              factory: h.ɵfac,
              providedIn: "root",
            })),
            A
          );
        })(),
        _e = (() => {
          var h;
          class A {
            constructor(b) {
              (this._subject = new a.bkB()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = b);
              const $ = this._locationStrategy.getBaseHref();
              (this._basePath = (function te(h) {
                if (new RegExp("^(https?:)?//").test(h)) {
                  const [, z] = h.split(/\/\/[^\/]+/);
                  return z;
                }
                return h;
              })(De(Ae($)))),
                this._locationStrategy.onPopState((Q) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: Q.state,
                    type: Q.type,
                  });
                });
            }
            ngOnDestroy() {
              var b;
              null === (b = this._urlChangeSubscription) ||
                void 0 === b ||
                b.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(b = !1) {
              return this.normalize(this._locationStrategy.path(b));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(b, $ = "") {
              return this.path() == this.normalize(b + ve($));
            }
            normalize(b) {
              return A.stripTrailingSlash(
                (function Ye(h, A) {
                  if (!h || !A.startsWith(h)) return A;
                  const z = A.substring(h.length);
                  return "" === z || ["/", ";", "?", "#"].includes(z[0])
                    ? z
                    : A;
                })(this._basePath, Ae(b))
              );
            }
            prepareExternalUrl(b) {
              return (
                b && "/" !== b[0] && (b = "/" + b),
                this._locationStrategy.prepareExternalUrl(b)
              );
            }
            go(b, $ = "", Q = null) {
              this._locationStrategy.pushState(Q, "", b, $),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(b + ve($)),
                  Q
                );
            }
            replaceState(b, $ = "", Q = null) {
              this._locationStrategy.replaceState(Q, "", b, $),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(b + ve($)),
                  Q
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(b = 0) {
              var $, Q;
              null === ($ = (Q = this._locationStrategy).historyGo) ||
                void 0 === $ ||
                $.call(Q, b);
            }
            onUrlChange(b) {
              var $;
              return (
                this._urlChangeListeners.push(b),
                (null !== ($ = this._urlChangeSubscription) && void 0 !== $) ||
                  (this._urlChangeSubscription = this.subscribe((Q) => {
                    this._notifyUrlChangeListeners(Q.url, Q.state);
                  })),
                () => {
                  const Q = this._urlChangeListeners.indexOf(b);
                  var Be;
                  this._urlChangeListeners.splice(Q, 1),
                    0 === this._urlChangeListeners.length &&
                      (null === (Be = this._urlChangeSubscription) ||
                        void 0 === Be ||
                        Be.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(b = "", $) {
              this._urlChangeListeners.forEach((Q) => Q(b, $));
            }
            subscribe(b, $, Q) {
              return this._subject.subscribe({
                next: b,
                error: $,
                complete: Q,
              });
            }
          }
          return (
            ((h = A).normalizeQueryParams = ve),
            (h.joinWithSlash = ne),
            (h.stripTrailingSlash = De),
            (h.ɵfac = function (b) {
              return new (b || h)(a.KVO(ce));
            }),
            (h.ɵprov = a.jDH({
              token: h,
              factory: () =>
                (function we() {
                  return new _e((0, a.KVO)(ce));
                })(),
              providedIn: "root",
            })),
            A
          );
        })();
      function Ae(h) {
        return h.replace(/\/index.html$/, "");
      }
      function Ve(h, A) {
        A = encodeURIComponent(A);
        for (const z of h.split(";")) {
          const b = z.indexOf("="),
            [$, Q] = -1 == b ? [z, ""] : [z.slice(0, b), z.slice(b + 1)];
          if ($.trim() === A) return decodeURIComponent(Q);
        }
        return null;
      }
      let Er = (() => {
        var h;
        class A {
          constructor(b, $) {
            (this._viewContainer = b),
              (this._context = new Qn()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = $);
          }
          set ngIf(b) {
            (this._context.$implicit = this._context.ngIf = b),
              this._updateView();
          }
          set ngIfThen(b) {
            _o("ngIfThen", b),
              (this._thenTemplateRef = b),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(b) {
            _o("ngIfElse", b),
              (this._elseTemplateRef = b),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(b, $) {
            return !0;
          }
        }
        return (
          ((h = A).ɵfac = function (b) {
            return new (b || h)(a.rXU(a.c1b), a.rXU(a.C4Q));
          }),
          (h.ɵdir = a.FsC({
            type: h,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
            standalone: !0,
          })),
          A
        );
      })();
      class Qn {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function _o(h, A) {
        if (A && !A.createEmbeddedView)
          throw new Error(
            `${h} must be a TemplateRef, but received '${(0, a.Tbb)(A)}'.`
          );
      }
      let pt = (() => {
          var h;
          class A {
            constructor(b) {
              (this._viewContainerRef = b),
                (this._viewRef = null),
                (this.ngTemplateOutletContext = null),
                (this.ngTemplateOutlet = null),
                (this.ngTemplateOutletInjector = null);
            }
            ngOnChanges(b) {
              if (this._shouldRecreateView(b)) {
                var $;
                const Q = this._viewContainerRef;
                if (
                  (this._viewRef && Q.remove(Q.indexOf(this._viewRef)),
                  !this.ngTemplateOutlet)
                )
                  return void (this._viewRef = null);
                const Be = this._createContextForwardProxy();
                this._viewRef = Q.createEmbeddedView(
                  this.ngTemplateOutlet,
                  Be,
                  {
                    injector:
                      null !== ($ = this.ngTemplateOutletInjector) &&
                      void 0 !== $
                        ? $
                        : void 0,
                  }
                );
              }
            }
            _shouldRecreateView(b) {
              return !!b.ngTemplateOutlet || !!b.ngTemplateOutletInjector;
            }
            _createContextForwardProxy() {
              return new Proxy(
                {},
                {
                  set: (b, $, Q) =>
                    !!this.ngTemplateOutletContext &&
                    Reflect.set(this.ngTemplateOutletContext, $, Q),
                  get: (b, $, Q) => {
                    if (this.ngTemplateOutletContext)
                      return Reflect.get(this.ngTemplateOutletContext, $, Q);
                  },
                }
              );
            }
          }
          return (
            ((h = A).ɵfac = function (b) {
              return new (b || h)(a.rXU(a.c1b));
            }),
            (h.ɵdir = a.FsC({
              type: h,
              selectors: [["", "ngTemplateOutlet", ""]],
              inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector",
              },
              standalone: !0,
              features: [a.OA$],
            })),
            A
          );
        })(),
        un = (() => {
          var h;
          class A {}
          return (
            ((h = A).ɵfac = function (b) {
              return new (b || h)();
            }),
            (h.ɵmod = a.$C({ type: h })),
            (h.ɵinj = a.G2t({})),
            A
          );
        })();
      const er = "browser",
        Rn = "server";
      function Do(h) {
        return h === Rn;
      }
      class Io {}
    },
    4438: (_t, He, F) => {
      "use strict";
      F.d(He, {
        iLQ: () => oh,
        sZ2: () => Ap,
        hnV: () => P0,
        o8S: () => Ki,
        BIS: () => QC,
        gRc: () => W0,
        Ql9: () => zM,
        Ocv: () => ZM,
        Z63: () => Oo,
        aKT: () => ja,
        uvJ: () => Qr,
        zcH: () => bi,
        bkB: () => li,
        $GK: () => zt,
        nKC: () => yt,
        zZn: () => Mo,
        _q3: () => fh,
        MKu: () => hh,
        xe9: () => mu,
        Co$: () => Lm,
        Vns: () => gs,
        SKi: () => Cr,
        Agw: () => ed,
        PLl: () => Sp,
        sFG: () => CI,
        _9s: () => Xg,
        czy: () => Sc,
        C4Q: () => ll,
        NYb: () => LM,
        giA: () => O0,
        RxE: () => A0,
        c1b: () => Gc,
        gXe: () => Kr,
        L39: () => WT,
        a0P: () => eR,
        Ol2: () => hf,
        w6W: () => CE,
        SmG: () => rT,
        Rfq: () => Un,
        oKB: () => rs,
        WQX: () => Ze,
        QuC: () => Fr,
        EmA: () => ei,
        HJs: () => tR,
        N4e: () => jo,
        O8t: () => KT,
        H3F: () => S0,
        H8p: () => os,
        KH2: () => ya,
        TgB: () => Js,
        wOt: () => le,
        WHO: () => R0,
        e01: () => N0,
        H5H: () => $f,
        Zy3: () => Fe,
        mq5: () => Vv,
        JZv: () => Et,
        TL3: () => NT,
        LfX: () => dr,
        plB: () => zi,
        jNT: () => nh,
        zjR: () => x0,
        TL$: () => KC,
        Tbb: () => Zt,
        Vt3: () => uf,
        Mj6: () => xo,
        GFd: () => km,
        OA$: () => Qe,
        Jv_: () => t0,
        aNF: () => n0,
        R7$: () => vg,
        BMQ: () => Ef,
        AVh: () => Rf,
        wni: () => My,
        VBU: () => Ia,
        FsC: () => Sa,
        jDH: () => Ht,
        G2t: () => Nr,
        $C: () => As,
        EJ8: () => ns,
        rXU: () => Ks,
        nrm: () => kf,
        eu8: () => Lf,
        bVm: () => au,
        qex: () => su,
        k0s: () => iu,
        j41: () => ou,
        RV6: () => kv,
        xGo: () => Kh,
        KVO: () => tt,
        kS0: () => cc,
        bIt: () => Uf,
        lsd: () => Ny,
        XpG: () => my,
        SdG: () => yy,
        NAR: () => vy,
        Y8G: () => Mf,
        mGM: () => Ry,
        Njj: () => Ah,
        eBV: () => Eh,
        n$t: () => Kp,
        DNE: () => ea,
        EFF: () => Uy,
        GBs: () => Ty,
      }),
        F(467);
      let j = null,
        G = 1;
      const ae = Symbol("SIGNAL");
      function X(e) {
        const t = j;
        return (j = e), t;
      }
      function ce(e) {
        if ((!xe(e) || e.dirty) && (e.dirty || e.lastCleanEpoch !== G)) {
          if (!e.producerMustRecompute(e) && !Ye(e))
            return (e.dirty = !1), void (e.lastCleanEpoch = G);
          e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = G);
        }
      }
      function Ye(e) {
        Me(e);
        for (let t = 0; t < e.producerNode.length; t++) {
          const n = e.producerNode[t],
            r = e.producerLastReadVersion[t];
          if (r !== n.version || (ce(n), r !== n.version)) return !0;
        }
        return !1;
      }
      function fe(e, t) {
        if (
          ((function he(e) {
            var t, n;
            (null !== (t = e.liveConsumerNode) && void 0 !== t) ||
              (e.liveConsumerNode = []),
              (null !== (n = e.liveConsumerIndexOfThis) && void 0 !== n) ||
                (e.liveConsumerIndexOfThis = []);
          })(e),
          Me(e),
          1 === e.liveConsumerNode.length)
        )
          for (let r = 0; r < e.producerNode.length; r++)
            fe(e.producerNode[r], e.producerIndexOfThis[r]);
        const n = e.liveConsumerNode.length - 1;
        if (
          ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
          (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
          e.liveConsumerNode.length--,
          e.liveConsumerIndexOfThis.length--,
          t < e.liveConsumerNode.length)
        ) {
          const r = e.liveConsumerIndexOfThis[t],
            o = e.liveConsumerNode[t];
          Me(o), (o.producerIndexOfThis[r] = t);
        }
      }
      function xe(e) {
        var t, n;
        return (
          e.consumerIsAlwaysLive ||
          (null !==
            (t =
              null == e || null === (n = e.liveConsumerNode) || void 0 === n
                ? void 0
                : n.length) && void 0 !== t
            ? t
            : 0) > 0
        );
      }
      function Me(e) {
        var t, n, r;
        (null !== (t = e.producerNode) && void 0 !== t) ||
          (e.producerNode = []),
          (null !== (n = e.producerIndexOfThis) && void 0 !== n) ||
            (e.producerIndexOfThis = []),
          (null !== (r = e.producerLastReadVersion) && void 0 !== r) ||
            (e.producerLastReadVersion = []);
      }
      let vt = null;
      var Ot = F(1413),
        Yt = F(8359),
        tn = F(4412),
        an = F(6354);
      const Ue = "https://g.co/ng/security#xss";
      class le extends Error {
        constructor(t, n) {
          super(Fe(t, n)), (this.code = t);
        }
      }
      function Fe(e, t) {
        return `NG0${Math.abs(e)}${t ? ": " + t : ""}`;
      }
      function dt(e) {
        return { toString: e }.toString();
      }
      const In = "__parameters__";
      function En(e, t, n) {
        return dt(() => {
          const r = (function Bn(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const s = new o(...i);
            return (u.annotation = s), u;
            function u(f, D, M) {
              const N = f.hasOwnProperty(In)
                ? f[In]
                : Object.defineProperty(f, In, { value: [] })[In];
              for (; N.length <= M; ) N.push(null);
              return (N[M] = N[M] || []).push(s), f;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      const Et = globalThis;
      function xt(e) {
        for (let t in e) if (e[t] === xt) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function Nt(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function Zt(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(Zt).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function zn(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const to = xt({ __forward_ref__: xt });
      function Un(e) {
        return (
          (e.__forward_ref__ = Un),
          (e.toString = function () {
            return Zt(this());
          }),
          e
        );
      }
      function pe(e) {
        return de(e) ? e() : e;
      }
      function de(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(to) &&
          e.__forward_ref__ === Un
        );
      }
      function Ht(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Nr(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Gn(e) {
        return br(e, hr) || br(e, ht);
      }
      function dr(e) {
        return null !== Gn(e);
      }
      function br(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function fr(e) {
        return e && (e.hasOwnProperty(Ve) || e.hasOwnProperty(Mt))
          ? e[Ve]
          : null;
      }
      const hr = xt({ ɵprov: xt }),
        Ve = xt({ ɵinj: xt }),
        ht = xt({ ngInjectableDef: xt }),
        Mt = xt({ ngInjectorDef: xt });
      class yt {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Ht({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function kn(e) {
        return e && !!e.ɵproviders;
      }
      const Tn = xt({ ɵcmp: xt }),
        $t = xt({ ɵdir: xt }),
        Wn = xt({ ɵpipe: xt }),
        yr = xt({ ɵmod: xt }),
        jn = xt({ ɵfac: xt }),
        gn = xt({ __NG_ELEMENT_ID__: xt }),
        _n = xt({ __NG_ENV_ID__: xt });
      function St(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function Br(e, t) {
        throw new le(-201, !1);
      }
      var zt = (function (e) {
        return (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Host = 1)] = "Host"),
          (e[(e.Self = 2)] = "Self"),
          (e[(e.SkipSelf = 4)] = "SkipSelf"),
          (e[(e.Optional = 8)] = "Optional"),
          e
        );
      })(zt || {});
      let oo;
      function L() {
        return oo;
      }
      function x(e) {
        const t = oo;
        return (oo = e), t;
      }
      function Z(e, t, n) {
        const r = Gn(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & zt.Optional
          ? null
          : void 0 !== t
          ? t
          : void Br();
      }
      const _ = {},
        T = "__NG_DI_FLAG__",
        V = "ngTempTokenPath",
        v = /\n/gm,
        m = "__source";
      let R;
      function Re(e) {
        const t = R;
        return (R = e), t;
      }
      function et(e, t = zt.Default) {
        if (void 0 === R) throw new le(-203, !1);
        return null === R
          ? Z(e, void 0, t)
          : R.get(e, t & zt.Optional ? null : void 0, t);
      }
      function tt(e, t = zt.Default) {
        return (L() || et)(pe(e), t);
      }
      function Ze(e, t = zt.Default) {
        return tt(e, sn(t));
      }
      function sn(e) {
        return typeof e > "u" || "number" == typeof e
          ? e
          : (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function Ln(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = pe(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new le(900, !1);
            let o,
              i = zt.Default;
            for (let s = 0; s < r.length; s++) {
              const u = r[s],
                f = er(u);
              "number" == typeof f
                ? -1 === f
                  ? (o = u.token)
                  : (i |= f)
                : (o = u);
            }
            t.push(tt(o, i));
          } else t.push(tt(r));
        }
        return t;
      }
      function un(e, t) {
        return (e[T] = t), (e.prototype[T] = t), e;
      }
      function er(e) {
        return e[T];
      }
      const Co = un(En("Optional"), 8),
        Qi = un(En("SkipSelf"), 4);
      function bo(e, t) {
        return e.hasOwnProperty(jn) ? e[jn] : null;
      }
      function xr(e, t) {
        e.forEach((n) => (Array.isArray(n) ? xr(n, t) : t(n)));
      }
      function Zi(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Io(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function _r(e, t, n) {
        let r = Wr(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function Ai(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function Si(e, t) {
        const n = Wr(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Wr(e, t) {
        return (function Ji(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              s = e[i << n];
            if (t === s) return i << n;
            s > t ? (o = i) : (r = i + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const Xr = {},
        ln = [],
        Oo = new yt(""),
        wi = new yt("", -1),
        Yo = new yt("");
      class Pr {
        get(t, n = _) {
          if (n === _) {
            const r = new Error(`NullInjectorError: No provider for ${Zt(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      var gi = (function (e) {
          return (
            (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e
          );
        })(gi || {}),
        Kr = (function (e) {
          return (
            (e[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            e
          );
        })(Kr || {}),
        xo = (function (e) {
          return (
            (e[(e.None = 0)] = "None"),
            (e[(e.SignalBased = 1)] = "SignalBased"),
            (e[(e.HasDecoratorInputTransform = 2)] =
              "HasDecoratorInputTransform"),
            e
          );
        })(xo || {});
      function Is(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      function Mi(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if ("number" == typeof o) {
            if (0 !== o) break;
            r++;
            const i = n[r++],
              s = n[r++],
              u = n[r++];
            e.setAttribute(t, s, u, i);
          } else {
            const i = o,
              s = n[++r];
            mi(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
          }
        }
        return r;
      }
      function Ti(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function mi(e) {
        return 64 === e.charCodeAt(0);
      }
      function vi(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              "number" == typeof o
                ? (n = o)
                : 0 === n ||
                  es(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function es(e, t, n, r, o) {
        let i = 0,
          s = e.length;
        if (-1 === t) s = -1;
        else
          for (; i < e.length; ) {
            const u = e[i++];
            if ("number" == typeof u) {
              if (u === t) {
                s = -1;
                break;
              }
              if (u > t) {
                s = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const u = e[i];
          if ("number" == typeof u) break;
          if (u === n) {
            if (null === r) return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== s && (e.splice(s, 0, t), (i = s + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      const Po = "ng-template";
      function Zo(e, t, n, r) {
        let o = 0;
        if (r) {
          for (; o < t.length && "string" == typeof t[o]; o += 2)
            if ("class" === t[o] && -1 !== Is(t[o + 1].toLowerCase(), n, 0))
              return !0;
        } else if (ts(e)) return !1;
        if (((o = t.indexOf(1, o)), o > -1)) {
          let i;
          for (; ++o < t.length && "string" == typeof (i = t[o]); )
            if (i.toLowerCase() === n) return !0;
        }
        return !1;
      }
      function ts(e) {
        return 4 === e.type && e.value !== Po;
      }
      function w(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Po);
      }
      function C(e, t, n) {
        let r = 4;
        const o = e.attrs,
          i =
            null !== o
              ? (function wt(e) {
                  for (let t = 0; t < e.length; t++) if (Ti(e[t])) return t;
                  return e.length;
                })(o)
              : 0;
        let s = !1;
        for (let u = 0; u < t.length; u++) {
          const f = t[u];
          if ("number" != typeof f) {
            if (!s)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== f && !w(e, f, n)) || ("" === f && 1 === t.length))
                ) {
                  if (k(r)) return !1;
                  s = !0;
                }
              } else if (8 & r) {
                if (null === o || !Zo(e, o, f, n)) {
                  if (k(r)) return !1;
                  s = !0;
                }
              } else {
                const D = t[++u],
                  M = S(f, o, ts(e), n);
                if (-1 === M) {
                  if (k(r)) return !1;
                  s = !0;
                  continue;
                }
                if ("" !== D) {
                  let N;
                  if (
                    ((N = M > i ? "" : o[M + 1].toLowerCase()),
                    2 & r && D !== N)
                  ) {
                    if (k(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !k(r) && !k(f)) return !1;
            if (s && k(f)) continue;
            (s = !1), (r = f | (1 & r));
          }
        }
        return k(r) || s;
      }
      function k(e) {
        return !(1 & e);
      }
      function S(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const s = t[o];
            if (s === e) return o;
            if (3 === s || 6 === s) i = !0;
            else {
              if (1 === s || 2 === s) {
                let u = t[++o];
                for (; "string" == typeof u; ) u = t[++o];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function Pt(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function H(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (C(e, t[r], n)) return !0;
        return !1;
      }
      function Ur(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function po(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function qr(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = "",
          i = !1;
        for (; n < e.length; ) {
          let s = e[n];
          if ("string" == typeof s)
            if (2 & r) {
              const u = e[++n];
              o += "[" + s + (u.length > 0 ? '="' + u + '"' : "") + "]";
            } else 8 & r ? (o += "." + s) : 4 & r && (o += " " + s);
          else
            "" !== o && !k(s) && ((t += po(i, o)), (o = "")),
              (r = s),
              (i = i || !k(r));
          n++;
        }
        return "" !== o && (t += po(i, o)), t;
      }
      function Ia(e) {
        return dt(() => {
          var t;
          const n = Jo(e),
            r = {
              ...n,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === gi.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (n.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              signals: null !== (t = e.signals) && void 0 !== t && t,
              data: e.data || {},
              encapsulation: e.encapsulation || Kr.Emulated,
              styles: e.styles || ln,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: "",
            };
          Ss(r);
          const o = e.dependencies;
          return (
            (r.directiveDefs = yi(o, !1)),
            (r.pipeDefs = yi(o, !0)),
            (r.id = (function Vl(e) {
              let t = 0;
              const n = [
                e.selectors,
                e.ngContentSelectors,
                e.hostVars,
                e.hostAttrs,
                e.consts,
                e.vars,
                e.decls,
                e.encapsulation,
                e.standalone,
                e.signals,
                e.exportAs,
                JSON.stringify(e.inputs),
                JSON.stringify(e.outputs),
                Object.getOwnPropertyNames(e.type.prototype),
                !!e.contentQueries,
                !!e.viewQuery,
              ].join("|");
              for (const o of n) t = (Math.imul(31, t) + o.charCodeAt(0)) | 0;
              return (t += 2147483648), "c" + t;
            })(r)),
            r
          );
        });
      }
      function Ll(e) {
        return nn(e) || Zn(e);
      }
      function Ea(e) {
        return null !== e;
      }
      function As(e) {
        return dt(() => ({
          type: e.type,
          bootstrap: e.bootstrap || ln,
          declarations: e.declarations || ln,
          imports: e.imports || ln,
          exports: e.exports || ln,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Aa(e, t) {
        if (null == e) return Xr;
        const n = {};
        for (const o in e)
          if (e.hasOwnProperty(o)) {
            const i = e[o];
            let s,
              u,
              f = xo.None;
            var r;
            Array.isArray(i)
              ? ((f = i[0]),
                (s = i[1]),
                (u = null !== (r = i[2]) && void 0 !== r ? r : s))
              : ((s = i), (u = i)),
              t
                ? ((n[s] = f !== xo.None ? [o, f] : o), (t[s] = u))
                : (n[s] = o);
          }
        return n;
      }
      function Sa(e) {
        return dt(() => {
          const t = Jo(e);
          return Ss(t), t;
        });
      }
      function ns(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function nn(e) {
        return e[Tn] || null;
      }
      function Zn(e) {
        return e[$t] || null;
      }
      function nr(e) {
        return e[Wn] || null;
      }
      function Fr(e) {
        const t = nn(e) || Zn(e) || nr(e);
        return null !== t && t.standalone;
      }
      function pr(e, t) {
        const n = e[yr] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${Zt(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Jo(e) {
        const t = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: t,
          inputTransforms: null,
          inputConfig: e.inputs || Xr,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          signals: !0 === e.signals,
          selectors: e.selectors || ln,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Aa(e.inputs, t),
          outputs: Aa(e.outputs),
          debugInfo: null,
        };
      }
      function Ss(e) {
        var t;
        null === (t = e.features) || void 0 === t || t.forEach((n) => n(e));
      }
      function yi(e, t) {
        if (!e) return null;
        const n = t ? nr : Ll;
        return () =>
          ("function" == typeof e ? e() : e).map((r) => n(r)).filter(Ea);
      }
      function ei(e) {
        return { ɵproviders: e };
      }
      function rs(...e) {
        return { ɵproviders: ti(0, e), ɵfromNgModule: !0 };
      }
      function ti(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        const i = (s) => {
          n.push(s);
        };
        return (
          xr(t, (s) => {
            const u = s;
            Ri(u, i, [], r) && (o || (o = []), o.push(u));
          }),
          void 0 !== o && ws(o, i),
          n
        );
      }
      function ws(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { ngModule: r, providers: o } = e[n];
          Ms(o, (i) => {
            t(i, r);
          });
        }
      }
      function Ri(e, t, n, r) {
        if (!(e = pe(e))) return !1;
        let o = null,
          i = fr(e);
        const s = !i && nn(e);
        if (i || s) {
          if (s && !s.standalone) return !1;
          o = e;
        } else {
          const f = e.ngModule;
          if (((i = fr(f)), !i)) return !1;
          o = f;
        }
        const u = r.has(o);
        if (s) {
          if (u) return !1;
          if ((r.add(o), s.dependencies)) {
            const f =
              "function" == typeof s.dependencies
                ? s.dependencies()
                : s.dependencies;
            for (const D of f) Ri(D, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !u) {
              let D;
              r.add(o);
              try {
                xr(i.imports, (M) => {
                  Ri(M, t, n, r) && (D || (D = []), D.push(M));
                });
              } finally {
              }
              void 0 !== D && ws(D, t);
            }
            if (!u) {
              const D = bo(o) || (() => new o());
              t({ provide: o, useFactory: D, deps: ln }, o),
                t({ provide: Yo, useValue: o, multi: !0 }, o),
                t({ provide: Oo, useValue: () => tt(o), multi: !0 }, o);
            }
            const f = i.providers;
            if (null != f && !u) {
              const D = e;
              Ms(f, (M) => {
                t(M, D);
              });
            }
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Ms(e, t) {
        for (let n of e)
          kn(n) && (n = n.ɵproviders), Array.isArray(n) ? Ms(n, t) : t(n);
      }
      const Bl = xt({ provide: String, useValue: xt });
      function Ts(e) {
        return null !== e && "object" == typeof e && Bl in e;
      }
      function Uo(e) {
        return "function" == typeof e;
      }
      const os = new yt(""),
        is = {},
        Ta = {};
      let Rs;
      function Oi() {
        return void 0 === Rs && (Rs = new Pr()), Rs;
      }
      class Qr {}
      class xi extends Qr {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Pi(t, (s) => this.processProvider(s)),
            this.records.set(wi, ni(void 0, this)),
            o.has("environment") && this.records.set(Qr, ni(void 0, this));
          const i = this.records.get(os);
          null != i && "string" == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(Yo, ln, zt.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          const t = X(null);
          try {
            for (const r of this._ngOnDestroyHooks) r.ngOnDestroy();
            const n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const r of n) r();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              X(t);
          }
        }
        onDestroy(t) {
          return (
            this.assertNotDestroyed(),
            this._onDestroyHooks.push(t),
            () => this.removeOnDestroy(t)
          );
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = Re(this),
            r = x(void 0);
          try {
            return t();
          } finally {
            Re(n), x(r);
          }
        }
        get(t, n = _, r = zt.Default) {
          if ((this.assertNotDestroyed(), t.hasOwnProperty(_n)))
            return t[_n](this);
          r = sn(r);
          const i = Re(this),
            s = x(void 0);
          try {
            if (!(r & zt.SkipSelf)) {
              let f = this.records.get(t);
              if (void 0 === f) {
                const D =
                  (function Gl(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof yt)
                    );
                  })(t) && Gn(t);
                (f = D && this.injectableDefInScope(D) ? ni(Ns(t), is) : null),
                  this.records.set(t, f);
              }
              if (null != f) return this.hydrate(t, f);
            }
            return (r & zt.Self ? Oi() : this.parent).get(
              t,
              (n = r & zt.Optional && n === _ ? null : n)
            );
          } catch (u) {
            if ("NullInjectorError" === u.name) {
              if (((u[V] = u[V] || []).unshift(Zt(t)), i)) throw u;
              return (function Rn(e, t, n, r) {
                const o = e[V];
                throw (
                  (t[m] && o.unshift(t[m]),
                  (e.message = (function tr(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let o = Zt(t);
                    if (Array.isArray(t)) o = t.map(Zt).join(" -> ");
                    else if ("object" == typeof t) {
                      let i = [];
                      for (let s in t)
                        if (t.hasOwnProperty(s)) {
                          let u = t[s];
                          i.push(
                            s +
                              ":" +
                              ("string" == typeof u ? JSON.stringify(u) : Zt(u))
                          );
                        }
                      o = `{${i.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
                      v,
                      "\n  "
                    )}`;
                  })("\n" + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[V] = null),
                  e)
                );
              })(u, t, "R3InjectorError", this.source);
            }
            throw u;
          } finally {
            x(s), Re(i);
          }
        }
        resolveInjectorInitializers() {
          const t = X(null),
            n = Re(this),
            r = x(void 0);
          try {
            const i = this.get(Oo, ln, zt.Self);
            for (const s of i) s();
          } finally {
            Re(n), x(r), X(t);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(Zt(r));
          return `R3Injector[${t.join(", ")}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new le(205, !1);
        }
        processProvider(t) {
          let n = Uo((t = pe(t))) ? t : pe(t && t.provide);
          const r = (function jl(e) {
            return Ts(e) ? ni(void 0, e.useValue) : ni(Ra(e), is);
          })(t);
          if (!Uo(t) && !0 === t.multi) {
            let o = this.records.get(n);
            o ||
              ((o = ni(void 0, is, !0)),
              (o.factory = () => Ln(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          const r = X(null);
          try {
            return (
              n.value === is && ((n.value = Ta), (n.value = n.factory())),
              "object" == typeof n.value &&
                n.value &&
                (function zl(e) {
                  return (
                    null !== e &&
                    "object" == typeof e &&
                    "function" == typeof e.ngOnDestroy
                  );
                })(n.value) &&
                this._ngOnDestroyHooks.add(n.value),
              n.value
            );
          } finally {
            X(r);
          }
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = pe(t.providedIn);
          return "string" == typeof n
            ? "any" === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
        removeOnDestroy(t) {
          const n = this._onDestroyHooks.indexOf(t);
          -1 !== n && this._onDestroyHooks.splice(n, 1);
        }
      }
      function Ns(e) {
        const t = Gn(e),
          n = null !== t ? t.factory : bo(e);
        if (null !== n) return n;
        if (e instanceof yt) throw new le(204, !1);
        if (e instanceof Function)
          return (function Ul(e) {
            if (e.length > 0) throw new le(204, !1);
            const n = (function Or(e) {
              return (e && (e[hr] || e[ht])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new le(204, !1);
      }
      function Ra(e, t, n) {
        let r;
        if (Uo(e)) {
          const o = pe(e);
          return bo(o) || Ns(o);
        }
        if (Ts(e)) r = () => pe(e.useValue);
        else if (
          (function wa(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Ln(e.deps || []));
        else if (
          (function Ni(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => tt(pe(e.useExisting));
        else {
          const o = pe(e && (e.useClass || e.provide));
          if (
            !(function Hl(e) {
              return !!e.deps;
            })(e)
          )
            return bo(o) || Ns(o);
          r = () => new o(...Ln(e.deps));
        }
        return r;
      }
      function ni(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Pi(e, t) {
        for (const n of e)
          Array.isArray(n) ? Pi(n, t) : n && kn(n) ? Pi(n.ɵproviders, t) : t(n);
      }
      function jo(e, t) {
        e instanceof xi && e.assertNotDestroyed();
        const r = Re(e),
          o = x(void 0);
        try {
          return t();
        } finally {
          Re(r), x(o);
        }
      }
      const Cn = 0,
        ot = 1,
        bt = 2,
        vn = 3,
        sr = 4,
        $n = 5,
        ar = 6,
        Fo = 7,
        fn = 8,
        Ar = 9,
        Ao = 10,
        Ft = 11,
        ss = 12,
        Wl = 13,
        Fi = 14,
        Jn = 15,
        Os = 16,
        ki = 17,
        go = 18,
        Li = 19,
        Xl = 20,
        zo = 21,
        Yr = 22,
        _i = 23,
        Qt = 25,
        Kl = 1,
        So = 7,
        ri = 9,
        rr = 10;
      var Oa = (function (e) {
        return (
          (e[(e.None = 0)] = "None"),
          (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
          e
        );
      })(Oa || {});
      function jr(e) {
        return Array.isArray(e) && "object" == typeof e[Kl];
      }
      function Sr(e) {
        return Array.isArray(e) && !0 === e[Kl];
      }
      function ql(e) {
        return !!(4 & e.flags);
      }
      function $i(e) {
        return e.componentOffset > -1;
      }
      function xa(e) {
        return !(1 & ~e.flags);
      }
      function ko(e) {
        return !!e.template;
      }
      function Ql(e) {
        return !!(512 & e[bt]);
      }
      class U {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Te(e, t, n, r) {
        null !== t ? t.applyValueToInputSignal(t, r) : (e[n] = r);
      }
      function Qe() {
        return Pe;
      }
      function Pe(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = Ut), gt;
      }
      function gt() {
        const e = Dn(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === Xr) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function Ut(e, t, n, r, o) {
        const i = this.declaredInputs[r],
          s =
            Dn(e) ||
            (function kr(e, t) {
              return (e[Vn] = t);
            })(e, { previous: Xr, current: null }),
          u = s.current || (s.current = {}),
          f = s.previous,
          D = f[i];
        (u[i] = new U(D && D.currentValue, n, f === Xr)), Te(e, t, o, n);
      }
      Qe.ngInherit = !0;
      const Vn = "__ngSimpleChanges__";
      function Dn(e) {
        return e[Vn] || null;
      }
      const Zr = function (e, t, n) {};
      let Jl = !1;
      function Pn(e) {
        for (; Array.isArray(e); ) e = e[Cn];
        return e;
      }
      function io(e, t) {
        return Pn(t[e.index]);
      }
      function Fa(e, t) {
        return e.data[t];
      }
      function wo(e, t) {
        const n = t[e];
        return jr(n) ? n : n[Cn];
      }
      function Mu(e) {
        return !(128 & ~e[bt]);
      }
      function oi(e, t) {
        return null == t ? null : e[t];
      }
      function Ch(e) {
        e[ki] = 0;
      }
      function L_(e) {
        1024 & e[bt] || ((e[bt] |= 1024), Mu(e) && ka(e));
      }
      function Tu(e) {
        var t;
        return !!(
          9216 & e[bt] ||
          (null !== (t = e[_i]) && void 0 !== t && t.dirty)
        );
      }
      function Ru(e) {
        var t;
        if (
          (null === (t = e[Ao].changeDetectionScheduler) ||
            void 0 === t ||
            t.notify(1),
          Tu(e))
        )
          ka(e);
        else if (64 & e[bt])
          if (
            (function cs() {
              return Jl;
            })()
          )
            (e[bt] |= 1024), ka(e);
          else {
            var n;
            null === (n = e[Ao].changeDetectionScheduler) ||
              void 0 === n ||
              n.notify();
          }
      }
      function ka(e) {
        var t;
        null === (t = e[Ao].changeDetectionScheduler) ||
          void 0 === t ||
          t.notify();
        let n = us(e);
        for (; null !== n && !(8192 & n[bt]) && ((n[bt] |= 8192), Mu(n)); )
          n = us(n);
      }
      function ec(e, t) {
        if (!(256 & ~e[bt])) throw new le(911, !1);
        null === e[zo] && (e[zo] = []), e[zo].push(t);
      }
      function us(e) {
        const t = e[vn];
        return Sr(t) ? t[vn] : t;
      }
      const Kt = {
        lFrame: Oh(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      function Ih() {
        return Kt.bindingsEnabled;
      }
      function Fs() {
        return null !== Kt.skipHydrationRootTNode;
      }
      function Xe() {
        return Kt.lFrame.lView;
      }
      function hn() {
        return Kt.lFrame.tView;
      }
      function Eh(e) {
        return (Kt.lFrame.contextLView = e), e[fn];
      }
      function Ah(e) {
        return (Kt.lFrame.contextLView = null), e;
      }
      function xn() {
        let e = Sh();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Sh() {
        return Kt.lFrame.currentTNode;
      }
      function ii(e, t) {
        const n = Kt.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function Ou() {
        return Kt.lFrame.isParent;
      }
      function xu() {
        Kt.lFrame.isParent = !1;
      }
      function Wo() {
        return Kt.lFrame.bindingIndex++;
      }
      function K_(e, t) {
        const n = Kt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Pu(t);
      }
      function Pu(e) {
        Kt.lFrame.currentDirectiveIndex = e;
      }
      function ku() {
        return Kt.lFrame.currentQueryIndex;
      }
      function tc(e) {
        Kt.lFrame.currentQueryIndex = e;
      }
      function Q_(e) {
        const t = e[ot];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[$n] : null;
      }
      function Rh(e, t, n) {
        if (n & zt.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & zt.Host ||
              ((o = Q_(i)), null === o || ((i = i[Fi]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (Kt.lFrame = Nh());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Lu(e) {
        const t = Nh(),
          n = e[ot];
        (Kt.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Nh() {
        const e = Kt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Oh(e) : t;
      }
      function Oh(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function xh() {
        const e = Kt.lFrame;
        return (
          (Kt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Ph = xh;
      function $u() {
        const e = xh();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function Jr() {
        return Kt.lFrame.selectedIndex;
      }
      function ds(e) {
        Kt.lFrame.selectedIndex = e;
      }
      function Hn() {
        const e = Kt.lFrame;
        return Fa(e.tView, e.selectedIndex);
      }
      let kh = !0;
      function $a() {
        return kh;
      }
      function si(e) {
        kh = e;
      }
      function nc(e, t) {
        for (let D = t.directiveStart, M = t.directiveEnd; D < M; D++) {
          const W = e.data[D].type.prototype,
            {
              ngAfterContentInit: oe,
              ngAfterContentChecked: ye,
              ngAfterViewInit: ze,
              ngAfterViewChecked: nt,
              ngOnDestroy: it,
            } = W;
          var n, r, o, i, s, u, f;
          oe &&
            (null !== (n = e.contentHooks) && void 0 !== n
              ? n
              : (e.contentHooks = [])
            ).push(-D, oe),
            ye &&
              ((null !== (r = e.contentHooks) && void 0 !== r
                ? r
                : (e.contentHooks = [])
              ).push(D, ye),
              (null !== (o = e.contentCheckHooks) && void 0 !== o
                ? o
                : (e.contentCheckHooks = [])
              ).push(D, ye)),
            ze &&
              (null !== (i = e.viewHooks) && void 0 !== i
                ? i
                : (e.viewHooks = [])
              ).push(-D, ze),
            nt &&
              ((null !== (s = e.viewHooks) && void 0 !== s
                ? s
                : (e.viewHooks = [])
              ).push(D, nt),
              (null !== (u = e.viewCheckHooks) && void 0 !== u
                ? u
                : (e.viewCheckHooks = [])
              ).push(D, nt)),
            null != it &&
              (null !== (f = e.destroyHooks) && void 0 !== f
                ? f
                : (e.destroyHooks = [])
              ).push(D, it);
        }
      }
      function rc(e, t, n) {
        Lh(e, t, 3, n);
      }
      function oc(e, t, n, r) {
        (3 & e[bt]) === n && Lh(e, t, n, r);
      }
      function Vu(e, t) {
        let n = e[bt];
        (3 & n) === t && ((n &= 16383), (n += 1), (e[bt] = n));
      }
      function Lh(e, t, n, r) {
        const i = null != r ? r : -1,
          s = t.length - 1;
        let u = 0;
        for (let f = void 0 !== r ? 65535 & e[ki] : 0; f < s; f++)
          if ("number" == typeof t[f + 1]) {
            if (((u = t[f]), null != r && u >= r)) break;
          } else
            t[f] < 0 && (e[ki] += 65536),
              (u < i || -1 == i) &&
                (rC(e, n, t, f), (e[ki] = (4294901760 & e[ki]) + f + 2)),
              f++;
      }
      function $h(e, t) {
        Zr(4, e, t);
        const n = X(null);
        try {
          t.call(e);
        } finally {
          X(n), Zr(5, e, t);
        }
      }
      function rC(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          u = e[o ? -n[r] : n[r]];
        o
          ? e[bt] >> 14 < e[ki] >> 16 &&
            (3 & e[bt]) === t &&
            ((e[bt] += 16384), $h(u, i))
          : $h(u, i);
      }
      const ks = -1;
      class Va {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function Uu(e) {
        return e !== ks;
      }
      function Ba(e) {
        return 32767 & e;
      }
      function Ua(e, t) {
        let n = (function lC(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[Fi]), n--;
        return r;
      }
      let ju = !0;
      function ic(e) {
        const t = ju;
        return (ju = e), t;
      }
      const Vh = 255,
        Bh = 5;
      let cC = 0;
      const ai = {};
      function sc(e, t) {
        const n = Uh(e, t);
        if (-1 !== n) return n;
        const r = t[ot];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Hu(r.data, e),
          Hu(t, null),
          Hu(r.blueprint, null));
        const o = ac(e, t),
          i = e.injectorIndex;
        if (Uu(o)) {
          const s = Ba(o),
            u = Ua(o, t),
            f = u[ot].data;
          for (let D = 0; D < 8; D++) t[i + D] = u[s + D] | f[s + D];
        }
        return (t[i + 8] = o), i;
      }
      function Hu(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Uh(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function ac(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = qh(o)), null === r)) return ks;
          if ((n++, (o = o[Fi]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return ks;
      }
      function zu(e, t, n) {
        !(function uC(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(gn) && (r = n[gn]),
            null == r && (r = n[gn] = cC++);
          const o = r & Vh;
          t.data[e + (o >> Bh)] |= 1 << o;
        })(e, t, n);
      }
      function jh(e, t, n) {
        if (n & zt.Optional || void 0 !== e) return e;
        Br();
      }
      function Hh(e, t, n, r) {
        if (
          (n & zt.Optional && void 0 === r && (r = null),
          !(n & (zt.Self | zt.Host)))
        ) {
          const o = e[Ar],
            i = x(void 0);
          try {
            return o ? o.get(t, r, n & zt.Optional) : Z(t, r, n & zt.Optional);
          } finally {
            x(i);
          }
        }
        return jh(r, 0, n);
      }
      function zh(e, t, n, r = zt.Default, o) {
        if (null !== e) {
          if (2048 & t[bt] && !(r & zt.Self)) {
            const s = (function gC(e, t, n, r, o) {
              let i = e,
                s = t;
              for (
                ;
                null !== i && null !== s && 2048 & s[bt] && !(512 & s[bt]);

              ) {
                const u = Gh(i, s, n, r | zt.Self, ai);
                if (u !== ai) return u;
                let f = i.parent;
                if (!f) {
                  const D = s[Xl];
                  if (D) {
                    const M = D.get(n, ai, r);
                    if (M !== ai) return M;
                  }
                  (f = qh(s)), (s = s[Fi]);
                }
                i = f;
              }
              return o;
            })(e, t, n, r, ai);
            if (s !== ai) return s;
          }
          const i = Gh(e, t, n, r, ai);
          if (i !== ai) return i;
        }
        return Hh(t, n, r, o);
      }
      function Gh(e, t, n, r, o) {
        const i = (function hC(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(gn) ? e[gn] : void 0;
          return "number" == typeof t ? (t >= 0 ? t & Vh : pC) : t;
        })(n);
        if ("function" == typeof i) {
          if (!Rh(t, e, r)) return r & zt.Host ? jh(o, 0, r) : Hh(t, n, r, o);
          try {
            let s;
            if (((s = i(r)), null != s || r & zt.Optional)) return s;
            Br();
          } finally {
            Ph();
          }
        } else if ("number" == typeof i) {
          let s = null,
            u = Uh(e, t),
            f = ks,
            D = r & zt.Host ? t[Jn][$n] : null;
          for (
            (-1 === u || r & zt.SkipSelf) &&
            ((f = -1 === u ? ac(e, t) : t[u + 8]),
            f !== ks && Xh(r, !1)
              ? ((s = t[ot]), (u = Ba(f)), (t = Ua(f, t)))
              : (u = -1));
            -1 !== u;

          ) {
            const M = t[ot];
            if (Wh(i, u, M.data)) {
              const N = fC(u, t, n, s, r, D);
              if (N !== ai) return N;
            }
            (f = t[u + 8]),
              f !== ks && Xh(r, t[ot].data[u + 8] === D) && Wh(i, u, t)
                ? ((s = M), (u = Ba(f)), (t = Ua(f, t)))
                : (u = -1);
          }
        }
        return o;
      }
      function fC(e, t, n, r, o, i) {
        const s = t[ot],
          u = s.data[e + 8],
          M = lc(
            u,
            s,
            n,
            null == r ? $i(u) && ju : r != s && !!(3 & u.type),
            o & zt.Host && i === u
          );
        return null !== M ? fs(t, s, M, u) : ai;
      }
      function lc(e, t, n, r, o) {
        const i = e.providerIndexes,
          s = t.data,
          u = 1048575 & i,
          f = e.directiveStart,
          M = i >> 20,
          W = o ? u + M : e.directiveEnd;
        for (let oe = r ? u : u + M; oe < W; oe++) {
          const ye = s[oe];
          if ((oe < f && n === ye) || (oe >= f && ye.type === n)) return oe;
        }
        if (o) {
          const oe = s[f];
          if (oe && ko(oe) && oe.type === n) return f;
        }
        return null;
      }
      function fs(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function oC(e) {
            return e instanceof Va;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function Vr(e, t) {
              throw (t && t.join(" > "), new le(-200, e));
            })(
              (function pt(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                    null != e &&
                    "function" == typeof e.type
                  ? e.type.name || e.type.toString()
                  : St(e);
              })(i[n])
            );
          const u = ic(s.canSeeViewProviders);
          s.resolving = !0;
          const D = s.injectImpl ? x(s.injectImpl) : null;
          Rh(e, r, zt.Default);
          try {
            (o = e[n] = s.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function nC(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    var s, u;
                    const N = Pe(t);
                    (null !== (s = n.preOrderHooks) && void 0 !== s
                      ? s
                      : (n.preOrderHooks = [])
                    ).push(e, N),
                      (null !== (u = n.preOrderCheckHooks) && void 0 !== u
                        ? u
                        : (n.preOrderCheckHooks = [])
                      ).push(e, N);
                  }
                  var f, D, M;
                  o &&
                    (null !== (f = n.preOrderHooks) && void 0 !== f
                      ? f
                      : (n.preOrderHooks = [])
                    ).push(0 - e, o),
                    i &&
                      ((null !== (D = n.preOrderHooks) && void 0 !== D
                        ? D
                        : (n.preOrderHooks = [])
                      ).push(e, i),
                      (null !== (M = n.preOrderCheckHooks) && void 0 !== M
                        ? M
                        : (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== D && x(D), ic(u), (s.resolving = !1), Ph();
          }
        }
        return o;
      }
      function Wh(e, t, n) {
        return !!(n[t + (e >> Bh)] & (1 << e));
      }
      function Xh(e, t) {
        return !(e & zt.Self || (e & zt.Host && t));
      }
      class wr {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return zh(this._tNode, this._lView, t, sn(r), n);
        }
      }
      function pC() {
        return new wr(xn(), Xe());
      }
      function Kh(e) {
        return dt(() => {
          const t = e.prototype.constructor,
            n = t[jn] || Gu(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[jn] || Gu(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return (i) => new i();
        });
      }
      function Gu(e) {
        return de(e)
          ? () => {
              const t = Gu(pe(e));
              return t && t();
            }
          : bo(e);
      }
      function qh(e) {
        const t = e[ot],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[$n] : null;
      }
      function cc(e) {
        return (function dC(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let o = 0;
            for (; o < r; ) {
              const i = n[o];
              if (Ti(i)) break;
              if (0 === i) o += 2;
              else if ("number" == typeof i)
                for (o++; o < r && "string" == typeof n[o]; ) o++;
              else {
                if (i === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(xn(), e);
      }
      function ep(e, t = null, n = null, r) {
        const o = tp(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function tp(e, t = null, n = null, r, o = new Set()) {
        const i = [n || ln, rs(e)];
        return (
          (r = r || ("object" == typeof e ? void 0 : Zt(e))),
          new xi(i, t || Oi(), r || null, o)
        );
      }
      let Mo = (() => {
        var e;
        class t {
          static create(r, o) {
            if (Array.isArray(r)) return ep({ name: "" }, o, r, "");
            {
              var i;
              const s = null !== (i = r.name) && void 0 !== i ? i : "";
              return ep({ name: s }, r.parent, r.providers, s);
            }
          }
        }
        return (
          ((e = t).THROW_IF_NOT_FOUND = _),
          (e.NULL = new Pr()),
          (e.ɵprov = Ht({
            token: e,
            providedIn: "any",
            factory: () => tt(wi),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      function Xu(e) {
        return e.ngOriginalError;
      }
      class bi {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error("ERROR", t),
            n && this._console.error("ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && Xu(t);
          for (; n && Xu(n); ) n = Xu(n);
          return n || null;
        }
      }
      const rp = new yt("", {
        providedIn: "root",
        factory: () => Ze(bi).handleError.bind(void 0),
      });
      let Vs = (() => {
        var e;
        class t {}
        return (
          ((e = t).__NG_ELEMENT_ID__ = EC), (e.__NG_ENV_ID__ = (n) => n), t
        );
      })();
      class IC extends Vs {
        constructor(t) {
          super(), (this._lView = t);
        }
        onDestroy(t) {
          return (
            ec(this._lView, t),
            () =>
              (function Nu(e, t) {
                if (null === e[zo]) return;
                const n = e[zo].indexOf(t);
                -1 !== n && e[zo].splice(n, 1);
              })(this._lView, t)
          );
        }
      }
      function EC() {
        return new IC(Xe());
      }
      function AC() {
        return Bs(xn(), Xe());
      }
      function Bs(e, t) {
        return new ja(io(e, t));
      }
      let ja = (() => {
        class t {
          constructor(r) {
            this.nativeElement = r;
          }
        }
        return (t.__NG_ELEMENT_ID__ = AC), t;
      })();
      function ip(e) {
        return e instanceof ja ? e.nativeElement : e;
      }
      function Ku(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const li = class SC extends Ot.B {
        constructor(t = !1) {
          var n;
          super(),
            (this.destroyRef = void 0),
            (this.__isAsync = t),
            (function Na() {
              return (
                void 0 !== L() ||
                null !=
                  (function B() {
                    return R;
                  })()
              );
            })() &&
              (this.destroyRef =
                null !== (n = Ze(Vs, { optional: !0 })) && void 0 !== n
                  ? n
                  : void 0);
        }
        emit(t) {
          const n = X(null);
          try {
            super.next(t);
          } finally {
            X(n);
          }
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            s = r;
          if (t && "object" == typeof t) {
            var u, f, D;
            const N = t;
            (o = null === (u = N.next) || void 0 === u ? void 0 : u.bind(N)),
              (i = null === (f = N.error) || void 0 === f ? void 0 : f.bind(N)),
              (s =
                null === (D = N.complete) || void 0 === D ? void 0 : D.bind(N));
          }
          this.__isAsync && ((i = Ku(i)), o && (o = Ku(o)), s && (s = Ku(s)));
          const M = super.subscribe({ next: o, error: i, complete: s });
          return t instanceof Yt.yU && t.add(M), M;
        }
      };
      function wC() {
        return this._results[Symbol.iterator]();
      }
      class qu {
        get changes() {
          var t;
          return null !== (t = this._changes) && void 0 !== t
            ? t
            : (this._changes = new li());
        }
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._onDirty = void 0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = void 0),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = qu.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = wC);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          this.dirty = !1;
          const r = (function Yn(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function Yi(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let o = e[r],
                i = t[r];
              if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
            }
            return !0;
          })(this._results, r, n)) &&
            ((this._results = r),
            (this.length = r.length),
            (this.last = r[this.length - 1]),
            (this.first = r[0]));
        }
        notifyOnChanges() {
          void 0 !== this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        onDirty(t) {
          this._onDirty = t;
        }
        setDirty() {
          var t;
          (this.dirty = !0),
            null === (t = this._onDirty) || void 0 === t || t.call(this);
        }
        destroy() {
          void 0 !== this._changes &&
            (this._changes.complete(), this._changes.unsubscribe());
        }
      }
      function dc(e) {
        return !(128 & ~e.flags);
      }
      const Qu = new Map();
      let TC = 0;
      const Zu = "__ngContext__";
      function eo(e, t) {
        jr(t)
          ? ((e[Zu] = t[Li]),
            (function NC(e) {
              Qu.set(e[Li], e);
            })(t))
          : (e[Zu] = t);
      }
      function gp(e) {
        return vp(e[ss]);
      }
      function mp(e) {
        return vp(e[sr]);
      }
      function vp(e) {
        for (; null !== e && !Sr(e); ) e = e[sr];
        return e;
      }
      let Ju;
      function KC(e) {
        Ju = e;
      }
      const Ap = new yt("", { providedIn: "root", factory: () => qC }),
        qC = "ng",
        Sp = new yt(""),
        ed = new yt("", { providedIn: "platform", factory: () => "unknown" }),
        QC = new yt("", {
          providedIn: "root",
          factory: () => {
            var e;
            return (
              (null ===
                (e = (function Ui() {
                  if (void 0 !== Ju) return Ju;
                  if (typeof document < "u") return document;
                  throw new le(210, !1);
                })().body) ||
              void 0 === e ||
              null === (e = e.querySelector("[ngCspNonce]")) ||
              void 0 === e
                ? void 0
                : e.getAttribute("ngCspNonce")) || null
            );
          },
        });
      let wp = () => null;
      function id(e, t, n = !1) {
        return wp(e, t, n);
      }
      const Op = new yt("", { providedIn: "root", factory: () => !1 });
      let bc;
      function kp(e) {
        var t;
        return (
          (null ===
            (t = (function ud() {
              if (void 0 === bc && ((bc = null), Et.trustedTypes))
                try {
                  bc = Et.trustedTypes.createPolicy("angular#unsafe-bypass", {
                    createHTML: (e) => e,
                    createScript: (e) => e,
                    createScriptURL: (e) => e,
                  });
                } catch {}
              return bc;
            })()) || void 0 === t
            ? void 0
            : t.createScriptURL(e)) || e
        );
      }
      class Lp {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ue})`;
        }
      }
      function ji(e) {
        return e instanceof Lp ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Qa(e, t) {
        const n = (function gD(e) {
          return (e instanceof Lp && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${Ue})`);
        }
        return n === t;
      }
      const _D = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      var Gs = (function (e) {
        return (
          (e[(e.NONE = 0)] = "NONE"),
          (e[(e.HTML = 1)] = "HTML"),
          (e[(e.STYLE = 2)] = "STYLE"),
          (e[(e.SCRIPT = 3)] = "SCRIPT"),
          (e[(e.URL = 4)] = "URL"),
          (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          e
        );
      })(Gs || {});
      function Wp(e) {
        const t = Za();
        return t
          ? t.sanitize(Gs.URL, e) || ""
          : Qa(e, "URL")
          ? ji(e)
          : (function dd(e) {
              return (e = String(e)).match(_D) ? e : "unsafe:" + e;
            })(St(e));
      }
      function Xp(e) {
        const t = Za();
        if (t) return kp(t.sanitize(Gs.RESOURCE_URL, e) || "");
        if (Qa(e, "ResourceURL")) return kp(ji(e));
        throw new le(904, !1);
      }
      function Kp(e, t, n) {
        return (function PD(e, t) {
          return ("src" === t &&
            ("embed" === e ||
              "frame" === e ||
              "iframe" === e ||
              "media" === e ||
              "script" === e)) ||
            ("href" === t && ("base" === e || "link" === e))
            ? Xp
            : Wp;
        })(
          t,
          n
        )(e);
      }
      function Za() {
        const e = Xe();
        return e && e[Ao].sanitizer;
      }
      const FD = /^>|^->|<!--|-->|--!>|<!-$/g,
        kD = /(<|>)/g,
        LD = "\u200b$1\u200b";
      function To(e) {
        return e instanceof Function ? e() : e;
      }
      var Sc = (function (e) {
        return (
          (e[(e.Important = 1)] = "Important"),
          (e[(e.DashCase = 2)] = "DashCase"),
          e
        );
      })(Sc || {});
      let yd;
      function _d(e, t) {
        return yd(e, t);
      }
      function Xs(e, t, n, r, o) {
        if (null != r) {
          let i,
            s = !1;
          Sr(r) ? (i = r) : jr(r) && ((s = !0), (r = r[Cn]));
          const u = Pn(r);
          0 === e && null !== n
            ? null == o
              ? sg(t, n, u)
              : hs(t, n, u, o || null, !0)
            : 1 === e && null !== n
            ? hs(t, n, u, o || null, !0)
            : 2 === e
            ? (function tl(e, t, n) {
                const r = Tc(e, t);
                r &&
                  (function nb(e, t, n, r) {
                    e.removeChild(t, n, r);
                  })(e, r, t, n);
              })(t, u, s)
            : 3 === e && t.destroyNode(u),
            null != i &&
              (function ib(e, t, n, r, o) {
                const i = n[So];
                i !== Pn(n) && Xs(t, e, r, i, o);
                for (let u = rr; u < n.length; u++) {
                  const f = n[u];
                  Nc(f[ot], f, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function Dd(e, t) {
        return e.createComment(
          (function qp(e) {
            return e.replace(FD, (t) => t.replace(kD, LD));
          })(t)
        );
      }
      function wc(e, t, n) {
        return e.createElement(t, n);
      }
      function rg(e, t) {
        var n;
        null === (n = t[Ao].changeDetectionScheduler) ||
          void 0 === n ||
          n.notify(1),
          Nc(e, t, t[Ft], 2, null, null);
      }
      function og(e, t) {
        const n = e[ri],
          r = n.indexOf(t);
        n.splice(r, 1);
      }
      function Ja(e, t) {
        if (e.length <= rr) return;
        const n = rr + t,
          r = e[n];
        if (r) {
          const o = r[Os];
          null !== o && o !== e && og(o, r), t > 0 && (e[n - 1][sr] = r[sr]);
          const i = Io(e, rr + t);
          !(function qD(e, t) {
            rg(e, t), (t[Cn] = null), (t[$n] = null);
          })(r[ot], r);
          const s = i[go];
          null !== s && s.detachView(i[ot]),
            (r[vn] = null),
            (r[sr] = null),
            (r[bt] &= -129);
        }
        return r;
      }
      function Mc(e, t) {
        if (!(256 & t[bt])) {
          const n = t[Ft];
          n.destroyNode && Nc(e, t, n, 3, null, null),
            (function YD(e) {
              let t = e[ss];
              if (!t) return bd(e[ot], e);
              for (; t; ) {
                let n = null;
                if (jr(t)) n = t[ss];
                else {
                  const r = t[rr];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[sr] && t !== e; )
                    jr(t) && bd(t[ot], t), (t = t[vn]);
                  null === t && (t = e),
                    jr(t) && bd(t[ot], t),
                    (n = t && t[sr]);
                }
                t = n;
              }
            })(t);
        }
      }
      function bd(e, t) {
        if (256 & t[bt]) return;
        const n = X(null);
        try {
          (t[bt] &= -129),
            (t[bt] |= 256),
            t[_i] &&
              (function Ae(e) {
                if ((Me(e), xe(e)))
                  for (let t = 0; t < e.producerNode.length; t++)
                    fe(e.producerNode[t], e.producerIndexOfThis[t]);
                (e.producerNode.length =
                  e.producerLastReadVersion.length =
                  e.producerIndexOfThis.length =
                    0),
                  e.liveConsumerNode &&
                    (e.liveConsumerNode.length =
                      e.liveConsumerIndexOfThis.length =
                        0);
              })(t[_i]),
            (function tb(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof Va)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const u = o[i[s]],
                          f = i[s + 1];
                        Zr(4, u, f);
                        try {
                          f.call(u);
                        } finally {
                          Zr(5, u, f);
                        }
                      }
                    else {
                      Zr(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        Zr(5, o, i);
                      }
                    }
                  }
                }
            })(e, t),
            (function eb(e, t) {
              const n = e.cleanup,
                r = t[Fo];
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const s = n[i + 3];
                    s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
                  } else n[i].call(r[n[i + 1]]);
              null !== r && (t[Fo] = null);
              const o = t[zo];
              if (null !== o) {
                t[zo] = null;
                for (let i = 0; i < o.length; i++) (0, o[i])();
              }
            })(e, t),
            1 === t[ot].type && t[Ft].destroy();
          const r = t[Os];
          if (null !== r && Sr(t[vn])) {
            r !== t[vn] && og(r, t);
            const o = t[go];
            null !== o && o.detachView(e);
          }
          !(function OC(e) {
            Qu.delete(e[Li]);
          })(t);
        } finally {
          X(n);
        }
      }
      function Id(e, t, n) {
        return (function ig(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[Cn];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } = e.data[r.directiveStart + o];
              if (i === Kr.None || i === Kr.Emulated) return null;
            }
            return io(r, n);
          }
        })(e, t.parent, n);
      }
      function hs(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function sg(e, t, n) {
        e.appendChild(t, n);
      }
      function ag(e, t, n, r, o) {
        null !== r ? hs(e, t, n, r, o) : sg(e, t, n);
      }
      function Tc(e, t) {
        return e.parentNode(t);
      }
      function lg(e, t, n) {
        return ug(e, t, n);
      }
      let Ed,
        ug = function cg(e, t, n) {
          return 40 & e.type ? io(e, n) : null;
        };
      function Rc(e, t, n, r) {
        const o = Id(e, r, t),
          i = t[Ft],
          u = lg(r.parent || t[$n], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let f = 0; f < n.length; f++) ag(i, o, n[f], u, !1);
          else ag(i, o, n, u, !1);
        void 0 !== Ed && Ed(i, r, t, n, o);
      }
      function el(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return io(t, e);
          if (4 & n) return Ad(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return el(e, r);
            {
              const o = e[t.index];
              return Sr(o) ? Ad(-1, o) : Pn(o);
            }
          }
          if (32 & n) return _d(t, e)() || Pn(e[t.index]);
          {
            const r = fg(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : el(us(e[Jn]), r)
              : el(e, t.next);
          }
        }
        return null;
      }
      function fg(e, t) {
        return null !== t ? e[Jn][$n].projection[t.projection] : null;
      }
      function Ad(e, t) {
        const n = rr + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[ot].firstChild;
          if (null !== o) return el(r, o);
        }
        return t[So];
      }
      function Sd(e, t, n, r, o, i, s) {
        for (; null != n; ) {
          const u = r[n.index],
            f = n.type;
          if (
            (s && 0 === t && (u && eo(Pn(u), r), (n.flags |= 2)), 32 & ~n.flags)
          )
            if (8 & f) Sd(e, t, n.child, r, o, i, !1), Xs(t, e, o, u, i);
            else if (32 & f) {
              const D = _d(n, r);
              let M;
              for (; (M = D()); ) Xs(t, e, o, M, i);
              Xs(t, e, o, u, i);
            } else 16 & f ? pg(e, t, r, n, o, i) : Xs(t, e, o, u, i);
          n = s ? n.projectionNext : n.next;
        }
      }
      function Nc(e, t, n, r, o, i) {
        Sd(n, r, e.firstChild, t, o, i, !1);
      }
      function pg(e, t, n, r, o, i) {
        const s = n[Jn],
          f = s[$n].projection[r.projection];
        if (Array.isArray(f))
          for (let D = 0; D < f.length; D++) Xs(t, e, o, f[D], i);
        else {
          let D = f;
          const M = s[vn];
          dc(r) && (D.flags |= 128), Sd(e, t, D, M, o, i, !0);
        }
      }
      function gg(e, t, n) {
        "" === n
          ? e.removeAttribute(t, "class")
          : e.setAttribute(t, "class", n);
      }
      function mg(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && Mi(e, t, r),
          null !== o && gg(e, t, o),
          null !== i &&
            (function ab(e, t, n) {
              e.setAttribute(t, "style", n);
            })(e, t, i);
      }
      const en = {};
      function vg(e = 1) {
        yg(hn(), Xe(), Jr() + e, !1);
      }
      function yg(e, t, n, r) {
        if (!r)
          if (3 & ~t[bt]) {
            const i = e.preOrderHooks;
            null !== i && oc(t, i, 0, n);
          } else {
            const i = e.preOrderCheckHooks;
            null !== i && rc(t, i, n);
          }
        ds(n);
      }
      function Ks(e, t = zt.Default) {
        const n = Xe();
        return null === n ? tt(e, t) : zh(xn(), n, pe(e), t);
      }
      function _g(e, t, n, r, o, i) {
        const s = X(null);
        try {
          let u = null;
          o & xo.SignalBased && (u = t[r][ae]),
            null !== u && void 0 !== u.transformFn && (i = u.transformFn(i)),
            o & xo.HasDecoratorInputTransform &&
              (i = e.inputTransforms[r].call(t, i)),
            null !== e.setInput ? e.setInput(t, u, i, n, r) : Te(t, u, r, i);
        } finally {
          X(s);
        }
      }
      function Oc(e, t, n, r, o, i, s, u, f, D, M) {
        const N = t.blueprint.slice();
        return (
          (N[Cn] = o),
          (N[bt] = 204 | r),
          (null !== D || (e && 2048 & e[bt])) && (N[bt] |= 2048),
          Ch(N),
          (N[vn] = N[Fi] = e),
          (N[fn] = n),
          (N[Ao] = s || (e && e[Ao])),
          (N[Ft] = u || (e && e[Ft])),
          (N[Ar] = f || (e && e[Ar]) || null),
          (N[$n] = i),
          (N[Li] = (function RC() {
            return TC++;
          })()),
          (N[ar] = M),
          (N[Xl] = D),
          (N[Jn] = 2 == t.type ? e[Jn] : N),
          N
        );
      }
      function qs(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function wd(e, t, n, r, o) {
            const i = Sh(),
              s = Ou(),
              f = (e.data[t] = (function mb(e, t, n, r, o, i) {
                let s = t ? t.injectorIndex : -1,
                  u = 0;
                return (
                  Fs() && (u |= 128),
                  {
                    type: n,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: s,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: u,
                    providerIndexes: 0,
                    value: o,
                    attrs: i,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tView: null,
                    next: null,
                    prev: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  }
                );
              })(0, s ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = f),
              null !== i &&
                (s
                  ? null == i.child && null !== f.parent && (i.child = f)
                  : null === i.next && ((i.next = f), (f.prev = i))),
              f
            );
          })(e, t, n, r, o)),
            (function X_() {
              return Kt.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const s = (function La() {
            const e = Kt.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return ii(i, !0), i;
      }
      function nl(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function Cg(e, t, n, r, o) {
        const i = Jr(),
          s = 2 & r;
        try {
          ds(-1),
            s && t.length > Qt && yg(e, t, Qt, !1),
            Zr(s ? 2 : 0, o),
            n(r, o);
        } finally {
          ds(i), Zr(s ? 3 : 1, o);
        }
      }
      function Md(e, t, n) {
        if (ql(t)) {
          const r = X(null);
          try {
            const i = t.directiveEnd;
            for (let s = t.directiveStart; s < i; s++) {
              const u = e.data[s];
              u.contentQueries && u.contentQueries(1, n[s], s);
            }
          } finally {
            X(r);
          }
        }
      }
      function Td(e, t, n) {
        Ih() &&
          ((function Ib(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            $i(n) &&
              (function Rb(e, t, n) {
                const r = io(t, e),
                  o = Dg(n);
                let s = 16;
                n.signals ? (s = 4096) : n.onPush && (s = 64);
                const u = xc(
                  e,
                  Oc(
                    e,
                    o,
                    null,
                    s,
                    r,
                    t,
                    null,
                    e[Ao].rendererFactory.createRenderer(r, n),
                    null,
                    null,
                    null
                  )
                );
                e[t.index] = u;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || sc(n, t),
              eo(r, t);
            const s = n.initialInputs;
            for (let u = o; u < i; u++) {
              const f = e.data[u],
                D = fs(t, e, u, n);
              eo(D, t),
                null !== s && Nb(0, u - o, D, f, 0, s),
                ko(f) && (wo(n.index, t)[fn] = fs(t, e, u, n));
            }
          })(e, t, n, io(n, t)),
          !(64 & ~n.flags) && Sg(e, t, n));
      }
      function Rd(e, t, n = io) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const s = r[i + 1],
              u = -1 === s ? n(t, e) : e[s];
            e[o++] = u;
          }
        }
      }
      function Dg(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Nd(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts,
              e.id
            ))
          : t;
      }
      function Nd(e, t, n, r, o, i, s, u, f, D, M) {
        const N = Qt + r,
          W = N + o,
          oe = (function ub(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : en);
            return n;
          })(N, W),
          ye = "function" == typeof D ? D() : D;
        return (oe[ot] = {
          type: e,
          blueprint: oe,
          template: n,
          queries: null,
          viewQuery: u,
          declTNode: t,
          data: oe.slice().fill(null, N),
          bindingStartIndex: N,
          expandoStartIndex: W,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof s ? s() : s,
          firstChild: null,
          schemas: f,
          consts: ye,
          incompleteFirstPass: !1,
          ssrId: M,
        });
      }
      let bg = () => null;
      function Ig(e, t, n, r, o) {
        for (let s in t) {
          var i;
          if (!t.hasOwnProperty(s)) continue;
          const u = t[s];
          if (void 0 === u) continue;
          (null !== (i = r) && void 0 !== i) || (r = {});
          let f,
            D = xo.None;
          Array.isArray(u) ? ((f = u[0]), (D = u[1])) : (f = u);
          let M = s;
          if (null !== o) {
            if (!o.hasOwnProperty(s)) continue;
            M = o[s];
          }
          0 === e ? Eg(r, n, M, f, D) : Eg(r, n, M, f);
        }
        return r;
      }
      function Eg(e, t, n, r, o) {
        let i;
        e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
          void 0 !== o && i.push(o);
      }
      function Od(e, t, n, r) {
        if (Ih()) {
          const o = null === r ? null : { "": -1 },
            i = (function Ab(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let s = 0; s < n.length; s++) {
                  const u = n[s];
                  if (H(t, u.selectors, !1))
                    if ((r || (r = []), ko(u)))
                      if (null !== u.findHostDirectiveDefs) {
                        const f = [];
                        (o = o || new Map()),
                          u.findHostDirectiveDefs(u, f, o),
                          r.unshift(...f, u),
                          xd(e, t, f.length);
                      } else r.unshift(u), xd(e, t, 0);
                    else {
                      var i;
                      (o = o || new Map()),
                        null === (i = u.findHostDirectiveDefs) ||
                          void 0 === i ||
                          i.call(u, u, r, o),
                        r.push(u);
                    }
                }
              return null === r ? null : [r, o];
            })(e, n);
          let s, u;
          null === i ? (s = u = null) : ([s, u] = i),
            null !== s && Ag(e, t, n, s, o, u),
            o &&
              (function Sb(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let o = 0; o < t.length; o += 2) {
                    const i = n[t[o + 1]];
                    if (null == i) throw new le(-301, !1);
                    r.push(t[o], i);
                  }
                }
              })(n, r, o);
        }
        n.mergedAttrs = vi(n.mergedAttrs, n.attrs);
      }
      function Ag(e, t, n, r, o, i) {
        for (let N = 0; N < r.length; N++) zu(sc(n, t), e, r[N].type);
        !(function Mb(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let N = 0; N < r.length; N++) {
          const W = r[N];
          W.providersResolver && W.providersResolver(W);
        }
        let s = !1,
          u = !1,
          f = nl(e, t, r.length, null);
        for (let N = 0; N < r.length; N++) {
          const W = r[N];
          (n.mergedAttrs = vi(n.mergedAttrs, W.hostAttrs)),
            Tb(e, n, t, f, W),
            wb(f, W, o),
            null !== W.contentQueries && (n.flags |= 4),
            (null !== W.hostBindings ||
              null !== W.hostAttrs ||
              0 !== W.hostVars) &&
              (n.flags |= 64);
          const oe = W.type.prototype;
          var D, M;
          !s &&
            (oe.ngOnChanges || oe.ngOnInit || oe.ngDoCheck) &&
            ((null !== (D = e.preOrderHooks) && void 0 !== D
              ? D
              : (e.preOrderHooks = [])
            ).push(n.index),
            (s = !0)),
            u ||
              (!oe.ngOnChanges && !oe.ngDoCheck) ||
              ((null !== (M = e.preOrderCheckHooks) && void 0 !== M
                ? M
                : (e.preOrderCheckHooks = [])
              ).push(n.index),
              (u = !0)),
            f++;
        }
        !(function vb(e, t, n) {
          const o = t.directiveEnd,
            i = e.data,
            s = t.attrs,
            u = [];
          let f = null,
            D = null;
          for (let M = t.directiveStart; M < o; M++) {
            const N = i[M],
              W = n ? n.get(N) : null,
              ye = W ? W.outputs : null;
            (f = Ig(0, N.inputs, M, f, W ? W.inputs : null)),
              (D = Ig(1, N.outputs, M, D, ye));
            const ze = null === f || null === s || ts(t) ? null : Ob(f, M, s);
            u.push(ze);
          }
          null !== f &&
            (f.hasOwnProperty("class") && (t.flags |= 8),
            f.hasOwnProperty("style") && (t.flags |= 16)),
            (t.initialInputs = u),
            (t.inputs = f),
            (t.outputs = D);
        })(e, n, i);
      }
      function Sg(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          s = (function q_() {
            return Kt.lFrame.currentDirectiveIndex;
          })();
        try {
          ds(i);
          for (let u = r; u < o; u++) {
            const f = e.data[u],
              D = t[u];
            Pu(u),
              (null !== f.hostBindings ||
                0 !== f.hostVars ||
                null !== f.hostAttrs) &&
                Eb(f, D);
          }
        } finally {
          ds(-1), Pu(s);
        }
      }
      function Eb(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function xd(e, t, n) {
        var r;
        (t.componentOffset = n),
          (null !== (r = e.components) && void 0 !== r
            ? r
            : (e.components = [])
          ).push(t.index);
      }
      function wb(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          ko(t) && (n[""] = e);
        }
      }
      function Tb(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = bo(o.type)),
          s = new Va(i, ko(o), Ks);
        (e.blueprint[r] = s),
          (n[r] = s),
          (function Db(e, t, n, r, o) {
            const i = o.hostBindings;
            if (i) {
              let s = e.hostBindingOpCodes;
              null === s && (s = e.hostBindingOpCodes = []);
              const u = ~t.index;
              (function bb(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ("number" == typeof n && n < 0) return n;
                }
                return 0;
              })(s) != u && s.push(u),
                s.push(n, r, i);
            }
          })(e, t, r, nl(e, n, o.hostVars, en), o);
      }
      function ci(e, t, n, r, o, i) {
        const s = io(e, t);
        !(function Pd(e, t, n, r, o, i, s) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const u = null == s ? St(i) : s(i, r || "", o);
            e.setAttribute(t, o, u, n);
          }
        })(t[Ft], s, i, e.value, n, r, o);
      }
      function Nb(e, t, n, r, o, i) {
        const s = i[t];
        if (null !== s)
          for (let u = 0; u < s.length; )
            _g(r, n, s[u++], s[u++], s[u++], s[u++]);
      }
      function Ob(e, t, n) {
        let r = null,
          o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (0 !== i)
            if (5 !== i) {
              if ("number" == typeof i) break;
              if (e.hasOwnProperty(i)) {
                null === r && (r = []);
                const s = e[i];
                for (let u = 0; u < s.length; u += 3)
                  if (s[u] === t) {
                    r.push(i, s[u + 1], s[u + 2], n[o + 1]);
                    break;
                  }
              }
              o += 2;
            } else o += 2;
          else o += 4;
        }
        return r;
      }
      function wg(e, t, n, r) {
        return [e, !0, 0, t, null, r, null, n, null, null];
      }
      function Mg(e, t) {
        const n = e.contentQueries;
        if (null !== n) {
          const r = X(null);
          try {
            for (let o = 0; o < n.length; o += 2) {
              const s = n[o + 1];
              if (-1 !== s) {
                const u = e.data[s];
                tc(n[o]), u.contentQueries(2, t[s], s);
              }
            }
          } finally {
            X(r);
          }
        }
      }
      function xc(e, t) {
        return e[ss] ? (e[Wl][sr] = t) : (e[ss] = t), (e[Wl] = t), t;
      }
      function Fd(e, t, n) {
        tc(0);
        const r = X(null);
        try {
          t(e, n);
        } finally {
          X(r);
        }
      }
      function Tg(e) {
        return e[Fo] || (e[Fo] = []);
      }
      function Rg(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Pc(e, t) {
        const n = e[Ar],
          r = n ? n.get(bi, null) : null;
        r && r.handleError(t);
      }
      function kd(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const s = n[i++],
            u = n[i++],
            f = n[i++];
          _g(e.data[s], t[s], r, u, f, o);
        }
      }
      function xb(e, t) {
        const n = wo(t, e),
          r = n[ot];
        !(function Pb(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n);
        const o = n[Cn];
        null !== o && null === n[ar] && (n[ar] = id(o, n[Ar])), Ld(r, n, n[fn]);
      }
      function Ld(e, t, n) {
        Lu(t);
        try {
          var r;
          const o = e.viewQuery;
          null !== o && Fd(1, o, n);
          const i = e.template;
          null !== i && Cg(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            null === (r = t[go]) || void 0 === r || r.finishViewCreation(e),
            e.staticContentQueries && Mg(e, t),
            e.staticViewQueries && Fd(2, e.viewQuery, n);
          const s = e.components;
          null !== s &&
            (function Fb(e, t) {
              for (let n = 0; n < t.length; n++) xb(e, t[n]);
            })(t, s);
        } catch (o) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            o)
          );
        } finally {
          (t[bt] &= -5), $u();
        }
      }
      function Qs(e, t) {
        return !t || null === t.firstChild || dc(e);
      }
      function ol(e, t, n, r = !0) {
        const o = t[ot];
        if (
          ((function ZD(e, t, n, r) {
            const o = rr + r,
              i = n.length;
            r > 0 && (n[o - 1][sr] = t),
              r < i - rr
                ? ((t[sr] = n[o]), Zi(n, rr + r, t))
                : (n.push(t), (t[sr] = null)),
              (t[vn] = n);
            const s = t[Os];
            null !== s &&
              n !== s &&
              (function JD(e, t) {
                const n = e[ri];
                t[Jn] !== t[vn][vn][Jn] && (e[bt] |= Oa.HasTransplantedViews),
                  null === n ? (e[ri] = [t]) : n.push(t);
              })(s, t);
            const u = t[go];
            null !== u && u.insertView(e), Ru(t), (t[bt] |= 128);
          })(o, t, e, n),
          r)
        ) {
          const s = Ad(n, e),
            u = t[Ft],
            f = Tc(u, e[So]);
          null !== f &&
            (function QD(e, t, n, r, o, i) {
              (r[Cn] = o), (r[$n] = t), Nc(e, r, n, 1, o, i);
            })(o, e[$n], u, t, f, s);
        }
        const i = t[ar];
        null !== i && null !== i.firstChild && (i.firstChild = null);
      }
      function il(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          null !== i && r.push(Pn(i)), Sr(i) && xg(i, r);
          const s = n.type;
          if (8 & s) il(e, t, n.child, r);
          else if (32 & s) {
            const u = _d(n, t);
            let f;
            for (; (f = u()); ) r.push(f);
          } else if (16 & s) {
            const u = fg(t, n);
            if (Array.isArray(u)) r.push(...u);
            else {
              const f = us(t[Jn]);
              il(f[ot], f, u, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      function xg(e, t) {
        for (let n = rr; n < e.length; n++) {
          const r = e[n],
            o = r[ot].firstChild;
          null !== o && il(r[ot], r, o, t);
        }
        e[So] !== e[Cn] && t.push(e[So]);
      }
      let Pg = [];
      const Vb = {
          version: 0,
          lastCleanEpoch: 0,
          dirty: !1,
          producerNode: void 0,
          producerLastReadVersion: void 0,
          producerIndexOfThis: void 0,
          nextProducerIndex: 0,
          liveConsumerNode: void 0,
          liveConsumerIndexOfThis: void 0,
          consumerAllowSignalWrites: !1,
          consumerIsAlwaysLive: !1,
          producerMustRecompute: () => !1,
          producerRecomputeValue: () => {},
          consumerMarkedDirty: () => {},
          consumerOnSignalRead: () => {},
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: (e) => {
            ka(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[_i] = this;
          },
        },
        Fg = 100;
      function Fc(e, t = !0, n = 0) {
        const r = e[Ao],
          o = r.rendererFactory;
        var s;
        null === (s = o.begin) || void 0 === s || s.call(o);
        try {
          !(function Bb(e, t) {
            Vd(e, t);
            let n = 0;
            for (; Tu(e); ) {
              if (n === Fg) throw new le(103, !1);
              n++, Vd(e, 1);
            }
          })(e, n);
        } catch (D) {
          throw (t && Pc(e, D), D);
        } finally {
          var u, f;
          null === (u = o.end) || void 0 === u || u.call(o),
            null === (f = r.inlineEffectRunner) || void 0 === f || f.flush();
        }
      }
      function Ub(e, t, n, r) {
        var o;
        const i = t[bt];
        if (!(256 & ~i)) return;
        null === (o = t[Ao].inlineEffectRunner) || void 0 === o || o.flush(),
          Lu(t);
        let u = null,
          f = null;
        (function jb(e) {
          return 2 !== e.type;
        })(e) &&
          ((f = (function kb(e) {
            var t;
            return null !== (t = e[_i]) && void 0 !== t
              ? t
              : (function Lb(e) {
                  var t;
                  const n =
                    null !== (t = Pg.pop()) && void 0 !== t
                      ? t
                      : Object.create(Vb);
                  return (n.lView = e), n;
                })(e);
          })(t)),
          (u = (function _e(e) {
            return e && (e.nextProducerIndex = 0), X(e);
          })(f)));
        try {
          Ch(t),
            (function Mh(e) {
              return (Kt.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && Cg(e, t, n, 2, r);
          const D = !(3 & ~i);
          if (D) {
            const W = e.preOrderCheckHooks;
            null !== W && rc(t, W, null);
          } else {
            const W = e.preOrderHooks;
            null !== W && oc(t, W, 0, null), Vu(t, 0);
          }
          if (
            ((function Hb(e) {
              for (let t = gp(e); null !== t; t = mp(t)) {
                if (!(t[bt] & Oa.HasTransplantedViews)) continue;
                const n = t[ri];
                for (let r = 0; r < n.length; r++) {
                  L_(n[r]);
                }
              }
            })(t),
            kg(t, 0),
            null !== e.contentQueries && Mg(e, t),
            D)
          ) {
            const W = e.contentCheckHooks;
            null !== W && rc(t, W);
          } else {
            const W = e.contentHooks;
            null !== W && oc(t, W, 1), Vu(t, 1);
          }
          !(function cb(e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const o = n[r];
                  if (o < 0) ds(~o);
                  else {
                    const i = o,
                      s = n[++r],
                      u = n[++r];
                    K_(s, i), u(2, t[i]);
                  }
                }
              } finally {
                ds(-1);
              }
          })(e, t);
          const M = e.components;
          null !== M && $g(t, M, 0);
          const N = e.viewQuery;
          if ((null !== N && Fd(2, N, r), D)) {
            const W = e.viewCheckHooks;
            null !== W && rc(t, W);
          } else {
            const W = e.viewHooks;
            null !== W && oc(t, W, 2), Vu(t, 2);
          }
          if ((!0 === e.firstUpdatePass && (e.firstUpdatePass = !1), t[Yr])) {
            for (const W of t[Yr]) W();
            t[Yr] = null;
          }
          t[bt] &= -73;
        } catch (D) {
          throw (ka(t), D);
        } finally {
          null !== f &&
            ((function we(e, t) {
              if (
                (X(t),
                e &&
                  void 0 !== e.producerNode &&
                  void 0 !== e.producerIndexOfThis &&
                  void 0 !== e.producerLastReadVersion)
              ) {
                if (xe(e))
                  for (
                    let n = e.nextProducerIndex;
                    n < e.producerNode.length;
                    n++
                  )
                    fe(e.producerNode[n], e.producerIndexOfThis[n]);
                for (; e.producerNode.length > e.nextProducerIndex; )
                  e.producerNode.pop(),
                    e.producerLastReadVersion.pop(),
                    e.producerIndexOfThis.pop();
              }
            })(f, u),
            (function $b(e) {
              e.lView[_i] !== e && ((e.lView = null), Pg.push(e));
            })(f)),
            $u();
        }
      }
      function kg(e, t) {
        for (let n = gp(e); null !== n; n = mp(n))
          for (let r = rr; r < n.length; r++) Lg(n[r], t);
      }
      function zb(e, t, n) {
        Lg(wo(t, e), n);
      }
      function Lg(e, t) {
        Mu(e) && Vd(e, t);
      }
      function Vd(e, t) {
        const r = e[ot],
          o = e[bt],
          i = e[_i];
        let s = !!(0 === t && 16 & o);
        if (
          (s || (s = !!(64 & o && 0 === t)),
          s || (s = !!(1024 & o)),
          s || (s = !(null == i || !i.dirty || !Ye(i))),
          i && (i.dirty = !1),
          (e[bt] &= -9217),
          s)
        )
          Ub(r, e, r.template, e[fn]);
        else if (8192 & o) {
          kg(e, 1);
          const u = r.components;
          null !== u && $g(e, u, 1);
        }
      }
      function $g(e, t, n) {
        for (let r = 0; r < t.length; r++) zb(e, t[r], n);
      }
      function sl(e) {
        var t;
        for (
          null === (t = e[Ao].changeDetectionScheduler) ||
          void 0 === t ||
          t.notify();
          e;

        ) {
          e[bt] |= 64;
          const n = us(e);
          if (Ql(e) && !n) return e;
          e = n;
        }
        return null;
      }
      class al {
        get rootNodes() {
          const t = this._lView,
            n = t[ot];
          return il(n, t, n.firstChild, []);
        }
        constructor(t, n, r = !0) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this.notifyErrorHandler = r),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[fn];
        }
        set context(t) {
          this._lView[fn] = t;
        }
        get destroyed() {
          return !(256 & ~this._lView[bt]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[vn];
            if (Sr(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Ja(t, r), Io(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Mc(this._lView[ot], this._lView);
        }
        onDestroy(t) {
          ec(this._lView, t);
        }
        markForCheck() {
          sl(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[bt] &= -129;
        }
        reattach() {
          Ru(this._lView), (this._lView[bt] |= 128);
        }
        detectChanges() {
          (this._lView[bt] |= 1024), Fc(this._lView, this.notifyErrorHandler);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new le(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null), rg(this._lView[ot], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new le(902, !1);
          (this._appRef = t), Ru(this._lView);
        }
      }
      let ll = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = Xb), t;
      })();
      const Gb = ll,
        Wb = class extends Gb {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          get ssrId() {
            var t;
            return (
              (null === (t = this._declarationTContainer.tView) || void 0 === t
                ? void 0
                : t.ssrId) || null
            );
          }
          createEmbeddedView(t, n) {
            return this.createEmbeddedViewImpl(t, n);
          }
          createEmbeddedViewImpl(t, n, r) {
            const o = (function rl(e, t, n, r) {
              const o = X(null);
              try {
                var i, s, u;
                const f = t.tView,
                  N = Oc(
                    e,
                    f,
                    n,
                    4096 & e[bt] ? 4096 : 16,
                    null,
                    t,
                    null,
                    null,
                    null !== (i = null == r ? void 0 : r.injector) &&
                      void 0 !== i
                      ? i
                      : null,
                    null !==
                      (s = null == r ? void 0 : r.embeddedViewInjector) &&
                      void 0 !== s
                      ? s
                      : null,
                    null !== (u = null == r ? void 0 : r.dehydratedView) &&
                      void 0 !== u
                      ? u
                      : null
                  );
                N[Os] = e[t.index];
                const oe = e[go];
                return (
                  null !== oe && (N[go] = oe.createEmbeddedView(f)),
                  Ld(f, N, n),
                  N
                );
              } finally {
                X(o);
              }
            })(this._declarationLView, this._declarationTContainer, t, {
              embeddedViewInjector: n,
              dehydratedView: r,
            });
            return new al(o);
          }
        };
      function Xb() {
        return kc(xn(), Xe());
      }
      function kc(e, t) {
        return 4 & e.type ? new Wb(t, e, Bs(e, t)) : null;
      }
      class Gd {}
      class vI {}
      class Gg {}
      class _I {
        resolveComponentFactory(t) {
          throw (function yI(e) {
            const t = Error(`No component factory found for ${Zt(e)}.`);
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Uc = (() => {
        class t {}
        return (t.NULL = new _I()), t;
      })();
      class Xg {}
      let CI = (() => {
          class t {
            constructor() {
              this.destroyNode = null;
            }
          }
          return (
            (t.__NG_ELEMENT_ID__ = () =>
              (function DI() {
                const e = Xe(),
                  n = wo(xn().index, e);
                return (jr(n) ? n : e)[Ft];
              })()),
            t
          );
        })(),
        bI = (() => {
          var e;
          class t {}
          return (
            ((e = t).ɵprov = Ht({
              token: e,
              providedIn: "root",
              factory: () => null,
            })),
            t
          );
        })();
      const Wd = {},
        Kg = new Set();
      function qg(...e) {}
      class Cr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new li(!1)),
            (this.onMicrotaskEmpty = new li(!1)),
            (this.onStable = new li(!1)),
            (this.onError = new li(!1)),
            typeof Zone > "u")
          )
            throw new le(908, !1);
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function II() {
              const e = "function" == typeof Et.requestAnimationFrame;
              let t = Et[e ? "requestAnimationFrame" : "setTimeout"],
                n = Et[e ? "cancelAnimationFrame" : "clearTimeout"];
              if (typeof Zone < "u" && t && n) {
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
                const o = n[Zone.__symbol__("OriginalDelegate")];
                o && (n = o);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: n,
              };
            })().nativeRequestAnimationFrame),
            (function SI(e) {
              const t = () => {
                !(function AI(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Et, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                Kd(e),
                                (e.isCheckStableRunning = !0),
                                Xd(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    Kd(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, s, u) => {
                  if (
                    (function wI(e) {
                      var t;
                      return (
                        !(!Array.isArray(e) || 1 !== e.length) &&
                        !0 ===
                          (null === (t = e[0].data) || void 0 === t
                            ? void 0
                            : t.__ignore_ng_zone__)
                      );
                    })(u)
                  )
                    return n.invokeTask(o, i, s, u);
                  try {
                    return Qg(e), n.invokeTask(o, i, s, u);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Yg(e);
                  }
                },
                onInvoke: (n, r, o, i, s, u, f) => {
                  try {
                    return Qg(e), n.invoke(o, i, s, u, f);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), Yg(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ("microTask" == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          Kd(e),
                          Xd(e))
                        : "macroTask" == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (
                  n.handleError(o, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Cr.isInAngularZone()) throw new le(909, !1);
        }
        static assertNotInAngularZone() {
          if (Cr.isInAngularZone()) throw new le(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            s = i.scheduleEventTask("NgZoneEvent: " + o, t, EI, qg, qg);
          try {
            return i.runTask(s, n, r);
          } finally {
            i.cancelTask(s);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const EI = {};
      function Xd(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Kd(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Qg(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Yg(e) {
        e._nesting--, Xd(e);
      }
      let hl = (() => {
        var e;
        class t {
          constructor() {
            (this.handler = null), (this.internalCallbacks = []);
          }
          execute() {
            var r;
            this.executeInternalCallbacks(),
              null === (r = this.handler) || void 0 === r || r.execute();
          }
          executeInternalCallbacks() {
            const r = [...this.internalCallbacks];
            this.internalCallbacks.length = 0;
            for (const o of r) o();
          }
          ngOnDestroy() {
            var r;
            null === (r = this.handler) || void 0 === r || r.destroy(),
              (this.handler = null),
              (this.internalCallbacks.length = 0);
          }
        }
        return (
          ((e = t).ɵprov = Ht({
            token: e,
            providedIn: "root",
            factory: () => new e(),
          })),
          t
        );
      })();
      function zi(e) {
        return !!pr(e);
      }
      function Hc(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const u = t[s];
            "number" == typeof u
              ? (i = u)
              : 1 == i
              ? (o = zn(o, u))
              : 2 == i && (r = zn(r, u + ": " + t[++s] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      class om extends Uc {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = nn(t);
          return new ml(n, this.ngModule);
        }
      }
      function im(e) {
        const t = [];
        for (const n in e) {
          if (!e.hasOwnProperty(n)) continue;
          const r = e[n];
          void 0 !== r &&
            t.push({ propName: Array.isArray(r) ? r[0] : r, templateName: n });
        }
        return t;
      }
      class zc {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = sn(r);
          const o = this.injector.get(t, Wd, r);
          return o !== Wd || n === Wd ? o : this.parentInjector.get(t, n, r);
        }
      }
      class ml extends Gg {
        get inputs() {
          const t = this.componentDef,
            n = t.inputTransforms,
            r = im(t.inputs);
          if (null !== n)
            for (const o of r)
              n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
          return r;
        }
        get outputs() {
          return im(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function Eo(e) {
              return e.map(qr).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, o) {
          const i = X(null);
          try {
            var u;
            let f =
              (o = o || this.ngModule) instanceof Qr
                ? o
                : null === (u = o) || void 0 === u
                ? void 0
                : u.injector;
            f &&
              null !== this.componentDef.getStandaloneInjector &&
              (f = this.componentDef.getStandaloneInjector(f) || f);
            const D = f ? new zc(t, f) : t,
              M = D.get(Xg, null);
            if (null === M) throw new le(407, !1);
            const N = D.get(bI, null),
              ye = {
                rendererFactory: M,
                sanitizer: N,
                inlineEffectRunner: null,
                afterRenderEventManager: D.get(hl, null),
                changeDetectionScheduler: D.get(Gd, null),
              },
              ze = M.createRenderer(null, this.componentDef),
              nt = this.componentDef.selectors[0][0] || "div",
              it = r
                ? (function db(e, t, n, r) {
                    const i = r.get(Op, !1) || n === Kr.ShadowDom,
                      s = e.selectRootElement(t, i);
                    return (
                      (function fb(e) {
                        bg(e);
                      })(s),
                      s
                    );
                  })(ze, r, this.componentDef.encapsulation, D)
                : wc(
                    ze,
                    nt,
                    (function xI(e) {
                      const t = e.toLowerCase();
                      return "svg" === t ? "svg" : "math" === t ? "math" : null;
                    })(nt)
                  );
            let Ke = 512;
            this.componentDef.signals
              ? (Ke |= 4096)
              : this.componentDef.onPush || (Ke |= 16);
            let Vt = null;
            null !== it && (Vt = id(it, D, !0));
            const rn = Nd(
                0,
                null,
                null,
                1,
                0,
                null,
                null,
                null,
                null,
                null,
                null
              ),
              bn = Oc(null, rn, null, Ke, null, null, ye, ze, D, null, Vt);
            let Hr, $o;
            Lu(bn);
            try {
              const qo = this.componentDef;
              let Ds,
                mh = null;
              qo.findHostDirectiveDefs
                ? ((Ds = []),
                  (mh = new Map()),
                  qo.findHostDirectiveDefs(qo, Ds, mh),
                  Ds.push(qo))
                : (Ds = [qo]);
              const nR = (function FI(e, t) {
                  const n = e[ot],
                    r = Qt;
                  return (e[r] = t), qs(n, r, 2, "#host", null);
                })(bn, it),
                rR = (function kI(e, t, n, r, o, i, s) {
                  const u = o[ot];
                  !(function LI(e, t, n, r) {
                    for (const o of e)
                      t.mergedAttrs = vi(t.mergedAttrs, o.hostAttrs);
                    null !== t.mergedAttrs &&
                      (Hc(t, t.mergedAttrs, !0), null !== n && mg(r, n, t));
                  })(r, e, t, s);
                  let f = null;
                  null !== t && (f = id(t, o[Ar]));
                  const D = i.rendererFactory.createRenderer(t, n);
                  let M = 16;
                  n.signals ? (M = 4096) : n.onPush && (M = 64);
                  const N = Oc(
                    o,
                    Dg(n),
                    null,
                    M,
                    o[e.index],
                    e,
                    i,
                    D,
                    null,
                    null,
                    f
                  );
                  return (
                    u.firstCreatePass && xd(u, e, r.length - 1),
                    xc(o, N),
                    (o[e.index] = N)
                  );
                })(nR, it, qo, Ds, bn, ye, ze);
              ($o = Fa(rn, Qt)),
                it &&
                  (function VI(e, t, n, r) {
                    if (r) Mi(e, n, ["ng-version", "17.3.5"]);
                    else {
                      const { attrs: o, classes: i } = (function Es(e) {
                        const t = [],
                          n = [];
                        let r = 1,
                          o = 2;
                        for (; r < e.length; ) {
                          let i = e[r];
                          if ("string" == typeof i)
                            2 === o
                              ? "" !== i && t.push(i, e[++r])
                              : 8 === o && n.push(i);
                          else {
                            if (!k(o)) break;
                            o = i;
                          }
                          r++;
                        }
                        return { attrs: t, classes: n };
                      })(t.selectors[0]);
                      o && Mi(e, n, o),
                        i && i.length > 0 && gg(e, n, i.join(" "));
                    }
                  })(ze, qo, it, r),
                void 0 !== n &&
                  (function BI(e, t, n) {
                    const r = (e.projection = []);
                    for (let o = 0; o < t.length; o++) {
                      const i = n[o];
                      r.push(null != i ? Array.from(i) : null);
                    }
                  })($o, this.ngContentSelectors, n),
                (Hr = (function $I(e, t, n, r, o, i) {
                  const s = xn(),
                    u = o[ot],
                    f = io(s, o);
                  Ag(u, o, s, n, null, r);
                  for (let M = 0; M < n.length; M++)
                    eo(fs(o, u, s.directiveStart + M, s), o);
                  Sg(u, o, s), f && eo(f, o);
                  const D = fs(o, u, s.directiveStart + s.componentOffset, s);
                  if (((e[fn] = o[fn] = D), null !== i))
                    for (const M of i) M(D, t);
                  return Md(u, s, o), D;
                })(rR, qo, Ds, mh, bn, [UI])),
                Ld(rn, bn, null);
            } finally {
              $u();
            }
            return new PI(this.componentType, Hr, Bs($o, bn), bn, $o);
          } finally {
            X(i);
          }
        }
      }
      class PI extends vI {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.previousInputValues = null),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new al(o, void 0, !1)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[t])) {
            var i;
            if (
              ((null !== (i = this.previousInputValues) && void 0 !== i) ||
                (this.previousInputValues = new Map()),
              this.previousInputValues.has(t) &&
                Object.is(this.previousInputValues.get(t), n))
            )
              return;
            const s = this._rootLView;
            kd(s[ot], s, o, t, n),
              this.previousInputValues.set(t, n),
              sl(wo(this._tNode.index, s));
          }
        }
        get injector() {
          return new wr(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function UI() {
        const e = xn();
        nc(Xe()[ot], e);
      }
      let Gc = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = jI), t;
      })();
      function jI() {
        return lm(xn(), Xe());
      }
      const HI = Gc,
        sm = class extends HI {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Bs(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new wr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = ac(this._hostTNode, this._hostLView);
            if (Uu(t)) {
              const n = Ua(t, this._hostLView),
                r = Ba(t);
              return new wr(n[ot].data[r + 8], n);
            }
            return new wr(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = am(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - rr;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            "number" == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const u = t.createEmbeddedViewImpl(n || {}, i, null);
            return this.insertImpl(u, o, Qs(this._hostTNode, null)), u;
          }
          createComponent(t, n, r, o, i) {
            var s, f;
            const D =
              t &&
              !(function Be(e) {
                return "function" == typeof e;
              })(t);
            let M;
            if (D) M = n;
            else {
              const it = n || {};
              (M = it.index),
                (r = it.injector),
                (o = it.projectableNodes),
                (i = it.environmentInjector || it.ngModuleRef);
            }
            const N = D ? t : new ml(nn(t)),
              W = r || this.parentInjector;
            if (!i && null == N.ngModule) {
              const Ke = (D ? W : this.parentInjector).get(Qr, null);
              Ke && (i = Ke);
            }
            const oe = nn(
                null !== (s = N.componentType) && void 0 !== s ? s : {}
              ),
              ye = (null == oe ? void 0 : oe.id, null),
              ze =
                null !== (f = null == ye ? void 0 : ye.firstChild) &&
                void 0 !== f
                  ? f
                  : null,
              nt = N.create(W, o, ze, i);
            return this.insertImpl(nt.hostView, M, Qs(this._hostTNode, ye)), nt;
          }
          insert(t, n) {
            return this.insertImpl(t, n, !0);
          }
          insertImpl(t, n, r) {
            const o = t._lView;
            if (
              (function k_(e) {
                return Sr(e[vn]);
              })(o)
            ) {
              const u = this.indexOf(t);
              if (-1 !== u) this.detach(u);
              else {
                const f = o[vn],
                  D = new sm(f, f[$n], f[vn]);
                D.detach(D.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              s = this._lContainer;
            return (
              ol(s, o, i, r), t.attachToViewContainerRef(), Zi(Zd(s), i, t), t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = am(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Ja(this._lContainer, n);
            r && (Io(Zd(this._lContainer), n), Mc(r[ot], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Ja(this._lContainer, n);
            return r && null != Io(Zd(this._lContainer), n) ? new al(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return null == t ? this.length + n : t;
          }
        };
      function am(e) {
        return e[8];
      }
      function Zd(e) {
        return e[8] || (e[8] = []);
      }
      function lm(e, t) {
        let n;
        const r = t[e.index];
        return (
          Sr(r)
            ? (n = r)
            : ((n = wg(r, t, null, e)), (t[e.index] = n), xc(t, n)),
          cm(n, t, e, r),
          new sm(n, e, t)
        );
      }
      let cm = function dm(e, t, n, r) {
          if (e[So]) return;
          let o;
          (o =
            8 & n.type
              ? Pn(r)
              : (function zI(e, t) {
                  const n = e[Ft],
                    r = n.createComment(""),
                    o = io(t, e);
                  return (
                    hs(
                      n,
                      Tc(n, o),
                      r,
                      (function rb(e, t) {
                        return e.nextSibling(t);
                      })(n, o),
                      !1
                    ),
                    r
                  );
                })(t, n)),
            (e[So] = o);
        },
        Jd = () => !1;
      class ef {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new ef(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class tf {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let i = 0; i < r; i++) {
              const s = n.getByIndex(i);
              o.push(this.queries[s.indexInDeclarationView].clone());
            }
            return new tf(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        finishViewCreation(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== lf(t, n).matches && this.queries[n].setDirty();
        }
      }
      class fm {
        constructor(t, n, r = null) {
          (this.flags = n),
            (this.read = r),
            (this.predicate =
              "string" == typeof t
                ? (function ZI(e) {
                    return e.split(",").map((t) => t.trim());
                  })(t)
                : t);
        }
      }
      class nf {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, o);
            i &&
              ((i.indexInDeclarationView = r),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new nf(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class rf {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new rf(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 & ~this.metadata.flags) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const i = r[o];
              this.matchTNodeWithReadOption(t, n, KI(n, i)),
                this.matchTNodeWithReadOption(t, n, lc(n, t, i, !1, !1));
            }
          else
            r === ll
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, lc(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === ja || o === Gc || (o === ll && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = lc(n, t, o, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function KI(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function QI(e, t, n, r) {
        return -1 === n
          ? (function qI(e, t) {
              return 11 & e.type ? Bs(e, t) : 4 & e.type ? kc(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function YI(e, t, n) {
              return n === ja
                ? Bs(t, e)
                : n === ll
                ? kc(t, e)
                : n === Gc
                ? lm(t, e)
                : void 0;
            })(e, t, r)
          : fs(e, e[ot], n, t);
      }
      function hm(e, t, n, r) {
        const o = t[go].queries[r];
        if (null === o.matches) {
          const i = e.data,
            s = n.matches,
            u = [];
          for (let f = 0; null !== s && f < s.length; f += 2) {
            const D = s[f];
            u.push(D < 0 ? null : QI(t, i[D], s[f + 1], n.metadata.read));
          }
          o.matches = u;
        }
        return o.matches;
      }
      function sf(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const s = hm(e, t, o, n);
          for (let u = 0; u < i.length; u += 2) {
            const f = i[u];
            if (f > 0) r.push(s[u / 2]);
            else {
              const D = i[u + 1],
                M = t[-f];
              for (let N = rr; N < M.length; N++) {
                const W = M[N];
                W[Os] === W[vn] && sf(W[ot], W, D, r);
              }
              if (null !== M[ri]) {
                const N = M[ri];
                for (let W = 0; W < N.length; W++) {
                  const oe = N[W];
                  sf(oe[ot], oe, D, r);
                }
              }
            }
          }
        }
        return r;
      }
      function pm(e, t, n) {
        var r;
        const o = new qu(!(4 & ~n));
        return (
          (function gb(e, t, n, r) {
            const o = Tg(t);
            o.push(n), e.firstCreatePass && Rg(e).push(r, o.length - 1);
          })(e, t, o, o.destroy),
          (null !== (r = t[go]) && void 0 !== r
            ? r
            : (t[go] = new tf())
          ).queries.push(new ef(o)) - 1
        );
      }
      function vm(e, t, n) {
        null === e.queries && (e.queries = new nf()),
          e.queries.track(new rf(t, n));
      }
      function lf(e, t) {
        return e.queries.getByIndex(t);
      }
      function ym(e, t) {
        const n = e[ot],
          r = lf(n, t);
        return r.crossesNgTemplate ? sf(n, e, t, []) : hm(n, e, r, t);
      }
      function uf(e) {
        let t = (function Om(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (ko(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new le(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const s = e;
              (s.inputs = Xc(e.inputs)),
                (s.inputTransforms = Xc(e.inputTransforms)),
                (s.declaredInputs = Xc(e.declaredInputs)),
                (s.outputs = Xc(e.outputs));
              const u = o.hostBindings;
              u && pE(e, u);
              const f = o.viewQuery,
                D = o.contentQueries;
              if (
                (f && fE(e, f),
                D && hE(e, D),
                uE(e, o),
                Nt(e.outputs, o.outputs),
                ko(o) && o.data.animation)
              ) {
                const M = e.data;
                M.animation = (M.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let s = 0; s < i.length; s++) {
                const u = i[s];
                u && u.ngInherit && u(e), u === uf && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function dE(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = vi(o.hostAttrs, (n = vi(n, o.hostAttrs))));
          }
        })(r);
      }
      function uE(e, t) {
        for (const r in t.inputs) {
          if (!t.inputs.hasOwnProperty(r) || e.inputs.hasOwnProperty(r))
            continue;
          const o = t.inputs[r];
          if (
            void 0 !== o &&
            ((e.inputs[r] = o),
            (e.declaredInputs[r] = t.declaredInputs[r]),
            null !== t.inputTransforms)
          ) {
            var n;
            const i = Array.isArray(o) ? o[0] : o;
            if (!t.inputTransforms.hasOwnProperty(i)) continue;
            (null !== (n = e.inputTransforms) && void 0 !== n) ||
              (e.inputTransforms = {}),
              (e.inputTransforms[i] = t.inputTransforms[i]);
          }
        }
      }
      function Xc(e) {
        return e === Xr ? {} : e === ln ? [] : e;
      }
      function fE(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function hE(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function pE(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function km(e) {
        const t = e.inputConfig,
          n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            const o = t[r];
            Array.isArray(o) && o[3] && (n[r] = o[3]);
          }
        e.inputTransforms = n;
      }
      class gs {}
      class Lm {}
      function CE(e, t) {
        return new df(e, null != t ? t : null, []);
      }
      class df extends gs {
        constructor(t, n, r) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new om(this));
          const o = pr(t);
          (this._bootstrapComponents = To(o.bootstrap)),
            (this._r3Injector = tp(
              t,
              n,
              [
                { provide: gs, useValue: this },
                { provide: Uc, useValue: this.componentFactoryResolver },
                ...r,
              ],
              Zt(t),
              new Set(["environment"])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class ff extends Lm {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new df(this.moduleType, t, []);
        }
      }
      class $m extends gs {
        constructor(t) {
          super(),
            (this.componentFactoryResolver = new om(this)),
            (this.instance = null);
          const n = new xi(
            [
              ...t.providers,
              { provide: gs, useValue: this },
              { provide: Uc, useValue: this.componentFactoryResolver },
            ],
            t.parent || Oi(),
            t.debugName,
            new Set(["environment"])
          );
          (this.injector = n),
            t.runEnvironmentInitializers && n.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function hf(e, t, n = null) {
        return new $m({
          providers: e,
          parent: t,
          debugName: n,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      let Js = (() => {
        var e;
        class t {
          constructor() {
            (this.taskId = 0),
              (this.pendingTasks = new Set()),
              (this.hasPendingTasks = new tn.t(!1));
          }
          get _hasPendingTasks() {
            return this.hasPendingTasks.value;
          }
          add() {
            this._hasPendingTasks || this.hasPendingTasks.next(!0);
            const r = this.taskId++;
            return this.pendingTasks.add(r), r;
          }
          remove(r) {
            this.pendingTasks.delete(r),
              0 === this.pendingTasks.size &&
                this._hasPendingTasks &&
                this.hasPendingTasks.next(!1);
          }
          ngOnDestroy() {
            this.pendingTasks.clear(),
              this._hasPendingTasks && this.hasPendingTasks.next(!1);
          }
        }
        return (
          ((e = t).ɵfac = function (r) {
            return new (r || e)();
          }),
          (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: "root" })),
          t
        );
      })();
      function qc(e) {
        return (
          !!pf(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function pf(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function gr(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function ea(e, t, n, r, o, i, s, u) {
        const f = Xe(),
          D = hn(),
          M = e + Qt,
          N = D.firstCreatePass
            ? (function wE(e, t, n, r, o, i, s, u, f) {
                const D = t.consts,
                  M = qs(t, e, 4, s || null, oi(D, u));
                Od(t, n, M, oi(D, f)), nc(t, M);
                const N = (M.tView = Nd(
                  2,
                  M,
                  r,
                  o,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  D,
                  null
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, M),
                    (N.queries = t.queries.embeddedTView(M))),
                  M
                );
              })(M, D, f, t, n, r, o, i, s)
            : D.data[M];
        ii(N, !1);
        const W = Vm(D, f, N, e);
        $a() && Rc(D, f, W, N), eo(W, f);
        const oe = wg(W, f, W, N);
        return (
          (f[M] = oe),
          xc(f, oe),
          (function um(e, t, n) {
            return Jd(e, t, n);
          })(oe, N, f),
          xa(N) && Td(D, f, N),
          null != s && Rd(f, N, u),
          ea
        );
      }
      let Vm = function Bm(e, t, n, r) {
        return si(!0), t[Ft].createComment("");
      };
      function Ef(e, t, n, r) {
        const o = Xe();
        return gr(o, Wo(), t) && (hn(), ci(Hn(), o, e, t, n, r)), Ef;
      }
      function nu(e, t) {
        return (e << 17) | (t << 2);
      }
      function Xi(e) {
        return (e >> 17) & 32767;
      }
      function Af(e) {
        return 2 | e;
      }
      function ys(e) {
        return (131068 & e) >> 2;
      }
      function Sf(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function wf(e) {
        return 1 | e;
      }
      function vv(e, t, n, r) {
        const o = e[n + 1],
          i = null === t;
        let s = r ? Xi(o) : ys(o),
          u = !1;
        for (; 0 !== s && (!1 === u || i); ) {
          const D = e[s + 1];
          fA(e[s], t) && ((u = !0), (e[s + 1] = r ? wf(D) : Af(D))),
            (s = r ? Xi(D) : ys(D));
        }
        u && (e[n + 1] = r ? Af(o) : wf(o));
      }
      function fA(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && Wr(e, t) >= 0)
        );
      }
      function Mf(e, t, n) {
        const r = Xe();
        return (
          gr(r, Wo(), t) &&
            (function vo(e, t, n, r, o, i, s, u) {
              const f = io(t, n);
              let M,
                D = t.inputs;
              !u && null != D && (M = D[r])
                ? (kd(e, n, M, r, o),
                  $i(t) &&
                    (function _b(e, t) {
                      const n = wo(t, e);
                      16 & n[bt] || (n[bt] |= 64);
                    })(n, t.index))
                : 3 & t.type &&
                  ((r = (function yb(e) {
                    return "class" === e
                      ? "className"
                      : "for" === e
                      ? "htmlFor"
                      : "formaction" === e
                      ? "formAction"
                      : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                      ? "readOnly"
                      : "tabindex" === e
                      ? "tabIndex"
                      : e;
                  })(r)),
                  (o = null != s ? s(o, t.value || "", r) : o),
                  i.setProperty(f, r, o));
            })(hn(), Hn(), r, e, t, r[Ft], n, !1),
          Mf
        );
      }
      function Tf(e, t, n, r, o) {
        const s = o ? "class" : "style";
        kd(e, n, t.inputs[s], s, r);
      }
      function Rf(e, t) {
        return (
          (function Xo(e, t, n, r) {
            const o = Xe(),
              i = hn(),
              s = (function Di(e) {
                const t = Kt.lFrame,
                  n = t.bindingIndex;
                return (t.bindingIndex = t.bindingIndex + e), n;
              })(2);
            i.firstUpdatePass &&
              (function Sv(e, t, n, r) {
                const o = e.data;
                if (null === o[n + 1]) {
                  const i = o[Jr()],
                    s = (function Av(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function Rv(e, t) {
                    return !!(e.flags & (t ? 8 : 16));
                  })(i, r) &&
                    null === t &&
                    !s &&
                    (t = !1),
                    (t = (function DA(e, t, n, r) {
                      const o = (function Fu(e) {
                        const t = Kt.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let i = r ? t.residualClasses : t.residualStyles;
                      if (null === o)
                        0 === (r ? t.classBindings : t.styleBindings) &&
                          ((n = Il((n = Nf(null, e, t, n, r)), t.attrs, r)),
                          (i = null));
                      else {
                        const s = t.directiveStylingLast;
                        if (-1 === s || e[s] !== o)
                          if (((n = Nf(o, e, t, n, r)), null === i)) {
                            let f = (function bA(e, t, n) {
                              const r = n ? t.classBindings : t.styleBindings;
                              if (0 !== ys(r)) return e[Xi(r)];
                            })(e, t, r);
                            void 0 !== f &&
                              Array.isArray(f) &&
                              ((f = Nf(null, e, t, f[1], r)),
                              (f = Il(f, t.attrs, r)),
                              (function IA(e, t, n, r) {
                                e[Xi(n ? t.classBindings : t.styleBindings)] =
                                  r;
                              })(e, t, r, f));
                          } else
                            i = (function EA(e, t, n) {
                              let r;
                              const o = t.directiveEnd;
                              for (
                                let i = 1 + t.directiveStylingLast;
                                i < o;
                                i++
                              )
                                r = Il(r, e[i].hostAttrs, n);
                              return Il(r, t.attrs, n);
                            })(e, t, r);
                      }
                      return (
                        void 0 !== i &&
                          (r
                            ? (t.residualClasses = i)
                            : (t.residualStyles = i)),
                        n
                      );
                    })(o, i, t, r)),
                    (function uA(e, t, n, r, o, i) {
                      let s = i ? t.classBindings : t.styleBindings,
                        u = Xi(s),
                        f = ys(s);
                      e[r] = n;
                      let M,
                        D = !1;
                      if (
                        (Array.isArray(n)
                          ? ((M = n[1]),
                            (null === M || Wr(n, M) > 0) && (D = !0))
                          : (M = n),
                        o)
                      )
                        if (0 !== f) {
                          const W = Xi(e[u + 1]);
                          (e[r + 1] = nu(W, u)),
                            0 !== W && (e[W + 1] = Sf(e[W + 1], r)),
                            (e[u + 1] = (function lA(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[u + 1], r));
                        } else
                          (e[r + 1] = nu(u, 0)),
                            0 !== u && (e[u + 1] = Sf(e[u + 1], r)),
                            (u = r);
                      else
                        (e[r + 1] = nu(f, 0)),
                          0 === u ? (u = r) : (e[f + 1] = Sf(e[f + 1], r)),
                          (f = r);
                      D && (e[r + 1] = Af(e[r + 1])),
                        vv(e, M, r, !0),
                        vv(e, M, r, !1),
                        (function dA(e, t, n, r, o) {
                          const i = o ? e.residualClasses : e.residualStyles;
                          null != i &&
                            "string" == typeof t &&
                            Wr(i, t) >= 0 &&
                            (n[r + 1] = wf(n[r + 1]));
                        })(t, M, e, r, i),
                        (s = nu(u, f)),
                        i ? (t.classBindings = s) : (t.styleBindings = s);
                    })(o, i, t, n, s, r);
                }
              })(i, e, s, r),
              t !== en &&
                gr(o, s, t) &&
                (function Mv(e, t, n, r, o, i, s, u) {
                  if (!(3 & t.type)) return;
                  const f = e.data,
                    D = f[u + 1],
                    M = (function cA(e) {
                      return !(1 & ~e);
                    })(D)
                      ? Tv(f, t, n, o, ys(D), s)
                      : void 0;
                  ru(M) ||
                    (ru(i) ||
                      ((function aA(e) {
                        return !(2 & ~e);
                      })(D) &&
                        (i = Tv(f, null, n, o, u, s))),
                    (function sb(e, t, n, r, o) {
                      if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
                      else {
                        let i = -1 === r.indexOf("-") ? void 0 : Sc.DashCase;
                        null == o
                          ? e.removeStyle(n, r, i)
                          : ("string" == typeof o &&
                              o.endsWith("!important") &&
                              ((o = o.slice(0, -10)), (i |= Sc.Important)),
                            e.setStyle(n, r, o, i));
                      }
                    })(
                      r,
                      s,
                      (function Pa(e, t) {
                        return Pn(t[e]);
                      })(Jr(), n),
                      o,
                      i
                    ));
                })(
                  i,
                  i.data[Jr()],
                  o,
                  o[Ft],
                  e,
                  (o[s + 1] = (function MA(e, t) {
                    return (
                      null == e ||
                        "" === e ||
                        ("string" == typeof t
                          ? (e += t)
                          : "object" == typeof e && (e = Zt(ji(e)))),
                      e
                    );
                  })(t, n)),
                  r,
                  s
                );
          })(e, t, null, !0),
          Rf
        );
      }
      function Nf(e, t, n, r, o) {
        let i = null;
        const s = n.directiveEnd;
        let u = n.directiveStylingLast;
        for (
          -1 === u ? (u = n.directiveStart) : u++;
          u < s && ((i = t[u]), (r = Il(r, i.hostAttrs, o)), i !== e);

        )
          u++;
        return null !== e && (n.directiveStylingLast = u), r;
      }
      function Il(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            "number" == typeof s
              ? (o = s)
              : o === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                _r(e, s, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function Tv(e, t, n, r, o, i) {
        const s = null === t;
        let u;
        for (; o > 0; ) {
          const f = e[o],
            D = Array.isArray(f),
            M = D ? f[1] : f,
            N = null === M;
          let W = n[o + 1];
          W === en && (W = N ? ln : void 0);
          let oe = N ? Si(W, r) : M === r ? W : void 0;
          if ((D && !ru(oe) && (oe = Si(f, r)), ru(oe) && ((u = oe), s)))
            return u;
          const ye = e[o + 1];
          o = s ? Xi(ye) : ys(ye);
        }
        if (null !== t) {
          let f = i ? t.residualClasses : t.residualStyles;
          null != f && (u = Si(f, r));
        }
        return u;
      }
      function ru(e) {
        return void 0 !== e;
      }
      function ou(e, t, n, r) {
        const o = Xe(),
          i = hn(),
          s = Qt + e,
          u = o[Ft],
          f = i.firstCreatePass
            ? (function YA(e, t, n, r, o, i) {
                const s = t.consts,
                  f = qs(t, e, 2, r, oi(s, o));
                return (
                  Od(t, n, f, oi(s, i)),
                  null !== f.attrs && Hc(f, f.attrs, !1),
                  null !== f.mergedAttrs && Hc(f, f.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, f),
                  f
                );
              })(s, i, o, t, n, r)
            : i.data[s],
          D = Pv(i, o, f, u, t, e);
        o[s] = D;
        const M = xa(f);
        return (
          ii(f, !0),
          mg(u, D, f),
          !(function _l(e) {
            return !(32 & ~e.flags);
          })(f) &&
            $a() &&
            Rc(i, o, D, f),
          0 ===
            (function $_() {
              return Kt.lFrame.elementDepthCount;
            })() && eo(D, o),
          (function V_() {
            Kt.lFrame.elementDepthCount++;
          })(),
          M && (Td(i, o, f), Md(i, f, o)),
          null !== r && Rd(o, f),
          ou
        );
      }
      function iu() {
        let e = xn();
        Ou() ? xu() : ((e = e.parent), ii(e, !1));
        const t = e;
        (function U_(e) {
          return Kt.skipHydrationRootTNode === e;
        })(t) &&
          (function G_() {
            Kt.skipHydrationRootTNode = null;
          })(),
          (function B_() {
            Kt.lFrame.elementDepthCount--;
          })();
        const n = hn();
        return (
          n.firstCreatePass && (nc(n, e), ql(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function sC(e) {
              return !!(8 & e.flags);
            })(t) &&
            Tf(n, t, Xe(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function aC(e) {
              return !!(16 & e.flags);
            })(t) &&
            Tf(n, t, Xe(), t.stylesWithoutHost, !1),
          iu
        );
      }
      function kf(e, t, n, r) {
        return ou(e, t, n, r), iu(), kf;
      }
      let Pv = (e, t, n, r, o, i) => (
        si(!0),
        wc(
          r,
          o,
          (function Fh() {
            return Kt.lFrame.currentNamespace;
          })()
        )
      );
      function su(e, t, n) {
        const r = Xe(),
          o = hn(),
          i = e + Qt,
          s = o.firstCreatePass
            ? (function eS(e, t, n, r, o) {
                const i = t.consts,
                  s = oi(i, r),
                  u = qs(t, e, 8, "ng-container", s);
                return (
                  null !== s && Hc(u, s, !0),
                  Od(t, n, u, oi(i, o)),
                  null !== t.queries && t.queries.elementStart(t, u),
                  u
                );
              })(i, o, r, t, n)
            : o.data[i];
        ii(s, !0);
        const u = Fv(o, r, s, e);
        return (
          (r[i] = u),
          $a() && Rc(o, r, u, s),
          eo(u, r),
          xa(s) && (Td(o, r, s), Md(o, s, r)),
          null != n && Rd(r, s),
          su
        );
      }
      function au() {
        let e = xn();
        const t = hn();
        return (
          Ou() ? xu() : ((e = e.parent), ii(e, !1)),
          t.firstCreatePass && (nc(t, e), ql(e) && t.queries.elementEnd(e)),
          au
        );
      }
      function Lf(e, t, n) {
        return su(e, t, n), au(), Lf;
      }
      let Fv = (e, t, n, r) => (si(!0), Dd(t[Ft], ""));
      function kv() {
        return Xe();
      }
      const _s = void 0;
      var oS = [
        "en",
        [["a", "p"], ["AM", "PM"], _s],
        [["AM", "PM"], _s, _s],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        _s,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        _s,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", _s, "{1} 'at' {0}", _s],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function rS(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let va = {};
      function $f(e) {
        const t = (function iS(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = Bv(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = Bv(r)), n)) return n;
        if ("en" === r) return oS;
        throw new le(701, !1);
      }
      function Vv(e) {
        return $f(e)[ya.PluralCase];
      }
      function Bv(e) {
        return (
          e in va ||
            (va[e] =
              Et.ng &&
              Et.ng.common &&
              Et.ng.common.locales &&
              Et.ng.common.locales[e]),
          va[e]
        );
      }
      var ya = (function (e) {
        return (
          (e[(e.LocaleId = 0)] = "LocaleId"),
          (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
          (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
          (e[(e.DaysFormat = 3)] = "DaysFormat"),
          (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
          (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
          (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
          (e[(e.Eras = 7)] = "Eras"),
          (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
          (e[(e.WeekendRange = 9)] = "WeekendRange"),
          (e[(e.DateFormat = 10)] = "DateFormat"),
          (e[(e.TimeFormat = 11)] = "TimeFormat"),
          (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
          (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
          (e[(e.NumberFormats = 14)] = "NumberFormats"),
          (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
          (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
          (e[(e.CurrencyName = 17)] = "CurrencyName"),
          (e[(e.Currencies = 18)] = "Currencies"),
          (e[(e.Directionality = 19)] = "Directionality"),
          (e[(e.PluralCase = 20)] = "PluralCase"),
          (e[(e.ExtraData = 21)] = "ExtraData"),
          e
        );
      })(ya || {});
      const _a = "en-US";
      let Uv = _a;
      function Uf(e, t, n, r) {
        const o = Xe(),
          i = hn(),
          s = xn();
        return (
          (function jf(e, t, n, r, o, i, s) {
            const u = xa(r),
              D = e.firstCreatePass && Rg(e),
              M = t[fn],
              N = Tg(t);
            let W = !0;
            if (3 & r.type || s) {
              const ze = io(r, t),
                nt = s ? s(ze) : ze,
                it = N.length,
                Ke = s ? (rn) => s(Pn(rn[r.index])) : r.index;
              let Vt = null;
              if (
                (!s &&
                  u &&
                  (Vt = (function tw(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const s = o[i];
                        if (s === n && o[i + 1] === r) {
                          const u = t[Fo],
                            f = o[i + 2];
                          return u.length > f ? u[f] : null;
                        }
                        "string" == typeof s && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== Vt)
              )
                ((Vt.__ngLastListenerFn__ || Vt).__ngNextListenerFn__ = i),
                  (Vt.__ngLastListenerFn__ = i),
                  (W = !1);
              else {
                i = gy(r, t, M, i, !1);
                const rn = n.listen(nt, o, i);
                N.push(i, rn), D && D.push(o, Ke, it, it + 1);
              }
            } else i = gy(r, t, M, i, !1);
            const oe = r.outputs;
            let ye;
            if (W && null !== oe && (ye = oe[o])) {
              const ze = ye.length;
              if (ze)
                for (let nt = 0; nt < ze; nt += 2) {
                  const bn = t[ye[nt]][ye[nt + 1]].subscribe(i),
                    Hr = N.length;
                  N.push(i, bn), D && D.push(o, r.index, Hr, -(Hr + 1));
                }
            }
          })(i, o, o[Ft], s, e, t, r),
          Uf
        );
      }
      function py(e, t, n, r) {
        const o = X(null);
        try {
          return Zr(6, t, n), !1 !== n(r);
        } catch (i) {
          return Pc(e, i), !1;
        } finally {
          Zr(7, t, n), X(o);
        }
      }
      function gy(e, t, n, r, o) {
        return function i(s) {
          if (s === Function) return r;
          sl(e.componentOffset > -1 ? wo(e.index, t) : t);
          let f = py(t, n, r, s),
            D = i.__ngNextListenerFn__;
          for (; D; ) (f = py(t, n, D, s) && f), (D = D.__ngNextListenerFn__);
          return o && !1 === f && s.preventDefault(), f;
        };
      }
      function my(e = 1) {
        return (function Y_(e) {
          return (Kt.lFrame.contextLView = (function Dh(e, t) {
            for (; e > 0; ) (t = t[Fi]), e--;
            return t;
          })(e, Kt.lFrame.contextLView))[fn];
        })(e);
      }
      function nw(e, t) {
        let n = null;
        const r = (function rt(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (!(1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let o = 0; o < t.length; o++) {
          const i = t[o];
          if ("*" !== i) {
            if (null === r ? H(e, i, !0) : Ur(r, i)) return o;
          } else n = o;
        }
        return n;
      }
      function vy(e) {
        const t = Xe()[Jn][$n];
        if (!t.projection) {
          const r = (t.projection = (function ho(e, t) {
              const n = [];
              for (let r = 0; r < e; r++) n.push(t);
              return n;
            })(e ? e.length : 1, null)),
            o = r.slice();
          let i = t.child;
          for (; null !== i; ) {
            const s = e ? nw(i, e) : 0;
            null !== s &&
              (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i)),
              (i = i.next);
          }
        }
      }
      function yy(e, t = 0, n) {
        const r = Xe(),
          o = hn(),
          i = qs(o, Qt + e, 16, null, n || null);
        null === i.projection && (i.projection = t),
          xu(),
          (!r[ar] || Fs()) &&
            32 & ~i.flags &&
            (function ob(e, t, n) {
              pg(t[Ft], 0, t, n, Id(e, n, t), lg(n.parent || t[$n], n, t));
            })(o, r, i);
      }
      function My(e, t, n, r) {
        !(function mm(e, t, n, r) {
          const o = hn();
          if (o.firstCreatePass) {
            const i = xn();
            vm(o, new fm(t, n, r), i.index),
              (function JI(e, t) {
                const n = e.contentQueries || (e.contentQueries = []);
                t !== (n.length ? n[n.length - 1] : -1) &&
                  n.push(e.queries.length - 1, t);
              })(o, e),
              !(2 & ~n) && (o.staticContentQueries = !0);
          }
          return pm(o, Xe(), n);
        })(e, t, n, r);
      }
      function Ty(e, t, n) {
        !(function gm(e, t, n) {
          const r = hn();
          return (
            r.firstCreatePass &&
              (vm(r, new fm(e, t, n), -1),
              !(2 & ~t) && (r.staticViewQueries = !0)),
            pm(r, Xe(), t)
          );
        })(e, t, n);
      }
      function Ry(e) {
        const t = Xe(),
          n = hn(),
          r = ku();
        tc(r + 1);
        const o = lf(n, r);
        if (
          e.dirty &&
          (function F_(e) {
            return !(4 & ~e[bt]);
          })(t) === !(2 & ~o.metadata.flags)
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const i = ym(t, r);
            e.reset(i, ip), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Ny() {
        return (function af(e, t) {
          return e[go].queries[t].queryList;
        })(Xe(), ku());
      }
      function Uy(e, t = "") {
        const n = Xe(),
          r = hn(),
          o = e + Qt,
          i = r.firstCreatePass ? qs(r, o, 1, t, null) : r.data[o],
          s = jy(r, n, i, t, e);
        (n[o] = s), $a() && Rc(r, n, s, i), ii(i, !1);
      }
      let jy = (e, t, n, r, o) => (
        si(!0),
        (function Cd(e, t) {
          return e.createText(t);
        })(t[Ft], r)
      );
      function Gf(e, t, n, r, o) {
        if (((e = pe(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Gf(e[i], t, n, r, o);
        else {
          const i = hn(),
            s = Xe(),
            u = xn();
          let f = Uo(e) ? e : pe(e.provide);
          const D = Ra(e),
            M = 1048575 & u.providerIndexes,
            N = u.directiveStart,
            W = u.providerIndexes >> 20;
          if (Uo(e) || !e.multi) {
            const oe = new Va(D, o, Ks),
              ye = Xf(f, t, o ? M : M + W, N);
            -1 === ye
              ? (zu(sc(u, s), i, f),
                Wf(i, e, t.length),
                t.push(f),
                u.directiveStart++,
                u.directiveEnd++,
                o && (u.providerIndexes += 1048576),
                n.push(oe),
                s.push(oe))
              : ((n[ye] = oe), (s[ye] = oe));
          } else {
            const oe = Xf(f, t, M + W, N),
              ye = Xf(f, t, M, M + W),
              nt = ye >= 0 && n[ye];
            if ((o && !nt) || (!o && !(oe >= 0 && n[oe]))) {
              zu(sc(u, s), i, f);
              const it = (function Iw(e, t, n, r, o) {
                const i = new Va(e, n, Ks);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  e0(i, o, r && !n),
                  i
                );
              })(o ? bw : Dw, n.length, o, r, D);
              !o && nt && (n[ye].providerFactory = it),
                Wf(i, e, t.length, 0),
                t.push(f),
                u.directiveStart++,
                u.directiveEnd++,
                o && (u.providerIndexes += 1048576),
                n.push(it),
                s.push(it);
            } else Wf(i, e, oe > -1 ? oe : ye, e0(n[o ? ye : oe], D, !o && r));
            !o && r && nt && n[ye].componentProviders++;
          }
        }
      }
      function Wf(e, t, n, r) {
        const o = Uo(t),
          i = (function Ma(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const f = (i ? pe(t.useClass) : t).prototype.ngOnDestroy;
          if (f) {
            const D = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const M = D.indexOf(n);
              -1 === M ? D.push(n, [r, f]) : D[M + 1].push(r, f);
            } else D.push(n, f);
          }
        }
      }
      function e0(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Xf(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function Dw(e, t, n, r) {
        return Kf(this.multi, []);
      }
      function bw(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            u = fs(n, n[ot], this.providerFactory.index, r);
          (i = u.slice(0, s)), Kf(o, i);
          for (let f = s; f < u.length; f++) i.push(u[f]);
        } else (i = []), Kf(o, i);
        return i;
      }
      function Kf(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function t0(e, t = []) {
        return (n) => {
          n.providersResolver = (r, o) =>
            (function Cw(e, t, n) {
              const r = hn();
              if (r.firstCreatePass) {
                const o = ko(e);
                Gf(n, r.data, r.blueprint, o, !0),
                  Gf(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      let Ew = (() => {
        var e;
        class t {
          constructor(r) {
            (this._injector = r), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(r) {
            if (!r.standalone) return null;
            if (!this.cachedInjectors.has(r)) {
              const o = ti(0, r.type),
                i =
                  o.length > 0
                    ? hf([o], this._injector, `Standalone[${r.type.name}]`)
                    : null;
              this.cachedInjectors.set(r, i);
            }
            return this.cachedInjectors.get(r);
          }
          ngOnDestroy() {
            try {
              for (const r of this.cachedInjectors.values())
                null !== r && r.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          ((e = t).ɵprov = Ht({
            token: e,
            providedIn: "environment",
            factory: () => new e(tt(Qr)),
          })),
          t
        );
      })();
      function n0(e) {
        (function ui(e) {
          var t, n;
          Kg.has(e) ||
            (Kg.add(e),
            null === (t = performance) ||
              void 0 === t ||
              null === (n = t.mark) ||
              void 0 === n ||
              n.call(t, "mark_feature_usage", { detail: { feature: e } }));
        })("NgStandalone"),
          (e.getStandaloneInjector = (t) =>
            t.get(Ew).getOrCreateStandaloneInjector(e));
      }
      class A0 {
        constructor(t) {
          this.full = t;
          const n = t.split(".");
          (this.major = n[0]),
            (this.minor = n[1]),
            (this.patch = n.slice(2).join("."));
        }
      }
      let S0 = (() => {
        var e;
        class t {
          log(r) {
            console.log(r);
          }
          warn(r) {
            console.warn(r);
          }
        }
        return (
          ((e = t).ɵfac = function (r) {
            return new (r || e)();
          }),
          (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          t
        );
      })();
      const R0 = new yt(""),
        N0 = new yt("");
      let th,
        LM = (() => {
          var e;
          class t {
            constructor(r, o, i) {
              (this._ngZone = r),
                (this.registry = o),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                th ||
                  ((function $M(e) {
                    th = e;
                  })(i),
                  i.addToWindow(o)),
                this._watchAngularEvents(),
                r.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  this._isZoneStable = !1;
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Cr.assertNotInAngularZone(),
                        queueMicrotask(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                queueMicrotask(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let r = this._callbacks.pop();
                    clearTimeout(r.timeoutId), r.doneCb();
                  }
                });
              else {
                let r = this.getPendingTasks();
                this._callbacks = this._callbacks.filter(
                  (o) =>
                    !o.updateCb ||
                    !o.updateCb(r) ||
                    (clearTimeout(o.timeoutId), !1)
                );
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((r) => ({
                    source: r.source,
                    creationLocation: r.creationLocation,
                    data: r.data,
                  }))
                : [];
            }
            addCallback(r, o, i) {
              let s = -1;
              o &&
                o > 0 &&
                (s = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (u) => u.timeoutId !== s
                  )),
                    r();
                }, o)),
                this._callbacks.push({ doneCb: r, timeoutId: s, updateCb: i });
            }
            whenStable(r, o, i) {
              if (i && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(r, o, i), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(r) {
              this.registry.registerApplication(r, this);
            }
            unregisterApplication(r) {
              this.registry.unregisterApplication(r);
            }
            findProviders(r, o, i) {
              return [];
            }
          }
          return (
            ((e = t).ɵfac = function (r) {
              return new (r || e)(tt(Cr), tt(O0), tt(N0));
            }),
            (e.ɵprov = Ht({ token: e, factory: e.ɵfac })),
            t
          );
        })(),
        O0 = (() => {
          var e;
          class t {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(r, o) {
              this._applications.set(r, o);
            }
            unregisterApplication(r) {
              this._applications.delete(r);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(r) {
              return this._applications.get(r) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(r, o = !0) {
              var i, s;
              return null !==
                (i =
                  null === (s = th) || void 0 === s
                    ? void 0
                    : s.findTestabilityInTree(this, r, o)) && void 0 !== i
                ? i
                : null;
            }
          }
          return (
            ((e = t).ɵfac = function (r) {
              return new (r || e)();
            }),
            (e.ɵprov = Ht({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            })),
            t
          );
        })();
      function nh(e) {
        return !!e && "function" == typeof e.then;
      }
      function x0(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const P0 = new yt("");
      let rh = (() => {
        var e;
        class t {
          constructor() {
            var r;
            (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((o, i) => {
                (this.resolve = o), (this.reject = i);
              })),
              (this.appInits =
                null !== (r = Ze(P0, { optional: !0 })) && void 0 !== r
                  ? r
                  : []);
          }
          runInitializers() {
            if (this.initialized) return;
            const r = [];
            for (const i of this.appInits) {
              const s = i();
              if (nh(s)) r.push(s);
              else if (x0(s)) {
                const u = new Promise((f, D) => {
                  s.subscribe({ complete: f, error: D });
                });
                r.push(u);
              }
            }
            const o = () => {
              (this.done = !0), this.resolve();
            };
            Promise.all(r)
              .then(() => {
                o();
              })
              .catch((i) => {
                this.reject(i);
              }),
              0 === r.length && o(),
              (this.initialized = !0);
          }
        }
        return (
          ((e = t).ɵfac = function (r) {
            return new (r || e)();
          }),
          (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: "root" })),
          t
        );
      })();
      const oh = new yt("");
      let Ki = (() => {
        var e;
        class t {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = Ze(rp)),
              (this.afterRenderEffectManager = Ze(hl)),
              (this.externalTestViews = new Set()),
              (this.beforeRender = new Ot.B()),
              (this.afterTick = new Ot.B()),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = Ze(Js).hasPendingTasks.pipe(
                (0, an.T)((r) => !r)
              )),
              (this._injector = Ze(Qr));
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(r, o) {
            const i = r instanceof Gg;
            if (!this._injector.get(rh).done)
              throw (!i && Fr(r), new le(405, !1));
            let u;
            (u = i ? r : this._injector.get(Uc).resolveComponentFactory(r)),
              this.componentTypes.push(u.componentType);
            const f = (function VM(e) {
                return e.isBoundToModule;
              })(u)
                ? void 0
                : this._injector.get(gs),
              M = u.create(Mo.NULL, [], o || u.selector, f),
              N = M.location.nativeElement,
              W = M.injector.get(R0, null);
            return (
              null == W || W.registerApplication(N),
              M.onDestroy(() => {
                this.detachView(M.hostView),
                  gu(this.components, M),
                  null == W || W.unregisterApplication(N);
              }),
              this._loadComponent(M),
              M
            );
          }
          tick() {
            this._tick(!0);
          }
          _tick(r) {
            if (this._runningTick) throw new le(101, !1);
            const o = X(null);
            try {
              (this._runningTick = !0), this.detectChangesInAttachedViews(r);
            } catch (i) {
              this.internalErrorHandler(i);
            } finally {
              this.afterTick.next(), (this._runningTick = !1), X(o);
            }
          }
          detectChangesInAttachedViews(r) {
            let o = 0;
            const i = this.afterRenderEffectManager;
            for (;;) {
              if (o === Fg) throw new le(103, !1);
              if (r) {
                const s = 0 === o;
                this.beforeRender.next(s);
                for (let { _lView: u, notifyErrorHandler: f } of this._views)
                  UM(u, s, f);
              }
              if (
                (o++,
                i.executeInternalCallbacks(),
                ![...this.externalTestViews.keys(), ...this._views].some(
                  ({ _lView: s }) => ih(s)
                ) &&
                  (i.execute(),
                  ![...this.externalTestViews.keys(), ...this._views].some(
                    ({ _lView: s }) => ih(s)
                  )))
              )
                break;
            }
          }
          attachView(r) {
            const o = r;
            this._views.push(o), o.attachToAppRef(this);
          }
          detachView(r) {
            const o = r;
            gu(this._views, o), o.detachFromAppRef();
          }
          _loadComponent(r) {
            this.attachView(r.hostView), this.tick(), this.components.push(r);
            const o = this._injector.get(oh, []);
            [...this._bootstrapListeners, ...o].forEach((i) => i(r));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach((r) => r()),
                  this._views.slice().forEach((r) => r.destroy());
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(r) {
            return (
              this._destroyListeners.push(r),
              () => gu(this._destroyListeners, r)
            );
          }
          destroy() {
            if (this._destroyed) throw new le(406, !1);
            const r = this._injector;
            r.destroy && !r.destroyed && r.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          ((e = t).ɵfac = function (r) {
            return new (r || e)();
          }),
          (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: "root" })),
          t
        );
      })();
      function gu(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function UM(e, t, n) {
        (!t && !ih(e)) ||
          (function jM(e, t, n) {
            let r;
            n ? ((r = 0), (e[bt] |= 1024)) : (r = 64 & e[bt] ? 0 : 1),
              Fc(e, t, r);
          })(e, n, t);
      }
      function ih(e) {
        return Tu(e);
      }
      class HM {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let zM = (() => {
          var e;
          class t {
            compileModuleSync(r) {
              return new ff(r);
            }
            compileModuleAsync(r) {
              return Promise.resolve(this.compileModuleSync(r));
            }
            compileModuleAndAllComponentsSync(r) {
              const o = this.compileModuleSync(r),
                s = To(pr(r).declarations).reduce((u, f) => {
                  const D = nn(f);
                  return D && u.push(new ml(D)), u;
                }, []);
              return new HM(o, s);
            }
            compileModuleAndAllComponentsAsync(r) {
              return Promise.resolve(this.compileModuleAndAllComponentsSync(r));
            }
            clearCache() {}
            clearCacheFor(r) {}
            getModuleId(r) {}
          }
          return (
            ((e = t).ɵfac = function (r) {
              return new (r || e)();
            }),
            (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: "root" })),
            t
          );
        })(),
        XM = (() => {
          var e;
          class t {
            constructor() {
              (this.zone = Ze(Cr)), (this.applicationRef = Ze(Ki));
            }
            initialize() {
              this._onMicrotaskEmptySubscription ||
                (this._onMicrotaskEmptySubscription =
                  this.zone.onMicrotaskEmpty.subscribe({
                    next: () => {
                      this.zone.run(() => {
                        this.applicationRef.tick();
                      });
                    },
                  }));
            }
            ngOnDestroy() {
              var r;
              null === (r = this._onMicrotaskEmptySubscription) ||
                void 0 === r ||
                r.unsubscribe();
            }
          }
          return (
            ((e = t).ɵfac = function (r) {
              return new (r || e)();
            }),
            (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: "root" })),
            t
          );
        })();
      function V0(e) {
        return [
          { provide: Cr, useFactory: e },
          {
            provide: Oo,
            multi: !0,
            useFactory: () => {
              const t = Ze(XM, { optional: !0 });
              return () => t.initialize();
            },
          },
          {
            provide: Oo,
            multi: !0,
            useFactory: () => {
              const t = Ze(QM);
              return () => {
                t.initialize();
              };
            },
          },
          { provide: rp, useFactory: KM },
        ];
      }
      function KM() {
        const e = Ze(Cr),
          t = Ze(bi);
        return (n) => e.runOutsideAngular(() => t.handleError(n));
      }
      function qM(e) {
        return ei([
          [],
          V0(
            () =>
              new Cr(
                (function B0(e) {
                  var t, n;
                  return {
                    enableLongStackTrace: !1,
                    shouldCoalesceEventChangeDetection:
                      null !== (t = null == e ? void 0 : e.eventCoalescing) &&
                      void 0 !== t &&
                      t,
                    shouldCoalesceRunChangeDetection:
                      null !== (n = null == e ? void 0 : e.runCoalescing) &&
                      void 0 !== n &&
                      n,
                  };
                })(e)
              )
          ),
        ]);
      }
      let QM = (() => {
        var e;
        class t {
          constructor() {
            (this.subscription = new Yt.yU()),
              (this.initialized = !1),
              (this.zone = Ze(Cr)),
              (this.pendingTasks = Ze(Js));
          }
          initialize() {
            if (this.initialized) return;
            this.initialized = !0;
            let r = null;
            !this.zone.isStable &&
              !this.zone.hasPendingMacrotasks &&
              !this.zone.hasPendingMicrotasks &&
              (r = this.pendingTasks.add()),
              this.zone.runOutsideAngular(() => {
                this.subscription.add(
                  this.zone.onStable.subscribe(() => {
                    Cr.assertNotInAngularZone(),
                      queueMicrotask(() => {
                        null !== r &&
                          !this.zone.hasPendingMacrotasks &&
                          !this.zone.hasPendingMicrotasks &&
                          (this.pendingTasks.remove(r), (r = null));
                      });
                  })
                );
              }),
              this.subscription.add(
                this.zone.onUnstable.subscribe(() => {
                  var o;
                  Cr.assertInAngularZone(),
                    (null !== (o = r) && void 0 !== o) ||
                      (r = this.pendingTasks.add());
                })
              );
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }
        return (
          ((e = t).ɵfac = function (r) {
            return new (r || e)();
          }),
          (e.ɵprov = Ht({ token: e, factory: e.ɵfac, providedIn: "root" })),
          t
        );
      })();
      const mu = new yt("", {
          providedIn: "root",
          factory: () =>
            Ze(mu, zt.Optional | zt.SkipSelf) ||
            (function YM() {
              return (typeof $localize < "u" && $localize.locale) || _a;
            })(),
        }),
        ZM = new yt("", { providedIn: "root", factory: () => "USD" }),
        sh = new yt("");
      let qi = null;
      function rT() {}
      let W0 = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = oT), t;
      })();
      function oT(e) {
        return (function iT(e, t, n) {
          if ($i(e) && !n) {
            const r = wo(e.index, t);
            return new al(r, r);
          }
          return 47 & e.type ? new al(t[Jn], t) : null;
        })(xn(), Xe(), !(16 & ~e));
      }
      class Q0 {
        constructor() {}
        supports(t) {
          return qc(t);
        }
        create(t) {
          return new uT(t);
        }
      }
      const cT = (e, t) => t;
      class uT {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || cT);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; n || r; ) {
            const s = !r || (n && n.currentIndex < Z0(r, o, i)) ? n : r,
              u = Z0(s, o, i),
              f = s.currentIndex;
            if (s === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == s.previousIndex)) o++;
            else {
              i || (i = []);
              const D = u - o,
                M = f - o;
              if (D != M) {
                for (let W = 0; W < D; W++) {
                  const oe = W < i.length ? i[W] : (i[W] = 0),
                    ye = oe + W;
                  M <= ye && ye < D && (i[W] = oe + 1);
                }
                i[s.previousIndex] = M - D;
              }
            }
            u !== f && t(s, u, f);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !qc(t))) throw new le(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            i,
            s,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let u = 0; u < this.length; u++)
              (i = t[u]),
                (s = this._trackByFn(u, i)),
                null !== n && Object.is(n.trackById, s)
                  ? (r && (n = this._verifyReinsertion(n, i, s, u)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, s, u)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function AE(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Symbol.iterator]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (u) => {
                (s = this._trackByFn(o, u)),
                  null !== n && Object.is(n.trackById, s)
                    ? (r && (n = this._verifyReinsertion(n, u, s, o)),
                      Object.is(n.item, u) || this._addIdentityChange(n, u))
                    : ((n = this._mismatch(n, u, s, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new dT(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Y0()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Y0()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class dT {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class fT {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class Y0 {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new fT()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Z0(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class J0 {
        constructor() {}
        supports(t) {
          return t instanceof Map || pf(t);
        }
        create() {
          return new hT();
        }
      }
      class hT {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || pf(t))) throw new le(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, o) => {
              if (n && n.key === o)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const i = o._prev,
              s = o._next;
            return (
              i && (i._next = s),
              s && (s._prev = i),
              (o._next = null),
              (o._prev = null),
              o
            );
          }
          const r = new pT(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class pT {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function e_() {
        return new fh([new Q0()]);
      }
      let fh = (() => {
        var e;
        class t {
          constructor(r) {
            this.factories = r;
          }
          static create(r, o) {
            if (null != o) {
              const i = o.factories.slice();
              r = r.concat(i);
            }
            return new t(r);
          }
          static extend(r) {
            return {
              provide: t,
              useFactory: (o) => t.create(r, o || e_()),
              deps: [[t, new Qi(), new Co()]],
            };
          }
          find(r) {
            const o = this.factories.find((i) => i.supports(r));
            if (null != o) return o;
            throw new le(901, !1);
          }
        }
        return (
          ((e = t).ɵprov = Ht({ token: e, providedIn: "root", factory: e_ })), t
        );
      })();
      function t_() {
        return new hh([new J0()]);
      }
      let hh = (() => {
        var e;
        class t {
          constructor(r) {
            this.factories = r;
          }
          static create(r, o) {
            if (o) {
              const i = o.factories.slice();
              r = r.concat(i);
            }
            return new t(r);
          }
          static extend(r) {
            return {
              provide: t,
              useFactory: (o) => t.create(r, o || t_()),
              deps: [[t, new Qi(), new Co()]],
            };
          }
          find(r) {
            const o = this.factories.find((i) => i.supports(r));
            if (o) return o;
            throw new le(901, !1);
          }
        }
        return (
          ((e = t).ɵprov = Ht({ token: e, providedIn: "root", factory: t_ })), t
        );
      })();
      function NT(e) {
        try {
          const { rootComponent: t, appProviders: n, platformProviders: r } = e,
            o = (function nT(e = []) {
              if (qi) return qi;
              const t = (function H0(e = [], t) {
                return Mo.create({
                  name: t,
                  providers: [
                    { provide: os, useValue: "platform" },
                    { provide: sh, useValue: new Set([() => (qi = null)]) },
                    ...e,
                  ],
                });
              })(e);
              return (
                (qi = t),
                (function F0() {
                  !(function je(e) {
                    vt = e;
                  })(() => {
                    throw new le(600, !1);
                  });
                })(),
                (function z0(e) {
                  const t = e.get(Sp, null);
                  null == t || t.forEach((n) => n());
                })(t),
                t
              );
            })(r),
            i = [qM(), ...(n || [])],
            u = new $m({
              providers: i,
              parent: o,
              debugName: "",
              runEnvironmentInitializers: !1,
            }).injector,
            f = u.get(Cr);
          return f.run(() => {
            u.resolveInjectorInitializers();
            const D = u.get(bi, null);
            let M;
            f.runOutsideAngular(() => {
              M = f.onError.subscribe({
                next: (oe) => {
                  D.handleError(oe);
                },
              });
            });
            const N = () => u.destroy(),
              W = o.get(sh);
            return (
              W.add(N),
              u.onDestroy(() => {
                M.unsubscribe(), W.delete(N);
              }),
              (function k0(e, t, n) {
                try {
                  const r = n();
                  return nh(r)
                    ? r.catch((o) => {
                        throw (t.runOutsideAngular(() => e.handleError(o)), o);
                      })
                    : r;
                } catch (r) {
                  throw (t.runOutsideAngular(() => e.handleError(r)), r);
                }
              })(D, f, () => {
                const oe = u.get(rh);
                return (
                  oe.runInitializers(),
                  oe.donePromise.then(() => {
                    !(function jv(e) {
                      "string" == typeof e &&
                        (Uv = e.toLowerCase().replace(/_/g, "-"));
                    })(u.get(mu, _a) || _a);
                    const ze = u.get(Ki);
                    return void 0 !== t && ze.bootstrap(t), ze;
                  })
                );
              })
            );
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }
      function WT(e) {
        return "boolean" == typeof e ? e : null != e && "false" !== e;
      }
      function KT(e) {
        const t = X(null);
        try {
          return e();
        } finally {
          X(t);
        }
      }
      function eR(e, t) {
        const n = nn(e),
          r = t.elementInjector || Oi();
        return new ml(n).create(
          r,
          t.projectableNodes,
          t.hostElement,
          t.environmentInjector
        );
      }
      function tR(e) {
        const t = nn(e);
        if (!t) return null;
        const n = new ml(t);
        return {
          get selector() {
            return n.selector;
          },
          get type() {
            return n.componentType;
          },
          get inputs() {
            return n.inputs;
          },
          get outputs() {
            return n.outputs;
          },
          get ngContentSelectors() {
            return n.ngContentSelectors;
          },
          get isStandalone() {
            return t.standalone;
          },
          get isSignal() {
            return t.signals;
          },
        };
      }
    },
    4341: (_t, He, F) => {
      "use strict";
      F.d(He, {
        zX: () => Io,
        VZ: () => Bo,
        cz: () => xe,
        kq: () => ue,
        vO: () => at,
      });
      var a = F(4438),
        j = (F(177), F(6648)),
        se = F(1985),
        G = F(3073),
        ae = F(8750),
        X = F(3794),
        $e = F(4360),
        Ne = F(6450),
        Ie = F(8496),
        De = F(6354);
      const ue = new a.nKC("");
      function te(w) {
        return (
          null == w ||
          (("string" == typeof w || Array.isArray(w)) && 0 === w.length)
        );
      }
      const xe = new a.nKC("");
      function ee(w) {
        return null;
      }
      function K(w) {
        return null != w;
      }
      function J(w) {
        return (0, a.jNT)(w) ? (0, j.H)(w) : w;
      }
      function re(w) {
        let C = {};
        return (
          w.forEach((k) => {
            C = null != k ? { ...C, ...k } : C;
          }),
          0 === Object.keys(C).length ? null : C
        );
      }
      function be(w, C) {
        return C.map((k) => k(w));
      }
      function me(w) {
        return w.map((C) =>
          (function ge(w) {
            return !w.validate;
          })(C)
            ? C
            : (k) => C.validate(k)
        );
      }
      function Tt(w) {
        return null != w
          ? (function ft(w) {
              if (!w) return null;
              const C = w.filter(K);
              return 0 == C.length
                ? null
                : function (k) {
                    return re(be(k, C));
                  };
            })(me(w))
          : null;
      }
      function It(w) {
        return null != w
          ? (function lt(w) {
              if (!w) return null;
              const C = w.filter(K);
              return 0 == C.length
                ? null
                : function (k) {
                    return (function ne(...w) {
                      const C = (0, X.ms)(w),
                        { args: k, keys: S } = (0, G.D)(w),
                        H = new se.c((rt) => {
                          const { length: wt } = k;
                          if (!wt) return void rt.complete();
                          const Pt = new Array(wt);
                          let Ur = wt,
                            po = wt;
                          for (let qr = 0; qr < wt; qr++) {
                            let Eo = !1;
                            (0, ae.Tg)(k[qr]).subscribe(
                              (0, $e._)(
                                rt,
                                (Es) => {
                                  Eo || ((Eo = !0), po--), (Pt[qr] = Es);
                                },
                                () => Ur--,
                                void 0,
                                () => {
                                  (!Ur || !Eo) &&
                                    (po || rt.next(S ? (0, Ie.e)(S, Pt) : Pt),
                                    rt.complete());
                                }
                              )
                            );
                          }
                        });
                      return C ? H.pipe((0, Ne.I)(C)) : H;
                    })(be(k, C).map(J)).pipe((0, De.T)(re));
                  };
            })(me(w))
          : null;
      }
      class le {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(C) {
          (this._rawValidators = C || []),
            (this._composedValidatorFn = Tt(this._rawValidators));
        }
        _setAsyncValidators(C) {
          (this._rawAsyncValidators = C || []),
            (this._composedAsyncValidatorFn = It(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(C) {
          this._onDestroyCallbacks.push(C);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach((C) => C()),
            (this._onDestroyCallbacks = []);
        }
        reset(C = void 0) {
          this.control && this.control.reset(C);
        }
        hasError(C, k) {
          return !!this.control && this.control.hasError(C, k);
        }
        getError(C, k) {
          return this.control ? this.control.getError(C, k) : null;
        }
      }
      class at extends le {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      function Yn(w) {
        return "number" == typeof w ? w : parseFloat(w);
      }
      Promise.resolve(), Promise.resolve();
      let xr = (() => {
        var w;
        class C {
          constructor() {
            this._validator = ee;
          }
          ngOnChanges(S) {
            if (this.inputName in S) {
              const H = this.normalizeInput(S[this.inputName].currentValue);
              (this._enabled = this.enabled(H)),
                (this._validator = this._enabled
                  ? this.createValidator(H)
                  : ee),
                this._onChange && this._onChange();
            }
          }
          validate(S) {
            return this._validator(S);
          }
          registerOnValidatorChange(S) {
            this._onChange = S;
          }
          enabled(S) {
            return null != S;
          }
        }
        return (
          ((w = C).ɵfac = function (S) {
            return new (S || w)();
          }),
          (w.ɵdir = a.FsC({ type: w, features: [a.OA$] })),
          C
        );
      })();
      const Zi = { provide: xe, useExisting: (0, a.Rfq)(() => Io), multi: !0 };
      let Io = (() => {
        var w;
        class C extends xr {
          constructor() {
            super(...arguments),
              (this.inputName = "max"),
              (this.normalizeInput = (S) => Yn(S)),
              (this.createValidator = (S) =>
                (function Ce(w) {
                  return (C) => {
                    if (te(C.value) || te(w)) return null;
                    const k = parseFloat(C.value);
                    return !isNaN(k) && k > w
                      ? { max: { max: w, actual: C.value } }
                      : null;
                  };
                })(S));
          }
        }
        return (
          ((w = C).ɵfac = (() => {
            let k;
            return function (H) {
              return (k || (k = a.xGo(w)))(H || w);
            };
          })()),
          (w.ɵdir = a.FsC({
            type: w,
            selectors: [
              ["input", "type", "number", "max", "", "formControlName", ""],
              ["input", "type", "number", "max", "", "formControl", ""],
              ["input", "type", "number", "max", "", "ngModel", ""],
            ],
            hostVars: 1,
            hostBindings: function (S, H) {
              2 & S && a.BMQ("max", H._enabled ? H.max : null);
            },
            inputs: { max: "max" },
            features: [a.Jv_([Zi]), a.Vt3],
          })),
          C
        );
      })();
      const ho = { provide: xe, useExisting: (0, a.Rfq)(() => Bo), multi: !0 };
      let Bo = (() => {
        var w;
        class C extends xr {
          constructor() {
            super(...arguments),
              (this.inputName = "min"),
              (this.normalizeInput = (S) => Yn(S)),
              (this.createValidator = (S) =>
                (function Se(w) {
                  return (C) => {
                    if (te(C.value) || te(w)) return null;
                    const k = parseFloat(C.value);
                    return !isNaN(k) && k < w
                      ? { min: { min: w, actual: C.value } }
                      : null;
                  };
                })(S));
          }
        }
        return (
          ((w = C).ɵfac = (() => {
            let k;
            return function (H) {
              return (k || (k = a.xGo(w)))(H || w);
            };
          })()),
          (w.ɵdir = a.FsC({
            type: w,
            selectors: [
              ["input", "type", "number", "min", "", "formControlName", ""],
              ["input", "type", "number", "min", "", "formControl", ""],
              ["input", "type", "number", "min", "", "ngModel", ""],
            ],
            hostVars: 1,
            hostBindings: function (S, H) {
              2 & S && a.BMQ("min", H._enabled ? H.min : null);
            },
            inputs: { min: "min" },
            features: [a.Jv_([ho]), a.Vt3],
          })),
          C
        );
      })();
    },
    345: (_t, He, F) => {
      "use strict";
      F.d(He, { B8: () => J, hE: () => Ue });
      var a = F(4438),
        l = F(177);
      class j extends l.VF {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class se extends j {
        static makeCurrent() {
          (0, l.ZD)(new se());
        }
        onAndCancel(de, Ee, ie) {
          return (
            de.addEventListener(Ee, ie),
            () => {
              de.removeEventListener(Ee, ie);
            }
          );
        }
        dispatchEvent(de, Ee) {
          de.dispatchEvent(Ee);
        }
        remove(de) {
          de.parentNode && de.parentNode.removeChild(de);
        }
        createElement(de, Ee) {
          return (Ee = Ee || this.getDefaultDocument()).createElement(de);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(de) {
          return de.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(de) {
          return de instanceof DocumentFragment;
        }
        getGlobalEventTarget(de, Ee) {
          return "window" === Ee
            ? window
            : "document" === Ee
            ? de
            : "body" === Ee
            ? de.body
            : null;
        }
        getBaseHref(de) {
          const Ee = (function ae() {
            return (
              (G = G || document.querySelector("base")),
              G ? G.getAttribute("href") : null
            );
          })();
          return null == Ee
            ? null
            : (function X(pe) {
                return new URL(pe, document.baseURI).pathname;
              })(Ee);
        }
        resetBaseElement() {
          G = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(de) {
          return (0, l._b)(document.cookie, de);
        }
      }
      let G = null,
        Ne = (() => {
          var pe;
          class de {
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            ((pe = de).ɵfac = function (ie) {
              return new (ie || pe)();
            }),
            (pe.ɵprov = a.jDH({ token: pe, factory: pe.ɵfac })),
            de
          );
        })();
      const Ie = new a.nKC("");
      let ne = (() => {
        var pe;
        class de {
          constructor(ie, Le) {
            (this._zone = Le),
              (this._eventNameToPlugin = new Map()),
              ie.forEach((Je) => {
                Je.manager = this;
              }),
              (this._plugins = ie.slice().reverse());
          }
          addEventListener(ie, Le, Je) {
            return this._findPluginFor(Le).addEventListener(ie, Le, Je);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(ie) {
            let Le = this._eventNameToPlugin.get(ie);
            if (Le) return Le;
            if (((Le = this._plugins.find((ut) => ut.supports(ie))), !Le))
              throw new a.wOt(5101, !1);
            return this._eventNameToPlugin.set(ie, Le), Le;
          }
        }
        return (
          ((pe = de).ɵfac = function (ie) {
            return new (ie || pe)(a.KVO(Ie), a.KVO(a.SKi));
          }),
          (pe.ɵprov = a.jDH({ token: pe, factory: pe.ɵfac })),
          de
        );
      })();
      class De {
        constructor(de) {
          this._doc = de;
        }
      }
      const ve = "ng-app-id";
      let ce = (() => {
        var pe;
        class de {
          constructor(ie, Le, Je, ut = {}) {
            (this.doc = ie),
              (this.appId = Le),
              (this.nonce = Je),
              (this.platformId = ut),
              (this.styleRef = new Map()),
              (this.hostNodes = new Set()),
              (this.styleNodesInDOM = this.collectServerRenderedStyles()),
              (this.platformIsServer = (0, l.Vy)(ut)),
              this.resetHostNodes();
          }
          addStyles(ie) {
            for (const Le of ie)
              1 === this.changeUsageCount(Le, 1) && this.onStyleAdded(Le);
          }
          removeStyles(ie) {
            for (const Le of ie)
              this.changeUsageCount(Le, -1) <= 0 && this.onStyleRemoved(Le);
          }
          ngOnDestroy() {
            const ie = this.styleNodesInDOM;
            ie && (ie.forEach((Le) => Le.remove()), ie.clear());
            for (const Le of this.getAllStyles()) this.onStyleRemoved(Le);
            this.resetHostNodes();
          }
          addHost(ie) {
            this.hostNodes.add(ie);
            for (const Le of this.getAllStyles()) this.addStyleToHost(ie, Le);
          }
          removeHost(ie) {
            this.hostNodes.delete(ie);
          }
          getAllStyles() {
            return this.styleRef.keys();
          }
          onStyleAdded(ie) {
            for (const Le of this.hostNodes) this.addStyleToHost(Le, ie);
          }
          onStyleRemoved(ie) {
            var Le;
            const Je = this.styleRef;
            null === (Le = Je.get(ie)) ||
              void 0 === Le ||
              null === (Le = Le.elements) ||
              void 0 === Le ||
              Le.forEach((ut) => ut.remove()),
              Je.delete(ie);
          }
          collectServerRenderedStyles() {
            var ie;
            const Le =
              null === (ie = this.doc.head) || void 0 === ie
                ? void 0
                : ie.querySelectorAll(`style[${ve}="${this.appId}"]`);
            if (null != Le && Le.length) {
              const Je = new Map();
              return (
                Le.forEach((ut) => {
                  null != ut.textContent && Je.set(ut.textContent, ut);
                }),
                Je
              );
            }
            return null;
          }
          changeUsageCount(ie, Le) {
            const Je = this.styleRef;
            if (Je.has(ie)) {
              const ut = Je.get(ie);
              return (ut.usage += Le), ut.usage;
            }
            return Je.set(ie, { usage: Le, elements: [] }), Le;
          }
          getStyleElement(ie, Le) {
            const Je = this.styleNodesInDOM,
              ut = null == Je ? void 0 : Je.get(Le);
            if ((null == ut ? void 0 : ut.parentNode) === ie)
              return Je.delete(Le), ut.removeAttribute(ve), ut;
            {
              const At = this.doc.createElement("style");
              return (
                this.nonce && At.setAttribute("nonce", this.nonce),
                (At.textContent = Le),
                this.platformIsServer && At.setAttribute(ve, this.appId),
                ie.appendChild(At),
                At
              );
            }
          }
          addStyleToHost(ie, Le) {
            var Je;
            const ut = this.getStyleElement(ie, Le),
              At = this.styleRef,
              qt =
                null === (Je = At.get(Le)) || void 0 === Je
                  ? void 0
                  : Je.elements;
            qt ? qt.push(ut) : At.set(Le, { elements: [ut], usage: 1 });
          }
          resetHostNodes() {
            const ie = this.hostNodes;
            ie.clear(), ie.add(this.doc.head);
          }
        }
        return (
          ((pe = de).ɵfac = function (ie) {
            return new (ie || pe)(
              a.KVO(l.qQ),
              a.KVO(a.sZ2),
              a.KVO(a.BIS, 8),
              a.KVO(a.Agw)
            );
          }),
          (pe.ɵprov = a.jDH({ token: pe, factory: pe.ɵfac })),
          de
        );
      })();
      const ue = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/",
        },
        ke = /%COMP%/g,
        Ae = new a.nKC("", { providedIn: "root", factory: () => !0 });
      function xe(pe, de) {
        return de.map((Ee) => Ee.replace(ke, pe));
      }
      let Me = (() => {
        var pe;
        class de {
          constructor(ie, Le, Je, ut, At, qt, Jt, Nn = null) {
            (this.eventManager = ie),
              (this.sharedStylesHost = Le),
              (this.appId = Je),
              (this.removeStylesOnCompDestroy = ut),
              (this.doc = At),
              (this.platformId = qt),
              (this.ngZone = Jt),
              (this.nonce = Nn),
              (this.rendererByCompId = new Map()),
              (this.platformIsServer = (0, l.Vy)(qt)),
              (this.defaultRenderer = new he(
                ie,
                At,
                Jt,
                this.platformIsServer
              ));
          }
          createRenderer(ie, Le) {
            if (!ie || !Le) return this.defaultRenderer;
            this.platformIsServer &&
              Le.encapsulation === a.gXe.ShadowDom &&
              (Le = { ...Le, encapsulation: a.gXe.Emulated });
            const Je = this.getOrCreateRenderer(ie, Le);
            return (
              Je instanceof qe
                ? Je.applyToHost(ie)
                : Je instanceof Ge && Je.applyStyles(),
              Je
            );
          }
          getOrCreateRenderer(ie, Le) {
            const Je = this.rendererByCompId;
            let ut = Je.get(Le.id);
            if (!ut) {
              const At = this.doc,
                qt = this.ngZone,
                Jt = this.eventManager,
                Nn = this.sharedStylesHost,
                Mn = this.removeStylesOnCompDestroy,
                Fn = this.platformIsServer;
              switch (Le.encapsulation) {
                case a.gXe.Emulated:
                  ut = new qe(Jt, Nn, Le, this.appId, Mn, At, qt, Fn);
                  break;
                case a.gXe.ShadowDom:
                  return new We(Jt, Nn, ie, Le, At, qt, this.nonce, Fn);
                default:
                  ut = new Ge(Jt, Nn, Le, Mn, At, qt, Fn);
              }
              Je.set(Le.id, ut);
            }
            return ut;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
        }
        return (
          ((pe = de).ɵfac = function (ie) {
            return new (ie || pe)(
              a.KVO(ne),
              a.KVO(ce),
              a.KVO(a.sZ2),
              a.KVO(Ae),
              a.KVO(l.qQ),
              a.KVO(a.Agw),
              a.KVO(a.SKi),
              a.KVO(a.BIS)
            );
          }),
          (pe.ɵprov = a.jDH({ token: pe, factory: pe.ɵfac })),
          de
        );
      })();
      class he {
        constructor(de, Ee, ie, Le) {
          (this.eventManager = de),
            (this.doc = Ee),
            (this.ngZone = ie),
            (this.platformIsServer = Le),
            (this.data = Object.create(null)),
            (this.throwOnSyntheticProps = !0),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(de, Ee) {
          return Ee
            ? this.doc.createElementNS(ue[Ee] || Ee, de)
            : this.doc.createElement(de);
        }
        createComment(de) {
          return this.doc.createComment(de);
        }
        createText(de) {
          return this.doc.createTextNode(de);
        }
        appendChild(de, Ee) {
          (Ce(de) ? de.content : de).appendChild(Ee);
        }
        insertBefore(de, Ee, ie) {
          de && (Ce(de) ? de.content : de).insertBefore(Ee, ie);
        }
        removeChild(de, Ee) {
          de && de.removeChild(Ee);
        }
        selectRootElement(de, Ee) {
          let ie = "string" == typeof de ? this.doc.querySelector(de) : de;
          if (!ie) throw new a.wOt(-5104, !1);
          return Ee || (ie.textContent = ""), ie;
        }
        parentNode(de) {
          return de.parentNode;
        }
        nextSibling(de) {
          return de.nextSibling;
        }
        setAttribute(de, Ee, ie, Le) {
          if (Le) {
            Ee = Le + ":" + Ee;
            const Je = ue[Le];
            Je ? de.setAttributeNS(Je, Ee, ie) : de.setAttribute(Ee, ie);
          } else de.setAttribute(Ee, ie);
        }
        removeAttribute(de, Ee, ie) {
          if (ie) {
            const Le = ue[ie];
            Le
              ? de.removeAttributeNS(Le, Ee)
              : de.removeAttribute(`${ie}:${Ee}`);
          } else de.removeAttribute(Ee);
        }
        addClass(de, Ee) {
          de.classList.add(Ee);
        }
        removeClass(de, Ee) {
          de.classList.remove(Ee);
        }
        setStyle(de, Ee, ie, Le) {
          Le & (a.czy.DashCase | a.czy.Important)
            ? de.style.setProperty(
                Ee,
                ie,
                Le & a.czy.Important ? "important" : ""
              )
            : (de.style[Ee] = ie);
        }
        removeStyle(de, Ee, ie) {
          ie & a.czy.DashCase
            ? de.style.removeProperty(Ee)
            : (de.style[Ee] = "");
        }
        setProperty(de, Ee, ie) {
          null != de && (de[Ee] = ie);
        }
        setValue(de, Ee) {
          de.nodeValue = Ee;
        }
        listen(de, Ee, ie) {
          if (
            "string" == typeof de &&
            !(de = (0, l.QT)().getGlobalEventTarget(this.doc, de))
          )
            throw new Error(`Unsupported event target ${de} for event ${Ee}`);
          return this.eventManager.addEventListener(
            de,
            Ee,
            this.decoratePreventDefault(ie)
          );
        }
        decoratePreventDefault(de) {
          return (Ee) => {
            if ("__ngUnwrap__" === Ee) return de;
            !1 ===
              (this.platformIsServer
                ? this.ngZone.runGuarded(() => de(Ee))
                : de(Ee)) && Ee.preventDefault();
          };
        }
      }
      function Ce(pe) {
        return "TEMPLATE" === pe.tagName && void 0 !== pe.content;
      }
      class We extends he {
        constructor(de, Ee, ie, Le, Je, ut, At, qt) {
          super(de, Je, ut, qt),
            (this.sharedStylesHost = Ee),
            (this.hostEl = ie),
            (this.shadowRoot = ie.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const Jt = xe(Le.id, Le.styles);
          for (const Nn of Jt) {
            const Mn = document.createElement("style");
            At && Mn.setAttribute("nonce", At),
              (Mn.textContent = Nn),
              this.shadowRoot.appendChild(Mn);
          }
        }
        nodeOrShadowRoot(de) {
          return de === this.hostEl ? this.shadowRoot : de;
        }
        appendChild(de, Ee) {
          return super.appendChild(this.nodeOrShadowRoot(de), Ee);
        }
        insertBefore(de, Ee, ie) {
          return super.insertBefore(this.nodeOrShadowRoot(de), Ee, ie);
        }
        removeChild(de, Ee) {
          return super.removeChild(this.nodeOrShadowRoot(de), Ee);
        }
        parentNode(de) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(de))
          );
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class Ge extends he {
        constructor(de, Ee, ie, Le, Je, ut, At, qt) {
          super(de, Je, ut, At),
            (this.sharedStylesHost = Ee),
            (this.removeStylesOnCompDestroy = Le),
            (this.styles = qt ? xe(qt, ie.styles) : ie.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class qe extends Ge {
        constructor(de, Ee, ie, Le, Je, ut, At, qt) {
          const Jt = Le + "-" + ie.id;
          super(de, Ee, ie, Je, ut, At, qt, Jt),
            (this.contentAttr = (function te(pe) {
              return "_ngcontent-%COMP%".replace(ke, pe);
            })(Jt)),
            (this.hostAttr = (function fe(pe) {
              return "_nghost-%COMP%".replace(ke, pe);
            })(Jt));
        }
        applyToHost(de) {
          this.applyStyles(), this.setAttribute(de, this.hostAttr, "");
        }
        createElement(de, Ee) {
          const ie = super.createElement(de, Ee);
          return super.setAttribute(ie, this.contentAttr, ""), ie;
        }
      }
      let vt = (() => {
        var pe;
        class de extends De {
          constructor(ie) {
            super(ie);
          }
          supports(ie) {
            return !0;
          }
          addEventListener(ie, Le, Je) {
            return (
              ie.addEventListener(Le, Je, !1),
              () => this.removeEventListener(ie, Le, Je)
            );
          }
          removeEventListener(ie, Le, Je) {
            return ie.removeEventListener(Le, Je);
          }
        }
        return (
          ((pe = de).ɵfac = function (ie) {
            return new (ie || pe)(a.KVO(l.qQ));
          }),
          (pe.ɵprov = a.jDH({ token: pe, factory: pe.ɵfac })),
          de
        );
      })();
      const jt = ["alt", "control", "meta", "shift"],
        je = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        ee = {
          alt: (pe) => pe.altKey,
          control: (pe) => pe.ctrlKey,
          meta: (pe) => pe.metaKey,
          shift: (pe) => pe.shiftKey,
        };
      let K = (() => {
        var pe;
        class de extends De {
          constructor(ie) {
            super(ie);
          }
          supports(ie) {
            return null != de.parseEventName(ie);
          }
          addEventListener(ie, Le, Je) {
            const ut = de.parseEventName(Le),
              At = de.eventCallback(ut.fullKey, Je, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, l.QT)().onAndCancel(ie, ut.domEventName, At)
              );
          }
          static parseEventName(ie) {
            const Le = ie.toLowerCase().split("."),
              Je = Le.shift();
            if (0 === Le.length || ("keydown" !== Je && "keyup" !== Je))
              return null;
            const ut = de._normalizeKey(Le.pop());
            let At = "",
              qt = Le.indexOf("code");
            if (
              (qt > -1 && (Le.splice(qt, 1), (At = "code.")),
              jt.forEach((Nn) => {
                const Mn = Le.indexOf(Nn);
                Mn > -1 && (Le.splice(Mn, 1), (At += Nn + "."));
              }),
              (At += ut),
              0 != Le.length || 0 === ut.length)
            )
              return null;
            const Jt = {};
            return (Jt.domEventName = Je), (Jt.fullKey = At), Jt;
          }
          static matchEventFullKeyCode(ie, Le) {
            let Je = je[ie.key] || ie.key,
              ut = "";
            return (
              Le.indexOf("code.") > -1 && ((Je = ie.code), (ut = "code.")),
              !(null == Je || !Je) &&
                ((Je = Je.toLowerCase()),
                " " === Je ? (Je = "space") : "." === Je && (Je = "dot"),
                jt.forEach((At) => {
                  At !== Je && (0, ee[At])(ie) && (ut += At + ".");
                }),
                (ut += Je),
                ut === Le)
            );
          }
          static eventCallback(ie, Le, Je) {
            return (ut) => {
              de.matchEventFullKeyCode(ut, ie) && Je.runGuarded(() => Le(ut));
            };
          }
          static _normalizeKey(ie) {
            return "esc" === ie ? "escape" : ie;
          }
        }
        return (
          ((pe = de).ɵfac = function (ie) {
            return new (ie || pe)(a.KVO(l.qQ));
          }),
          (pe.ɵprov = a.jDH({ token: pe, factory: pe.ɵfac })),
          de
        );
      })();
      function J(pe, de) {
        return (0, a.TL3)({ rootComponent: pe, ...be(de) });
      }
      function be(pe) {
        var de;
        return {
          appProviders: [
            ...Yt,
            ...(null !== (de = null == pe ? void 0 : pe.providers) &&
            void 0 !== de
              ? de
              : []),
          ],
          platformProviders: lt,
        };
      }
      const lt = [
          { provide: a.Agw, useValue: l.AJ },
          {
            provide: a.PLl,
            useValue: function me() {
              se.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: l.qQ,
            useFactory: function Tt() {
              return (0, a.TL$)(document), document;
            },
            deps: [],
          },
        ],
        Yt = [
          { provide: a.H8p, useValue: "root" },
          {
            provide: a.zcH,
            useFactory: function ft() {
              return new a.zcH();
            },
            deps: [],
          },
          { provide: Ie, useClass: vt, multi: !0, deps: [l.qQ, a.SKi, a.Agw] },
          { provide: Ie, useClass: K, multi: !0, deps: [l.qQ] },
          Me,
          ce,
          ne,
          { provide: a._9s, useExisting: Me },
          { provide: l.N0, useClass: Ne, deps: [] },
          [],
        ];
      let Ue = (() => {
        var pe;
        class de {
          constructor(ie) {
            this._doc = ie;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(ie) {
            this._doc.title = ie || "";
          }
        }
        return (
          ((pe = de).ɵfac = function (ie) {
            return new (ie || pe)(a.KVO(l.qQ));
          }),
          (pe.ɵprov = a.jDH({
            token: pe,
            factory: pe.ɵfac,
            providedIn: "root",
          })),
          de
        );
      })();
    },
    70: (_t, He, F) => {
      "use strict";
      F.d(He, {
        nX: () => Ze,
        Zp: () => v,
        Z: () => yr,
        Xk: () => ct,
        b: () => dn,
        Ix: () => fn,
        Wk: () => Ft,
        Sd: () => Un,
        lh: () => Xl,
      });
      var a = F(4438),
        l = F(1985),
        j = F(8071),
        G = F(6648),
        ae = F(7673),
        X = F(4412);
      const Ne = (0, F(1853).L)(
        (d) =>
          function () {
            d(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
      var Ie = F(4572),
        ne = F(1397),
        De = F(3669);
      var ue = F(3794);
      function ke(...d) {
        return (function ce() {
          return (function ve(d = 1 / 0) {
            return (0, ne.Z)(De.D, d);
          })(1);
        })()((0, G.H)(d, (0, ue.lI)(d)));
      }
      var Oe = F(8750);
      function _e(d) {
        return new l.c((p) => {
          (0, Oe.Tg)(d()).subscribe(p);
        });
      }
      var we = F(1203);
      function Ye(d, p) {
        const y = (0, j.T)(d) ? d : () => d,
          g = (I) => I.error(y());
        return new l.c(p ? (I) => p.schedule(g, 0, I) : g);
      }
      const Ae = new l.c((d) => d.complete());
      var xe = F(8359),
        Me = F(9974),
        he = F(4360);
      function Y() {
        return (0, Me.N)((d, p) => {
          let y = null;
          d._refCount++;
          const g = (0, he._)(p, void 0, void 0, void 0, () => {
            if (!d || d._refCount <= 0 || 0 < --d._refCount)
              return void (y = null);
            const I = d._connection,
              P = y;
            (y = null),
              I && (!P || I === P) && I.unsubscribe(),
              p.unsubscribe();
          });
          d.subscribe(g), g.closed || (y = d.connect());
        });
      }
      class Se extends l.c {
        constructor(p, y) {
          super(),
            (this.source = p),
            (this.subjectFactory = y),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, Me.S)(p) && (this.lift = p.lift);
        }
        _subscribe(p) {
          return this.getSubject().subscribe(p);
        }
        getSubject() {
          const p = this._subject;
          return (
            (!p || p.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: p } = this;
          (this._subject = this._connection = null),
            null == p || p.unsubscribe();
        }
        connect() {
          let p = this._connection;
          if (!p) {
            p = this._connection = new xe.yU();
            const y = this.getSubject();
            p.add(
              this.source.subscribe(
                (0, he._)(
                  y,
                  void 0,
                  () => {
                    this._teardown(), y.complete();
                  },
                  (g) => {
                    this._teardown(), y.error(g);
                  },
                  () => this._teardown()
                )
              )
            ),
              p.closed && ((this._connection = null), (p = xe.yU.EMPTY));
          }
          return p;
        }
        refCount() {
          return Y()(this);
        }
      }
      var Ce = F(1413),
        We = F(177),
        Ge = F(6354),
        qe = F(5558);
      function vt(d) {
        return d <= 0
          ? () => Ae
          : (0, Me.N)((p, y) => {
              let g = 0;
              p.subscribe(
                (0, he._)(y, (I) => {
                  ++g <= d && (y.next(I), d <= g && y.complete());
                })
              );
            });
      }
      var je = F(5964);
      function ee(d) {
        return (0, Me.N)((p, y) => {
          let g = !1;
          p.subscribe(
            (0, he._)(
              y,
              (I) => {
                (g = !0), y.next(I);
              },
              () => {
                g || y.next(d), y.complete();
              }
            )
          );
        });
      }
      function K(d = J) {
        return (0, Me.N)((p, y) => {
          let g = !1;
          p.subscribe(
            (0, he._)(
              y,
              (I) => {
                (g = !0), y.next(I);
              },
              () => (g ? y.complete() : y.error(d()))
            )
          );
        });
      }
      function J() {
        return new Ne();
      }
      function re(d, p) {
        const y = arguments.length >= 2;
        return (g) =>
          g.pipe(
            d ? (0, je.p)((I, P) => d(I, P, g)) : De.D,
            vt(1),
            y ? ee(p) : K(() => new Ne())
          );
      }
      function be(d, p) {
        return (0, j.T)(p) ? (0, ne.Z)(d, p, 1) : (0, ne.Z)(d, 1);
      }
      function ge(d, p, y) {
        const g =
          (0, j.T)(d) || p || y ? { next: d, error: p, complete: y } : d;
        return g
          ? (0, Me.N)((I, P) => {
              var U;
              null === (U = g.subscribe) || void 0 === U || U.call(g);
              let Te = !0;
              I.subscribe(
                (0, he._)(
                  P,
                  (Qe) => {
                    var Pe;
                    null === (Pe = g.next) || void 0 === Pe || Pe.call(g, Qe),
                      P.next(Qe);
                  },
                  () => {
                    var Qe;
                    (Te = !1),
                      null === (Qe = g.complete) || void 0 === Qe || Qe.call(g),
                      P.complete();
                  },
                  (Qe) => {
                    var Pe;
                    (Te = !1),
                      null === (Pe = g.error) ||
                        void 0 === Pe ||
                        Pe.call(g, Qe),
                      P.error(Qe);
                  },
                  () => {
                    var Qe, Pe;
                    Te &&
                      (null === (Qe = g.unsubscribe) ||
                        void 0 === Qe ||
                        Qe.call(g)),
                      null === (Pe = g.finalize) || void 0 === Pe || Pe.call(g);
                  }
                )
              );
            })
          : De.D;
      }
      function me(d) {
        return (0, Me.N)((p, y) => {
          let P,
            g = null,
            I = !1;
          (g = p.subscribe(
            (0, he._)(y, void 0, void 0, (U) => {
              (P = (0, Oe.Tg)(d(U, me(d)(p)))),
                g ? (g.unsubscribe(), (g = null), P.subscribe(y)) : (I = !0);
            })
          )),
            I && (g.unsubscribe(), (g = null), P.subscribe(y));
        });
      }
      function lt(d) {
        return d <= 0
          ? () => Ae
          : (0, Me.N)((p, y) => {
              let g = [];
              p.subscribe(
                (0, he._)(
                  y,
                  (I) => {
                    g.push(I), d < g.length && g.shift();
                  },
                  () => {
                    for (const I of g) y.next(I);
                    y.complete();
                  },
                  void 0,
                  () => {
                    g = null;
                  }
                )
              );
            });
      }
      function Ot(d) {
        return (0, Me.N)((p, y) => {
          try {
            p.subscribe(y);
          } finally {
            y.add(d);
          }
        });
      }
      var Yt = F(5343),
        an = F(345);
      const ct = "primary",
        Ue = Symbol("RouteTitle");
      class le {
        constructor(p) {
          this.params = p || {};
        }
        has(p) {
          return Object.prototype.hasOwnProperty.call(this.params, p);
        }
        get(p) {
          if (this.has(p)) {
            const y = this.params[p];
            return Array.isArray(y) ? y[0] : y;
          }
          return null;
        }
        getAll(p) {
          if (this.has(p)) {
            const y = this.params[p];
            return Array.isArray(y) ? y : [y];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Fe(d) {
        return new le(d);
      }
      function at(d, p, y) {
        const g = y.path.split("/");
        if (
          g.length > d.length ||
          ("full" === y.pathMatch && (p.hasChildren() || g.length < d.length))
        )
          return null;
        const I = {};
        for (let P = 0; P < g.length; P++) {
          const U = g[P],
            Te = d[P];
          if (U.startsWith(":")) I[U.substring(1)] = Te;
          else if (U !== Te.path) return null;
        }
        return { consumed: d.slice(0, g.length), posParams: I };
      }
      function Xt(d, p) {
        const y = d ? cn(d) : void 0,
          g = p ? cn(p) : void 0;
        if (!y || !g || y.length != g.length) return !1;
        let I;
        for (let P = 0; P < y.length; P++)
          if (((I = y[P]), !Bt(d[I], p[I]))) return !1;
        return !0;
      }
      function cn(d) {
        return [...Object.keys(d), ...Object.getOwnPropertySymbols(d)];
      }
      function Bt(d, p) {
        if (Array.isArray(d) && Array.isArray(p)) {
          if (d.length !== p.length) return !1;
          const y = [...d].sort(),
            g = [...p].sort();
          return y.every((I, P) => g[P] === I);
        }
        return d === p;
      }
      function dt(d) {
        return d.length > 0 ? d[d.length - 1] : null;
      }
      function mt(d) {
        return (function se(d) {
          return (
            !!d &&
            (d instanceof l.c || ((0, j.T)(d.lift) && (0, j.T)(d.subscribe)))
          );
        })(d)
          ? d
          : (0, a.jNT)(d)
          ? (0, G.H)(Promise.resolve(d))
          : (0, ae.of)(d);
      }
      const In = {
          exact: function En(d, p, y) {
            if (
              !or(d.segments, p.segments) ||
              !kt(d.segments, p.segments, y) ||
              d.numberOfChildren !== p.numberOfChildren
            )
              return !1;
            for (const g in p.children)
              if (!d.children[g] || !En(d.children[g], p.children[g], y))
                return !1;
            return !0;
          },
          subset: Et,
        },
        An = {
          exact: function Bn(d, p) {
            return Xt(d, p);
          },
          subset: function Dr(d, p) {
            return (
              Object.keys(p).length <= Object.keys(d).length &&
              Object.keys(p).every((y) => Bt(d[y], p[y]))
            );
          },
          ignored: () => !0,
        };
      function wn(d, p, y) {
        return (
          In[y.paths](d.root, p.root, y.matrixParams) &&
          An[y.queryParams](d.queryParams, p.queryParams) &&
          !("exact" === y.fragment && d.fragment !== p.fragment)
        );
      }
      function Et(d, p, y) {
        return lr(d, p, p.segments, y);
      }
      function lr(d, p, y, g) {
        if (d.segments.length > y.length) {
          const I = d.segments.slice(0, y.length);
          return !(!or(I, y) || p.hasChildren() || !kt(I, y, g));
        }
        if (d.segments.length === y.length) {
          if (!or(d.segments, y) || !kt(d.segments, y, g)) return !1;
          for (const I in p.children)
            if (!d.children[I] || !Et(d.children[I], p.children[I], g))
              return !1;
          return !0;
        }
        {
          const I = y.slice(0, d.segments.length),
            P = y.slice(d.segments.length);
          return (
            !!(or(d.segments, I) && kt(d.segments, I, g) && d.children[ct]) &&
            lr(d.children[ct], p, P, g)
          );
        }
      }
      function kt(d, p, y) {
        return p.every((g, I) => An[y](d[I].parameters, g.parameters));
      }
      class xt {
        constructor(p = new Nt([], {}), y = {}, g = null) {
          (this.root = p), (this.queryParams = y), (this.fragment = g);
        }
        get queryParamMap() {
          var p;
          return (
            (null !== (p = this._queryParamMap) && void 0 !== p) ||
              (this._queryParamMap = Fe(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return de.serialize(this);
        }
      }
      class Nt {
        constructor(p, y) {
          (this.segments = p),
            (this.children = y),
            (this.parent = null),
            Object.values(y).forEach((g) => (g.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Ee(this);
        }
      }
      class Zt {
        constructor(p, y) {
          (this.path = p), (this.parameters = y);
        }
        get parameterMap() {
          var p;
          return (
            (null !== (p = this._parameterMap) && void 0 !== p) ||
              (this._parameterMap = Fe(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Nn(this);
        }
      }
      function or(d, p) {
        return d.length === p.length && d.every((y, g) => y.path === p[g].path);
      }
      let Un = (() => {
        var d;
        class p {}
        return (
          ((d = p).ɵfac = function (g) {
            return new (g || d)();
          }),
          (d.ɵprov = a.jDH({
            token: d,
            factory: () => new pe(),
            providedIn: "root",
          })),
          p
        );
      })();
      class pe {
        parse(p) {
          const y = new ur(p);
          return new xt(
            y.parseRootSegment(),
            y.parseQueryParams(),
            y.parseFragment()
          );
        }
        serialize(p) {
          const y = `/${ie(p.root, !0)}`,
            g = (function Fn(d) {
              const p = Object.entries(d)
                .map(([y, g]) =>
                  Array.isArray(g)
                    ? g.map((I) => `${Je(y)}=${Je(I)}`).join("&")
                    : `${Je(y)}=${Je(g)}`
                )
                .filter((y) => y);
              return p.length ? `?${p.join("&")}` : "";
            })(p.queryParams);
          return `${y}${g}${
            "string" == typeof p.fragment
              ? `#${(function ut(d) {
                  return encodeURI(d);
                })(p.fragment)}`
              : ""
          }`;
        }
      }
      const de = new pe();
      function Ee(d) {
        return d.segments.map((p) => Nn(p)).join("/");
      }
      function ie(d, p) {
        if (!d.hasChildren()) return Ee(d);
        if (p) {
          const y = d.children[ct] ? ie(d.children[ct], !1) : "",
            g = [];
          return (
            Object.entries(d.children).forEach(([I, P]) => {
              I !== ct && g.push(`${I}:${ie(P, !1)}`);
            }),
            g.length > 0 ? `${y}(${g.join("//")})` : y
          );
        }
        {
          const y = (function to(d, p) {
            let y = [];
            return (
              Object.entries(d.children).forEach(([g, I]) => {
                g === ct && (y = y.concat(p(I, g)));
              }),
              Object.entries(d.children).forEach(([g, I]) => {
                g !== ct && (y = y.concat(p(I, g)));
              }),
              y
            );
          })(d, (g, I) =>
            I === ct ? [ie(d.children[ct], !1)] : [`${I}:${ie(g, !1)}`]
          );
          return 1 === Object.keys(d.children).length && null != d.children[ct]
            ? `${Ee(d)}/${y[0]}`
            : `${Ee(d)}/(${y.join("//")})`;
        }
      }
      function Le(d) {
        return encodeURIComponent(d)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Je(d) {
        return Le(d).replace(/%3B/gi, ";");
      }
      function At(d) {
        return Le(d)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function qt(d) {
        return decodeURIComponent(d);
      }
      function Jt(d) {
        return qt(d.replace(/\+/g, "%20"));
      }
      function Nn(d) {
        return `${At(d.path)}${(function Mn(d) {
          return Object.entries(d)
            .map(([p, y]) => `;${At(p)}=${At(y)}`)
            .join("");
        })(d.parameters)}`;
      }
      const no = /^[^\/()?;#]+/;
      function zr(d) {
        const p = d.match(no);
        return p ? p[0] : "";
      }
      const yn = /^[^\/()?;=#]+/,
        qn = /^[^=?&#]+/,
        Gr = /^[^&#]+/;
      class ur {
        constructor(p) {
          (this.url = p), (this.remaining = p);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new Nt([], {})
              : new Nt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const p = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(p);
            } while (this.consumeOptional("&"));
          return p;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const p = [];
          for (
            this.peekStartsWith("(") || p.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), p.push(this.parseSegment());
          let y = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (y = this.parseParens(!0)));
          let g = {};
          return (
            this.peekStartsWith("(") && (g = this.parseParens(!1)),
            (p.length > 0 || Object.keys(y).length > 0) &&
              (g[ct] = new Nt(p, y)),
            g
          );
        }
        parseSegment() {
          const p = zr(this.remaining);
          if ("" === p && this.peekStartsWith(";")) throw new a.wOt(4009, !1);
          return this.capture(p), new Zt(qt(p), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const p = {};
          for (; this.consumeOptional(";"); ) this.parseParam(p);
          return p;
        }
        parseParam(p) {
          const y = (function Ct(d) {
            const p = d.match(yn);
            return p ? p[0] : "";
          })(this.remaining);
          if (!y) return;
          this.capture(y);
          let g = "";
          if (this.consumeOptional("=")) {
            const I = zr(this.remaining);
            I && ((g = I), this.capture(g));
          }
          p[qt(y)] = qt(g);
        }
        parseQueryParam(p) {
          const y = (function cr(d) {
            const p = d.match(qn);
            return p ? p[0] : "";
          })(this.remaining);
          if (!y) return;
          this.capture(y);
          let g = "";
          if (this.consumeOptional("=")) {
            const U = (function Lr(d) {
              const p = d.match(Gr);
              return p ? p[0] : "";
            })(this.remaining);
            U && ((g = U), this.capture(g));
          }
          const I = Jt(y),
            P = Jt(g);
          if (p.hasOwnProperty(I)) {
            let U = p[I];
            Array.isArray(U) || ((U = [U]), (p[I] = U)), U.push(P);
          } else p[I] = P;
        }
        parseParens(p) {
          const y = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const g = zr(this.remaining),
              I = this.remaining[g.length];
            if ("/" !== I && ")" !== I && ";" !== I) throw new a.wOt(4010, !1);
            let P;
            g.indexOf(":") > -1
              ? ((P = g.slice(0, g.indexOf(":"))),
                this.capture(P),
                this.capture(":"))
              : p && (P = ct);
            const U = this.parseChildren();
            (y[P] = 1 === Object.keys(U).length ? U[ct] : new Nt([], U)),
              this.consumeOptional("//");
          }
          return y;
        }
        peekStartsWith(p) {
          return this.remaining.startsWith(p);
        }
        consumeOptional(p) {
          return (
            !!this.peekStartsWith(p) &&
            ((this.remaining = this.remaining.substring(p.length)), !0)
          );
        }
        capture(p) {
          if (!this.consumeOptional(p)) throw new a.wOt(4011, !1);
        }
      }
      function Ht(d) {
        return d.segments.length > 0 ? new Nt([], { [ct]: d }) : d;
      }
      function Rr(d) {
        const p = {};
        for (const [g, I] of Object.entries(d.children)) {
          const P = Rr(I);
          if (g === ct && 0 === P.segments.length && P.hasChildren())
            for (const [U, Te] of Object.entries(P.children)) p[U] = Te;
          else (P.segments.length > 0 || P.hasChildren()) && (p[g] = P);
        }
        return (function Nr(d) {
          if (1 === d.numberOfChildren && d.children[ct]) {
            const p = d.children[ct];
            return new Nt(d.segments.concat(p.segments), p.children);
          }
          return d;
        })(new Nt(d.segments, p));
      }
      function Gn(d) {
        return d instanceof xt;
      }
      function br(d) {
        var p;
        let y;
        const P = Ht(
          (function g(U) {
            const Te = {};
            for (const Pe of U.children) {
              const gt = g(Pe);
              Te[Pe.outlet] = gt;
            }
            const Qe = new Nt(U.url, Te);
            return U === d && (y = Qe), Qe;
          })(d.root)
        );
        return null !== (p = y) && void 0 !== p ? p : P;
      }
      function Or(d, p, y, g) {
        let I = d;
        for (; I.parent; ) I = I.parent;
        if (0 === p.length) return Ve(I, I, I, y, g);
        const P = (function yt(d) {
          if ("string" == typeof d[0] && 1 === d.length && "/" === d[0])
            return new Mt(!0, 0, d);
          let p = 0,
            y = !1;
          const g = d.reduce((I, P, U) => {
            if ("object" == typeof P && null != P) {
              if (P.outlets) {
                const Te = {};
                return (
                  Object.entries(P.outlets).forEach(([Qe, Pe]) => {
                    Te[Qe] = "string" == typeof Pe ? Pe.split("/") : Pe;
                  }),
                  [...I, { outlets: Te }]
                );
              }
              if (P.segmentPath) return [...I, P.segmentPath];
            }
            return "string" != typeof P
              ? [...I, P]
              : 0 === U
              ? (P.split("/").forEach((Te, Qe) => {
                  (0 == Qe && "." === Te) ||
                    (0 == Qe && "" === Te
                      ? (y = !0)
                      : ".." === Te
                      ? p++
                      : "" != Te && I.push(Te));
                }),
                I)
              : [...I, P];
          }, []);
          return new Mt(y, p, g);
        })(p);
        if (P.toRoot()) return Ve(I, I, new Nt([], {}), y, g);
        const U = (function On(d, p, y) {
            if (d.isAbsolute) return new pn(p, !0, 0);
            if (!y) return new pn(p, !1, NaN);
            if (null === y.parent) return new pn(y, !0, 0);
            const g = fr(d.commands[0]) ? 0 : 1;
            return (function ir(d, p, y) {
              let g = d,
                I = p,
                P = y;
              for (; P > I; ) {
                if (((P -= I), (g = g.parent), !g)) throw new a.wOt(4005, !1);
                I = g.segments.length;
              }
              return new pn(g, !1, I - P);
            })(y, y.segments.length - 1 + g, d.numberOfDoubleDots);
          })(P, I, d),
          Te = U.processChildren
            ? Ir(U.segmentGroup, U.index, P.commands)
            : ro(U.segmentGroup, U.index, P.commands);
        return Ve(I, U.segmentGroup, Te, y, g);
      }
      function fr(d) {
        return (
          "object" == typeof d && null != d && !d.outlets && !d.segmentPath
        );
      }
      function hr(d) {
        return "object" == typeof d && null != d && d.outlets;
      }
      function Ve(d, p, y, g, I) {
        let U,
          P = {};
        g &&
          Object.entries(g).forEach(([Qe, Pe]) => {
            P[Qe] = Array.isArray(Pe) ? Pe.map((gt) => `${gt}`) : `${Pe}`;
          }),
          (U = d === p ? y : ht(d, p, y));
        const Te = Ht(Rr(U));
        return new xt(Te, P, I);
      }
      function ht(d, p, y) {
        const g = {};
        return (
          Object.entries(d.children).forEach(([I, P]) => {
            g[I] = P === p ? y : ht(P, p, y);
          }),
          new Nt(d.segments, g)
        );
      }
      class Mt {
        constructor(p, y, g) {
          if (
            ((this.isAbsolute = p),
            (this.numberOfDoubleDots = y),
            (this.commands = g),
            p && g.length > 0 && fr(g[0]))
          )
            throw new a.wOt(4003, !1);
          const I = g.find(hr);
          if (I && I !== dt(g)) throw new a.wOt(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class pn {
        constructor(p, y, g) {
          (this.segmentGroup = p), (this.processChildren = y), (this.index = g);
        }
      }
      function ro(d, p, y) {
        var g;
        if (
          ((null !== (g = d) && void 0 !== g) || (d = new Nt([], {})),
          0 === d.segments.length && d.hasChildren())
        )
          return Ir(d, p, y);
        const I = (function Er(d, p, y) {
            let g = 0,
              I = p;
            const P = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; I < d.segments.length; ) {
              if (g >= y.length) return P;
              const U = d.segments[I],
                Te = y[g];
              if (hr(Te)) break;
              const Qe = `${Te}`,
                Pe = g < y.length - 1 ? y[g + 1] : null;
              if (I > 0 && void 0 === Qe) break;
              if (Qe && Pe && "object" == typeof Pe && void 0 === Pe.outlets) {
                if (!kn(Qe, Pe, U)) return P;
                g += 2;
              } else {
                if (!kn(Qe, {}, U)) return P;
                g++;
              }
              I++;
            }
            return { match: !0, pathIndex: I, commandIndex: g };
          })(d, p, y),
          P = y.slice(I.commandIndex);
        if (I.match && I.pathIndex < d.segments.length) {
          const U = new Nt(d.segments.slice(0, I.pathIndex), {});
          return (
            (U.children[ct] = new Nt(
              d.segments.slice(I.pathIndex),
              d.children
            )),
            Ir(U, 0, P)
          );
        }
        return I.match && 0 === P.length
          ? new Nt(d.segments, {})
          : I.match && !d.hasChildren()
          ? Qn(d, p, y)
          : I.match
          ? Ir(d, 0, P)
          : Qn(d, p, y);
      }
      function Ir(d, p, y) {
        if (0 === y.length) return new Nt(d.segments, {});
        {
          const g = (function $r(d) {
              return hr(d[0]) ? d[0].outlets : { [ct]: d };
            })(y),
            I = {};
          if (
            Object.keys(g).some((P) => P !== ct) &&
            d.children[ct] &&
            1 === d.numberOfChildren &&
            0 === d.children[ct].segments.length
          ) {
            const P = Ir(d.children[ct], p, y);
            return new Nt(d.segments, P.children);
          }
          return (
            Object.entries(g).forEach(([P, U]) => {
              "string" == typeof U && (U = [U]),
                null !== U && (I[P] = ro(d.children[P], p, U));
            }),
            Object.entries(d.children).forEach(([P, U]) => {
              void 0 === g[P] && (I[P] = U);
            }),
            new Nt(d.segments, I)
          );
        }
      }
      function Qn(d, p, y) {
        const g = d.segments.slice(0, p);
        let I = 0;
        for (; I < y.length; ) {
          const P = y[I];
          if (hr(P)) {
            const Qe = _o(P.outlets);
            return new Nt(g, Qe);
          }
          if (0 === I && fr(y[0])) {
            g.push(new Zt(d.segments[p].path, lo(y[0]))), I++;
            continue;
          }
          const U = hr(P) ? P.outlets[ct] : `${P}`,
            Te = I < y.length - 1 ? y[I + 1] : null;
          U && Te && fr(Te)
            ? (g.push(new Zt(U, lo(Te))), (I += 2))
            : (g.push(new Zt(U, {})), I++);
        }
        return new Nt(g, {});
      }
      function _o(d) {
        const p = {};
        return (
          Object.entries(d).forEach(([y, g]) => {
            "string" == typeof g && (g = [g]),
              null !== g && (p[y] = Qn(new Nt([], {}), 0, g));
          }),
          p
        );
      }
      function lo(d) {
        const p = {};
        return Object.entries(d).forEach(([y, g]) => (p[y] = `${g}`)), p;
      }
      function kn(d, p, y) {
        return d == y.path && Xt(p, y.parameters);
      }
      const Tn = "imperative";
      var $t = (function (d) {
        return (
          (d[(d.NavigationStart = 0)] = "NavigationStart"),
          (d[(d.NavigationEnd = 1)] = "NavigationEnd"),
          (d[(d.NavigationCancel = 2)] = "NavigationCancel"),
          (d[(d.NavigationError = 3)] = "NavigationError"),
          (d[(d.RoutesRecognized = 4)] = "RoutesRecognized"),
          (d[(d.ResolveStart = 5)] = "ResolveStart"),
          (d[(d.ResolveEnd = 6)] = "ResolveEnd"),
          (d[(d.GuardsCheckStart = 7)] = "GuardsCheckStart"),
          (d[(d.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
          (d[(d.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
          (d[(d.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
          (d[(d.ChildActivationStart = 11)] = "ChildActivationStart"),
          (d[(d.ChildActivationEnd = 12)] = "ChildActivationEnd"),
          (d[(d.ActivationStart = 13)] = "ActivationStart"),
          (d[(d.ActivationEnd = 14)] = "ActivationEnd"),
          (d[(d.Scroll = 15)] = "Scroll"),
          (d[(d.NavigationSkipped = 16)] = "NavigationSkipped"),
          d
        );
      })($t || {});
      class Wn {
        constructor(p, y) {
          (this.id = p), (this.url = y);
        }
      }
      class yr extends Wn {
        constructor(p, y, g = "imperative", I = null) {
          super(p, y),
            (this.type = $t.NavigationStart),
            (this.navigationTrigger = g),
            (this.restoredState = I);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class jn extends Wn {
        constructor(p, y, g) {
          super(p, y),
            (this.urlAfterRedirects = g),
            (this.type = $t.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      var gn = (function (d) {
          return (
            (d[(d.Redirect = 0)] = "Redirect"),
            (d[(d.SupersededByNewNavigation = 1)] =
              "SupersededByNewNavigation"),
            (d[(d.NoDataFromResolver = 2)] = "NoDataFromResolver"),
            (d[(d.GuardRejected = 3)] = "GuardRejected"),
            d
          );
        })(gn || {}),
        _n = (function (d) {
          return (
            (d[(d.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
            (d[(d.IgnoredByUrlHandlingStrategy = 1)] =
              "IgnoredByUrlHandlingStrategy"),
            d
          );
        })(_n || {});
      class St extends Wn {
        constructor(p, y, g, I) {
          super(p, y),
            (this.reason = g),
            (this.code = I),
            (this.type = $t.NavigationCancel);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class pt extends Wn {
        constructor(p, y, g, I) {
          super(p, y),
            (this.reason = g),
            (this.code = I),
            (this.type = $t.NavigationSkipped);
        }
      }
      class co extends Wn {
        constructor(p, y, g, I) {
          super(p, y),
            (this.error = g),
            (this.target = I),
            (this.type = $t.NavigationError);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Xn extends Wn {
        constructor(p, y, g, I) {
          super(p, y),
            (this.urlAfterRedirects = g),
            (this.state = I),
            (this.type = $t.RoutesRecognized);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Vr extends Wn {
        constructor(p, y, g, I) {
          super(p, y),
            (this.urlAfterRedirects = g),
            (this.state = I),
            (this.type = $t.GuardsCheckStart);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class No extends Wn {
        constructor(p, y, g, I, P) {
          super(p, y),
            (this.urlAfterRedirects = g),
            (this.state = I),
            (this.shouldActivate = P),
            (this.type = $t.GuardsCheckEnd);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class uo extends Wn {
        constructor(p, y, g, I) {
          super(p, y),
            (this.urlAfterRedirects = g),
            (this.state = I),
            (this.type = $t.ResolveStart);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Br extends Wn {
        constructor(p, y, g, I) {
          super(p, y),
            (this.urlAfterRedirects = g),
            (this.state = I),
            (this.type = $t.ResolveEnd);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class zt {
        constructor(p) {
          (this.route = p), (this.type = $t.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class oo {
        constructor(p) {
          (this.route = p), (this.type = $t.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class L {
        constructor(p) {
          (this.snapshot = p), (this.type = $t.ChildActivationStart);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class x {
        constructor(p) {
          (this.snapshot = p), (this.type = $t.ChildActivationEnd);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Z {
        constructor(p) {
          (this.snapshot = p), (this.type = $t.ActivationStart);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class O {
        constructor(p) {
          (this.snapshot = p), (this.type = $t.ActivationEnd);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class _ {}
      class T {
        constructor(p) {
          this.url = p;
        }
      }
      class c {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.injector = null),
            (this.children = new v()),
            (this.attachRef = null);
        }
      }
      let v = (() => {
        var d;
        class p {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(g, I) {
            const P = this.getOrCreateContext(g);
            (P.outlet = I), this.contexts.set(g, P);
          }
          onChildOutletDestroyed(g) {
            const I = this.getContext(g);
            I && ((I.outlet = null), (I.attachRef = null));
          }
          onOutletDeactivated() {
            const g = this.contexts;
            return (this.contexts = new Map()), g;
          }
          onOutletReAttached(g) {
            this.contexts = g;
          }
          getOrCreateContext(g) {
            let I = this.getContext(g);
            return I || ((I = new c()), this.contexts.set(g, I)), I;
          }
          getContext(g) {
            return this.contexts.get(g) || null;
          }
        }
        return (
          ((d = p).ɵfac = function (g) {
            return new (g || d)();
          }),
          (d.ɵprov = a.jDH({ token: d, factory: d.ɵfac, providedIn: "root" })),
          p
        );
      })();
      class E {
        constructor(p) {
          this._root = p;
        }
        get root() {
          return this._root.value;
        }
        parent(p) {
          const y = this.pathFromRoot(p);
          return y.length > 1 ? y[y.length - 2] : null;
        }
        children(p) {
          const y = m(p, this._root);
          return y ? y.children.map((g) => g.value) : [];
        }
        firstChild(p) {
          const y = m(p, this._root);
          return y && y.children.length > 0 ? y.children[0].value : null;
        }
        siblings(p) {
          const y = R(p, this._root);
          return y.length < 2
            ? []
            : y[y.length - 2].children
                .map((I) => I.value)
                .filter((I) => I !== p);
        }
        pathFromRoot(p) {
          return R(p, this._root).map((y) => y.value);
        }
      }
      function m(d, p) {
        if (d === p.value) return p;
        for (const y of p.children) {
          const g = m(d, y);
          if (g) return g;
        }
        return null;
      }
      function R(d, p) {
        if (d === p.value) return [p];
        for (const y of p.children) {
          const g = R(d, y);
          if (g.length) return g.unshift(p), g;
        }
        return [];
      }
      class B {
        constructor(p, y) {
          (this.value = p), (this.children = y);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Re(d) {
        const p = {};
        return d && d.children.forEach((y) => (p[y.value.outlet] = y)), p;
      }
      class et extends E {
        constructor(p, y) {
          super(p), (this.snapshot = y), er(this, p);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function tt(d) {
        const p = (function Dt(d) {
            const P = new Ln([], {}, {}, "", {}, ct, d, null, {});
            return new un("", new B(P, []));
          })(d),
          y = new X.t([new Zt("", {})]),
          g = new X.t({}),
          I = new X.t({}),
          P = new X.t({}),
          U = new X.t(""),
          Te = new Ze(y, g, P, U, I, ct, d, p.root);
        return (Te.snapshot = p.root), new et(new B(Te, []), p);
      }
      class Ze {
        constructor(p, y, g, I, P, U, Te, Qe) {
          var Pe, gt;
          (this.urlSubject = p),
            (this.paramsSubject = y),
            (this.queryParamsSubject = g),
            (this.fragmentSubject = I),
            (this.dataSubject = P),
            (this.outlet = U),
            (this.component = Te),
            (this._futureSnapshot = Qe),
            (this.title =
              null !==
                (Pe =
                  null === (gt = this.dataSubject) || void 0 === gt
                    ? void 0
                    : gt.pipe((0, Ge.T)((Ut) => Ut[Ue]))) && void 0 !== Pe
                ? Pe
                : (0, ae.of)(void 0)),
            (this.url = p),
            (this.params = y),
            (this.queryParams = g),
            (this.fragment = I),
            (this.data = P);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          var p;
          return (
            (null !== (p = this._paramMap) && void 0 !== p) ||
              (this._paramMap = this.params.pipe((0, Ge.T)((y) => Fe(y)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          var p;
          return (
            (null !== (p = this._queryParamMap) && void 0 !== p) ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, Ge.T)((y) => Fe(y))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function sn(d, p, y = "emptyOnly") {
        var g;
        let I;
        const { routeConfig: P } = d;
        var U;
        return (
          (I =
            null === p ||
            ("always" !== y &&
              "" !== (null == P ? void 0 : P.path) &&
              (p.component ||
                (null !== (g = p.routeConfig) &&
                  void 0 !== g &&
                  g.loadComponent)))
              ? {
                  params: { ...d.params },
                  data: { ...d.data },
                  resolve: {
                    ...d.data,
                    ...(null !== (U = d._resolvedData) && void 0 !== U
                      ? U
                      : {}),
                  },
                }
              : {
                  params: { ...p.params, ...d.params },
                  data: { ...p.data, ...d.data },
                  resolve: {
                    ...d.data,
                    ...p.data,
                    ...(null == P ? void 0 : P.data),
                    ...d._resolvedData,
                  },
                }),
          P && Co(P) && (I.resolve[Ue] = P.title),
          I
        );
      }
      class Ln {
        get title() {
          var p;
          return null === (p = this.data) || void 0 === p ? void 0 : p[Ue];
        }
        constructor(p, y, g, I, P, U, Te, Qe, Pe) {
          (this.url = p),
            (this.params = y),
            (this.queryParams = g),
            (this.fragment = I),
            (this.data = P),
            (this.outlet = U),
            (this.component = Te),
            (this.routeConfig = Qe),
            (this._resolve = Pe);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          var p;
          return (
            (null !== (p = this._paramMap) && void 0 !== p) ||
              (this._paramMap = Fe(this.params)),
            this._paramMap
          );
        }
        get queryParamMap() {
          var p;
          return (
            (null !== (p = this._queryParamMap) && void 0 !== p) ||
              (this._queryParamMap = Fe(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((g) => g.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class un extends E {
        constructor(p, y) {
          super(y), (this.url = p), er(this, y);
        }
        toString() {
          return Rn(this._root);
        }
      }
      function er(d, p) {
        (p.value._routerState = d), p.children.forEach((y) => er(d, y));
      }
      function Rn(d) {
        const p =
          d.children.length > 0 ? ` { ${d.children.map(Rn).join(", ")} } ` : "";
        return `${d.value}${p}`;
      }
      function tr(d) {
        if (d.snapshot) {
          const p = d.snapshot,
            y = d._futureSnapshot;
          (d.snapshot = y),
            Xt(p.queryParams, y.queryParams) ||
              d.queryParamsSubject.next(y.queryParams),
            p.fragment !== y.fragment && d.fragmentSubject.next(y.fragment),
            Xt(p.params, y.params) || d.paramsSubject.next(y.params),
            (function Lt(d, p) {
              if (d.length !== p.length) return !1;
              for (let y = 0; y < d.length; ++y) if (!Xt(d[y], p[y])) return !1;
              return !0;
            })(p.url, y.url) || d.urlSubject.next(y.url),
            Xt(p.data, y.data) || d.dataSubject.next(y.data);
        } else
          (d.snapshot = d._futureSnapshot),
            d.dataSubject.next(d._futureSnapshot.data);
      }
      function fo(d, p) {
        const y =
          Xt(d.params, p.params) &&
          (function zn(d, p) {
            return (
              or(d, p) && d.every((y, g) => Xt(y.parameters, p[g].parameters))
            );
          })(d.url, p.url);
        return (
          y &&
          !(!d.parent != !p.parent) &&
          (!d.parent || fo(d.parent, p.parent))
        );
      }
      function Co(d) {
        return "string" == typeof d.title || null === d.title;
      }
      let Do = (() => {
        var d;
        class p {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = ct),
              (this.activateEvents = new a.bkB()),
              (this.deactivateEvents = new a.bkB()),
              (this.attachEvents = new a.bkB()),
              (this.detachEvents = new a.bkB()),
              (this.parentContexts = (0, a.WQX)(v)),
              (this.location = (0, a.WQX)(a.c1b)),
              (this.changeDetector = (0, a.WQX)(a.gRc)),
              (this.environmentInjector = (0, a.WQX)(a.uvJ)),
              (this.inputBinder = (0, a.WQX)(Vo, { optional: !0 })),
              (this.supportsBindingToComponentInputs = !0);
          }
          get activatedComponentRef() {
            return this.activated;
          }
          ngOnChanges(g) {
            if (g.name) {
              const { firstChange: I, previousValue: P } = g.name;
              if (I) return;
              this.isTrackedInParentContexts(P) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(P)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            var g;
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name),
              null === (g = this.inputBinder) ||
                void 0 === g ||
                g.unsubscribeFromRouteData(this);
          }
          isTrackedInParentContexts(g) {
            var I;
            return (
              (null === (I = this.parentContexts.getContext(g)) || void 0 === I
                ? void 0
                : I.outlet) === this
            );
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this),
              this.activated)
            )
              return;
            const g = this.parentContexts.getContext(this.name);
            null != g &&
              g.route &&
              (g.attachRef
                ? this.attach(g.attachRef, g.route)
                : this.activateWith(g.route, g.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new a.wOt(4012, !1);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new a.wOt(4012, !1);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new a.wOt(4012, !1);
            this.location.detach();
            const g = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(g.instance),
              g
            );
          }
          attach(g, I) {
            var P;
            (this.activated = g),
              (this._activatedRoute = I),
              this.location.insert(g.hostView),
              null === (P = this.inputBinder) ||
                void 0 === P ||
                P.bindActivatedRouteToOutletComponent(this),
              this.attachEvents.emit(g.instance);
          }
          deactivate() {
            if (this.activated) {
              const g = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(g);
            }
          }
          activateWith(g, I) {
            var P;
            if (this.isActivated) throw new a.wOt(4013, !1);
            this._activatedRoute = g;
            const U = this.location,
              Qe = g.snapshot.component,
              Pe = this.parentContexts.getOrCreateContext(this.name).children,
              gt = new Qi(g, Pe, U.injector);
            (this.activated = U.createComponent(Qe, {
              index: U.length,
              injector: gt,
              environmentInjector: null != I ? I : this.environmentInjector,
            })),
              this.changeDetector.markForCheck(),
              null === (P = this.inputBinder) ||
                void 0 === P ||
                P.bindActivatedRouteToOutletComponent(this),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          ((d = p).ɵfac = function (g) {
            return new (g || d)();
          }),
          (d.ɵdir = a.FsC({
            type: d,
            selectors: [["router-outlet"]],
            inputs: { name: "name" },
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [a.OA$],
          })),
          p
        );
      })();
      class Qi {
        constructor(p, y, g) {
          (this.route = p),
            (this.childContexts = y),
            (this.parent = g),
            (this.__ngOutletInjector = !0);
        }
        get(p, y) {
          return p === Ze
            ? this.route
            : p === v
            ? this.childContexts
            : this.parent.get(p, y);
        }
      }
      const Vo = new a.nKC("");
      function Yn(d, p, y) {
        if (y && d.shouldReuseRoute(p.value, y.value.snapshot)) {
          const g = y.value;
          g._futureSnapshot = p.value;
          const I = (function xr(d, p, y) {
            return p.children.map((g) => {
              for (const I of y.children)
                if (d.shouldReuseRoute(g.value, I.value.snapshot))
                  return Yn(d, g, I);
              return Yn(d, g);
            });
          })(d, p, y);
          return new B(g, I);
        }
        {
          if (d.shouldAttach(p.value)) {
            const P = d.retrieve(p.value);
            if (null !== P) {
              const U = P.route;
              return (
                (U.value._futureSnapshot = p.value),
                (U.children = p.children.map((Te) => Yn(d, Te))),
                U
              );
            }
          }
          const g = (function Zi(d) {
              return new Ze(
                new X.t(d.url),
                new X.t(d.params),
                new X.t(d.queryParams),
                new X.t(d.fragment),
                new X.t(d.data),
                d.outlet,
                d.component,
                d
              );
            })(p.value),
            I = p.children.map((P) => Yn(d, P));
          return new B(g, I);
        }
      }
      const Io = "ngNavigationCancelingError";
      function ho(d, p) {
        const { redirectTo: y, navigationBehaviorOptions: g } = Gn(p)
            ? { redirectTo: p, navigationBehaviorOptions: void 0 }
            : p,
          I = Bo(!1, gn.Redirect);
        return (I.url = y), (I.navigationBehaviorOptions = g), I;
      }
      function Bo(d, p) {
        const y = new Error(`NavigationCancelingError: ${d || ""}`);
        return (y[Io] = !0), (y.cancellationCode = p), y;
      }
      function Ai(d) {
        return !!d && d[Io];
      }
      let Qo = (() => {
        var d;
        class p {}
        return (
          ((d = p).ɵfac = function (g) {
            return new (g || d)();
          }),
          (d.ɵcmp = a.VBU({
            type: d,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [a.aNF],
            decls: 1,
            vars: 0,
            template: function (g, I) {
              1 & g && a.nrm(0, "router-outlet");
            },
            dependencies: [Do],
            encapsulation: 2,
          })),
          p
        );
      })();
      function Yo(d) {
        const p = d.children && d.children.map(Yo),
          y = p ? { ...d, children: p } : { ...d };
        return (
          !y.component &&
            !y.loadComponent &&
            (p || y.loadChildren) &&
            y.outlet &&
            y.outlet !== ct &&
            (y.component = Qo),
          y
        );
      }
      function Pr(d) {
        return d.outlet || ct;
      }
      function Kr(d) {
        var p;
        if (!d) return null;
        if (null !== (p = d.routeConfig) && void 0 !== p && p._injector)
          return d.routeConfig._injector;
        for (let y = d.parent; y; y = y.parent) {
          const g = y.routeConfig;
          if (null != g && g._loadedInjector) return g._loadedInjector;
          if (null != g && g._injector) return g._injector;
        }
        return null;
      }
      class Mi {
        constructor(p, y, g, I, P) {
          (this.routeReuseStrategy = p),
            (this.futureState = y),
            (this.currState = g),
            (this.forwardEvent = I),
            (this.inputBindingEnabled = P);
        }
        activate(p) {
          const y = this.futureState._root,
            g = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(y, g, p),
            tr(this.futureState.root),
            this.activateChildRoutes(y, g, p);
        }
        deactivateChildRoutes(p, y, g) {
          const I = Re(y);
          p.children.forEach((P) => {
            const U = P.value.outlet;
            this.deactivateRoutes(P, I[U], g), delete I[U];
          }),
            Object.values(I).forEach((P) => {
              this.deactivateRouteAndItsChildren(P, g);
            });
        }
        deactivateRoutes(p, y, g) {
          const I = p.value,
            P = y ? y.value : null;
          if (I === P)
            if (I.component) {
              const U = g.getContext(I.outlet);
              U && this.deactivateChildRoutes(p, y, U.children);
            } else this.deactivateChildRoutes(p, y, g);
          else P && this.deactivateRouteAndItsChildren(y, g);
        }
        deactivateRouteAndItsChildren(p, y) {
          p.value.component &&
          this.routeReuseStrategy.shouldDetach(p.value.snapshot)
            ? this.detachAndStoreRouteSubtree(p, y)
            : this.deactivateRouteAndOutlet(p, y);
        }
        detachAndStoreRouteSubtree(p, y) {
          const g = y.getContext(p.value.outlet),
            I = g && p.value.component ? g.children : y,
            P = Re(p);
          for (const U of Object.values(P))
            this.deactivateRouteAndItsChildren(U, I);
          if (g && g.outlet) {
            const U = g.outlet.detach(),
              Te = g.children.onOutletDeactivated();
            this.routeReuseStrategy.store(p.value.snapshot, {
              componentRef: U,
              route: p,
              contexts: Te,
            });
          }
        }
        deactivateRouteAndOutlet(p, y) {
          const g = y.getContext(p.value.outlet),
            I = g && p.value.component ? g.children : y,
            P = Re(p);
          for (const U of Object.values(P))
            this.deactivateRouteAndItsChildren(U, I);
          g &&
            (g.outlet &&
              (g.outlet.deactivate(), g.children.onOutletDeactivated()),
            (g.attachRef = null),
            (g.route = null));
        }
        activateChildRoutes(p, y, g) {
          const I = Re(y);
          p.children.forEach((P) => {
            this.activateRoutes(P, I[P.value.outlet], g),
              this.forwardEvent(new O(P.value.snapshot));
          }),
            p.children.length && this.forwardEvent(new x(p.value.snapshot));
        }
        activateRoutes(p, y, g) {
          const I = p.value,
            P = y ? y.value : null;
          if ((tr(I), I === P))
            if (I.component) {
              const U = g.getOrCreateContext(I.outlet);
              this.activateChildRoutes(p, y, U.children);
            } else this.activateChildRoutes(p, y, g);
          else if (I.component) {
            const U = g.getOrCreateContext(I.outlet);
            if (this.routeReuseStrategy.shouldAttach(I.snapshot)) {
              const Te = this.routeReuseStrategy.retrieve(I.snapshot);
              this.routeReuseStrategy.store(I.snapshot, null),
                U.children.onOutletReAttached(Te.contexts),
                (U.attachRef = Te.componentRef),
                (U.route = Te.route.value),
                U.outlet && U.outlet.attach(Te.componentRef, Te.route.value),
                tr(Te.route.value),
                this.activateChildRoutes(p, null, U.children);
            } else {
              const Te = Kr(I.snapshot);
              (U.attachRef = null),
                (U.route = I),
                (U.injector = Te),
                U.outlet && U.outlet.activateWith(I, U.injector),
                this.activateChildRoutes(p, null, U.children);
            }
          } else this.activateChildRoutes(p, null, g);
        }
      }
      class Ti {
        constructor(p) {
          (this.path = p), (this.route = this.path[this.path.length - 1]);
        }
      }
      class mi {
        constructor(p, y) {
          (this.component = p), (this.route = y);
        }
      }
      function vi(d, p, y) {
        const g = d._root;
        return Zo(g, p ? p._root : null, y, [g.value]);
      }
      function Po(d, p) {
        const y = Symbol(),
          g = p.get(d, y);
        return g === y
          ? "function" != typeof d || (0, a.LfX)(d)
            ? p.get(d)
            : d
          : g;
      }
      function Zo(
        d,
        p,
        y,
        g,
        I = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const P = Re(p);
        return (
          d.children.forEach((U) => {
            (function ts(
              d,
              p,
              y,
              g,
              I = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const P = d.value,
                U = p ? p.value : null,
                Te = y ? y.getContext(d.value.outlet) : null;
              if (U && P.routeConfig === U.routeConfig) {
                const Qe = (function w(d, p, y) {
                  if ("function" == typeof y) return y(d, p);
                  switch (y) {
                    case "pathParamsChange":
                      return !or(d.url, p.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !or(d.url, p.url) || !Xt(d.queryParams, p.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !fo(d, p) || !Xt(d.queryParams, p.queryParams);
                    default:
                      return !fo(d, p);
                  }
                })(U, P, P.routeConfig.runGuardsAndResolvers);
                Qe
                  ? I.canActivateChecks.push(new Ti(g))
                  : ((P.data = U.data), (P._resolvedData = U._resolvedData)),
                  Zo(d, p, P.component ? (Te ? Te.children : null) : y, g, I),
                  Qe &&
                    Te &&
                    Te.outlet &&
                    Te.outlet.isActivated &&
                    I.canDeactivateChecks.push(new mi(Te.outlet.component, U));
              } else
                U && C(p, Te, I),
                  I.canActivateChecks.push(new Ti(g)),
                  Zo(
                    d,
                    null,
                    P.component ? (Te ? Te.children : null) : y,
                    g,
                    I
                  );
            })(U, P[U.value.outlet], y, g.concat([U.value]), I),
              delete P[U.value.outlet];
          }),
          Object.entries(P).forEach(([U, Te]) => C(Te, y.getContext(U), I)),
          I
        );
      }
      function C(d, p, y) {
        const g = Re(d),
          I = d.value;
        Object.entries(g).forEach(([P, U]) => {
          C(U, I.component ? (p ? p.children.getContext(P) : null) : p, y);
        }),
          y.canDeactivateChecks.push(
            new mi(
              I.component && p && p.outlet && p.outlet.isActivated
                ? p.outlet.component
                : null,
              I
            )
          );
      }
      function k(d) {
        return "function" == typeof d;
      }
      function po(d) {
        return (
          d instanceof Ne || "EmptyError" === (null == d ? void 0 : d.name)
        );
      }
      const qr = Symbol("INITIAL_VALUE");
      function Eo() {
        return (0, qe.n)((d) =>
          (0, Ie.z)(
            d.map((p) =>
              p.pipe(
                vt(1),
                (function jt(...d) {
                  const p = (0, ue.lI)(d);
                  return (0, Me.N)((y, g) => {
                    (p ? ke(d, y, p) : ke(d, y)).subscribe(g);
                  });
                })(qr)
              )
            )
          ).pipe(
            (0, Ge.T)((p) => {
              for (const y of p)
                if (!0 !== y) {
                  if (y === qr) return qr;
                  if (!1 === y || y instanceof xt) return y;
                }
              return !0;
            }),
            (0, je.p)((p) => p !== qr),
            vt(1)
          )
        );
      }
      function Zn(d) {
        return (0, we.F)(
          ge((p) => {
            if (Gn(p)) throw ho(0, p);
          }),
          (0, Ge.T)((p) => !0 === p)
        );
      }
      class Fr {
        constructor(p) {
          this.segmentGroup = p || null;
        }
      }
      class pr extends Error {
        constructor(p) {
          super(), (this.urlTree = p);
        }
      }
      function Jo(d) {
        return Ye(new Fr(d));
      }
      class Vl {
        constructor(p, y) {
          (this.urlSerializer = p), (this.urlTree = y);
        }
        lineralizeSegments(p, y) {
          let g = [],
            I = y.root;
          for (;;) {
            if (((g = g.concat(I.segments)), 0 === I.numberOfChildren))
              return (0, ae.of)(g);
            if (I.numberOfChildren > 1 || !I.children[ct])
              return Ye(new a.wOt(4e3, !1));
            I = I.children[ct];
          }
        }
        applyRedirectCommands(p, y, g) {
          const I = this.applyRedirectCreateUrlTree(
            y,
            this.urlSerializer.parse(y),
            p,
            g
          );
          if (y.startsWith("/")) throw new pr(I);
          return I;
        }
        applyRedirectCreateUrlTree(p, y, g, I) {
          const P = this.createSegmentGroup(p, y.root, g, I);
          return new xt(
            P,
            this.createQueryParams(y.queryParams, this.urlTree.queryParams),
            y.fragment
          );
        }
        createQueryParams(p, y) {
          const g = {};
          return (
            Object.entries(p).forEach(([I, P]) => {
              if ("string" == typeof P && P.startsWith(":")) {
                const Te = P.substring(1);
                g[I] = y[Te];
              } else g[I] = P;
            }),
            g
          );
        }
        createSegmentGroup(p, y, g, I) {
          const P = this.createSegments(p, y.segments, g, I);
          let U = {};
          return (
            Object.entries(y.children).forEach(([Te, Qe]) => {
              U[Te] = this.createSegmentGroup(p, Qe, g, I);
            }),
            new Nt(P, U)
          );
        }
        createSegments(p, y, g, I) {
          return y.map((P) =>
            P.path.startsWith(":")
              ? this.findPosParam(p, P, I)
              : this.findOrReturn(P, g)
          );
        }
        findPosParam(p, y, g) {
          const I = g[y.path.substring(1)];
          if (!I) throw new a.wOt(4001, !1);
          return I;
        }
        findOrReturn(p, y) {
          let g = 0;
          for (const I of y) {
            if (I.path === p.path) return y.splice(g), I;
            g++;
          }
          return p;
        }
      }
      const ei = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function rs(d, p, y, g, I) {
        const P = ti(d, p, y);
        return P.matched
          ? ((g = (function _r(d, p) {
              var y;
              return (
                d.providers &&
                  !d._injector &&
                  (d._injector = (0, a.Ol2)(
                    d.providers,
                    p,
                    `Route: ${d.path}`
                  )),
                null !== (y = d._injector) && void 0 !== y ? y : p
              );
            })(p, g)),
            (function nr(d, p, y, g) {
              const I = p.canMatch;
              if (!I || 0 === I.length) return (0, ae.of)(!0);
              const P = I.map((U) => {
                const Te = Po(U, d);
                return mt(
                  (function Ur(d) {
                    return d && k(d.canMatch);
                  })(Te)
                    ? Te.canMatch(p, y)
                    : (0, a.N4e)(d, () => Te(p, y))
                );
              });
              return (0, ae.of)(P).pipe(Eo(), Zn());
            })(g, p, y).pipe((0, Ge.T)((U) => (!0 === U ? P : { ...ei }))))
          : (0, ae.of)(P);
      }
      function ti(d, p, y) {
        var g, I;
        if ("**" === p.path)
          return (function ws(d) {
            return {
              matched: !0,
              parameters: d.length > 0 ? dt(d).parameters : {},
              consumedSegments: d,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(y);
        if ("" === p.path)
          return "full" === p.pathMatch && (d.hasChildren() || y.length > 0)
            ? { ...ei }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: y,
                parameters: {},
                positionalParamSegments: {},
              };
        const U = (p.matcher || at)(y, d, p);
        if (!U) return { ...ei };
        const Te = {};
        Object.entries(
          null !== (g = U.posParams) && void 0 !== g ? g : {}
        ).forEach(([Pe, gt]) => {
          Te[Pe] = gt.path;
        });
        const Qe =
          U.consumed.length > 0
            ? { ...Te, ...U.consumed[U.consumed.length - 1].parameters }
            : Te;
        return {
          matched: !0,
          consumedSegments: U.consumed,
          remainingSegments: y.slice(U.consumed.length),
          parameters: Qe,
          positionalParamSegments:
            null !== (I = U.posParams) && void 0 !== I ? I : {},
        };
      }
      function Ri(d, p, y, g) {
        return y.length > 0 &&
          (function Bl(d, p, y) {
            return y.some((g) => Ni(d, p, g) && Pr(g) !== ct);
          })(d, y, g)
          ? {
              segmentGroup: new Nt(p, Ms(g, new Nt(y, d.children))),
              slicedSegments: [],
            }
          : 0 === y.length &&
            (function Ts(d, p, y) {
              return y.some((g) => Ni(d, p, g));
            })(d, y, g)
          ? {
              segmentGroup: new Nt(d.segments, Eu(d, y, g, d.children)),
              slicedSegments: y,
            }
          : {
              segmentGroup: new Nt(d.segments, d.children),
              slicedSegments: y,
            };
      }
      function Eu(d, p, y, g) {
        const I = {};
        for (const P of y)
          if (Ni(d, p, P) && !g[Pr(P)]) {
            const U = new Nt([], {});
            I[Pr(P)] = U;
          }
        return { ...g, ...I };
      }
      function Ms(d, p) {
        const y = {};
        y[ct] = p;
        for (const g of d)
          if ("" === g.path && Pr(g) !== ct) {
            const I = new Nt([], {});
            y[Pr(g)] = I;
          }
        return y;
      }
      function Ni(d, p, y) {
        return (
          (!(d.hasChildren() || p.length > 0) || "full" !== y.pathMatch) &&
          "" === y.path
        );
      }
      class Ma {}
      class Ta {
        constructor(p, y, g, I, P, U, Te) {
          (this.injector = p),
            (this.configLoader = y),
            (this.rootComponentType = g),
            (this.config = I),
            (this.urlTree = P),
            (this.paramsInheritanceStrategy = U),
            (this.urlSerializer = Te),
            (this.applyRedirects = new Vl(this.urlSerializer, this.urlTree)),
            (this.absoluteRedirectCount = 0),
            (this.allowRedirects = !0);
        }
        noMatchError(p) {
          return new a.wOt(4002, `'${p.segmentGroup}'`);
        }
        recognize() {
          const p = Ri(this.urlTree.root, [], [], this.config).segmentGroup;
          return this.match(p).pipe(
            (0, Ge.T)((y) => {
              const g = new Ln(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  ct,
                  this.rootComponentType,
                  null,
                  {}
                ),
                I = new B(g, y),
                P = new un("", I),
                U = (function dr(d, p, y = null, g = null) {
                  return Or(br(d), p, y, g);
                })(g, [], this.urlTree.queryParams, this.urlTree.fragment);
              return (
                (U.queryParams = this.urlTree.queryParams),
                (P.url = this.urlSerializer.serialize(U)),
                this.inheritParamsAndData(P._root, null),
                { state: P, tree: U }
              );
            })
          );
        }
        match(p) {
          return this.processSegmentGroup(
            this.injector,
            this.config,
            p,
            ct
          ).pipe(
            me((g) => {
              if (g instanceof pr)
                return (this.urlTree = g.urlTree), this.match(g.urlTree.root);
              throw g instanceof Fr ? this.noMatchError(g) : g;
            })
          );
        }
        inheritParamsAndData(p, y) {
          const g = p.value,
            I = sn(g, y, this.paramsInheritanceStrategy);
          (g.params = Object.freeze(I.params)),
            (g.data = Object.freeze(I.data)),
            p.children.forEach((P) => this.inheritParamsAndData(P, g));
        }
        processSegmentGroup(p, y, g, I) {
          return 0 === g.segments.length && g.hasChildren()
            ? this.processChildren(p, y, g)
            : this.processSegment(p, y, g, g.segments, I, !0).pipe(
                (0, Ge.T)((P) => (P instanceof B ? [P] : []))
              );
        }
        processChildren(p, y, g) {
          const I = [];
          for (const P of Object.keys(g.children))
            "primary" === P ? I.unshift(P) : I.push(P);
          return (0, G.H)(I).pipe(
            be((P) => {
              const U = g.children[P],
                Te = (function gi(d, p) {
                  const y = d.filter((g) => Pr(g) === p);
                  return y.push(...d.filter((g) => Pr(g) !== p)), y;
                })(y, P);
              return this.processSegmentGroup(p, Te, U, P);
            }),
            (function Tt(d, p) {
              return (0, Me.N)(
                (function ft(d, p, y, g, I) {
                  return (P, U) => {
                    let Te = y,
                      Qe = p,
                      Pe = 0;
                    P.subscribe(
                      (0, he._)(
                        U,
                        (gt) => {
                          const Ut = Pe++;
                          (Qe = Te ? d(Qe, gt, Ut) : ((Te = !0), gt)),
                            g && U.next(Qe);
                        },
                        I &&
                          (() => {
                            Te && U.next(Qe), U.complete();
                          })
                      )
                    );
                  };
                })(d, p, arguments.length >= 2, !0)
              );
            })((P, U) => (P.push(...U), P)),
            ee(null),
            (function It(d, p) {
              const y = arguments.length >= 2;
              return (g) =>
                g.pipe(
                  d ? (0, je.p)((I, P) => d(I, P, g)) : De.D,
                  lt(1),
                  y ? ee(p) : K(() => new Ne())
                );
            })(),
            (0, ne.Z)((P) => {
              if (null === P) return Jo(g);
              const U = Qr(P);
              return (
                (function Rs(d) {
                  d.sort((p, y) =>
                    p.value.outlet === ct
                      ? -1
                      : y.value.outlet === ct
                      ? 1
                      : p.value.outlet.localeCompare(y.value.outlet)
                  );
                })(U),
                (0, ae.of)(U)
              );
            })
          );
        }
        processSegment(p, y, g, I, P, U) {
          return (0, G.H)(y).pipe(
            be((Te) => {
              var Qe;
              return this.processSegmentAgainstRoute(
                null !== (Qe = Te._injector) && void 0 !== Qe ? Qe : p,
                y,
                Te,
                g,
                I,
                P,
                U
              ).pipe(
                me((Pe) => {
                  if (Pe instanceof Fr) return (0, ae.of)(null);
                  throw Pe;
                })
              );
            }),
            re((Te) => !!Te),
            me((Te) => {
              if (po(Te))
                return (function Uo(d, p, y) {
                  return 0 === p.length && !d.children[y];
                })(g, I, P)
                  ? (0, ae.of)(new Ma())
                  : Jo(g);
              throw Te;
            })
          );
        }
        processSegmentAgainstRoute(p, y, g, I, P, U, Te) {
          return (function wa(d, p, y, g) {
            return (
              !!(Pr(d) === g || (g !== ct && Ni(p, y, d))) &&
              ti(p, d, y).matched
            );
          })(g, I, P, U)
            ? void 0 === g.redirectTo
              ? this.matchSegmentAgainstRoute(p, I, g, P, U)
              : this.allowRedirects && Te
              ? this.expandSegmentAgainstRouteUsingRedirect(p, I, y, g, P, U)
              : Jo(I)
            : Jo(I);
        }
        expandSegmentAgainstRouteUsingRedirect(p, y, g, I, P, U) {
          const {
            matched: Te,
            consumedSegments: Qe,
            positionalParamSegments: Pe,
            remainingSegments: gt,
          } = ti(y, I, P);
          if (!Te) return Jo(y);
          I.redirectTo.startsWith("/") &&
            (this.absoluteRedirectCount++,
            this.absoluteRedirectCount > 31 && (this.allowRedirects = !1));
          const Ut = this.applyRedirects.applyRedirectCommands(
            Qe,
            I.redirectTo,
            Pe
          );
          return this.applyRedirects
            .lineralizeSegments(I, Ut)
            .pipe(
              (0, ne.Z)((Vn) =>
                this.processSegment(p, g, y, Vn.concat(gt), U, !1)
              )
            );
        }
        matchSegmentAgainstRoute(p, y, g, I, P) {
          const U = rs(y, g, I, p);
          return (
            "**" === g.path && (y.children = {}),
            U.pipe(
              (0, qe.n)((Te) => {
                var Qe;
                return Te.matched
                  ? ((p =
                      null !== (Qe = g._injector) && void 0 !== Qe ? Qe : p),
                    this.getChildConfig(p, g, I).pipe(
                      (0, qe.n)(({ routes: Pe }) => {
                        var gt, Ut, Vn;
                        const Dn =
                            null !== (gt = g._loadedInjector) && void 0 !== gt
                              ? gt
                              : p,
                          {
                            consumedSegments: kr,
                            remainingSegments: Go,
                            parameters: ls,
                          } = Te,
                          Zr = new Ln(
                            kr,
                            ls,
                            Object.freeze({ ...this.urlTree.queryParams }),
                            this.urlTree.fragment,
                            (function Ns(d) {
                              return d.data || {};
                            })(g),
                            Pr(g),
                            null !==
                              (Ut =
                                null !== (Vn = g.component) && void 0 !== Vn
                                  ? Vn
                                  : g._loadedComponent) && void 0 !== Ut
                              ? Ut
                              : null,
                            g,
                            (function Ul(d) {
                              return d.resolve || {};
                            })(g)
                          ),
                          { segmentGroup: Vi, slicedSegments: Bi } = Ri(
                            y,
                            kr,
                            Go,
                            Pe
                          );
                        if (0 === Bi.length && Vi.hasChildren())
                          return this.processChildren(Dn, Pe, Vi).pipe(
                            (0, Ge.T)((cs) =>
                              null === cs ? null : new B(Zr, cs)
                            )
                          );
                        if (0 === Pe.length && 0 === Bi.length)
                          return (0, ae.of)(new B(Zr, []));
                        const Jl = Pr(g) === P;
                        return this.processSegment(
                          Dn,
                          Pe,
                          Vi,
                          Bi,
                          Jl ? ct : P,
                          !0
                        ).pipe(
                          (0, Ge.T)(
                            (cs) => new B(Zr, cs instanceof B ? [cs] : [])
                          )
                        );
                      })
                    ))
                  : Jo(y);
              })
            )
          );
        }
        getChildConfig(p, y, g) {
          return y.children
            ? (0, ae.of)({ routes: y.children, injector: p })
            : y.loadChildren
            ? void 0 !== y._loadedRoutes
              ? (0, ae.of)({
                  routes: y._loadedRoutes,
                  injector: y._loadedInjector,
                })
              : (function nn(d, p, y, g) {
                  const I = p.canLoad;
                  if (void 0 === I || 0 === I.length) return (0, ae.of)(!0);
                  const P = I.map((U) => {
                    const Te = Po(U, d);
                    return mt(
                      (function H(d) {
                        return d && k(d.canLoad);
                      })(Te)
                        ? Te.canLoad(p, y)
                        : (0, a.N4e)(d, () => Te(p, y))
                    );
                  });
                  return (0, ae.of)(P).pipe(Eo(), Zn());
                })(p, y, g).pipe(
                  (0, ne.Z)((I) =>
                    I
                      ? this.configLoader.loadChildren(p, y).pipe(
                          ge((P) => {
                            (y._loadedRoutes = P.routes),
                              (y._loadedInjector = P.injector);
                          })
                        )
                      : (function $l(d) {
                          return Ye(Bo(!1, gn.GuardRejected));
                        })()
                  )
                )
            : (0, ae.of)({ routes: [], injector: p });
        }
      }
      function Oi(d) {
        const p = d.value.routeConfig;
        return p && "" === p.path;
      }
      function Qr(d) {
        const p = [],
          y = new Set();
        for (const g of d) {
          if (!Oi(g)) {
            p.push(g);
            continue;
          }
          const I = p.find((P) => g.value.routeConfig === P.value.routeConfig);
          void 0 !== I ? (I.children.push(...g.children), y.add(I)) : p.push(g);
        }
        for (const g of y) {
          const I = Qr(g.children);
          p.push(new B(g.value, I));
        }
        return p.filter((g) => !y.has(g));
      }
      function ni(d) {
        const p = d.children.map((y) => ni(y)).flat();
        return [d, ...p];
      }
      function Pi(d) {
        return (0, qe.n)((p) => {
          const y = d(p);
          return y ? (0, G.H)(y).pipe((0, Ge.T)(() => p)) : (0, ae.of)(p);
        });
      }
      let jo = (() => {
          var d;
          class p {
            buildTitle(g) {
              let I,
                P = g.root;
              for (; void 0 !== P; ) {
                var U;
                (I =
                  null !== (U = this.getResolvedTitleForRoute(P)) &&
                  void 0 !== U
                    ? U
                    : I),
                  (P = P.children.find((Te) => Te.outlet === ct));
              }
              return I;
            }
            getResolvedTitleForRoute(g) {
              return g.data[Ue];
            }
          }
          return (
            ((d = p).ɵfac = function (g) {
              return new (g || d)();
            }),
            (d.ɵprov = a.jDH({
              token: d,
              factory: () => (0, a.WQX)(Na),
              providedIn: "root",
            })),
            p
          );
        })(),
        Na = (() => {
          var d;
          class p extends jo {
            constructor(g) {
              super(), (this.title = g);
            }
            updateTitle(g) {
              const I = this.buildTitle(g);
              void 0 !== I && this.title.setTitle(I);
            }
          }
          return (
            ((d = p).ɵfac = function (g) {
              return new (g || d)(a.KVO(an.hE));
            }),
            (d.ɵprov = a.jDH({
              token: d,
              factory: d.ɵfac,
              providedIn: "root",
            })),
            p
          );
        })();
      const Ho = new a.nKC("", { providedIn: "root", factory: () => ({}) }),
        h = new a.nKC("");
      let A = (() => {
        var d;
        class p {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = (0, a.WQX)(a.Ql9));
          }
          loadComponent(g) {
            if (this.componentLoaders.get(g))
              return this.componentLoaders.get(g);
            if (g._loadedComponent) return (0, ae.of)(g._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(g);
            const I = mt(g.loadComponent()).pipe(
                (0, Ge.T)($),
                ge((U) => {
                  this.onLoadEndListener && this.onLoadEndListener(g),
                    (g._loadedComponent = U);
                }),
                Ot(() => {
                  this.componentLoaders.delete(g);
                })
              ),
              P = new Se(I, () => new Ce.B()).pipe(Y());
            return this.componentLoaders.set(g, P), P;
          }
          loadChildren(g, I) {
            if (this.childrenLoaders.get(I)) return this.childrenLoaders.get(I);
            if (I._loadedRoutes)
              return (0, ae.of)({
                routes: I._loadedRoutes,
                injector: I._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(I);
            const U = (function z(d, p, y, g) {
                return mt(d.loadChildren()).pipe(
                  (0, Ge.T)($),
                  (0, ne.Z)((I) =>
                    I instanceof a.Co$ || Array.isArray(I)
                      ? (0, ae.of)(I)
                      : (0, G.H)(p.compileModuleAsync(I))
                  ),
                  (0, Ge.T)((I) => {
                    g && g(d);
                    let P,
                      U,
                      Te = !1;
                    return (
                      Array.isArray(I)
                        ? ((U = I), !0)
                        : ((P = I.create(y).injector),
                          (U = P.get(h, [], {
                            optional: !0,
                            self: !0,
                          }).flat())),
                      { routes: U.map(Yo), injector: P }
                    );
                  })
                );
              })(I, this.compiler, g, this.onLoadEndListener).pipe(
                Ot(() => {
                  this.childrenLoaders.delete(I);
                })
              ),
              Te = new Se(U, () => new Ce.B()).pipe(Y());
            return this.childrenLoaders.set(I, Te), Te;
          }
        }
        return (
          ((d = p).ɵfac = function (g) {
            return new (g || d)();
          }),
          (d.ɵprov = a.jDH({ token: d, factory: d.ɵfac, providedIn: "root" })),
          p
        );
      })();
      function $(d) {
        return (function b(d) {
          return d && "object" == typeof d && "default" in d;
        })(d)
          ? d.default
          : d;
      }
      let Q = (() => {
          var d;
          class p {}
          return (
            ((d = p).ɵfac = function (g) {
              return new (g || d)();
            }),
            (d.ɵprov = a.jDH({
              token: d,
              factory: () => (0, a.WQX)(Be),
              providedIn: "root",
            })),
            p
          );
        })(),
        Be = (() => {
          var d;
          class p {
            shouldProcessUrl(g) {
              return !0;
            }
            extract(g) {
              return g;
            }
            merge(g, I) {
              return g;
            }
          }
          return (
            ((d = p).ɵfac = function (g) {
              return new (g || d)();
            }),
            (d.ɵprov = a.jDH({
              token: d,
              factory: d.ɵfac,
              providedIn: "root",
            })),
            p
          );
        })();
      const st = new a.nKC("");
      let Wt = (() => {
        var d;
        class p {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new Ce.B()),
              (this.transitionAbortSubject = new Ce.B()),
              (this.configLoader = (0, a.WQX)(A)),
              (this.environmentInjector = (0, a.WQX)(a.uvJ)),
              (this.urlSerializer = (0, a.WQX)(Un)),
              (this.rootContexts = (0, a.WQX)(v)),
              (this.location = (0, a.WQX)(We.aZ)),
              (this.inputBindingEnabled =
                null !== (0, a.WQX)(Vo, { optional: !0 })),
              (this.titleStrategy = (0, a.WQX)(jo)),
              (this.options = (0, a.WQX)(Ho, { optional: !0 }) || {}),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy || "emptyOnly"),
              (this.urlHandlingStrategy = (0, a.WQX)(Q)),
              (this.createViewTransition = (0, a.WQX)(st, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => (0, ae.of)(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = (P) =>
                this.events.next(new oo(P))),
              (this.configLoader.onLoadStartListener = (P) =>
                this.events.next(new zt(P)));
          }
          complete() {
            var g;
            null === (g = this.transitions) || void 0 === g || g.complete();
          }
          handleNavigationRequest(g) {
            var I;
            const P = ++this.navigationId;
            null === (I = this.transitions) ||
              void 0 === I ||
              I.next({ ...this.transitions.value, ...g, id: P });
          }
          setupNavigations(g, I, P) {
            return (
              (this.transitions = new X.t({
                id: 0,
                currentUrlTree: I,
                currentRawUrl: I,
                extractedUrl: this.urlHandlingStrategy.extract(I),
                urlAfterRedirects: this.urlHandlingStrategy.extract(I),
                rawUrl: I,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: Tn,
                restoredState: null,
                currentSnapshot: P.snapshot,
                targetSnapshot: null,
                currentRouterState: P,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                (0, je.p)((U) => 0 !== U.id),
                (0, Ge.T)((U) => ({
                  ...U,
                  extractedUrl: this.urlHandlingStrategy.extract(U.rawUrl),
                })),
                (0, qe.n)((U) => {
                  let Te = !1,
                    Qe = !1;
                  return (0, ae.of)(U).pipe(
                    (0, qe.n)((Pe) => {
                      var gt;
                      if (this.navigationId > U.id)
                        return (
                          this.cancelNavigationTransition(
                            U,
                            "",
                            gn.SupersededByNewNavigation
                          ),
                          Ae
                        );
                      (this.currentTransition = U),
                        (this.currentNavigation = {
                          id: Pe.id,
                          initialUrl: Pe.rawUrl,
                          extractedUrl: Pe.extractedUrl,
                          trigger: Pe.source,
                          extras: Pe.extras,
                          previousNavigation: this.lastSuccessfulNavigation
                            ? {
                                ...this.lastSuccessfulNavigation,
                                previousNavigation: null,
                              }
                            : null,
                        });
                      const Ut =
                          !g.navigated ||
                          this.isUpdatingInternalState() ||
                          this.isUpdatedBrowserUrl(),
                        Vn =
                          null !== (gt = Pe.extras.onSameUrlNavigation) &&
                          void 0 !== gt
                            ? gt
                            : g.onSameUrlNavigation;
                      if (!Ut && "reload" !== Vn) {
                        const Dn = "";
                        return (
                          this.events.next(
                            new pt(
                              Pe.id,
                              this.urlSerializer.serialize(Pe.rawUrl),
                              Dn,
                              _n.IgnoredSameUrlNavigation
                            )
                          ),
                          Pe.resolve(null),
                          Ae
                        );
                      }
                      if (this.urlHandlingStrategy.shouldProcessUrl(Pe.rawUrl))
                        return (0, ae.of)(Pe).pipe(
                          (0, qe.n)((Dn) => {
                            var kr, Go;
                            const ls =
                              null === (kr = this.transitions) || void 0 === kr
                                ? void 0
                                : kr.getValue();
                            return (
                              this.events.next(
                                new yr(
                                  Dn.id,
                                  this.urlSerializer.serialize(Dn.extractedUrl),
                                  Dn.source,
                                  Dn.restoredState
                                )
                              ),
                              ls !==
                              (null === (Go = this.transitions) || void 0 === Go
                                ? void 0
                                : Go.getValue())
                                ? Ae
                                : Promise.resolve(Dn)
                            );
                          }),
                          (function jl(d, p, y, g, I, P) {
                            return (0, ne.Z)((U) =>
                              (function os(d, p, y, g, I, P, U = "emptyOnly") {
                                return new Ta(d, p, y, g, I, U, P).recognize();
                              })(d, p, y, g, U.extractedUrl, I, P).pipe(
                                (0, Ge.T)(({ state: Te, tree: Qe }) => ({
                                  ...U,
                                  targetSnapshot: Te,
                                  urlAfterRedirects: Qe,
                                }))
                              )
                            );
                          })(
                            this.environmentInjector,
                            this.configLoader,
                            this.rootComponentType,
                            g.config,
                            this.urlSerializer,
                            this.paramsInheritanceStrategy
                          ),
                          ge((Dn) => {
                            (U.targetSnapshot = Dn.targetSnapshot),
                              (U.urlAfterRedirects = Dn.urlAfterRedirects),
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: Dn.urlAfterRedirects,
                              });
                            const kr = new Xn(
                              Dn.id,
                              this.urlSerializer.serialize(Dn.extractedUrl),
                              this.urlSerializer.serialize(
                                Dn.urlAfterRedirects
                              ),
                              Dn.targetSnapshot
                            );
                            this.events.next(kr);
                          })
                        );
                      if (
                        Ut &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          Pe.currentRawUrl
                        )
                      ) {
                        const {
                            id: Dn,
                            extractedUrl: kr,
                            source: Go,
                            restoredState: ls,
                            extras: Zr,
                          } = Pe,
                          Vi = new yr(
                            Dn,
                            this.urlSerializer.serialize(kr),
                            Go,
                            ls
                          );
                        this.events.next(Vi);
                        const Bi = tt(this.rootComponentType).snapshot;
                        return (
                          (this.currentTransition = U =
                            {
                              ...Pe,
                              targetSnapshot: Bi,
                              urlAfterRedirects: kr,
                              extras: {
                                ...Zr,
                                skipLocationChange: !1,
                                replaceUrl: !1,
                              },
                            }),
                          (this.currentNavigation.finalUrl = kr),
                          (0, ae.of)(U)
                        );
                      }
                      {
                        const Dn = "";
                        return (
                          this.events.next(
                            new pt(
                              Pe.id,
                              this.urlSerializer.serialize(Pe.extractedUrl),
                              Dn,
                              _n.IgnoredByUrlHandlingStrategy
                            )
                          ),
                          Pe.resolve(null),
                          Ae
                        );
                      }
                    }),
                    ge((Pe) => {
                      const gt = new Vr(
                        Pe.id,
                        this.urlSerializer.serialize(Pe.extractedUrl),
                        this.urlSerializer.serialize(Pe.urlAfterRedirects),
                        Pe.targetSnapshot
                      );
                      this.events.next(gt);
                    }),
                    (0, Ge.T)(
                      (Pe) => (
                        (this.currentTransition = U =
                          {
                            ...Pe,
                            guards: vi(
                              Pe.targetSnapshot,
                              Pe.currentSnapshot,
                              this.rootContexts
                            ),
                          }),
                        U
                      )
                    ),
                    (function Es(d, p) {
                      return (0, ne.Z)((y) => {
                        const {
                          targetSnapshot: g,
                          currentSnapshot: I,
                          guards: {
                            canActivateChecks: P,
                            canDeactivateChecks: U,
                          },
                        } = y;
                        return 0 === U.length && 0 === P.length
                          ? (0, ae.of)({ ...y, guardsResult: !0 })
                          : (function Ia(d, p, y, g) {
                              return (0, G.H)(d).pipe(
                                (0, ne.Z)((I) =>
                                  (function ns(d, p, y, g, I) {
                                    const P =
                                      p && p.routeConfig
                                        ? p.routeConfig.canDeactivate
                                        : null;
                                    if (!P || 0 === P.length)
                                      return (0, ae.of)(!0);
                                    const U = P.map((Te) => {
                                      var Qe;
                                      const Pe =
                                          null !== (Qe = Kr(p)) && void 0 !== Qe
                                            ? Qe
                                            : I,
                                        gt = Po(Te, Pe);
                                      return mt(
                                        (function Pt(d) {
                                          return d && k(d.canDeactivate);
                                        })(gt)
                                          ? gt.canDeactivate(d, p, y, g)
                                          : (0, a.N4e)(Pe, () => gt(d, p, y, g))
                                      ).pipe(re());
                                    });
                                    return (0, ae.of)(U).pipe(Eo());
                                  })(I.component, I.route, y, p, g)
                                ),
                                re((I) => !0 !== I, !0)
                              );
                            })(U, g, I, d).pipe(
                              (0, ne.Z)((Te) =>
                                Te &&
                                (function S(d) {
                                  return "boolean" == typeof d;
                                })(Te)
                                  ? (function Ll(d, p, y, g) {
                                      return (0, G.H)(p).pipe(
                                        be((I) =>
                                          ke(
                                            (function As(d, p) {
                                              return (
                                                null !== d && p && p(new L(d)),
                                                (0, ae.of)(!0)
                                              );
                                            })(I.route.parent, g),
                                            (function Ea(d, p) {
                                              return (
                                                null !== d && p && p(new Z(d)),
                                                (0, ae.of)(!0)
                                              );
                                            })(I.route, g),
                                            (function Sa(d, p, y) {
                                              const g = p[p.length - 1],
                                                P = p
                                                  .slice(0, p.length - 1)
                                                  .reverse()
                                                  .map((U) =>
                                                    (function es(d) {
                                                      const p = d.routeConfig
                                                        ? d.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return p && 0 !== p.length
                                                        ? { node: d, guards: p }
                                                        : null;
                                                    })(U)
                                                  )
                                                  .filter((U) => null !== U)
                                                  .map((U) =>
                                                    _e(() => {
                                                      const Te = U.guards.map(
                                                        (Qe) => {
                                                          var Pe;
                                                          const gt =
                                                              null !==
                                                                (Pe = Kr(
                                                                  U.node
                                                                )) &&
                                                              void 0 !== Pe
                                                                ? Pe
                                                                : y,
                                                            Ut = Po(Qe, gt);
                                                          return mt(
                                                            (function wt(d) {
                                                              return (
                                                                d &&
                                                                k(
                                                                  d.canActivateChild
                                                                )
                                                              );
                                                            })(Ut)
                                                              ? Ut.canActivateChild(
                                                                  g,
                                                                  d
                                                                )
                                                              : (0, a.N4e)(
                                                                  gt,
                                                                  () => Ut(g, d)
                                                                )
                                                          ).pipe(re());
                                                        }
                                                      );
                                                      return (0, ae.of)(
                                                        Te
                                                      ).pipe(Eo());
                                                    })
                                                  );
                                              return (0, ae.of)(P).pipe(Eo());
                                            })(d, I.path, y),
                                            (function Aa(d, p, y) {
                                              const g = p.routeConfig
                                                ? p.routeConfig.canActivate
                                                : null;
                                              if (!g || 0 === g.length)
                                                return (0, ae.of)(!0);
                                              const I = g.map((P) =>
                                                _e(() => {
                                                  var U;
                                                  const Te =
                                                      null !== (U = Kr(p)) &&
                                                      void 0 !== U
                                                        ? U
                                                        : y,
                                                    Qe = Po(P, Te);
                                                  return mt(
                                                    (function rt(d) {
                                                      return (
                                                        d && k(d.canActivate)
                                                      );
                                                    })(Qe)
                                                      ? Qe.canActivate(p, d)
                                                      : (0, a.N4e)(Te, () =>
                                                          Qe(p, d)
                                                        )
                                                  ).pipe(re());
                                                })
                                              );
                                              return (0, ae.of)(I).pipe(Eo());
                                            })(d, I.route, y)
                                          )
                                        ),
                                        re((I) => !0 !== I, !0)
                                      );
                                    })(g, P, d, p)
                                  : (0, ae.of)(Te)
                              ),
                              (0, Ge.T)((Te) => ({ ...y, guardsResult: Te }))
                            );
                      });
                    })(this.environmentInjector, (Pe) => this.events.next(Pe)),
                    ge((Pe) => {
                      if (
                        ((U.guardsResult = Pe.guardsResult),
                        Gn(Pe.guardsResult))
                      )
                        throw ho(0, Pe.guardsResult);
                      const gt = new No(
                        Pe.id,
                        this.urlSerializer.serialize(Pe.extractedUrl),
                        this.urlSerializer.serialize(Pe.urlAfterRedirects),
                        Pe.targetSnapshot,
                        !!Pe.guardsResult
                      );
                      this.events.next(gt);
                    }),
                    (0, je.p)(
                      (Pe) =>
                        !!Pe.guardsResult ||
                        (this.cancelNavigationTransition(
                          Pe,
                          "",
                          gn.GuardRejected
                        ),
                        !1)
                    ),
                    Pi((Pe) => {
                      if (Pe.guards.canActivateChecks.length)
                        return (0, ae.of)(Pe).pipe(
                          ge((gt) => {
                            const Ut = new uo(
                              gt.id,
                              this.urlSerializer.serialize(gt.extractedUrl),
                              this.urlSerializer.serialize(
                                gt.urlAfterRedirects
                              ),
                              gt.targetSnapshot
                            );
                            this.events.next(Ut);
                          }),
                          (0, qe.n)((gt) => {
                            let Ut = !1;
                            return (0, ae.of)(gt).pipe(
                              (function Ra(d, p) {
                                return (0, ne.Z)((y) => {
                                  const {
                                    targetSnapshot: g,
                                    guards: { canActivateChecks: I },
                                  } = y;
                                  if (!I.length) return (0, ae.of)(y);
                                  const P = new Set(I.map((Qe) => Qe.route)),
                                    U = new Set();
                                  for (const Qe of P)
                                    if (!U.has(Qe))
                                      for (const Pe of ni(Qe)) U.add(Pe);
                                  let Te = 0;
                                  return (0, G.H)(U).pipe(
                                    be((Qe) =>
                                      P.has(Qe)
                                        ? (function Hl(d, p, y, g) {
                                            const I = d.routeConfig,
                                              P = d._resolve;
                                            return (
                                              void 0 !==
                                                (null == I
                                                  ? void 0
                                                  : I.title) &&
                                                !Co(I) &&
                                                (P[Ue] = I.title),
                                              (function zl(d, p, y, g) {
                                                const I = cn(d);
                                                if (0 === I.length)
                                                  return (0, ae.of)({});
                                                const P = {};
                                                return (0, G.H)(I).pipe(
                                                  (0, ne.Z)((U) =>
                                                    (function Gl(d, p, y, g) {
                                                      var I;
                                                      const P =
                                                          null !==
                                                            (I = Kr(p)) &&
                                                          void 0 !== I
                                                            ? I
                                                            : g,
                                                        U = Po(d, P);
                                                      return mt(
                                                        U.resolve
                                                          ? U.resolve(p, y)
                                                          : (0, a.N4e)(P, () =>
                                                              U(p, y)
                                                            )
                                                      );
                                                    })(d[U], p, y, g).pipe(
                                                      re(),
                                                      ge((Te) => {
                                                        P[U] = Te;
                                                      })
                                                    )
                                                  ),
                                                  lt(1),
                                                  (function Rt(d) {
                                                    return (0, Ge.T)(() => d);
                                                  })(P),
                                                  me((U) =>
                                                    po(U) ? Ae : Ye(U)
                                                  )
                                                );
                                              })(P, d, p, g).pipe(
                                                (0, Ge.T)(
                                                  (U) => (
                                                    (d._resolvedData = U),
                                                    (d.data = sn(
                                                      d,
                                                      d.parent,
                                                      y
                                                    ).resolve),
                                                    null
                                                  )
                                                )
                                              )
                                            );
                                          })(Qe, g, d, p)
                                        : ((Qe.data = sn(
                                            Qe,
                                            Qe.parent,
                                            d
                                          ).resolve),
                                          (0, ae.of)(void 0))
                                    ),
                                    ge(() => Te++),
                                    lt(1),
                                    (0, ne.Z)((Qe) =>
                                      Te === U.size ? (0, ae.of)(y) : Ae
                                    )
                                  );
                                });
                              })(
                                this.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              ge({
                                next: () => (Ut = !0),
                                complete: () => {
                                  Ut ||
                                    this.cancelNavigationTransition(
                                      gt,
                                      "",
                                      gn.NoDataFromResolver
                                    );
                                },
                              })
                            );
                          }),
                          ge((gt) => {
                            const Ut = new Br(
                              gt.id,
                              this.urlSerializer.serialize(gt.extractedUrl),
                              this.urlSerializer.serialize(
                                gt.urlAfterRedirects
                              ),
                              gt.targetSnapshot
                            );
                            this.events.next(Ut);
                          })
                        );
                    }),
                    Pi((Pe) => {
                      const gt = (Ut) => {
                        var Vn;
                        const Dn = [];
                        null !== (Vn = Ut.routeConfig) &&
                          void 0 !== Vn &&
                          Vn.loadComponent &&
                          !Ut.routeConfig._loadedComponent &&
                          Dn.push(
                            this.configLoader
                              .loadComponent(Ut.routeConfig)
                              .pipe(
                                ge((kr) => {
                                  Ut.component = kr;
                                }),
                                (0, Ge.T)(() => {})
                              )
                          );
                        for (const kr of Ut.children) Dn.push(...gt(kr));
                        return Dn;
                      };
                      return (0, Ie.z)(gt(Pe.targetSnapshot.root)).pipe(
                        ee(null),
                        vt(1)
                      );
                    }),
                    Pi(() => this.afterPreactivation()),
                    (0, qe.n)(() => {
                      var Pe;
                      const { currentSnapshot: gt, targetSnapshot: Ut } = U,
                        Vn =
                          null === (Pe = this.createViewTransition) ||
                          void 0 === Pe
                            ? void 0
                            : Pe.call(
                                this,
                                this.environmentInjector,
                                gt.root,
                                Ut.root
                              );
                      return Vn
                        ? (0, G.H)(Vn).pipe((0, Ge.T)(() => U))
                        : (0, ae.of)(U);
                    }),
                    (0, Ge.T)((Pe) => {
                      const gt = (function Yi(d, p, y) {
                        const g = Yn(d, p._root, y ? y._root : void 0);
                        return new et(g, p);
                      })(
                        g.routeReuseStrategy,
                        Pe.targetSnapshot,
                        Pe.currentRouterState
                      );
                      return (
                        (this.currentTransition = U =
                          { ...Pe, targetRouterState: gt }),
                        (this.currentNavigation.targetRouterState = gt),
                        U
                      );
                    }),
                    ge(() => {
                      this.events.next(new _());
                    }),
                    ((d, p, y, g) =>
                      (0, Ge.T)(
                        (I) => (
                          new Mi(
                            p,
                            I.targetRouterState,
                            I.currentRouterState,
                            y,
                            g
                          ).activate(d),
                          I
                        )
                      ))(
                      this.rootContexts,
                      g.routeReuseStrategy,
                      (Pe) => this.events.next(Pe),
                      this.inputBindingEnabled
                    ),
                    vt(1),
                    ge({
                      next: (Pe) => {
                        var gt;
                        (Te = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          this.events.next(
                            new jn(
                              Pe.id,
                              this.urlSerializer.serialize(Pe.extractedUrl),
                              this.urlSerializer.serialize(Pe.urlAfterRedirects)
                            )
                          ),
                          null === (gt = this.titleStrategy) ||
                            void 0 === gt ||
                            gt.updateTitle(Pe.targetRouterState.snapshot),
                          Pe.resolve(!0);
                      },
                      complete: () => {
                        Te = !0;
                      },
                    }),
                    (function tn(d) {
                      return (0, Me.N)((p, y) => {
                        (0, Oe.Tg)(d).subscribe(
                          (0, he._)(y, () => y.complete(), Yt.l)
                        ),
                          !y.closed && p.subscribe(y);
                      });
                    })(
                      this.transitionAbortSubject.pipe(
                        ge((Pe) => {
                          throw Pe;
                        })
                      )
                    ),
                    Ot(() => {
                      var Pe;
                      !Te &&
                        !Qe &&
                        this.cancelNavigationTransition(
                          U,
                          "",
                          gn.SupersededByNewNavigation
                        ),
                        (null === (Pe = this.currentTransition) || void 0 === Pe
                          ? void 0
                          : Pe.id) === U.id &&
                          ((this.currentNavigation = null),
                          (this.currentTransition = null));
                    }),
                    me((Pe) => {
                      if (((Qe = !0), Ai(Pe)))
                        this.events.next(
                          new St(
                            U.id,
                            this.urlSerializer.serialize(U.extractedUrl),
                            Pe.message,
                            Pe.cancellationCode
                          )
                        ),
                          (function pi(d) {
                            return Ai(d) && Gn(d.url);
                          })(Pe)
                            ? this.events.next(new T(Pe.url))
                            : U.resolve(!1);
                      else {
                        var gt;
                        this.events.next(
                          new co(
                            U.id,
                            this.urlSerializer.serialize(U.extractedUrl),
                            Pe,
                            null !== (gt = U.targetSnapshot) && void 0 !== gt
                              ? gt
                              : void 0
                          )
                        );
                        try {
                          U.resolve(g.errorHandler(Pe));
                        } catch (Ut) {
                          this.options.resolveNavigationPromiseOnError
                            ? U.resolve(!1)
                            : U.reject(Ut);
                        }
                      }
                      return Ae;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(g, I, P) {
            const U = new St(
              g.id,
              this.urlSerializer.serialize(g.extractedUrl),
              I,
              P
            );
            this.events.next(U), g.resolve(!1);
          }
          isUpdatingInternalState() {
            var g, I;
            return (
              (null === (g = this.currentTransition) || void 0 === g
                ? void 0
                : g.extractedUrl.toString()) !==
              (null === (I = this.currentTransition) || void 0 === I
                ? void 0
                : I.currentUrlTree.toString())
            );
          }
          isUpdatedBrowserUrl() {
            var g, I;
            return (
              this.urlHandlingStrategy
                .extract(this.urlSerializer.parse(this.location.path(!0)))
                .toString() !==
                (null === (g = this.currentTransition) || void 0 === g
                  ? void 0
                  : g.extractedUrl.toString()) &&
              !(
                null !== (I = this.currentTransition) &&
                void 0 !== I &&
                I.extras.skipLocationChange
              )
            );
          }
        }
        return (
          ((d = p).ɵfac = function (g) {
            return new (g || d)();
          }),
          (d.ɵprov = a.jDH({ token: d, factory: d.ɵfac, providedIn: "root" })),
          p
        );
      })();
      function Sn(d) {
        return d !== Tn;
      }
      let dn = (() => {
        var d;
        class p {}
        return (
          ((d = p).ɵfac = function (g) {
            return new (g || d)();
          }),
          (d.ɵprov = a.jDH({
            token: d,
            factory: () => (0, a.WQX)(Cn),
            providedIn: "root",
          })),
          p
        );
      })();
      class Kn {
        shouldDetach(p) {
          return !1;
        }
        store(p, y) {}
        shouldAttach(p) {
          return !1;
        }
        retrieve(p) {
          return null;
        }
        shouldReuseRoute(p, y) {
          return p.routeConfig === y.routeConfig;
        }
      }
      let Cn = (() => {
          var d;
          class p extends Kn {}
          return (
            ((d = p).ɵfac = (() => {
              let y;
              return function (I) {
                return (y || (y = a.xGo(d)))(I || d);
              };
            })()),
            (d.ɵprov = a.jDH({
              token: d,
              factory: d.ɵfac,
              providedIn: "root",
            })),
            p
          );
        })(),
        ot = (() => {
          var d;
          class p {}
          return (
            ((d = p).ɵfac = function (g) {
              return new (g || d)();
            }),
            (d.ɵprov = a.jDH({
              token: d,
              factory: () => (0, a.WQX)(bt),
              providedIn: "root",
            })),
            p
          );
        })(),
        bt = (() => {
          var d;
          class p extends ot {
            constructor() {
              super(...arguments),
                (this.location = (0, a.WQX)(We.aZ)),
                (this.urlSerializer = (0, a.WQX)(Un)),
                (this.options = (0, a.WQX)(Ho, { optional: !0 }) || {}),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || "replace"),
                (this.urlHandlingStrategy = (0, a.WQX)(Q)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || "deferred"),
                (this.currentUrlTree = new xt()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.currentPageId = 0),
                (this.lastSuccessfulId = -1),
                (this.routerState = tt(null)),
                (this.stateMemento = this.createStateMemento());
            }
            getCurrentUrlTree() {
              return this.currentUrlTree;
            }
            getRawUrlTree() {
              return this.rawUrlTree;
            }
            restoredState() {
              return this.location.getState();
            }
            get browserPageId() {
              var g, I;
              return "computed" !== this.canceledNavigationResolution
                ? this.currentPageId
                : null !==
                    (g =
                      null === (I = this.restoredState()) || void 0 === I
                        ? void 0
                        : I.ɵrouterPageId) && void 0 !== g
                ? g
                : this.currentPageId;
            }
            getRouterState() {
              return this.routerState;
            }
            createStateMemento() {
              return {
                rawUrlTree: this.rawUrlTree,
                currentUrlTree: this.currentUrlTree,
                routerState: this.routerState,
              };
            }
            registerNonRouterCurrentEntryChangeListener(g) {
              return this.location.subscribe((I) => {
                "popstate" === I.type && g(I.url, I.state);
              });
            }
            handleRouterEvent(g, I) {
              if (g instanceof yr)
                this.stateMemento = this.createStateMemento();
              else if (g instanceof pt) this.rawUrlTree = I.initialUrl;
              else if (g instanceof Xn) {
                if (
                  "eager" === this.urlUpdateStrategy &&
                  !I.extras.skipLocationChange
                ) {
                  const P = this.urlHandlingStrategy.merge(
                    I.finalUrl,
                    I.initialUrl
                  );
                  this.setBrowserUrl(P, I);
                }
              } else
                g instanceof _
                  ? ((this.currentUrlTree = I.finalUrl),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      I.finalUrl,
                      I.initialUrl
                    )),
                    (this.routerState = I.targetRouterState),
                    "deferred" === this.urlUpdateStrategy &&
                      (I.extras.skipLocationChange ||
                        this.setBrowserUrl(this.rawUrlTree, I)))
                  : g instanceof St &&
                    (g.code === gn.GuardRejected ||
                      g.code === gn.NoDataFromResolver)
                  ? this.restoreHistory(I)
                  : g instanceof co
                  ? this.restoreHistory(I, !0)
                  : g instanceof jn &&
                    ((this.lastSuccessfulId = g.id),
                    (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(g, I) {
              const P = this.urlSerializer.serialize(g);
              if (
                this.location.isCurrentPathEqualTo(P) ||
                I.extras.replaceUrl
              ) {
                const Te = {
                  ...I.extras.state,
                  ...this.generateNgRouterState(I.id, this.browserPageId),
                };
                this.location.replaceState(P, "", Te);
              } else {
                const U = {
                  ...I.extras.state,
                  ...this.generateNgRouterState(I.id, this.browserPageId + 1),
                };
                this.location.go(P, "", U);
              }
            }
            restoreHistory(g, I = !1) {
              if ("computed" === this.canceledNavigationResolution) {
                const U = this.currentPageId - this.browserPageId;
                0 !== U
                  ? this.location.historyGo(U)
                  : this.currentUrlTree === g.finalUrl &&
                    0 === U &&
                    (this.resetState(g), this.resetUrlToCurrentUrlTree());
              } else
                "replace" === this.canceledNavigationResolution &&
                  (I && this.resetState(g), this.resetUrlToCurrentUrlTree());
            }
            resetState(g) {
              var I;
              (this.routerState = this.stateMemento.routerState),
                (this.currentUrlTree = this.stateMemento.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  null !== (I = g.finalUrl) && void 0 !== I
                    ? I
                    : this.rawUrlTree
                ));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                this.generateNgRouterState(
                  this.lastSuccessfulId,
                  this.currentPageId
                )
              );
            }
            generateNgRouterState(g, I) {
              return "computed" === this.canceledNavigationResolution
                ? { navigationId: g, ɵrouterPageId: I }
                : { navigationId: g };
            }
          }
          return (
            ((d = p).ɵfac = (() => {
              let y;
              return function (I) {
                return (y || (y = a.xGo(d)))(I || d);
              };
            })()),
            (d.ɵprov = a.jDH({
              token: d,
              factory: d.ɵfac,
              providedIn: "root",
            })),
            p
          );
        })();
      var vn = (function (d) {
        return (
          (d[(d.COMPLETE = 0)] = "COMPLETE"),
          (d[(d.FAILED = 1)] = "FAILED"),
          (d[(d.REDIRECTING = 2)] = "REDIRECTING"),
          d
        );
      })(vn || {});
      function $n(d) {
        throw d;
      }
      const ar = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact",
        },
        Fo = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset",
        };
      let fn = (() => {
          var d;
          class p {
            get currentUrlTree() {
              return this.stateManager.getCurrentUrlTree();
            }
            get rawUrlTree() {
              return this.stateManager.getRawUrlTree();
            }
            get events() {
              return this._events;
            }
            get routerState() {
              return this.stateManager.getRouterState();
            }
            constructor() {
              var g, I;
              (this.disposed = !1),
                (this.isNgZoneEnabled = !1),
                (this.console = (0, a.WQX)(a.H3F)),
                (this.stateManager = (0, a.WQX)(ot)),
                (this.options = (0, a.WQX)(Ho, { optional: !0 }) || {}),
                (this.pendingTasks = (0, a.WQX)(a.TgB)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || "deferred"),
                (this.navigationTransitions = (0, a.WQX)(Wt)),
                (this.urlSerializer = (0, a.WQX)(Un)),
                (this.location = (0, a.WQX)(We.aZ)),
                (this.urlHandlingStrategy = (0, a.WQX)(Q)),
                (this._events = new Ce.B()),
                (this.errorHandler = this.options.errorHandler || $n),
                (this.navigated = !1),
                (this.routeReuseStrategy = (0, a.WQX)(dn)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || "ignore"),
                (this.config =
                  null !==
                    (g =
                      null === (I = (0, a.WQX)(h, { optional: !0 })) ||
                      void 0 === I
                        ? void 0
                        : I.flat()) && void 0 !== g
                    ? g
                    : []),
                (this.componentInputBindingEnabled = !!(0, a.WQX)(Vo, {
                  optional: !0,
                })),
                (this.eventsSubscription = new xe.yU()),
                (this.isNgZoneEnabled =
                  (0, a.WQX)(a.SKi) instanceof a.SKi &&
                  a.SKi.isInAngularZone()),
                this.resetConfig(this.config),
                this.navigationTransitions
                  .setupNavigations(this, this.currentUrlTree, this.routerState)
                  .subscribe({
                    error: (P) => {
                      this.console.warn(P);
                    },
                  }),
                this.subscribeToNavigationEvents();
            }
            subscribeToNavigationEvents() {
              const g = this.navigationTransitions.events.subscribe((I) => {
                try {
                  const P = this.navigationTransitions.currentTransition,
                    U = this.navigationTransitions.currentNavigation;
                  if (null !== P && null !== U)
                    if (
                      (this.stateManager.handleRouterEvent(I, U),
                      I instanceof St &&
                        I.code !== gn.Redirect &&
                        I.code !== gn.SupersededByNewNavigation)
                    )
                      this.navigated = !0;
                    else if (I instanceof jn) this.navigated = !0;
                    else if (I instanceof T) {
                      const Te = this.urlHandlingStrategy.merge(
                          I.url,
                          P.currentRawUrl
                        ),
                        Qe = {
                          info: P.extras.info,
                          skipLocationChange: P.extras.skipLocationChange,
                          replaceUrl:
                            "eager" === this.urlUpdateStrategy || Sn(P.source),
                        };
                      this.scheduleNavigation(Te, Tn, null, Qe, {
                        resolve: P.resolve,
                        reject: P.reject,
                        promise: P.promise,
                      });
                    }
                  (function Ao(d) {
                    return !(d instanceof _ || d instanceof T);
                  })(I) && this._events.next(I);
                } catch (P) {
                  this.navigationTransitions.transitionAbortSubject.next(P);
                }
              });
              this.eventsSubscription.add(g);
            }
            resetRootComponentType(g) {
              (this.routerState.root.component = g),
                (this.navigationTransitions.rootComponentType = g);
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                this.navigationTransitions.hasRequestedNavigation ||
                  this.navigateToSyncWithBrowser(
                    this.location.path(!0),
                    Tn,
                    this.stateManager.restoredState()
                  );
            }
            setUpLocationChangeListener() {
              var g;
              (null !== (g = this.nonRouterCurrentEntryChangeSubscription) &&
                void 0 !== g) ||
                (this.nonRouterCurrentEntryChangeSubscription =
                  this.stateManager.registerNonRouterCurrentEntryChangeListener(
                    (I, P) => {
                      setTimeout(() => {
                        this.navigateToSyncWithBrowser(I, "popstate", P);
                      }, 0);
                    }
                  ));
            }
            navigateToSyncWithBrowser(g, I, P) {
              const U = { replaceUrl: !0 },
                Te = null != P && P.navigationId ? P : null;
              if (P) {
                const Pe = { ...P };
                delete Pe.navigationId,
                  delete Pe.ɵrouterPageId,
                  0 !== Object.keys(Pe).length && (U.state = Pe);
              }
              const Qe = this.parseUrl(g);
              this.scheduleNavigation(Qe, I, Te, U);
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            get lastSuccessfulNavigation() {
              return this.navigationTransitions.lastSuccessfulNavigation;
            }
            resetConfig(g) {
              (this.config = g.map(Yo)), (this.navigated = !1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.nonRouterCurrentEntryChangeSubscription &&
                  (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
                  (this.nonRouterCurrentEntryChangeSubscription = void 0)),
                (this.disposed = !0),
                this.eventsSubscription.unsubscribe();
            }
            createUrlTree(g, I = {}) {
              const {
                  relativeTo: P,
                  queryParams: U,
                  fragment: Te,
                  queryParamsHandling: Qe,
                  preserveFragment: Pe,
                } = I,
                gt = Pe ? this.currentUrlTree.fragment : Te;
              let Vn,
                Ut = null;
              switch (Qe) {
                case "merge":
                  Ut = { ...this.currentUrlTree.queryParams, ...U };
                  break;
                case "preserve":
                  Ut = this.currentUrlTree.queryParams;
                  break;
                default:
                  Ut = U || null;
              }
              null !== Ut && (Ut = this.removeEmptyProps(Ut));
              try {
                Vn = br(P ? P.snapshot : this.routerState.snapshot.root);
              } catch {
                ("string" != typeof g[0] || !g[0].startsWith("/")) && (g = []),
                  (Vn = this.currentUrlTree.root);
              }
              return Or(Vn, g, Ut, null != gt ? gt : null);
            }
            navigateByUrl(g, I = { skipLocationChange: !1 }) {
              const P = Gn(g) ? g : this.parseUrl(g),
                U = this.urlHandlingStrategy.merge(P, this.rawUrlTree);
              return this.scheduleNavigation(U, Tn, null, I);
            }
            navigate(g, I = { skipLocationChange: !1 }) {
              return (
                (function Ar(d) {
                  for (let p = 0; p < d.length; p++)
                    if (null == d[p]) throw new a.wOt(4008, !1);
                })(g),
                this.navigateByUrl(this.createUrlTree(g, I), I)
              );
            }
            serializeUrl(g) {
              return this.urlSerializer.serialize(g);
            }
            parseUrl(g) {
              try {
                return this.urlSerializer.parse(g);
              } catch {
                return this.urlSerializer.parse("/");
              }
            }
            isActive(g, I) {
              let P;
              if (
                ((P = !0 === I ? { ...ar } : !1 === I ? { ...Fo } : I), Gn(g))
              )
                return wn(this.currentUrlTree, g, P);
              const U = this.parseUrl(g);
              return wn(this.currentUrlTree, U, P);
            }
            removeEmptyProps(g) {
              return Object.entries(g).reduce(
                (I, [P, U]) => (null != U && (I[P] = U), I),
                {}
              );
            }
            scheduleNavigation(g, I, P, U, Te) {
              if (this.disposed) return Promise.resolve(!1);
              let Qe, Pe, gt;
              Te
                ? ((Qe = Te.resolve), (Pe = Te.reject), (gt = Te.promise))
                : (gt = new Promise((Vn, Dn) => {
                    (Qe = Vn), (Pe = Dn);
                  }));
              const Ut = this.pendingTasks.add();
              return (
                (function sr(d, p) {
                  d.events
                    .pipe(
                      (0, je.p)(
                        (y) =>
                          y instanceof jn ||
                          y instanceof St ||
                          y instanceof co ||
                          y instanceof pt
                      ),
                      (0, Ge.T)((y) =>
                        y instanceof jn || y instanceof pt
                          ? vn.COMPLETE
                          : y instanceof St &&
                            (y.code === gn.Redirect ||
                              y.code === gn.SupersededByNewNavigation)
                          ? vn.REDIRECTING
                          : vn.FAILED
                      ),
                      (0, je.p)((y) => y !== vn.REDIRECTING),
                      vt(1)
                    )
                    .subscribe(() => {
                      p();
                    });
                })(this, () => {
                  queueMicrotask(() => this.pendingTasks.remove(Ut));
                }),
                this.navigationTransitions.handleNavigationRequest({
                  source: I,
                  restoredState: P,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: g,
                  extras: U,
                  resolve: Qe,
                  reject: Pe,
                  promise: gt,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                gt.catch((Vn) => Promise.reject(Vn))
              );
            }
          }
          return (
            ((d = p).ɵfac = function (g) {
              return new (g || d)();
            }),
            (d.ɵprov = a.jDH({
              token: d,
              factory: d.ɵfac,
              providedIn: "root",
            })),
            p
          );
        })(),
        Ft = (() => {
          var d;
          class p {
            constructor(g, I, P, U, Te, Qe) {
              var Pe;
              (this.router = g),
                (this.route = I),
                (this.tabIndexAttribute = P),
                (this.renderer = U),
                (this.el = Te),
                (this.locationStrategy = Qe),
                (this.href = null),
                (this.commands = null),
                (this.onChanges = new Ce.B()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1);
              const gt =
                null === (Pe = Te.nativeElement.tagName) || void 0 === Pe
                  ? void 0
                  : Pe.toLowerCase();
              (this.isAnchorElement = "a" === gt || "area" === gt),
                this.isAnchorElement
                  ? (this.subscription = g.events.subscribe((Ut) => {
                      Ut instanceof jn && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl("0");
            }
            setTabIndexIfNotOnNativeEl(g) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue("tabindex", g);
            }
            ngOnChanges(g) {
              this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
            }
            set routerLink(g) {
              null != g
                ? ((this.commands = Array.isArray(g) ? g : [g]),
                  this.setTabIndexIfNotOnNativeEl("0"))
                : ((this.commands = null),
                  this.setTabIndexIfNotOnNativeEl(null));
            }
            onClick(g, I, P, U, Te) {
              const Qe = this.urlTree;
              return (
                !!(
                  null === Qe ||
                  (this.isAnchorElement &&
                    (0 !== g ||
                      I ||
                      P ||
                      U ||
                      Te ||
                      ("string" == typeof this.target &&
                        "_self" != this.target)))
                ) ||
                (this.router.navigateByUrl(Qe, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                  info: this.info,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              var g;
              null === (g = this.subscription) ||
                void 0 === g ||
                g.unsubscribe();
            }
            updateHref() {
              var g;
              const I = this.urlTree;
              this.href =
                null !== I && this.locationStrategy
                  ? null === (g = this.locationStrategy) || void 0 === g
                    ? void 0
                    : g.prepareExternalUrl(this.router.serializeUrl(I))
                  : null;
              const P =
                null === this.href
                  ? null
                  : (0, a.n$t)(
                      this.href,
                      this.el.nativeElement.tagName.toLowerCase(),
                      "href"
                    );
              this.applyAttributeValue("href", P);
            }
            applyAttributeValue(g, I) {
              const P = this.renderer,
                U = this.el.nativeElement;
              null !== I ? P.setAttribute(U, g, I) : P.removeAttribute(U, g);
            }
            get urlTree() {
              return null === this.commands
                ? null
                : this.router.createUrlTree(this.commands, {
                    relativeTo:
                      void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
          }
          return (
            ((d = p).ɵfac = function (g) {
              return new (g || d)(
                a.rXU(fn),
                a.rXU(Ze),
                a.kS0("tabindex"),
                a.rXU(a.sFG),
                a.rXU(a.aKT),
                a.rXU(We.hb)
              );
            }),
            (d.ɵdir = a.FsC({
              type: d,
              selectors: [["", "routerLink", ""]],
              hostVars: 1,
              hostBindings: function (g, I) {
                1 & g &&
                  a.bIt("click", function (U) {
                    return I.onClick(
                      U.button,
                      U.ctrlKey,
                      U.shiftKey,
                      U.altKey,
                      U.metaKey
                    );
                  }),
                  2 & g && a.BMQ("target", I.target);
              },
              inputs: {
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                state: "state",
                info: "info",
                relativeTo: "relativeTo",
                preserveFragment: [
                  a.Mj6.HasDecoratorInputTransform,
                  "preserveFragment",
                  "preserveFragment",
                  a.L39,
                ],
                skipLocationChange: [
                  a.Mj6.HasDecoratorInputTransform,
                  "skipLocationChange",
                  "skipLocationChange",
                  a.L39,
                ],
                replaceUrl: [
                  a.Mj6.HasDecoratorInputTransform,
                  "replaceUrl",
                  "replaceUrl",
                  a.L39,
                ],
                routerLink: "routerLink",
              },
              standalone: !0,
              features: [a.GFd, a.OA$],
            })),
            p
          );
        })();
      const go = new a.nKC("");
      function Xl(d, ...p) {
        return (0, a.EmA)([
          { provide: h, multi: !0, useValue: d },
          [],
          { provide: Ze, useFactory: zo, deps: [fn] },
          { provide: a.iLQ, multi: !0, useFactory: So },
          p.map((y) => y.ɵproviders),
        ]);
      }
      function zo(d) {
        return d.routerState.root;
      }
      function So() {
        const d = (0, a.WQX)(a.zZn);
        return (p) => {
          var y, g;
          const I = d.get(a.o8S);
          if (p !== I.components[0]) return;
          const P = d.get(fn),
            U = d.get(as);
          1 === d.get(ri) && P.initialNavigation(),
            null === (y = d.get(Sr, null, a.$GK.Optional)) ||
              void 0 === y ||
              y.setUpPreloading(),
            null === (g = d.get(go, null, a.$GK.Optional)) ||
              void 0 === g ||
              g.init(),
            P.resetRootComponentType(I.componentTypes[0]),
            U.closed || (U.next(), U.complete(), U.unsubscribe());
        };
      }
      const as = new a.nKC("", { factory: () => new Ce.B() }),
        ri = new a.nKC("", { providedIn: "root", factory: () => 1 }),
        Sr = new a.nKC("");
    },
    5032: (_t, He, F) => {
      "use strict";
      F.d(He, {
        Yq: () => Mn,
        TS: () => At,
        sR: () => qt,
        el: () => Wn,
        Sb: () => Or,
        QE: () => St,
        CF: () => Gn,
        Rg: () => Er,
        p4: () => pt,
        jM: () => zt,
        q9: () => ie,
        Kb: () => oo,
        CE: () => yr,
        pF: () => jn,
        fL: () => Xn,
        YV: () => kn,
        er: () => co,
        z3: () => Vr,
      });
      var a = F(467),
        l = F(9842),
        j = F(4438),
        se = F(70),
        G = F(177);
      class ae {
        constructor() {
          this.m = new Map();
        }
        reset(x) {
          this.m = new Map(Object.entries(x));
        }
        get(x, Z) {
          const O = this.m.get(x);
          return void 0 !== O ? O : Z;
        }
        getBoolean(x, Z = !1) {
          const O = this.m.get(x);
          return void 0 === O ? Z : "string" == typeof O ? "true" === O : !!O;
        }
        getNumber(x, Z) {
          const O = parseFloat(this.m.get(x));
          return isNaN(O) ? (void 0 !== Z ? Z : NaN) : O;
        }
        set(x, Z) {
          this.m.set(x, Z);
        }
      }
      const X = new ae(),
        ce = (L) => ke(L),
        ke = (L = window) => {
          if (typeof L > "u") return [];
          L.Ionic = L.Ionic || {};
          let x = L.Ionic.platforms;
          return (
            null == x &&
              ((x = L.Ionic.platforms = Oe(L)),
              x.forEach((Z) =>
                L.document.documentElement.classList.add(`plt-${Z}`)
              )),
            x
          );
        },
        Oe = (L) => {
          const x = X.get("platform");
          return Object.keys(je).filter((Z) => {
            const O = null == x ? void 0 : x[Z];
            return "function" == typeof O ? O(L) : je[Z](L);
          });
        },
        we = (L) => !!(vt(L, /iPad/i) || (vt(L, /Macintosh/i) && he(L))),
        te = (L) => vt(L, /android|sink/i),
        he = (L) => jt(L, "(any-pointer:coarse)"),
        Se = (L) => Ce(L) || We(L),
        Ce = (L) => !!(L.cordova || L.phonegap || L.PhoneGap),
        We = (L) => {
          const x = L.Capacitor;
          return !(null == x || !x.isNative);
        },
        vt = (L, x) => x.test(L.navigator.userAgent),
        jt = (L, x) => {
          var Z;
          return null === (Z = L.matchMedia) || void 0 === Z
            ? void 0
            : Z.call(L, x).matches;
        },
        je = {
          ipad: we,
          iphone: (L) => vt(L, /iPhone/i),
          ios: (L) => vt(L, /iPhone|iPod/i) || we(L),
          android: te,
          phablet: (L) => {
            const x = L.innerWidth,
              Z = L.innerHeight,
              O = Math.min(x, Z),
              q = Math.max(x, Z);
            return O > 390 && O < 520 && q > 620 && q < 800;
          },
          tablet: (L) => {
            const x = L.innerWidth,
              Z = L.innerHeight,
              O = Math.min(x, Z),
              q = Math.max(x, Z);
            return (
              we(L) ||
              ((L) => te(L) && !vt(L, /mobile/i))(L) ||
              (O > 460 && O < 820 && q > 780 && q < 1400)
            );
          },
          cordova: Ce,
          capacitor: We,
          electron: (L) => vt(L, /electron/i),
          pwa: (L) => {
            var x;
            return !!(
              (null !== (x = L.matchMedia) &&
                void 0 !== x &&
                x.call(L, "(display-mode: standalone)").matches) ||
              L.navigator.standalone
            );
          },
          mobile: he,
          mobileweb: (L) => he(L) && !Se(L),
          desktop: (L) => !he(L),
          hybrid: Se,
        };
      var re = F(6031);
      var dt = F(1413),
        mt = F(3726),
        In = F(4412),
        An = F(4572),
        wn = F(7673),
        Bn = F(1635),
        En = F(5964),
        Dr = F(5558),
        Et = F(3669),
        lr = F(9974),
        kt = F(4360);
      function Nt(L, x) {
        return L === x;
      }
      var Zt = F(4341);
      const zn = ["tabsInner"];
      let pe = (() => {
        var L;
        class x {
          constructor(O, q) {
            (0, l.A)(this, "doc", void 0),
              (0, l.A)(this, "_readyPromise", void 0),
              (0, l.A)(this, "win", void 0),
              (0, l.A)(this, "backButton", new dt.B()),
              (0, l.A)(this, "keyboardDidShow", new dt.B()),
              (0, l.A)(this, "keyboardDidHide", new dt.B()),
              (0, l.A)(this, "pause", new dt.B()),
              (0, l.A)(this, "resume", new dt.B()),
              (0, l.A)(this, "resize", new dt.B()),
              (this.doc = O),
              q.run(() => {
                var _;
                let T;
                (this.win = O.defaultView),
                  (this.backButton.subscribeWithPriority = function (V, c) {
                    return this.subscribe((v) =>
                      v.register(V, (E) => q.run(() => c(E)))
                    );
                  }),
                  Ee(this.pause, O, "pause", q),
                  Ee(this.resume, O, "resume", q),
                  Ee(this.backButton, O, "ionBackButton", q),
                  Ee(this.resize, this.win, "resize", q),
                  Ee(this.keyboardDidShow, this.win, "ionKeyboardDidShow", q),
                  Ee(this.keyboardDidHide, this.win, "ionKeyboardDidHide", q),
                  (this._readyPromise = new Promise((V) => {
                    T = V;
                  })),
                  null !== (_ = this.win) && void 0 !== _ && _.cordova
                    ? O.addEventListener(
                        "deviceready",
                        () => {
                          T("cordova");
                        },
                        { once: !0 }
                      )
                    : T("dom");
              });
          }
          is(O) {
            return ((L, x) => (
              "string" == typeof L && ((x = L), (L = void 0)), ce(L).includes(x)
            ))(this.win, O);
          }
          platforms() {
            return ce(this.win);
          }
          ready() {
            return this._readyPromise;
          }
          get isRTL() {
            return "rtl" === this.doc.dir;
          }
          getQueryParam(O) {
            return de(this.win.location.href, O);
          }
          isLandscape() {
            return !this.isPortrait();
          }
          isPortrait() {
            var O, q;
            return null === (O = (q = this.win).matchMedia) || void 0 === O
              ? void 0
              : O.call(q, "(orientation: portrait)").matches;
          }
          testUserAgent(O) {
            const q = this.win.navigator;
            return !!(null != q && q.userAgent && q.userAgent.indexOf(O) >= 0);
          }
          url() {
            return this.win.location.href;
          }
          width() {
            return this.win.innerWidth;
          }
          height() {
            return this.win.innerHeight;
          }
        }
        return (
          (L = x),
          (0, l.A)(x, "\u0275fac", function (O) {
            return new (O || L)(j.KVO(G.qQ), j.KVO(j.SKi));
          }),
          (0, l.A)(
            x,
            "\u0275prov",
            j.jDH({ token: L, factory: L.ɵfac, providedIn: "root" })
          ),
          x
        );
      })();
      const de = (L, x) => {
          x = x.replace(/[[\]\\]/g, "\\$&");
          const O = new RegExp("[\\?&]" + x + "=([^&#]*)").exec(L);
          return O ? decodeURIComponent(O[1].replace(/\+/g, " ")) : null;
        },
        Ee = (L, x, Z, O) => {
          x &&
            x.addEventListener(Z, (q) => {
              O.run(() => {
                L.next(null != q ? q.detail : void 0);
              });
            });
        };
      let ie = (() => {
        var L;
        class x {
          constructor(O, q, _, T) {
            (0, l.A)(this, "location", void 0),
              (0, l.A)(this, "serializer", void 0),
              (0, l.A)(this, "router", void 0),
              (0, l.A)(this, "topOutlet", void 0),
              (0, l.A)(this, "direction", Je),
              (0, l.A)(this, "animated", ut),
              (0, l.A)(this, "animationBuilder", void 0),
              (0, l.A)(this, "guessDirection", "forward"),
              (0, l.A)(this, "guessAnimation", void 0),
              (0, l.A)(this, "lastNavId", -1),
              (this.location = q),
              (this.serializer = _),
              (this.router = T),
              T &&
                T.events.subscribe((V) => {
                  if (V instanceof se.Z) {
                    const c = V.restoredState
                      ? V.restoredState.navigationId
                      : V.id;
                    (this.guessDirection = this.guessAnimation =
                      c < this.lastNavId ? "back" : "forward"),
                      (this.lastNavId =
                        "forward" === this.guessDirection ? V.id : c);
                  }
                }),
              O.backButton.subscribeWithPriority(0, (V) => {
                this.pop(), V();
              });
          }
          navigateForward(O, q = {}) {
            return (
              this.setDirection(
                "forward",
                q.animated,
                q.animationDirection,
                q.animation
              ),
              this.navigate(O, q)
            );
          }
          navigateBack(O, q = {}) {
            return (
              this.setDirection(
                "back",
                q.animated,
                q.animationDirection,
                q.animation
              ),
              this.navigate(O, q)
            );
          }
          navigateRoot(O, q = {}) {
            return (
              this.setDirection(
                "root",
                q.animated,
                q.animationDirection,
                q.animation
              ),
              this.navigate(O, q)
            );
          }
          back(O = { animated: !0, animationDirection: "back" }) {
            return (
              this.setDirection(
                "back",
                O.animated,
                O.animationDirection,
                O.animation
              ),
              this.location.back()
            );
          }
          pop() {
            var O = this;
            return (0, a.A)(function* () {
              let q = O.topOutlet;
              for (; q; ) {
                if (yield q.pop()) return !0;
                q = q.parentOutlet;
              }
              return !1;
            })();
          }
          setDirection(O, q, _, T) {
            (this.direction = O),
              (this.animated = Le(O, q, _)),
              (this.animationBuilder = T);
          }
          setTopOutlet(O) {
            this.topOutlet = O;
          }
          consumeTransition() {
            let q,
              O = "root";
            const _ = this.animationBuilder;
            return (
              "auto" === this.direction
                ? ((O = this.guessDirection), (q = this.guessAnimation))
                : ((q = this.animated), (O = this.direction)),
              (this.direction = Je),
              (this.animated = ut),
              (this.animationBuilder = void 0),
              { direction: O, animation: q, animationBuilder: _ }
            );
          }
          navigate(O, q) {
            if (Array.isArray(O)) return this.router.navigate(O, q);
            {
              const _ = this.serializer.parse(O.toString());
              return (
                void 0 !== q.queryParams &&
                  (_.queryParams = { ...q.queryParams }),
                void 0 !== q.fragment && (_.fragment = q.fragment),
                this.router.navigateByUrl(_, q)
              );
            }
          }
        }
        return (
          (L = x),
          (0, l.A)(x, "\u0275fac", function (O) {
            return new (O ||
              L)(j.KVO(pe), j.KVO(G.aZ), j.KVO(se.Sd), j.KVO(se.Ix, 8));
          }),
          (0, l.A)(
            x,
            "\u0275prov",
            j.jDH({ token: L, factory: L.ɵfac, providedIn: "root" })
          ),
          x
        );
      })();
      const Le = (L, x, Z) => {
          if (!1 !== x) {
            if (void 0 !== Z) return Z;
            if ("forward" === L || "back" === L) return L;
            if ("root" === L && !0 === x) return "forward";
          }
        },
        Je = "auto",
        ut = void 0;
      let At = (() => {
        var L;
        class x {
          get(O, q) {
            const _ = Jt();
            return _ ? _.get(O, q) : null;
          }
          getBoolean(O, q) {
            const _ = Jt();
            return !!_ && _.getBoolean(O, q);
          }
          getNumber(O, q) {
            const _ = Jt();
            return _ ? _.getNumber(O, q) : 0;
          }
        }
        return (
          (L = x),
          (0, l.A)(x, "\u0275fac", function (O) {
            return new (O || L)();
          }),
          (0, l.A)(
            x,
            "\u0275prov",
            j.jDH({ token: L, factory: L.ɵfac, providedIn: "root" })
          ),
          x
        );
      })();
      const qt = new j.nKC("USERCONFIG"),
        Jt = () => {
          if (typeof window < "u") {
            const L = window.Ionic;
            if (null != L && L.config) return L.config;
          }
          return null;
        };
      class Nn {
        constructor(x = {}) {
          (0, l.A)(this, "data", void 0), (this.data = x);
        }
        get(x) {
          return this.data[x];
        }
      }
      let Mn = (() => {
        var L;
        class x {
          constructor() {
            (0, l.A)(this, "zone", (0, j.WQX)(j.SKi)),
              (0, l.A)(this, "applicationRef", (0, j.WQX)(j.o8S));
          }
          create(O, q, _) {
            return new Fn(O, q, this.applicationRef, this.zone, _);
          }
        }
        return (
          (L = x),
          (0, l.A)(x, "\u0275fac", function (O) {
            return new (O || L)();
          }),
          (0, l.A)(x, "\u0275prov", j.jDH({ token: L, factory: L.ɵfac })),
          x
        );
      })();
      class Fn {
        constructor(x, Z, O, q, _) {
          (0, l.A)(this, "environmentInjector", void 0),
            (0, l.A)(this, "injector", void 0),
            (0, l.A)(this, "applicationRef", void 0),
            (0, l.A)(this, "zone", void 0),
            (0, l.A)(this, "elementReferenceKey", void 0),
            (0, l.A)(this, "elRefMap", new WeakMap()),
            (0, l.A)(this, "elEventsMap", new WeakMap()),
            (this.environmentInjector = x),
            (this.injector = Z),
            (this.applicationRef = O),
            (this.zone = q),
            (this.elementReferenceKey = _);
        }
        attachViewToDom(x, Z, O, q) {
          return this.zone.run(
            () =>
              new Promise((_) => {
                const T = { ...O };
                void 0 !== this.elementReferenceKey &&
                  (T[this.elementReferenceKey] = x),
                  _(
                    no(
                      this.zone,
                      this.environmentInjector,
                      this.injector,
                      this.applicationRef,
                      this.elRefMap,
                      this.elEventsMap,
                      x,
                      Z,
                      T,
                      q,
                      this.elementReferenceKey
                    )
                  );
              })
          );
        }
        removeViewFromDom(x, Z) {
          return this.zone.run(
            () =>
              new Promise((O) => {
                const q = this.elRefMap.get(Z);
                if (q) {
                  q.destroy(), this.elRefMap.delete(Z);
                  const _ = this.elEventsMap.get(Z);
                  _ && (_(), this.elEventsMap.delete(Z));
                }
                O();
              })
          );
        }
      }
      const no = (L, x, Z, O, q, _, T, V, c, v, E) => {
          const m = j.zZn.create({ providers: qn(c), parent: Z }),
            R = (0, j.a0P)(V, { environmentInjector: x, elementInjector: m }),
            B = R.instance,
            Re = R.location.nativeElement;
          if (
            (c &&
              (E &&
                void 0 !== B[E] &&
                console.error(
                  `[Ionic Error]: ${E} is a reserved property when using ${T.tagName.toLowerCase()}. Rename or remove the "${E}" property from ${
                    V.name
                  }.`
                ),
              Object.assign(B, c)),
            v)
          )
            for (const tt of v) Re.classList.add(tt);
          const et = yn(L, B, Re);
          return (
            T.appendChild(Re),
            O.attachView(R.hostView),
            q.set(Re, R),
            _.set(Re, et),
            Re
          );
        },
        zr = [re.L, re.a, re.b, re.c, re.d],
        yn = (L, x, Z) =>
          L.run(() => {
            const O = zr
              .filter((q) => "function" == typeof x[q])
              .map((q) => {
                const _ = (T) => x[q](T.detail);
                return (
                  Z.addEventListener(q, _), () => Z.removeEventListener(q, _)
                );
              });
            return () => O.forEach((q) => q());
          }),
        Ct = new j.nKC("NavParamsToken"),
        qn = (L) => [
          { provide: Ct, useValue: L },
          { provide: Nn, useFactory: cr, deps: [Ct] },
        ],
        cr = (L) => new Nn(L),
        Gr = (L, x) => {
          const Z = L.prototype;
          x.forEach((O) => {
            Object.defineProperty(Z, O, {
              get() {
                return this.el[O];
              },
              set(q) {
                this.z.runOutsideAngular(() => (this.el[O] = q));
              },
            });
          });
        },
        Lr = (L, x) => {
          const Z = L.prototype;
          x.forEach((O) => {
            Z[O] = function () {
              const q = arguments;
              return this.z.runOutsideAngular(() =>
                this.el[O].apply(this.el, q)
              );
            };
          });
        },
        ur = (L, x, Z) => {
          Z.forEach((O) => (L[O] = (0, mt.R)(x, O)));
        };
      function Ht(L) {
        return function (Z) {
          const { defineCustomElementFn: O, inputs: q, methods: _ } = L;
          return void 0 !== O && O(), q && Gr(Z, q), _ && Lr(Z, _), Z;
        };
      }
      const Rr = [
          "alignment",
          "animated",
          "arrow",
          "keepContentsMounted",
          "backdropDismiss",
          "cssClass",
          "dismissOnSelect",
          "enterAnimation",
          "event",
          "isOpen",
          "keyboardClose",
          "leaveAnimation",
          "mode",
          "showBackdrop",
          "translucent",
          "trigger",
          "triggerAction",
          "reference",
          "size",
          "side",
        ],
        Nr = ["present", "dismiss", "onDidDismiss", "onWillDismiss"];
      let Gn = (() => {
        var L;
        let x =
          ((0, l.A)(
            (L = class {
              constructor(O, q, _) {
                (0, l.A)(this, "z", void 0),
                  (0, l.A)(this, "template", void 0),
                  (0, l.A)(this, "isCmpOpen", !1),
                  (0, l.A)(this, "el", void 0),
                  (this.z = _),
                  (this.el = q.nativeElement),
                  this.el.addEventListener("ionMount", () => {
                    (this.isCmpOpen = !0), O.detectChanges();
                  }),
                  this.el.addEventListener("didDismiss", () => {
                    (this.isCmpOpen = !1), O.detectChanges();
                  }),
                  ur(this, this.el, [
                    "ionPopoverDidPresent",
                    "ionPopoverWillPresent",
                    "ionPopoverWillDismiss",
                    "ionPopoverDidDismiss",
                    "didPresent",
                    "willPresent",
                    "willDismiss",
                    "didDismiss",
                  ]);
              }
            }),
            "\u0275fac",
            function (O) {
              return new (O || L)(j.rXU(j.gRc), j.rXU(j.aKT), j.rXU(j.SKi));
            }
          ),
          (0, l.A)(
            L,
            "\u0275dir",
            j.FsC({
              type: L,
              selectors: [["ion-popover"]],
              contentQueries: function (O, q, _) {
                if ((1 & O && j.wni(_, j.C4Q, 5), 2 & O)) {
                  let T;
                  j.mGM((T = j.lsd())) && (q.template = T.first);
                }
              },
              inputs: {
                alignment: "alignment",
                animated: "animated",
                arrow: "arrow",
                keepContentsMounted: "keepContentsMounted",
                backdropDismiss: "backdropDismiss",
                cssClass: "cssClass",
                dismissOnSelect: "dismissOnSelect",
                enterAnimation: "enterAnimation",
                event: "event",
                isOpen: "isOpen",
                keyboardClose: "keyboardClose",
                leaveAnimation: "leaveAnimation",
                mode: "mode",
                showBackdrop: "showBackdrop",
                translucent: "translucent",
                trigger: "trigger",
                triggerAction: "triggerAction",
                reference: "reference",
                size: "size",
                side: "side",
              },
            })
          ),
          L);
        return (x = (0, Bn.Cg)([Ht({ inputs: Rr, methods: Nr })], x)), x;
      })();
      const dr = [
          "animated",
          "keepContentsMounted",
          "backdropBreakpoint",
          "backdropDismiss",
          "breakpoints",
          "canDismiss",
          "cssClass",
          "enterAnimation",
          "event",
          "handle",
          "handleBehavior",
          "initialBreakpoint",
          "isOpen",
          "keyboardClose",
          "leaveAnimation",
          "mode",
          "presentingElement",
          "showBackdrop",
          "translucent",
          "trigger",
        ],
        br = [
          "present",
          "dismiss",
          "onDidDismiss",
          "onWillDismiss",
          "setCurrentBreakpoint",
          "getCurrentBreakpoint",
        ];
      let Or = (() => {
        var L;
        let x =
          ((0, l.A)(
            (L = class {
              constructor(O, q, _) {
                (0, l.A)(this, "z", void 0),
                  (0, l.A)(this, "template", void 0),
                  (0, l.A)(this, "isCmpOpen", !1),
                  (0, l.A)(this, "el", void 0),
                  (this.z = _),
                  (this.el = q.nativeElement),
                  this.el.addEventListener("ionMount", () => {
                    (this.isCmpOpen = !0), O.detectChanges();
                  }),
                  this.el.addEventListener("didDismiss", () => {
                    (this.isCmpOpen = !1), O.detectChanges();
                  }),
                  ur(this, this.el, [
                    "ionModalDidPresent",
                    "ionModalWillPresent",
                    "ionModalWillDismiss",
                    "ionModalDidDismiss",
                    "ionBreakpointDidChange",
                    "didPresent",
                    "willPresent",
                    "willDismiss",
                    "didDismiss",
                  ]);
              }
            }),
            "\u0275fac",
            function (O) {
              return new (O || L)(j.rXU(j.gRc), j.rXU(j.aKT), j.rXU(j.SKi));
            }
          ),
          (0, l.A)(
            L,
            "\u0275dir",
            j.FsC({
              type: L,
              selectors: [["ion-modal"]],
              contentQueries: function (O, q, _) {
                if ((1 & O && j.wni(_, j.C4Q, 5), 2 & O)) {
                  let T;
                  j.mGM((T = j.lsd())) && (q.template = T.first);
                }
              },
              inputs: {
                animated: "animated",
                keepContentsMounted: "keepContentsMounted",
                backdropBreakpoint: "backdropBreakpoint",
                backdropDismiss: "backdropDismiss",
                breakpoints: "breakpoints",
                canDismiss: "canDismiss",
                cssClass: "cssClass",
                enterAnimation: "enterAnimation",
                event: "event",
                handle: "handle",
                handleBehavior: "handleBehavior",
                initialBreakpoint: "initialBreakpoint",
                isOpen: "isOpen",
                keyboardClose: "keyboardClose",
                leaveAnimation: "leaveAnimation",
                mode: "mode",
                presentingElement: "presentingElement",
                showBackdrop: "showBackdrop",
                translucent: "translucent",
                trigger: "trigger",
              },
            })
          ),
          L);
        return (x = (0, Bn.Cg)([Ht({ inputs: dr, methods: br })], x)), x;
      })();
      const hr = (L, x) => (
          (L = L.filter((Z) => Z.stackId !== x.stackId)).push(x), L
        ),
        Mt = (L, x) => {
          const Z = L.createUrlTree(["."], { relativeTo: x });
          return L.serializeUrl(Z);
        },
        yt = (L, x) => !x || L.stackId !== x.stackId,
        pn = (L, x) => {
          if (!L) return;
          const Z = On(x);
          for (let O = 0; O < Z.length; O++) {
            if (O >= L.length) return Z[O];
            if (Z[O] !== L[O]) return;
          }
        },
        On = (L) =>
          L.split("/")
            .map((x) => x.trim())
            .filter((x) => "" !== x),
        ir = (L) => {
          L && (L.ref.destroy(), L.unlistenEvents());
        };
      class $r {
        constructor(x, Z, O, q, _, T) {
          (0, l.A)(this, "containerEl", void 0),
            (0, l.A)(this, "router", void 0),
            (0, l.A)(this, "navCtrl", void 0),
            (0, l.A)(this, "zone", void 0),
            (0, l.A)(this, "location", void 0),
            (0, l.A)(this, "views", []),
            (0, l.A)(this, "runningTask", void 0),
            (0, l.A)(this, "skipTransition", !1),
            (0, l.A)(this, "tabsPrefix", void 0),
            (0, l.A)(this, "activeView", void 0),
            (0, l.A)(this, "nextId", 0),
            (this.containerEl = Z),
            (this.router = O),
            (this.navCtrl = q),
            (this.zone = _),
            (this.location = T),
            (this.tabsPrefix = void 0 !== x ? On(x) : void 0);
        }
        createView(x, Z) {
          var O;
          const q = Mt(this.router, Z),
            _ =
              null == x || null === (O = x.location) || void 0 === O
                ? void 0
                : O.nativeElement,
            T = yn(this.zone, x.instance, _);
          return {
            id: this.nextId++,
            stackId: pn(this.tabsPrefix, q),
            unlistenEvents: T,
            element: _,
            ref: x,
            url: q,
          };
        }
        getExistingView(x) {
          const Z = Mt(this.router, x),
            O = this.views.find((q) => q.url === Z);
          return O && O.ref.changeDetectorRef.reattach(), O;
        }
        setActive(x) {
          var Z, O;
          const q = this.navCtrl.consumeTransition();
          let { direction: _, animation: T, animationBuilder: V } = q;
          const c = this.activeView,
            v = yt(x, c);
          v && ((_ = "back"), (T = void 0));
          const E = this.views.slice();
          let m;
          const R = this.router;
          R.getCurrentNavigation
            ? (m = R.getCurrentNavigation())
            : null !== (Z = R.navigations) &&
              void 0 !== Z &&
              Z.value &&
              (m = R.navigations.value),
            null !== (O = m) &&
              void 0 !== O &&
              null !== (O = O.extras) &&
              void 0 !== O &&
              O.replaceUrl &&
              this.views.length > 0 &&
              this.views.splice(-1, 1);
          const B = this.views.includes(x),
            Re = this.insertView(x, _);
          B || x.ref.changeDetectorRef.detectChanges();
          const et = x.animationBuilder;
          return (
            void 0 === V && "back" === _ && !v && void 0 !== et && (V = et),
            c && (c.animationBuilder = V),
            this.zone.runOutsideAngular(() =>
              this.wait(
                () => (
                  c && c.ref.changeDetectorRef.detach(),
                  x.ref.changeDetectorRef.reattach(),
                  this.transition(x, c, T, this.canGoBack(1), !1, V)
                    .then(() => ro(x, Re, E, this.location, this.zone))
                    .then(() => ({
                      enteringView: x,
                      direction: _,
                      animation: T,
                      tabSwitch: v,
                    }))
                )
              )
            )
          );
        }
        canGoBack(x, Z = this.getActiveStackId()) {
          return this.getStack(Z).length > x;
        }
        pop(x, Z = this.getActiveStackId()) {
          return this.zone.run(() => {
            const O = this.getStack(Z);
            if (O.length <= x) return Promise.resolve(!1);
            const q = O[O.length - x - 1];
            let _ = q.url;
            const T = q.savedData;
            if (T) {
              var V;
              const v = T.get("primary");
              null != v &&
                null !== (V = v.route) &&
                void 0 !== V &&
                null !== (V = V._routerState) &&
                void 0 !== V &&
                V.snapshot.url &&
                (_ = v.route._routerState.snapshot.url);
            }
            const { animationBuilder: c } = this.navCtrl.consumeTransition();
            return this.navCtrl
              .navigateBack(_, { ...q.savedExtras, animation: c })
              .then(() => !0);
          });
        }
        startBackTransition() {
          const x = this.activeView;
          if (x) {
            const Z = this.getStack(x.stackId),
              O = Z[Z.length - 2],
              q = O.animationBuilder;
            return this.wait(() =>
              this.transition(O, x, "back", this.canGoBack(2), !0, q)
            );
          }
          return Promise.resolve();
        }
        endBackTransition(x) {
          x
            ? ((this.skipTransition = !0), this.pop(1))
            : this.activeView &&
              Ir(
                this.activeView,
                this.views,
                this.views,
                this.location,
                this.zone
              );
        }
        getLastUrl(x) {
          const Z = this.getStack(x);
          return Z.length > 0 ? Z[Z.length - 1] : void 0;
        }
        getRootUrl(x) {
          const Z = this.getStack(x);
          return Z.length > 0 ? Z[0] : void 0;
        }
        getActiveStackId() {
          return this.activeView ? this.activeView.stackId : void 0;
        }
        getActiveView() {
          return this.activeView;
        }
        hasRunningTask() {
          return void 0 !== this.runningTask;
        }
        destroy() {
          (this.containerEl = void 0),
            this.views.forEach(ir),
            (this.activeView = void 0),
            (this.views = []);
        }
        getStack(x) {
          return this.views.filter((Z) => Z.stackId === x);
        }
        insertView(x, Z) {
          return (
            (this.activeView = x),
            (this.views = ((L, x, Z) =>
              "root" === Z
                ? hr(L, x)
                : "forward" === Z
                ? ((L, x) => (
                    L.indexOf(x) >= 0
                      ? (L = L.filter(
                          (O) => O.stackId !== x.stackId || O.id <= x.id
                        ))
                      : L.push(x),
                    L
                  ))(L, x)
                : ((L, x) =>
                    L.indexOf(x) >= 0
                      ? L.filter((O) => O.stackId !== x.stackId || O.id <= x.id)
                      : hr(L, x))(L, x))(this.views, x, Z)),
            this.views.slice()
          );
        }
        transition(x, Z, O, q, _, T) {
          if (this.skipTransition)
            return (this.skipTransition = !1), Promise.resolve(!1);
          if (Z === x) return Promise.resolve(!1);
          const V = x ? x.element : void 0,
            c = Z ? Z.element : void 0,
            v = this.containerEl;
          return V &&
            V !== c &&
            (V.classList.add("ion-page"),
            V.classList.add("ion-page-invisible"),
            v.commit)
            ? v.commit(V, c, {
                duration: void 0 === O ? 0 : void 0,
                direction: O,
                showGoBack: q,
                progressAnimation: _,
                animationBuilder: T,
              })
            : Promise.resolve(!1);
        }
        wait(x) {
          var Z = this;
          return (0, a.A)(function* () {
            void 0 !== Z.runningTask &&
              (yield Z.runningTask, (Z.runningTask = void 0));
            const O = (Z.runningTask = x());
            return O.finally(() => (Z.runningTask = void 0)), O;
          })();
        }
      }
      const ro = (L, x, Z, O, q) =>
          "function" == typeof requestAnimationFrame
            ? new Promise((_) => {
                requestAnimationFrame(() => {
                  Ir(L, x, Z, O, q), _();
                });
              })
            : Promise.resolve(),
        Ir = (L, x, Z, O, q) => {
          q.run(() => Z.filter((_) => !x.includes(_)).forEach(ir)),
            x.forEach((_) => {
              const V = O.path().split("?")[0].split("#")[0];
              if (_ !== L && _.url !== V) {
                const c = _.element;
                c.setAttribute("aria-hidden", "true"),
                  c.classList.add("ion-page-hidden"),
                  _.ref.changeDetectorRef.detach();
              }
            });
        };
      let Er = (() => {
        var L;
        class x {
          get activatedComponentRef() {
            return this.activated;
          }
          set animation(O) {
            this.nativeEl.animation = O;
          }
          set animated(O) {
            this.nativeEl.animated = O;
          }
          set swipeGesture(O) {
            (this._swipeGesture = O),
              (this.nativeEl.swipeHandler = O
                ? {
                    canStart: () =>
                      this.stackCtrl.canGoBack(1) &&
                      !this.stackCtrl.hasRunningTask(),
                    onStart: () => this.stackCtrl.startBackTransition(),
                    onEnd: (q) => this.stackCtrl.endBackTransition(q),
                  }
                : void 0);
          }
          constructor(O, q, _, T, V, c, v, E) {
            (0, l.A)(this, "parentOutlet", void 0),
              (0, l.A)(this, "nativeEl", void 0),
              (0, l.A)(this, "activatedView", null),
              (0, l.A)(this, "tabsPrefix", void 0),
              (0, l.A)(this, "_swipeGesture", void 0),
              (0, l.A)(this, "stackCtrl", void 0),
              (0, l.A)(this, "proxyMap", new WeakMap()),
              (0, l.A)(this, "currentActivatedRoute$", new In.t(null)),
              (0, l.A)(this, "activated", null),
              (0, l.A)(this, "_activatedRoute", null),
              (0, l.A)(this, "name", se.Xk),
              (0, l.A)(this, "stackWillChange", new j.bkB()),
              (0, l.A)(this, "stackDidChange", new j.bkB()),
              (0, l.A)(this, "activateEvents", new j.bkB()),
              (0, l.A)(this, "deactivateEvents", new j.bkB()),
              (0, l.A)(this, "parentContexts", (0, j.WQX)(se.Zp)),
              (0, l.A)(this, "location", (0, j.WQX)(j.c1b)),
              (0, l.A)(this, "environmentInjector", (0, j.WQX)(j.uvJ)),
              (0, l.A)(this, "inputBinder", (0, j.WQX)(_o, { optional: !0 })),
              (0, l.A)(this, "supportsBindingToComponentInputs", !0),
              (0, l.A)(this, "config", (0, j.WQX)(At)),
              (0, l.A)(this, "navCtrl", (0, j.WQX)(ie)),
              (this.parentOutlet = E),
              (this.nativeEl = T.nativeElement),
              (this.name = O || se.Xk),
              (this.tabsPrefix = "true" === q ? Mt(V, v) : void 0),
              (this.stackCtrl = new $r(
                this.tabsPrefix,
                this.nativeEl,
                V,
                this.navCtrl,
                c,
                _
              )),
              this.parentContexts.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            var O;
            this.stackCtrl.destroy(),
              null === (O = this.inputBinder) ||
                void 0 === O ||
                O.unsubscribeFromRouteData(this);
          }
          getContext() {
            return this.parentContexts.getContext(this.name);
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (!this.activated) {
              const O = this.getContext();
              null != O && O.route && this.activateWith(O.route, O.injector);
            }
            new Promise((O) =>
              ((L, x) => {
                L.componentOnReady
                  ? L.componentOnReady().then((Z) => x(Z))
                  : ((L) => {
                      "function" == typeof __zone_symbol__requestAnimationFrame
                        ? __zone_symbol__requestAnimationFrame(L)
                        : "function" == typeof requestAnimationFrame
                        ? requestAnimationFrame(L)
                        : setTimeout(L);
                    })(() => x(L));
              })(this.nativeEl, O)
            ).then(() => {
              void 0 === this._swipeGesture &&
                (this.swipeGesture = this.config.getBoolean(
                  "swipeBackEnabled",
                  "ios" === this.nativeEl.mode
                ));
            });
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            throw new Error("incompatible reuse strategy");
          }
          attach(O, q) {
            throw new Error("incompatible reuse strategy");
          }
          deactivate() {
            if (this.activated) {
              if (this.activatedView) {
                const q = this.getContext();
                this.activatedView.savedData = new Map(q.children.contexts);
                const _ = this.activatedView.savedData.get("primary");
                if (
                  (_ && q.route && (_.route = { ...q.route }),
                  (this.activatedView.savedExtras = {}),
                  q.route)
                ) {
                  const T = q.route.snapshot;
                  (this.activatedView.savedExtras.queryParams = T.queryParams),
                    (this.activatedView.savedExtras.fragment = T.fragment);
                }
              }
              const O = this.component;
              (this.activatedView = null),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(O);
            }
          }
          activateWith(O, q) {
            var _;
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = O;
            let T,
              V = this.stackCtrl.getExistingView(O);
            if (V) {
              T = this.activated = V.ref;
              const E = V.savedData;
              E && (this.getContext().children.contexts = E),
                this.updateActivatedRouteProxy(T.instance, O);
            } else {
              var c;
              const E = O._futureSnapshot,
                m = this.parentContexts.getOrCreateContext(this.name).children,
                R = new In.t(null),
                B = this.createActivatedRouteProxy(R, O),
                Re = new Qn(B, m, this.location.injector),
                et =
                  null !== (c = E.routeConfig.component) && void 0 !== c
                    ? c
                    : E.component;
              (T = this.activated =
                this.outletContent.createComponent(et, {
                  index: this.outletContent.length,
                  injector: Re,
                  environmentInjector: null != q ? q : this.environmentInjector,
                })),
                R.next(T.instance),
                (V = this.stackCtrl.createView(this.activated, O)),
                this.proxyMap.set(T.instance, B),
                this.currentActivatedRoute$.next({
                  component: T.instance,
                  activatedRoute: O,
                });
            }
            null === (_ = this.inputBinder) ||
              void 0 === _ ||
              _.bindActivatedRouteToOutletComponent(this),
              (this.activatedView = V),
              this.navCtrl.setTopOutlet(this);
            const v = this.stackCtrl.getActiveView();
            this.stackWillChange.emit({ enteringView: V, tabSwitch: yt(V, v) }),
              this.stackCtrl.setActive(V).then((E) => {
                this.activateEvents.emit(T.instance),
                  this.stackDidChange.emit(E);
              });
          }
          canGoBack(O = 1, q) {
            return this.stackCtrl.canGoBack(O, q);
          }
          pop(O = 1, q) {
            return this.stackCtrl.pop(O, q);
          }
          getLastUrl(O) {
            const q = this.stackCtrl.getLastUrl(O);
            return q ? q.url : void 0;
          }
          getLastRouteView(O) {
            return this.stackCtrl.getLastUrl(O);
          }
          getRootView(O) {
            return this.stackCtrl.getRootUrl(O);
          }
          getActiveStackId() {
            return this.stackCtrl.getActiveStackId();
          }
          createActivatedRouteProxy(O, q) {
            const _ = new se.nX();
            return (
              (_._futureSnapshot = q._futureSnapshot),
              (_._routerState = q._routerState),
              (_.snapshot = q.snapshot),
              (_.outlet = q.outlet),
              (_.component = q.component),
              (_._paramMap = this.proxyObservable(O, "paramMap")),
              (_._queryParamMap = this.proxyObservable(O, "queryParamMap")),
              (_.url = this.proxyObservable(O, "url")),
              (_.params = this.proxyObservable(O, "params")),
              (_.queryParams = this.proxyObservable(O, "queryParams")),
              (_.fragment = this.proxyObservable(O, "fragment")),
              (_.data = this.proxyObservable(O, "data")),
              _
            );
          }
          proxyObservable(O, q) {
            return O.pipe(
              (0, En.p)((_) => !!_),
              (0, Dr.n)((_) =>
                this.currentActivatedRoute$.pipe(
                  (0, En.p)((T) => null !== T && T.component === _),
                  (0, Dr.n)((T) => T && T.activatedRoute[q]),
                  (function xt(L, x = Et.D) {
                    return (
                      (L = null != L ? L : Nt),
                      (0, lr.N)((Z, O) => {
                        let q,
                          _ = !0;
                        Z.subscribe(
                          (0, kt._)(O, (T) => {
                            const V = x(T);
                            (_ || !L(q, V)) && ((_ = !1), (q = V), O.next(T));
                          })
                        );
                      })
                    );
                  })()
                )
              )
            );
          }
          updateActivatedRouteProxy(O, q) {
            const _ = this.proxyMap.get(O);
            if (!_)
              throw new Error("Could not find activated route proxy for view");
            (_._futureSnapshot = q._futureSnapshot),
              (_._routerState = q._routerState),
              (_.snapshot = q.snapshot),
              (_.outlet = q.outlet),
              (_.component = q.component),
              this.currentActivatedRoute$.next({
                component: O,
                activatedRoute: q,
              });
          }
        }
        return (
          (L = x),
          (0, l.A)(x, "\u0275fac", function (O) {
            return new (O ||
              L)(j.kS0("name"), j.kS0("tabs"), j.rXU(G.aZ), j.rXU(j.aKT), j.rXU(se.Ix), j.rXU(j.SKi), j.rXU(se.nX), j.rXU(L, 12));
          }),
          (0, l.A)(
            x,
            "\u0275dir",
            j.FsC({
              type: L,
              selectors: [["ion-router-outlet"]],
              inputs: {
                animated: "animated",
                animation: "animation",
                mode: "mode",
                swipeGesture: "swipeGesture",
                name: "name",
              },
              outputs: {
                stackWillChange: "stackWillChange",
                stackDidChange: "stackDidChange",
                activateEvents: "activate",
                deactivateEvents: "deactivate",
              },
              exportAs: ["outlet"],
            })
          ),
          x
        );
      })();
      class Qn {
        constructor(x, Z, O) {
          (0, l.A)(this, "route", void 0),
            (0, l.A)(this, "childContexts", void 0),
            (0, l.A)(this, "parent", void 0),
            (this.route = x),
            (this.childContexts = Z),
            (this.parent = O);
        }
        get(x, Z) {
          return x === se.nX
            ? this.route
            : x === se.Zp
            ? this.childContexts
            : this.parent.get(x, Z);
        }
      }
      const _o = new j.nKC("");
      let lo = (() => {
        var L;
        class x {
          constructor() {
            (0, l.A)(this, "outletDataSubscriptions", new Map());
          }
          bindActivatedRouteToOutletComponent(O) {
            this.unsubscribeFromRouteData(O), this.subscribeToRouteData(O);
          }
          unsubscribeFromRouteData(O) {
            var q;
            null === (q = this.outletDataSubscriptions.get(O)) ||
              void 0 === q ||
              q.unsubscribe(),
              this.outletDataSubscriptions.delete(O);
          }
          subscribeToRouteData(O) {
            const { activatedRoute: q } = O,
              _ = (0, An.z)([q.queryParams, q.params, q.data])
                .pipe(
                  (0, Dr.n)(
                    ([T, V, c], v) => (
                      (c = { ...T, ...V, ...c }),
                      0 === v ? (0, wn.of)(c) : Promise.resolve(c)
                    )
                  )
                )
                .subscribe((T) => {
                  if (
                    !O.isActivated ||
                    !O.activatedComponentRef ||
                    O.activatedRoute !== q ||
                    null === q.component
                  )
                    return void this.unsubscribeFromRouteData(O);
                  const V = (0, j.HJs)(q.component);
                  if (V)
                    for (const { templateName: c } of V.inputs)
                      O.activatedComponentRef.setInput(c, T[c]);
                  else this.unsubscribeFromRouteData(O);
                });
            this.outletDataSubscriptions.set(O, _);
          }
        }
        return (
          (L = x),
          (0, l.A)(x, "\u0275fac", function (O) {
            return new (O || L)();
          }),
          (0, l.A)(x, "\u0275prov", j.jDH({ token: L, factory: L.ɵfac })),
          x
        );
      })();
      const kn = () => ({ provide: _o, useFactory: Tn, deps: [se.Ix] });
      function Tn(L) {
        return null != L && L.componentInputBindingEnabled ? new lo() : null;
      }
      const $t = [
        "color",
        "defaultHref",
        "disabled",
        "icon",
        "mode",
        "routerAnimation",
        "text",
        "type",
      ];
      let Wn = (() => {
          var L;
          let x =
            ((0, l.A)(
              (L = class {
                constructor(O, q, _, T, V, c) {
                  (0, l.A)(this, "routerOutlet", void 0),
                    (0, l.A)(this, "navCtrl", void 0),
                    (0, l.A)(this, "config", void 0),
                    (0, l.A)(this, "r", void 0),
                    (0, l.A)(this, "z", void 0),
                    (0, l.A)(this, "el", void 0),
                    (this.routerOutlet = O),
                    (this.navCtrl = q),
                    (this.config = _),
                    (this.r = T),
                    (this.z = V),
                    c.detach(),
                    (this.el = this.r.nativeElement);
                }
                onClick(O) {
                  var q;
                  const _ =
                    this.defaultHref ||
                    this.config.get("backButtonDefaultHref");
                  null !== (q = this.routerOutlet) &&
                  void 0 !== q &&
                  q.canGoBack()
                    ? (this.navCtrl.setDirection(
                        "back",
                        void 0,
                        void 0,
                        this.routerAnimation
                      ),
                      this.routerOutlet.pop(),
                      O.preventDefault())
                    : null != _ &&
                      (this.navCtrl.navigateBack(_, {
                        animation: this.routerAnimation,
                      }),
                      O.preventDefault());
                }
              }),
              "\u0275fac",
              function (O) {
                return new (O || L)(
                  j.rXU(Er, 8),
                  j.rXU(ie),
                  j.rXU(At),
                  j.rXU(j.aKT),
                  j.rXU(j.SKi),
                  j.rXU(j.gRc)
                );
              }
            ),
            (0, l.A)(
              L,
              "\u0275dir",
              j.FsC({
                type: L,
                hostBindings: function (O, q) {
                  1 & O &&
                    j.bIt("click", function (T) {
                      return q.onClick(T);
                    });
                },
                inputs: {
                  color: "color",
                  defaultHref: "defaultHref",
                  disabled: "disabled",
                  icon: "icon",
                  mode: "mode",
                  routerAnimation: "routerAnimation",
                  text: "text",
                  type: "type",
                },
              })
            ),
            L);
          return (x = (0, Bn.Cg)([Ht({ inputs: $t })], x)), x;
        })(),
        yr = (() => {
          var L;
          class x {
            constructor(O, q, _, T, V) {
              (0, l.A)(this, "locationStrategy", void 0),
                (0, l.A)(this, "navCtrl", void 0),
                (0, l.A)(this, "elementRef", void 0),
                (0, l.A)(this, "router", void 0),
                (0, l.A)(this, "routerLink", void 0),
                (0, l.A)(this, "routerDirection", "forward"),
                (0, l.A)(this, "routerAnimation", void 0),
                (this.locationStrategy = O),
                (this.navCtrl = q),
                (this.elementRef = _),
                (this.router = T),
                (this.routerLink = V);
            }
            ngOnInit() {
              this.updateTargetUrlAndHref();
            }
            ngOnChanges() {
              this.updateTargetUrlAndHref();
            }
            updateTargetUrlAndHref() {
              var O;
              if (null !== (O = this.routerLink) && void 0 !== O && O.urlTree) {
                const q = this.locationStrategy.prepareExternalUrl(
                  this.router.serializeUrl(this.routerLink.urlTree)
                );
                this.elementRef.nativeElement.href = q;
              }
            }
            onClick(O) {
              this.navCtrl.setDirection(
                this.routerDirection,
                void 0,
                void 0,
                this.routerAnimation
              ),
                O.preventDefault();
            }
          }
          return (
            (L = x),
            (0, l.A)(x, "\u0275fac", function (O) {
              return new (O ||
                L)(j.rXU(G.hb), j.rXU(ie), j.rXU(j.aKT), j.rXU(se.Ix), j.rXU(se.Wk, 8));
            }),
            (0, l.A)(
              x,
              "\u0275dir",
              j.FsC({
                type: L,
                selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
                hostBindings: function (O, q) {
                  1 & O &&
                    j.bIt("click", function (T) {
                      return q.onClick(T);
                    });
                },
                inputs: {
                  routerDirection: "routerDirection",
                  routerAnimation: "routerAnimation",
                },
                features: [j.OA$],
              })
            ),
            x
          );
        })(),
        jn = (() => {
          var L;
          class x {
            constructor(O, q, _, T, V) {
              (0, l.A)(this, "locationStrategy", void 0),
                (0, l.A)(this, "navCtrl", void 0),
                (0, l.A)(this, "elementRef", void 0),
                (0, l.A)(this, "router", void 0),
                (0, l.A)(this, "routerLink", void 0),
                (0, l.A)(this, "routerDirection", "forward"),
                (0, l.A)(this, "routerAnimation", void 0),
                (this.locationStrategy = O),
                (this.navCtrl = q),
                (this.elementRef = _),
                (this.router = T),
                (this.routerLink = V);
            }
            ngOnInit() {
              this.updateTargetUrlAndHref();
            }
            ngOnChanges() {
              this.updateTargetUrlAndHref();
            }
            updateTargetUrlAndHref() {
              var O;
              if (null !== (O = this.routerLink) && void 0 !== O && O.urlTree) {
                const q = this.locationStrategy.prepareExternalUrl(
                  this.router.serializeUrl(this.routerLink.urlTree)
                );
                this.elementRef.nativeElement.href = q;
              }
            }
            onClick() {
              this.navCtrl.setDirection(
                this.routerDirection,
                void 0,
                void 0,
                this.routerAnimation
              );
            }
          }
          return (
            (L = x),
            (0, l.A)(x, "\u0275fac", function (O) {
              return new (O ||
                L)(j.rXU(G.hb), j.rXU(ie), j.rXU(j.aKT), j.rXU(se.Ix), j.rXU(se.Wk, 8));
            }),
            (0, l.A)(
              x,
              "\u0275dir",
              j.FsC({
                type: L,
                selectors: [
                  ["a", "routerLink", ""],
                  ["area", "routerLink", ""],
                ],
                hostBindings: function (O, q) {
                  1 & O &&
                    j.bIt("click", function () {
                      return q.onClick();
                    });
                },
                inputs: {
                  routerDirection: "routerDirection",
                  routerAnimation: "routerAnimation",
                },
                features: [j.OA$],
              })
            ),
            x
          );
        })();
      const gn = [
          "animated",
          "animation",
          "root",
          "rootParams",
          "swipeGesture",
        ],
        _n = [
          "push",
          "insert",
          "insertPages",
          "pop",
          "popTo",
          "popToRoot",
          "removeIndex",
          "setRoot",
          "setPages",
          "getActive",
          "getByIndex",
          "canGoBack",
          "getPrevious",
        ];
      let St = (() => {
          var L;
          let x =
            ((0, l.A)(
              (L = class {
                constructor(O, q, _, T, V, c) {
                  (0, l.A)(this, "z", void 0),
                    (0, l.A)(this, "el", void 0),
                    (this.z = V),
                    c.detach(),
                    (this.el = O.nativeElement),
                    (O.nativeElement.delegate = T.create(q, _)),
                    ur(this, this.el, ["ionNavDidChange", "ionNavWillChange"]);
                }
              }),
              "\u0275fac",
              function (O) {
                return new (O || L)(
                  j.rXU(j.aKT),
                  j.rXU(j.uvJ),
                  j.rXU(j.zZn),
                  j.rXU(Mn),
                  j.rXU(j.SKi),
                  j.rXU(j.gRc)
                );
              }
            ),
            (0, l.A)(
              L,
              "\u0275dir",
              j.FsC({
                type: L,
                inputs: {
                  animated: "animated",
                  animation: "animation",
                  root: "root",
                  rootParams: "rootParams",
                  swipeGesture: "swipeGesture",
                },
              })
            ),
            L);
          return (x = (0, Bn.Cg)([Ht({ inputs: gn, methods: _n })], x)), x;
        })(),
        pt = (() => {
          var L;
          class x {
            constructor(O) {
              (0, l.A)(this, "navCtrl", void 0),
                (0, l.A)(this, "tabsInner", void 0),
                (0, l.A)(this, "ionTabsWillChange", new j.bkB()),
                (0, l.A)(this, "ionTabsDidChange", new j.bkB()),
                (0, l.A)(this, "tabBarSlot", "bottom"),
                (this.navCtrl = O);
            }
            ngAfterContentInit() {
              this.detectSlotChanges();
            }
            ngAfterContentChecked() {
              this.detectSlotChanges();
            }
            onStackWillChange({ enteringView: O, tabSwitch: q }) {
              const _ = O.stackId;
              q && void 0 !== _ && this.ionTabsWillChange.emit({ tab: _ });
            }
            onStackDidChange({ enteringView: O, tabSwitch: q }) {
              const _ = O.stackId;
              q &&
                void 0 !== _ &&
                (this.tabBar && (this.tabBar.selectedTab = _),
                this.ionTabsDidChange.emit({ tab: _ }));
            }
            select(O) {
              const q = "string" == typeof O,
                _ = q ? O : O.detail.tab,
                T = this.outlet.getActiveStackId() === _,
                V = `${this.outlet.tabsPrefix}/${_}`;
              if ((q || O.stopPropagation(), T)) {
                const c = this.outlet.getActiveStackId(),
                  v = this.outlet.getLastRouteView(c);
                if ((null == v ? void 0 : v.url) === V) return;
                const E = this.outlet.getRootView(_);
                return this.navCtrl.navigateRoot(V, {
                  ...(E && V === E.url && E.savedExtras),
                  animated: !0,
                  animationDirection: "back",
                });
              }
              {
                const c = this.outlet.getLastRouteView(_);
                return this.navCtrl.navigateRoot(
                  (null == c ? void 0 : c.url) || V,
                  {
                    ...(null == c ? void 0 : c.savedExtras),
                    animated: !0,
                    animationDirection: "back",
                  }
                );
              }
            }
            getSelected() {
              return this.outlet.getActiveStackId();
            }
            detectSlotChanges() {
              this.tabBars.forEach((O) => {
                const q = O.el.getAttribute("slot");
                q !== this.tabBarSlot &&
                  ((this.tabBarSlot = q), this.relocateTabBar());
              });
            }
            relocateTabBar() {
              const O = this.tabBar.el;
              "top" === this.tabBarSlot
                ? this.tabsInner.nativeElement.before(O)
                : this.tabsInner.nativeElement.after(O);
            }
          }
          return (
            (L = x),
            (0, l.A)(x, "\u0275fac", function (O) {
              return new (O || L)(j.rXU(ie));
            }),
            (0, l.A)(
              x,
              "\u0275dir",
              j.FsC({
                type: L,
                selectors: [["ion-tabs"]],
                viewQuery: function (O, q) {
                  if ((1 & O && j.GBs(zn, 7, j.aKT), 2 & O)) {
                    let _;
                    j.mGM((_ = j.lsd())) && (q.tabsInner = _.first);
                  }
                },
                hostBindings: function (O, q) {
                  1 & O &&
                    j.bIt("ionTabButtonClick", function (T) {
                      return q.select(T);
                    });
                },
                outputs: {
                  ionTabsWillChange: "ionTabsWillChange",
                  ionTabsDidChange: "ionTabsDidChange",
                },
              })
            ),
            x
          );
        })();
      const co = (L) =>
        "function" == typeof __zone_symbol__requestAnimationFrame
          ? __zone_symbol__requestAnimationFrame(L)
          : "function" == typeof requestAnimationFrame
          ? requestAnimationFrame(L)
          : setTimeout(L);
      let Xn = (() => {
        var L;
        class x {
          constructor(O, q) {
            (0, l.A)(this, "injector", void 0),
              (0, l.A)(this, "elementRef", void 0),
              (0, l.A)(this, "onChange", () => {}),
              (0, l.A)(this, "onTouched", () => {}),
              (0, l.A)(this, "lastValue", void 0),
              (0, l.A)(this, "statusChanges", void 0),
              (this.injector = O),
              (this.elementRef = q);
          }
          writeValue(O) {
            (this.elementRef.nativeElement.value = this.lastValue = O),
              Vr(this.elementRef);
          }
          handleValueChange(O, q) {
            O === this.elementRef.nativeElement &&
              (q !== this.lastValue && ((this.lastValue = q), this.onChange(q)),
              Vr(this.elementRef));
          }
          _handleBlurEvent(O) {
            O === this.elementRef.nativeElement &&
              (this.onTouched(), Vr(this.elementRef));
          }
          registerOnChange(O) {
            this.onChange = O;
          }
          registerOnTouched(O) {
            this.onTouched = O;
          }
          setDisabledState(O) {
            this.elementRef.nativeElement.disabled = O;
          }
          ngOnDestroy() {
            this.statusChanges && this.statusChanges.unsubscribe();
          }
          ngAfterViewInit() {
            let O;
            try {
              O = this.injector.get(Zt.vO);
            } catch {}
            if (!O) return;
            O.statusChanges &&
              (this.statusChanges = O.statusChanges.subscribe(() =>
                Vr(this.elementRef)
              ));
            const q = O.control;
            q &&
              [
                "markAsTouched",
                "markAllAsTouched",
                "markAsUntouched",
                "markAsDirty",
                "markAsPristine",
              ].forEach((T) => {
                if (typeof q[T] < "u") {
                  const V = q[T].bind(q);
                  q[T] = (...c) => {
                    V(...c), Vr(this.elementRef);
                  };
                }
              });
          }
        }
        return (
          (L = x),
          (0, l.A)(x, "\u0275fac", function (O) {
            return new (O || L)(j.rXU(j.zZn), j.rXU(j.aKT));
          }),
          (0, l.A)(
            x,
            "\u0275dir",
            j.FsC({
              type: L,
              hostBindings: function (O, q) {
                1 & O &&
                  j.bIt("ionBlur", function (T) {
                    return q._handleBlurEvent(T.target);
                  });
              },
            })
          ),
          x
        );
      })();
      const Vr = (L) => {
          co(() => {
            const x = L.nativeElement,
              Z = null != x.value && x.value.toString().length > 0,
              O = No(x);
            uo(x, O);
            const q = x.closest("ion-item");
            q && uo(q, Z ? [...O, "item-has-value"] : O);
          });
        },
        No = (L) => {
          const x = L.classList,
            Z = [];
          for (let O = 0; O < x.length; O++) {
            const q = x.item(O);
            null !== q && Br(q, "ng-") && Z.push(`ion-${q.substring(3)}`);
          }
          return Z;
        },
        uo = (L, x) => {
          const Z = L.classList;
          Z.remove(
            "ion-valid",
            "ion-invalid",
            "ion-touched",
            "ion-untouched",
            "ion-dirty",
            "ion-pristine"
          ),
            Z.add(...x);
        },
        Br = (L, x) => L.substring(0, x.length) === x;
      class zt {
        shouldDetach(x) {
          return !1;
        }
        shouldAttach(x) {
          return !1;
        }
        store(x, Z) {}
        retrieve(x) {
          return null;
        }
        shouldReuseRoute(x, Z) {
          if (x.routeConfig !== Z.routeConfig) return !1;
          const O = x.params,
            q = Z.params,
            _ = Object.keys(O),
            T = Object.keys(q);
          if (_.length !== T.length) return !1;
          for (const V of _) if (q[V] !== O[V]) return !1;
          return !0;
        }
      }
      class oo {
        constructor(x) {
          (0, l.A)(this, "ctrl", void 0), (this.ctrl = x);
        }
        create(x) {
          return this.ctrl.create(x || {});
        }
        dismiss(x, Z, O) {
          return this.ctrl.dismiss(x, Z, O);
        }
        getTop() {
          return this.ctrl.getTop();
        }
      }
    },
    3819: (_t, He, F) => {
      "use strict";
      F.d(He, {
        U1: () => Rt,
        W9: () => In,
        eU: () => kt,
        Rg: () => kn,
        BC: () => Er,
        ai: () => lo,
        bv: () => V,
      });
      var a = F(9842),
        l = F(4438),
        j = F(4341),
        se = F(5032),
        G = F(1635),
        ae = F(3726),
        X = F(177),
        $e = F(70),
        ce = (F(9986), F(6861), F(9435), F(3792), F(8607), F(694)),
        ue = F(464),
        Oe = (F(9560), F(3972)),
        we = (F(8476), F(8737));
      F(1970), F(2723);
      var xe = F(467);
      const Me = ce.i,
        he = (function () {
          var c = (0, xe.A)(function* (v, E) {
            if (!(typeof window > "u"))
              return (
                yield Me(),
                (0, we.b)(
                  JSON.parse(
                    '[["ion-menu_3",[[33,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[33,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"]],{"type":["typeChanged"],"disabled":["disabledChanged"],"side":["sideChanged"],"swipeGesture":["swipeGestureChanged"]}],[1,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-input-password-toggle",[[33,"ion-input-password-toggle",{"color":[513],"showIcon":[1,"show-icon"],"hideIcon":[1,"hide-icon"],"type":[1025]},null,{"type":["onTypeChange"]}]]],["ion-fab_3",[[33,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[1,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]},null,{"activated":["activatedChanged"]}],[1,"ion-fab-list",{"activated":[4],"side":[1]},null,{"activated":["activatedChanged"]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"layout":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"positionAnchor":[1,"position-anchor"],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"swipeGesture":[1,"swipe-gesture"],"isOpen":[4,"is-open"],"trigger":[1],"revealContentToScreenReader":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"swipeGesture":["swipeGestureChanged"],"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-card_5",[[33,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[33,"ion-card-header",{"color":[513],"translucent":[4]}],[33,"ion-card-subtitle",{"color":[513]}],[33,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[33,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-accordion_2",[[49,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]},null,{"value":["valueChanged"]}],[33,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]],{"value":["valueChanged"],"disabled":["disabledChanged"],"readonly":["readonlyChanged"]}]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]},null,{"threshold":["thresholdChanged"],"disabled":["disabledChanged"]}]]],["ion-reorder_2",[[33,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-segment_2",[[33,"ion-segment-button",{"disabled":[1028],"layout":[1],"type":[1],"value":[8],"checked":[32],"setFocus":[64]},null,{"value":["valueChanged"]}],[33,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[0,"keydown","onKeyDown"]],{"color":["colorChanged"],"swipeGesture":["swipeGestureChanged"],"value":["valueChanged"],"disabled":["disabledChanged"]}]]],["ion-tab-bar_2",[[33,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[33,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},null,{"selectedTab":["selectedTabChanged"]}]]],["ion-chip",[[33,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-datetime-button",[[33,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-input",[[38,"ion-input",{"color":[513],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"counter":[4],"counterFormatter":[16],"debounce":[2],"disabled":[516],"enterkeyhint":[1],"errorText":[1,"error-text"],"fill":[1],"inputmode":[1],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[516],"required":[4],"shape":[1],"spellcheck":[4],"step":[1],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"type":["onTypeChange"],"value":["valueChanged"]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]},null,{"lang":["onLangChanged"],"dir":["onDirChanged"],"debounce":["debounceChanged"],"value":["valueChanged"],"showCancelButton":["showCancelButtonChanged"]}]]],["ion-toggle",[[33,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"activated":[32]},null,{"disabled":["disabledChanged"]}]]],["ion-nav_2",[[1,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64],"getLength":[64]},null,{"swipeGesture":["swipeGestureChanged"],"root":["rootChanged"]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-textarea",[[38,"ion-textarea",{"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"fill":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[514],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"counter":[4],"counterFormatter":[16],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"shape":[1],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"value":["valueChanged"]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-breadcrumb_2",[[33,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[33,"ion-breadcrumbs",{"color":[513],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]],{"maxItems":["maxItemsChanged"],"itemsBeforeCollapse":["maxItemsChanged"],"itemsAfterCollapse":["maxItemsChanged"]}]]],["ion-modal",[[33,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"canDismiss":[4,"can-dismiss"],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]},null,{"url":["onUpdate"],"component":["onUpdate"],"componentProps":["onComponentProps"]}],[0,"ion-route-redirect",{"from":[1],"to":[1]},null,{"from":["propDidChange"],"to":["propDidChange"]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[1,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-avatar_3",[[33,"ion-avatar"],[33,"ion-badge",{"color":[513]}],[1,"ion-thumbnail"]]],["ion-col_3",[[1,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"ion-grid",{"fixed":[4]}],[1,"ion-row"]]],["ion-tab_2",[[1,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]},null,{"active":["changeActive"]}],[1,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]},null,{"src":["srcChanged"]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[33,"ion-range",{"color":[513],"debounce":[2],"name":[1],"label":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"labelPlacement":[1,"label-placement"],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]},null,{"debounce":["debounceChanged"],"min":["minChanged"],"max":["maxChanged"],"activeBarStart":["activeBarStartChanged"],"disabled":["disabledChanged"],"value":["valueChanged"]}]]],["ion-split-pane",[[33,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32],"isVisible":[64]},null,{"visible":["visibleChanged"],"disabled":["updateState"],"when":["updateState"]}]]],["ion-text",[[1,"ion-text",{"color":[513]}]]],["ion-select_3",[[33,"ion-select",{"cancelText":[1,"cancel-text"],"color":[513],"compareWith":[1,"compare-with"],"disabled":[4],"fill":[1],"interface":[1],"interfaceOptions":[8,"interface-options"],"justify":[1],"label":[1],"labelPlacement":[1,"label-placement"],"multiple":[4],"name":[1],"okText":[1,"ok-text"],"placeholder":[1],"selectedText":[1,"selected-text"],"toggleIcon":[1,"toggle-icon"],"expandedIcon":[1,"expanded-icon"],"shape":[1],"value":[1032],"isExpanded":[32],"open":[64]},null,{"disabled":["styleChanged"],"isExpanded":["styleChanged"],"placeholder":["styleChanged"],"value":["styleChanged"]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]}]]],["ion-picker",[[33,"ion-picker",{"exitInputMode":[64]},[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-picker-column",[[1,"ion-picker-column",{"disabled":[4],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64],"setFocus":[64]},null,{"value":["valueChange"]}]]],["ion-datetime_3",[[33,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"formatOptions":[16],"readonly":[4],"isDateEnabled":[16],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"highlightedDates":[16],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isTimePopoverOpen":[32],"forceRenderDate":[32],"confirm":[64],"reset":[64],"cancel":[64]},null,{"formatOptions":["formatOptionsChanged"],"disabled":["disabledChanged"],"min":["minChanged"],"max":["maxChanged"],"presentation":["presentationChanged"],"yearValues":["yearValuesChanged"],"monthValues":["monthValuesChanged"],"dayValues":["dayValuesChanged"],"hourValues":["hourValuesChanged"],"minuteValues":["minuteValuesChanged"],"value":["valueChanged"]}],[34,"ion-picker-legacy",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}],[32,"ion-picker-legacy-column",{"col":[16]},null,{"col":["colChanged"]}]]],["ion-radio_2",[[33,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]},null,{"value":["valueChanged"]}],[0,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"compareWith":[1,"compare-with"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]],{"value":["valueChanged"]}]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[33,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1],"isCircle":[32]},null,{"disabled":["disabledChanged"]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]},null,{"name":["loadIcon"],"src":["loadIcon"],"icon":["loadIcon"],"ios":["loadIcon"],"md":["loadIcon"]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]],{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"],"buttons":["buttonsChanged"],"inputs":["inputsChanged"]}]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[1,"ion-content",{"color":[513],"fullscreen":[4],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[9,"resize","onResize"]]],[36,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[36,"ion-header",{"collapse":[1],"translucent":[4]}],[1,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]},null,{"swipeHandler":["swipeHandlerChanged"]}],[33,"ion-title",{"color":[513],"size":[1]},null,{"size":["sizeChanged"]}],[33,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[38,"ion-buttons",{"collapse":[4]}]]],["ion-picker-column-option",[[33,"ion-picker-column-option",{"disabled":[4],"value":[8],"color":[513],"ariaLabel":[32]},null,{"aria-label":["onAriaLabelChange"]}]]],["ion-popover",[[33,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"trigger":["onTriggerChange"],"triggerAction":["onTriggerChange"],"isOpen":["onIsOpenChange"]}]]],["ion-checkbox",[[33,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-item_8",[[33,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[33,"ion-note",{"color":[513]}],[1,"ion-skeleton-text",{"animated":[4]}],[33,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"href":[1],"rel":[1],"lines":[1],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32],"focusable":[32]},[[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]],{"button":["buttonChanged"]}],[38,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]},null,{"color":["colorChanged"],"position":["positionChanged"]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}],[33,"ion-list-header",{"color":[513],"lines":[1]}]]]]'
                  ),
                  E
                )
              );
          });
          return function (E, m) {
            return c.apply(this, arguments);
          };
        })(),
        Y = ["*"],
        Se = ["outletContent"],
        J = (c, v) => {
          const E = c.prototype;
          v.forEach((m) => {
            Object.defineProperty(E, m, {
              get() {
                return this.el[m];
              },
              set(R) {
                this.z.runOutsideAngular(() => (this.el[m] = R));
              },
              configurable: !0,
            });
          });
        },
        re = (c, v) => {
          const E = c.prototype;
          v.forEach((m) => {
            E[m] = function () {
              const R = arguments;
              return this.z.runOutsideAngular(() =>
                this.el[m].apply(this.el, R)
              );
            };
          });
        };
      function me(c) {
        return function (E) {
          const { defineCustomElementFn: m, inputs: R, methods: B } = c;
          return void 0 !== m && m(), R && J(E, R), B && re(E, B), E;
        };
      }
      let Rt = (() => {
          var c;
          let v =
            ((0, a.A)(
              (c = class {
                constructor(m, R, B) {
                  (0, a.A)(this, "z", void 0),
                    (0, a.A)(this, "el", void 0),
                    (this.z = B),
                    m.detach(),
                    (this.el = R.nativeElement);
                }
              }),
              "\u0275fac",
              function (m) {
                return new (m || c)(l.rXU(l.gRc), l.rXU(l.aKT), l.rXU(l.SKi));
              }
            ),
            (0, a.A)(
              c,
              "\u0275cmp",
              l.VBU({
                type: c,
                selectors: [["ion-app"]],
                ngContentSelectors: Y,
                decls: 1,
                vars: 0,
                template: function (m, R) {
                  1 & m && (l.NAR(), l.SdG(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              })
            ),
            c);
          return (v = (0, G.Cg)([me({})], v)), v;
        })(),
        In = (() => {
          var c;
          let v =
            ((0, a.A)(
              (c = class {
                constructor(m, R, B) {
                  (0, a.A)(this, "z", void 0),
                    (0, a.A)(this, "el", void 0),
                    (this.z = B),
                    m.detach(),
                    (this.el = R.nativeElement),
                    ((c, v, E) => {
                      E.forEach((m) => (c[m] = (0, ae.R)(v, m)));
                    })(this, this.el, [
                      "ionScrollStart",
                      "ionScroll",
                      "ionScrollEnd",
                    ]);
                }
              }),
              "\u0275fac",
              function (m) {
                return new (m || c)(l.rXU(l.gRc), l.rXU(l.aKT), l.rXU(l.SKi));
              }
            ),
            (0, a.A)(
              c,
              "\u0275cmp",
              l.VBU({
                type: c,
                selectors: [["ion-content"]],
                inputs: {
                  color: "color",
                  forceOverscroll: "forceOverscroll",
                  fullscreen: "fullscreen",
                  scrollEvents: "scrollEvents",
                  scrollX: "scrollX",
                  scrollY: "scrollY",
                },
                ngContentSelectors: Y,
                decls: 1,
                vars: 0,
                template: function (m, R) {
                  1 & m && (l.NAR(), l.SdG(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              })
            ),
            c);
          return (
            (v = (0, G.Cg)(
              [
                me({
                  inputs: [
                    "color",
                    "forceOverscroll",
                    "fullscreen",
                    "scrollEvents",
                    "scrollX",
                    "scrollY",
                  ],
                  methods: [
                    "getScrollElement",
                    "scrollToTop",
                    "scrollToBottom",
                    "scrollByPoint",
                    "scrollToPoint",
                  ],
                }),
              ],
              v
            )),
            v
          );
        })(),
        kt = (() => {
          var c;
          let v =
            ((0, a.A)(
              (c = class {
                constructor(m, R, B) {
                  (0, a.A)(this, "z", void 0),
                    (0, a.A)(this, "el", void 0),
                    (this.z = B),
                    m.detach(),
                    (this.el = R.nativeElement);
                }
              }),
              "\u0275fac",
              function (m) {
                return new (m || c)(l.rXU(l.gRc), l.rXU(l.aKT), l.rXU(l.SKi));
              }
            ),
            (0, a.A)(
              c,
              "\u0275cmp",
              l.VBU({
                type: c,
                selectors: [["ion-header"]],
                inputs: {
                  collapse: "collapse",
                  mode: "mode",
                  translucent: "translucent",
                },
                ngContentSelectors: Y,
                decls: 1,
                vars: 0,
                template: function (m, R) {
                  1 & m && (l.NAR(), l.SdG(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              })
            ),
            c);
          return (
            (v = (0, G.Cg)(
              [me({ inputs: ["collapse", "mode", "translucent"] })],
              v
            )),
            v
          );
        })(),
        Er = (() => {
          var c;
          let v =
            ((0, a.A)(
              (c = class {
                constructor(m, R, B) {
                  (0, a.A)(this, "z", void 0),
                    (0, a.A)(this, "el", void 0),
                    (this.z = B),
                    m.detach(),
                    (this.el = R.nativeElement);
                }
              }),
              "\u0275fac",
              function (m) {
                return new (m || c)(l.rXU(l.gRc), l.rXU(l.aKT), l.rXU(l.SKi));
              }
            ),
            (0, a.A)(
              c,
              "\u0275cmp",
              l.VBU({
                type: c,
                selectors: [["ion-title"]],
                inputs: { color: "color", size: "size" },
                ngContentSelectors: Y,
                decls: 1,
                vars: 0,
                template: function (m, R) {
                  1 & m && (l.NAR(), l.SdG(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              })
            ),
            c);
          return (v = (0, G.Cg)([me({ inputs: ["color", "size"] })], v)), v;
        })(),
        lo = (() => {
          var c;
          let v =
            ((0, a.A)(
              (c = class {
                constructor(m, R, B) {
                  (0, a.A)(this, "z", void 0),
                    (0, a.A)(this, "el", void 0),
                    (this.z = B),
                    m.detach(),
                    (this.el = R.nativeElement);
                }
              }),
              "\u0275fac",
              function (m) {
                return new (m || c)(l.rXU(l.gRc), l.rXU(l.aKT), l.rXU(l.SKi));
              }
            ),
            (0, a.A)(
              c,
              "\u0275cmp",
              l.VBU({
                type: c,
                selectors: [["ion-toolbar"]],
                inputs: { color: "color", mode: "mode" },
                ngContentSelectors: Y,
                decls: 1,
                vars: 0,
                template: function (m, R) {
                  1 & m && (l.NAR(), l.SdG(0));
                },
                encapsulation: 2,
                changeDetection: 0,
              })
            ),
            c);
          return (v = (0, G.Cg)([me({ inputs: ["color", "mode"] })], v)), v;
        })(),
        kn = (() => {
          var c;
          class v extends se.Rg {
            constructor(m, R, B, Re, et, tt, Dt, Ze) {
              super(m, R, B, Re, et, tt, Dt, Ze),
                (0, a.A)(this, "parentOutlet", void 0),
                (0, a.A)(this, "outletContent", void 0),
                (this.parentOutlet = Ze);
            }
          }
          return (
            (c = v),
            (0, a.A)(v, "\u0275fac", function (m) {
              return new (m ||
                c)(l.kS0("name"), l.kS0("tabs"), l.rXU(X.aZ), l.rXU(l.aKT), l.rXU($e.Ix), l.rXU(l.SKi), l.rXU($e.nX), l.rXU(c, 12));
            }),
            (0, a.A)(
              v,
              "\u0275cmp",
              l.VBU({
                type: c,
                selectors: [["ion-router-outlet"]],
                viewQuery: function (m, R) {
                  if ((1 & m && l.GBs(Se, 7, l.c1b), 2 & m)) {
                    let B;
                    l.mGM((B = l.lsd())) && (R.outletContent = B.first);
                  }
                },
                features: [l.Vt3],
                ngContentSelectors: Y,
                decls: 3,
                vars: 0,
                consts: [["outletContent", ""]],
                template: function (m, R) {
                  1 & m && (l.NAR(), l.qex(0, null, 0), l.SdG(2), l.bVm());
                },
                encapsulation: 2,
              })
            ),
            v
          );
        })();
      const St = {
        provide: j.cz,
        useExisting: (0, l.Rfq)(() => pt),
        multi: !0,
      };
      let pt = (() => {
        var c;
        class v extends j.zX {}
        return (
          (c = v),
          (0, a.A)(
            v,
            "\u0275fac",
            (() => {
              let E;
              return function (R) {
                return (E || (E = l.xGo(c)))(R || c);
              };
            })()
          ),
          (0, a.A)(
            v,
            "\u0275dir",
            l.FsC({
              type: c,
              selectors: [
                [
                  "ion-input",
                  "type",
                  "number",
                  "max",
                  "",
                  "formControlName",
                  "",
                ],
                ["ion-input", "type", "number", "max", "", "formControl", ""],
                ["ion-input", "type", "number", "max", "", "ngModel", ""],
              ],
              hostVars: 1,
              hostBindings: function (m, R) {
                2 & m && l.BMQ("max", R._enabled ? R.max : null);
              },
              features: [l.Jv_([St]), l.Vt3],
            })
          ),
          v
        );
      })();
      const co = {
        provide: j.cz,
        useExisting: (0, l.Rfq)(() => Xn),
        multi: !0,
      };
      let Xn = (() => {
          var c;
          class v extends j.VZ {}
          return (
            (c = v),
            (0, a.A)(
              v,
              "\u0275fac",
              (() => {
                let E;
                return function (R) {
                  return (E || (E = l.xGo(c)))(R || c);
                };
              })()
            ),
            (0, a.A)(
              v,
              "\u0275dir",
              l.FsC({
                type: c,
                selectors: [
                  [
                    "ion-input",
                    "type",
                    "number",
                    "min",
                    "",
                    "formControlName",
                    "",
                  ],
                  ["ion-input", "type", "number", "min", "", "formControl", ""],
                  ["ion-input", "type", "number", "min", "", "ngModel", ""],
                ],
                hostVars: 1,
                hostBindings: function (m, R) {
                  2 & m && l.BMQ("min", R._enabled ? R.min : null);
                },
                features: [l.Jv_([co]), l.Vt3],
              })
            ),
            v
          );
        })(),
        L = (() => {
          var c;
          class v extends se.Kb {
            constructor() {
              super(Oe.m),
                (0, a.A)(this, "angularDelegate", (0, l.WQX)(se.Yq)),
                (0, a.A)(this, "injector", (0, l.WQX)(l.zZn)),
                (0, a.A)(this, "environmentInjector", (0, l.WQX)(l.uvJ));
            }
            create(m) {
              return super.create({
                ...m,
                delegate: this.angularDelegate.create(
                  this.environmentInjector,
                  this.injector,
                  "modal"
                ),
              });
            }
          }
          return (
            (c = v),
            (0, a.A)(v, "\u0275fac", function (m) {
              return new (m || c)();
            }),
            (0, a.A)(v, "\u0275prov", l.jDH({ token: c, factory: c.ɵfac })),
            v
          );
        })();
      class Z extends se.Kb {
        constructor() {
          super(Oe.c),
            (0, a.A)(this, "angularDelegate", (0, l.WQX)(se.Yq)),
            (0, a.A)(this, "injector", (0, l.WQX)(l.zZn)),
            (0, a.A)(this, "environmentInjector", (0, l.WQX)(l.uvJ));
        }
        create(v) {
          return super.create({
            ...v,
            delegate: this.angularDelegate.create(
              this.environmentInjector,
              this.injector,
              "popover"
            ),
          });
        }
      }
      const q = (c, v, E) => () => {
        const m = v.defaultView;
        if (m && typeof window < "u") {
          (0, ue.s)({ ...c, _zoneGate: (B) => E.run(B) });
          const R =
            "__zone_symbol__addEventListener" in v.body
              ? "__zone_symbol__addEventListener"
              : "addEventListener";
          return (function fe() {
            var c = [];
            if (typeof window < "u") {
              var v = window;
              (!v.customElements ||
                (v.Element &&
                  (!v.Element.prototype.closest ||
                    !v.Element.prototype.matches ||
                    !v.Element.prototype.remove ||
                    !v.Element.prototype.getRootNode))) &&
                c.push(F.e(7278).then(F.t.bind(F, 2190, 23))),
                ("function" != typeof Object.assign ||
                  !Object.entries ||
                  !Array.prototype.find ||
                  !Array.prototype.includes ||
                  !String.prototype.startsWith ||
                  !String.prototype.endsWith ||
                  (v.NodeList && !v.NodeList.prototype.forEach) ||
                  !v.fetch ||
                  !(function () {
                    try {
                      var m = new URL("b", "http://a");
                      return (
                        (m.pathname = "c%20d"),
                        "http://a/c%20d" === m.href && m.searchParams
                      );
                    } catch {
                      return !1;
                    }
                  })() ||
                  typeof WeakMap > "u") &&
                  c.push(F.e(9329).then(F.t.bind(F, 7783, 23)));
            }
            return Promise.all(c);
          })().then(() =>
            he(m, {
              exclude: ["ion-tabs", "ion-tab"],
              syncQueue: !0,
              raf: se.er,
              jmp: (B) => E.runOutsideAngular(B),
              ael(B, Re, et, tt) {
                B[R](Re, et, tt);
              },
              rel(B, Re, et, tt) {
                B.removeEventListener(Re, et, tt);
              },
            })
          );
        }
      };
      let V = (() => {
        var c;
        class v {
          static forRoot(m) {
            return {
              ngModule: v,
              providers: [
                { provide: se.sR, useValue: m },
                {
                  provide: l.hnV,
                  useFactory: q,
                  multi: !0,
                  deps: [se.sR, X.qQ, l.SKi],
                },
                (0, se.YV)(),
              ],
            };
          }
        }
        return (
          (c = v),
          (0, a.A)(v, "\u0275fac", function (m) {
            return new (m || c)();
          }),
          (0, a.A)(v, "\u0275mod", l.$C({ type: c })),
          (0, a.A)(
            v,
            "\u0275inj",
            l.G2t({ providers: [se.Yq, L, Z], imports: [X.MD] })
          ),
          v
        );
      })();
    },
    467: (_t, He, F) => {
      "use strict";
      function a(j, se, G, ae, X, $e, Ne) {
        try {
          var Ie = j[$e](Ne),
            ne = Ie.value;
        } catch (De) {
          return void G(De);
        }
        Ie.done ? se(ne) : Promise.resolve(ne).then(ae, X);
      }
      function l(j) {
        return function () {
          var se = this,
            G = arguments;
          return new Promise(function (ae, X) {
            var $e = j.apply(se, G);
            function Ne(ne) {
              a($e, ae, X, Ne, Ie, "next", ne);
            }
            function Ie(ne) {
              a($e, ae, X, Ne, Ie, "throw", ne);
            }
            Ne(void 0);
          });
        };
      }
      F.d(He, { A: () => l });
    },
    9842: (_t, He, F) => {
      "use strict";
      function a(G) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (ae) {
                return typeof ae;
              }
            : function (ae) {
                return ae &&
                  "function" == typeof Symbol &&
                  ae.constructor === Symbol &&
                  ae !== Symbol.prototype
                  ? "symbol"
                  : typeof ae;
              })(G);
      }
      function se(G, ae, X) {
        return (
          (ae = (function j(G) {
            var ae = (function l(G, ae) {
              if ("object" != a(G) || !G) return G;
              var X = G[Symbol.toPrimitive];
              if (void 0 !== X) {
                var $e = X.call(G, ae || "default");
                if ("object" != a($e)) return $e;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === ae ? String : Number)(G);
            })(G, "string");
            return "symbol" == a(ae) ? ae : String(ae);
          })(ae)) in G
            ? Object.defineProperty(G, ae, {
                value: X,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (G[ae] = X),
          G
        );
      }
      F.d(He, { A: () => se });
    },
    1635: (_t, He, F) => {
      "use strict";
      function G(ee, K, J, re) {
        var me,
          be = arguments.length,
          ge =
            be < 3
              ? K
              : null === re
              ? (re = Object.getOwnPropertyDescriptor(K, J))
              : re;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          ge = Reflect.decorate(ee, K, J, re);
        else
          for (var ft = ee.length - 1; ft >= 0; ft--)
            (me = ee[ft]) &&
              (ge = (be < 3 ? me(ge) : be > 3 ? me(K, J, ge) : me(K, J)) || ge);
        return be > 3 && ge && Object.defineProperty(K, J, ge), ge;
      }
      function De(ee, K, J, re) {
        return new (J || (J = Promise))(function (ge, me) {
          function ft(It) {
            try {
              lt(re.next(It));
            } catch (Rt) {
              me(Rt);
            }
          }
          function Tt(It) {
            try {
              lt(re.throw(It));
            } catch (Rt) {
              me(Rt);
            }
          }
          function lt(It) {
            It.done
              ? ge(It.value)
              : (function be(ge) {
                  return ge instanceof J
                    ? ge
                    : new J(function (me) {
                        me(ge);
                      });
                })(It.value).then(ft, Tt);
          }
          lt((re = re.apply(ee, K || [])).next());
        });
      }
      function Ae(ee) {
        return this instanceof Ae ? ((this.v = ee), this) : new Ae(ee);
      }
      function te(ee, K, J) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var be,
          re = J.apply(ee, K || []),
          ge = [];
        return (
          (be = {}),
          me("next"),
          me("throw"),
          me("return"),
          (be[Symbol.asyncIterator] = function () {
            return this;
          }),
          be
        );
        function me(Ot) {
          re[Ot] &&
            (be[Ot] = function (Yt) {
              return new Promise(function (tn, an) {
                ge.push([Ot, Yt, tn, an]) > 1 || ft(Ot, Yt);
              });
            });
        }
        function ft(Ot, Yt) {
          try {
            !(function Tt(Ot) {
              Ot.value instanceof Ae
                ? Promise.resolve(Ot.value.v).then(lt, It)
                : Rt(ge[0][2], Ot);
            })(re[Ot](Yt));
          } catch (tn) {
            Rt(ge[0][3], tn);
          }
        }
        function lt(Ot) {
          ft("next", Ot);
        }
        function It(Ot) {
          ft("throw", Ot);
        }
        function Rt(Ot, Yt) {
          Ot(Yt), ge.shift(), ge.length && ft(ge[0][0], ge[0][1]);
        }
      }
      function xe(ee) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var J,
          K = ee[Symbol.asyncIterator];
        return K
          ? K.call(ee)
          : ((ee = (function ke(ee) {
              var K = "function" == typeof Symbol && Symbol.iterator,
                J = K && ee[K],
                re = 0;
              if (J) return J.call(ee);
              if (ee && "number" == typeof ee.length)
                return {
                  next: function () {
                    return (
                      ee && re >= ee.length && (ee = void 0),
                      { value: ee && ee[re++], done: !ee }
                    );
                  },
                };
              throw new TypeError(
                K
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(ee)),
            (J = {}),
            re("next"),
            re("throw"),
            re("return"),
            (J[Symbol.asyncIterator] = function () {
              return this;
            }),
            J);
        function re(ge) {
          J[ge] =
            ee[ge] &&
            function (me) {
              return new Promise(function (ft, Tt) {
                !(function be(ge, me, ft, Tt) {
                  Promise.resolve(Tt).then(function (lt) {
                    ge({ value: lt, done: ft });
                  }, me);
                })(ft, Tt, (me = ee[ge](me)).done, me.value);
              });
            };
        }
      }
      F.d(He, {
        AQ: () => te,
        Cg: () => G,
        N3: () => Ae,
        sH: () => De,
        xN: () => xe,
      }),
        "function" == typeof SuppressedError && SuppressedError;
    },
  },
  (_t) => {
    _t((_t.s = 7126));
  },
]);
