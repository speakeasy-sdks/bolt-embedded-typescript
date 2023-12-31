/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Defines which gift options are hidden.
 */
export class GiftOptionView extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "hide_gift_message" })
    hideGiftMessage?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "hide_gift_wrap" })
    hideGiftWrap?: boolean;
}
