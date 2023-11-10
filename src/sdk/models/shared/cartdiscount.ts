/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum DiscountCategory {
    Coupon = "coupon",
    Giftcard = "giftcard",
    ManagedGiftcard = "managed_giftcard",
    StoreCredit = "store_credit",
    AutomaticPromotion = "automatic_promotion",
    MembershipDiscount = "membership_discount",
    MembershipGiftcard = "membership_giftcard",
    SubscriptionDiscount = "subscription_discount",
    RewardsDiscount = "rewards_discount",
    Unknown = "unknown",
}

/**
 * The type of discount.
 */
export enum TypeT {
    FixedAmount = "fixed_amount",
    Percentage = "percentage",
    FreeShipping = "free_shipping",
}

export class CartDiscount extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * Used to define the discount offering.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Used to provide a link to additional details, such as a landing page, associated with the discount offering.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "details_url" })
    detailsUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "discount_category" })
    discountCategory?: DiscountCategory;

    /**
     * Used to define the reference ID associated with the discount available.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    /**
     * The type of discount.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TypeT;
}
