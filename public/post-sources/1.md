# CSSのmargin, paddingプロパティにおけるleft, right, top, bottomの順番の覚え方
2018/1/14

## はじめに
CSSでmarginやpaddingを書いていると、「あれ、上下と左右、どっちが先だっけ？」などと
迷うことは少なくありません。
とにかく、 **上から時計回り** であることを意識します。

## margin: 上 右 下 左;

```
.test {
  margin: 1px 2px 3px 4px; /* 上 右 下 左 */
}
```

上・右・下・左と、上から時計回りに適用されていることが分かります。

![https://i.imgur.com/b3YhIS8.png](https://i.imgur.com/b3YhIS8.png)

## margin: 上 左右 下;

```
.test {
  margin: 1px 2px 3px; /* 上 左右 下 */
}
```

「上・左右・下だから時計回りじゃないじゃん！」と思うかもしれませんが、
下の図を見て頂いてなんとなく雰囲気が伝わるとうれしいです。

![https://i.imgur.com/WBdpMrm.png](https://i.imgur.com/WBdpMrm.png)

## margin: 上下 左右;

こちらも「上下・左右だから時計回りじゃないじゃん！」と思うかもしれませんが、
下の図を見て頂いてなんとなく雰囲気が伝わるとうれしいです。

```
.test {
  margin: 1px 2px; /* 上下 左右 */
}
```

![https://i.imgur.com/j69dapX.png](https://i.imgur.com/j69dapX.png)

## おわりに

若干無理がある説明もあったかも分かりませんが、基本的にはpadding/marginにおける上下左右の順番は「 **上から時計回り** 」と意識して頂ければ覚えやすい、ということが伝わればと思います。
