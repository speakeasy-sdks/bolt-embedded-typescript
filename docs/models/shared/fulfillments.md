# Fulfillments

Defines the shipments associated with the cart items.


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `cartItems`                                                              | [shared.CartItem](../../models/shared/cartitem.md)[]                     | :heavy_minus_sign:                                                       | N/A                                                                      |
| `cartShipment`                                                           | [shared.CartShipment](../../models/shared/cartshipment.md)               | :heavy_minus_sign:                                                       | A cart that is being prepared for shipment                               |
| `digitalDelivery`                                                        | [shared.DigitalDelivery](../../models/shared/digitaldelivery.md)         | :heavy_minus_sign:                                                       | N/A                                                                      |
| `inStoreCartShipment`                                                    | [shared.InStoreCartShipment](../../models/shared/instorecartshipment.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `type`                                                                   | [shared.CartCreateType](../../models/shared/cartcreatetype.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |