/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class CreateTestingShopperAccountSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    xAPIKey: string;
}

/**
 * The status of the shopper account identifier (email or phone). If the account does not have this identifier, the status is "missing"; If the identifier has been used to receive an OTP code, the status is "verified"; If the identifier has not been used to receive an OTP code, the status is "unverified".
 */
export enum CreateTestingShopperAccountRequestBodyEmailState {
    Missing = "missing",
    Verified = "verified",
    Unverified = "unverified",
}

export class CreateTestingShopperAccountRequestBody extends SpeakeasyBase {
    /**
     * Number of days after which the test account is deactivated. Default: 30 days. Maximum: 180 days.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deactivate_in_days" })
    deactivateInDays?: number;

    /**
     * Deprecated. Please leave this field absent and let the API automatically generate a random email.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * The status of the shopper account identifier (email or phone). If the account does not have this identifier, the status is "missing"; If the identifier has been used to receive an OTP code, the status is "verified"; If the identifier has not been used to receive an OTP code, the status is "unverified".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email_state" })
    emailState?: CreateTestingShopperAccountRequestBodyEmailState;

    /**
     * Add a random U.S. address to the created account if set to `true`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "has_address" })
    hasAddress?: boolean;

    /**
     * Set this account as migrated by the merchant in the request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "migrated" })
    migrated?: boolean;

    /**
     * Deprecated. Please leave this field absent and let the API automatically generate a random phone number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    /**
     * The status of the shopper account identifier (email or phone). If the account does not have this identifier, the status is "missing"; If the identifier has been used to receive an OTP code, the status is "verified"; If the identifier has not been used to receive an OTP code, the status is "unverified".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone_state" })
    phoneState?: shared.Onev11testing1shopper1createPostRequestBodyContentApplication1jsonSchemaPropertiesEmailState;
}

export class CreateTestingShopperAccountRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateTestingShopperAccountRequestBody;

    /**
     * The publicly viewable identifier used to identify a merchant division. This key is found in the Developer > API section of the Bolt Merchant Dashboard [RECOMMENDED].
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Publishable-Key" })
    xPublishableKey?: string;
}

/**
 * Testing Account Created
 */
export class CreateTestingShopperAccount200ApplicationJSON extends SpeakeasyBase {
    /**
     * An email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * The status of the shopper account identifier (email or phone). If the account does not have this identifier, the status is "missing"; If the identifier has been used to receive an OTP code, the status is "verified"; If the identifier has not been used to receive an OTP code, the status is "unverified".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email_state" })
    emailState?: shared.Onev11testing1shopper1createPostRequestBodyContentApplication1jsonSchemaPropertiesEmailState;

    /**
     * The merchant's public id if the account is migrated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "migrated_merchant_owner_id" })
    migratedMerchantOwnerId?: string;

    /**
     * OAuth code that is associated with this account and can be used to exchange for an access token
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauth_code" })
    oauthCode?: string;

    /**
     * Fixed OTP code that can be used to login to the created account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "otp_code" })
    otpCode?: string;

    /**
     * A phone number following E164 standards, in its globalized format, i.e. prepended with a plus sign.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone" })
    phone?: string;

    /**
     * The status of the shopper account identifier (email or phone). If the account does not have this identifier, the status is "missing"; If the identifier has been used to receive an OTP code, the status is "verified"; If the identifier has not been used to receive an OTP code, the status is "unverified".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone_state" })
    phoneState?: shared.Onev11testing1shopper1createPostRequestBodyContentApplication1jsonSchemaPropertiesEmailState;

    /**
     * The created testing account will be deactivated after this date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "will_deactivate_at" })
    willDeactivateAt?: string;
}

export class CreateTestingShopperAccountResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Testing Account Created
     */
    @SpeakeasyMetadata()
    createTestingShopperAccount200ApplicationJSONObject?: CreateTestingShopperAccount200ApplicationJSON;
}
