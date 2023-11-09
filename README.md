# bolt-embedded-api

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/bolt-embedded-typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/bolt-embedded-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async () => {
    const sdk = new BoltEmbeddedApi();
    const operationSecurity: AddAddressSecurity = {
        oAuth: "",
        xAPIKey: "",
    };

    const res = await sdk.account.addAddress(
        {
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
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/sdks/account/README.md)

* [addAddress](docs/sdks/account/README.md#addaddress) - Add Address
* [addPaymentMethod](docs/sdks/account/README.md#addpaymentmethod) - Add Payment Method
* [createAccount](docs/sdks/account/README.md#createaccount) - Create Bolt Account
* [deleteAddress](docs/sdks/account/README.md#deleteaddress) - Delete Address
* [deletePaymentMethod](docs/sdks/account/README.md#deletepaymentmethod) - Delete Payment Method
* [detectAccount](docs/sdks/account/README.md#detectaccount) - Detect Account
* [editAddress](docs/sdks/account/README.md#editaddress) - Edit Address
* [getAccount](docs/sdks/account/README.md#getaccount) - Get Account Details
* [replaceAddress](docs/sdks/account/README.md#replaceaddress) - Replace Address
* [updateAccountProfile](docs/sdks/account/README.md#updateaccountprofile) - Update Profile

### [transactions](docs/sdks/transactions/README.md)

* [authorizeTransaction](docs/sdks/transactions/README.md#authorizetransaction) - Authorize a Card
* [captureTransaction](docs/sdks/transactions/README.md#capturetransaction) - Capture a Transaction
* [getTransactionDetails](docs/sdks/transactions/README.md#gettransactiondetails) - Transaction Details
* [refundTransaction](docs/sdks/transactions/README.md#refundtransaction) - Refund a Transaction
* [updateTransaction](docs/sdks/transactions/README.md#updatetransaction) - Update a Transaction
* [voidTransaction](docs/sdks/transactions/README.md#voidtransaction) - Void a Transaction

### [oAuth](docs/sdks/oauth/README.md)

* [oAuthToken](docs/sdks/oauth/README.md#oauthtoken) - OAuth Token Endpoint

### [payments](docs/sdks/payments/README.md)

* [finalizePayment](docs/sdks/payments/README.md#finalizepayment) - Finalize Payment
* [initializePayment](docs/sdks/payments/README.md#initializepayment) - Initialize Payment
* [updatePayment](docs/sdks/payments/README.md#updatepayment) - Update Payment

### [testing](docs/sdks/testing/README.md)

* [createTestingShopperAccount](docs/sdks/testing/README.md#createtestingshopperaccount) - Create Testing Shopper Account
* [getTestCreditCardToken](docs/sdks/testing/README.md#gettestcreditcardtoken) - Fetch a Test Credit Card Token
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |


## Example

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async () => {
    const sdk = new BoltEmbeddedApi();
    const operationSecurity: AddAddressSecurity = {
        oAuth: "",
        xAPIKey: "",
    };

    let res;
    try {
        res = await sdk.account.addAddress(
            {
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
            },
            operationSecurity
        );
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.bolt.com` | None |
| 1 | `https://api-sandbox.bolt.com` | None |
| 2 | `https://api-staging.bolt.com` | None |

For example:

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async () => {
    const sdk = new BoltEmbeddedApi({
        serverIdx: 2,
    });
    const operationSecurity: AddAddressSecurity = {
        oAuth: "",
        xAPIKey: "",
    };

    const res = await sdk.account.addAddress(
        {
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
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async () => {
    const sdk = new BoltEmbeddedApi({
        serverURL: "https://api.bolt.com",
    });
    const operationSecurity: AddAddressSecurity = {
        oAuth: "",
        xAPIKey: "",
    };

    const res = await sdk.account.addAddress(
        {
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
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from bolt-embedded-api import BoltEmbeddedApi;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new BoltEmbeddedApi({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->
# Authentication

## Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `oAuth`      | oauth2       | OAuth2 token |
| `xAPIKey`    | apiKey       | API key      |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async () => {
    const sdk = new BoltEmbeddedApi();
    const operationSecurity: AddAddressSecurity = {
        oAuth: "",
        xAPIKey: "",
    };

    const res = await sdk.account.addAddress(
        {
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
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```

## Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { AddAddressSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

(async () => {
    const sdk = new BoltEmbeddedApi();
    const operationSecurity: AddAddressSecurity = {
        oAuth: "",
        xAPIKey: "",
    };

    const res = await sdk.account.addAddress(
        {
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
        },
        operationSecurity
    );

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
