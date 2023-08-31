# CartCreate

The base_cart object contains the core details typically found in most cart objects, including items, discounts, amount totals, shipments, and in-store pickups.


## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   | Example                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addOns`                                                                                                                                                      | [CartAddOn](../../models/shared/cartaddon.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `billingAddress`                                                                                                                                              | [Address](../../models/shared/address.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                            | The Address object is used for billing, shipping, and physical store address use cases.                                                                       |                                                                                                                                                               |
| `cartUrl`                                                                                                                                                     | *string*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Used to provide a link to the cart ID.                                                                                                                        | https://boltswagstore.com/orders/123456765432                                                                                                                 |
| `currency`                                                                                                                                                    | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           | USD                                                                                                                                                           |
| `discounts`                                                                                                                                                   | [CartDiscount](../../models/shared/cartdiscount.md)[]                                                                                                         | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `displayId`                                                                                                                                                   | *string*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | This field, although required, can be an empty string.                                                                                                        | displayid_100                                                                                                                                                 |
| `fees`                                                                                                                                                        | [CartCreateFees](../../models/shared/cartcreatefees.md)[]                                                                                                     | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `fulfillments`                                                                                                                                                | [CartCreateFulfillments](../../models/shared/cartcreatefulfillments.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `inStoreCartShipments`                                                                                                                                        | [InStoreCartShipment](../../models/shared/instorecartshipment.md)[]                                                                                           | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `items`                                                                                                                                                       | [CartItem](../../models/shared/cartitem.md)[]                                                                                                                 | :heavy_minus_sign:                                                                                                                                            | The list of items associated with the cart.                                                                                                                   |                                                                                                                                                               |
| `loyaltyRewards`                                                                                                                                              | [CartLoyaltyRewards](../../models/shared/cartloyaltyrewards.md)[]                                                                                             | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `metadata`                                                                                                                                                    | Record<string, *string*>                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Optional custom metadata.                                                                                                                                     |                                                                                                                                                               |
| `orderDescription`                                                                                                                                            | *string*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Used optionally to pass additional information like order numbers or other IDs as needed.                                                                     | Order #1234567890                                                                                                                                             |
| `orderReference`                                                                                                                                              | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | This value is used by Bolt as an external reference to a given order. This reference must be unique per successful transaction.                               | order_100                                                                                                                                                     |
| `shipments`                                                                                                                                                   | [CartShipment](../../models/shared/cartshipment.md)[]                                                                                                         | :heavy_minus_sign:                                                                                                                                            | N/A                                                                                                                                                           |                                                                                                                                                               |
| `taxAmount`                                                                                                                                                   | *number*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | The total tax amount for all of the items associated with the cart.                                                                                           |                                                                                                                                                               |
| `totalAmount`                                                                                                                                                 | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The total amount, in cents, of the cart including its items and taxes (if applicable), e.g. $9.00 is 900. This total must match the sum of all other amounts. | 900                                                                                                                                                           |