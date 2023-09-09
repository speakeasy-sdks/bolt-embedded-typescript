/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { ProfileView } from "./profileview";
import { Expose, Type } from "class-transformer";

/**
 * The address object returned in the response.
 */
export class AccountDetailsAddresses extends SpeakeasyBase {
    /**
     * The company name associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    /**
     * The name of the country associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

    /**
     * The ISO 3166-1 alpha-2 country code associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country_code" })
    countryCode?: string;

    /**
     * The default shipping address chosen by the shopper.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "default" })
    default?: boolean;

    /**
     * The building door code or community gate code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "door_code" })
    doorCode?: string;

    /**
     * An email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email_address" })
    emailAddress?: string;

    /**
     * The given name of the person associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    /**
     * The unique Bolt ID associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The surname of the person associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    /**
     * The city name details associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "locality" })
    locality?: string;

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

    /**
     * The given and surname of the person associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * A phone number following E164 standards, in its globalized format, i.e. prepended with a plus sign.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phone_number" })
    phoneNumber?: string;

    /**
     * The postal or zip code associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode?: string;

    /**
     * The region details such as state or province associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region?: string;

    /**
     * The the ISO 3166-2 region code associated with this address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region_code" })
    regionCode?: string;

    /**
     * The street number and street name of the address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "street_address1" })
    streetAddress1?: string;

    /**
     * Any apartment, floor, or unit details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "street_address2" })
    streetAddress2?: string;

    /**
     * Any additional street address details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "street_address3" })
    streetAddress3?: string;

    /**
     * Any additional street address details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "street_address4" })
    streetAddress4?: string;
}

export class AccountDetails extends SpeakeasyBase {
    /**
     * A list of all addresses associated to the shopper's account.
     */
    @SpeakeasyMetadata({ elemType: AccountDetailsAddresses })
    @Expose({ name: "addresses" })
    @Type(() => AccountDetailsAddresses)
    addresses?: AccountDetailsAddresses[];

    /**
     * Used to determine whether a Bolt Account exists with this shopper's account details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "has_bolt_account" })
    hasBoltAccount?: boolean;

    /**
     * A list of all payment methods associated to the shopper's account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payment_methods" })
    paymentMethods?: any[];

    /**
     * The shopper's account profile.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(() => ProfileView)
    profile?: ProfileView;
}
