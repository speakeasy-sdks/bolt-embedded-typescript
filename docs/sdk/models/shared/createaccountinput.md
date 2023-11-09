# CreateAccountInput

The details needed to create a Bolt account.


## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `addresses`                                                                         | [shared.AddressAccount](../../../sdk/models/shared/addressaccount.md)[]             | :heavy_minus_sign:                                                                  | A list of physical shipping addresses associated with this account.                 |
| `paymentMethods`                                                                    | [shared.PaymentMethodAccount](../../../sdk/models/shared/paymentmethodaccount.md)[] | :heavy_minus_sign:                                                                  | A list of payment methods associated with this account.                             |
| `profile`                                                                           | [shared.Profile](../../../sdk/models/shared/profile.md)                             | :heavy_check_mark:                                                                  | The first name, last name, email address, and phone number of a shopper.            |