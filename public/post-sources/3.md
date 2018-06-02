# 対話交渉(Negotiation Dialogue)のデータセット一覧
2018/01/18

## はじめに
対話交渉とは、自然言語による対話によって交渉を行い、合意形成を図ることを指します。
2017年、Facebook Researchによってend-to-endに人間と対話交渉を行うエージェントが開発され、
メディアによってセンセーショナルに取り上げられたことは記憶に新しいかと思います。

* 原著
[Arxiv: \[1706.05125\] Deal or No Deal? End-to-End Learning for Negotiation Dialogues](https://arxiv.org/abs/1706.05125)
* 解説記事
[Qiita: FacebookのDNNチャットボットに関する論文 "Deal or No Deal?" を読む](https://qiita.com/kiwamu-y/items/4b2753911dd2c2d119a8)

本記事では、それらの対話交渉の研究に有用なデータセットをまとめました。

## Facebook Research
冒頭でも紹介したFacebook Researchの研究報告では、ソースコードおよびデータセットが公開されています。

[Github: facebookresearch/end-to-end-negotiator](https://github.com/facebookresearch/end-to-end-negotiator)

ボール・本・帽子の3種類のアイテムを、二者間で交渉して山分けするタスクです。

<div style="margin: 20px 0; padding: 20px; line-height: 3rem; background: #FBF3D3;">
<b>場に存在するアイテム</b></br>
<table>
<tr>
<td>本 × 4</td>
<td>📕📕📕📕</td>
</tr>
<tr>
<td>帽子 × 2</td>
<td>👒👒</td>
</tr>
<tr>
<td>ボール × 3</td>
<td>⚽⚽⚽</td>
</tr>
</table>
</div>

<div style="margin: 20px 0; padding: 20px; line-height: 3rem; background: #FBF3D3;">
<b>参加者Aにとっての価値</b></br>
V(📕) = 2, V(👒) = 1, V(⚽) = 0<br />
<b>参加者Bにとっての価値</b></br>
V(📕) = 0, V(👒) = 2, V(⚽) = 2<br />
</div>


### 交渉手順
1. どちらかが「&lt;choose&gt;」と発言するか、お互いが合計で10回発言するまで、交互に発言します。
2. お互いが合計で10回発言した場合、交渉は決裂したとみなされます。
2. どちらかが「&lt;choose&gt;」と発言したら、各参加者は自分が要求する取り分を入力します。
3. 各参加者が要求する各アイテムの数が、場に存在する各アイテムの数と一致しない場合は交渉が決裂したとみなされ、一致する場合は交渉が成功したとみなされます。

<div style="margin: 20px 0; padding: 20px; line-height: 3rem; background: #FBF3D3;">
<b>参加者Aにとっての価値</b></br>
V(📕) = 0.7, V(👒) = 0.1, V(⚽) = 0.2<br />
<b>参加者Aの取り分</b></br>
📕×2 + 👒 × 0 + ⚽ × 0 <br />
<b>参加者Aの得るスコア</b></br>
V(📕)×2 + V(👒) × 0 + V(⚽) × 0 = 1.4
</div>

なお、交渉が決裂した場合、参加者は全員何も手に入れることができません。交渉が成功した場合は、各参加者にとってのアイテムの価値と、各参加者が得たアイテムの数に応じてスコアを獲得します。

### データの規模

* 2236通りのシナリオ
つまり、各アイテムの個数・各参加者の価値関数の組み合わせは2236パターン存在します。
* 5808件の交渉セット

## Metalogue Multi-Issue Bargaining Dialogue

* Metalogue: A Multimodal Learning Journey
*PETRA '16*
* METALOGUE: Data Collection Using a Real Time Feedback Tool for Non Verbal Presentation Skills Training
*LREC '16 workshop on casual talk among humans and machines*

において発表された研究によって作成された、各参加者の発話音声付きデータセット(有償, $300)です。

* データセット
[Metalogue Multi-Issue Bargaining Dialogue](https://catalog.ldc.upenn.edu/LDC2017S11)
* 論文
[Modelling Multi-Issue Bargaining Dialogues:
Data Collection, Annotation Design and Corpus](http://www.harmendeweerd.nl/papers/20160225_Multi_Issue_Bargaining.pdf)
* マニュアル
[Metalogue Multi-Issue Bargaining: Corpus Manual](https://catalog.ldc.upenn.edu/docs/LDC2017S11/Metalogue-MIB_CorpusAnnotationManual.pdf)

市議会の代表者と中小企業の代表者が新しい禁煙規制の実施について交渉するシナリオなど、論点が複数存在する交渉を扱います。

それぞれのシナリオについて論点は4つ存在し、それぞれの論点について選択肢は4〜5つ存在します。

### 交渉手順

<img src="https://i.imgur.com/78S0vGC.png" style="display: block; margin: auto; height: 300px;" />

1. それぞれの参加者が、ある論点について合意可能な選択肢を全て選びます。
2. 対話により交渉を行います。 その結果、
    * デッドロックが存在すると判断された場合は、交渉を終了します。
    * 合意が形成された場合は、それぞれの参加者が合意された選択肢に割り当てられたスコアを得た上で、交渉を終了します。
    * それ以外の場合は再度1. に戻ります。
3. 交渉が完了していない論点がある場合は、その論点について交渉を行うために1. に戻ります。 全ての論点について交渉が完了した場合、ゲームを終了します。

### データの規模
* 9種類のシナリオ
つまり、各参加者の価値関数の組み合わせが9通りということです。
* 24件の交渉セット
* 2.5時間の音声

## The Negochat Corpus of Human-agent Negotiation Dialogues

* The Negochat Corpus of Human-agent Negotiation Dialogues
*LREC '16*

において発表された研究によって作成されたデータセットです。

* データセット
[GitHub: vaskonov/negochat_corpus
](https://github.com/vaskonov/negochat_corpus)
* 論文
[The Negochat Corpus of Human-agent Negotiation Dialogues](http://www.lrec-conf.org/proceedings/lrec2016/pdf/240_Paper.pdf)

雇用者と被雇用者が交渉しています。雇用者および被雇用者それぞれの価値関数は異なりますが、それぞれの価値関数は全ての交渉セットにおいて同一です。

### 交渉手順
それぞれが対話をする中で、それぞれの論点についてオファー・リジェクトを繰り返し、合意を形成します。
```json
[
    {
        "role": "Candidate",
        "input": "I am willing to have a salary of 120,000",
        "output": [
            {
                "Offer": {
                    "Salary": "120,000 USD"
                }
            }
        ]
    },
    {
        "role": "Employer",
        "input": "That is really steep",
        "output": [
            {
                "Reject": true
            }
        ]
    },
    {
        "role": "Candidate",
        "input": "I am willing to have a salary of 90,000",
        "output": [
            {
                "Offer": {
                    "Salary": "90,000 USD"
                }
            }
        ]
    },
    ...
]
```

### データの規模
* 単一のシナリオ
* 104件の交渉セット


## おわりに
現状では、汎用的に利用することが出来る対話交渉のデータセットは殆どありません。
私達は、以下の条件を備えたデータセットを探しています。

* 複数の論点を扱っている
* 対話ごとに参加者の価値関数がランダムに決定されている

もしご存知の方がいらっしゃれば、[@KilledByNLP](https://twitter.com/KilledByNLP)までお願い致します。
