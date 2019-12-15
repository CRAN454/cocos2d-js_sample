// スプライト継承
var CustomSprite = cc.Sprite.extend({
    ctor: function (url) {
        this._super();
        this.initWithFile(url);
    },
    changeSprite: function(url) {
      this.initWithFile(url);
    }
});
