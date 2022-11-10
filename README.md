# Git Diff 

## outline
- [English](#english)
- [Japanese(日本語)](#japanese)

<h2 id="english">How to Use</h2>
### install
```
$ npm install @itkyk/git-diff
```

### Wakeup
`package.json`
```json
{
  "script": {
    "diff": "gitDiff --from origin/master --to reversion --filter ACMR",
    "removeDiff": "gitDiff --remove"
  }
}
```

`npx command`
```
$ npx @itkyk/git-diff --from origin/master --to reversion

$ npx @itkyk/git-diff --remove
```

## Options
| flags | defaultValue | description |
|--------|------------------|---------------|
| --remove, -r | - | Delete `gitDiffTemp` directory.<br>Cannot use with other options |
| --from, -f \<value> | origin/master | Specify branch of before change. |
| --to, -t \<value> | HEAD | Specify branch of after change. |
| --filter <value> | ACMR | Set `--diff-filer` |

## A description of each mode.
### default mode
- Gets the diff file between the branches given by `--from` and` --to`.
- The retrieved files will be expanded to the `gitDiffTemp /` folder in the project root.

### remove mode
- Delete the `gitDiffTemp` directory created.
  <br/>
  <br/>
  <br/>
<h2 id="japanese">使い方</h2>
### インストール
```
$ npm install @itkyk/git-diff
```

### 起動
`package.json`の場合
```json
{
  "script": {
    "diff": "gitDiff --from origin/master --to reversion --filter ACMR",
    "removeDiff": "gitDiff --remove"
  }
}
```

npxの場合
```
$ npx @itkyk/git-diff --from origin/master --to reversion

$ npx @itkyk/git-diff --remove
```

## オプション
| flags | defaultValue | description |
|--------|------------------|---------------|
| --remove, -r | false | 作成されたDiffファイルを削除するモードで起動。<br>ほかオプションとの併用不可。 |
| --from, -f \<value> | origin/master | 差分を取得する変更前ブランチ名 |
| --to, -t \<value> | HEAD | 差分を取得する変更後ブランチ名 |
| --filter <value> | ACMR | `--diff-filter`の指定 |

## 各モードの説明
### 通常
- `--from`と`--to`で与えたブランチ間の差分ファイルを取得します。
- 取得したファイルは、プロジェクトルートの`gitDiffTemp/`フォルダに展開されます。

### removeモード
- 作成された`gitDiffTemp`ディレクトリを削除します。