# CartShipment

A cart that is being prepared for shipment


## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `carrier`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | The name of the carrier selected.                                                       | FedEx                                                                                   |
| `cost`                                                                                  | *number*                                                                                | :heavy_minus_sign:                                                                      | The cost in cents.                                                                      | 770                                                                                     |
| `discountedByMembership`                                                                | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Defines if shopper has a membership discount.                                           | false                                                                                   |
| `estimatedDeliveryDate`                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The estimated delivery date.                                                            | 08-30-2022                                                                              |
| `expedited`                                                                             | *boolean*                                                                               | :heavy_minus_sign:                                                                      | True if shipment is expedited.                                                          | false                                                                                   |
| `packageDepth`                                                                          | *number*                                                                                | :heavy_minus_sign:                                                                      | The depth.                                                                              | 90                                                                                      |
| `packageDimensionUnit`                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The unit of measurement for an item's dimensions.                                       | cm                                                                                      |
| `packageHeight`                                                                         | *number*                                                                                | :heavy_minus_sign:                                                                      | The height.                                                                             | 103                                                                                     |
| `packageType`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | The type of package.                                                                    | A big package.                                                                          |
| `packageWeightUnit`                                                                     | *string*                                                                                | :heavy_minus_sign:                                                                      | The unit of measurement for an item's weight.                                           | kg                                                                                      |
| `packageWidth`                                                                          | *number*                                                                                | :heavy_minus_sign:                                                                      | The width.                                                                              | 222                                                                                     |
| `service`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | The service name.                                                                       | Option 1                                                                                |
| `shippingAddress`                                                                       | [shared.Address](../../../sdk/models/shared/address.md)                                 | :heavy_minus_sign:                                                                      | The Address object is used for billing, shipping, and physical store address use cases. |                                                                                         |
| `shippingAddressId`                                                                     | *string*                                                                                | :heavy_minus_sign:                                                                      | ID for billing address                                                                  | addres-1                                                                                |
| `shippingMethod`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | The name of the shipping method.                                                        | Unknown                                                                                 |
| `signature`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | The signature.                                                                          | a1B2s3dC4f5g5D6hj6E7k8F9l0                                                              |
| `taxAmount`                                                                             | *number*                                                                                | :heavy_minus_sign:                                                                      | Tax amount in cents.                                                                    | 230                                                                                     |
| `taxCode`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | The relevant tax code.                                                                  | tax-12345                                                                               |
| `totalWeight`                                                                           | *number*                                                                                | :heavy_minus_sign:                                                                      | The total weight.                                                                       | 55                                                                                      |
| `totalWeightUnit`                                                                       | *string*                                                                                | :heavy_minus_sign:                                                                      | The unit of measurement for an item's weight.                                           | kg                                                                                      |
| `type`                                                                                  | [shared.CartShipmentType](../../../sdk/models/shared/cartshipmenttype.md)               | :heavy_minus_sign:                                                                      | The type corresponding to this shipment, if applicable.                                 | door_delivery                                                                           |