"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/mithril/render/vnode.js
  var require_vnode = __commonJS({
    "node_modules/mithril/render/vnode.js"(exports, module) {
      "use strict";
      function Vnode(tag, key, attrs, children, text, dom) {
        return { tag, key, attrs, children, text, dom, is: void 0, domSize: void 0, state: void 0, events: void 0, instance: void 0 };
      }
      Vnode.normalize = function(node) {
        if (Array.isArray(node)) return Vnode("[", void 0, void 0, Vnode.normalizeChildren(node), void 0, void 0);
        if (node == null || typeof node === "boolean") return null;
        if (typeof node === "object") return node;
        return Vnode("#", void 0, void 0, String(node), void 0, void 0);
      };
      Vnode.normalizeChildren = function(input) {
        var children = [];
        if (input.length) {
          var isKeyed = input[0] != null && input[0].key != null;
          for (var i = 1; i < input.length; i++) {
            if ((input[i] != null && input[i].key != null) !== isKeyed) {
              throw new TypeError(
                isKeyed && (input[i] != null || typeof input[i] === "boolean") ? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole." : "In fragments, vnodes must either all have keys or none have keys."
              );
            }
          }
          for (var i = 0; i < input.length; i++) {
            children[i] = Vnode.normalize(input[i]);
          }
        }
        return children;
      };
      module.exports = Vnode;
    }
  });

  // node_modules/mithril/render/hyperscriptVnode.js
  var require_hyperscriptVnode = __commonJS({
    "node_modules/mithril/render/hyperscriptVnode.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      module.exports = function() {
        var attrs = arguments[this], start2 = this + 1, children;
        if (attrs == null) {
          attrs = {};
        } else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
          attrs = {};
          start2 = this;
        }
        if (arguments.length === start2 + 1) {
          children = arguments[start2];
          if (!Array.isArray(children)) children = [children];
        } else {
          children = [];
          while (start2 < arguments.length) children.push(arguments[start2++]);
        }
        return Vnode("", attrs.key, attrs, children);
      };
    }
  });

  // node_modules/mithril/util/hasOwn.js
  var require_hasOwn = __commonJS({
    "node_modules/mithril/util/hasOwn.js"(exports, module) {
      "use strict";
      module.exports = {}.hasOwnProperty;
    }
  });

  // node_modules/mithril/render/hyperscript.js
  var require_hyperscript = __commonJS({
    "node_modules/mithril/render/hyperscript.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      var hyperscriptVnode = require_hyperscriptVnode();
      var hasOwn = require_hasOwn();
      var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
      var selectorCache = /* @__PURE__ */ Object.create(null);
      function isEmpty(object) {
        for (var key in object) if (hasOwn.call(object, key)) return false;
        return true;
      }
      function compileSelector(selector) {
        var match, tag = "div", classes = [], attrs = {};
        while (match = selectorParser.exec(selector)) {
          var type = match[1], value = match[2];
          if (type === "" && value !== "") tag = value;
          else if (type === "#") attrs.id = value;
          else if (type === ".") classes.push(value);
          else if (match[3][0] === "[") {
            var attrValue = match[6];
            if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
            if (match[4] === "class") classes.push(attrValue);
            else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true;
          }
        }
        if (classes.length > 0) attrs.className = classes.join(" ");
        if (isEmpty(attrs)) attrs = null;
        return selectorCache[selector] = { tag, attrs };
      }
      function execSelector(state, vnode) {
        var attrs = vnode.attrs;
        var hasClass = hasOwn.call(attrs, "class");
        var className = hasClass ? attrs.class : attrs.className;
        vnode.tag = state.tag;
        if (state.attrs != null) {
          attrs = Object.assign({}, state.attrs, attrs);
          if (className != null || state.attrs.className != null) attrs.className = className != null ? state.attrs.className != null ? String(state.attrs.className) + " " + String(className) : className : state.attrs.className != null ? state.attrs.className : null;
        } else {
          if (className != null) attrs.className = className;
        }
        if (hasClass) attrs.class = null;
        if (state.tag === "input" && hasOwn.call(attrs, "type")) {
          attrs = Object.assign({ type: attrs.type }, attrs);
        }
        vnode.is = attrs.is;
        vnode.attrs = attrs;
        return vnode;
      }
      function hyperscript(selector) {
        if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
          throw Error("The selector must be either a string or a component.");
        }
        var vnode = hyperscriptVnode.apply(1, arguments);
        if (typeof selector === "string") {
          vnode.children = Vnode.normalizeChildren(vnode.children);
          if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode);
        }
        vnode.tag = selector;
        return vnode;
      }
      module.exports = hyperscript;
    }
  });

  // node_modules/mithril/render/trust.js
  var require_trust = __commonJS({
    "node_modules/mithril/render/trust.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      module.exports = function(html) {
        if (html == null) html = "";
        return Vnode("<", void 0, void 0, html, void 0, void 0);
      };
    }
  });

  // node_modules/mithril/render/fragment.js
  var require_fragment = __commonJS({
    "node_modules/mithril/render/fragment.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      var hyperscriptVnode = require_hyperscriptVnode();
      module.exports = function() {
        var vnode = hyperscriptVnode.apply(0, arguments);
        vnode.tag = "[";
        vnode.children = Vnode.normalizeChildren(vnode.children);
        return vnode;
      };
    }
  });

  // node_modules/mithril/hyperscript.js
  var require_hyperscript2 = __commonJS({
    "node_modules/mithril/hyperscript.js"(exports, module) {
      "use strict";
      var hyperscript = require_hyperscript();
      hyperscript.trust = require_trust();
      hyperscript.fragment = require_fragment();
      module.exports = hyperscript;
    }
  });

  // node_modules/mithril/render/domFor.js
  var require_domFor = __commonJS({
    "node_modules/mithril/render/domFor.js"(exports, module) {
      "use strict";
      var delayedRemoval = /* @__PURE__ */ new WeakMap();
      function* domFor(vnode) {
        var dom = vnode.dom;
        var domSize = vnode.domSize;
        var generation = delayedRemoval.get(dom);
        if (dom != null) do {
          var nextSibling = dom.nextSibling;
          if (delayedRemoval.get(dom) === generation) {
            yield dom;
            domSize--;
          }
          dom = nextSibling;
        } while (domSize);
      }
      module.exports = {
        delayedRemoval,
        domFor
      };
    }
  });

  // node_modules/mithril/render/render.js
  var require_render = __commonJS({
    "node_modules/mithril/render/render.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      var df = require_domFor();
      var delayedRemoval = df.delayedRemoval;
      var domFor = df.domFor;
      module.exports = function() {
        var nameSpace = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML"
        };
        var currentRedraw;
        var currentRender;
        function getDocument(dom) {
          return dom.ownerDocument;
        }
        function getNameSpace(vnode) {
          return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag];
        }
        function checkState(vnode, original) {
          if (vnode.state !== original) throw new Error("'vnode.state' must not be modified.");
        }
        function callHook(vnode) {
          var original = vnode.state;
          try {
            return this.apply(original, arguments);
          } finally {
            checkState(vnode, original);
          }
        }
        function activeElement(dom) {
          try {
            return getDocument(dom).activeElement;
          } catch (e) {
            return null;
          }
        }
        function createNodes(parent, vnodes, start2, end, hooks, nextSibling, ns) {
          for (var i = start2; i < end; i++) {
            var vnode = vnodes[i];
            if (vnode != null) {
              createNode(parent, vnode, hooks, ns, nextSibling);
            }
          }
        }
        function createNode(parent, vnode, hooks, ns, nextSibling) {
          var tag = vnode.tag;
          if (typeof tag === "string") {
            vnode.state = {};
            if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
            switch (tag) {
              case "#":
                createText(parent, vnode, nextSibling);
                break;
              case "<":
                createHTML(parent, vnode, ns, nextSibling);
                break;
              case "[":
                createFragment(parent, vnode, hooks, ns, nextSibling);
                break;
              default:
                createElement(parent, vnode, hooks, ns, nextSibling);
            }
          } else createComponent(parent, vnode, hooks, ns, nextSibling);
        }
        function createText(parent, vnode, nextSibling) {
          vnode.dom = getDocument(parent).createTextNode(vnode.children);
          insertDOM(parent, vnode.dom, nextSibling);
        }
        var possibleParents = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" };
        function createHTML(parent, vnode, ns, nextSibling) {
          var match = vnode.children.match(/^\s*?<(\w+)/im) || [];
          var temp = getDocument(parent).createElement(possibleParents[match[1]] || "div");
          if (ns === "http://www.w3.org/2000/svg") {
            temp.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + vnode.children + "</svg>";
            temp = temp.firstChild;
          } else {
            temp.innerHTML = vnode.children;
          }
          vnode.dom = temp.firstChild;
          vnode.domSize = temp.childNodes.length;
          var fragment = getDocument(parent).createDocumentFragment();
          var child;
          while (child = temp.firstChild) {
            fragment.appendChild(child);
          }
          insertDOM(parent, fragment, nextSibling);
        }
        function createFragment(parent, vnode, hooks, ns, nextSibling) {
          var fragment = getDocument(parent).createDocumentFragment();
          if (vnode.children != null) {
            var children = vnode.children;
            createNodes(fragment, children, 0, children.length, hooks, null, ns);
          }
          vnode.dom = fragment.firstChild;
          vnode.domSize = fragment.childNodes.length;
          insertDOM(parent, fragment, nextSibling);
        }
        function createElement(parent, vnode, hooks, ns, nextSibling) {
          var tag = vnode.tag;
          var attrs = vnode.attrs;
          var is = vnode.is;
          ns = getNameSpace(vnode) || ns;
          var element = ns ? is ? getDocument(parent).createElementNS(ns, tag, { is }) : getDocument(parent).createElementNS(ns, tag) : is ? getDocument(parent).createElement(tag, { is }) : getDocument(parent).createElement(tag);
          vnode.dom = element;
          if (attrs != null) {
            setAttrs(vnode, attrs, ns);
          }
          insertDOM(parent, element, nextSibling);
          if (!maybeSetContentEditable(vnode)) {
            if (vnode.children != null) {
              var children = vnode.children;
              createNodes(element, children, 0, children.length, hooks, null, ns);
              if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs);
            }
          }
        }
        function initComponent(vnode, hooks) {
          var sentinel;
          if (typeof vnode.tag.view === "function") {
            vnode.state = Object.create(vnode.tag);
            sentinel = vnode.state.view;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
          } else {
            vnode.state = void 0;
            sentinel = vnode.tag;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
            vnode.state = vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function" ? new vnode.tag(vnode) : vnode.tag(vnode);
          }
          initLifecycle(vnode.state, vnode, hooks);
          if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
          vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
          if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
          sentinel.$$reentrantLock$$ = null;
        }
        function createComponent(parent, vnode, hooks, ns, nextSibling) {
          initComponent(vnode, hooks);
          if (vnode.instance != null) {
            createNode(parent, vnode.instance, hooks, ns, nextSibling);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
          } else {
            vnode.domSize = 0;
          }
        }
        function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
          if (old === vnodes || old == null && vnodes == null) return;
          else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns);
          else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length);
          else {
            var isOldKeyed = old[0] != null && old[0].key != null;
            var isKeyed = vnodes[0] != null && vnodes[0].key != null;
            var start2 = 0, oldStart = 0;
            if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++;
            if (!isKeyed) while (start2 < vnodes.length && vnodes[start2] == null) start2++;
            if (isOldKeyed !== isKeyed) {
              removeNodes(parent, old, oldStart, old.length);
              createNodes(parent, vnodes, start2, vnodes.length, hooks, nextSibling, ns);
            } else if (!isKeyed) {
              var commonLength = old.length < vnodes.length ? old.length : vnodes.length;
              start2 = start2 < oldStart ? start2 : oldStart;
              for (; start2 < commonLength; start2++) {
                o = old[start2];
                v = vnodes[start2];
                if (o === v || o == null && v == null) continue;
                else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start2 + 1, nextSibling));
                else if (v == null) removeNode(parent, o);
                else updateNode(parent, o, v, hooks, getNextSibling(old, start2 + 1, nextSibling), ns);
              }
              if (old.length > commonLength) removeNodes(parent, old, start2, old.length);
              if (vnodes.length > commonLength) createNodes(parent, vnodes, start2, vnodes.length, hooks, nextSibling, ns);
            } else {
              var oldEnd = old.length - 1, end = vnodes.length - 1, map2, o, v, oe, ve, topSibling;
              while (oldEnd >= oldStart && end >= start2) {
                oe = old[oldEnd];
                ve = vnodes[end];
                if (oe.key !== ve.key) break;
                if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                if (ve.dom != null) nextSibling = ve.dom;
                oldEnd--, end--;
              }
              while (oldEnd >= oldStart && end >= start2) {
                o = old[oldStart];
                v = vnodes[start2];
                if (o.key !== v.key) break;
                oldStart++, start2++;
                if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns);
              }
              while (oldEnd >= oldStart && end >= start2) {
                if (start2 === end) break;
                if (o.key !== ve.key || oe.key !== v.key) break;
                topSibling = getNextSibling(old, oldStart, nextSibling);
                moveDOM(parent, oe, topSibling);
                if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns);
                if (++start2 <= --end) moveDOM(parent, o, nextSibling);
                if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns);
                if (ve.dom != null) nextSibling = ve.dom;
                oldStart++;
                oldEnd--;
                oe = old[oldEnd];
                ve = vnodes[end];
                o = old[oldStart];
                v = vnodes[start2];
              }
              while (oldEnd >= oldStart && end >= start2) {
                if (oe.key !== ve.key) break;
                if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                if (ve.dom != null) nextSibling = ve.dom;
                oldEnd--, end--;
                oe = old[oldEnd];
                ve = vnodes[end];
              }
              if (start2 > end) removeNodes(parent, old, oldStart, oldEnd + 1);
              else if (oldStart > oldEnd) createNodes(parent, vnodes, start2, end + 1, hooks, nextSibling, ns);
              else {
                var originalNextSibling = nextSibling, vnodesLength = end - start2 + 1, oldIndices = new Array(vnodesLength), li = 0, i = 0, pos = 2147483647, matched = 0, map2, lisIndices;
                for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1;
                for (i = end; i >= start2; i--) {
                  if (map2 == null) map2 = getKeyMap(old, oldStart, oldEnd + 1);
                  ve = vnodes[i];
                  var oldIndex = map2[ve.key];
                  if (oldIndex != null) {
                    pos = oldIndex < pos ? oldIndex : -1;
                    oldIndices[i - start2] = oldIndex;
                    oe = old[oldIndex];
                    old[oldIndex] = null;
                    if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    matched++;
                  }
                }
                nextSibling = originalNextSibling;
                if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1);
                if (matched === 0) createNodes(parent, vnodes, start2, end + 1, hooks, nextSibling, ns);
                else {
                  if (pos === -1) {
                    lisIndices = makeLisIndices(oldIndices);
                    li = lisIndices.length - 1;
                    for (i = end; i >= start2; i--) {
                      v = vnodes[i];
                      if (oldIndices[i - start2] === -1) createNode(parent, v, hooks, ns, nextSibling);
                      else {
                        if (lisIndices[li] === i - start2) li--;
                        else moveDOM(parent, v, nextSibling);
                      }
                      if (v.dom != null) nextSibling = vnodes[i].dom;
                    }
                  } else {
                    for (i = end; i >= start2; i--) {
                      v = vnodes[i];
                      if (oldIndices[i - start2] === -1) createNode(parent, v, hooks, ns, nextSibling);
                      if (v.dom != null) nextSibling = vnodes[i].dom;
                    }
                  }
                }
              }
            }
          }
        }
        function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
          var oldTag = old.tag, tag = vnode.tag;
          if (oldTag === tag && old.is === vnode.is) {
            vnode.state = old.state;
            vnode.events = old.events;
            if (shouldNotUpdate(vnode, old)) return;
            if (typeof oldTag === "string") {
              if (vnode.attrs != null) {
                updateLifecycle(vnode.attrs, vnode, hooks);
              }
              switch (oldTag) {
                case "#":
                  updateText(old, vnode);
                  break;
                case "<":
                  updateHTML(parent, old, vnode, ns, nextSibling);
                  break;
                case "[":
                  updateFragment(parent, old, vnode, hooks, nextSibling, ns);
                  break;
                default:
                  updateElement(old, vnode, hooks, ns);
              }
            } else updateComponent(parent, old, vnode, hooks, nextSibling, ns);
          } else {
            removeNode(parent, old);
            createNode(parent, vnode, hooks, ns, nextSibling);
          }
        }
        function updateText(old, vnode) {
          if (old.children.toString() !== vnode.children.toString()) {
            old.dom.nodeValue = vnode.children;
          }
          vnode.dom = old.dom;
        }
        function updateHTML(parent, old, vnode, ns, nextSibling) {
          if (old.children !== vnode.children) {
            removeDOM(parent, old);
            createHTML(parent, vnode, ns, nextSibling);
          } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
          }
        }
        function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
          updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns);
          var domSize = 0, children = vnode.children;
          vnode.dom = null;
          if (children != null) {
            for (var i = 0; i < children.length; i++) {
              var child = children[i];
              if (child != null && child.dom != null) {
                if (vnode.dom == null) vnode.dom = child.dom;
                domSize += child.domSize || 1;
              }
            }
            if (domSize !== 1) vnode.domSize = domSize;
          }
        }
        function updateElement(old, vnode, hooks, ns) {
          var element = vnode.dom = old.dom;
          ns = getNameSpace(vnode) || ns;
          updateAttrs(vnode, old.attrs, vnode.attrs, ns);
          if (!maybeSetContentEditable(vnode)) {
            updateNodes(element, old.children, vnode.children, hooks, null, ns);
          }
        }
        function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
          vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
          if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
          updateLifecycle(vnode.state, vnode, hooks);
          if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
          if (vnode.instance != null) {
            if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling);
            else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.instance.domSize;
          } else if (old.instance != null) {
            removeNode(parent, old.instance);
            vnode.dom = void 0;
            vnode.domSize = 0;
          } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
          }
        }
        function getKeyMap(vnodes, start2, end) {
          var map2 = /* @__PURE__ */ Object.create(null);
          for (; start2 < end; start2++) {
            var vnode = vnodes[start2];
            if (vnode != null) {
              var key = vnode.key;
              if (key != null) map2[key] = start2;
            }
          }
          return map2;
        }
        var lisTemp = [];
        function makeLisIndices(a) {
          var result = [0];
          var u = 0, v = 0, i = 0;
          var il = lisTemp.length = a.length;
          for (var i = 0; i < il; i++) lisTemp[i] = a[i];
          for (var i = 0; i < il; ++i) {
            if (a[i] === -1) continue;
            var j = result[result.length - 1];
            if (a[j] < a[i]) {
              lisTemp[i] = j;
              result.push(i);
              continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
              var c = (u >>> 1) + (v >>> 1) + (u & v & 1);
              if (a[result[c]] < a[i]) {
                u = c + 1;
              } else {
                v = c;
              }
            }
            if (a[i] < a[result[u]]) {
              if (u > 0) lisTemp[i] = result[u - 1];
              result[u] = i;
            }
          }
          u = result.length;
          v = result[u - 1];
          while (u-- > 0) {
            result[u] = v;
            v = lisTemp[v];
          }
          lisTemp.length = 0;
          return result;
        }
        function getNextSibling(vnodes, i, nextSibling) {
          for (; i < vnodes.length; i++) {
            if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;
          }
          return nextSibling;
        }
        function moveDOM(parent, vnode, nextSibling) {
          if (vnode.dom != null) {
            var target;
            if (vnode.domSize == null) {
              target = vnode.dom;
            } else {
              target = getDocument(parent).createDocumentFragment();
              for (var dom of domFor(vnode)) target.appendChild(dom);
            }
            insertDOM(parent, target, nextSibling);
          }
        }
        function insertDOM(parent, dom, nextSibling) {
          if (nextSibling != null) parent.insertBefore(dom, nextSibling);
          else parent.appendChild(dom);
        }
        function maybeSetContentEditable(vnode) {
          if (vnode.attrs == null || vnode.attrs.contenteditable == null && // attribute
          vnode.attrs.contentEditable == null) return false;
          var children = vnode.children;
          if (children != null && children.length === 1 && children[0].tag === "<") {
            var content = children[0].children;
            if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;
          } else if (children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted.");
          return true;
        }
        function removeNodes(parent, vnodes, start2, end) {
          for (var i = start2; i < end; i++) {
            var vnode = vnodes[i];
            if (vnode != null) removeNode(parent, vnode);
          }
        }
        function tryBlockRemove(parent, vnode, source, counter) {
          var original = vnode.state;
          var result = callHook.call(source.onbeforeremove, vnode);
          if (result == null) return;
          var generation = currentRender;
          for (var dom of domFor(vnode)) delayedRemoval.set(dom, generation);
          counter.v++;
          Promise.resolve(result).finally(function() {
            checkState(vnode, original);
            tryResumeRemove(parent, vnode, counter);
          });
        }
        function tryResumeRemove(parent, vnode, counter) {
          if (--counter.v === 0) {
            onremove(vnode);
            removeDOM(parent, vnode);
          }
        }
        function removeNode(parent, vnode) {
          var counter = { v: 1 };
          if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") tryBlockRemove(parent, vnode, vnode.state, counter);
          if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") tryBlockRemove(parent, vnode, vnode.attrs, counter);
          tryResumeRemove(parent, vnode, counter);
        }
        function removeDOM(parent, vnode) {
          if (vnode.dom == null) return;
          if (vnode.domSize == null) {
            parent.removeChild(vnode.dom);
          } else {
            for (var dom of domFor(vnode)) parent.removeChild(dom);
          }
        }
        function onremove(vnode) {
          if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode);
          if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode);
          if (typeof vnode.tag !== "string") {
            if (vnode.instance != null) onremove(vnode.instance);
          } else {
            var children = vnode.children;
            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (child != null) onremove(child);
              }
            }
          }
        }
        function setAttrs(vnode, attrs, ns) {
          for (var key in attrs) {
            setAttr(vnode, key, null, attrs[key], ns);
          }
        }
        function setAttr(vnode, key, old, value, ns) {
          if (key === "key" || value == null || isLifecycleMethod(key) || old === value && !isFormAttribute(vnode, key) && typeof value !== "object") return;
          if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value);
          if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
          else if (key === "style") updateStyle(vnode.dom, old, value);
          else if (hasPropertyKey(vnode, key, ns)) {
            if (key === "value") {
              if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value) return;
              if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return;
              if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return;
              if (vnode.tag === "input" && vnode.attrs.type === "file" && "" + value !== "") {
                console.error("`value` is read-only on file inputs!");
                return;
              }
            }
            if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value);
            else vnode.dom[key] = value;
          } else {
            if (typeof value === "boolean") {
              if (value) vnode.dom.setAttribute(key, "");
              else vnode.dom.removeAttribute(key);
            } else vnode.dom.setAttribute(key === "className" ? "class" : key, value);
          }
        }
        function removeAttr(vnode, key, old, ns) {
          if (key === "key" || old == null || isLifecycleMethod(key)) return;
          if (key[0] === "o" && key[1] === "n") updateEvent(vnode, key, void 0);
          else if (key === "style") updateStyle(vnode.dom, old, null);
          else if (hasPropertyKey(vnode, key, ns) && key !== "className" && key !== "title" && !(key === "value" && (vnode.tag === "option" || vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement(vnode.dom))) && !(vnode.tag === "input" && key === "type")) {
            vnode.dom[key] = null;
          } else {
            var nsLastIndex = key.indexOf(":");
            if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1);
            if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key);
          }
        }
        function setLateSelectAttrs(vnode, attrs) {
          if ("value" in attrs) {
            if (attrs.value === null) {
              if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null;
            } else {
              var normalized = "" + attrs.value;
              if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
                vnode.dom.value = normalized;
              }
            }
          }
          if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, void 0);
        }
        function updateAttrs(vnode, old, attrs, ns) {
          var val;
          if (old != null) {
            if (old === attrs) {
              console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major");
            }
            for (var key in old) {
              if ((val = old[key]) != null && (attrs == null || attrs[key] == null)) {
                removeAttr(vnode, key, val, ns);
              }
            }
          }
          if (attrs != null) {
            for (var key in attrs) {
              setAttr(vnode, key, old && old[key], attrs[key], ns);
            }
          }
        }
        function isFormAttribute(vnode, attr) {
          return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && (vnode.dom === activeElement(vnode.dom) || vnode.tag === "option" && vnode.dom.parentNode === activeElement(vnode.dom));
        }
        function isLifecycleMethod(attr) {
          return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
        }
        function hasPropertyKey(vnode, key, ns) {
          return ns === void 0 && // If it's a custom element, just keep it.
          (vnode.tag.indexOf("-") > -1 || vnode.is || // If it's a normal element, let's try to avoid a few browser bugs.
          key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height") && key in vnode.dom;
        }
        function updateStyle(element, old, style) {
          if (old === style) {
          } else if (style == null) {
            element.style = "";
          } else if (typeof style !== "object") {
            element.style = style;
          } else if (old == null || typeof old !== "object") {
            element.style = "";
            for (var key in style) {
              var value = style[key];
              if (value != null) {
                if (key.includes("-")) element.style.setProperty(key, String(value));
                else element.style[key] = String(value);
              }
            }
          } else {
            for (var key in old) {
              if (old[key] != null && style[key] == null) {
                if (key.includes("-")) element.style.removeProperty(key);
                else element.style[key] = "";
              }
            }
            for (var key in style) {
              var value = style[key];
              if (value != null && (value = String(value)) !== String(old[key])) {
                if (key.includes("-")) element.style.setProperty(key, value);
                else element.style[key] = value;
              }
            }
          }
        }
        function EventDict() {
          this._ = currentRedraw;
        }
        EventDict.prototype = /* @__PURE__ */ Object.create(null);
        EventDict.prototype.handleEvent = function(ev) {
          var handler = this["on" + ev.type];
          var result;
          if (typeof handler === "function") result = handler.call(ev.currentTarget, ev);
          else if (typeof handler.handleEvent === "function") handler.handleEvent(ev);
          if (this._ && ev.redraw !== false) (0, this._)();
          if (result === false) {
            ev.preventDefault();
            ev.stopPropagation();
          }
        };
        function updateEvent(vnode, key, value) {
          if (vnode.events != null) {
            vnode.events._ = currentRedraw;
            if (vnode.events[key] === value) return;
            if (value != null && (typeof value === "function" || typeof value === "object")) {
              if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false);
              vnode.events[key] = value;
            } else {
              if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false);
              vnode.events[key] = void 0;
            }
          } else if (value != null && (typeof value === "function" || typeof value === "object")) {
            vnode.events = new EventDict();
            vnode.dom.addEventListener(key.slice(2), vnode.events, false);
            vnode.events[key] = value;
          }
        }
        function initLifecycle(source, vnode, hooks) {
          if (typeof source.oninit === "function") callHook.call(source.oninit, vnode);
          if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode));
        }
        function updateLifecycle(source, vnode, hooks) {
          if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode));
        }
        function shouldNotUpdate(vnode, old) {
          do {
            if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
              var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old);
              if (force !== void 0 && !force) break;
            }
            if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
              var force = callHook.call(vnode.state.onbeforeupdate, vnode, old);
              if (force !== void 0 && !force) break;
            }
            return false;
          } while (false);
          vnode.dom = old.dom;
          vnode.domSize = old.domSize;
          vnode.instance = old.instance;
          vnode.attrs = old.attrs;
          vnode.children = old.children;
          vnode.text = old.text;
          return true;
        }
        var currentDOM;
        return function(dom, vnodes, redraw) {
          if (!dom) throw new TypeError("DOM element being rendered to does not exist.");
          if (currentDOM != null && dom.contains(currentDOM)) {
            throw new TypeError("Node is currently being rendered to and thus is locked.");
          }
          var prevRedraw = currentRedraw;
          var prevDOM = currentDOM;
          var hooks = [];
          var active = activeElement(dom);
          var namespace = dom.namespaceURI;
          currentDOM = dom;
          currentRedraw = typeof redraw === "function" ? redraw : void 0;
          currentRender = {};
          try {
            if (dom.vnodes == null) dom.textContent = "";
            vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes]);
            updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? void 0 : namespace);
            dom.vnodes = vnodes;
            if (active != null && activeElement(dom) !== active && typeof active.focus === "function") active.focus();
            for (var i = 0; i < hooks.length; i++) hooks[i]();
          } finally {
            currentRedraw = prevRedraw;
            currentDOM = prevDOM;
          }
        };
      };
    }
  });

  // node_modules/mithril/render.js
  var require_render2 = __commonJS({
    "node_modules/mithril/render.js"(exports, module) {
      "use strict";
      module.exports = require_render()(typeof window !== "undefined" ? window : null);
    }
  });

  // node_modules/mithril/api/mount-redraw.js
  var require_mount_redraw = __commonJS({
    "node_modules/mithril/api/mount-redraw.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      module.exports = function(render, schedule, console2) {
        var subscriptions = [];
        var pending = false;
        var offset = -1;
        function sync() {
          for (offset = 0; offset < subscriptions.length; offset += 2) {
            try {
              render(subscriptions[offset], Vnode(subscriptions[offset + 1]), redraw);
            } catch (e) {
              console2.error(e);
            }
          }
          offset = -1;
        }
        function redraw() {
          if (!pending) {
            pending = true;
            schedule(function() {
              pending = false;
              sync();
            });
          }
        }
        redraw.sync = sync;
        function mount(root3, component) {
          if (component != null && component.view == null && typeof component !== "function") {
            throw new TypeError("m.mount expects a component, not a vnode.");
          }
          var index = subscriptions.indexOf(root3);
          if (index >= 0) {
            subscriptions.splice(index, 2);
            if (index <= offset) offset -= 2;
            render(root3, []);
          }
          if (component != null) {
            subscriptions.push(root3, component);
            render(root3, Vnode(component), redraw);
          }
        }
        return { mount, redraw };
      };
    }
  });

  // node_modules/mithril/mount-redraw.js
  var require_mount_redraw2 = __commonJS({
    "node_modules/mithril/mount-redraw.js"(exports, module) {
      "use strict";
      var render = require_render2();
      module.exports = require_mount_redraw()(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null);
    }
  });

  // node_modules/mithril/querystring/build.js
  var require_build = __commonJS({
    "node_modules/mithril/querystring/build.js"(exports, module) {
      "use strict";
      module.exports = function(object) {
        if (Object.prototype.toString.call(object) !== "[object Object]") return "";
        var args = [];
        for (var key in object) {
          destructure(key, object[key]);
        }
        return args.join("&");
        function destructure(key2, value) {
          if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
              destructure(key2 + "[" + i + "]", value[i]);
            }
          } else if (Object.prototype.toString.call(value) === "[object Object]") {
            for (var i in value) {
              destructure(key2 + "[" + i + "]", value[i]);
            }
          } else args.push(encodeURIComponent(key2) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
        }
      };
    }
  });

  // node_modules/mithril/pathname/build.js
  var require_build2 = __commonJS({
    "node_modules/mithril/pathname/build.js"(exports, module) {
      "use strict";
      var buildQueryString = require_build();
      module.exports = function(template, params) {
        if (/:([^\/\.-]+)(\.{3})?:/.test(template)) {
          throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
        }
        if (params == null) return template;
        var queryIndex = template.indexOf("?");
        var hashIndex = template.indexOf("#");
        var queryEnd = hashIndex < 0 ? template.length : hashIndex;
        var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
        var path = template.slice(0, pathEnd);
        var query = {};
        Object.assign(query, params);
        var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m4, key, variadic) {
          delete query[key];
          if (params[key] == null) return m4;
          return variadic ? params[key] : encodeURIComponent(String(params[key]));
        });
        var newQueryIndex = resolved.indexOf("?");
        var newHashIndex = resolved.indexOf("#");
        var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex;
        var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex;
        var result = resolved.slice(0, newPathEnd);
        if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd);
        if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd);
        var querystring = buildQueryString(query);
        if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring;
        if (hashIndex >= 0) result += template.slice(hashIndex);
        if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex);
        return result;
      };
    }
  });

  // node_modules/mithril/request/request.js
  var require_request = __commonJS({
    "node_modules/mithril/request/request.js"(exports, module) {
      "use strict";
      var buildPathname = require_build2();
      var hasOwn = require_hasOwn();
      module.exports = function($window, oncompletion) {
        function PromiseProxy(executor) {
          return new Promise(executor);
        }
        function makeRequest(url, args) {
          return new Promise(function(resolve, reject) {
            url = buildPathname(url, args.params);
            var method = args.method != null ? args.method.toUpperCase() : "GET";
            var body = args.body;
            var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData || body instanceof $window.URLSearchParams);
            var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json");
            var xhr = new $window.XMLHttpRequest(), aborted = false, isTimeout = false;
            var original = xhr, replacedAbort;
            var abort = xhr.abort;
            xhr.abort = function() {
              aborted = true;
              abort.call(this);
            };
            xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : void 0, typeof args.password === "string" ? args.password : void 0);
            if (assumeJSON && body != null && !hasHeader(args, "content-type")) {
              xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            }
            if (typeof args.deserialize !== "function" && !hasHeader(args, "accept")) {
              xhr.setRequestHeader("Accept", "application/json, text/*");
            }
            if (args.withCredentials) xhr.withCredentials = args.withCredentials;
            if (args.timeout) xhr.timeout = args.timeout;
            xhr.responseType = responseType;
            for (var key in args.headers) {
              if (hasOwn.call(args.headers, key)) {
                xhr.setRequestHeader(key, args.headers[key]);
              }
            }
            xhr.onreadystatechange = function(ev) {
              if (aborted) return;
              if (ev.target.readyState === 4) {
                try {
                  var success = ev.target.status >= 200 && ev.target.status < 300 || ev.target.status === 304 || /^file:\/\//i.test(url);
                  var response = ev.target.response, message;
                  if (responseType === "json") {
                    if (!ev.target.responseType && typeof args.extract !== "function") {
                      try {
                        response = JSON.parse(ev.target.responseText);
                      } catch (e) {
                        response = null;
                      }
                    }
                  } else if (!responseType || responseType === "text") {
                    if (response == null) response = ev.target.responseText;
                  }
                  if (typeof args.extract === "function") {
                    response = args.extract(ev.target, args);
                    success = true;
                  } else if (typeof args.deserialize === "function") {
                    response = args.deserialize(response);
                  }
                  if (success) {
                    if (typeof args.type === "function") {
                      if (Array.isArray(response)) {
                        for (var i = 0; i < response.length; i++) {
                          response[i] = new args.type(response[i]);
                        }
                      } else response = new args.type(response);
                    }
                    resolve(response);
                  } else {
                    var completeErrorResponse = function() {
                      try {
                        message = ev.target.responseText;
                      } catch (e) {
                        message = response;
                      }
                      var error = new Error(message);
                      error.code = ev.target.status;
                      error.response = response;
                      reject(error);
                    };
                    if (xhr.status === 0) {
                      setTimeout(function() {
                        if (isTimeout) return;
                        completeErrorResponse();
                      });
                    } else completeErrorResponse();
                  }
                } catch (e) {
                  reject(e);
                }
              }
            };
            xhr.ontimeout = function(ev) {
              isTimeout = true;
              var error = new Error("Request timed out");
              error.code = ev.target.status;
              reject(error);
            };
            if (typeof args.config === "function") {
              xhr = args.config(xhr, args, url) || xhr;
              if (xhr !== original) {
                replacedAbort = xhr.abort;
                xhr.abort = function() {
                  aborted = true;
                  replacedAbort.call(this);
                };
              }
            }
            if (body == null) xhr.send();
            else if (typeof args.serialize === "function") xhr.send(args.serialize(body));
            else if (body instanceof $window.FormData || body instanceof $window.URLSearchParams) xhr.send(body);
            else xhr.send(JSON.stringify(body));
          });
        }
        PromiseProxy.prototype = Promise.prototype;
        PromiseProxy.__proto__ = Promise;
        function hasHeader(args, name) {
          for (var key in args.headers) {
            if (hasOwn.call(args.headers, key) && key.toLowerCase() === name) return true;
          }
          return false;
        }
        return {
          request: function(url, args) {
            if (typeof url !== "string") {
              args = url;
              url = url.url;
            } else if (args == null) args = {};
            var promise = makeRequest(url, args);
            if (args.background === true) return promise;
            var count = 0;
            function complete() {
              if (--count === 0 && typeof oncompletion === "function") oncompletion();
            }
            return wrap(promise);
            function wrap(promise2) {
              var then = promise2.then;
              promise2.constructor = PromiseProxy;
              promise2.then = function() {
                count++;
                var next = then.apply(promise2, arguments);
                next.then(complete, function(e) {
                  complete();
                  if (count === 0) throw e;
                });
                return wrap(next);
              };
              return promise2;
            }
          }
        };
      };
    }
  });

  // node_modules/mithril/request.js
  var require_request2 = __commonJS({
    "node_modules/mithril/request.js"(exports, module) {
      "use strict";
      var mountRedraw = require_mount_redraw2();
      module.exports = require_request()(typeof window !== "undefined" ? window : null, mountRedraw.redraw);
    }
  });

  // node_modules/mithril/querystring/parse.js
  var require_parse = __commonJS({
    "node_modules/mithril/querystring/parse.js"(exports, module) {
      "use strict";
      function decodeURIComponentSave(str) {
        try {
          return decodeURIComponent(str);
        } catch (err) {
          return str;
        }
      }
      module.exports = function(string) {
        if (string === "" || string == null) return {};
        if (string.charAt(0) === "?") string = string.slice(1);
        var entries = string.split("&"), counters = {}, data = {};
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i].split("=");
          var key = decodeURIComponentSave(entry[0]);
          var value = entry.length === 2 ? decodeURIComponentSave(entry[1]) : "";
          if (value === "true") value = true;
          else if (value === "false") value = false;
          var levels = key.split(/\]\[?|\[/);
          var cursor = data;
          if (key.indexOf("[") > -1) levels.pop();
          for (var j = 0; j < levels.length; j++) {
            var level = levels[j], nextLevel = levels[j + 1];
            var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
            if (level === "") {
              var key = levels.slice(0, j).join();
              if (counters[key] == null) {
                counters[key] = Array.isArray(cursor) ? cursor.length : 0;
              }
              level = counters[key]++;
            } else if (level === "__proto__") break;
            if (j === levels.length - 1) cursor[level] = value;
            else {
              var desc = Object.getOwnPropertyDescriptor(cursor, level);
              if (desc != null) desc = desc.value;
              if (desc == null) cursor[level] = desc = isNumber ? [] : {};
              cursor = desc;
            }
          }
        }
        return data;
      };
    }
  });

  // node_modules/mithril/pathname/parse.js
  var require_parse2 = __commonJS({
    "node_modules/mithril/pathname/parse.js"(exports, module) {
      "use strict";
      var parseQueryString = require_parse();
      module.exports = function(url) {
        var queryIndex = url.indexOf("?");
        var hashIndex = url.indexOf("#");
        var queryEnd = hashIndex < 0 ? url.length : hashIndex;
        var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
        var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/");
        if (!path) path = "/";
        else {
          if (path[0] !== "/") path = "/" + path;
        }
        return {
          path,
          params: queryIndex < 0 ? {} : parseQueryString(url.slice(queryIndex + 1, queryEnd))
        };
      };
    }
  });

  // node_modules/mithril/pathname/compileTemplate.js
  var require_compileTemplate = __commonJS({
    "node_modules/mithril/pathname/compileTemplate.js"(exports, module) {
      "use strict";
      var parsePathname = require_parse2();
      module.exports = function(template) {
        var templateData = parsePathname(template);
        var templateKeys = Object.keys(templateData.params);
        var keys = [];
        var regexp = new RegExp("^" + templateData.path.replace(
          // I escape literal text so people can use things like `:file.:ext` or
          // `:lang-:locale` in routes. This is all merged into one pass so I
          // don't also accidentally escape `-` and make it harder to detect it to
          // ban it from template parameters.
          /:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
          function(m4, key, extra) {
            if (key == null) return "\\" + m4;
            keys.push({ k: key, r: extra === "..." });
            if (extra === "...") return "(.*)";
            if (extra === ".") return "([^/]+)\\.";
            return "([^/]+)" + (extra || "");
          }
        ) + "$");
        return function(data) {
          for (var i = 0; i < templateKeys.length; i++) {
            if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false;
          }
          if (!keys.length) return regexp.test(data.path);
          var values = regexp.exec(data.path);
          if (values == null) return false;
          for (var i = 0; i < keys.length; i++) {
            data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1]);
          }
          return true;
        };
      };
    }
  });

  // node_modules/mithril/util/censor.js
  var require_censor = __commonJS({
    "node_modules/mithril/util/censor.js"(exports, module) {
      "use strict";
      var hasOwn = require_hasOwn();
      var magic = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");
      module.exports = function(attrs, extras) {
        var result = {};
        if (extras != null) {
          for (var key in attrs) {
            if (hasOwn.call(attrs, key) && !magic.test(key) && extras.indexOf(key) < 0) {
              result[key] = attrs[key];
            }
          }
        } else {
          for (var key in attrs) {
            if (hasOwn.call(attrs, key) && !magic.test(key)) {
              result[key] = attrs[key];
            }
          }
        }
        return result;
      };
    }
  });

  // node_modules/mithril/api/router.js
  var require_router = __commonJS({
    "node_modules/mithril/api/router.js"(exports, module) {
      "use strict";
      var Vnode = require_vnode();
      var m4 = require_hyperscript();
      var buildPathname = require_build2();
      var parsePathname = require_parse2();
      var compileTemplate = require_compileTemplate();
      var censor = require_censor();
      var sentinel = {};
      function decodeURIComponentSave(component) {
        try {
          return decodeURIComponent(component);
        } catch (e) {
          return component;
        }
      }
      module.exports = function($window, mountRedraw) {
        var callAsync = $window == null ? null : typeof $window.setImmediate === "function" ? $window.setImmediate : $window.setTimeout;
        var p = Promise.resolve();
        var scheduled = false;
        var ready = false;
        var state = 0;
        var compiled, fallbackRoute;
        var currentResolver = sentinel, component, attrs, currentPath, lastUpdate;
        var RouterRoot = {
          onbeforeupdate: function() {
            state = state ? 2 : 1;
            return !(!state || sentinel === currentResolver);
          },
          onremove: function() {
            $window.removeEventListener("popstate", fireAsync, false);
            $window.removeEventListener("hashchange", resolveRoute, false);
          },
          view: function() {
            if (!state || sentinel === currentResolver) return;
            var vnode = [Vnode(component, attrs.key, attrs)];
            if (currentResolver) vnode = currentResolver.render(vnode[0]);
            return vnode;
          }
        };
        var SKIP = route.SKIP = {};
        function resolveRoute() {
          scheduled = false;
          var prefix = $window.location.hash;
          if (route.prefix[0] !== "#") {
            prefix = $window.location.search + prefix;
            if (route.prefix[0] !== "?") {
              prefix = $window.location.pathname + prefix;
              if (prefix[0] !== "/") prefix = "/" + prefix;
            }
          }
          var path = prefix.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponentSave).slice(route.prefix.length);
          var data = parsePathname(path);
          Object.assign(data.params, $window.history.state);
          function reject(e) {
            console.error(e);
            setPath(fallbackRoute, null, { replace: true });
          }
          loop(0);
          function loop(i) {
            for (; i < compiled.length; i++) {
              if (compiled[i].check(data)) {
                var payload = compiled[i].component;
                var matchedRoute = compiled[i].route;
                var localComp = payload;
                var update = lastUpdate = function(comp) {
                  if (update !== lastUpdate) return;
                  if (comp === SKIP) return loop(i + 1);
                  component = comp != null && (typeof comp.view === "function" || typeof comp === "function") ? comp : "div";
                  attrs = data.params, currentPath = path, lastUpdate = null;
                  currentResolver = payload.render ? payload : null;
                  if (state === 2) mountRedraw.redraw();
                  else {
                    state = 2;
                    mountRedraw.redraw.sync();
                  }
                };
                if (payload.view || typeof payload === "function") {
                  payload = {};
                  update(localComp);
                } else if (payload.onmatch) {
                  p.then(function() {
                    return payload.onmatch(data.params, path, matchedRoute);
                  }).then(update, path === fallbackRoute ? null : reject);
                } else update("div");
                return;
              }
            }
            if (path === fallbackRoute) {
              throw new Error("Could not resolve default route " + fallbackRoute + ".");
            }
            setPath(fallbackRoute, null, { replace: true });
          }
        }
        function fireAsync() {
          if (!scheduled) {
            scheduled = true;
            callAsync(resolveRoute);
          }
        }
        function setPath(path, data, options) {
          path = buildPathname(path, data);
          if (ready) {
            fireAsync();
            var state2 = options ? options.state : null;
            var title = options ? options.title : null;
            if (options && options.replace) $window.history.replaceState(state2, title, route.prefix + path);
            else $window.history.pushState(state2, title, route.prefix + path);
          } else {
            $window.location.href = route.prefix + path;
          }
        }
        function route(root3, defaultRoute, routes) {
          if (!root3) throw new TypeError("DOM element being rendered to does not exist.");
          compiled = Object.keys(routes).map(function(route2) {
            if (route2[0] !== "/") throw new SyntaxError("Routes must start with a '/'.");
            if (/:([^\/\.-]+)(\.{3})?:/.test(route2)) {
              throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");
            }
            return {
              route: route2,
              component: routes[route2],
              check: compileTemplate(route2)
            };
          });
          fallbackRoute = defaultRoute;
          if (defaultRoute != null) {
            var defaultData = parsePathname(defaultRoute);
            if (!compiled.some(function(i) {
              return i.check(defaultData);
            })) {
              throw new ReferenceError("Default route doesn't match any known routes.");
            }
          }
          if (typeof $window.history.pushState === "function") {
            $window.addEventListener("popstate", fireAsync, false);
          } else if (route.prefix[0] === "#") {
            $window.addEventListener("hashchange", resolveRoute, false);
          }
          ready = true;
          mountRedraw.mount(root3, RouterRoot);
          resolveRoute();
        }
        route.set = function(path, data, options) {
          if (lastUpdate != null) {
            options = options || {};
            options.replace = true;
          }
          lastUpdate = null;
          setPath(path, data, options);
        };
        route.get = function() {
          return currentPath;
        };
        route.prefix = "#!";
        route.Link = {
          view: function(vnode) {
            var child = m4(
              vnode.attrs.selector || "a",
              censor(vnode.attrs, ["options", "params", "selector", "onclick"]),
              vnode.children
            );
            var options, onclick, href;
            if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
              child.attrs.href = null;
              child.attrs["aria-disabled"] = "true";
            } else {
              options = vnode.attrs.options;
              onclick = vnode.attrs.onclick;
              href = buildPathname(child.attrs.href, vnode.attrs.params);
              child.attrs.href = route.prefix + href;
              child.attrs.onclick = function(e) {
                var result;
                if (typeof onclick === "function") {
                  result = onclick.call(e.currentTarget, e);
                } else if (onclick == null || typeof onclick !== "object") {
                } else if (typeof onclick.handleEvent === "function") {
                  onclick.handleEvent(e);
                }
                if (
                  // Skip if `onclick` prevented default
                  result !== false && !e.defaultPrevented && // Ignore everything but left clicks
                  (e.button === 0 || e.which === 0 || e.which === 1) && // Let the browser handle `target=_blank`, etc.
                  (!e.currentTarget.target || e.currentTarget.target === "_self") && // No modifier keys
                  !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
                ) {
                  e.preventDefault();
                  e.redraw = false;
                  route.set(href, null, options);
                }
              };
            }
            return child;
          }
        };
        route.param = function(key) {
          return attrs && key != null ? attrs[key] : attrs;
        };
        return route;
      };
    }
  });

  // node_modules/mithril/route.js
  var require_route = __commonJS({
    "node_modules/mithril/route.js"(exports, module) {
      "use strict";
      var mountRedraw = require_mount_redraw2();
      module.exports = require_router()(typeof window !== "undefined" ? window : null, mountRedraw);
    }
  });

  // node_modules/mithril/index.js
  var require_mithril = __commonJS({
    "node_modules/mithril/index.js"(exports, module) {
      "use strict";
      var hyperscript = require_hyperscript2();
      var request = require_request2();
      var mountRedraw = require_mount_redraw2();
      var domFor = require_domFor();
      var m4 = function m5() {
        return hyperscript.apply(this, arguments);
      };
      m4.m = hyperscript;
      m4.trust = hyperscript.trust;
      m4.fragment = hyperscript.fragment;
      m4.Fragment = "[";
      m4.mount = mountRedraw.mount;
      m4.route = require_route();
      m4.render = require_render2();
      m4.redraw = mountRedraw.redraw;
      m4.request = request.request;
      m4.parseQueryString = require_parse();
      m4.buildQueryString = require_build();
      m4.parsePathname = require_parse2();
      m4.buildPathname = require_build2();
      m4.vnode = require_vnode();
      m4.censor = require_censor();
      m4.domFor = domFor.domFor;
      module.exports = m4;
    }
  });

  // build/index.js
  var import_mithril3 = __toESM(require_mithril());

  // build/playerClass.js
  var import_mithril = __toESM(require_mithril());
  var Player = class {
    constructor(key, oil, toolSet, north, scared) {
      this.key = key;
      this.oil = oil;
      this.toolKit = toolSet;
      this.north = north;
      this.scared = scared;
    }
    //Game functions
    reset() {
      this.key = false;
      this.oil = false;
      this.toolKit = false;
      this.north = true;
      this.scared = false;
    }
    goThroughDoor(nextRoom) {
      import_mithril.default.route.set(`/${nextRoom}`);
    }
    turnAroundTo(room) {
      this.changeNorth();
      this.goThroughDoor(room);
    }
    checkDoor() {
      if (this.getToolKit()) {
        this.goThroughDoor("blackToolSet");
      } else {
        if (this.getKey() && this.getOil()) {
          this.goThroughDoor("darkRed");
        } else if (this.getKey()) {
          this.goThroughDoor("blackNoOil");
        } else {
          this.goThroughDoor("blackNoKey");
        }
      }
    }
    //Get
    getKey() {
      return this.key;
    }
    getOil() {
      return this.oil;
    }
    getToolKit() {
      return this.toolKit;
    }
    getNorth() {
      return this.north;
    }
    getScared() {
      return this.scared;
    }
    //Change
    changeKey() {
      this.key = !this.key;
    }
    changeOil() {
      this.oil = !this.oil;
    }
    changeToolKit() {
      this.toolKit = !this.toolKit;
    }
    changeNorth() {
      this.north = !this.north;
    }
    changeScared() {
      this.scared = !this.scared;
    }
    setToScared() {
      this.scared = true;
    }
  };

  // build/mapClass.js
  var import_mithril2 = __toESM(require_mithril());
  var root = document.body;
  var Map = class {
    constructor(user2) {
      this.user = user2;
    }
    start() {
      return (0, import_mithril2.default)("div", { class: "startBox" }, [
        (0, import_mithril2.default)("h1", { class: "title" }, "\u2190Attention!\u291B"),
        (0, import_mithril2.default)("p", { class: "description" }, "\u2666 Click on a door to go to the next room \u2666"),
        (0, import_mithril2.default)("p", { class: "description" }, "\u2666 Click on the button at the bottom to turn around in the current room \u2666"),
        (0, import_mithril2.default)("p", { class: "description" }, "\u2666 Be careful not to get lost \u2666"),
        (0, import_mithril2.default)("p", { class: "description" }, "\u2666 And don't forget: Keep the lights on. \u2666"),
        (0, import_mithril2.default)("button", {
          class: "startButton",
          onclick: () => this.startGame()
        }, "Start Game")
      ]);
    }
    startGame() {
      this.user.reset();
      this.user.goThroughDoor("white");
      root.removeAttribute("ID");
    }
    gameOver() {
      return (0, import_mithril2.default)("div", { class: "endBox" }, [
        (0, import_mithril2.default)("h1", { class: "title" }, "\u291CYou-died\u2192"),
        (0, import_mithril2.default)("p", { class: "description" }, "\u2666 I warned you \u2666"),
        (0, import_mithril2.default)("p", { class: "description" }, "\u2666 Happy? \u2666"),
        (0, import_mithril2.default)("button", { class: "restartButton", onclick: () => this.user.goThroughDoor("start") }, "No.")
      ]);
    }
    darkness() {
      this.user.setToScared();
      setTimeout(() => {
        if (import_mithril2.default.route.get() === "/darkness") {
          this.user.goThroughDoor("gameOver");
        }
      }, 1e4);
      return (0, import_mithril2.default)("div", { class: "darkness" }, (0, import_mithril2.default)("div", { class: "abyss" }, [
        (0, import_mithril2.default)("button", { class: "hiddenSwitch", onclick: () => {
          root.removeAttribute("ID");
          this.user.goThroughDoor("darkRed");
        } }),
        (0, import_mithril2.default)("div", { class: "warning" }, "It's coming...")
      ]));
    }
    goodEnd() {
      return (0, import_mithril2.default)("div", { class: "startBox" }, [
        (0, import_mithril2.default)("h1", { class: "title" }, "\u291CGame-Over!\u2192"),
        (0, import_mithril2.default)("p", { class: "description" }, "\u2666 You barricade the door \u2666"),
        (0, import_mithril2.default)("p", { class: "description" }, "\u2666 No one will be able to turn the lights off now \u2666"),
        (0, import_mithril2.default)("button", { class: "restartButton", onclick: () => {
          this.user.goThroughDoor("start");
        } }, "Good.")
      ]);
    }
    white() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "white" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("lightRed");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("lightBlue");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("white");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "white" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("darkPurple");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("white");
          } }, "Turn North"))
        ];
      }
    }
    black() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "black" }, (0, import_mithril2.default)("button", {
            class: "lockedDoor",
            onclick: () => {
              this.user.checkDoor();
            }
          }, "-"), ""),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("black");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "black" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("red");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("black");
          } }, "Turn North"))
        ];
      }
    }
    blackNoKey() {
      return [
        (0, import_mithril2.default)("div", { class: "black" }, (0, import_mithril2.default)("button", {
          class: "lockedDoor",
          onclick: () => {
            this.user.checkDoor();
          }
        }, "-")),
        (0, import_mithril2.default)("div", { class: "locked" }, "It's locked"),
        (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
          this.user.turnAroundTo("black");
        } }, "Turn South"))
      ];
    }
    blackNoOil() {
      return [
        (0, import_mithril2.default)("div", { class: "black" }, (0, import_mithril2.default)("button", {
          class: "lockedDoor",
          onclick: () => {
            this.user.checkDoor();
          }
        }, "-")),
        (0, import_mithril2.default)("div", { class: "locked" }, "Rusted. It won't open like this"),
        (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
          this.user.turnAroundTo("black");
        } }, "Turn South"))
      ];
    }
    blackToolSet() {
      return [
        (0, import_mithril2.default)("div", { class: "black" }, (0, import_mithril2.default)("button", { class: "lockedDoor" }, "-")),
        (0, import_mithril2.default)("div", { class: "toolBox" }, [
          (0, import_mithril2.default)("p", "Do you want to use the Tool Kit?"),
          (0, import_mithril2.default)("div", { class: "buttonBox" }, (0, import_mithril2.default)("button", { class: "choice", onclick: () => {
            this.user.goThroughDoor("goodEnd");
          } }, "Yes"), (0, import_mithril2.default)("button", { class: "choice", onclick: () => {
            this.user.changeToolKit();
            this.user.goThroughDoor("black");
          } }, "No"))
        ])
      ];
    }
    blue() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "blue" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("darkBlue");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("blue");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "blue" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("lightBlue");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("blue");
          } }, "Turn North"))
        ];
      }
    }
    lightBlue() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "lightBlue" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("purple");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("blue");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("lightBlue");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "lightBlue" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("white");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("lightBlue");
          } }, "Turn North"))
        ];
      }
    }
    darkBlue() {
      if (this.user.getNorth()) {
        if (this.user.getKey()) {
          return (0, import_mithril2.default)("div", { class: "darkBlue" }, (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("darkBlue");
          } }, "Turn South"));
        } else {
          return [
            (0, import_mithril2.default)("div", { class: "darkBlue" }, (0, import_mithril2.default)("button", {
              class: "item",
              onclick: () => {
                this.user.changeKey();
                this.user.goThroughDoor("darkBlueObtained");
              }
            }, "\u{1F511}")),
            (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
              this.user.turnAroundTo("darkBlue");
            } }, "Turn South"))
          ];
        }
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "darkBlue" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("blue");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("purple");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("darkBlue");
          } }, "Turn North"))
        ];
      }
    }
    darkBlueObtained() {
      return [
        (0, import_mithril2.default)("div", { class: "darkBlue" }, (0, import_mithril2.default)("div", { class: "locked" }, "You found a key!")),
        (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
          this.user.turnAroundTo("darkBlue");
        } }, "Turn South"))
      ];
    }
    red() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "red" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("black");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("yellow");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("red");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "red" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("lightRed");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("red");
          } }, "Turn North"))
        ];
      }
    }
    lightRed() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "lightRed" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("red");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("lightPurple");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("lightRed");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "lightRed" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("white");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("lightRed");
          } }, "Turn North"))
        ];
      }
    }
    darkRed() {
      let text;
      if (this.user.getScared()) {
        text = "Find the Toolkit.";
      } else {
        text = "Are you sure about this?";
      }
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "darkRed" }, (0, import_mithril2.default)("button", { class: "switch", onclick: () => {
            root.setAttribute("ID", "lightsOff");
            this.user.goThroughDoor("darkness");
          } }, ""), text),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("darkRed");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "darkRed" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("black");
            }
          })),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("darkRed");
          } }, "Turn North"))
        ];
      }
    }
    purple() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "purple" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("darkPurple");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("darkBlue");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("purple");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "purple" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("lightBlue");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("purple");
          } }, "Turn North"))
        ];
      }
    }
    lightPurple() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "lightPurple" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("yellow");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("darkPurple");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("lightPurple");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "lightPurple" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("lightRed");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("lightPurple");
          } }, "Turn North"))
        ];
      }
    }
    darkPurple() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "darkPurple" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("white");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("darkPurple");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "darkPurple" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("purple");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("lightPurple");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("yellow");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("darkPurple");
          } }, "Turn North"))
        ];
      }
    }
    yellow() {
      if (this.user.getNorth()) {
        return [
          (0, import_mithril2.default)("div", { class: "yellow" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("orange");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("darkPurple");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("yellow");
          } }, "Turn South"))
        ];
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "yellow" }, [
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("lightPurple");
              }
            }, "-"),
            (0, import_mithril2.default)("button", {
              class: "door",
              onclick: () => {
                this.user.goThroughDoor("red");
              }
            }, "-")
          ]),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("yellow");
          } }, "Turn North"))
        ];
      }
    }
    orange() {
      if (this.user.getNorth()) {
        if (this.user.getOil()) {
          return [
            (0, import_mithril2.default)("div", { class: "orange" }, (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
              this.user.turnAroundTo("orange");
            } }, "Turn South")),
            (0, import_mithril2.default)("div", { class: "hide" }, (0, import_mithril2.default)("button", {
              class: "door",
              id: "hiddenPassage",
              onclick: () => {
                this.user.goThroughDoor("green");
              }
            }))
          ];
        } else {
          return [
            (0, import_mithril2.default)("div", { class: "orange" }, [
              (0, import_mithril2.default)("button", { class: "tool", onclick: () => {
                this.user.changeOil();
                this.user.goThroughDoor("orangeObtained");
              } }, "\u{1F6E2}\uFE0F")
            ]),
            (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
              this.user.turnAroundTo("orange");
            } }, "Turn South"))
          ];
        }
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "orange" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("yellow");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("orange");
          } }, "Turn North"))
        ];
      }
    }
    orangeObtained() {
      return [
        (0, import_mithril2.default)("div", { class: "orange" }, [
          (0, import_mithril2.default)("div", { class: "locked" }, "You found some Oil!")
        ]),
        (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
          this.user.turnAroundTo("orange");
        } }, "Turn South"))
      ];
    }
    green() {
      if (this.user.getNorth()) {
        if (this.user.getToolKit()) {
          return (0, import_mithril2.default)("div", { class: "green" }, (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("green");
          } }, "Turn South"));
        } else {
          return [
            (0, import_mithril2.default)("div", { class: "green" }, [
              (0, import_mithril2.default)("button", { class: "tool", onclick: () => {
                this.user.changeToolKit();
                this.user.goThroughDoor("greenObtained");
              } }, "\u{1F6E0}")
            ]),
            (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
              this.user.turnAroundTo("green");
            } }, "Turn South"))
          ];
        }
      } else {
        return [
          (0, import_mithril2.default)("div", { class: "green" }, (0, import_mithril2.default)("button", {
            class: "door",
            onclick: () => {
              this.user.goThroughDoor("orange");
            }
          }, "-")),
          (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
            this.user.turnAroundTo("green");
          } }, "Turn North"))
        ];
      }
    }
    greenObtained() {
      return [
        (0, import_mithril2.default)("div", { class: "green" }, [
          (0, import_mithril2.default)("div", { class: "locked" }, "You found a Toolkit!")
        ]),
        (0, import_mithril2.default)("div", (0, import_mithril2.default)("button", { class: "turn", onclick: () => {
          this.user.turnAroundTo("green");
        } }, "Turn South"))
      ];
    }
  };

  // build/index.js
  var root2 = document.body;
  var user = new Player(false, false, false, true, false);
  var map = new Map(user);
  var start = { view: () => {
    return map.start();
  } };
  var gameOver = { view: () => {
    return map.gameOver();
  } };
  var darkness = { view: () => {
    return map.darkness();
  } };
  var goodEnd = { view: () => {
    return map.goodEnd();
  } };
  var white = { view: () => {
    return map.white();
  } };
  var black = { view: () => {
    return map.black();
  } };
  var blackNoKey = { view: () => {
    return map.blackNoKey();
  } };
  var blackNoOil = { view: () => {
    return map.blackNoOil();
  } };
  var blackToolSet = { view: () => {
    return map.blackToolSet();
  } };
  var blue = { view: () => {
    return map.blue();
  } };
  var lightBlue = { view: () => {
    return map.lightBlue();
  } };
  var darkBlue = { view: () => {
    return map.darkBlue();
  } };
  var darkBlueObtained = { view: () => {
    return map.darkBlueObtained();
  } };
  var red = { view: () => {
    return map.red();
  } };
  var lightRed = { view: () => {
    return map.lightRed();
  } };
  var darkRed = { view: () => {
    return map.darkRed();
  } };
  var purple = { view: () => {
    return map.purple();
  } };
  var lightPurple = { view: () => {
    return map.lightPurple();
  } };
  var darkPurple = { view: () => {
    return map.darkPurple();
  } };
  var yellow = { view: () => {
    return map.yellow();
  } };
  var orange = { view: () => {
    return map.orange();
  } };
  var orangeObtained = { view: () => {
    return map.orangeObtained();
  } };
  var green = { view: () => {
    return map.green();
  } };
  var greenObtained = { view: () => {
    return map.greenObtained();
  } };
  import_mithril3.default.route(root2, "/start", {
    "/start": start,
    "/gameOver": gameOver,
    "/goodEnd": goodEnd,
    "/darkness": darkness,
    "/white": white,
    "/black": black,
    "/blackNoKey": blackNoKey,
    "/blackNoOil": blackNoOil,
    "/blackToolSet": blackToolSet,
    "/blue": blue,
    "/lightBlue": lightBlue,
    "/darkBlue": darkBlue,
    "/darkBlueObtained": darkBlueObtained,
    "/red": red,
    "/lightRed": lightRed,
    "/darkRed": darkRed,
    "/purple": purple,
    "/lightPurple": lightPurple,
    "/darkPurple": darkPurple,
    "/yellow": yellow,
    "/orange": orange,
    "/orangeObtained": orangeObtained,
    "/green": green,
    "/greenObtained": greenObtained
  });
})();
