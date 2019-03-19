//colours
const C_BACKG = '#222';
const C_FORE = '#ccc';
const C_FORE_DARKER = '#aaa';
const C_FORE_DARKEST = '#444';

// engine vars
var t = 0; // gametime
var f = 1000.0/120; //120 = fps

var c = document.getElementById('c'),
cx = c.getContext('2d');

// origin screen coordinates
var ox = 0;
var oy = 0;

// length of one 'unit' in pixels
var unit = 100;

//#region drawing
function drawOriginalGrid(){
    cx.strokeStyle = C_FORE_DARKEST;
    cx.lineWidth = 0.01*unit;

    // x lines
    for(var i = 0; i < c.width-ox; i+=unit/2){
        // right of x axis
        cx.beginPath();
        cx.moveTo(ox+i,0);
        cx.lineTo(ox+i,c.height);
        cx.stroke();
    }
    for(var i = 0; i < ox; i+=unit/2){
        // left of x axis
        cx.beginPath();
        cx.moveTo(ox-i,0);
        cx.lineTo(ox-i,c.height);
        cx.stroke();
    }

    // y lines
    for(var i = 0; i < c.height-oy; i+=unit/2){
        // below y axis
        cx.beginPath();
        cx.moveTo(0,oy+i);
        cx.lineTo(c.width,oy+i);
        cx.stroke();
    }
    for(var i = 0; i < oy; i+=unit/2){
        // above y axis
        cx.beginPath();
        cx.moveTo(0,oy-i);
        cx.lineTo(c.width,oy-i);
        cx.stroke();
    }

    // // x axis
    // cx.beginPath();
    // cx.moveTo(0,oy);
    // cx.lineTo(c.width, oy);
    // cx.stroke();

    // // y axis
    // cx.beginPath();
    // cx.moveTo(ox,0);
    // cx.lineTo(ox, c.height);
    // cx.stroke();
}
function drawGrid(){
    cx.strokeStyle = C_FORE_DARKER;
    cx.lineWidth = 0.02*unit;

    // x lines
    for(var i = 0; i < c.width-ox; i+=unit){
        // right of x axis
        cx.beginPath();
        cx.moveTo(ox+i,0);
        cx.lineTo(ox+i,c.height);
        cx.stroke();
    }
    for(var i = 0; i < ox; i+=unit){
        // left of x axis
        cx.beginPath();
        cx.moveTo(ox-i,0);
        cx.lineTo(ox-i,c.height);
        cx.stroke();
    }

    // y lines
    for(var i = 0; i < c.height-oy; i+=unit){
        // below y axis
        cx.beginPath();
        cx.moveTo(0,oy+i);
        cx.lineTo(c.width,oy+i);
        cx.stroke();
    }
    for(var i = 0; i < oy; i+=unit){
        // above y axis
        cx.beginPath();
        cx.moveTo(0,oy-i);
        cx.lineTo(c.width,oy-i);
        cx.stroke();
    }

    cx.strokeStyle = C_FORE;
    cx.lineWidth = 0.04*unit;

    // x axis
    cx.beginPath();
    cx.moveTo(0,oy);
    cx.lineTo(c.width, oy);
    cx.stroke();

    // y axis
    cx.beginPath();
    cx.moveTo(ox,0);
    cx.lineTo(ox, c.height);
    cx.stroke();
}
//#endregion

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
        ox = c.width/2;
        oy = c.height/2;
    }
    
    function update(){
    }
    
    function draw(){
        drawOriginalGrid();
        drawGrid();
    }
    
    function clear(){
        clearAll();
    }
})();