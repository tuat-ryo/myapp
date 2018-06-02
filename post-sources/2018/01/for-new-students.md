# macOSで研究をする為の環境構築: Homebrew, Atom, anyenv, latexmk
2018/01/30

## はじめに
そろそろ本学の学部3年生も、それぞれ研究室に配属される頃ですね。

でも、いきなりMacBookやiMacを渡されても、何をすればいいかきっと分からないはず。
そのまま何となくmacOSを避けながら時が経ち、気がついたらもう9月…なんてことになったら大変です。

この記事が、そんな学部3年生の方にとって、研究をするためのmacOS環境構築ガイドとなれば幸いです。

## インストールするもの
### Homebrew
たった一発コマンドを叩くだけで、Python, Ruby, エディタ, ブラウザまで入ってしまう、パッケージ管理ツールです。

### Atom
メジャーな言語からマイナーな言語まで、様々な言語で快適にプログラミングをする環境が整った高機能エディタです。

### anyenv
Java, Python, Ruby, Node.jsなど、バージョンによって動作が異なるプログラミング言語について、
1つのパソコンで複数のバージョンを扱うことができるバージョン管理ツールです。
先輩から引き継いだプログラムが動作するバージョンが数年前のものだけど、自分は最新のバージョンを使いたい...という状況で、
強力に私達をサポートしてくれます。

### latexmk
コマンド一発で、ファイルが変更される度に自動でビルドしてくれる、LaTeXコンパイラです。
LaTeXの場合、何回もコンパイルする必要があるケースがあると思いますが、latexmkの場合はそこら辺もやってくれます。
便利ですね。

## 今回は解説しないけれどインストールした方がいいもの
* [Google日本語入力](https://www.google.co.jp/ime/)
標準でインストールされている「ことえり」よりも変換精度が高い。
[無料で利用できる「Google日本語入力™」をMacで使用する方法 ](http://inforati.jp/apple/mac-tips-techniques/system-hints/how-to-use-google-japanese-input-method-with-mac-os.html)


## Homebrewのインストール
1. 「ターミナル」を開きます。
Macでターミナルを開く方法については、[こちら](https://syncer.jp/mac-terminal)を参照して下さい。
2. 以下のコマンドをコピー(Command + Cキー)します。
3. コピーしたコマンドを貼り付けて(Command + Vキー)、Enterキーを押して実行して下さい。
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Atomのインストール
先程と同様に、以下のコマンドを1行ずつコピーして、ターミナルで実行して下さい。

```bash
brew install caskroom/cask/brew-cask
brew cask install atom
```

Atomには、たくさんの非常に便利な拡張機能が存在します。
Atomでは、それらの拡張機能を、`apm`という管理ツールでインストール・アンインストールすることが出来ます。
試しに、Pythonの強力な自動補完機能を提供してくれる`autocomplete-python`をインストールしてみましょう。
先程と同様に、以下のコマンドをコピーして、ターミナルで実行して下さい。

```bash
apm install atom-beauty
```

ついでに、LaTeXを便利に書くための拡張機能もすべてインストールしてしまいましょう。
先程と同様に、以下のコマンドをコピーして、ターミナルで実行して下さい。

```bash
apm install tool-bar language-latex latex  latexer latextools pdf-view
```

他にもまあ色々あるので、
[「atom 拡張機能 おすすめ」](https://www.google.co.jp/search?q=atom+%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD+%E3%81%8A%E3%81%99%E3%81%99%E3%82%81)で検索して、良さそうなものを探してみて下さい。

## anyenv
先程と同様に、以下のコマンドを1行ずつコピーして、ターミナルで実行して下さい。
```bash
git clone https://github.com/riywo/anyenv ~/.anyenv
atom ~/.bashrc
```

すると、先程インストールしたAtomが起動します。
今開かれているファイルは、ターミナルが起動する度に実行するべき処理の一覧を書くためのファイルです。
以下のテキストを、ファイルの最後にコピー＆ペーストし、保存して下さい。

```
if [ -d $HOME/.anyenv ] ; then
    export PATH="$HOME/.anyenv/bin:$PATH"
    eval "$(anyenv init -)"
fi
```

次に、たった今保存した設定を読み込む為に、以下のコマンドを実行して下さい。

``` bash
exec bash
```

anyenvは、厳密にはPythonのバージョン管理ツール(pyenv)やRubyのバージョン管理ツール(rbenv)を管理するものです。
ですので、anyenvを使って、それぞれ自分が必要な言語ごとのバージョン管理ツールをインストールする必要があります。

ここでは、試しにpyenvをインストールし、Python 2.7.13とPython 3.6.0をインストールしましょう。
先程と同様に、以下のコマンドを1行ずつ実行して下さい。

```bash
anyenv install pyenv
pyenv install 2.7.13
pyenv install 3.6.0
```

次に、インストールされたPythonのバージョンをどのように切り替えるかを説明します。

以下のように入力した場合、あらゆる場所において、`python`と叩いたらPython 3.6.0で実行されるようになります。

```bash
pyenv global 3.6.0
```

特定のフォルダでのみ異なるバージョンを利用したい場合は、その対象となるフォルダに移動した上で、次のように入力します。
```bash
# Python 2系で動作させるべきプログラムが入ったフォルダを作ってみましょう。
mkdir python2 && cd python2
# pyenv local <バージョン> と入力することで、そのフォルダでのみ指定したバージョンでPythonが動作します。
pyenv local 2.7.13
```

### latexmk

* MacTeX
macOSでLaTeXを扱うために必要な
* ghostscriptとimagemagick
PDF化に必要
* latexmk
さっき言った

をインストールします。
以下のコマンドを一行ずつ実行して下さい。

```bash
brew cask install mactex
brew install ghostscript
brew install imagemagick
sudo tlmgr update --self
sudo tlmgr install uplatex latexmk collection-langjapanese
apm install pdf-view
```

次に、latexmkの設定を書きます。
```bash
atom ~/.latexmkrc
```

Atomが起動するはずなので、以下をペーストして保存して下さい。

```bash
#!/usr/bin/env perl

$latex                       = 'uplatex -synctex=1 -halt-on-error %O %S';
$bibtex                      = 'upbibtex %O %B';
$dvipdf                      = 'dvipdfmx %O -o %D %S';
$makeindex                   = 'mendex -U %O -o %D %S';
$max_repeat                  = 5;
$pdf_mode                    = 3;

$pvc_view_file_via_temporary = 0;

$pdf_previewer               = '/usr/local/bin/atom';
```

latexmkを使って、早速コンパイルしてみましょう。
まず、Atomを起動してLaTeXファイルを書いてみましょう。
以下のコマンドを実行して下さい。

```bash
atom ~/test.tex
```

Atomが起動したら、以下のテキストを貼り付けて保存して下さい。

```latex
\documentclass[uplatex]{jsarticle}
\begin{document}
Hello,\LaTeX!
\end{document}
```

次に、実際にtest.texをコンパイルしてみましょう。
以下のコマンドを実行して下さい。

```bash
latexmk -pvc ~/test.tex
```

すると、コンパイルが完了し、コンパイルされたPDFファイルはAtomによってプレビューされていることでしょう。
うまく表示されない場合は、Atomを再起動した上で再度試してみて下さい。

## 最後に
何か質問などがあれば、@KilledByNLPまでお願い致します。

## 参考にしたWebサイト
* [【必見】Atomで作る快適な論文執筆TeX環境【Mac】【卒論】【LaTeX】](https://qiita.com/ken0nek/items/f98f88c9c45d8499786e)
