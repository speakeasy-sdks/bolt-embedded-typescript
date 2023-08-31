/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateTransactionSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key" })
    xAPIKey: string;
}

/**
 * Update a Transaction
 */
export class UpdateTransactionRequestBody extends SpeakeasyBase {
    /**
     * This field corresponds to the merchant's order reference associated with this Bolt transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "display_id" })
    displayId?: string;

    /**
     * Custom metadata associated with this Bolt transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, string>;
}

export class UpdateTransactionRequest extends SpeakeasyBase {
    /**
     * A key created by merchants that ensures `POST` and `PATCH` requests are only performed once. [Read more about Idempotent Requests here](/developers/references/idempotency/).
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Idempotency-Key" })
    idempotencyKey?: string;

    /**
     * This is the Bolt transaction reference. (ex. N7Y3-NFKC-VFRF)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=REFERENCE" })
    reference: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: UpdateTransactionRequestBody;
}

/**
 * **Nullable** for Transactions Details.
 *
 * @remarks
 *
 */
export enum UpdateTransaction200ApplicationJSONSplitsType {
    Net = "net",
    ProcessingFee = "processing_fee",
    BoltFee = "bolt_fee",
    Adjustment = "adjustment",
    Float = "float",
    Reserve = "reserve",
}

/**
 * A split of fees by type and amount.
 */
export class UpdateTransaction200ApplicationJSONSplits extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    @Type(() => shared.AmountView)
    amount?: shared.AmountView;

