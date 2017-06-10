# Over view
このリポジトリは、[direct](https://direct4b.com/)上で動くチャットボットです。
チャット画面からTwitterの情報にアクセスできます。

# How to run?

基本的な環境構築方法は [daabデベロッパー](https://direct4b.com/ja/bot/dev/)を参照してください。
下記のように必要な環境変数を与えて `daab run` します。

     TWITTER_ACCESS_TOKEN_SECRET="(token secret)" TWITTER_ACCESS_TOKEN_KEY="(token key)" TWITTER_CONSUMER_SECRET="(consumer secret)" TWITTER_CONSUMER_KEY="consumer key" SEARCH_TARGET_ID=(検索したいユーザーのID) MESSAGE_FILTER="()マッチさせたい正規表現)" daab run

# daab

This is a version of LisB's direct bot, daab.
For more information, please visit [daab portal page](https://direct4b.com/ja/bot/).
