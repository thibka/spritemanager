(function(window, document, undefined) {
    function SM(params) {
        this.container = params.container;
        this.fps = params.fps;
        this.frameHeight = params.frameHeight;
        this.offset = 0;
        this.height = params.height;
        this.isPlaying = false;
        this.loop = params.loop || false;
        this.loopDelay = params.loopDelay || 0;
        this.complete = params.complete || false;
    }
    
    SM.prototype.play = function() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        this.offset = 0;
        clearInterval(this.playInterval);
        this.playInterval = setInterval(function () {
            this.offset -= this.frameHeight;
            this.container.style.backgroundPositionY = this.offset + "px";
            
            if (this.offset <= -this.height + this.frameHeight) {
                clearInterval(this.playInterval);
                this.isPlaying = false;
                if (this.complete) this.complete();
                if (this.loop) {
                    setTimeout(this.play.bind(this), this.loopDelay);
                }
            }
        }.bind(this), 1000 / this.fps);
    }

    window.SpriteManager = SM;
})(window, document);