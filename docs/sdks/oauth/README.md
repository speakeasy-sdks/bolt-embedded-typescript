# OAuth
(*oAuth*)

## Overview

Interact with Shopper data by completing the Bolt OAuth process.


### Available Operations

* [oAuthToken](#oauthtoken) - OAuth Token Endpoint

## oAuthToken

Endpoint for receiving access, ID, and refresh tokens from Bolt's OAuth server. 

To use this endpoint, first use the Authorization Code Request flow by using the `authorization_code` Grant Type (`grant_type`). Then, in the event that you would need a second or subsequent code, use the `refresh_token` value returned from a successful request as the `refresh_token` input value in your subsequent `refresh_token` Grant Type (`grant_type`) request.

 **Reminder - the Content-Type of this request must be application/x-www-form-urlencoded**


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";

(async() => {
  const sdk = new BoltEmbeddedApi({
    security: {
      oAuth: "",
    },
  });

  const res = await sdk.oAuth.oAuthToken({
    requestBody: "gold",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.OAuthTokenRequest](../../models/operations/oauthtokenrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.OAuthTokenResponse](../../models/operations/oauthtokenresponse.md)>**

