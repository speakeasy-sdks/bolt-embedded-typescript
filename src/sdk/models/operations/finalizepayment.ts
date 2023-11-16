/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class FinalizePaymentSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    oAuth?: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    xAPIKey?: string;
}

/**
 * Identification information for the Shopper
 */
export class ShopperIdentity extends SpeakeasyBase {
    /**
     * determines whether to create a bolt account for this shopper
     */
    @SpeakeasyMetadata()
    @Expose({ name: "create_bolt_account" })
    createBoltAccount?: boolean;

    /**
     * Email address of the shopper
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * First name of the shopper
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName: string;

    /**
     * Last name of the shopper
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName: string;

    /**
     * Phone number of the shopper
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone: string;
}

export class FinalizePaymentRequestBody extends SpeakeasyBase {
    /**
     * The reference ID associated with a transaction event (auth, capture, refund, void). This is an arbitrary identifier created by the merchant. Bolt does not enforce any uniqueness constraints on this ID. It is up to the merchant to generate identifiers that properly fulfill its needs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_event_id" })
    merchantEventId?: string;

    /**
     * Identification information for the Shopper
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shopper_identity" })
    @Type(() => ShopperIdentity)
    shopperIdentity?: ShopperIdentity;
}

export class FinalizePaymentRequest extends SpeakeasyBase {
    /**
     * A key created by merchants that ensures `POST` and `PATCH` requests are only performed once. [Read more about Idempotent Requests here](/developers/references/idempotency/).
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Idempotency-Key" })
    idempotencyKey?: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: FinalizePaymentRequestBody;

    /**
     * The ID received in the initial v1/payments request.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class Paypal extends SpeakeasyBase {
    /**
     * An email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;
}

/**
 * The current payment status.
 */
export enum Status {
    AwaitingUserConfirmation = "awaiting_user_confirmation",
    PaymentReady = "payment_ready",
    Success = "success",
}

export class Transaction extends SpeakeasyBase {
    /**
     * The Bolt transaction reference (can be used to fetch transaction details, capture, void or refund transaction)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;
}

/**
 * Payment Token Retrieved
 */
export class FinalizePaymentResponseBody extends SpeakeasyBase {
    /**
     * The ID for the given Payment Attempt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * ID of the payment method in Bolt's system, only if the payment method is saved.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_method_id" })
    paymentMethodId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paypal" })
    @Type(() => Paypal)
    paypal?: Paypal;

    /**
     * The current payment status.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: Status;

    @SpeakeasyMetadata()
    @Expose({ name: "transaction" })
    @Type(() => Transaction)
    transaction?: Transaction;
}

export class FinalizePaymentResponse extends SpeakeasyBase {
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
     * Payment Token Retrieved
     */
    @SpeakeasyMetadata()
    object?: FinalizePaymentResponseBody;
}
