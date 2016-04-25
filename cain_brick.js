var Animation = function(canvasId){
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.t = 0;
    this.timeInterval = 0;
    this.startTime = 0;
    this.lastTime = 0;
    this.frame = 0;
    this.animating = false;

    // provided by Paul Irish
    window.requestAnimFrame = (function(callback){
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
    })();
};

Animation.prototype.getContext = function(){
    return this.context;
};

Animation.prototype.getCanvas = function(){
    return this.canvas;
};

Animation.prototype.clear = function(){
    this.context.clearRect(0, 0, this.canvas,width, this.canvas.height);
};

Animation.prototype.setDrawStage = function(func){
    this.drawStage = func;
};

Animation.prototype.isAnimating = function(){
    return this.animating;
};

Animation.prototype.getFrame = function(){
    return this.frame;
};

Animation.prototype.start = function(){
    this.animating = true;
    var data = new Data();
    this.startTime = data.getTime();
    this.lastTime = this.startTime;

    if(this.drawStage !== undefined) {
        this.drawStage();