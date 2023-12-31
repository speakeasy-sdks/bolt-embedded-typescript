/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Expose, Type } from "class-transformer";

/**
 * The shopper's account profile.
 */
export class ProfileView extends SpeakeasyBase {
    /**
     * An email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * The given name of the person associated with this record.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "first_name" })
    firstName?: string;

    /**
     * The surname of the person associated with this record.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_name" })
    lastName?: string;

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
    @Expose({ name: "phone" })
    phone?: string;
}
