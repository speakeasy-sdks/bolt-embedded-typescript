/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class OrderDecisionDetailsView extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "decision_factors" })
    decisionFactors?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "score" })
    score?: number;
}
