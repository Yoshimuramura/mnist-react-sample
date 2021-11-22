# MNiST React 練習ページ

このページはMNiST向けreactの練習用ページです。実際に自分のgithubアカウントにクローンしてから使ってください。（このレポジトリを直接クローンしないでください。）

やり方のドキュメントは[こちら](https://docs.google.com/document/d/1jwPX-bo-Gxkz0Avu6zTvkmxipYtO0BTjNz4AHpTOQR8/edit?usp=sharing)

ご利用には、既にNode.jsをインストールしている必要があります。

---

## 起動方法

以下の方法で、実際にブラウザを起動して挙動を確かめることができます。

### `ライブラリーインポート`
```
$ npm install
```
mnist-react-sampleディレクトリ直下で上のコードを実行することで、必要なライブラリーがインストールされます。

### `npm start`

```
$ npm start
```

上のコードを実行することで[http://localhost:3000](http://localhost:3000)が立ち上がります。これにより起動を確認できます。

---

## Reactの学習法

[Progate](https://prog-8.com/courses/react)にreactの講座が用意されています。有料の部分もありますが、わかりやすくて勉強しやすいと思います。

[Reactのチュートリアル](https://ja.reactjs.org/tutorial/tutorial.html)を行っても勉強しやすいかと思います。読むだけでなく、実際に手を動かして勉強すると身に付きやすいと思います。

困った時は、google先生に聞いてみるか、以下の公式ドキュメントを読むと解決するかもしれません
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

* [React documentation](https://reactjs.org/)

---

## ディレクトリの構造

大事なディレクトリは以下の通りです。

```
---src----App.js
    |
    ------Components

              |
              |------Practice.js
              |------Practice.css
```
PracticeページのコードはこのPractice.jsに書かれています。
