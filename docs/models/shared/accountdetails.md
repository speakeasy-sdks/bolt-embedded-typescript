# AccountDetails

Account Details Fetched


## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `addresses`                                                                          | [AccountDetailsAddresses](../../models/shared/accountdetailsaddresses.md)[]          | :heavy_minus_sign:                                                                   | A list of all addresses associated to the shopper's account.                         |
| `hasBoltAccount`                                                                     | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Used to determine whether a Bolt Account exists with this shopper's account details. |
| `paymentMethods`                                                                     | *any*[]                                                                              | :heavy_minus_sign:                                                                   | A list of all payment methods associated to the shopper's account.                   |
| `profile`                                                                            | [ProfileView](../../models/shared/profileview.md)                                    | :heavy_minus_sign:                                                                   | The shopper's account profile.                                                       |