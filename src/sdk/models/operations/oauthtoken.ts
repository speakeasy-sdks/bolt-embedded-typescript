/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class OAuthTokenRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
    requestBody?: any;

    /**
     * The publicly viewable identifier used to identify a merchant division. This key is found in the Developer > API section of the Bolt Merchant Dashboard [RECOMMENDED].
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Publishable-Key" })
    xPublishableKey?: string;
}

export class OAuthTokenResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Invalid request to OAuth Token.
     */
    @SpeakeasyMetadata()
    errorsOauthServerResponse?: shared.ErrorsOauthServerResponse;

    /**
     * OAuth token response.
     */
    @SpeakeasyMetadata()
    oAuthTokenResponse?: shared.OAuthTokenResponse;
}
