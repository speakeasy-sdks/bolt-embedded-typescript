/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class AuthorizeTransactionSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    oAuth: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    xAPIKey: string;
}

export class AuthorizeTransactionRequest extends SpeakeasyBase {
    /**
     * A key created by merchants that ensures `POST` and `PATCH` requests are only performed once. [Read more about Idempotent Requests here](/developers/references/idempotency/).
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Idempotency-Key" })
    idempotencyKey?: string;

    /**
     * **Authorize a Transaction**
     *
     * @remarks
     * * • `merchant_credit_card_authorization`: For authorizing with a new, unsaved card. This can be for a guest checkout flow, one-time payment, or an existing Bolt shopper.
     * * • `merchant_credit_card_authorization_recharge`: For authorizing a card using a shoppers saved payment methods.
     * * • **Anytime the shopper is paying while logged-in attach their OAuth `access_token` to the request.**
     *
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: any;

    /**
     * The publicly viewable identifier used to identify a merchant division. This key is found in the Developer > API section of the Bolt Merchant Dashboard [RECOMMENDED].
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Publishable-Key" })
    xPublishableKey?: string;
}

export class AuthorizeTransactionResponse extends SpeakeasyBase {
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
     * Authorization Successful
     */
    @SpeakeasyMetadata()
    iAuthorizeResultView?: shared.IAuthorizeResultView;
}
