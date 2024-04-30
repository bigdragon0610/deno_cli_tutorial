# Denoとは
- ディーノと読むらしい
- Node.jsに替わる、JavaScriptのランタイム
- TypeScriptをそのまま実行できる！
- 設定ファイル無しで動く
  - package.jsonいらない
  - tsの設定いらない
  - フォーマッタは組み込み
- → CLIが作りやすい！

# Denoのインストール
- 公式の手順でサクッとインストール
  - https://yoshixmk.github.io/deno-manual-ja/getting_started/installation.html
  - curlを使えば良い
- VSCodeの拡張機能
  - https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno
  - ワークスペースの `.vscode/setting.json` に以下を追加すると補完が効くのでオススメ
    ```json
    {
      "deno.enable": true,
      "[typescript]": {
        "editor.defaultFormatter": "denoland.vscode-deno"
      }
    }
    ```

# Denoに触れてみる
- まずこのリポジトリをクローンしてください
  - `git clone git@github.com:bigdragon0610/deno_cli_tutorial.git`
- `deno run hello.ts` を実行
  - Web APIがDenoに実装されている
- `deno run fetch.ts` を実行
  - インターネットのアクセスには許可が必要
  - `deno run --allow-net fetch.ts` or `deno run -A fetch.ts` (全権限なので注意)
  - 詳しくは[パーミッションのドキュメント](https://yoshixmk.github.io/deno-manual-ja/getting_started/permissions.html)を参照
- `deno run --allow-read deno_fs.ts` を実行
  - [Denoで使えるAPI](https://deno.land/api@v1.42.4)がたくさんある
- `deno run std_yaml.ts` を実行
  - 標準ライブラリも外部からimportする
  - import時にバージョンを指定できる
- `deno run -A dax_sample.ts` を実行
  - [dax](https://github.com/dsherret/dax)はシェルコマンドを実行できる便利ツール
  - クロスプラットフォーム対応もされている
  - `$.select`などCLI作成が簡単になる機能もたくさんある
- `deno run arg.ts a b c` を実行
  - `Deno.args` で引数を渡せる
  - daxと組み合わせることで便利なCLIが作れる！

# CLIの作成
- 思い思いのCLIを作ってみよう!
- 思いつかない人のための課題:
  1. `docker exec -it <コンテナid> <コマンド>`を簡単に実行できるくん
  1. `ls`コマンドの再実装
  1. `grep`コマンドの再実装
  1. 自分のGitHubリポジトリを検索するコマンド
  1. Live Serverの再実装
  1. AIを使って何かする

# CLIのインストール
- `deno install <ファイル名>` でインストールできる
  - GitHubのRawファイルから直接インストールしてもらえる
  - 例: `deno install -A https://raw.githubusercontent.com/bigdragon0610/dex/main/dex.ts`
    - 必要なパーミッション付きでインストール
  - 皆が作ったCLIをシェアしよう！
- `deno compile <フィアル名>` で、ランタイム入りのシングルバイナリが作成できる
  - Denoがインストールされていない環境に配布できる
  - ファイルサイズが大きくなるので、自作ツールには使わなくてよい
