/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class IDescriptionTooltip extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "html_content" })
    htmlContent?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "target" })
    target?: number;
}
