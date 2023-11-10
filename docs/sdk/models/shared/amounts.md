# Amounts

The amount. **Nullable** for Transactions Details.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `amount`                                                                        | *number*                                                                        | :heavy_check_mark:                                                              | The amount in cents. **Nullable** for Transactions Details.                     | 754                                                                             |
| `currency`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | The 3-digit ISO code for the currency. **Nullable** for Transactions Details.   | USD                                                                             |
| `currencySymbol`                                                                | *string*                                                                        | :heavy_check_mark:                                                              | The currency symbol used for the amount. **Nullable** for Transactions Details. | $                                                                               |