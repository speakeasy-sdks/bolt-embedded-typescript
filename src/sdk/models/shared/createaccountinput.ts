/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AddressAccount } from "./addressaccount";
import { PaymentMethodAccount } from "./paymentmethodaccount";
import { Profile } from "./profile";
import { Expose, Type } from "class-transformer";

/**
 * The details needed to create a Bolt account.
 */
export class CreateAccountInput extends SpeakeasyBase {
    /**
     * A list of physical shipping addresses associated with this account.
     */
    @SpeakeasyMetadata({ elemType: AddressAccount })
    @Expose({ name: "addresses" })
    @Type(() => AddressAccount)
    addresses?: AddressAccount[];

    /**
     * A list of payment methods associated with this account.
     */
    @SpeakeasyMetadata({ elemType: PaymentMethodAccount })
    @Expose({ name: "payment_methods" })
    @Type(() => PaymentMethodAccount)
    paymentMethods?: PaymentMethodAccount[];

    /**
     * The first name, last name, email address, and phone number of a shopper.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    @Type(() => Profile)
    profile: Profile;
}
