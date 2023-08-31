/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Void a Transaction
 */
export class CreditCardVoid extends SpeakeasyBase {
    /**
     * The reference ID associated with a transaction event (auth, capture, refund, void). This is an arbitrary identifier created by the merchant. Bolt does not enforce any uniqueness constraints on this ID. It is up to the merchant to generate identifiers that properly fulfill its needs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_event_id" })
    merchantEventId?: string;

    /**
     * Set to `true` to skip receiving a webhook notification from Bolt that is triggered by this update to the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "skip_hook_notification" })
    skipHookNotification?: boolean;

    /**
     * The transaction's 12-digit Bolt reference ID. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transaction_reference" })
    transactionReference: string;
}