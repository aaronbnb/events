var items = Array.prototype.slice.call(
    document.body.querySelectorAll('*')
  ).map(function(element) {
    var listeners = getEventListeners(element);
    return {
      element: element,
      listeners: Object.keys(listeners).map(function(k) {
        return { event: k, listeners: listeners[k] };
      })
    };
  })