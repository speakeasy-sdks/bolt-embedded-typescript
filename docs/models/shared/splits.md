# Splits

A split of fees by type and amount.


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `amount`                                                  | [shared.AmountView](../../models/shared/amountview.md)    | :heavy_minus_sign:                                        | N/A                                                       |                                                           |
| `type`                                                    | [shared.CaptureType](../../models/shared/capturetype.md)  | :heavy_minus_sign:                                        | Fee type options. **Nullable** for Transactions Details.<br/> | processing_fee                                            |