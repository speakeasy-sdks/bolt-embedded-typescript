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

(async() => {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: AuthorizeTransactionSecurity = {
  oAuth: "",
  xAPIKey: "",
};

  const res = await sdk.transactions.authorizeTransaction({
    requestBody: "architect",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AuthorizeTransactionRequest](../../models/operations/authorizetransactionrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.AuthorizeTransactionSecurity](../../models/operations/authorizetransactionsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AuthorizeTransactionResponse](../../models/operations/authorizetransactionresponse.md)>**


## captureTransaction

This captures funds for the designated transaction. A capture can be done for any partial amount or for the total authorized amount.

Although the response returns the standard `transaction_view` object, only `captures` and either `id` or `reference` are needed.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { CaptureTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: CaptureTransactionSecurity = {
  xAPIKey: "",
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
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CaptureTransactionRequest](../../models/operations/capturetransactionrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.CaptureTransactionSecurity](../../models/operations/capturetransactionsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CaptureTransactionResponse](../../models/operations/capturetransactionresponse.md)>**


## getTransactionDetails

This allows you to pull the full transaction details for a given transaction.

 **Note**: All objects and fields marked `required` in the Transaction Details response are also **nullable**. This includes any sub-components (objects or fields) also marked `required`.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { GetTransactionDetailsSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: GetTransactionDetailsSecurity = {
  xAPIKey: "",
};

  const res = await sdk.transactions.getTransactionDetails({
    reference: "repurpose Holmium Trans",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetTransactionDetailsRequest](../../models/operations/gettransactiondetailsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetTransactionDetailsSecurity](../../models/operations/gettransactiondetailssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetTransactionDetailsResponse](../../models/operations/gettransactiondetailsresponse.md)>**


## refundTransaction

This refunds a captured transaction. Refunds can be done for any partial amount or for the total authorized amount. These refunds are processed synchronously and return information about the refunded transaction in the standard `transaction_view` object.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { RefundTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: RefundTransactionSecurity = {
  xAPIKey: "",
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
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.RefundTransactionRequest](../../models/operations/refundtransactionrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.RefundTransactionSecurity](../../models/operations/refundtransactionsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.RefundTransactionResponse](../../models/operations/refundtransactionresponse.md)>**


## updateTransaction

This allows you to update certain transaction properties post-authorization.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { UpdateTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: UpdateTransactionSecurity = {
  xAPIKey: "",
};

  const res = await sdk.transactions.updateTransaction({
    reference: "Paterson",
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
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateTransactionRequest](../../models/operations/updatetransactionrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdateTransactionSecurity](../../models/operations/updatetransactionsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateTransactionResponse](../../models/operations/updatetransactionresponse.md)>**


## voidTransaction

This voids the authorization for a given transaction. Voids must be completed before the authorization is captured.
In the request, either `transaction_id` or `transaction_reference` is required.
Although the response returns the standard `transaction_view` object, only `status` and either `id` or `reference` are needed.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { VoidTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async() => {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: VoidTransactionSecurity = {
  xAPIKey: "",
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
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.VoidTransactionRequest](../../models/operations/voidtransactionrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.VoidTransactionSecurity](../../models/operations/voidtransactionsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.VoidTransactionResponse](../../models/operations/voidtransactionresponse.md)>**

