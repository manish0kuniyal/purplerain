
    function Raindrop() {
        var drop = document.createElement("div");
        drop.className = "raindrop";
        drop.style.left = Math.random() * window.innerWidth + "px";
        drop.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(drop);
      }
    
      setInterval(function() {
        Raindrop();
      }, 50);