/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

/**
 * Describes the reason that the transaction is or is not indemnified by Bolt for fraud.
 *
 * @remarks
 *
 */
export enum TransactionIndemnificationReason {
    Unknown = "unknown",
    Checkout = "checkout",
    VirtualTerminal = "virtual_terminal",
    MerchantBackOffice = "merchant_back_office",
    MerchantForceApproved = "merchant_force_approved",
    ReversiblyRejected = "reversibly_rejected",
    IrreversiblyRejected = "irreversibly_rejected",
    RiskEngineApproved = "risk_engine_approved",
    AnalystApproved = "analyst_approved",
    AuthVerification = "auth_verification",
    Paypal = "paypal",
    Afterpay = "afterpay",
    DirectPayments = "direct_payments",
    Whitelist = "whitelist",
    ExternalReview = "external_review",
    Affirm = "affirm",
    MerchantIpAddress = "merchant_ip_address",
    AmazonPay = "amazon_pay",
    ApplePay = "apple_pay",
    PhoneOrder = "phone_order",
    Klarna = "klarna",
    CardholderAuthentication = "cardholder_authentication",
    AddressChangeRejected = "address_change_rejected",
    IndemnifyDirectPayments = "indemnify_direct_payments",
    IndemnifyVirtualTerminal = "indemnify_virtual_terminal",
    MembershipSubscription = "membership_subscription",
    EmbeddedGuestCheckout = "embedded_guest_checkout",
    RiskAssessmentOnly = "risk_assessment_only",
    Sezzle = "sezzle",
    Credova = "credova",
    Subscription = "subscription",
    IndemnifyApmTransaction = "indemnify_apm_transaction",
}
