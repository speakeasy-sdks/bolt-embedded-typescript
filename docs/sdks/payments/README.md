# Payments
(*payments*)

## Overview

Create and manage transactions for non credit card payments such as Paypal in your Embedded Accounts experience.


### Available Operations

* [finalizePayment](#finalizepayment) - Finalize Payment
* [initializePayment](#initializepayment) - Initialize Payment
* [updatePayment](#updatepayment) - Update Payment

## finalizePayment

Finalize a Bolt Payment. NOTE: The authorization header is NOT required for payments associated with users who do not have a Bolt account.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { FinalizePaymentSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: FinalizePaymentSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.payments.finalizePayment({
    requestBody: {
      merchantEventId: "dbe0cd5d-3261-41d9-ba61-49e5b9d07567",
      shopperIdentity: {
        createBoltAccount: true,
        email: "Shanon_Sipes@hotmail.com",
        firstName: "Jalyn",
        lastName: "Reichert",
        phone: "567.701.8847 x69933",
      },
    },
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.FinalizePaymentRequest](../../sdk/models/operations/finalizepaymentrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.FinalizePaymentSecurity](../../sdk/models/operations/finalizepaymentsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.FinalizePaymentResponse](../../sdk/models/operations/finalizepaymentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## initializePayment

Initialize a Bolt payment token that will be used to reference this payment to Bolt when it is updated or finalized. NOTE: The authorization header is NOT required for payments associated with users who do not have a Bolt account.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { InitializePaymentSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: InitializePaymentSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.payments.initializePayment({
    requestBody: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.InitializePaymentRequest](../../sdk/models/operations/initializepaymentrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.InitializePaymentSecurity](../../sdk/models/operations/initializepaymentsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.InitializePaymentResponse](../../sdk/models/operations/initializepaymentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updatePayment

Update a Bolt payment using the token given after initializing a payment.  Updates will completely replace the original top-level resource (for example, if a cart is sent in with the request it will replace the existing cart).  Any included object should be sent as complete object. NOTE: The authorization header is NOT required for payments associated with users who do not have a Bolt account.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { UpdatePaymentSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: UpdatePaymentSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.payments.updatePayment({
    requestBody: "string",
    id: "<ID>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdatePaymentRequest](../../sdk/models/operations/updatepaymentrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.UpdatePaymentSecurity](../../sdk/models/operations/updatepaymentsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdatePaymentResponse](../../sdk/models/operations/updatepaymentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
