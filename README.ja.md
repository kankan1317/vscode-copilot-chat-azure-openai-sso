# Azure OpenAI Studio Chat 拡張機能

> **注意**: このプロジェクトは、Microsoft の [GitHub Copilot Chat 拡張機能](https://github.com/microsoft/vscode-copilot-chat)を改変したものです。GitHub Copilot の代わりに Azure OpenAI Studio で動作するように、Azure Entra ID 認証を使用して適応されています。

Azure Entra ID 認証を使用して、Azure OpenAI Studio による AI 搭載のチャットとコーディング支援を提供する VS Code 拡張機能です。

## 帰属表示

この拡張機能は、[GitHub Copilot Chat 拡張機能](https://github.com/microsoft/vscode-copilot-chat)（Copyright (c) Microsoft Corporation）をベースにしています。元の拡張機能は以下のように変更されています：
- GitHub 認証を Azure Entra ID 認証に置き換え
- GitHub Copilot API の代わりに Azure OpenAI Studio エンドポイントに接続
- GitHub 固有の機能とブランディングを削除
- Azure OpenAI Studio 向けにユーザーインターフェースを適応

すべての変更は、元のプロジェクトと同じ MIT ライセンスの下でリリースされています。

## 機能

- **Azure Entra ID 認証**: Microsoft Azure Entra ID（旧 Azure Active Directory）を使用した安全な認証
- **Azure OpenAI 統合**: Azure OpenAI Studio エンドポイントとの直接統合
- **AI チャットインターフェース**: コーディングタスクのための会話型 AI アシスタンス
- **コード生成**: AI による コード提案と補完
- **多言語サポート**: Java、PHP、Python、JavaScript、Ruby、Go、C#、C++ など多数の言語に対応

## 前提条件

- Visual Studio Code 1.107.0 以降
- Node.js 22.14.0 以降
- 適切な権限を持つ Azure OpenAI Studio アカウント
- Azure Entra ID 資格情報

## インストール

### ソースからのインストール

1. このリポジトリをクローン：
   ```bash
   git clone https://github.com/YOUR_USERNAME/azure-openai-chat.git
   cd azure-openai-chat
   ```

2. 依存関係をインストール：
   ```bash
   npm install
   ```

3. 拡張機能をビルド：
   ```bash
   npm run build
   ```

4. 拡張機能をパッケージ化：
   ```bash
   npm run package
   ```

5. VS Code に `.vsix` ファイルをインストール：
   - VS Code を開く
   - 拡張機能ビュー（Ctrl+Shift+X）を開く
   - "..." メニューをクリックし、"VSIX からのインストール..." を選択
   - 生成された `.vsix` ファイルを選択

## 設定

拡張機能はデフォルトで Azure Entra ID 認証を使用します。基本的な使用には追加の設定は不要です。

### 詳細設定

VS Code の設定で Azure OpenAI モデルを設定できます：

```json
{
  "github.copilot.chat.azureModels": {
    "your-model-id": {
      "name": "モデル名",
      "url": "https://your-endpoint.openai.azure.com",
      "toolCalling": true,
      "vision": false,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    }
  }
}
```

## 開発

### Docker を使用

プロジェクトには一貫した開発環境のための Docker 設定が含まれています：

```bash
# コンテナをビルドして起動
docker compose build
docker compose up -d

# コンテナに入る
docker compose exec dev bash

# テストを実行
docker compose exec dev npm run test:unit

# TypeScript チェックを実行
docker compose exec dev npm run typecheck
```

### ローカル開発

```bash
# 依存関係をインストール
npm install

# テストを実行
npm run test:unit

# 型チェック
npm run typecheck

# ビルド
npm run build

# ウォッチモード
npm run watch
```

## テスト

```bash
# 単体テストを実行
npm run test:unit

# すべてのテストを実行
npm test

# 型チェック
npm run typecheck
```

## GitHub Copilot との主な違い

この拡張機能は、元の GitHub Copilot Chat 拡張機能と以下の点で異なります：

1. **認証**: GitHub 認証の代わりに Azure Entra ID を使用
2. **API エンドポイント**: GitHub Copilot API の代わりに Azure OpenAI Studio エンドポイントに接続
3. **ブランディング**: Azure OpenAI Studio を反映するように更新
4. **インライン補完**: GitHub 固有の機能を防ぐため無効化

## アーキテクチャ

- **認証**: `src/platform/authentication/` - Azure Entra ID 統合
- **Azure プロバイダー**: `src/extension/byok/vscode-node/azureProvider.ts` - Azure OpenAI モデルプロバイダー
- **エンドポイント**: `src/extension/byok/node/azureOpenAIEndpoint.ts` - Azure 固有のエンドポイント処理
- **設定**: `src/platform/configuration/` - 拡張機能の設定と構成

## コントリビューション

コントリビューションを歓迎します！プルリクエストをお気軽に送信してください。

1. リポジトリをフォーク
2. フィーチャーブランチを作成（`git checkout -b feature/AmazingFeature`）
3. 変更をコミット（`git commit -m 'Add some AmazingFeature'`）
4. ブランチにプッシュ（`git push origin feature/AmazingFeature`）
5. プルリクエストを開く

## ライセンス

Copyright (c) Microsoft Corporation. All rights reserved.

[MIT](LICENSE.txt) ライセンスの下でライセンスされています。

## 謝辞

このプロジェクトは、Microsoft による [GitHub Copilot Chat 拡張機能](https://github.com/microsoft/vscode-copilot-chat)をベースにしています。元の拡張機能の開発に感謝します。

## プライバシーとデータ

この拡張機能は Azure OpenAI Studio サービスを使用します。以下をご確認ください：
- [Microsoft プライバシーステートメント](https://privacy.microsoft.com/privacystatement)
- [Azure OpenAI Service データプライバシー](https://learn.microsoft.com/ja-jp/legal/cognitive-services/openai/data-privacy)

拡張機能は VS Code の `telemetry.telemetryLevel` 設定を尊重します。詳細は https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting をご覧ください。

## 商標

このプロジェクトには、プロジェクト、製品、またはサービスの商標またはロゴが含まれている場合があります。Microsoft の商標またはロゴの許可された使用は、Microsoft の商標およびブランドガイドラインに従う必要があります。このプロジェクトの変更版で Microsoft の商標またはロゴを使用する場合、混乱を招いたり、Microsoft のスポンサーシップを暗示したりしてはなりません。第三者の商標またはロゴの使用は、それらの第三者のポリシーに従います。
