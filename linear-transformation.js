//colours
const C_BACKG = '#222';

// engine vars
var t = 0; // gametime
var f = 1000.0/120; //120 = fps

var c = document.getElementById('c'),
cx = c.getContext('2d');

//#region clearing
function clearAll(){
    //background
    cx.fillStyle = C_BACKG;
    cx.fillRect(0, 0, c.width, c.height);
}
//#endregion

(function() {        
  	function resizeCanvas() {
        c.style.width='100%';
        c.style.height='100%';
        c.width  = c.offsetWidth;
        c.height = c.offsetHeight;
        clearAll();
    }
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
    
    init();
    var timer=setInterval(function(){
        clear();
        update();
        draw();
        t+=f;
    },f);
    
    function init(){
    }
    
    function update(){
    }
    
    function draw(){
        cx.fillStyle = "#fff";
        cx.fillRect(c.width-110,c.height-110,100,100);
    }
    
    function clear(){
    }
})();