    /**
     * **Nullable** for Transactions Details.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: UpdateTransaction200ApplicationJSONSplitsType;
}

export class UpdateTransaction200ApplicationJSONTransactionRejectionDetailsAuthRejectionDetails extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "reason_code" })
    reasonCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reason_description" })
    reasonDescription?: string;
}

export class UpdateTransaction200ApplicationJSONTransactionRejectionDetails extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "auth_rejection_details" })
    @Type(() => UpdateTransaction200ApplicationJSONTransactionRejectionDetailsAuthRejectionDetails)
    authRejectionDetails?: UpdateTransaction200ApplicationJSONTransactionRejectionDetailsAuthRejectionDetails;
}

/**
 * Transaction Details Retrieved
 *
 * @remarks
 *
 */
export class UpdateTransaction200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "address_change_request_metadata" })
    @Type(() => shared.AddressChangeRequestMetadataView)
    addressChangeRequestMetadata?: shared.AddressChangeRequestMetadataView;

    /**
     * **Nullable** for Transactions Details.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: shared.TransactionView })
    @Expose({ name: "adjust_transactions" })
    @Type(() => shared.TransactionView)
    adjustTransactions?: shared.TransactionView[];

    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    @Type(() => shared.AmountView)
    amount?: shared.AmountView;

    /**
     * Used to track the status of micro-authorizations. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "auth_verification_status" })
    authVerificationStatus?: shared.AuthorizationVerificationStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "authorization" })
    @Type(() => shared.CreditCardAuthorizationView)
    authorization?: shared.CreditCardAuthorizationView;

    /**
     * The authorization's id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authorization_id" })
    authorizationId?: string;

    /**
     * Deprecated. Use `captures`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "capture" })
    @Type(() => shared.Capture)
    capture?: shared.Capture;

    /**
     * All captures associated with the transaction. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata({ elemType: shared.Capture })
    @Expose({ name: "captures" })
    @Type(() => shared.Capture)
    captures?: shared.Capture[];

    @SpeakeasyMetadata()
    @Expose({ name: "chargeback_details" })
    @Type(() => shared.ChargebackDetails)
    chargebackDetails?: shared.ChargebackDetails;

    @SpeakeasyMetadata()
    @Expose({ name: "credit" })
    @Type(() => shared.Credit)
    credit?: shared.Credit;

    @SpeakeasyMetadata()
    @Expose({ name: "custom_fields" })
    @Type(() => shared.CustomFields)
    customFields?: shared.CustomFields;

    @SpeakeasyMetadata()
    @Expose({ name: "customer_list_status" })
    @Type(() => shared.CustomerListStatus)
    customerListStatus?: shared.CustomerListStatus;

    /**
     * Transaction date. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date?: number;

    /**
     * The credit card user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "from_consumer" })
    @Type(() => shared.CreditCardUser)
    fromConsumer?: shared.CreditCardUser;

    /**
     * **Nullable** for Transactions Details.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "from_consumer_membership_users" })
    @Type(() => shared.ConsumerUserMembership)
    fromConsumerMembershipUsers?: shared.ConsumerUserMembership;

    /**
     * Contains details about the credit card transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "from_credit_card" })
    @Type(() => shared.CreditCardView)
    fromCreditCard?: shared.CreditCardView;

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
    indemnificationDecision?: shared.TransactionIndemnificationDecision;

    /**
     * Describes the reason that the transaction is or is not indemnified by Bolt for fraud.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "indemnification_reason" })
    indemnificationReason?: shared.TransactionIndemnificationReason;

    /**
     * The card's last 4 digits. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4?: string;

    /**
     * The last view time as UTC.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_viewed_utc" })
    lastViewedUtc?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "manual_disputes" })
    @Type(() => shared.ManualDisputes)
    manualDisputes?: shared.ManualDisputes;

    @SpeakeasyMetadata()
    @Expose({ name: "merchant" })
    @Type(() => shared.Merchant)
    merchant?: shared.Merchant;

    @SpeakeasyMetadata()
    @Expose({ name: "merchant_division" })
    @Type(() => shared.MerchantDivision)
    merchantDivision?: shared.MerchantDivision;

    /**
     * The merchant's internal order number for this transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_order_number" })
    merchantOrderNumber?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order" })
    @Type(() => shared.OrderView)
    order?: shared.OrderView;

    /**
     * Decision and score for an order.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "order_decision" })
    @Type(() => shared.OrderDecision)
    orderDecision?: shared.OrderDecision;

    @SpeakeasyMetadata()
    @Expose({ name: "platform_metadata" })
    platformMetadata?: Record<string, string>;

    /**
     * The processor used. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "processor" })
    processor?: shared.TransactionProcessor;

    /**
     * The transaction's 12-digit Bolt reference ID. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    reference?: string;

    /**
     * **Nullable** for Transactions Details.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "refund_transaction_ids" })
    refundTransactionIds?: string[];

    /**
     * **Nullable** for Transactions Details.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: shared.TransactionView })
    @Expose({ name: "refund_transactions" })
    @Type(() => shared.TransactionView)
    refundTransactions?: shared.TransactionView[];

    @SpeakeasyMetadata()
    @Expose({ name: "refunded_amount" })
    @Type(() => shared.AmountView)
    refundedAmount?: shared.AmountView;

    /**
     * Internal use only.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "review_ticket" })
    @Type(() => shared.ReviewTicket)
    reviewTicket?: shared.ReviewTicket;

    /**
     * Displays fraud decisioning insights based on key factors. This information can either be forwarded via a `risk_insights` transaction webhook type or be polled by sending a `GET` request to Bolt's [transactions endpoint](/api-bolt/#operation/transaction-details).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "risk_insights" })
    @Type(() => shared.RiskInsightsYml)
    riskInsights?: shared.RiskInsightsYml;

    /**
     * Describes the current Risk Review status. A transaction could be unreviewed, reviewed, or pending manual review by the Bolt team.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "risk_review_status" })
    riskReviewStatus?: shared.RiskReviewStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "risk_score" })
    riskScore?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "source_transaction" })
    @Type(() => shared.TransactionView)
    sourceTransaction?: shared.TransactionView;

    /**
     * A list of splits. **Nullable** for Transactions Details.
     */
    @SpeakeasyMetadata({ elemType: UpdateTransaction200ApplicationJSONSplits })
    @Expose({ name: "splits" })
    @Type(() => UpdateTransaction200ApplicationJSONSplits)
    splits?: UpdateTransaction200ApplicationJSONSplits[];

    /**
     * The transaction's status.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: shared.TransactionStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "timeline" })
    @Type(() => shared.TransactionTimelineView)
    timeline?: shared.TransactionTimelineView;

    @SpeakeasyMetadata()
    @Expose({ name: "to_consumer" })
    @Type(() => shared.ConsumerSelfView)
    toConsumer?: shared.ConsumerSelfView;

    /**
     * Contains details about the credit card transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to_credit_card" })
    @Type(() => shared.CreditCardView)
    toCreditCard?: shared.CreditCardView;

    @SpeakeasyMetadata()
    @Expose({ name: "transaction_properties" })
    transactionProperties?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "transaction_rejection_details" })
    @Type(() => UpdateTransaction200ApplicationJSONTransactionRejectionDetails)
    transactionRejectionDetails?: UpdateTransaction200ApplicationJSONTransactionRejectionDetails;

    /**
     * The type of transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: shared.TransactionType;

    @SpeakeasyMetadata()
    @Expose({ name: "view_status" })
    viewStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "void" })
    @Type(() => shared.Void)
    void?: shared.Void;

    @SpeakeasyMetadata()
    @Expose({ name: "void_cause" })
    voidCause?: string;
}

export class UpdateTransactionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Generic Error Schema
     */
    @SpeakeasyMetadata()
    errorsBoltApiResponse?: shared.ErrorsBoltApiResponse;

    /**
     * Transaction Details Retrieved
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    updateTransaction200ApplicationJSONObject?: UpdateTransaction200ApplicationJSON;
}