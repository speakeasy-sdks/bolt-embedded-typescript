# Transactions
(*transactions*)

## Overview

Authorize credit card transactions and perform operations on those transactions with Bolt's transaction API.


### Available Operations

* [authorizeTransaction](#authorizetransaction) - Authorize a Card
* [captureTransaction](#capturetransaction) - Capture a Transaction
* [getTransactionDetails](#gettransactiondetails) - Transaction Details
* [refundTransaction](#refundtransaction) - Refund a Transaction
* [updateTransaction](#updatetransaction) - Update a Transaction
* [voidTransaction](#voidtransaction) - Void a Transaction

## authorizeTransaction

This endpoint authorizes card payments and has three main use cases:
* • Authorize a payment using an unsaved payment method for a guest or logged-in shopper.
* • Authorize a payment using a saved payment method for a logged-in shopper.
*  • Re-charge a previous transaction using the `credit_card_id` of the transaction.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AuthorizeTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: AuthorizeTransactionSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transactions.authorizeTransaction({
    requestBody: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.AuthorizeTransactionRequest](../../sdk/models/operations/authorizetransactionrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.AuthorizeTransactionSecurity](../../sdk/models/operations/authorizetransactionsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.AuthorizeTransactionResponse](../../sdk/models/operations/authorizetransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## captureTransaction

This captures funds for the designated transaction. A capture can be done for any partial amount or for the total authorized amount.

Although the response returns the standard `transaction_view` object, only `captures` and either `id` or `reference` are needed.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { CaptureTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: CaptureTransactionSecurity = {
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transactions.captureTransaction({
    captureTransactionWithReference: {
      amount: 754,
      currency: "USD",
      merchantEventId: "dbe0cd5d-3261-41d9-ba61-49e5b9d07567",
      skipHookNotification: false,
      transactionReference: "LBLJ-TWW7-R9VC",
    },
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CaptureTransactionRequest](../../sdk/models/operations/capturetransactionrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CaptureTransactionSecurity](../../sdk/models/operations/capturetransactionsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CaptureTransactionResponse](../../sdk/models/operations/capturetransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTransactionDetails

This allows you to pull the full transaction details for a given transaction.

 **Note**: All objects and fields marked `required` in the Transaction Details response are also **nullable**. This includes any sub-components (objects or fields) also marked `required`.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { GetTransactionDetailsSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: GetTransactionDetailsSecurity = {
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transactions.getTransactionDetails({
    reference: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetTransactionDetailsRequest](../../sdk/models/operations/gettransactiondetailsrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.GetTransactionDetailsSecurity](../../sdk/models/operations/gettransactiondetailssecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetTransactionDetailsResponse](../../sdk/models/operations/gettransactiondetailsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## refundTransaction

This refunds a captured transaction. Refunds can be done for any partial amount or for the total authorized amount. These refunds are processed synchronously and return information about the refunded transaction in the standard `transaction_view` object.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { RefundTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: RefundTransactionSecurity = {
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transactions.refundTransaction({
    requestBody: {
      amount: 754,
      currency: "USD",
      merchantEventId: "dbe0cd5d-3261-41d9-ba61-49e5b9d07567",
      skipHookNotification: false,
      transactionReference: "LBLJ-TWW7-R9VC",
    },
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
| `request`                                                                                        | [operations.RefundTransactionRequest](../../sdk/models/operations/refundtransactionrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.RefundTransactionSecurity](../../sdk/models/operations/refundtransactionsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RefundTransactionResponse](../../sdk/models/operations/refundtransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTransaction

This allows you to update certain transaction properties post-authorization.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { UpdateTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: UpdateTransactionSecurity = {
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transactions.updateTransaction({
    reference: "string",
    requestBody: {
      displayId: "order-123",
      metadata: {
        "key1": "value1",
        "key2": "value2",
      },
    },
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
| `request`                                                                                        | [operations.UpdateTransactionRequest](../../sdk/models/operations/updatetransactionrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateTransactionSecurity](../../sdk/models/operations/updatetransactionsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateTransactionResponse](../../sdk/models/operations/updatetransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## voidTransaction

This voids the authorization for a given transaction. Voids must be completed before the authorization is captured.
In the request, either `transaction_id` or `transaction_reference` is required.
Although the response returns the standard `transaction_view` object, only `status` and either `id` or `reference` are needed.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { VoidTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: VoidTransactionSecurity = {
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.transactions.voidTransaction({
    creditCardVoid: {
      merchantEventId: "dbe0cd5d-3261-41d9-ba61-49e5b9d07567",
      skipHookNotification: false,
      transactionReference: "LBLJ-TWW7-R9VC",
    },
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
| `request`                                                                                    | [operations.VoidTransactionRequest](../../sdk/models/operations/voidtransactionrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.VoidTransactionSecurity](../../sdk/models/operations/voidtransactionsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.VoidTransactionResponse](../../sdk/models/operations/voidtransactionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
