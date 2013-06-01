var Tile = function(width, height, modifier) {
    this.tile = $(
        '<div class="flip" data-flipped="false">\
                        <div class="face front">\
                            <img src="/img/hexa.png" width="'
            + width + '" height="' + height + '">\
                        </div>\
                        <div class="face back">\
                            <img src="/img/hexa_flipped.png" width="'
            + width + '" height="' + height + '" />\
                        </div>\
                    </div>'
    );
    this.modifier = modifier;
    this.flipped = false;
    this.hideTimeout = null;
    return this;
};

Tile.prototype.setFlipped = function(flipped) {
    this.flipped = flipped;
    return this;
};

Tile.prototype.setHideTimeout = function (hideDelay) {
    var self = this;
    this.hideTimeout = setTimeout(function() {
        self.setFlipped(true).flip();
    }, hideDelay);
    return this;
};

Tile.prototype.clearHideTimeout = function() {
    clearTimeout(this.hideTimeout);
    this.hideTimeout = null;
    return this;
};

Tile.prototype.flip = function() {
    this.flipped = !this.flipped;
    this.tile.css('transform', 'rotate3d(1, 1, 0, ' + (this.flipped ? '180deg' : '0deg') + ')')
        .data('flipped', !this.flipped);
    return this;
};