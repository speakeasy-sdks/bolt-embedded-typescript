/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class VoidTransactionSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    xAPIKey: string;
}

export class VoidTransactionRequest extends SpeakeasyBase {
    /**
     * A key created by merchants that ensures `POST` and `PATCH` requests are only performed once. [Read more about Idempotent Requests here](/developers/references/idempotency/).
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Idempotency-Key" })
    idempotencyKey?: string;

    /**
     * Void a Transaction
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    creditCardVoid?: shared.CreditCardVoid;
}

export class VoidTransactionResponse extends SpeakeasyBase {
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
    rawResponse: AxiosResponse;

    /**
     * Generic Error Schema
     */
    @SpeakeasyMetadata()
    errorsBoltApiResponse?: shared.ErrorsBoltApiResponse;

    /**
     * Void Successful
     */
    @SpeakeasyMetadata()
    transactionView?: shared.TransactionView;
}
