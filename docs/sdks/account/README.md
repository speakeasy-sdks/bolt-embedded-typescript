# account

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
import { AddAddressResponse, AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: AddAddressSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.account.addAddress({
  idempotencyKey: "quibusdam",
  xPublishableKey: "unde",
  addressAccount: {
    company: "Bolt",
    country: "United States",
    countryCode: "US",
    default: false,
    doorCode: "123456",
    email: "alan.watts@example.com",
    firstName: "Alan",
    lastName: "Watts",
    locality: "Brooklyn",
    metadata: {
      additionalProperties: "nulla",
    },
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
}, operationSecurity).then((res: AddAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.AddAddressRequest](../../models/operations/addaddressrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.AddAddressSecurity](../../models/operations/addaddresssecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AddAddressResponse](../../models/operations/addaddressresponse.md)>**


## addPaymentMethod

Add a payment method to a shopper's Bolt account Wallet. For security purposes, this request must come from your backend because authentication requires the use of your private key.

**Note**: Before using this API, the credit card details must be tokenized using Bolt's JavaScript library function, which is documented in [Install the Bolt Tokenizer](https://help.bolt.com/developers/references/bolt-tokenizer).


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import {
  AddPaymentMethodRequestBodyNetwork,
  AddPaymentMethodRequestBodyPriority,
  AddPaymentMethodRequestBodyTokenType,
  AddPaymentMethodResponse,
  AddPaymentMethodSecurity,
} from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: AddPaymentMethodSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.account.addPaymentMethod({
  idempotencyKey: "corrupti",
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
    billingAddressId: "null",
    bin: "411111",
    cryptogram: "illum",
    currency: "USD",
    eci: "vel",
    expiration: "2025-11",
    last4: "1234",
    metadata: {
      additionalProperties: "error",
    },
    network: AddPaymentMethodRequestBodyNetwork.Jcb,
    number: "suscipit",
    postalCode: "10044",
    priority: AddPaymentMethodRequestBodyPriority.One,
    save: false,
    token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
    tokenType: AddPaymentMethodRequestBodyTokenType.Bolt,
  },
  xPublishableKey: "magnam",
}, operationSecurity).then((res: AddPaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AddPaymentMethodRequest](../../models/operations/addpaymentmethodrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.AddPaymentMethodSecurity](../../models/operations/addpaymentmethodsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AddPaymentMethodResponse](../../models/operations/addpaymentmethodresponse.md)>**


## createAccount

Create a Bolt shopping account.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { CreateAccountResponse, CreateAccountSecurity } from "bolt-embedded-api/dist/sdk/models/operations";
import {
  PaymentMethodAccountNetwork,
  PaymentMethodAccountPriority,
  PaymentMethodAccountTokenType,
} from "bolt-embedded-api/dist/sdk/models/shared";

const sdk = new BoltEmbeddedApi();
const operationSecurity: CreateAccountSecurity = {
  xAPIKey: "",
};

sdk.account.createAccount({
  idempotencyKey: "debitis",
  xPublishableKey: "ipsa",
  createAccountInput: {
    addresses: [
      {
        company: "Bolt",
        country: "United States",
        countryCode: "US",
        default: false,
        doorCode: "123456",
        email: "alan.watts@example.com",
        firstName: "Alan",
        lastName: "Watts",
        locality: "Brooklyn",
        metadata: {
          additionalProperties: "tempora",
        },
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
      {
        company: "Bolt",
        country: "United States",
        countryCode: "US",
        default: false,
        doorCode: "123456",
        email: "alan.watts@example.com",
        firstName: "Alan",
        lastName: "Watts",
        locality: "Brooklyn",
        metadata: {
          additionalProperties: "suscipit",
        },
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
      {
        company: "Bolt",
        country: "United States",
        countryCode: "US",
        default: false,
        doorCode: "123456",
        email: "alan.watts@example.com",
        firstName: "Alan",
        lastName: "Watts",
        locality: "Brooklyn",
        metadata: {
          additionalProperties: "molestiae",
        },
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
      {
        company: "Bolt",
        country: "United States",
        countryCode: "US",
        default: false,
        doorCode: "123456",
        email: "alan.watts@example.com",
        firstName: "Alan",
        lastName: "Watts",
        locality: "Brooklyn",
        metadata: {
          additionalProperties: "minus",
        },
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
        billingAddressId: "null",
        bin: "411111",
        cryptogram: "voluptatum",
        default: false,
        eci: "iusto",
        expiration: "2025-11",
        last4: "1234",
        metadata: {
          additionalProperties: "excepturi",
        },
        network: PaymentMethodAccountNetwork.Amex,
        number: "recusandae",
        postalCode: "10044",
        priority: PaymentMethodAccountPriority.Two,
        save: false,
        token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
        tokenType: PaymentMethodAccountTokenType.Bolt,
      },
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
        billingAddressId: "null",
        bin: "411111",
        cryptogram: "ab",
        default: false,
        eci: "quis",
        expiration: "2025-11",
        last4: "1234",
        metadata: {
          additionalProperties: "veritatis",
        },
        network: PaymentMethodAccountNetwork.Jcb,
        number: "perferendis",
        postalCode: "10044",
        priority: PaymentMethodAccountPriority.One,
        save: false,
        token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
        tokenType: PaymentMethodAccountTokenType.Bolt,
      },
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
        billingAddressId: "null",
        bin: "411111",
        cryptogram: "repellendus",
        default: false,
        eci: "sapiente",
        expiration: "2025-11",
        last4: "1234",
        metadata: {
          additionalProperties: "quo",
        },
        network: PaymentMethodAccountNetwork.Visa,
        number: "at",
        postalCode: "10044",
        priority: PaymentMethodAccountPriority.Two,
        save: false,
        token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
        tokenType: PaymentMethodAccountTokenType.Bolt,
      },
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
        billingAddressId: "null",
        bin: "411111",
        cryptogram: "maiores",
        default: false,
        eci: "molestiae",
        expiration: "2025-11",
        last4: "1234",
        metadata: {
          additionalProperties: "quod",
        },
        network: PaymentMethodAccountNetwork.Alliancedata,
        number: "esse",
        postalCode: "10044",
        priority: PaymentMethodAccountPriority.Two,
        save: false,
        token: "a1B2c3D4e5F6G7H8i9J0k1L2m3N4o5P6Q7r8S9t0",
        tokenType: PaymentMethodAccountTokenType.Bolt,
      },
    ],
    profile: {
      email: "alan.watts@example.com",
      firstName: "Alan",
      lastName: "Watts",
      metadata: {
        additionalProperties: "porro",
      },
      phone: "+12125550199",
    },
  },
}, operationSecurity).then((res: CreateAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateAccountRequest](../../models/operations/createaccountrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.CreateAccountSecurity](../../models/operations/createaccountsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateAccountResponse](../../models/operations/createaccountresponse.md)>**


## deleteAddress

Deletes an existing address in a shopper's address book.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { DeleteAddressResponse, DeleteAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: DeleteAddressSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.account.deleteAddress({
  xPublishableKey: "dolorum",
  id: "1ba928fc-8167-442c-b739-205929396fea",
}, operationSecurity).then((res: DeleteAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteAddressRequest](../../models/operations/deleteaddressrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.DeleteAddressSecurity](../../models/operations/deleteaddresssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteAddressResponse](../../models/operations/deleteaddressresponse.md)>**


## deletePaymentMethod

Delete a saved payment method from a shopper's Bolt account Wallet.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { DeletePaymentMethodResponse, DeletePaymentMethodSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: DeletePaymentMethodSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.account.deletePaymentMethod({
  xPublishableKey: "in",
  paymentMethodId: "corporis",
}, operationSecurity).then((res: DeletePaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeletePaymentMethodRequest](../../models/operations/deletepaymentmethodrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.DeletePaymentMethodSecurity](../../models/operations/deletepaymentmethodsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeletePaymentMethodResponse](../../models/operations/deletepaymentmethodresponse.md)>**


## detectAccount

Check whether an account exists using one of `email`, `phone`, or `sha256_email` as the unique identifier.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { DetectAccountResponse } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi({
  security: {
    oAuth: "",
  },
});

sdk.account.detectAccount({
  xPublishableKey: "iste",
  email: "Sterling6@yahoo.com",
  phone: "766.323.1736 x33504",
  sha256Email: "culpa",
}).then((res: DetectAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DetectAccountRequest](../../models/operations/detectaccountrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DetectAccountResponse](../../models/operations/detectaccountresponse.md)>**


## editAddress

Edit an existing address in a shopper's address book.
This endpoint fully replaces the information for an existing address while retaining the same address ID.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { EditAddressResponse, EditAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: EditAddressSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.account.editAddress({
  xPublishableKey: "doloribus",
  addressAccount: {
    company: "Bolt",
    country: "United States",
    countryCode: "US",
    default: false,
    doorCode: "123456",
    email: "alan.watts@example.com",
    firstName: "Alan",
    lastName: "Watts",
    locality: "Brooklyn",
    metadata: {
      additionalProperties: "sapiente",
    },
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
  id: "1a3a2fa9-4677-4392-91aa-52c3f5ad019d",
}, operationSecurity).then((res: EditAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.EditAddressRequest](../../models/operations/editaddressrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.EditAddressSecurity](../../models/operations/editaddresssecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.EditAddressResponse](../../models/operations/editaddressresponse.md)>**


## getAccount

Fetch a shopper's account details to pre-fill checkout fields. This request must come from your backend for security purposes, as it requires the use of your private key to authenticate. For PCI compliance, only limited information is returned for each credit card available in the shopper’s wallet.

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { GetAccountResponse, GetAccountSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: GetAccountSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.account.getAccount({
  xPublishableKey: "laborum",
}, operationSecurity).then((res: GetAccountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetAccountRequest](../../models/operations/getaccountrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetAccountSecurity](../../models/operations/getaccountsecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetAccountResponse](../../models/operations/getaccountresponse.md)>**


## replaceAddress

Replace an existing address in a shopper's address book.
These changes delete the existing address and create a new one.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { ReplaceAddressResponse, ReplaceAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: ReplaceAddressSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.account.replaceAddress({
  idempotencyKey: "quasi",
  xPublishableKey: "reiciendis",
  addressAccount: {
    company: "Bolt",
    country: "United States",
    countryCode: "US",
    default: false,
    doorCode: "123456",
    email: "alan.watts@example.com",
    firstName: "Alan",
    lastName: "Watts",
    locality: "Brooklyn",
    metadata: {
      additionalProperties: "voluptatibus",
    },
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
  id: "e78f097b-0074-4f15-871b-5e6e13b99d48",
}, operationSecurity).then((res: ReplaceAddressResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ReplaceAddressRequest](../../models/operations/replaceaddressrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.ReplaceAddressSecurity](../../models/operations/replaceaddresssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ReplaceAddressResponse](../../models/operations/replaceaddressresponse.md)>**


## updateAccountProfile

Update the identifiers for a shopper's profile (first name or last name).

### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { UpdateAccountProfileResponse, UpdateAccountProfileSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: UpdateAccountProfileSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.account.updateAccountProfile({
  requestBody: {
    firstName: "Alan",
    lastName: "Watts",
    metadata: {
      additionalProperties: "rem",
    },
  },
  xPublishableKey: "voluptates",
}, operationSecurity).then((res: UpdateAccountProfileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateAccountProfileRequest](../../models/operations/updateaccountprofilerequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateAccountProfileSecurity](../../models/operations/updateaccountprofilesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateAccountProfileResponse](../../models/operations/updateaccountprofileresponse.md)>**

