# Git Diff 

## 使い方
### インストール
```
$ npm install @itkyk/git-diff
```

### 起動
`package.json`の場合
```json
{
  "script": {
    "getDiff": "npm run gitDiff --make --from origin/master --to reversion",
    "removeDiff": "npm run gitDiff --remove"
  }
}
```

npxの場合
```
$ npx @itkyk/git-diff --make --from origin/master --to reversion

$ npx @itkyk/git-diff --remove
```

## オプション
| flags | defaultValue | description |
|--------|------------------|---------------|
| --make, -m | - | Diffファイルを作成するモードで起動 。<br>　`--remove`オプションとの併用不可。|
| --remove, -r | - | 作成されたDiffファイルを削除するモードで起動。<br>ほかオプションとの併用不可。 |
| --from, -f \<value> | origin/master | `--make`モードで起動時、差分を取得する変更前ブランチ名 |
| --to, -t \<value> | - | `--make`モードで起動時、差分を取得する変更後ブランチ名 |

## 各モードの説明
### makeモード
- `--from`と`--to`で与えたブランチ間の差分ファイルを取得します。
- 取得したファイルは、プロジェクトルートの`gitDiffTemp/`フォルダに展開されます。

### removeモード
- makeモードで作成された`gitDiffTemp`ディレクトリを削除します。


## How to Use
### install
```
$ npm install @itkyk/git-diff
```

### Wakeup
`package.json`
```json
{
  "script": {
    "getDiff": "npm run gitDiff --make --from origin/master --to reversion",
    "removeDiff": "npm run gitDiff --remove"
  }
}
```

`npx command`
```
$ npx @itkyk/git-diff --make --from origin/master --to reversion

$ npx @itkyk/git-diff --remove
```

## Options
| flags | defaultValue | description |
|--------|------------------|---------------|
| --make, -m | - | This mode creates diff file<br>　Cannot use width `--remove`|
| --remove, -r | - | Delete directory that made by `--make` mode.<br>Cannot use with other options |
| --from, -f \<value> | origin/master | Specify branch of before change, when wakeup `--made` mode |
| --to, -t \<value> | - | Specify branch of after change, when wakeup `--made` mode |

## A description of each mode.
### make mode
- Gets the diff file between the branches given by `--from` and` --to`.
- The retrieved files will be expanded to the `gitDiffTemp /` folder in the project root.

### remove mode
- Delete the `gitDiffTemp` directory created in `--make` mode.