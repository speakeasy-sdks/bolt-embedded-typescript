/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CartView } from "./cartview";
import { IOrderDynamicContent } from "./iorderdynamiccontent";
import { OrderExternalDataView } from "./orderexternaldataview";
import { Expose, Type } from "class-transformer";

export class OrderView extends SpeakeasyBase {
    /**
     * This is the cart object returned in a successful response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cart" })
    @Type(() => CartView)
    cart?: CartView;

    @SpeakeasyMetadata()
    @Expose({ name: "dynamic_content" })
    @Type(() => IOrderDynamicContent)
    dynamicContent?: IOrderDynamicContent;

    @SpeakeasyMetadata()
    @Expose({ name: "external_data" })
    @Type(() => OrderExternalDataView)
    externalData?: OrderExternalDataView;

    @SpeakeasyMetadata()
    @Expose({ name: "platform_user_id" })
    platformUserId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "requires_action" })
    requiresAction?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "token" })
    token?: string;

    /**
     * Used by shoppers to make extra requests or provide details for gift messages.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_note" })
    userNote?: string;
}