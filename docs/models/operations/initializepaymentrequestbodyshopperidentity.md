# InitializePaymentRequestBodyShopperIdentity

Identification information for the Shopper. This is only required when creating a new Bolt account.


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `createBoltAccount`                                          | *boolean*                                                    | :heavy_minus_sign:                                           | determines whether to create a bolt account for this shopper | true                                                         |
| `email`                                                      | *string*                                                     | :heavy_check_mark:                                           | Email address of the shopper                                 |                                                              |
| `firstName`                                                  | *string*                                                     | :heavy_check_mark:                                           | First name of the shopper                                    |                                                              |
| `lastName`                                                   | *string*                                                     | :heavy_check_mark:                                           | Last name of the shopper                                     |                                                              |
| `phone`                                                      | *string*                                                     | :heavy_check_mark:                                           | Phone number of the shopper                                  |                                                              |