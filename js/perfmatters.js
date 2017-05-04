// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  const t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  const stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
  console.log('DCL: ' + dcl + 'ms, onload: ' + complete + 'ms');
}

window.addEventListener("load", function(event) {
  logCRP();
});

// const loadDeferredStyles = function () {
//   const addStylesNode = document.getElementById("deferred-styles");
//   const replacement = document.createElement("div");
//   replacement.innerHTML = addStylesNode.textContent;
//   document.body.appendChild(replacement);
//   addStylesNode.parentElement.removeChild(addStylesNode);
// };
//
// const raf = requestAnimationFrame || mozRequestAnimationFrame ||
//     webkitRequestAnimationFrame || msRequestAnimationFrame;
// if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
// else window.addEventListener('load', loadDeferredStyles);