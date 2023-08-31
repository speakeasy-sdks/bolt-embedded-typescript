# FinalizePaymentRequest


## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                                                                              | *string*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                            | A key created by merchants that ensures `POST` and `PATCH` requests are only performed once. [Read more about Idempotent Requests here](/developers/references/idempotency/). |
| `requestBody`                                                                                                                                                                 | [FinalizePaymentRequestBody](../../models/operations/finalizepaymentrequestbody.md)                                                                                           | :heavy_minus_sign:                                                                                                                                                            | N/A                                                                                                                                                                           |
| `id`                                                                                                                                                                          | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | The ID received in the initial v1/payments request.                                                                                                                           |