/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CaptureTransactionRequest extends SpeakeasyBase {
    /**
     * A key created by merchants that ensures `POST` and `PATCH` requests are only performed once. [Read more about Idempotent Requests here](/developers/references/idempotency/).
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Idempotency-Key" })
    idempotencyKey?: string;

    /**
     * Capture a Transaction
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    captureTransactionWithReference?: shared.CaptureTransactionWithReference;
}

export class Errors extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "field" })
    field?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class Result extends SpeakeasyBase {}

/**
 * Unprocessable Entity
 */
export class CaptureTransactionResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Errors })
    @Expose({ name: "errors" })
    @Type(() => Errors)
    errors?: Errors[];

    @SpeakeasyMetadata()
    @Expose({ name: "result" })
    @Type(() => Result)
    result?: Result;
}

export class CaptureTransactionResponse extends SpeakeasyBase {
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
     * Unprocessable Entity
     */
    @SpeakeasyMetadata()
    object?: CaptureTransactionResponseBody;

    /**
     * Capture Successful
     */
    @SpeakeasyMetadata()
    transactionView?: shared.TransactionView;
}
