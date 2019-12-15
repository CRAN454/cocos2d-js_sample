// スプライト継承
var CustomSprite = cc.Sprite.extend({
  // コンストラクタに引数を設定
  // 引数をなしにしたい場合は括弧内の引数のurlを削除
  ctor: function (url) {
    this._super();
    // 画像を設定するメソッド
    this.initWithFile(url);
  },
  changeSprite: function(url) {
    this.initWithFile(url);
  }
});
