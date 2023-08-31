# OAuthTokenResponse

OAuth token response.


## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                                                                                                                     | *string*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | An access token you can use to make requests on behalf of a Bolt Account.                                                                                                                         |
| `expiresIn`                                                                                                                                                                                       | *number*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | Access token’s expiration in seconds.                                                                                                                                                             |
| `idToken`                                                                                                                                                                                         | *string*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | A JWT token issued when the request includes the scope open_id.                                                                                                                                   |
| `refreshToken`                                                                                                                                                                                    | *string*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | A refresh token you can use to issue a brand new access token without obtaining a new authorization code.                                                                                         |
| `refreshTokenScope`                                                                                                                                                                               | *string*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | The scope granted to the refresh token. Currently this will always be bolt.account.view.                                                                                                          |
| `scope`                                                                                                                                                                                           | *string*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | The scope granted to access token, depending on the scope granted to the authorization code as well as the scope parameter. Options include `bolt.account.manage`, `bolt.account.view`, `openid`. |
| `tokenType`                                                                                                                                                                                       | *string*                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                | The token_type will always be bearer.                                                                                                                                                             |