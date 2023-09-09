/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AmountView } from "./amountview";
import { CaptureStatus } from "./capturestatus";
import { ConsumerSelfView } from "./consumerselfview";
import { CreditCardAuthorizationView } from "./creditcardauthorizationview";
import { CreditCardCaptureView } from "./creditcardcaptureview";
import { CreditCardCreditView } from "./creditcardcreditview";
import { CreditCardView } from "./creditcardview";
import { MerchantDivisionSummaryView } from "./merchantdivisionsummaryview";
import { OrderDecisionDetailsView } from "./orderdecisiondetailsview";
import { ReviewTicketView } from "./reviewticketview";
import { RiskModelExternalResultView } from "./riskmodelexternalresultview";
import { TransactionIndemnificationDecision } from "./transactionindemnificationdecision";
import { TransactionIndemnificationReason } from "./transactionindemnificationreason";
import { TransactionProcessor } from "./transactionprocessor";
import { TransactionSplitsView } from "./transactionsplitsview";
import { TransactionStatus } from "./transactionstatus";
import { TransactionType } from "./transactiontype";
import { Expose, Type } from "class-transformer";

/**
 * Fee type options. **Nullable** for Transactions Details.
 *
 * @remarks
 *
 */
export enum TransactionViewCaptureSplitsType {
    Net = "net",
    ProcessingFee = "processing_fee",
    RiskFee = "risk_fee",
    ApmFee = "apm_fee",
    NetworkFee = "network_fee",
    PlatformFee = "platform_fee",
    BoltAccountFee = "bolt_account_fee",
}

/**
 * A split of fees by type and amount.
 */
export class TransactionViewCaptureSplits extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    @Type(() => AmountView)
    amount?: AmountView;

    /**
     * Fee type options. **Nullable** for Transactions Details.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TransactionViewCaptureSplitsType;
}

/**
 * Deprecated. Use `captures`.
 */
export class TransactionViewCapture extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    @Type(() => AmountView)
    amount?: AmountView;

    /**
     * The unique ID for the capture. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The reference ID associated with a transaction event (auth, capture, refund, void). This is an arbitrary identifier created by the merchant. Bolt does not enforce any uniqueness constraints on this ID. It is up to the merchant to generate identifiers that properly fulfill its needs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_event_id" })
    merchantEventId?: string;

    /**
     * Additional information about the capture. For example, the processor capture ID. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, string>;

    /**
     * A split of fees by type and amount. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata({ elemType: TransactionViewCaptureSplits })
    @Expose({ name: "splits" })
    @Type(() => TransactionViewCaptureSplits)
    splits?: TransactionViewCaptureSplits[];

    /**
     * The status of the capture. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: CaptureStatus;
}

/**
 * Describes the current Risk Review status. A transaction could be unreviewed, reviewed, or pending manual review by the Bolt team.
 */
export enum TransactionViewRiskReviewStatus {
    Unknown = "unknown",
    NeedsReview = "needs_review",
    Reviewed = "reviewed",
}

export enum TransactionViewViewStatus {
    NotViewed = "not_viewed",
    Viewed = "viewed",
    Viewing = "viewing",
}

/**
 * Specifies why this particular transaction is voided.
 */
export enum TransactionViewVoidCause {
    MerchantAction = "merchant_action",
    PaypalSync = "paypal_sync",
    AmazonPaySync = "amazon_pay_sync",
    IrreversibleReject = "irreversible_reject",
    AuthExpire = "auth_expire",
    AuthVerificationExpired = "auth_verification_expired",
    PaymentMethodUpdater = "payment_method_updater",
    LessThanNilGreaterThan = "<nil>",
}

/**
 * The status of the void request.
 */
export enum TransactionViewVoidStatus {
    Succeeded = "succeeded",
    Declined = "declined",
    Error = "error",
}

