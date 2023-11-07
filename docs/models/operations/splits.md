# Splits

A split of fees by type and amount.


## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `amount`                                               | [shared.AmountView](../../models/shared/amountview.md) | :heavy_minus_sign:                                     | N/A                                                    |                                                        |
| `type`                                                 | [operations.TypeT](../../models/operations/typet.md)   | :heavy_minus_sign:                                     | **Nullable** for Transactions Details.<br/>            | processing_fee                                         |