/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class IFreeShippingDiscountView extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "is_free_shipping" })
    isFreeShipping?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "maximum_cost_allowed" })
    maximumCostAllowed?: number;
}
