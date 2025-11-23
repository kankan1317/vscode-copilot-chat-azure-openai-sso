# 帰属表示とライセンス

## 元の作品

このプロジェクトは、Microsoft Corporation が開発した **GitHub Copilot Chat 拡張機能**の改変版です。

- **元のリポジトリ**: [microsoft/vscode-copilot-chat](https://github.com/microsoft/vscode-copilot-chat)
- **元の著作権**: Copyright (c) Microsoft Corporation. All rights reserved.
- **元のライセンス**: MIT License

## 変更内容

この拡張機能は、GitHub Copilot の代わりに Azure OpenAI Studio で動作するように変更されています。主な変更点は以下の通りです：

1. **認証システム**
   - GitHub 認証を Azure Entra ID（旧 Azure Active Directory）に置き換え
   - Microsoft 認証プロバイダー統合を実装
   - GitHub 固有の認証フローを削除

2. **API 統合**
   - GitHub Copilot API から Azure OpenAI Studio エンドポイントに変更
   - Azure 固有のエンドポイント処理を実装
   - Azure OpenAI 形式のリクエスト/レスポンス処理を更新

3. **機能の削除**
   - GitHub 固有の機能（インライン補完、GitHub MCP サーバー）を削除
   - GitHub アカウント依存関係を無効化
   - GitHub ブランディングと UI 要素を削除

4. **設定**
   - Azure OpenAI モデル用の拡張機能設定を更新
   - デフォルトの認証プロバイダーを Microsoft に変更
   - Azure エンドポイント用の設定スキーマを適応

## ライセンス

この改変版は、元の作品と同じ **MIT ライセンス**の下でリリースされています。

### MIT ライセンス

Copyright (c) Microsoft Corporation. All rights reserved.

以下に定める条件に従い、本ソフトウェアおよび関連文書のファイル（以下「ソフトウェア」）の複製を取得するすべての人に対し、ソフトウェアを無制限に扱うことを無償で許可します。これには、ソフトウェアの複製を使用、複写、変更、結合、掲載、頒布、サブライセンス、および/または販売する権利、およびソフトウェアを提供する相手に同じことを許可する権利も無制限に含まれます。

上記の著作権表示および本許諾表示を、ソフトウェアのすべての複製または重要な部分に記載するものとします。

ソフトウェアは「現状のまま」で、明示であるか暗黙であるかを問わず、何らの保証もなく提供されます。ここでいう保証とは、商品性、特定の目的への適合性、および権利非侵害についての保証も含みますが、それに限定されるものではありません。作者または著作権者は、契約行為、不法行為、またはそれ以外であろうと、ソフトウェアに起因または関連し、あるいはソフトウェアの使用またはその他の扱いによって生じる一切の請求、損害、その他の義務について何らの責任も負わないものとします。

## 謝辞

Microsoft Corporation と GitHub Copilot チームが元の拡張機能を作成し、MIT ライセンスの下でリリースしてくださったことに感謝します。これにより、この適応が可能になりました。

## 商標

このプロジェクトには、プロジェクト、製品、またはサービスの商標またはロゴが含まれている場合があります。Microsoft の商標またはロゴの許可された使用は、[Microsoft の商標およびブランドガイドライン](https://www.microsoft.com/ja-jp/legal/intellectualproperty/trademarks/usage/general)に従う必要があります。このプロジェクトの変更版で Microsoft の商標またはロゴを使用する場合、混乱を招いたり、Microsoft のスポンサーシップを暗示したりしてはなりません。
