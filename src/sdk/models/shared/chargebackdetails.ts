/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AmountView } from "./amountview";
import { ChargebackEventView } from "./chargebackeventview";
import { ChargebackReasonCode } from "./chargebackreasoncode";
import { ChargebackRepresentmentResult } from "./chargebackrepresentmentresult";
import { Expose, Type } from "class-transformer";

export class ChargebackDetails extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amt_won" })
    @Type(() => AmountView)
    amtWon?: AmountView;

    @SpeakeasyMetadata()
    @Expose({ name: "chargeback_amt" })
    @Type(() => AmountView)
    chargebackAmt?: AmountView;

    @SpeakeasyMetadata()
    @Expose({ name: "chargeback_fee" })
    @Type(() => AmountView)
    chargebackFee?: AmountView;

    /**
     * The unique ID of the chargeback.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "chargeback_id" })
    chargebackId?: string;

    @SpeakeasyMetadata({ elemType: ChargebackEventView })
    @Expose({ name: "event_views" })
    @Type(() => ChargebackEventView)
    eventViews?: ChargebackEventView[];

    @SpeakeasyMetadata()
    @Expose({ name: "net_amt" })
    @Type(() => AmountView)
    netAmt?: AmountView;

    /**
     * The reason for the chargeback.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: string;

    /**
     * Bolt's [standardized reason codes](https://help.bolt.com/merchants/references/policies/disputes/dispute-codes/).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason_code" })
    reasonCode?: ChargebackReasonCode;

    /**
     * The date of the chargeback.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "representment_reply_by_date" })
    representmentReplyByDate?: number;

    /**
     * The result of the chargeback representment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "representment_result" })
    representmentResult?: ChargebackRepresentmentResult;
}
