/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CartItemCustomization } from "./cartitemcustomization";
import { CartItemProperty } from "./cartitemproperty";
import { CartShipment } from "./cartshipment";
import { ICartItemExternalInputs } from "./icartitemexternalinputs";
import { Expose, Type } from "class-transformer";

/**
 * Contains the gift option settings for wrapping and custom messages.
 */
export class CartItemGiftOption extends SpeakeasyBase {
    /**
     * The cost in cents.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cost" })
    cost?: number;

    /**
     * The merchant's unique ID for the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_product_id" })
    merchantProductId?: string;

    /**
     * Includes the gift message written by the shopper.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * Defines whether gift wrapping was requested.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "wrap" })
    wrap?: boolean;
}

export enum CartItemShipmentType {
    Unknown = "unknown",
    DoorDelivery = "door_delivery",
    ShipToStore = "ship_to_store",
    InStorePickup = "in_store_pickup",
}

export enum CartItemType {
    Unknown = "unknown",
    Digital = "digital",
    Physical = "physical",
    Bundled = "bundled",
}

export class CartItem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "brand" })
    brand?: string;

    /**
     * Used to define a product category associated with the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collections" })
    collections?: string[];

    /**
     * Used to define the color of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "color" })
    color?: string;

    @SpeakeasyMetadata({ elemType: CartItemCustomization })
    @Expose({ name: "customizations" })
    @Type(() => CartItemCustomization)
    customizations?: CartItemCustomization[];

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Used to provide a link to the item's product page.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "details_url" })
    detailsUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "external_inputs" })
    @Type(() => ICartItemExternalInputs)
    externalInputs?: ICartItemExternalInputs;

    /**
     * Contains the gift option settings for wrapping and custom messages.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gift_option" })
    @Type(() => CartItemGiftOption)
    giftOption?: CartItemGiftOption;

    /**
     * Used to provide a link to the image associated with the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "image_url" })
    imageUrl?: string;

    /**
     * Used to define the International Standard Book Number associated with the book.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isbn" })
    isbn?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "item_group" })
    itemGroup?: string;

    /**
     * Used to define the organization that manufactured the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "manufacturer" })
    manufacturer?: string;

    /**
     * The merchant's unique ID for the product.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_product_id" })
    merchantProductId?: string;

    /**
     * A merchant's unique ID for a given product's specific variant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_variant_id" })
    merchantVariantId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "msrp" })
    msrp?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "options" })
    options?: string;

    @SpeakeasyMetadata({ elemType: CartItemProperty })
    @Expose({ name: "properties" })
    @Type(() => CartItemProperty)
    properties?: CartItemProperty[];

    @SpeakeasyMetadata()
    @Expose({ name: "quantity" })
    quantity: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference: string;

    /**
     * A cart that is being prepared for shipment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shipment" })
    @Type(() => CartShipment)
    shipment?: CartShipment;

    @SpeakeasyMetadata()
    @Expose({ name: "shipment_type" })
    shipmentType?: CartItemShipmentType;

    /**
     * Used to define the size of the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: string;

    /**
     * Used to define the alpha-numberic Stock Keeping Unit associated with the item as it is mapped to your internal product catalogue.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source?: string;

    /**
     * Used to define a comma-separated list of tags associated with the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string;

    /**
     * The tax amount for the item; this value should scale with the quantity of units selected.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tax_amount" })
    taxAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "tax_code" })
    taxCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "taxable" })
    taxable?: boolean;

    /**
     * The total amount, in cents, of the item including its taxes if applicable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total_amount" })
    totalAmount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: CartItemType;

    /**
     * The price of one unit of the item; for example, the price of one pack of socks.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unit_price" })
    unitPrice: number;

    /**
     * Used to define the unit of measure used to describe the item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uom" })
    uom?: string;

    /**
     * Used to define the 12-digit Universal Product Code (a barcode) associated with the item worldwide.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "upc" })
    upc?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "weight" })
    weight?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "weight_unit" })
    weightUnit?: string;
}