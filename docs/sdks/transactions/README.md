# transactions

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
import { AuthorizeTransactionResponse, AuthorizeTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";
import {
  CartCreateFulfillmentsType,
  CartDiscountDiscountCategory,
  CartDiscountType,
  CartItemShipmentType,
  CartItemType,
  CartShipmentType,
  CreditCardPriority,
  CreditCardTokenType,
  InStoreCartShipmentDistanceUnit,
  MerchantCreditCardAuthorizationProcessingInitiator,
  MerchantCreditCardAuthorizationRechargeSource,
  MerchantCreditCardAuthorizationSource,
  ProcessingInitiator,
} from "bolt-embedded-api/dist/sdk/models/shared";

const sdk = new BoltEmbeddedApi();
const operationSecurity: AuthorizeTransactionSecurity = {
  oAuth: "",
  xAPIKey: "",
};

sdk.transactions.authorizeTransaction({
  idempotencyKey: "soluta",
  requestBody: {
    autoCapture: false,
    cart: {
      addOns: [
        {
          description: "et",
          imageUrl: "saepe",
          name: "Carolyn Rohan",
          price: 5844.76,
          productId: "aperiam",
          productPageUrl: "delectus",
        },
      ],
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
      cartUrl: "https://boltswagstore.com/orders/123456765432",
      currency: "USD",
      discounts: [
        {
          amount: 100,
          code: "SUMMER10DISCOUNT",
          description: "10% off our summer collection",
          detailsUrl: "https://boltswagstore.com/SUMMERSALE",
          discountCategory: CartDiscountDiscountCategory.ManagedGiftcard,
          reference: "DISC-1234",
          type: CartDiscountType.Percentage,
        },
      ],
      displayId: "displayid_100",
      fees: [
        {
          description: "Item Fee",
          name: "Item Fee",
          quantity: 2921.47,
          reference: "ItemFee",
          unitPrice: 2869.15,
          unitTaxAmount: 2408.29,
        },
      ],
      fulfillments: [
        {
          cartItems: [
            {
              brand: "Bolt",
              category: "bags",
              collections: [
                "summer",
              ],
              color: "Bolt Blue",
              customizations: [
                {
                  attributes: {
                    "dolorum": "architecto",
                  },
                  name: "Margaret Luettgen MD",
                  price: {
                    amount: 754,
                    currency: "USD",
                    currencySymbol: "$",
                  },
                },
              ],
              description: "Large tote with Bolt logo.",
              detailsUrl: "https://boltswagstore.com/products/123456",
              externalInputs: {
                shopifyLineItemReference: 8330.38,
                shopifyProductReference: 7851.53,
                shopifyProductVariantReference: 9843.3,
              },
              giftOption: {
                cost: 770,
                merchantProductId: "881",
                message: "Happy Anniversary, Smoochy Poo!",
                wrap: false,
              },
              imageUrl: "https://boltswagstore.com/products/123456/images/1.png",
              isbn: "9780091347314",
              itemGroup: "ut",
              manufacturer: "Bolt Textiles USA",
              merchantProductId: "881",
              merchantVariantId: "888",
              msrp: 7034.95,
              name: "Bolt Swag Bag",
              options: "Special Edition",
              properties: [
                {
                  color: "cupiditate",
                  display: false,
                  name: "Amy Langworth",
                  nameId: 9774.96,
                  value: "quisquam",
                  valueId: 8765.06,
                },
              ],
              quantity: 1,
              reference: "item_100",
              shipment: {
                carrier: "FedEx",
                cost: 770,
                discountedByMembership: false,
                estimatedDeliveryDate: "08-30-2022",
                expedited: false,
                packageDepth: 90,
                packageDimensionUnit: "cm",
                packageHeight: 103,
                packageType: "A big package.",
                packageWeightUnit: "kg",
                packageWidth: 222,
                service: "Option 1",
                shippingAddress: {
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
                shippingAddressId: "addres-1",
                shippingMethod: "Unknown",
                signature: "a1B2s3dC4f5g5D6hj6E7k8F9l0",
                taxAmount: 230,
                taxCode: "tax-12345",
                totalWeight: 55,
                totalWeightUnit: "kg",
                type: CartShipmentType.DoorDelivery,
              },
              shipmentType: CartItemShipmentType.ShipToStore,
              size: "Large",
              sku: "BOLT-SKU_100",
              source: "quis",
              tags: "tote, blue, linen, eco-friendly",
              taxAmount: 0,
              taxCode: "ipsum",
              taxable: false,
              totalAmount: 1000,
              type: CartItemType.Bundled,
              unitPrice: 1000,
              uom: "inches",
              upc: "825764603119",
              weight: 10,
              weightUnit: "pounds",
            },
          ],
          cartShipment: {
            carrier: "FedEx",
            cost: 770,
            discountedByMembership: false,
            estimatedDeliveryDate: "08-30-2022",
            expedited: false,
            packageDepth: 90,
            packageDimensionUnit: "cm",
            packageHeight: 103,
            packageType: "A big package.",
            packageWeightUnit: "kg",
            packageWidth: 222,
            service: "Option 1",
            shippingAddress: {
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
            shippingAddressId: "addres-1",
            shippingMethod: "Unknown",
            signature: "a1B2s3dC4f5g5D6hj6E7k8F9l0",
            taxAmount: 230,
            taxCode: "tax-12345",
            totalWeight: 55,
            totalWeightUnit: "kg",
            type: CartShipmentType.DoorDelivery,
          },
          digitalDelivery: {
            email: "Dario.Thiel94@yahoo.com",
            phone: "846.784.2881 x6709",
          },
          inStoreCartShipment: {
            cartShipment: {
              carrier: "FedEx",
              cost: 770,
              discountedByMembership: false,
              estimatedDeliveryDate: "08-30-2022",
              expedited: false,
              packageDepth: 90,
              packageDimensionUnit: "cm",
              packageHeight: 103,
              packageType: "A big package.",
              packageWeightUnit: "kg",
              packageWidth: 222,
              service: "Option 1",
              shippingAddress: {
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
              shippingAddressId: "addres-1",
              shippingMethod: "Unknown",
              signature: "a1B2s3dC4f5g5D6hj6E7k8F9l0",
              taxAmount: 230,
              taxCode: "tax-12345",
              totalWeight: 55,
              totalWeightUnit: "kg",
              type: CartShipmentType.DoorDelivery,
            },
            description: "Pick up in-store at 123 Main St.",
            distance: 3,
            distanceUnit: InStoreCartShipmentDistanceUnit.Mile,
            inStorePickupAddress: {
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
            pickupWindowClose: 347233,
            pickupWindowOpen: 862310,
            storeName: "Bolt Collective",
          },
          type: CartCreateFulfillmentsType.PhysicalDoorDelivery,
        },
      ],
      inStoreCartShipments: [
        {
          cartShipment: {
            carrier: "FedEx",
            cost: 770,
            discountedByMembership: false,
            estimatedDeliveryDate: "08-30-2022",
            expedited: false,
            packageDepth: 90,
            packageDimensionUnit: "cm",
            packageHeight: 103,
            packageType: "A big package.",
            packageWeightUnit: "kg",
            packageWidth: 222,
            service: "Option 1",
            shippingAddress: {
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
            shippingAddressId: "addres-1",
            shippingMethod: "Unknown",
            signature: "a1B2s3dC4f5g5D6hj6E7k8F9l0",
            taxAmount: 230,
            taxCode: "tax-12345",
            totalWeight: 55,
            totalWeightUnit: "kg",
            type: CartShipmentType.DoorDelivery,
          },
          description: "Pick up in-store at 123 Main St.",
          distance: 3,
          distanceUnit: InStoreCartShipmentDistanceUnit.Mile,
          inStorePickupAddress: {
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
          pickupWindowClose: 780427,
          pickupWindowOpen: 981830,
          storeName: "Bolt Collective",
        },
      ],
      items: [
        {
          brand: "Bolt",
          category: "bags",
          collections: [
            "summer",
          ],
          color: "Bolt Blue",
          customizations: [
            {
              attributes: {
                "doloribus": "iusto",
              },
              name: "Kurt Abernathy",
              price: {
                amount: 754,
                currency: "USD",
                currencySymbol: "$",
              },
            },
          ],
          description: "Large tote with Bolt logo.",
          detailsUrl: "https://boltswagstore.com/products/123456",
          externalInputs: {
            shopifyLineItemReference: 3685.84,
            shopifyProductReference: 4104.92,
            shopifyProductVariantReference: 1369,
          },
          giftOption: {
            cost: 770,
            merchantProductId: "881",
            message: "Happy Anniversary, Smoochy Poo!",
            wrap: false,
          },
          imageUrl: "https://boltswagstore.com/products/123456/images/1.png",
          isbn: "9780091347314",
          itemGroup: "vel",
          manufacturer: "Bolt Textiles USA",
          merchantProductId: "881",
          merchantVariantId: "888",
          msrp: 8221.18,
          name: "Bolt Swag Bag",
          options: "Special Edition",
          properties: [
            {
              color: "magnam",
              display: false,
              name: "Mrs. Vicki Langosh",
              nameId: 978.44,
              value: "ex",
              valueId: 8621.92,
            },
          ],
          quantity: 1,
          reference: "item_100",
          shipment: {
            carrier: "FedEx",
            cost: 770,
            discountedByMembership: false,
            estimatedDeliveryDate: "08-30-2022",
            expedited: false,
            packageDepth: 90,
            packageDimensionUnit: "cm",
            packageHeight: 103,
            packageType: "A big package.",
            packageWeightUnit: "kg",
            packageWidth: 222,
            service: "Option 1",
            shippingAddress: {
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
            shippingAddressId: "addres-1",
            shippingMethod: "Unknown",
            signature: "a1B2s3dC4f5g5D6hj6E7k8F9l0",
            taxAmount: 230,
            taxCode: "tax-12345",
            totalWeight: 55,
            totalWeightUnit: "kg",
            type: CartShipmentType.DoorDelivery,
          },
          shipmentType: CartItemShipmentType.ShipToStore,
          size: "Large",
          sku: "BOLT-SKU_100",
          source: "voluptatibus",
          tags: "tote, blue, linen, eco-friendly",
          taxAmount: 0,
          taxCode: "nostrum",
          taxable: false,
          totalAmount: 1000,
          type: CartItemType.Bundled,
          unitPrice: 1000,
          uom: "inches",
          upc: "825764603119",
          weight: 10,
          weightUnit: "pounds",
        },
      ],
      loyaltyRewards: [
        {
          amount: 7888.73,
          couponCode: "saepe",
          description: "$5 off (100 Points)",
          details: "{"id": 123456, "icon": "fa-dollar", "name": "$15.00 Off", "type": "Coupon", "amount": 100, "duration": "single_use", "cost_text": "150 Points",  "description": "Get $15 off your next purchase for 150 points", "discount_type": "fixed_amount", "unrendered_name": "$15.00 Off",  "discount_percentage": null, "discount_rate_cents": null, "discount_value_cents": null, "discount_amount_cents": 1500,  "unrendered_description": "Get $15 off your next purchase for 150 points", "applies_to_product_type": "ALL"}",
          points: 4113.72,
          source: "impedit",
          type: "corporis",
        },
      ],
      metadata: {
        "veniam": "aliquid",
      },
      orderDescription: "Order #1234567890",
      orderReference: "order_100",
      shipments: [
        {
          carrier: "FedEx",
          cost: 770,
          discountedByMembership: false,
          estimatedDeliveryDate: "08-30-2022",
          expedited: false,
          packageDepth: 90,
          packageDimensionUnit: "cm",
          packageHeight: 103,
          packageType: "A big package.",
          packageWeightUnit: "kg",
          packageWidth: 222,
          service: "Option 1",
          shippingAddress: {
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
          shippingAddressId: "addres-1",
          shippingMethod: "Unknown",
          signature: "a1B2s3dC4f5g5D6hj6E7k8F9l0",
          taxAmount: 230,
          taxCode: "tax-12345",
          totalWeight: 55,
          totalWeightUnit: "kg",
          type: CartShipmentType.DoorDelivery,
        },
      ],
      taxAmount: 811.01,
      totalAmount: 900,
    },
    creditCardId: "SAeEcU1hpMobc",
    divisionId: "4ab56ad7865ada4ad32",
    merchantEventId: "dbe0cd5d-3261-41d9-ba61-49e5b9d07567",
    previousTransactionId: "null",
    processingInitiator: ProcessingInitiator.StoredCardholderInitiated,
    shippingAddress: {
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
    source: MerchantCreditCardAuthorizationRechargeSource.DirectPayments,
    userIdentifier: {
      artifact: "null",
      email: "alan.watts@example.com",
      emailId: "null",
      phone: "+12125550199",
      phoneId: "null",
    },
    userIdentity: {
      firstName: "Charlotte",
      lastName: "Charles",
    },
  },
  xPublishableKey: "magnam",
}, operationSecurity).then((res: AuthorizeTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CaptureTransactionResponse, CaptureTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: CaptureTransactionSecurity = {
  xAPIKey: "",
};

sdk.transactions.captureTransaction({
  idempotencyKey: "ea",
  captureTransactionWithReference: {
    amount: 754,
    currency: "USD",
    merchantEventId: "dbe0cd5d-3261-41d9-ba61-49e5b9d07567",
    skipHookNotification: false,
    transactionReference: "LBLJ-TWW7-R9VC",
  },
}, operationSecurity).then((res: CaptureTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetTransactionDetailsResponse, GetTransactionDetailsSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: GetTransactionDetailsSecurity = {
  xAPIKey: "",
};

sdk.transactions.getTransactionDetails({
  reference: "quo",
}, operationSecurity).then((res: GetTransactionDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { RefundTransactionResponse, RefundTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: RefundTransactionSecurity = {
  xAPIKey: "",
};

sdk.transactions.refundTransaction({
  idempotencyKey: "consectetur",
  requestBody: {
    amount: 754,
    currency: "USD",
    merchantEventId: "dbe0cd5d-3261-41d9-ba61-49e5b9d07567",
    skipHookNotification: false,
    transactionReference: "LBLJ-TWW7-R9VC",
  },
}, operationSecurity).then((res: RefundTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateTransactionResponse, UpdateTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: UpdateTransactionSecurity = {
  xAPIKey: "",
};

sdk.transactions.updateTransaction({
  idempotencyKey: "recusandae",
  reference: "aspernatur",
  requestBody: {
    displayId: "order-123",
    metadata: {
      "minima": "eaque",
    },
  },
}, operationSecurity).then((res: UpdateTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { VoidTransactionResponse, VoidTransactionSecurity } from "bolt-embedded-api/dist/sdk/models/operations";

const sdk = new BoltEmbeddedApi();
const operationSecurity: VoidTransactionSecurity = {
  xAPIKey: "",
};

sdk.transactions.voidTransaction({
  idempotencyKey: "a",
  creditCardVoid: {
    merchantEventId: "dbe0cd5d-3261-41d9-ba61-49e5b9d07567",
    skipHookNotification: false,
    transactionReference: "LBLJ-TWW7-R9VC",
  },
}, operationSecurity).then((res: VoidTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.VoidTransactionRequest](../../models/operations/voidtransactionrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.VoidTransactionSecurity](../../models/operations/voidtransactionsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.VoidTransactionResponse](../../models/operations/voidtransactionresponse.md)>**

