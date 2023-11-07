/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class DeletePaymentMethodSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    oAuth: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    xAPIKey: string;
}

export class DeletePaymentMethodRequest extends SpeakeasyBase {
    /**
     * The publicly viewable identifier used to identify a merchant division. This key is found in the Developer > API section of the Bolt Merchant Dashboard [RECOMMENDED].
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Publishable-Key" })
    xPublishableKey?: string;

    /**
     * The ID for a payment method in the shopper's Bolt account Wallet. This ID can be obtained using [Get Account Details](#tag/Account/operation/GetAccountDetails).
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_method_id" })
    paymentMethodId: string;
}

export class DeletePaymentMethodResponse extends SpeakeasyBase {
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
     * Forbidden
     */
    @SpeakeasyMetadata()
    errorsBoltApiResponse?: shared.ErrorsBoltApiResponse;
}
