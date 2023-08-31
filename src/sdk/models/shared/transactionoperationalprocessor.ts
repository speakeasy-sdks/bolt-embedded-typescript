/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TransactionProcessor } from "./transactionprocessor";
import { TransactionProcessorStatus } from "./transactionprocessorstatus";
import { Expose } from "class-transformer";

export class TransactionOperationalProcessor extends SpeakeasyBase {
    /**
     * The processor used. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "processor" })
    processor: TransactionProcessor;

    /**
     * The processor's status. Only `primary` and `active` processor are displayed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: TransactionProcessorStatus;
}