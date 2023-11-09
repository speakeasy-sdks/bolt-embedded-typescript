# ICartItemView


## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `boltProductId`                                                                                                                 | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `brand`                                                                                                                         | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `category`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to define a product category associated with the item.                                                                     | bags                                                                                                                            |
| `collections`                                                                                                                   | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `color`                                                                                                                         | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to define the color of the item.                                                                                           | Bolt Blue                                                                                                                       |
| `customizations`                                                                                                                | [shared.CartItemCustomization](../../../sdk/models/shared/cartitemcustomization.md)[]                                           | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `description`                                                                                                                   | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `detailsUrl`                                                                                                                    | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to provide a link to the item's product page.                                                                              | https://boltswagstore.com/products/123456                                                                                       |
| `giftOption`                                                                                                                    | [shared.GiftOptionView](../../../sdk/models/shared/giftoptionview.md)                                                           | :heavy_minus_sign:                                                                                                              | Defines which gift options are hidden.                                                                                          |                                                                                                                                 |
| `hide`                                                                                                                          | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `imageUrl`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to provide a link to the image associated with the item.                                                                   | https://boltswagstore.com/products/123456/images/1.png                                                                          |
| `isbn`                                                                                                                          | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to define the International Standard Book Number associated with the book.                                                 | 9780091347314                                                                                                                   |
| `itemGroup`                                                                                                                     | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `manufacturer`                                                                                                                  | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to define the organization that manufactured the item.                                                                     | Bolt Textiles USA                                                                                                               |
| `merchantProductId`                                                                                                             | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `merchantVariantId`                                                                                                             | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `msrp`                                                                                                                          | [shared.AmountView](../../../sdk/models/shared/amountview.md)                                                                   | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `name`                                                                                                                          | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `options`                                                                                                                       | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `properties`                                                                                                                    | [shared.Properties](../../../sdk/models/shared/properties.md)[]                                                                 | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `quantity`                                                                                                                      | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             | 1                                                                                                                               |
| `reference`                                                                                                                     | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `shipmentId`                                                                                                                    | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `shipmentType`                                                                                                                  | [shared.ICartItemViewShipmentType](../../../sdk/models/shared/icartitemviewshipmenttype.md)                                     | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `shopifyLineItemReference`                                                                                                      | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `shopifyProductReference`                                                                                                       | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `shopifyProductVariantReference`                                                                                                | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `size`                                                                                                                          | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to define the size of the item.                                                                                            | Large                                                                                                                           |
| `sku`                                                                                                                           | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to define an alpha-numeric Stock Keeping Unit associated with the item as it is mapped to your internal product catalogue. | BOLT-SKU_100                                                                                                                    |
| `subscription`                                                                                                                  | [shared.Subscription](../../../sdk/models/shared/subscription.md)                                                               | :heavy_minus_sign:                                                                                                              | Describes a product added as a recurring subscription.                                                                          |                                                                                                                                 |
| `tags`                                                                                                                          | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to define a comma-separated list of tags associated with the item.                                                         | tote, blue, linen, eco-friendly                                                                                                 |
| `taxAmount`                                                                                                                     | [shared.AmountView](../../../sdk/models/shared/amountview.md)                                                                   | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `taxable`                                                                                                                       | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `totalAmount`                                                                                                                   | [shared.AmountView](../../../sdk/models/shared/amountview.md)                                                                   | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `type`                                                                                                                          | [shared.ICartItemViewType](../../../sdk/models/shared/icartitemviewtype.md)                                                     | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `unitPrice`                                                                                                                     | [shared.AmountView](../../../sdk/models/shared/amountview.md)                                                                   | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `uom`                                                                                                                           | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to define the unit of measure used to describe the product.                                                                | inches                                                                                                                          |
| `upc`                                                                                                                           | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Used to define the 12-digit Universal Product Code (a barcode) associated with the item worldwide.                              | 825764603119                                                                                                                    |
| `weight`                                                                                                                        | [shared.IWeight](../../../sdk/models/shared/iweight.md)                                                                         | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |