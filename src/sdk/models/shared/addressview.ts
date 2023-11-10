/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The address object returned in the response.
 */
export class AddressView extends SpeakeasyBase {
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
