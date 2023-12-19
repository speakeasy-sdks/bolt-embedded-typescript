# Account
(*account*)

## Overview

Create Embedded Accounts user flows for logged-in and guest experiences by interacting with and updating shopper data.


### Available Operations

* [addAddress](#addaddress) - Add Address
* [addPaymentMethod](#addpaymentmethod) - Add Payment Method
* [createAccount](#createaccount) - Create Bolt Account
* [deleteAddress](#deleteaddress) - Delete Address
* [deletePaymentMethod](#deletepaymentmethod) - Delete Payment Method
* [detectAccount](#detectaccount) - Detect Account
* [editAddress](#editaddress) - Edit Address
* [getAccount](#getaccount) - Get Account Details
* [replaceAddress](#replaceaddress) - Replace Address
* [updateAccountProfile](#updateaccountprofile) - Update Profile

## addAddress

Add an address to a shopper's account address book.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: AddAddressSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.account.addAddress({
    addressAccount: {
      company: "Bolt",
      country: "United States",
      countryCode: "US",
      doorCode: "123456",
      email: "alan.watts@example.com",
      firstName: "Alan",
      lastName: "Watts",
      locality: "Brooklyn",
      metadata: {},
      name: "Alan Watts",
      phone: "+12125550199",
      postalCode: "10044",
      region: "NY",
      regionCode: "NY",
      streetAddress1: "888 main street",
      streetAddress2: "apt 3021",
      streetAddress3: "c/o Alicia Watts",
      streetAddress4: "Bridge Street Apartment Building B",
    },
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.AddAddressRequest](../../sdk/models/operations/addaddressrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.AddAddressSecurity](../../sdk/models/operations/addaddresssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.AddAddressResponse](../../sdk/models/operations/addaddressresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## addPaymentMethod

Add a payment method to a shopper's Bolt account Wallet. For security purposes, this request must come from your backend because authentication requires the use of your private key.

**Note**: Before using this API, the credit card details must be tokenized using Bolt's JavaScript library function, which is documented in [Install the Bolt Tokenizer](https://help.bolt.com/developers/references/bolt-tokenizer).


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddPaymentMethodSecurity, Network, Priority, TokenType } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: AddPaymentMethodSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.account.addPaymentMethod({
    requestBody: {
      billingAddress: {
        company: "Bolt",
        country: "United States",
        countryCode: "US",
        default: true,
        doorCode: "123456",
        email: "alan.watts@example.com",
        firstName: "Alan",
        lastName: "Watts",
        locality: "Brooklyn",
        name: "Alan Watts",
        phone: "+12125550199",
        postalCode: "10044",
        region: "NY",
        regionCode: "NY",
        streetAddress1: "888 main street",
        streetAddress2: "apt 3021",
        streetAddress3: "c/o Alicia Watts",
        streetAddress4: "Bridge Street Apartment Building B",
      },
      billingAddressId: "string",
      bin: "411111",
      currency: "USD",
      expiration: "2025-11",
      last4: "1234",
      metadata: {},
      postalCode: "10044",
      token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
      tokenType: TokenType.Bolt,
    },
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AddPaymentMethodRequest](../../sdk/models/operations/addpaymentmethodrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.AddPaymentMethodSecurity](../../sdk/models/operations/addpaymentmethodsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AddPaymentMethodResponse](../../sdk/models/operations/addpaymentmethodresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createAccount

Create a Bolt shopping account.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { CreateAccountSecurity } from "bolt-embedded-api/dist/sdk/models/operations";
import { Network, PaymentMethodAccountPriority, TokenType } from "bolt-embedded-api/dist/sdk/models/shared";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: CreateAccountSecurity = {
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.account.createAccount({
    createAccountInput: {
      addresses: [
        {
          company: "Bolt",
          country: "United States",
          countryCode: "US",
          doorCode: "123456",
          email: "alan.watts@example.com",
          firstName: "Alan",
          lastName: "Watts",
          locality: "Brooklyn",
          metadata: {},
          name: "Alan Watts",
          phone: "+12125550199",
          postalCode: "10044",
          region: "NY",
          regionCode: "NY",
          streetAddress1: "888 main street",
          streetAddress2: "apt 3021",
          streetAddress3: "c/o Alicia Watts",
          streetAddress4: "Bridge Street Apartment Building B",
        },
      ],
      paymentMethods: [
        {
          billingAddress: {
            company: "Bolt",
            country: "United States",
            countryCode: "US",
            default: true,
            doorCode: "123456",
            email: "alan.watts@example.com",
            firstName: "Alan",
            lastName: "Watts",
            locality: "Brooklyn",
            name: "Alan Watts",
            phone: "+12125550199",
            postalCode: "10044",
            region: "NY",
            regionCode: "NY",
            streetAddress1: "888 main street",
            streetAddress2: "apt 3021",
            streetAddress3: "c/o Alicia Watts",
            streetAddress4: "Bridge Street Apartment Building B",
          },
          billingAddressId: "string",
          bin: "411111",
          expiration: "2025-11",
          last4: "1234",
          metadata: {},
          postalCode: "10044",
          token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
          tokenType: TokenType.Bolt,
        },
      ],
      profile: {
        email: "alan.watts@example.com",
        firstName: "Alan",
        lastName: "Watts",
        metadata: {},
        phone: "+12125550199",
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateAccountRequest](../../sdk/models/operations/createaccountrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateAccountSecurity](../../sdk/models/operations/createaccountsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateAccountResponse](../../sdk/models/operations/createaccountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteAddress

Deletes an existing address in a shopper's address book.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { DeleteAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: DeleteAddressSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.account.deleteAddress({
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
| `request`                                                                                | [operations.DeleteAddressRequest](../../sdk/models/operations/deleteaddressrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.DeleteAddressSecurity](../../sdk/models/operations/deleteaddresssecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteAddressResponse](../../sdk/models/operations/deleteaddressresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deletePaymentMethod

Delete a saved payment method from a shopper's Bolt account Wallet.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { DeletePaymentMethodSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: DeletePaymentMethodSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.account.deletePaymentMethod({
    paymentMethodId: "string",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeletePaymentMethodRequest](../../sdk/models/operations/deletepaymentmethodrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.DeletePaymentMethodSecurity](../../sdk/models/operations/deletepaymentmethodsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeletePaymentMethodResponse](../../sdk/models/operations/deletepaymentmethodresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## detectAccount

Check whether an account exists using one of `email`, `phone`, or `sha256_email` as the unique identifier.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";

async function run() {
  const sdk = new BoltEmbeddedApi({
    security: {
      oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.account.detectAccount({
    xPublishableKey: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DetectAccountRequest](../../sdk/models/operations/detectaccountrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DetectAccountResponse](../../sdk/models/operations/detectaccountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## editAddress

Edit an existing address in a shopper's address book.
This endpoint fully replaces the information for an existing address while retaining the same address ID.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { EditAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: EditAddressSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.account.editAddress({
    addressAccount: {
      company: "Bolt",
      country: "United States",
      countryCode: "US",
      doorCode: "123456",
      email: "alan.watts@example.com",
      firstName: "Alan",
      lastName: "Watts",
      locality: "Brooklyn",
      metadata: {},
      name: "Alan Watts",
      phone: "+12125550199",
      postalCode: "10044",
      region: "NY",
      regionCode: "NY",
      streetAddress1: "888 main street",
      streetAddress2: "apt 3021",
      streetAddress3: "c/o Alicia Watts",
      streetAddress4: "Bridge Street Apartment Building B",
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.EditAddressRequest](../../sdk/models/operations/editaddressrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.EditAddressSecurity](../../sdk/models/operations/editaddresssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.EditAddressResponse](../../sdk/models/operations/editaddressresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAccount

Fetch a shopper's account details to pre-fill checkout fields. This request must come from your backend for security purposes, as it requires the use of your private key to authenticate. For PCI compliance, only limited information is returned for each credit card available in the shopper’s wallet.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { GetAccountSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: GetAccountSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.account.getAccount({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetAccountRequest](../../sdk/models/operations/getaccountrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetAccountSecurity](../../sdk/models/operations/getaccountsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetAccountResponse](../../sdk/models/operations/getaccountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## replaceAddress

Replace an existing address in a shopper's address book.
These changes delete the existing address and create a new one.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { ReplaceAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: ReplaceAddressSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.account.replaceAddress({
    addressAccount: {
      company: "Bolt",
      country: "United States",
      countryCode: "US",
      doorCode: "123456",
      email: "alan.watts@example.com",
      firstName: "Alan",
      lastName: "Watts",
      locality: "Brooklyn",
      metadata: {},
      name: "Alan Watts",
      phone: "+12125550199",
      postalCode: "10044",
      region: "NY",
      regionCode: "NY",
      streetAddress1: "888 main street",
      streetAddress2: "apt 3021",
      streetAddress3: "c/o Alicia Watts",
      streetAddress4: "Bridge Street Apartment Building B",
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ReplaceAddressRequest](../../sdk/models/operations/replaceaddressrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ReplaceAddressSecurity](../../sdk/models/operations/replaceaddresssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ReplaceAddressResponse](../../sdk/models/operations/replaceaddressresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAccountProfile

Update the identifiers for a shopper's profile (first name or last name).

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { UpdateAccountProfileSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

async function run() {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: UpdateAccountProfileSecurity = {
  oAuth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  xAPIKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.account.updateAccountProfile({
    requestBody: {
      firstName: "Alan",
      lastName: "Watts",
      metadata: {},
    },
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
| `request`                                                                                              | [operations.UpdateAccountProfileRequest](../../sdk/models/operations/updateaccountprofilerequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.UpdateAccountProfileSecurity](../../sdk/models/operations/updateaccountprofilesecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateAccountProfileResponse](../../sdk/models/operations/updateaccountprofileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
