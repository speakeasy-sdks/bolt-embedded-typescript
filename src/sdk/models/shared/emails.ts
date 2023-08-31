/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmailPriority } from "./emailpriority";
import { EmailStatus } from "./emailstatus";
import { Expose } from "class-transformer";

/**
 * An object of user email.
 */
export class Emails extends SpeakeasyBase {
    /**
     * An email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "address" })
    address?: string;

    /**
     * This is the ID for the email address associated with the shopper.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * This is the priority of the contact method. This field's contents are not displayed in the transaction details view.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "priority" })
    priority?: EmailPriority;

    /**
     * This is the status of the contact method.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: EmailStatus;
}