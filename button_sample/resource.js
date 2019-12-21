var res = {
    hello_world_png : "res/HelloWorld.png",                // 使用するファイル名を追加

    sample_png : "res/sample.png",
    button_png : "res/button.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
