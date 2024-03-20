/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Successfully Fetched Credit Card Token
 */
export class GetTestCreditCardTokenResponseBody extends SpeakeasyBase {
    /**
     * The credit card bin.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bin" })
    bin?: string;

    /**
     * The date at which the token expires. A token must be used within 15 minutes of creation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiry" })
    expiry?: number;

    /**
     * The last 4 digits of the card number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4?: string;

    /**
     * The credit card network.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "network" })
    network?: string;

    /**
     * The newly generated credit card token.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token" })
    token?: string;
}

export class GetTestCreditCardTokenResponse extends SpeakeasyBase {
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
     * Successfully Fetched Credit Card Token
     */
    @SpeakeasyMetadata()
    object?: GetTestCreditCardTokenResponseBody;
}
