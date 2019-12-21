var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var size = cc.director.getWinSize();
        var sprite = cc.Sprite.create(res.hello_world_png);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(0.8);
        this.addChild(sprite, 0);

        var button = new CustomButton();
        button.initWithFile(res.button_png);
        button.setPosition(size.width / 2, size.height / 2);
        button.setScale(1.5);
        this.addChild(button, 0);
        // ボタン動作の設定
        button.clickFunc = function() {
          alert("ボタンをクリック");
        }
    }
});
