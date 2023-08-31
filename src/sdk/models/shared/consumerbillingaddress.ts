/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ConsumerBillingAddress extends SpeakeasyBase {
    /**
     * The company's name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    /**
     * The country's name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country" })
    country?: string;

    /**
     * The 2-digit country code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "country_code" })
    countryCode?: string;

    /**
     * An email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email_address" })
    emailAddress?: string;

    /**
     * The person's first name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    /**
     * The unique Bolt ID associated with a previously saved billing address. Not applicable to new, unsaved addresses.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The person's last name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

    /**
     * A locale such as county, district, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "locality" })
    locality: string;

    /**
     * The first and last name together as a string.
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
     * The postal code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "postal_code" })
    postalCode: string;

    /**
     * A state, province, or similar region type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: string;

    /**
     * You can use up to 4 street address fields.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "street_address1" })
    streetAddress1: string;

    /**
     * You can use up to 4 street address fields.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "street_address2" })
    streetAddress2?: string;

    /**
     * You can use up to 4 street address fields.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "street_address3" })
    streetAddress3?: string;

    /**
     * You can use up to 4 street address fields.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "street_address4" })
    streetAddress4?: string;
}