// ボタンクラス
var CustomButton = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.createEvent();
        cc.eventManager.addListener(this.ButtonListener, this);
        this.clickFunc = null;
        this.enable = true;
    },
    createEvent: function () {
      var ownButton = this;

        // ボタンイベント
        this.ButtonListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
              if(!ownButton.enable) {
                return false;
              }
              this.onButton = false;
              var target = event.getCurrentTarget();
              var location = target.convertToNodeSpace(touch.getLocation());
              var spriteSize = target.getContentSize();
              var spriteRect = cc.rect(0, 0, spriteSize.width, spriteSize.height);
              if (cc.rectContainsPoint(spriteRect, location)) {
                  this.onButton = true;
              }
              return true;
            },
            onTouchMoved: function (touch, event) {

            },
            onTouchEnded: function (touch, event) {
                if (!this.onButton) {
                    return false;
                }
                this.onButton = false;
                var target = event.getCurrentTarget();
                var location = target.convertToNodeSpace(touch.getLocation());
                var spriteSize = target.getContentSize();
                var spriteRect = cc.rect(0, 0, spriteSize.width, spriteSize.height);

                　// ボタンが押された時
                if (cc.rectContainsPoint(spriteRect, location)) {
                  // 非表示の場合は無効
                  if(ownButton.visible && ownButton.clickFunc != null) {
                    ownButton.clickFunc();
                  }
                }
            },
            onTouchCancelled: function (touch, event) {
            }
        });
    }
});
