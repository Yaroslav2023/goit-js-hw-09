!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector(".form"),u=document.querySelector(".form input[name=delay]"),a=document.querySelector(".form input[name=step]"),c=document.querySelector(".form input[name=amount]");function l(e){var n=e.position,o=e.delay;return new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:n,delay:o}):t({position:n,delay:o})}),o)}))}function d(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o," ms"))}function f(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o," ms"))}r.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.value),o=Number(a.value),t=Number(c.value),i=1;i<=t;i++)l({position:i,delay:n}).then(f).catch(d),n+=o;r.reset()}))}();
//# sourceMappingURL=03-promises.bf80a7d6.js.map
