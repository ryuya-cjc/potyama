const awsmobile = {
    "aws_project_region": "ap-northeast-1", // プロジェクトのリージョン（例: 東京リージョン）
    "aws_cognito_identity_pool_id": "IDENTITY_POOL_ID", // IDプールID（Cognito）
    "aws_cognito_region": "ap-northeast-1", // Cognitoリージョン
    "aws_user_pools_id": "USER_POOLS_ID", // ユーザープールID
    "aws_user_pools_web_client_id": "WEB_CLIENT_ID", // ウェブクライアントID（アプリのクライアントID）
    "aws_appsync_graphqlEndpoint": "https://your-api-id.appsync-api.ap-northeast-1.amazonaws.com/graphql", // GraphQLエンドポイント
    "aws_appsync_region": "ap-northeast-1", // AppSync APIのリージョン
    "aws_appsync_authenticationType": "API_KEY", // 認証方式（API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS など）
    "aws_appsync_apiKey": "YOUR_API_KEY", // APIキー
    "aws_content_delivery_bucket": "your-bucket-name", // S3バケット名（必要な場合）
    "aws_content_delivery_bucket_region": "ap-northeast-1", // S3バケットリージョン（必要な場合）
    "aws_mobile_analytics_app_id": "YOUR_ANALYTICS_APP_ID", // モバイル分析アプリID（必要な場合）
    "aws_mobile_analytics_app_region": "ap-northeast-1" // モバイル分析リージョン（必要な場合）
};

export default awsmobile;
