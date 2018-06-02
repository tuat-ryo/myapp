# ReactでコードのSyntax Highlightを含めたMarkdownレンダリングをする
2018/1/15

## 参考記事
[remark+ReactでMarkdownをレンダリングする – 踊る犬.netブログ (旧)](https://blog.odoruinu.net/2016/12/09/rendering-markdown-with-remark-react/)
[React＋marked＋highlight.jsでマークダウンエディタをつくる - Qiita](https://qiita.com/bmf_san/items/fe2b4b4591dd17ee7103)

## この記事のねらい

爆速で以下を行います。

* ReactでMarkdownレンダリングを行う
* 多くの言語のコードを手軽にシンタックスハイライトさせる

## 0. 空のReactプロジェクトを用意する

```sh
$ npm install -g yarn create-react-app
$ create-react-app markdown-test && cd markdown-test
```

## 1. 必要なライブラリのインストール

```sh
$ yarn add -D remark remark-react remark-react-lowlight highlight.js
```

## 2. Markdownに変換してくれる奴を作る

`src/markdown-processor.js` として保存して下さい。
```js
import remark from 'remark'
import reactRenderer from 'remark-react'
import RemarkLowlight from 'remark-react-lowlight'

// highlight.js/lib/languages/ 以下から読み込み可能な全ての言語を列挙しています (2018/01/15 時点)
const langs = ['1c', 'accesslog', 'actionscript', 'ada', 'apache', 'applescript', 'cpp', 'arduino', 'armasm', 'xml', 'asciidoc', 'aspectj', 'autohotkey', 'autoit', 'avrasm', 'axapta', 'bash', 'basic', 'bnf', 'brainfuck', 'cal', 'capnproto', 'ceylon', 'clojure', 'clojure-repl', 'cmake', 'coffeescript', 'coq', 'cos', 'crmsh', 'crystal', 'cs', 'csp', 'css', 'd', 'markdown', 'dart', 'delphi', 'diff', 'django', 'dns', 'dockerfile', 'dos', 'dsconfig', 'dts', 'dust', 'elixir', 'elm', 'ruby', 'erb', 'erlang-repl', 'erlang', 'excel', 'fix', 'fortran', 'fsharp', 'gams', 'gauss', 'gcode', 'gherkin', 'glsl', 'go', 'golo', 'gradle', 'groovy', 'haml', 'handlebars', 'haskell', 'haxe', 'hsp', 'htmlbars', 'http', 'inform7', 'ini', 'irpf90', 'java', 'javascript', 'json', 'julia', 'kotlin', 'lasso', 'ldif', 'less', 'lisp', 'livecodeserver', 'livescript', 'lsl', 'lua', 'makefile', 'mathematica', 'matlab', 'maxima', 'mel', 'mercury', 'mipsasm', 'mizar', 'perl', 'mojolicious', 'monkey', 'moonscript', 'nginx', 'nimrod', 'nix', 'nsis', 'objectivec', 'ocaml', 'openscad', 'oxygene', 'parser3', 'pf', 'php', 'pony', 'powershell', 'processing', 'profile', 'prolog', 'protobuf', 'puppet', 'purebasic', 'python', 'q', 'qml', 'r', 'rib', 'roboconf', 'rsl', 'ruleslanguage', 'rust', 'scala', 'scheme', 'scilab', 'scss', 'smali', 'smalltalk', 'sml', 'sqf', 'sql', 'stan', 'stata', 'step21', 'stylus', 'swift', 'taggerscript', 'yaml', 'tap', 'tcl', 'tex', 'thrift', 'tp', 'twig', 'typescript', 'vala', 'vbnet', 'vbscript', 'vbscript-html', 'verilog', 'vhdl', 'vim', 'x86asm', 'xl', 'xquery', 'zephir']

// ```javascript などとは書きたくないので、エイリアスを定義できるようにしました
const langAliases = {
  'cpp': ['c++'],
  'xml': ['html'],
  'bash': ['sh', 'shell', 'zsh'],
  'coffeescript': ['coffee'],
  'javascript': ['js'],
}

const lang2module = () => {
  let ret = {}
  for (let lang of langs) {
    ret[lang] = require('highlight.js/lib/languages/' + lang)
  }
  for (let lang in langAliases) {
    for (let langAka of langAliases[lang]) {
      ret[langAka] = require('highlight.js/lib/languages/' + lang)
    }
  }
  return ret
}

const processor = remark().use(reactRenderer, {
  sanitize: false,
  remarkReactComponents: {
    code: RemarkLowlight(lang2module())
  }
})


export default processor
```

## 3. Markdownのテキストを変換してみる
`src/App.js`
```js
import React, { Component } from 'react'
import processor from './markdown-processor' // 上記で作った奴です

class App extends Component {
  render() {
    const body = "# Test\n This is a test.\n```js\nconsole.log('test')\n```"

    return (
      <div>
        { processor.processSync(body).contents }
      </div>
    )
  }
}
export default App
```

`public/index.html`

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <!-- highlight.jsによるSyntax Highlight のためにCSSをCDN経由で読み込む -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/default.min.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## 4. 動作確認

動作を確認しました。

![https://i.imgur.com/yPm9HPj.png](https://i.imgur.com/yPm9HPj.png)

Happy End ♡
