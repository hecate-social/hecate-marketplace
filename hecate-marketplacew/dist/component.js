typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const Ws = 1, Js = 2, Xs = 16, Qs = 1, Zs = 2, Kr = "[", vr = "[!", gn = "[?", Wr = "]", Rt = {}, ee = /* @__PURE__ */ Symbol(), Nn = "http://www.w3.org/1999/xhtml", Pr = !1;
var Ln = Array.isArray, ei = Array.prototype.indexOf, Nt = Array.prototype.includes, dr = Array.from, fr = Object.keys, ur = Object.defineProperty, Ct = Object.getOwnPropertyDescriptor, ti = Object.prototype, ri = Array.prototype, ni = Object.getPrototypeOf, xn = Object.isExtensible;
const si = () => {
};
function ii(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function On() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const te = 2, _r = 4, hr = 8, In = 1 << 24, Je = 16, Me = 32, ct = 64, Fr = 128, Ee = 512, J = 1024, re = 2048, Ie = 4096, xe = 8192, Ke = 16384, ft = 32768, Lt = 65536, bn = 1 << 17, Mn = 1 << 18, Tt = 1 << 19, ai = 1 << 20, st = 1 << 25, $t = 65536, jr = 1 << 21, Jr = 1 << 22, at = 1 << 23, Or = /* @__PURE__ */ Symbol("$state"), li = /* @__PURE__ */ Symbol("legacy props"), oi = /* @__PURE__ */ Symbol(""), pt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), fi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Xt = 3, Qt = 8;
function Dn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ui() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ci(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function vi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function di() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function _i(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function hi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function pi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function gi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function bi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function mi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function pr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function wi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let C = !1;
function Ge(e) {
  C = e;
}
let R;
function se(e) {
  if (e === null)
    throw pr(), Rt;
  return R = e;
}
function gr() {
  return se(/* @__PURE__ */ He(R));
}
function h(e) {
  if (C) {
    if (/* @__PURE__ */ He(R) !== null)
      throw pr(), Rt;
    R = e;
  }
}
function ar(e = 1) {
  if (C) {
    for (var t = e, r = R; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ He(r);
    R = r;
  }
}
function cr(e = !0) {
  for (var t = 0, r = R; ; ) {
    if (r.nodeType === Qt) {
      var n = (
        /** @type {Comment} */
        r.data
      );
      if (n === Wr) {
        if (t === 0) return r;
        t -= 1;
      } else (n === Kr || n === vr || // "[1", "[2", etc. for if blocks
      n[0] === "[" && !isNaN(Number(n.slice(1)))) && (t += 1);
    }
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ He(r)
    );
    e && r.remove(), r = s;
  }
}
function Pn(e) {
  if (!e || e.nodeType !== Qt)
    throw pr(), Rt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Fn(e) {
  return e === this.v;
}
function yi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function jn(e) {
  return !yi(e, this.v);
}
let $i = !1, ce = null;
function Ot(e) {
  ce = e;
}
function Hn(e, t = !1, r) {
  ce = {
    p: ce,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Bn(e) {
  var t = (
    /** @type {ComponentContext} */
    ce
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      fs(n);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ce = t.p, e ?? /** @type {T} */
  {};
}
function Vn() {
  return !0;
}
let gt = [];
function Un() {
  var e = gt;
  gt = [], ii(e);
}
function mt(e) {
  if (gt.length === 0 && !Kt) {
    var t = gt;
    queueMicrotask(() => {
      t === gt && Un();
    });
  }
  gt.push(e);
}
function Ei() {
  for (; gt.length > 0; )
    Un();
}
function qn(e) {
  var t = S;
  if (t === null)
    return k.f |= at, e;
  if ((t.f & ft) === 0 && (t.f & _r) === 0)
    throw e;
  it(e, t);
}
function it(e, t) {
  for (; t !== null; ) {
    if ((t.f & Fr) !== 0) {
      if ((t.f & ft) === 0)
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    }
    t = t.parent;
  }
  throw e;
}
const ki = -7169;
function V(e, t) {
  e.f = e.f & ki | t;
}
function Xr(e) {
  (e.f & Ee) !== 0 || e.deps === null ? V(e, J) : V(e, Ie);
}
function zn(e) {
  if (e !== null)
    for (const t of e)
      (t.f & te) === 0 || (t.f & $t) === 0 || (t.f ^= $t, zn(
        /** @type {Derived} */
        t.deps
      ));
}
function Yn(e, t, r) {
  (e.f & re) !== 0 ? t.add(e) : (e.f & Ie) !== 0 && r.add(e), zn(e.deps), V(e, J);
}
const rr = /* @__PURE__ */ new Set();
let I = null, Hr = null, Ne = null, oe = [], xr = null, Br = !1, Kt = !1;
class We {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #r = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #a = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #n = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #l = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #s = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #i = /* @__PURE__ */ new Map();
  is_fork = !1;
  #o = !1;
  #u() {
    return this.is_fork || this.#a > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    this.#i.has(t) || this.#i.set(t, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(t) {
    var r = this.#i.get(t);
    if (r) {
      this.#i.delete(t);
      for (var n of r.d)
        V(n, re), Le(n);
      for (n of r.m)
        V(n, Ie), Le(n);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    oe = [], this.apply();
    var r = [], n = [];
    for (const s of t)
      this.#f(s, r, n);
    if (this.#u()) {
      this.#c(n), this.#c(r);
      for (const [s, i] of this.#i)
        Jn(s, i);
    } else {
      for (const s of this.#e) s();
      this.#e.clear(), this.#r === 0 && this.#d(), Hr = this, I = null, mn(n), mn(r), Hr = null, this.#n?.resolve();
    }
    Ne = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #f(t, r, n) {
    t.f ^= J;
    for (var s = t.first; s !== null; ) {
      var i = s.f, l = (i & (Me | ct)) !== 0, a = l && (i & J) !== 0, f = a || (i & xe) !== 0 || this.#i.has(s);
      if (!f && s.fn !== null) {
        l ? s.f ^= J : (i & _r) !== 0 ? r.push(s) : Zt(s) && ((i & Je) !== 0 && this.#s.add(s), Mt(s));
        var u = s.first;
        if (u !== null) {
          s = u;
          continue;
        }
      }
      for (; s !== null; ) {
        var d = s.next;
        if (d !== null) {
          s = d;
          break;
        }
        s = s.parent;
      }
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #c(t) {
    for (var r = 0; r < t.length; r += 1)
      Yn(t[r], this.#l, this.#s);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    r !== ee && !this.previous.has(t) && this.previous.set(t, r), (t.f & at) === 0 && (this.current.set(t, t.v), Ne?.set(t, t.v));
  }
  activate() {
    I = this, this.apply();
  }
  deactivate() {
    I === this && (I = null, Ne = null);
  }
  flush() {
    if (this.activate(), oe.length > 0) {
      if (Gn(), I !== null && I !== this)
        return;
    } else this.#r === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#t) t(this);
    this.#t.clear();
  }
  #d() {
    if (rr.size > 1) {
      this.previous.clear();
      var t = Ne, r = !0;
      for (const s of rr) {
        if (s === this) {
          r = !1;
          continue;
        }
        const i = [];
        for (const [a, f] of this.current) {
          if (s.current.has(a))
            if (r && f !== s.current.get(a))
              s.current.set(a, f);
            else
              continue;
          i.push(a);
        }
        if (i.length === 0)
          continue;
        const l = [...s.current.keys()].filter((a) => !this.current.has(a));
        if (l.length > 0) {
          var n = oe;
          oe = [];
          const a = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
          for (const u of i)
            Kn(u, l, a, f);
          if (oe.length > 0) {
            I = s, s.apply();
            for (const u of oe)
              s.#f(u, [], []);
            s.deactivate();
          }
          oe = n;
        }
      }
      I = null, Ne = t;
    }
    rr.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#r += 1, t && (this.#a += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#r -= 1, t && (this.#a -= 1), !this.#o && (this.#o = !0, mt(() => {
      this.#o = !1, this.#u() ? oe.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of this.#l)
      this.#s.delete(t), V(t, re), Le(t);
    for (const t of this.#s)
      V(t, Ie), Le(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#e.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#t.add(t);
  }
  settled() {
    return (this.#n ??= On()).promise;
  }
  static ensure() {
    if (I === null) {
      const t = I = new We();
      rr.add(I), Kt || mt(() => {
        I === t && t.flush();
      });
    }
    return I;
  }
  apply() {
  }
}
function Qr(e) {
  var t = Kt;
  Kt = !0;
  try {
    for (var r; ; ) {
      if (Ei(), oe.length === 0 && (I?.flush(), oe.length === 0))
        return xr = null, /** @type {T} */
        r;
      Gn();
    }
  } finally {
    Kt = t;
  }
}
function Gn() {
  Br = !0;
  var e = null;
  try {
    for (var t = 0; oe.length > 0; ) {
      var r = We.ensure();
      if (t++ > 1e3) {
        var n, s;
        Ti();
      }
      r.process(oe), lt.clear();
    }
  } finally {
    oe = [], Br = !1, xr = null;
  }
}
function Ti() {
  try {
    hi();
  } catch (e) {
    it(e, xr);
  }
}
let Ye = null;
function mn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ke | xe)) === 0 && Zt(n) && (Ye = /* @__PURE__ */ new Set(), Mt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && cs(n), Ye?.size > 0)) {
        lt.clear();
        for (const s of Ye) {
          if ((s.f & (Ke | xe)) !== 0) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; )
            Ye.has(l) && (Ye.delete(l), i.push(l)), l = l.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const f = i[a];
            (f.f & (Ke | xe)) === 0 && Mt(f);
          }
        }
        Ye.clear();
      }
    }
    Ye = null;
  }
}
function Kn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & te) !== 0 ? Kn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (Jr | Je)) !== 0 && (i & re) === 0 && Wn(s, t, n) && (V(s, re), Le(
        /** @type {Effect} */
        s
      ));
    }
}
function Wn(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Nt.call(t, s))
        return !0;
      if ((s.f & te) !== 0 && Wn(
        /** @type {Derived} */
        s,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function Le(e) {
  var t = xr = e, r = t.b;
  if (r?.is_pending && (e.f & (_r | hr | In)) !== 0 && (e.f & ft) === 0) {
    r.defer_effect(e);
    return;
  }
  for (; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Br && t === S && (n & Je) !== 0 && (n & Mn) === 0 && (n & ft) !== 0)
      return;
    if ((n & (ct | Me)) !== 0) {
      if ((n & J) === 0)
        return;
      t.f ^= J;
    }
  }
  oe.push(t);
}
function Jn(e, t) {
  if (!((e.f & Me) !== 0 && (e.f & J) !== 0)) {
    (e.f & re) !== 0 ? t.d.push(e) : (e.f & Ie) !== 0 && t.m.push(e), V(e, J);
    for (var r = e.first; r !== null; )
      Jn(r, t), r = r.next;
  }
}
function Si(e) {
  let t = 0, r = Et(0), n;
  return () => {
    tn() && (o(r), rn(() => (t === 0 && (n = wr(() => e(() => Wt(r)))), t += 1, () => {
      mt(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Wt(r));
      });
    })));
  };
}
var Ai = Lt | Tt;
function Ci(e, t, r, n) {
  new Ri(e, t, r, n);
}
class Ri {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #t = C ? R : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #a;
  /** @type {Effect} */
  #n;
  /** @type {Effect | null} */
  #l = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {DocumentFragment | null} */
  #o = null;
  #u = 0;
  #f = 0;
  #c = !1;
  /** @type {Set<Effect>} */
  #d = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #_ = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #v = null;
  #b = Si(() => (this.#v = Et(this.#u), () => {
    this.#v = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    this.#e = t, this.#r = r, this.#a = (i) => {
      var l = (
        /** @type {Effect} */
        S
      );
      l.b = this, l.f |= Fr, n(i);
    }, this.parent = /** @type {Effect} */
    S.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), this.#n = nn(() => {
      if (C) {
        const i = (
          /** @type {Comment} */
          this.#t
        );
        gr();
        const l = i.data === vr;
        if (i.data.startsWith(gn)) {
          const f = JSON.parse(i.data.slice(gn.length));
          this.#w(f);
        } else l ? this.#y() : this.#m();
      } else
        this.#g();
    }, Ai), C && (this.#e = R);
  }
  #m() {
    try {
      this.#l = $e(() => this.#a(this.#e));
    } catch (t) {
      this.error(t);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #w(t) {
    const r = this.#r.failed;
    r && (this.#i = $e(() => {
      r(
        this.#e,
        () => t,
        () => () => {
        }
      );
    }));
  }
  #y() {
    const t = this.#r.pending;
    t && (this.is_pending = !0, this.#s = $e(() => t(this.#e)), mt(() => {
      var r = this.#o = document.createDocumentFragment(), n = ue();
      r.append(n), this.#l = this.#p(() => (We.ensure(), $e(() => this.#a(n)))), this.#f === 0 && (this.#e.before(r), this.#o = null, wt(
        /** @type {Effect} */
        this.#s,
        () => {
          this.#s = null;
        }
      ), this.#h());
    }));
  }
  #g() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#f = 0, this.#u = 0, this.#l = $e(() => {
        this.#a(this.#e);
      }), this.#f > 0) {
        var t = this.#o = document.createDocumentFragment();
        _s(this.#l, t);
        const r = (
          /** @type {(anchor: Node) => void} */
          this.#r.pending
        );
        this.#s = $e(() => r(this.#e));
      } else
        this.#h();
    } catch (r) {
      this.error(r);
    }
  }
  #h() {
    this.is_pending = !1;
    for (const t of this.#d)
      V(t, re), Le(t);
    for (const t of this.#_)
      V(t, Ie), Le(t);
    this.#d.clear(), this.#_.clear();
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Yn(t, this.#d, this.#_);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #p(t) {
    var r = S, n = k, s = ce;
    je(this.#n), Te(this.#n), Ot(this.#n.ctx);
    try {
      return t();
    } catch (i) {
      return qn(i), null;
    } finally {
      je(r), Te(n), Ot(s);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #x(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t);
      return;
    }
    this.#f += t, this.#f === 0 && (this.#h(), this.#s && wt(this.#s, () => {
      this.#s = null;
    }), this.#o && (this.#e.before(this.#o), this.#o = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#x(t), this.#u += t, !(!this.#v || this.#c) && (this.#c = !0, mt(() => {
      this.#c = !1, this.#v && It(this.#v, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#b(), o(
      /** @type {Source<number>} */
      this.#v
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = this.#r.onerror;
    let n = this.#r.failed;
    if (!r && !n)
      throw t;
    this.#l && (ie(this.#l), this.#l = null), this.#s && (ie(this.#s), this.#s = null), this.#i && (ie(this.#i), this.#i = null), C && (se(
      /** @type {TemplateNode} */
      this.#t
    ), ar(), se(cr()));
    var s = !1, i = !1;
    const l = () => {
      if (s) {
        wi();
        return;
      }
      s = !0, i && mi(), this.#i !== null && wt(this.#i, () => {
        this.#i = null;
      }), this.#p(() => {
        We.ensure(), this.#g();
      });
    }, a = (f) => {
      try {
        i = !0, r?.(f, l), i = !1;
      } catch (u) {
        it(u, this.#n && this.#n.parent);
      }
      n && (this.#i = this.#p(() => {
        We.ensure();
        try {
          return $e(() => {
            var u = (
              /** @type {Effect} */
              S
            );
            u.b = this, u.f |= Fr, n(
              this.#e,
              () => f,
              () => l
            );
          });
        } catch (u) {
          return it(
            u,
            /** @type {Effect} */
            this.#n.parent
          ), null;
        }
      }));
    };
    mt(() => {
      var f;
      try {
        f = this.transform_error(t);
      } catch (u) {
        it(u, this.#n && this.#n.parent);
        return;
      }
      f !== null && typeof f == "object" && typeof /** @type {any} */
      f.then == "function" ? f.then(
        a,
        /** @param {unknown} e */
        (u) => it(u, this.#n && this.#n.parent)
      ) : a(f);
    });
  }
}
function Ni(e, t, r, n) {
  const s = br;
  var i = e.filter((c) => !c.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var l = (
    /** @type {Effect} */
    S
  ), a = Li(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((c) => c.promise)) : null;
  function u(c) {
    a();
    try {
      n(c);
    } catch (x) {
      (l.f & Ke) === 0 && it(x, l);
    }
    Vr();
  }
  if (r.length === 0) {
    f.then(() => u(t.map(s)));
    return;
  }
  function d() {
    a(), Promise.all(r.map((c) => /* @__PURE__ */ Ii(c))).then((c) => u([...t.map(s), ...c])).catch((c) => it(c, l));
  }
  f ? f.then(d) : d();
}
function Li() {
  var e = S, t = k, r = ce, n = I;
  return function(i = !0) {
    je(e), Te(t), Ot(r), i && n?.activate();
  };
}
function Vr(e = !0) {
  je(null), Te(null), Ot(null), e && I?.deactivate();
}
function Oi() {
  var e = (
    /** @type {Boundary} */
    /** @type {Effect} */
    S.b
  ), t = (
    /** @type {Batch} */
    I
  ), r = e.is_rendered();
  return e.update_pending_count(1), t.increment(r), () => {
    e.update_pending_count(-1), t.decrement(r);
  };
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  var t = te | re, r = k !== null && (k.f & te) !== 0 ? (
    /** @type {Derived} */
    k
  ) : null;
  return S !== null && (S.f |= Tt), {
    ctx: ce,
    deps: null,
    effects: null,
    equals: Fn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ee
    ),
    wv: 0,
    parent: r ?? S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ii(e, t, r) {
  /** @type {Effect | null} */
  S === null && ui();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Et(
    /** @type {V} */
    ee
  ), l = !k, a = /* @__PURE__ */ new Map();
  return Gi(() => {
    var f = On();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(Vr);
    } catch (x) {
      f.reject(x), Vr();
    }
    var u = (
      /** @type {Batch} */
      I
    );
    if (l) {
      var d = Oi();
      a.get(u)?.reject(pt), a.delete(u), a.set(u, f);
    }
    const c = (x, m = void 0) => {
      if (u.activate(), m)
        m !== pt && (i.f |= at, It(i, m));
      else {
        (i.f & at) !== 0 && (i.f ^= at), It(i, x);
        for (const [v, $] of a) {
          if (a.delete(v), v === u) break;
          $.reject(pt);
        }
      }
      d && d();
    };
    f.promise.then(c, (x) => c(null, x || "unknown"));
  }), Ui(() => {
    for (const f of a.values())
      f.reject(pt);
  }), new Promise((f) => {
    function u(d) {
      function c() {
        d === s ? f(i) : u(s);
      }
      d.then(c, c);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  const t = /* @__PURE__ */ br(e);
  return hs(t), t;
}
// @__NO_SIDE_EFFECTS__
function Mi(e) {
  const t = /* @__PURE__ */ br(e);
  return t.equals = jn, t;
}
function Di(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      ie(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Pi(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & te) === 0)
      return (t.f & Ke) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function Zr(e) {
  var t, r = S;
  je(Pi(e));
  try {
    e.f &= ~$t, Di(e), t = bs(e);
  } finally {
    je(r);
  }
  return t;
}
function Xn(e) {
  var t = Zr(e);
  if (!e.equals(t) && (e.wv = gs(), (!I?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    V(e, J);
    return;
  }
  ut || (Ne !== null ? (tn() || I?.is_fork) && Ne.set(e, t) : Xr(e));
}
function Fi(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(pt), t.teardown = si, t.ac = null, Jt(t, 0), sn(t));
}
function Qn(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Mt(t);
}
let Ur = /* @__PURE__ */ new Set();
const lt = /* @__PURE__ */ new Map();
let Zn = !1;
function Et(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Fn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const r = Et(e);
  return hs(r), r;
}
// @__NO_SIDE_EFFECTS__
function es(e, t = !1, r = !0) {
  const n = Et(e);
  return t || (n.equals = jn), n;
}
function A(e, t, r = !1) {
  k !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Oe || (k.f & bn) !== 0) && Vn() && (k.f & (te | Je | Jr | bn)) !== 0 && (ke === null || !Nt.call(ke, e)) && bi();
  let n = r ? xt(t) : t;
  return It(e, n);
}
function It(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    ut ? lt.set(e, t) : lt.set(e, r), e.v = t;
    var n = We.ensure();
    if (n.capture(e, r), (e.f & te) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & re) !== 0 && Zr(s), Xr(s);
    }
    e.wv = gs(), ts(e, re), S !== null && (S.f & J) !== 0 && (S.f & (Me | ct)) === 0 && (ye === null ? Ji([e]) : ye.push(e)), !n.is_fork && Ur.size > 0 && !Zn && ji();
  }
  return t;
}
function ji() {
  Zn = !1;
  for (const e of Ur)
    (e.f & J) !== 0 && V(e, Ie), Zt(e) && Mt(e);
  Ur.clear();
}
function Wt(e) {
  A(e, e.v + 1);
}
function ts(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, s = 0; s < n; s++) {
      var i = r[s], l = i.f, a = (l & re) === 0;
      if (a && V(i, t), (l & te) !== 0) {
        var f = (
          /** @type {Derived} */
          i
        );
        Ne?.delete(f), (l & $t) === 0 && (l & Ee && (i.f |= $t), ts(f, Ie));
      } else a && ((l & Je) !== 0 && Ye !== null && Ye.add(
        /** @type {Effect} */
        i
      ), Le(
        /** @type {Effect} */
        i
      ));
    }
}
function xt(e) {
  if (typeof e != "object" || e === null || Or in e)
    return e;
  const t = ni(e);
  if (t !== ti && t !== ri)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Ln(e), s = /* @__PURE__ */ K(0), i = yt, l = (a) => {
    if (yt === i)
      return a();
    var f = k, u = yt;
    Te(null), En(i);
    var d = a();
    return Te(f), En(u), d;
  };
  return n && r.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && gi();
        var d = r.get(f);
        return d === void 0 ? l(() => {
          var c = /* @__PURE__ */ K(u.value);
          return r.set(f, c), c;
        }) : A(d, u.value, !0), !0;
      },
      deleteProperty(a, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in a) {
            const d = l(() => /* @__PURE__ */ K(ee));
            r.set(f, d), Wt(s);
          }
        } else
          A(u, ee), Wt(s);
        return !0;
      },
      get(a, f, u) {
        if (f === Or)
          return e;
        var d = r.get(f), c = f in a;
        if (d === void 0 && (!c || Ct(a, f)?.writable) && (d = l(() => {
          var m = xt(c ? a[f] : ee), v = /* @__PURE__ */ K(m);
          return v;
        }), r.set(f, d)), d !== void 0) {
          var x = o(d);
          return x === ee ? void 0 : x;
        }
        return Reflect.get(a, f, u);
      },
      getOwnPropertyDescriptor(a, f) {
        var u = Reflect.getOwnPropertyDescriptor(a, f);
        if (u && "value" in u) {
          var d = r.get(f);
          d && (u.value = o(d));
        } else if (u === void 0) {
          var c = r.get(f), x = c?.v;
          if (c !== void 0 && x !== ee)
            return {
              enumerable: !0,
              configurable: !0,
              value: x,
              writable: !0
            };
        }
        return u;
      },
      has(a, f) {
        if (f === Or)
          return !0;
        var u = r.get(f), d = u !== void 0 && u.v !== ee || Reflect.has(a, f);
        if (u !== void 0 || S !== null && (!d || Ct(a, f)?.writable)) {
          u === void 0 && (u = l(() => {
            var x = d ? xt(a[f]) : ee, m = /* @__PURE__ */ K(x);
            return m;
          }), r.set(f, u));
          var c = o(u);
          if (c === ee)
            return !1;
        }
        return d;
      },
      set(a, f, u, d) {
        var c = r.get(f), x = f in a;
        if (n && f === "length")
          for (var m = u; m < /** @type {Source<number>} */
          c.v; m += 1) {
            var v = r.get(m + "");
            v !== void 0 ? A(v, ee) : m in a && (v = l(() => /* @__PURE__ */ K(ee)), r.set(m + "", v));
          }
        if (c === void 0)
          (!x || Ct(a, f)?.writable) && (c = l(() => /* @__PURE__ */ K(void 0)), A(c, xt(u)), r.set(f, c));
        else {
          x = c.v !== ee;
          var $ = l(() => xt(u));
          A(c, $);
        }
        var N = Reflect.getOwnPropertyDescriptor(a, f);
        if (N?.set && N.set.call(d, u), !x) {
          if (n && typeof f == "string") {
            var H = (
              /** @type {Source<number>} */
              r.get("length")
            ), F = Number(f);
            Number.isInteger(F) && F >= H.v && A(H, F + 1);
          }
          Wt(s);
        }
        return !0;
      },
      ownKeys(a) {
        o(s);
        var f = Reflect.ownKeys(a).filter((c) => {
          var x = r.get(c);
          return x === void 0 || x.v !== ee;
        });
        for (var [u, d] of r)
          d.v !== ee && !(u in a) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        xi();
      }
    }
  );
}
var wn, rs, ns, ss;
function qr() {
  if (wn === void 0) {
    wn = window, rs = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ns = Ct(t, "firstChild").get, ss = Ct(t, "nextSibling").get, xn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), xn(r) && (r.__t = void 0);
  }
}
function ue(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return (
    /** @type {TemplateNode | null} */
    ns.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return (
    /** @type {TemplateNode | null} */
    ss.call(e)
  );
}
function g(e, t) {
  if (!C)
    return /* @__PURE__ */ kt(e);
  var r = /* @__PURE__ */ kt(R);
  if (r === null)
    r = R.appendChild(ue());
  else if (t && r.nodeType !== Xt) {
    var n = ue();
    return r?.before(n), se(n), n;
  }
  return t && mr(
    /** @type {Text} */
    r
  ), se(r), r;
}
function Ce(e, t = !1) {
  if (!C) {
    var r = /* @__PURE__ */ kt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ He(r) : r;
  }
  if (t) {
    if (R?.nodeType !== Xt) {
      var n = ue();
      return R?.before(n), se(n), n;
    }
    mr(
      /** @type {Text} */
      R
    );
  }
  return R;
}
function b(e, t = 1, r = !1) {
  let n = C ? R : e;
  for (var s; t--; )
    s = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ He(n);
  if (!C)
    return n;
  if (r) {
    if (n?.nodeType !== Xt) {
      var i = ue();
      return n === null ? s?.after(i) : n.before(i), se(i), i;
    }
    mr(
      /** @type {Text} */
      n
    );
  }
  return se(n), n;
}
function is(e) {
  e.textContent = "";
}
function as() {
  return !1;
}
function ls(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Nn, e, void 0)
  );
}
function mr(e) {
  if (
    /** @type {string} */
    e.nodeValue.length < 65536
  )
    return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === Xt; )
    t.remove(), e.nodeValue += /** @type {string} */
    t.nodeValue, t = e.nextSibling;
}
let yn = !1;
function os() {
  yn || (yn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function en(e) {
  var t = k, r = S;
  Te(null), je(null);
  try {
    return e();
  } finally {
    Te(t), je(r);
  }
}
function Hi(e, t, r, n = r) {
  e.addEventListener(t, () => en(r));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), n(!0);
  } : e.__on_r = () => n(!0), os();
}
function Bi(e) {
  S === null && (k === null && _i(), di()), ut && vi();
}
function Vi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Xe(e, t, r) {
  var n = S;
  n !== null && (n.f & xe) !== 0 && (e |= xe);
  var s = {
    ctx: ce,
    deps: null,
    nodes: null,
    f: e | re | Ee,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      Mt(s);
    } catch (a) {
      throw ie(s), a;
    }
  else t !== null && Le(s);
  var i = s;
  if (r && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Tt) === 0 && (i = i.first, (e & Je) !== 0 && (e & Lt) !== 0 && i !== null && (i.f |= Lt)), i !== null && (i.parent = n, n !== null && Vi(i, n), k !== null && (k.f & te) !== 0 && (e & ct) === 0)) {
    var l = (
      /** @type {Derived} */
      k
    );
    (l.effects ??= []).push(i);
  }
  return s;
}
function tn() {
  return k !== null && !Oe;
}
function Ui(e) {
  const t = Xe(hr, null, !1);
  return V(t, J), t.teardown = e, t;
}
function qi(e) {
  Bi();
  var t = (
    /** @type {Effect} */
    S.f
  ), r = !k && (t & Me) !== 0 && (t & ft) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ce
    );
    (n.e ??= []).push(e);
  } else
    return fs(e);
}
function fs(e) {
  return Xe(_r | ai, e, !1);
}
function zi(e) {
  We.ensure();
  const t = Xe(ct | Tt, e, !0);
  return () => {
    ie(t);
  };
}
function Yi(e) {
  We.ensure();
  const t = Xe(ct | Tt, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? wt(t, () => {
      ie(t), n(void 0);
    }) : (ie(t), n(void 0));
  });
}
function Gi(e) {
  return Xe(Jr | Tt, e, !0);
}
function rn(e, t = 0) {
  return Xe(hr | t, e, !0);
}
function q(e, t = [], r = [], n = []) {
  Ni(n, t, r, (s) => {
    Xe(hr, () => e(...s.map(o)), !0);
  });
}
function nn(e, t = 0) {
  var r = Xe(Je | t, e, !0);
  return r;
}
function $e(e) {
  return Xe(Me | Tt, e, !0);
}
function us(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ut, n = k;
    $n(!0), Te(null);
    try {
      t.call(null);
    } finally {
      $n(r), Te(n);
    }
  }
}
function sn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && en(() => {
      s.abort(pt);
    });
    var n = r.next;
    (r.f & ct) !== 0 ? r.parent = null : ie(r, t), r = n;
  }
}
function Ki(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Me) === 0 && ie(t), t = r;
  }
}
function ie(e, t = !0) {
  var r = !1;
  (t || (e.f & Mn) !== 0) && e.nodes !== null && e.nodes.end !== null && (Wi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), sn(e, t && !r), Jt(e, 0), V(e, Ke);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  us(e);
  var s = e.parent;
  s !== null && s.first !== null && cs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Wi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ He(e);
    e.remove(), e = r;
  }
}
function cs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function wt(e, t, r = !0) {
  var n = [];
  vs(e, n, !0);
  var s = () => {
    r && ie(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var a of n)
      a.out(l);
  } else
    s();
}
function vs(e, t, r) {
  if ((e.f & xe) === 0) {
    e.f ^= xe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const a of n)
        (a.is_global || r) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next, l = (s.f & Lt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (s.f & Me) !== 0 && (e.f & Je) !== 0;
      vs(s, t, l ? r : !1), s = i;
    }
  }
}
function an(e) {
  ds(e, !0);
}
function ds(e, t) {
  if ((e.f & xe) !== 0) {
    e.f ^= xe, (e.f & J) === 0 && (V(e, re), Le(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Lt) !== 0 || (r.f & Me) !== 0;
      ds(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const l of i)
        (l.is_global || t) && l.in();
  }
}
function _s(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ He(r);
      t.append(r), r = s;
    }
}
let lr = !1, ut = !1;
function $n(e) {
  ut = e;
}
let k = null, Oe = !1;
function Te(e) {
  k = e;
}
let S = null;
function je(e) {
  S = e;
}
let ke = null;
function hs(e) {
  k !== null && (ke === null ? ke = [e] : ke.push(e));
}
let fe = null, ge = 0, ye = null;
function Ji(e) {
  ye = e;
}
let ps = 1, bt = 0, yt = bt;
function En(e) {
  yt = e;
}
function gs() {
  return ++ps;
}
function Zt(e) {
  var t = e.f;
  if ((t & re) !== 0)
    return !0;
  if (t & te && (e.f &= ~$t), (t & Ie) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (Zt(
        /** @type {Derived} */
        i
      ) && Xn(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & Ee) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ne === null && V(e, J);
  }
  return !1;
}
function xs(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ke !== null && Nt.call(ke, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & te) !== 0 ? xs(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? V(i, re) : (i.f & J) !== 0 && V(i, Ie), Le(
        /** @type {Effect} */
        i
      ));
    }
}
function bs(e) {
  var t = fe, r = ge, n = ye, s = k, i = ke, l = ce, a = Oe, f = yt, u = e.f;
  fe = /** @type {null | Value[]} */
  null, ge = 0, ye = null, k = (u & (Me | ct)) === 0 ? e : null, ke = null, Ot(e.ctx), Oe = !1, yt = ++bt, e.ac !== null && (en(() => {
    e.ac.abort(pt);
  }), e.ac = null);
  try {
    e.f |= jr;
    var d = (
      /** @type {Function} */
      e.fn
    ), c = d();
    e.f |= ft;
    var x = e.deps, m = I?.is_fork;
    if (fe !== null) {
      var v;
      if (m || Jt(e, ge), x !== null && ge > 0)
        for (x.length = ge + fe.length, v = 0; v < fe.length; v++)
          x[ge + v] = fe[v];
      else
        e.deps = x = fe;
      if (tn() && (e.f & Ee) !== 0)
        for (v = ge; v < x.length; v++)
          (x[v].reactions ??= []).push(e);
    } else !m && x !== null && ge < x.length && (Jt(e, ge), x.length = ge);
    if (Vn() && ye !== null && !Oe && x !== null && (e.f & (te | Ie | re)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      ye.length; v++)
        xs(
          ye[v],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (bt++, s.deps !== null)
        for (let $ = 0; $ < r; $ += 1)
          s.deps[$].rv = bt;
      if (t !== null)
        for (const $ of t)
          $.rv = bt;
      ye !== null && (n === null ? n = ye : n.push(.../** @type {Source[]} */
      ye));
    }
    return (e.f & at) !== 0 && (e.f ^= at), c;
  } catch ($) {
    return qn($);
  } finally {
    e.f ^= jr, fe = t, ge = r, ye = n, k = s, ke = i, Ot(l), Oe = a, yt = f;
  }
}
function Xi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ei.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & te) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (fe === null || !Nt.call(fe, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & Ee) !== 0 && (i.f ^= Ee, i.f &= ~$t), Xr(i), Fi(i), Jt(i, 0);
  }
}
function Jt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Xi(e, r[n]);
}
function Mt(e) {
  var t = e.f;
  if ((t & Ke) === 0) {
    V(e, J);
    var r = S, n = lr;
    S = e, lr = !0;
    try {
      (t & (Je | In)) !== 0 ? Ki(e) : sn(e), us(e);
      var s = bs(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = ps;
      var i;
      Pr && $i && (e.f & re) !== 0 && e.deps;
    } finally {
      lr = n, S = r;
    }
  }
}
async function Qi() {
  await Promise.resolve(), Qr();
}
function o(e) {
  var t = e.f, r = (t & te) !== 0;
  if (k !== null && !Oe) {
    var n = S !== null && (S.f & Ke) !== 0;
    if (!n && (ke === null || !Nt.call(ke, e))) {
      var s = k.deps;
      if ((k.f & jr) !== 0)
        e.rv < bt && (e.rv = bt, fe === null && s !== null && s[ge] === e ? ge++ : fe === null ? fe = [e] : fe.push(e));
      else {
        (k.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [k] : Nt.call(i, k) || i.push(k);
      }
    }
  }
  if (ut && lt.has(e))
    return lt.get(e);
  if (r) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (ut) {
      var a = l.v;
      return ((l.f & J) === 0 && l.reactions !== null || ws(l)) && (a = Zr(l)), lt.set(l, a), a;
    }
    var f = (l.f & Ee) === 0 && !Oe && k !== null && (lr || (k.f & Ee) !== 0), u = (l.f & ft) === 0;
    Zt(l) && (f && (l.f |= Ee), Xn(l)), f && !u && (Qn(l), ms(l));
  }
  if (Ne?.has(e))
    return Ne.get(e);
  if ((e.f & at) !== 0)
    throw e.v;
  return e.v;
}
function ms(e) {
  if (e.f |= Ee, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & te) !== 0 && (t.f & Ee) === 0 && (Qn(
        /** @type {Derived} */
        t
      ), ms(
        /** @type {Derived} */
        t
      ));
}
function ws(e) {
  if (e.v === ee) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (lt.has(t) || (t.f & te) !== 0 && ws(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function wr(e) {
  var t = Oe;
  try {
    return Oe = !0, e();
  } finally {
    Oe = t;
  }
}
const Yt = /* @__PURE__ */ Symbol("events"), ys = /* @__PURE__ */ new Set(), zr = /* @__PURE__ */ new Set();
function Re(e, t, r) {
  (t[Yt] ??= {})[e] = r;
}
function Zi(e) {
  for (var t = 0; t < e.length; t++)
    ys.add(e[t]);
  for (var r of zr)
    r(e);
}
let kn = null;
function Tn(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  kn = e;
  var l = 0, a = kn === e && e[Yt];
  if (a) {
    var f = s.indexOf(a);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Yt] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    f <= u && (l = f);
  }
  if (i = /** @type {Element} */
  s[l] || e.target, i !== t) {
    ur(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = k, c = S;
    Te(null), je(null);
    try {
      for (var x, m = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var $ = i[Yt]?.[n];
          $ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && $.call(i, e);
        } catch (N) {
          x ? m.push(N) : x = N;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (x) {
        for (let N of m)
          queueMicrotask(() => {
            throw N;
          });
        throw x;
      }
    } finally {
      e[Yt] = t, delete e.currentTarget, Te(d), je(c);
    }
  }
}
const ea = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ta(e) {
  return (
    /** @type {string} */
    ea?.createHTML(e) ?? e
  );
}
function ra(e) {
  var t = ls("template");
  return t.innerHTML = ta(e.replaceAll("<!>", "<!---->")), t.content;
}
function ot(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  var r = (t & Qs) !== 0, n = (t & Zs) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    if (C)
      return ot(R, null), R;
    s === void 0 && (s = ra(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ kt(s)));
    var l = (
      /** @type {TemplateNode} */
      n || rs ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ kt(l)
      ), f = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      ot(a, f);
    } else
      ot(l, l);
    return l;
  };
}
function Z(e = "") {
  if (!C) {
    var t = ue(e + "");
    return ot(t, t), t;
  }
  var r = R;
  return r.nodeType !== Xt ? (r.before(r = ue()), se(r)) : mr(
    /** @type {Text} */
    r
  ), ot(r, r), r;
}
function Sn() {
  if (C)
    return ot(R, null), R;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ue();
  return e.append(t, r), ot(t, r), e;
}
function w(e, t) {
  if (C) {
    var r = (
      /** @type {Effect & { nodes: EffectNodes }} */
      S
    );
    ((r.f & ft) === 0 || r.nodes.end === null) && (r.nodes.end = R), gr();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const na = ["touchstart", "touchmove"];
function sa(e) {
  return na.includes(e);
}
function L(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function $s(e, t) {
  return Es(e, t);
}
function ia(e, t) {
  qr(), t.intro = t.intro ?? !1;
  const r = t.target, n = C, s = R;
  try {
    for (var i = /* @__PURE__ */ kt(r); i && (i.nodeType !== Qt || /** @type {Comment} */
    i.data !== Kr); )
      i = /* @__PURE__ */ He(i);
    if (!i)
      throw Rt;
    Ge(!0), se(
      /** @type {Comment} */
      i
    );
    const l = Es(e, { ...t, anchor: i });
    return Ge(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== Rt && console.warn("Failed to hydrate: ", l), t.recover === !1 && pi(), qr(), is(r), Ge(!1), $s(e, t);
  } finally {
    Ge(n), se(s);
  }
}
const nr = /* @__PURE__ */ new Map();
function Es(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: l = !0, transformError: a }) {
  qr();
  var f = void 0, u = Yi(() => {
    var d = r ?? t.appendChild(ue());
    Ci(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (m) => {
        Hn({});
        var v = (
          /** @type {ComponentContext} */
          ce
        );
        if (i && (v.c = i), s && (n.$$events = s), C && ot(
          /** @type {TemplateNode} */
          m,
          null
        ), f = e(m, n) || {}, C && (S.nodes.end = R, R === null || R.nodeType !== Qt || /** @type {Comment} */
        R.data !== Wr))
          throw pr(), Rt;
        Bn();
      },
      a
    );
    var c = /* @__PURE__ */ new Set(), x = (m) => {
      for (var v = 0; v < m.length; v++) {
        var $ = m[v];
        if (!c.has($)) {
          c.add($);
          var N = sa($);
          for (const ve of [t, document]) {
            var H = nr.get(ve);
            H === void 0 && (H = /* @__PURE__ */ new Map(), nr.set(ve, H));
            var F = H.get($);
            F === void 0 ? (ve.addEventListener($, Tn, { passive: N }), H.set($, 1)) : H.set($, F + 1);
          }
        }
      }
    };
    return x(dr(ys)), zr.add(x), () => {
      for (var m of c)
        for (const N of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            nr.get(N)
          ), $ = (
            /** @type {number} */
            v.get(m)
          );
          --$ == 0 ? (N.removeEventListener(m, Tn), v.delete(m), v.size === 0 && nr.delete(N)) : v.set(m, $);
        }
      zr.delete(x), d !== r && d.parentNode?.removeChild(d);
    };
  });
  return Yr.set(f, u), f;
}
let Yr = /* @__PURE__ */ new WeakMap();
function aa(e, t) {
  const r = Yr.get(e);
  return r ? (Yr.delete(e), r(t)) : Promise.resolve();
}
class la {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #r = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #a = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #n = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    this.anchor = t, this.#n = r;
  }
  #l = () => {
    var t = (
      /** @type {Batch} */
      I
    );
    if (this.#e.has(t)) {
      var r = (
        /** @type {Key} */
        this.#e.get(t)
      ), n = this.#t.get(r);
      if (n)
        an(n), this.#a.delete(r);
      else {
        var s = this.#r.get(r);
        s && (this.#t.set(r, s.effect), this.#r.delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
      }
      for (const [i, l] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#r.get(l);
        a && (ie(a.effect), this.#r.delete(l));
      }
      for (const [i, l] of this.#t) {
        if (i === r || this.#a.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var u = document.createDocumentFragment();
            _s(l, u), u.append(ue()), this.#r.set(i, { effect: l, fragment: u });
          } else
            ie(l);
          this.#a.delete(i), this.#t.delete(i);
        };
        this.#n || !n ? (this.#a.add(i), wt(l, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #s = (t) => {
    this.#e.delete(t);
    const r = Array.from(this.#e.values());
    for (const [n, s] of this.#r)
      r.includes(n) || (ie(s.effect), this.#r.delete(n));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      I
    ), s = as();
    if (r && !this.#t.has(t) && !this.#r.has(t))
      if (s) {
        var i = document.createDocumentFragment(), l = ue();
        i.append(l), this.#r.set(t, {
          effect: $e(() => r(l)),
          fragment: i
        });
      } else
        this.#t.set(
          t,
          $e(() => r(this.anchor))
        );
    if (this.#e.set(n, t), s) {
      for (const [a, f] of this.#t)
        a === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [a, f] of this.#r)
        a === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(this.#l), n.ondiscard(this.#s);
    } else
      C && (this.anchor = R), this.#l();
  }
}
function ks(e) {
  ce === null && Dn(), qi(() => {
    const t = wr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function oa(e) {
  ce === null && Dn(), ks(() => () => wr(e));
}
function j(e, t, r = !1) {
  C && gr();
  var n = new la(e), s = r ? Lt : 0;
  function i(l, a) {
    if (C) {
      const d = Pn(e);
      var f;
      if (d === Kr ? f = 0 : d === vr ? f = !1 : f = parseInt(d.substring(1)), l !== f) {
        var u = cr();
        se(u), n.anchor = u, Ge(!1), n.ensure(l, a), Ge(!0);
        return;
      }
    }
    n.ensure(l, a);
  }
  nn(() => {
    var l = !1;
    t((a, f = 0) => {
      l = !0, i(f, a);
    }), l || i(!1, null);
  }, s);
}
function An(e, t) {
  return t;
}
function fa(e, t, r) {
  for (var n = [], s = t.length, i, l = t.length, a = 0; a < s; a++) {
    let c = t[a];
    wt(
      c,
      () => {
        if (i) {
          if (i.pending.delete(c), i.done.add(c), i.pending.size === 0) {
            var x = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Gr(dr(i.done)), x.delete(i), x.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var u = (
        /** @type {Element} */
        r
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      is(d), d.append(u), e.items.clear();
    }
    Gr(t, !f);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Gr(e, t = !0) {
  for (var r = 0; r < e.length; r++)
    ie(e[r], t);
}
var Cn;
function sr(e, t, r, n, s, i = null) {
  var l = e, a = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    l = C ? se(/* @__PURE__ */ kt(f)) : f.appendChild(ue());
  }
  C && gr();
  var u = null, d = /* @__PURE__ */ Mi(() => {
    var N = r();
    return Ln(N) ? N : N == null ? [] : dr(N);
  }), c, x = !0;
  function m() {
    $.fallback = u, ua($, c, l, t, n), u !== null && (c.length === 0 ? (u.f & st) === 0 ? an(u) : (u.f ^= st, Gt(u, null, l)) : wt(u, () => {
      u = null;
    }));
  }
  var v = nn(() => {
    c = /** @type {V[]} */
    o(d);
    var N = c.length;
    let H = !1;
    if (C) {
      var F = Pn(l) === vr;
      F !== (N === 0) && (l = cr(), se(l), Ge(!1), H = !0);
    }
    for (var ve = /* @__PURE__ */ new Set(), ae = (
      /** @type {Batch} */
      I
    ), De = as(), Pe = 0; Pe < N; Pe += 1) {
      C && R.nodeType === Qt && /** @type {Comment} */
      R.data === Wr && (l = /** @type {Comment} */
      R, H = !0, Ge(!1));
      var Qe = c[Pe], de = n(Qe, Pe), _e = x ? null : a.get(de);
      _e ? (_e.v && It(_e.v, Qe), _e.i && It(_e.i, Pe), De && ae.unskip_effect(_e.e)) : (_e = ca(
        a,
        x ? l : Cn ??= ue(),
        Qe,
        de,
        Pe,
        s,
        t,
        r
      ), x || (_e.e.f |= st), a.set(de, _e)), ve.add(de);
    }
    if (N === 0 && i && !u && (x ? u = $e(() => i(l)) : (u = $e(() => i(Cn ??= ue())), u.f |= st)), N > ve.size && ci(), C && N > 0 && se(cr()), !x)
      if (De) {
        for (const [yr, Dt] of a)
          ve.has(yr) || ae.skip_effect(Dt.e);
        ae.oncommit(m), ae.ondiscard(() => {
        });
      } else
        m();
    H && Ge(!0), o(d);
  }), $ = { effect: v, items: a, outrogroups: null, fallback: u };
  x = !1, C && (l = R);
}
function zt(e) {
  for (; e !== null && (e.f & Me) === 0; )
    e = e.next;
  return e;
}
function ua(e, t, r, n, s) {
  var i = t.length, l = e.items, a = zt(e.effect.first), f, u = null, d = [], c = [], x, m, v, $;
  for ($ = 0; $ < i; $ += 1) {
    if (x = t[$], m = s(x, $), v = /** @type {EachItem} */
    l.get(m).e, e.outrogroups !== null)
      for (const de of e.outrogroups)
        de.pending.delete(v), de.done.delete(v);
    if ((v.f & st) !== 0)
      if (v.f ^= st, v === a)
        Gt(v, null, r);
      else {
        var N = u ? u.next : a;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), nt(e, u, v), nt(e, v, N), Gt(v, N, r), u = v, d = [], c = [], a = zt(u.next);
        continue;
      }
    if ((v.f & xe) !== 0 && an(v), v !== a) {
      if (f !== void 0 && f.has(v)) {
        if (d.length < c.length) {
          var H = c[0], F;
          u = H.prev;
          var ve = d[0], ae = d[d.length - 1];
          for (F = 0; F < d.length; F += 1)
            Gt(d[F], H, r);
          for (F = 0; F < c.length; F += 1)
            f.delete(c[F]);
          nt(e, ve.prev, ae.next), nt(e, u, ve), nt(e, ae, H), a = H, u = ae, $ -= 1, d = [], c = [];
        } else
          f.delete(v), Gt(v, a, r), nt(e, v.prev, v.next), nt(e, v, u === null ? e.effect.first : u.next), nt(e, u, v), u = v;
        continue;
      }
      for (d = [], c = []; a !== null && a !== v; )
        (f ??= /* @__PURE__ */ new Set()).add(a), c.push(a), a = zt(a.next);
      if (a === null)
        continue;
    }
    (v.f & st) === 0 && d.push(v), u = v, a = zt(v.next);
  }
  if (e.outrogroups !== null) {
    for (const de of e.outrogroups)
      de.pending.size === 0 && (Gr(dr(de.done)), e.outrogroups?.delete(de));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || f !== void 0) {
    var De = [];
    if (f !== void 0)
      for (v of f)
        (v.f & xe) === 0 && De.push(v);
    for (; a !== null; )
      (a.f & xe) === 0 && a !== e.fallback && De.push(a), a = zt(a.next);
    var Pe = De.length;
    if (Pe > 0) {
      var Qe = i === 0 ? r : null;
      fa(e, De, Qe);
    }
  }
}
function ca(e, t, r, n, s, i, l, a) {
  var f = (l & Ws) !== 0 ? (l & Xs) === 0 ? /* @__PURE__ */ es(r, !1, !1) : Et(r) : null, u = (l & Js) !== 0 ? Et(s) : null;
  return {
    v: f,
    i: u,
    e: $e(() => (i(t, f ?? r, u ?? s, a), () => {
      e.delete(n);
    }))
  };
}
function Gt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & st) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ He(n)
      );
      if (i.before(n), n === s)
        return;
      n = l;
    }
}
function nt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function va(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function ht(e, t, r, n, s, i) {
  var l = e.__className;
  if (C || l !== r || l === void 0) {
    var a = va(r);
    (!C || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : e.className = a), e.__className = r;
  }
  return i;
}
const da = /* @__PURE__ */ Symbol("is custom element"), _a = /* @__PURE__ */ Symbol("is html"), ha = fi ? "link" : "LINK";
function pa(e) {
  if (C) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          Rn(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          Rn(e, "checked", null), e.checked = s;
        }
      }
    };
    e.__on_r = r, mt(r), os();
  }
}
function Rn(e, t, r, n) {
  var s = ga(e);
  C && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ha) || s[t] !== (s[t] = r) && (t === "loading" && (e[oi] = r), e.removeAttribute(t));
}
function ga(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [da]: e.nodeName.includes("-"),
      [_a]: e.namespaceURI === Nn
    }
  );
}
function xa(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Hi(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Ir(e) ? Mr(i) : i, r(i), I !== null && n.add(I), await Qi(), i !== (i = t())) {
      var l = e.selectionStart, a = e.selectionEnd, f = e.value.length;
      if (e.value = i ?? "", a !== null) {
        var u = e.value.length;
        l === a && a === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (C && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  wr(t) == null && e.value) && (r(Ir(e) ? Mr(e.value) : e.value), I !== null && n.add(I)), rn(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Hr ?? I
      );
      if (n.has(i))
        return;
    }
    Ir(e) && s === Mr(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Ir(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Mr(e) {
  return e === "" ? null : +e;
}
function ba(e, t, r, n) {
  var s = (
    /** @type {V} */
    n
  ), i = !0, l = () => (i && (i = !1, s = /** @type {V} */
  n), s);
  e[t];
  var a;
  a = () => {
    var c = (
      /** @type {V} */
      e[t]
    );
    return c === void 0 ? l() : (i = !0, c);
  };
  var f = !1, u = /* @__PURE__ */ br(() => (f = !1, a())), d = (
    /** @type {Effect} */
    S
  );
  return (
    /** @type {() => V} */
    (function(c, x) {
      if (arguments.length > 0) {
        const m = x ? o(u) : c;
        return A(u, m), f = !0, s !== void 0 && (s = m), c;
      }
      return ut && f || (d.f & Ke) !== 0 ? u.v : o(u);
    })
  );
}
function ma(e) {
  return new wa(e);
}
class wa {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var r = /* @__PURE__ */ new Map(), n = (i, l) => {
      var a = /* @__PURE__ */ es(l, !1, !1);
      return r.set(i, a), a;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, l) {
          return o(r.get(l) ?? n(l, Reflect.get(i, l)));
        },
        has(i, l) {
          return l === li ? !0 : (o(r.get(l) ?? n(l, Reflect.get(i, l))), Reflect.has(i, l));
        },
        set(i, l, a) {
          return A(r.get(l) ?? n(l, a), a), Reflect.set(i, l, a);
        }
      }
    );
    this.#t = (t.hydrate ? ia : $s)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover,
      transformError: t.transformError
    }), (!t?.props?.$$host || t.sync === !1) && Qr(), this.#e = s.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || ur(this, i, {
        get() {
          return this.#t[i];
        },
        /** @param {any} value */
        set(l) {
          this.#t[i] = l;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(s, i);
    }, this.#t.$destroy = () => {
      aa(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#t.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    this.#e[t] = this.#e[t] || [];
    const n = (...s) => r.call(this, ...s);
    return this.#e[t].push(n), () => {
      this.#e[t] = this.#e[t].filter(
        /** @param {any} fn */
        (s) => s !== n
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let Ts;
typeof HTMLElement == "function" && (Ts = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
  $$shadowRoot = null;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(e, t, r) {
    super(), this.$$ctor = e, this.$$s = t, r && (this.$$shadowRoot = this.attachShadow(r));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const n = this.$$c.$on(e, t);
      this.$$l_u.set(t, n);
    }
    super.addEventListener(e, t, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const n = this.$$l_u.get(t);
      n && (n(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return (s) => {
          const i = ls("slot");
          n !== "default" && (i.name = n), w(s, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, r = ya(this);
      for (const n of this.$$s)
        n in r && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), t.default = !0) : t[n] = e(n));
      for (const n of this.attributes) {
        const s = this.$$g_p(n.name);
        s in this.$$d || (this.$$d[s] = or(s, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = ma({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = zi(() => {
        rn(() => {
          this.$$r = !0;
          for (const n of fr(this.$$c)) {
            if (!this.$$p_d[n]?.reflect) continue;
            this.$$d[n] = this.$$c[n];
            const s = or(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, s);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const s of this.$$l[n]) {
          const i = this.$$c.$on(n, s);
          this.$$l_u.set(s, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, r) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = or(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return fr(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function or(e, t, r, n) {
  const s = r[e]?.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ya(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function $a(e, t, r, n, s, i) {
  let l = class extends Ts {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return fr(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return fr(t).forEach((a) => {
    ur(l.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        f = or(a, f, t), this.$$d[a] = f;
        var u = this.$$c;
        if (u) {
          var d = Ct(u, a)?.get;
          d ? u[a] = f : u.$set({ [a]: f });
        }
      }
    });
  }), n.forEach((a) => {
    ur(l.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
function Dr(e) {
  return e.license_id ? e.installed === 1 ? e.installed_version && e.version !== e.installed_version ? "update" : "installed" : "install" : "get";
}
function ir(e) {
  if (!e) return [];
  try {
    return JSON.parse(e);
  } catch {
    return [];
  }
}
var Ea = /* @__PURE__ */ M('<span class="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-success-500/20 text-success-400"> </span>'), ka = /* @__PURE__ */ M('<div class="flex items-center justify-center h-full"><div class="text-center text-surface-400"><div class="text-2xl mb-2 animate-pulse"></div> <div class="text-sm">Loading marketplace...</div></div></div>'), Ta = /* @__PURE__ */ M('<div class="flex items-center justify-center h-full"><div class="text-center"><div class="text-2xl mb-2"></div> <div class="text-sm text-danger-400"> </div> <button class="mt-4 px-4 py-2 rounded-lg text-xs bg-accent-600 text-surface-50 hover:bg-accent-500">Retry</button></div></div>'), Sa = /* @__PURE__ */ M('<div class="text-2xl mb-3 text-surface-500"></div> <p class="text-sm text-surface-400"> </p>', 1), Aa = /* @__PURE__ */ M('<div class="text-2xl mb-3 text-surface-500"></div> <p class="text-sm text-surface-400">No plugins available yet</p>', 1), Ca = /* @__PURE__ */ M('<div class="flex flex-col items-center justify-center py-20 text-center"><!></div>'), Ra = /* @__PURE__ */ M('<div class="text-xs text-surface-400 mt-2 line-clamp-2"> </div>'), Na = /* @__PURE__ */ M('<span class="text-[10px] px-1.5 py-0.5 rounded bg-surface-700/50 text-surface-500"> </span>'), La = /* @__PURE__ */ M('<span class="group-hover:hidden">Installed</span> <span class="hidden group-hover:inline">Remove</span>', 1), Oa = /* @__PURE__ */ M(`<div class="group rounded-xl border border-surface-600 bg-surface-800/80
									hover:border-accent-500/50 hover:bg-surface-800 transition-all"><button class="w-full text-left p-4 pb-2"><div class="flex items-start gap-3"><span class="text-2xl shrink-0"> </span> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="font-medium text-sm text-surface-100 truncate"> </span> <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-surface-700 text-surface-400 border border-surface-600 shrink-0"> </span></div> <div class="text-[11px] text-surface-500 mt-0.5"> </div> <!></div></div></button> <div class="px-4 pb-3 pt-1 flex items-center justify-between gap-2"><div class="flex gap-1 flex-wrap min-w-0"></div> <button><!></button></div></div>`), Ia = /* @__PURE__ */ M('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>'), Ma = /* @__PURE__ */ M('<div class="flex flex-col items-center justify-center py-20 text-center"><div class="text-2xl mb-3 text-surface-500"></div> <h3 class="text-sm font-medium text-surface-200 mb-1">No plugins yet</h3> <p class="text-xs text-surface-400">Browse the catalog and get plugins to see them here</p> <button class="mt-4 px-4 py-2 rounded-lg text-xs bg-accent-600 text-surface-50 hover:bg-accent-500">Browse Catalog</button></div>'), Da = /* @__PURE__ */ M('<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-success-500/20 text-success-400">Running</span>'), Pa = /* @__PURE__ */ M('<div class="text-xs text-surface-400 mt-0.5 truncate"> </div>'), Fa = /* @__PURE__ */ M(`<div class="flex items-center gap-4 p-3 rounded-xl border border-surface-600
									bg-surface-800/80 hover:border-surface-500 transition-all"><span class="text-xl shrink-0"> </span> <div class="flex-1 min-w-0"><button class="text-left"><div class="flex items-center gap-2"><span class="font-medium text-sm text-surface-100"> </span> <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-surface-700 text-surface-400 border border-surface-600"> </span> <!></div> <!></button></div> <button><!></button></div>`), ja = /* @__PURE__ */ M('<div class="space-y-2"></div>'), Ha = /* @__PURE__ */ M('<div class="flex items-center justify-center h-full"><div class="text-surface-400 animate-pulse">Loading...</div></div>'), Ba = /* @__PURE__ */ M('<p class="text-sm text-surface-300 leading-relaxed"> </p>'), Va = /* @__PURE__ */ M('<span class="text-xs px-2 py-1 rounded-lg bg-surface-700 text-surface-300 border border-surface-600"> </span>'), Ua = /* @__PURE__ */ M('<div><h3 class="text-[11px] text-surface-500 uppercase tracking-wider mb-2">Tags</h3> <div class="flex gap-1.5 flex-wrap"></div></div>'), qa = /* @__PURE__ */ M('<span class="text-surface-500">Publisher</span> <span class="text-surface-300 font-mono break-all"> </span>', 1), za = /* @__PURE__ */ M('<span class="text-surface-500">Homepage</span> <span class="text-accent-400 break-all"> </span>', 1), Ya = /* @__PURE__ */ M('<span class="text-surface-500">Min Daemon</span> <span class="text-surface-300"> </span>', 1), Ga = /* @__PURE__ */ M('<span class="text-surface-500">Installed</span> <span class="text-surface-300"> <!></span>', 1), Ka = /* @__PURE__ */ M('<span class="text-surface-500">Last Upgrade</span> <span class="text-surface-300"> </span>', 1), Wa = /* @__PURE__ */ M('<div class="space-y-3"><h3 class="text-[11px] text-surface-500 uppercase tracking-wider">License</h3> <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs"><span class="text-surface-500">Status</span> <span> </span> <span class="text-surface-500">Granted</span> <span class="text-surface-300"> </span> <!> <!></div></div>'), Ja = /* @__PURE__ */ M(
  `<button class="absolute top-3 right-3 w-8 h-8 rounded-lg bg-surface-700 text-surface-400
							hover:bg-surface-600 hover:text-surface-200 flex items-center justify-center text-sm z-10"></button> <div class="p-6 space-y-6"><div class="flex items-start gap-4 pr-10"><span class="text-4xl"> </span> <div><h2 class="text-lg font-bold text-surface-100"> </h2> <div class="text-xs text-surface-500"> </div> <div class="text-xs text-surface-400 mt-1"> </div></div></div> <!> <button><!></button> <!> <div class="space-y-3"><h3 class="text-[11px] text-surface-500 uppercase tracking-wider">Details</h3> <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs"><span class="text-surface-500">OCI Image</span> <span class="text-surface-300 font-mono break-all"> </span> <!> <!> <!></div></div> <!></div>`,
  1
), Xa = /* @__PURE__ */ M(
  `<button class="absolute inset-0 bg-surface-950/50 z-10" aria-label="Close detail"></button> <div class="absolute top-0 right-0 bottom-0 w-[400px] max-w-[90vw] z-20
				bg-surface-800 border-l border-surface-600 overflow-y-auto shadow-2xl"><!></div>`,
  1
), Qa = /* @__PURE__ */ M(`<div class="flex flex-col h-full overflow-hidden"><div class="border-b border-surface-600 bg-surface-800/50 px-4 py-3 shrink-0"><div class="flex items-center gap-3"><span class="text-xl"></span> <h1 class="text-sm font-semibold text-surface-100">Marketplace</h1> <div class="flex items-center gap-1.5 text-[10px]"><span></span> <span class="text-surface-500"> </span></div> <div class="flex-1"></div> <input placeholder="Search plugins..." class="w-56 bg-surface-700 border border-surface-600 rounded-lg
					px-3 py-1.5 text-xs text-surface-100 placeholder-surface-500
					focus:outline-none focus:border-accent-500"/></div> <div class="flex gap-1 mt-3"><button>Browse</button> <button>My Plugins <!></button></div></div> <div class="flex flex-1 overflow-hidden relative"><div class="flex-1 overflow-y-auto p-4"><!></div> <!></div></div>`);
function Za(e, t) {
  Hn(t, !0);
  let r = ba(t, "api"), n = /* @__PURE__ */ K(null), s = /* @__PURE__ */ K("connecting"), i, l = /* @__PURE__ */ K(xt([]));
  xt([]);
  let a = /* @__PURE__ */ K(!0), f = /* @__PURE__ */ K(null), u = /* @__PURE__ */ K("browse"), d = /* @__PURE__ */ K(""), c = /* @__PURE__ */ K(null), x = /* @__PURE__ */ K(!1), m = /* @__PURE__ */ K(null), v = /* @__PURE__ */ we(() => {
    let _ = o(l);
    if (o(d).trim()) {
      const E = o(d).toLowerCase();
      _ = _.filter((U) => U.name.toLowerCase().includes(E) || U.org.toLowerCase().includes(E) || U.description && U.description.toLowerCase().includes(E) || ir(U.tags).some((he) => he.toLowerCase().includes(E)));
    }
    return _;
  }), $ = /* @__PURE__ */ we(() => o(l).filter((_) => _.license_id !== null && _.license_id !== void 0)), N = /* @__PURE__ */ we(() => o(l).filter((_) => _.installed === 1).length);
  async function H() {
    try {
      A(n, await r().get("/health"), !0), A(s, "connected");
    } catch {
      A(n, null), A(s, "disconnected");
    }
  }
  async function F() {
    try {
      const _ = await r().get("/api/marketplace/catalog");
      A(l, _.items, !0);
    } catch (_) {
      A(f, _ instanceof Error ? _.message : String(_), !0);
    }
  }
  async function ve() {
    A(a, !0), A(f, null), await F(), A(a, !1);
  }
  async function ae(_) {
    A(x, !0);
    try {
      A(c, await r().get(`/api/marketplace/plugin/${encodeURIComponent(_)}`), !0);
    } catch (E) {
      console.error("[marketplace] Failed to load plugin detail:", E);
    } finally {
      A(x, !1);
    }
  }
  function De() {
    A(c, null);
  }
  async function Pe(_) {
    A(m, _.plugin_id, !0);
    try {
      await r().post("/api/marketplace/licenses/buy", {
        user_id: "rl",
        plugin_id: _.plugin_id,
        plugin_name: _.name,
        oci_image: _.oci_image
      }), await F(), o(c) && o(c).plugin_id === _.plugin_id && await ae(_.plugin_id);
    } catch (E) {
      console.error("[marketplace] Buy license failed:", E);
    } finally {
      A(m, null);
    }
  }
  async function Qe(_) {
    A(m, _.plugin_id, !0);
    try {
      await r().post("/api/marketplace/plugins/install", {
        license_id: _.license_id,
        plugin_id: _.plugin_id,
        plugin_name: _.name,
        version: _.version,
        oci_image: _.oci_image
      }), await F(), o(c) && o(c).plugin_id === _.plugin_id && await ae(_.plugin_id);
    } catch (E) {
      console.error("[marketplace] Install failed:", E);
    } finally {
      A(m, null);
    }
  }
  async function de(_) {
    A(m, _.plugin_id, !0);
    try {
      await r().post("/api/marketplace/plugins/remove", { license_id: _.license_id, plugin_id: _.plugin_id }), await F(), o(c) && o(c).plugin_id === _.plugin_id && await ae(_.plugin_id);
    } catch (E) {
      console.error("[marketplace] Remove failed:", E);
    } finally {
      A(m, null);
    }
  }
  function _e(_) {
    switch (Dr(_)) {
      case "get":
        Pe(_);
        break;
      case "install":
        Qe(_);
        break;
      case "installed":
        de(_);
        break;
      case "update":
        Qe(_);
        break;
    }
  }
  ks(() => {
    H(), i = setInterval(H, 5e3), ve();
  }), oa(() => {
    i && clearInterval(i);
  });
  var yr = {
    get api() {
      return r();
    },
    set api(_) {
      r(_), Qr();
    }
  }, Dt = Qa(), $r = g(Dt), Er = g($r), ln = g(Er);
  ln.textContent = "🏪";
  var kr = b(ln, 4), on = g(kr), fn = b(on, 2), Ss = g(fn, !0);
  h(fn), h(kr);
  var un = b(kr, 4);
  pa(un), h(Er);
  var cn = b(Er, 2), Tr = g(cn), er = b(Tr, 2), As = b(g(er));
  {
    var Cs = (_) => {
      var E = Ea(), U = g(E, !0);
      h(E), q(() => L(U, o(N))), w(_, E);
    };
    j(As, (_) => {
      o(N) > 0 && _(Cs);
    });
  }
  h(er), h(cn), h($r);
  var vn = b($r, 2), Sr = g(vn), Rs = g(Sr);
  {
    var Ns = (_) => {
      var E = ka(), U = g(E), he = g(U);
      he.textContent = "🏪", ar(2), h(U), h(E), w(_, E);
    }, Ls = (_) => {
      var E = Ta(), U = g(E), he = g(U);
      he.textContent = "⚠";
      var Be = b(he, 2), X = g(Be, !0);
      h(Be);
      var z = b(Be, 2);
      h(U), h(E), q(() => L(X, o(f))), Re("click", z, ve), w(_, E);
    }, Os = (_) => {
      var E = Sn(), U = Ce(E);
      {
        var he = (X) => {
          var z = Ca(), Y = g(z);
          {
            var p = (Q) => {
              var W = Sa(), be = Ce(W);
              be.textContent = "🔍";
              var le = b(be, 2), Se = g(le);
              h(le), q(() => L(Se, `No plugins matching "${o(d) ?? ""}"`)), w(Q, W);
            }, O = /* @__PURE__ */ we(() => o(d).trim()), pe = (Q) => {
              var W = Aa(), be = Ce(W);
              be.textContent = "📦", ar(2), w(Q, W);
            };
            j(Y, (Q) => {
              o(O) ? Q(p) : Q(pe, !1);
            });
          }
          h(z), w(X, z);
        }, Be = (X) => {
          var z = Ia();
          sr(z, 21, () => o(v), (Y) => Y.plugin_id, (Y, p) => {
            const O = /* @__PURE__ */ we(() => Dr(o(p))), pe = /* @__PURE__ */ we(() => o(m) === o(p).plugin_id);
            var Q = Oa(), W = g(Q), be = g(W), le = g(be), Se = g(le, !0);
            h(le);
            var Ze = b(le, 2), Fe = g(Ze), Ve = g(Fe), vt = g(Ve, !0);
            h(Ve);
            var et = b(Ve, 2), Pt = g(et);
            h(et), h(Fe);
            var tt = b(Fe, 2), Ft = g(tt, !0);
            h(tt);
            var St = b(tt, 2);
            {
              var Ue = (D) => {
                var B = Ra(), rt = g(B, !0);
                h(B), q(() => L(rt, o(p).description)), w(D, B);
              };
              j(St, (D) => {
                o(p).description && D(Ue);
              });
            }
            h(Ze), h(be), h(W);
            var Ae = b(W, 2), dt = g(Ae);
            sr(dt, 21, () => ir(o(p).tags).slice(0, 3), An, (D, B) => {
              var rt = Na(), Vt = g(rt, !0);
              h(rt), q(() => L(Vt, o(B))), w(D, rt);
            }), h(dt);
            var qe = b(dt, 2), jt = g(qe);
            {
              var Ht = (D) => {
                var B = Z("...");
                w(D, B);
              }, Bt = (D) => {
                var B = Z("Get");
                w(D, B);
              }, P = (D) => {
                var B = Z("Install");
                w(D, B);
              }, G = (D) => {
                var B = La();
                ar(2), w(D, B);
              }, At = (D) => {
                var B = Z("Update");
                w(D, B);
              }, Ar = (D) => {
                var B = Z("Revoked");
                w(D, B);
              };
              j(jt, (D) => {
                o(pe) ? D(Ht) : o(O) === "get" ? D(Bt, 1) : o(O) === "install" ? D(P, 2) : o(O) === "installed" ? D(G, 3) : o(O) === "update" ? D(At, 4) : D(Ar, !1);
              });
            }
            h(qe), h(Ae), h(Q), q(() => {
              L(Se, o(p).icon ?? "📦"), L(vt, o(p).name), L(Pt, `v${o(p).version ?? ""}`), L(Ft, o(p).org), qe.disabled = o(pe) || o(O) === "revoked", ht(qe, 1, `shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
											${o(pe) ? "bg-surface-600 text-surface-400 cursor-wait" : o(O) === "get" ? "bg-accent-600 text-surface-50 hover:bg-accent-500" : o(O) === "install" ? "bg-success-500 text-surface-50 hover:bg-success-400" : o(O) === "installed" ? "bg-surface-700 text-surface-300 hover:bg-danger-500/20 hover:text-danger-400 border border-surface-600" : o(O) === "update" ? "bg-accent-600 text-surface-50 hover:bg-accent-500" : "bg-surface-700 text-surface-500 cursor-not-allowed"}`);
            }), Re("click", W, () => ae(o(p).plugin_id)), Re("click", qe, (D) => {
              D.stopPropagation(), _e(o(p));
            }), w(Y, Q);
          }), h(z), w(X, z);
        };
        j(U, (X) => {
          o(v).length === 0 ? X(he) : X(Be, !1);
        });
      }
      w(_, E);
    }, Is = (_) => {
      var E = Sn(), U = Ce(E);
      {
        var he = (X) => {
          var z = Ma(), Y = g(z);
          Y.textContent = "📦";
          var p = b(Y, 6);
          h(z), Re("click", p, () => A(u, "browse")), w(X, z);
        }, Be = (X) => {
          var z = ja();
          sr(z, 21, () => o($), (Y) => Y.plugin_id, (Y, p) => {
            const O = /* @__PURE__ */ we(() => Dr(o(p))), pe = /* @__PURE__ */ we(() => o(m) === o(p).plugin_id);
            var Q = Fa(), W = g(Q), be = g(W, !0);
            h(W);
            var le = b(W, 2), Se = g(le), Ze = g(Se), Fe = g(Ze), Ve = g(Fe, !0);
            h(Fe);
            var vt = b(Fe, 2), et = g(vt);
            h(vt);
            var Pt = b(vt, 2);
            {
              var tt = (P) => {
                var G = Da();
                w(P, G);
              };
              j(Pt, (P) => {
                o(p).installed === 1 && P(tt);
              });
            }
            h(Ze);
            var Ft = b(Ze, 2);
            {
              var St = (P) => {
                var G = Pa(), At = g(G, !0);
                h(G), q(() => L(At, o(p).description)), w(P, G);
              };
              j(Ft, (P) => {
                o(p).description && P(St);
              });
            }
            h(Se), h(le);
            var Ue = b(le, 2), Ae = g(Ue);
            {
              var dt = (P) => {
                var G = Z("...");
                w(P, G);
              }, qe = (P) => {
                var G = Z("Install");
                w(P, G);
              }, jt = (P) => {
                var G = Z("Remove");
                w(P, G);
              }, Ht = (P) => {
                var G = Z("Update");
                w(P, G);
              }, Bt = (P) => {
                var G = Z("Revoked");
                w(P, G);
              };
              j(Ae, (P) => {
                o(pe) ? P(dt) : o(O) === "install" ? P(qe, 1) : o(O) === "installed" ? P(jt, 2) : o(O) === "update" ? P(Ht, 3) : P(Bt, !1);
              });
            }
            h(Ue), h(Q), q(() => {
              L(be, o(p).icon ?? "📦"), L(Ve, o(p).name), L(et, `v${o(p).installed_version ?? o(p).version ?? ""}`), Ue.disabled = o(pe) || o(O) === "revoked", ht(Ue, 1, `shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
										${o(pe) ? "bg-surface-600 text-surface-400 cursor-wait" : o(O) === "install" ? "bg-success-500 text-surface-50 hover:bg-success-400" : o(O) === "installed" ? "bg-surface-700 text-surface-300 hover:bg-danger-500/20 hover:text-danger-400 border border-surface-600" : o(O) === "update" ? "bg-accent-600 text-surface-50 hover:bg-accent-500" : "bg-surface-700 text-surface-500 cursor-not-allowed"}`);
            }), Re("click", Se, () => ae(o(p).plugin_id)), Re("click", Ue, () => _e(o(p))), w(Y, Q);
          }), h(z), w(X, z);
        };
        j(U, (X) => {
          o($).length === 0 ? X(he) : X(Be, !1);
        });
      }
      w(_, E);
    };
    j(Rs, (_) => {
      o(a) ? _(Ns) : o(f) ? _(Ls, 1) : o(u) === "browse" ? _(Os, 2) : o(u) === "my-plugins" && _(Is, 3);
    });
  }
  h(Sr);
  var Ms = b(Sr, 2);
  {
    var Ds = (_) => {
      var E = Xa(), U = Ce(E), he = b(U, 2), Be = g(he);
      {
        var X = (Y) => {
          var p = Ha();
          w(Y, p);
        }, z = (Y) => {
          const p = /* @__PURE__ */ we(() => o(c)), O = /* @__PURE__ */ we(() => o(p).license ? o(p).license.installed === 1 ? o(p).version !== o(p).license.installed_version ? "update" : "installed" : o(p).license.revoked === 1 ? "revoked" : "install" : "get"), pe = /* @__PURE__ */ we(() => o(m) === o(p).plugin_id);
          var Q = Ja(), W = Ce(Q);
          W.textContent = "✕";
          var be = b(W, 2), le = g(be), Se = g(le), Ze = g(Se, !0);
          h(Se);
          var Fe = b(Se, 2), Ve = g(Fe), vt = g(Ve, !0);
          h(Ve);
          var et = b(Ve, 2), Pt = g(et, !0);
          h(et);
          var tt = b(et, 2), Ft = g(tt);
          h(tt), h(Fe), h(le);
          var St = b(le, 2);
          {
            var Ue = (y) => {
              var T = Ba(), ne = g(T, !0);
              h(T), q(() => L(ne, o(p).description)), w(y, T);
            };
            j(St, (y) => {
              o(p).description && y(Ue);
            });
          }
          var Ae = b(St, 2), dt = g(Ae);
          {
            var qe = (y) => {
              var T = Z("Processing...");
              w(y, T);
            }, jt = (y) => {
              var T = Z("Get (Free)");
              w(y, T);
            }, Ht = (y) => {
              var T = Z("Install");
              w(y, T);
            }, Bt = (y) => {
              var T = Z("Remove Plugin");
              w(y, T);
            }, P = (y) => {
              var T = Z();
              q(() => L(T, `Update to v${o(p).version ?? ""}`)), w(y, T);
            }, G = (y) => {
              var T = Z("License Revoked");
              w(y, T);
            };
            j(dt, (y) => {
              o(pe) ? y(qe) : o(O) === "get" ? y(jt, 1) : o(O) === "install" ? y(Ht, 2) : o(O) === "installed" ? y(Bt, 3) : o(O) === "update" ? y(P, 4) : y(G, !1);
            });
          }
          h(Ae);
          var At = b(Ae, 2);
          {
            var Ar = (y) => {
              var T = Ua(), ne = b(g(T), 2);
              sr(ne, 21, () => ir(o(p).tags), An, (me, Cr) => {
                var _t = Va(), Rr = g(_t, !0);
                h(_t), q(() => L(Rr, o(Cr))), w(me, _t);
              }), h(ne), h(T), w(y, T);
            }, D = /* @__PURE__ */ we(() => ir(o(p).tags).length > 0);
            j(At, (y) => {
              o(D) && y(Ar);
            });
          }
          var B = b(At, 2), rt = b(g(B), 2), Vt = b(g(rt), 2), Ps = g(Vt, !0);
          h(Vt);
          var dn = b(Vt, 2);
          {
            var Fs = (y) => {
              var T = qa(), ne = b(Ce(T), 2), me = g(ne, !0);
              h(ne), q(() => L(me, o(p).publisher_identity)), w(y, T);
            };
            j(dn, (y) => {
              o(p).publisher_identity && y(Fs);
            });
          }
          var _n = b(dn, 2);
          {
            var js = (y) => {
              var T = za(), ne = b(Ce(T), 2), me = g(ne, !0);
              h(ne), q(() => L(me, o(p).homepage)), w(y, T);
            };
            j(_n, (y) => {
              o(p).homepage && y(js);
            });
          }
          var Hs = b(_n, 2);
          {
            var Bs = (y) => {
              var T = Ya(), ne = b(Ce(T), 2), me = g(ne);
              h(ne), q(() => L(me, `v${o(p).min_daemon_version ?? ""}`)), w(y, T);
            };
            j(Hs, (y) => {
              o(p).min_daemon_version && y(Bs);
            });
          }
          h(rt), h(B);
          var Vs = b(B, 2);
          {
            var Us = (y) => {
              var T = Wa(), ne = b(g(T), 2), me = b(g(ne), 2), Cr = g(me, !0);
              h(me);
              var _t = b(me, 4), Rr = g(_t, !0);
              h(_t);
              var hn = b(_t, 2);
              {
                var qs = (ze) => {
                  var Ut = Ga(), qt = b(Ce(Ut), 2), tr = g(qt), Nr = b(tr);
                  {
                    var Gs = (Lr) => {
                      var pn = Z();
                      q((Ks) => L(pn, `(${Ks ?? ""})`), [
                        () => new Date(o(p).license.installed_at).toLocaleDateString()
                      ]), w(Lr, pn);
                    };
                    j(Nr, (Lr) => {
                      o(p).license.installed_at && Lr(Gs);
                    });
                  }
                  h(qt), q(() => L(tr, `v${o(p).license.installed_version ?? ""} `)), w(ze, Ut);
                };
                j(hn, (ze) => {
                  o(p).license.installed === 1 && ze(qs);
                });
              }
              var zs = b(hn, 2);
              {
                var Ys = (ze) => {
                  var Ut = Ka(), qt = b(Ce(Ut), 2), tr = g(qt, !0);
                  h(qt), q((Nr) => L(tr, Nr), [
                    () => new Date(o(p).license.upgraded_at).toLocaleDateString()
                  ]), w(ze, Ut);
                };
                j(zs, (ze) => {
                  o(p).license.upgraded_at && ze(Ys);
                });
              }
              h(ne), h(T), q(
                (ze) => {
                  ht(me, 1, o(p).license.revoked ? "text-danger-400" : "text-success-400"), L(Cr, o(p).license.revoked ? "Revoked" : "Active"), L(Rr, ze);
                },
                [
                  () => new Date(o(p).license.granted_at).toLocaleDateString()
                ]
              ), w(y, T);
            };
            j(Vs, (y) => {
              o(p).license && y(Us);
            });
          }
          h(be), q(() => {
            L(Ze, o(p).icon ?? "📦"), L(vt, o(p).name), L(Pt, o(p).org), L(Ft, `v${o(p).version ?? ""}`), Ae.disabled = o(pe) || o(O) === "revoked", ht(Ae, 1, `w-full py-2.5 rounded-lg text-sm font-medium transition-colors
								${o(pe) ? "bg-surface-600 text-surface-400 cursor-wait" : o(O) === "get" ? "bg-accent-600 text-surface-50 hover:bg-accent-500" : o(O) === "install" ? "bg-success-500 text-surface-50 hover:bg-success-400" : o(O) === "installed" ? "bg-surface-700 text-surface-300 hover:bg-danger-500/20 hover:text-danger-400 border border-surface-600" : o(O) === "update" ? "bg-accent-600 text-surface-50 hover:bg-accent-500" : "bg-surface-700 text-surface-500 cursor-not-allowed"}`), L(Ps, o(p).oci_image);
          }), Re("click", W, De), Re("click", Ae, () => {
            const y = {
              ...o(p),
              license_id: o(p).license?.license_id ?? null,
              installed: o(p).license?.installed ?? null,
              installed_version: o(p).license?.installed_version ?? null
            };
            _e(y);
          }), w(Y, Q);
        };
        j(Be, (Y) => {
          o(x) ? Y(X) : o(c) && Y(z, 1);
        });
      }
      h(he), Re("click", U, De), w(_, E);
    };
    j(Ms, (_) => {
      (o(c) || o(x)) && _(Ds);
    });
  }
  return h(vn), h(Dt), q(() => {
    ht(on, 1, `inline-block w-1.5 h-1.5 rounded-full ${o(s) === "connected" ? "bg-success-400" : o(s) === "connecting" ? "bg-yellow-400 animate-pulse" : "bg-danger-400"}`), L(Ss, o(s) === "connected" ? `v${o(n)?.version ?? "?"}` : o(s)), ht(Tr, 1, `px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
					${o(u) === "browse" ? "bg-accent-600 text-surface-50" : "text-surface-400 hover:text-surface-200 hover:bg-surface-700"}`), ht(er, 1, `px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
					${o(u) === "my-plugins" ? "bg-accent-600 text-surface-50" : "text-surface-400 hover:text-surface-200 hover:bg-surface-700"}`);
  }), xa(un, () => o(d), (_) => A(d, _)), Re("click", Tr, () => A(u, "browse")), Re("click", er, () => A(u, "my-plugins")), w(e, Dt), Bn(yr);
}
Zi(["click"]);
customElements.define("marketplace-studio", $a(Za, { api: {} }, [], []));
export {
  Za as default
};
