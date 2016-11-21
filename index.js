
  setInterval(function() {
        var date = new Date();
        var element = document.getElementById('clock');
        element.innerHTML = date.toLocaleTimeString();
      }, 1000);
