/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Metadata } from "./metadata";
import { Expose, Type } from "class-transformer";

export enum Network {
    Unknown = "unknown",
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Discover = "discover",
    DinersClubUsCa = "diners_club_us_ca",
    Jcb = "jcb",
    Unionpay = "unionpay",
    Alliancedata = "alliancedata",
    Citiplcc = "citiplcc",
}

/**
 * Used to indicate the card's priority. '1' indicates primary, while '2' indicates a secondary card.
 *
 * @remarks
 *
 */
export enum PaymentMethodAccountPriority {
    One = 1,
    Two = 2,
}

/**
 * Used to define which payment processor generated the token for this credit card.  For those using Bolt's tokenizer, the value must be `bolt`.
 *
 * @remarks
 *
 */
export enum TokenType {
    Vantiv = "vantiv",
    Applepay = "applepay",
    Bolt = "bolt",
    Stripe = "stripe",
    Plcc = "plcc",
}

/**
 * The `credit_card` object is used to to pay for guest checkout transactions or save payment method details to an account. Once saved, you can reference the credit card with the associated `credit_card_id` for future transactions.
 *
 * @remarks
 *
 */
export class PaymentMethodAccount extends SpeakeasyBase {
    /**
     * The Address object is used for billing, shipping, and physical store address use cases.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_address" })
    @Type(() => Address)
    billingAddress: Address;

    /**
     * The unique Bolt ID associated with a saved shopper address. This can be obtained by accessing a shopper's account details. If you use this field, you do not need to use `billing_address`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "billing_address_id" })
    billingAddressId?: string;

    /**
     * The Bank Identification Number for the credit card. This is typically the first 4-6 digits of the credit card number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bin" })
    bin?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "cryptogram" })
    cryptogram?: string;

    /**
     * Set this to true to make this the default payment method. There can be only one payment method with default set to true.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "default" })
    default?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "eci" })
    eci?: string;

    /**
     * The expiration date of the credit card.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiration" })
    expiration: string;

    /**
     * The last 4 digits of the credit card number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4?: string;

    /**
     * A key-value pair object that allows users to store arbitrary information associated with an object.  For any individual account object, we allow up to 50 keys. Keys can be up to 40 characters long and values can be up to 500 characters long.  Metadata should not contain any sensitive customer information, like PII (Personally Identifiable Information). For more information about metadata, see our [documentation](https://help.bolt.com/developers/references/embedded-metadata/).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "network" })
    network?: Network;

    /**
     * Used to provide ApplePay DPAN or private label credit card PAN when applicable. Required when charging a private label credit card.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "number" })
    number?: string;

    /**
     * Used for the postal or zip code associated with the credit card.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode?: string;

    /**
     * Used to indicate the card's priority. '1' indicates primary, while '2' indicates a secondary card.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "priority" })
    priority?: PaymentMethodAccountPriority;

    /**
     * Determines whether or not the credit card will be saved to the shopper's account. Defaults to `true`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "save" })
    save?: boolean;

    /**
     * The Bolt token associated to the credit card.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token" })
    token: string;

    /**
     * Used to define which payment processor generated the token for this credit card.  For those using Bolt's tokenizer, the value must be `bolt`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "token_type" })
    tokenType?: TokenType;
}
