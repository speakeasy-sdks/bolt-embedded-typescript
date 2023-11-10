# OrderDecision

Decision and score for an order.


## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `decisionFactors`                                                                     | [shared.RiskDecisionFactorYml](../../../sdk/models/shared/riskdecisionfactoryml.md)[] | :heavy_minus_sign:                                                                    | The top 5 factors of the fraud decision.                                              |                                                                                       |
| `score`                                                                               | *number*                                                                              | :heavy_minus_sign:                                                                    | The total fraud risk score of the order.                                              | 680                                                                                   |