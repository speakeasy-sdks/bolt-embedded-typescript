# PhonesWithCountryCode

A phone number with country code.


## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `countryCode`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | A phone number's country code.                                                                                       | 1                                                                                                                    |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | This is the ID for the phone number associated with the shopper.                                                     | 123                                                                                                                  |
| `number`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | A phone number following E164 standards, in its globalized format, i.e. prepended with a plus sign.                  | +12125550199                                                                                                         |
| `priority`                                                                                                           | [PhonePriority](../../models/shared/phonepriority.md)                                                                | :heavy_minus_sign:                                                                                                   | This is the priority of the contact method. This field's contents are not displayed in the transaction details view. | primary                                                                                                              |
| `status`                                                                                                             | [PhoneStatus](../../models/shared/phonestatus.md)                                                                    | :heavy_minus_sign:                                                                                                   | This is the status of the contact method.                                                                            | active                                                                                                               |