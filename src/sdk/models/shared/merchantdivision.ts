/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MerchantLogo } from "./merchantlogo";
import { MerchantPlatform } from "./merchantplatform";
import { WebhooksType } from "./webhookstype";
import { Expose, Type } from "class-transformer";

export class MerchantDivision extends SpeakeasyBase {
    /**
     * The URL provided by the merchant for the account page.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "account_page_url" })
    accountPageUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "api_base_domain_url" })
    apiBaseDomainUrl?: string;

    /**
     * The endpoint URL provided by the merchant to Bolt for creating orders. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "create_order_url" })
    createOrderUrl?: string;

    /**
     * The endpoint URL provided by the merchant for debugging.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "debug_url" })
    debugUrl?: string;

    /**
     * The description of the merchant division. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * The endpoint URL provided by the merchant to fetch accounts.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "get_account_url" })
    getAccountUrl?: string;

    /**
     * [Webhook events](https://help.bolt.com/developers/guides/webhooks/#transaction-hook-types) that trigger a notification to the URL.  **Note**:`newsletter_subscription` is only for merchant use cases.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hook_type" })
    hookType?: WebhooksType;

    /**
     * The endpoint URL provided by the merchant to send webhooks.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hook_url" })
    hookUrl?: string;

    /**
     * The unique ID associated to the merchant's Bolt Account division; Merchants can have different divisions to suit multiple use cases (storefronts, pay-by-link, phone order processing). You can view and switch between these divisions from the Bolt Merchant Dashboard.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Defines whether or not the Universal API method is in use. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_universal_merchant_api" })
    isUniversalMerchantApi: boolean;

    /**
     * Defines whether or not the second version of Bolt's webhooks is in use. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_webhooks_v2" })
    isWebhooksV2: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "logo" })
    @Type(() => MerchantLogo)
    logo?: MerchantLogo;

    /**
     * The unique ID for the merchant's Bolt account. A merchant account contains many merchant divisions. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_id" })
    merchantId: string;

    /**
     * The endpoint URL provided by the merchant for logging out of OAuth accounts.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauth_logout_url" })
    oauthLogoutUrl?: string;

    /**
     * The endpoint URL provided by the merchant for OAuth redirects.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauth_redirect_url" })
    oauthRedirectUrl?: string;

    /**
     * The type of platform being used for this merchant division.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platform" })
    platform?: MerchantPlatform;

    /**
     * The endpoint URL provided by the merchant for checking plugin configuration details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "plugin_config_url" })
    pluginConfigUrl?: string;

    /**
     * The endpoint URL provided by the merchant for providing a unique privacy policy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "privacy_policy_url" })
    privacyPolicyUrl?: string;

    /**
     * The endpoint URL provided by the merchant for checking product details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "product_info_url" })
    productInfoUrl?: string;

    /**
     * The unique public ID for one of the merchant's store division.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public_id" })
    publicId?: string;

    /**
     * The endpoint URL provided by the merchant to Bolt for shipping and tax calculations.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shipping_and_tax_url" })
    shippingAndTaxUrl?: string;

    /**
     * The endpoint URL provided by the merchant to Bolt for shipping calculations. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shipping_url" })
    shippingUrl: string;

    /**
     * The endpoint URL provided by the merchant to Bolt for tax calculations. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_url" })
    taxUrl: string;

    /**
     * The endpoint URL provided by the merchant for providing unique terms of service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "terms_of_service_url" })
    termsOfServiceUrl?: string;

    /**
     * The endpoint URL provided by the merchant to access their universal API.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "universal_merchant_api_url" })
    universalMerchantApiUrl?: string;

    /**
     * The endpoint URL provided by the merchant to Bolt to pass cart updates.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "update_cart_url" })
    updateCartUrl?: string;

    /**
     * The endpoint URL provided by the merchant for validating additional account data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validate_additional_account_data_url" })
    validateAdditionalAccountDataUrl?: string;
}