export class TransactionViewVoid extends SpeakeasyBase {
    /**
     * Specifies why this particular transaction is voided.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cause" })
    cause?: TransactionViewVoidCause;

    /**
     * The reference ID associated with a transaction event (auth, capture, refund, void). This is an arbitrary identifier created by the merchant. Bolt does not enforce any uniqueness constraints on this ID. It is up to the merchant to generate identifiers that properly fulfill its needs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_event_id" })
    merchantEventId?: string;

    /**
     * The status of the void request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: TransactionViewVoidStatus;

    /**
     * The void ID returned from the payment processor.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "void" })
    void?: string;
}

export class TransactionView extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    @Type(() => AmountView)
    amount?: AmountView;

    @SpeakeasyMetadata()
    @Expose({ name: "authorization" })
    @Type(() => CreditCardAuthorizationView)
    authorization?: CreditCardAuthorizationView;

    /**
     * Deprecated. Use `captures`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "capture" })
    @Type(() => TransactionViewCapture)
    capture?: TransactionViewCapture;

    @SpeakeasyMetadata({ elemType: CreditCardCaptureView })
    @Expose({ name: "captures" })
    @Type(() => CreditCardCaptureView)
    captures?: CreditCardCaptureView[];

    @SpeakeasyMetadata()
    @Expose({ name: "credit" })
    @Type(() => CreditCardCreditView)
    credit?: CreditCardCreditView;

    /**
     * Transaction date. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "from_consumer" })
    @Type(() => ConsumerSelfView)
    fromConsumer?: ConsumerSelfView;

    /**
     * Contains details about the credit card transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "from_credit_card" })
    @Type(() => CreditCardView)
    fromCreditCard?: CreditCardView;

    /**
     * The unique ID associated with the transaction. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Describes whether the transaction is indemnified by Bolt for fraud.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "indemnification_decision" })
    indemnificationDecision?: TransactionIndemnificationDecision;

    /**
     * Describes the reason that the transaction is or is not indemnified by Bolt for fraud.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "indemnification_reason" })
    indemnificationReason?: TransactionIndemnificationReason;

    /**
     * The card's last 4 digits. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_viewed_utc" })
    lastViewedUtc?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "merchant_division" })
    @Type(() => MerchantDivisionSummaryView)
    merchantDivision?: MerchantDivisionSummaryView;

    @SpeakeasyMetadata()
    @Expose({ name: "merchant_order_number" })
    merchantOrderNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order_decision" })
    @Type(() => OrderDecisionDetailsView)
    orderDecision?: OrderDecisionDetailsView;

    /**
     * The processor used. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "processor" })
    processor?: TransactionProcessor;

    /**
     * The transaction's 12-digit Bolt reference ID. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "review_ticket" })
    @Type(() => ReviewTicketView)
    reviewTicket?: ReviewTicketView;

    @SpeakeasyMetadata()
    @Expose({ name: "risk_insights" })
    @Type(() => RiskModelExternalResultView)
    riskInsights?: RiskModelExternalResultView;

    /**
     * Describes the current Risk Review status. A transaction could be unreviewed, reviewed, or pending manual review by the Bolt team.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "risk_review_status" })
    riskReviewStatus?: TransactionViewRiskReviewStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "risk_score" })
    riskScore?: number;

    @SpeakeasyMetadata({ elemType: TransactionSplitsView })
    @Expose({ name: "splits" })
    @Type(() => TransactionSplitsView)
    splits?: TransactionSplitsView[];

    /**
     * The transaction's status.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: TransactionStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "to_consumer" })
    @Type(() => ConsumerSelfView)
    toConsumer?: ConsumerSelfView;

    /**
     * Contains details about the credit card transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to_credit_card" })
    @Type(() => CreditCardView)
    toCreditCard?: CreditCardView;

    @SpeakeasyMetadata()
    @Expose({ name: "transaction_properties" })
    transactionProperties?: Record<string, string>;

    /**
     * The type of transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: TransactionType;

    @SpeakeasyMetadata()
    @Expose({ name: "view_status" })
    viewStatus?: TransactionViewViewStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "void" })
    @Type(() => TransactionViewVoid)
    void?: TransactionViewVoid;
}
