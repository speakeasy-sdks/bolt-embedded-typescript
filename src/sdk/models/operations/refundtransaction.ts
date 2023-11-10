/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class RefundTransactionSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    xAPIKey: string;
}

/**
 * Refund a Transaction
 */
export class RefundTransactionRequestBody extends SpeakeasyBase {
    /**
     * The amount in cents. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    /**
     * The 3-digit ISO code for the currency. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: string;

    /**
     * The reference ID associated with a transaction event (auth, capture, refund, void). This is an arbitrary identifier created by the merchant. Bolt does not enforce any uniqueness constraints on this ID. It is up to the merchant to generate identifiers that properly fulfill its needs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_event_id" })
    merchantEventId?: string;

    /**
     * Set to `true` to skip receiving a webhook notification from Bolt that is triggered by this update to the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "skip_hook_notification" })
    skipHookNotification?: boolean;

    /**
     * The transaction's 12-digit Bolt reference ID. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transaction_reference" })
    transactionReference: string;
}

export class RefundTransactionRequest extends SpeakeasyBase {
    /**
     * A key created by merchants that ensures `POST` and `PATCH` requests are only performed once. [Read more about Idempotent Requests here](/developers/references/idempotency/).
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Idempotency-Key" })
    idempotencyKey?: string;

    /**
     * Refund a Transaction
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: RefundTransactionRequestBody;
}

export class RefundTransactionResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Generic Error Schema
     */
    @SpeakeasyMetadata()
    errorsBoltApiResponse?: shared.ErrorsBoltApiResponse;

    /**
     * Refund Successful
     */
    @SpeakeasyMetadata()
    transactionView?: shared.TransactionView;
}
