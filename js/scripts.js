function loadScripts() {
    var scripts = [
      "counter.js",
      "load.js",
      "update.js"
    ];
  
    scripts.forEach(function(script) {
      var scriptElement = document.createElement("script");
      scriptElement.src = "js/scripts/" + script;
      document.body.appendChild(scriptElement);
    });
  }
  
  window.onload = loadScripts;