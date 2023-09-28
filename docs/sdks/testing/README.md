# Testing
(*testing*)

## Overview

A collection of endpoints that provide useful functionality to assist in testing your Bolt integration.


### Available Operations

* [createTestingShopperAccount](#createtestingshopperaccount) - Create Testing Shopper Account
* [getTestCreditCardToken](#gettestcreditcardtoken) - Fetch a Test Credit Card Token

## createTestingShopperAccount

Create a Bolt shopper account for testing purposes. Available for sandbox use only and the created  account will be recycled after a certain time.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import {
  CreateTestingShopperAccountRequestBodyEmailState,
  CreateTestingShopperAccountResponse,
  CreateTestingShopperAccountSecurity,
} from "bolt-embedded-api/dist/sdk/models/operations";
import {
  Onev11testing1shopper1createPostRequestBodyContentApplication1jsonSchemaPropertiesEmailState,
} from "bolt-embedded-api/dist/sdk/models/shared";

const sdk = new BoltEmbeddedApi();
const operationSecurity: CreateTestingShopperAccountSecurity = {
  xAPIKey: "",
};

sdk.testing.createTestingShopperAccount({
  requestBody: {
    deactivateInDays: 674848,
    email: "Doyle71@yahoo.com",
    emailState: CreateTestingShopperAccountRequestBodyEmailState.Verified,
    hasAddress: false,
    migrated: false,
    phone: "545.812.1141 x3790",
    phoneState: Onev11testing1shopper1createPostRequestBodyContentApplication1jsonSchemaPropertiesEmailState.Verified,
  },
  xPublishableKey: "cumque",
}, operationSecurity).then((res: CreateTestingShopperAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.CreateTestingShopperAccountRequest](../../models/operations/createtestingshopperaccountrequest.md)   | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `security`                                                                                                       | [operations.CreateTestingShopperAccountSecurity](../../models/operations/createtestingshopperaccountsecurity.md) | :heavy_check_mark:                                                                                               | The security requirements to use for the request.                                                                |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.CreateTestingShopperAccountResponse](../../models/operations/createtestingshopperaccountresponse.md)>**


## getTestCreditCardToken

This endpoint fetches a new credit card token for Bolt's universal test credit card number `4111 1111 1111 1004`. This is for testing and is available only in sandbox.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { GetTestCreditCardTokenResponse, GetTestCreditCardTokenSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: GetTestCreditCardTokenSecurity = {
  xAPIKey: "",
};

sdk.testing.getTestCreditCardToken(operationSecurity).then((res: GetTestCreditCardTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `security`                                                                                             | [operations.GetTestCreditCardTokenSecurity](../../models/operations/gettestcreditcardtokensecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetTestCreditCardTokenResponse](../../models/operations/gettestcreditcardtokenresponse.md)>**

