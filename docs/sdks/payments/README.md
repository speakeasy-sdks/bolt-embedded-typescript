# Payments
(*.payments*)

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

(async() => {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: FinalizePaymentSecurity = {
  oAuth: "",
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
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.FinalizePaymentRequest](../../models/operations/finalizepaymentrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.FinalizePaymentSecurity](../../models/operations/finalizepaymentsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.FinalizePaymentResponse](../../models/operations/finalizepaymentresponse.md)>**


## initializePayment

Initialize a Bolt payment token that will be used to reference this payment to Bolt when it is updated or finalized. NOTE: The authorization header is NOT required for payments associated with users who do not have a Bolt account.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { InitializePaymentSecurity } from "bolt-embedded-api/dist/sdk/models/operations";
import {
  CartCreateType,
  CartItemType,
  CartShipmentType,
  DiscountCategory,
  DistanceUnit,
  ShipmentType,
  TypeT,
} from "bolt-embedded-api/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: InitializePaymentSecurity = {
  oAuth: "",
};

  const res = await sdk.payments.initializePayment({
    requestBody: {
      cart: {
        addOns: [
          {
            name: "string",
            price: 3089.77,
            productId: "string",
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
            reference: "DISC-1234",
            type: TypeT.Percentage,
          },
        ],
        displayId: "displayid_100",
        fees: [
          {
            description: "Item Fee",
            name: "Item Fee",
            quantity: 7673.67,
            reference: "ItemFee",
            unitPrice: 7770.83,
            unitTaxAmount: 7895.06,
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
                      "key1": "value1",
                      "key2": "value2",
                    },
                    price: {
                      amount: 754,
                      currency: "USD",
                      currencySymbol: "$",
                    },
                  },
                ],
                description: "Large tote with Bolt logo.",
                detailsUrl: "https://boltswagstore.com/products/123456",
                externalInputs: {},
                giftOption: {
                  cost: 770,
                  merchantProductId: "881",
                  message: "Happy Anniversary, Smoochy Poo!",
                  wrap: false,
                },
                imageUrl: "https://boltswagstore.com/products/123456/images/1.png",
                isbn: "9780091347314",
                manufacturer: "Bolt Textiles USA",
                merchantProductId: "881",
                merchantVariantId: "888",
                name: "Bolt Swag Bag",
                options: "Special Edition",
                properties: [
                  {},
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
                size: "Large",
                sku: "BOLT-SKU_100",
                tags: "tote, blue, linen, eco-friendly",
                taxAmount: 0,
                totalAmount: 1000,
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
            digitalDelivery: {},
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
              distanceUnit: DistanceUnit.Mile,
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
              storeName: "Bolt Collective",
            },
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
            distanceUnit: DistanceUnit.Mile,
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
                  "key1": "value1",
                  "key2": "value2",
                },
                price: {
                  amount: 754,
                  currency: "USD",
                  currencySymbol: "$",
                },
              },
            ],
            description: "Large tote with Bolt logo.",
            detailsUrl: "https://boltswagstore.com/products/123456",
            externalInputs: {},
            giftOption: {
              cost: 770,
              merchantProductId: "881",
              message: "Happy Anniversary, Smoochy Poo!",
              wrap: false,
            },
            imageUrl: "https://boltswagstore.com/products/123456/images/1.png",
            isbn: "9780091347314",
            manufacturer: "Bolt Textiles USA",
            merchantProductId: "881",
            merchantVariantId: "888",
            name: "Bolt Swag Bag",
            options: "Special Edition",
            properties: [
              {},
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
            size: "Large",
            sku: "BOLT-SKU_100",
            tags: "tote, blue, linen, eco-friendly",
            taxAmount: 0,
            totalAmount: 1000,
            unitPrice: 1000,
            uom: "inches",
            upc: "825764603119",
            weight: 10,
            weightUnit: "pounds",
          },
        ],
        loyaltyRewards: [
          {
            description: "$5 off (100 Points)",
            details: "{\"id\": 123456, \"icon\": \"fa-dollar\", \"name\": \"$15.00 Off\", \"type\": \"Coupon\", \"amount\": 100, \"duration\": \"single_use\", \"cost_text\": \"150 Points\",  \"description\": \"Get $15 off your next purchase for 150 points\", \"discount_type\": \"fixed_amount\", \"unrendered_name\": \"$15.00 Off\",  \"discount_percentage\": null, \"discount_rate_cents\": null, \"discount_value_cents\": null, \"discount_amount_cents\": 1500,  \"unrendered_description\": \"Get $15 off your next purchase for 150 points\", \"applies_to_product_type\": \"ALL\"}",
          },
        ],
        metadata: {
          "key1": "value1",
          "key2": "value2",
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
        totalAmount: 900,
      },
      shopperIdentity: {
        createBoltAccount: true,
        email: "Angelica40@gmail.com",
        firstName: "Ottis",
        lastName: "Bergnaum",
        phone: "434-564-1598 x40879",
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
| `request`                                                                                    | [operations.InitializePaymentRequest](../../models/operations/initializepaymentrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.InitializePaymentSecurity](../../models/operations/initializepaymentsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.InitializePaymentResponse](../../models/operations/initializepaymentresponse.md)>**


## updatePayment

Update a Bolt payment using the token given after initializing a payment.  Updates will completely replace the original top-level resource (for example, if a cart is sent in with the request it will replace the existing cart).  Any included object should be sent as complete object. NOTE: The authorization header is NOT required for payments associated with users who do not have a Bolt account.


### Example Usage

```typescript
import { BoltEmbeddedApi } from "bolt-embedded-api";
import { UpdatePaymentSecurity } from "bolt-embedded-api/dist/sdk/models/operations";
import {
  CartCreateType,
  CartItemType,
  CartShipmentType,
  DiscountCategory,
  DistanceUnit,
  ShipmentType,
  TypeT,
} from "bolt-embedded-api/dist/sdk/models/shared";

(async() => {
  const sdk = new BoltEmbeddedApi();
const operationSecurity: UpdatePaymentSecurity = {
  oAuth: "",
};

  const res = await sdk.payments.updatePayment({
    requestBody: {
      cart: {
        addOns: [
          {
            name: "string",
            price: 8194.81,
            productId: "string",
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
            reference: "DISC-1234",
            type: TypeT.Percentage,
          },
        ],
        displayId: "displayid_100",
        fees: [
          {
            description: "Item Fee",
            name: "Item Fee",
            quantity: 1095.6,
            reference: "ItemFee",
            unitPrice: 2053.88,
            unitTaxAmount: 4201.73,
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
                      "key1": "value1",
                      "key2": "value2",
                    },
                    price: {
                      amount: 754,
                      currency: "USD",
                      currencySymbol: "$",
                    },
                  },
                ],
                description: "Large tote with Bolt logo.",
                detailsUrl: "https://boltswagstore.com/products/123456",
                externalInputs: {},
                giftOption: {
                  cost: 770,
                  merchantProductId: "881",
                  message: "Happy Anniversary, Smoochy Poo!",
                  wrap: false,
                },
                imageUrl: "https://boltswagstore.com/products/123456/images/1.png",
                isbn: "9780091347314",
                manufacturer: "Bolt Textiles USA",
                merchantProductId: "881",
                merchantVariantId: "888",
                name: "Bolt Swag Bag",
                options: "Special Edition",
                properties: [
                  {},
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
                size: "Large",
                sku: "BOLT-SKU_100",
                tags: "tote, blue, linen, eco-friendly",
                taxAmount: 0,
                totalAmount: 1000,
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
            digitalDelivery: {},
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
              distanceUnit: DistanceUnit.Mile,
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
              storeName: "Bolt Collective",
            },
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
            distanceUnit: DistanceUnit.Mile,
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
                  "key1": "value1",
                  "key2": "value2",
                },
                price: {
                  amount: 754,
                  currency: "USD",
                  currencySymbol: "$",
                },
              },
            ],
            description: "Large tote with Bolt logo.",
            detailsUrl: "https://boltswagstore.com/products/123456",
            externalInputs: {},
            giftOption: {
              cost: 770,
              merchantProductId: "881",
              message: "Happy Anniversary, Smoochy Poo!",
              wrap: false,
            },
            imageUrl: "https://boltswagstore.com/products/123456/images/1.png",
            isbn: "9780091347314",
            manufacturer: "Bolt Textiles USA",
            merchantProductId: "881",
            merchantVariantId: "888",
            name: "Bolt Swag Bag",
            options: "Special Edition",
            properties: [
              {},
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
            size: "Large",
            sku: "BOLT-SKU_100",
            tags: "tote, blue, linen, eco-friendly",
            taxAmount: 0,
            totalAmount: 1000,
            unitPrice: 1000,
            uom: "inches",
            upc: "825764603119",
            weight: 10,
            weightUnit: "pounds",
          },
        ],
        loyaltyRewards: [
          {
            description: "$5 off (100 Points)",
            details: "{\"id\": 123456, \"icon\": \"fa-dollar\", \"name\": \"$15.00 Off\", \"type\": \"Coupon\", \"amount\": 100, \"duration\": \"single_use\", \"cost_text\": \"150 Points\",  \"description\": \"Get $15 off your next purchase for 150 points\", \"discount_type\": \"fixed_amount\", \"unrendered_name\": \"$15.00 Off\",  \"discount_percentage\": null, \"discount_rate_cents\": null, \"discount_value_cents\": null, \"discount_amount_cents\": 1500,  \"unrendered_description\": \"Get $15 off your next purchase for 150 points\", \"applies_to_product_type\": \"ALL\"}",
          },
        ],
        metadata: {
          "key1": "value1",
          "key2": "value2",
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
        totalAmount: 900,
      },
      shopperIdentity: {
        createBoltAccount: true,
        email: "Jannie.Kshlerin@yahoo.com",
        firstName: "Adeline",
        lastName: "Wyman",
        phone: "358.969.1849 x6760",
      },
    },
    id: "<ID>",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdatePaymentRequest](../../models/operations/updatepaymentrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdatePaymentSecurity](../../models/operations/updatepaymentsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdatePaymentResponse](../../models/operations/updatepaymentresponse.md)>**

