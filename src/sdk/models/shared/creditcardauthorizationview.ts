/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CreditCardAuthorizationReason } from "./creditcardauthorizationreason";
import { CreditCardAuthorizationStatus } from "./creditcardauthorizationstatus";
import { Expose } from "class-transformer";

export enum CreditCardAuthorizationViewAvsResponse {
    Zero = "00",
    One = "01",
    Two = "02",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14",
    Twenty = "20",
    Thirty = "30",
    ThirtyOne = "31",
    ThirtyTwo = "32",
    ThirtyThree = "33",
    ThirtyFour = "34",
    Forty = "40",
    Adyen = "adyen_",
    AdyenA = "adyen_A",
    AdyenN = "adyen_N",
    AdyenU = "adyen_U",
    AdyenS = "adyen_S",
    AdyenR = "adyen_R",
    AdyenW = "adyen_W",
    AdyenT = "adyen_T",
    AdyenZ = "adyen_Z",
    AdyenD = "adyen_D",
    AdyenF = "adyen_F",
    AdyenM = "adyen_M",
    AdyenX = "adyen_X",
    AdyenY = "adyen_Y",
    AdyenB = "adyen_B",
    AdyenP = "adyen_P",
    AdyenC = "adyen_C",
    AdyenG = "adyen_G",
    AdyenI = "adyen_I",
    AdyenK = "adyen_K",
}

export enum CreditCardAuthorizationViewCvvResponse {
    M = "M",
    N = "N",
    P = "P",
    S = "S",
    U = "U",
    D = "D",
    X = "X",
    Y = "Y",
    One = "1",
    Two = "2",
    Three = "3",
    Pass = "pass",
    Fail = "fail",
    Unavailable = "unavailable",
    Unchecked = "unchecked",
    BraintreeM = "braintree_M",
    BraintreeN = "braintree_N",
    BraintreeU = "braintree_U",
    BraintreeB = "braintree_B",
    BraintreeA = "braintree_A",
    BraintreeI = "braintree_I",
    BraintreeS = "braintree_S",
    Cvv2 = "CVV2",
}

export enum CreditCardAuthorizationViewProcessor {
    Vantiv = "vantiv",
    AdyenPayfac = "adyen_payfac",
    AdyenGateway = "adyen_gateway",
    Stripe = "stripe",
    Braintree = "braintree",
    Cybersource = "cybersource",
    Nmi = "nmi",
    AuthorizeNet = "authorize_net",
    Radial = "radial",
    ShopifyPayments = "shopify_payments",
    Rocketgate = "rocketgate",
}

export class CreditCardAuthorizationView extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "auth" })
    auth?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "avs_response" })
    avsResponse?: CreditCardAuthorizationViewAvsResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "cvv_response" })
    cvvResponse?: CreditCardAuthorizationViewCvvResponse;

    /**
     * The reference ID associated with a transaction event (auth, capture, refund, void). This is an arbitrary identifier created by the merchant. Bolt does not enforce any uniqueness constraints on this ID. It is up to the merchant to generate identifiers that properly fulfill its needs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant_event_id" })
    merchantEventId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "processor" })
    processor?: CreditCardAuthorizationViewProcessor;

    /**
     * The reason code explaining the authorization status.
     *
     * @remarks
     *   * `1` - none
     *   * `2` - invalid_amount
     *   * `3` - invalid_cvv
     *   * `4` - invalid_cc_number
     *   * `5` - expired
     *   * `6` - risk
     *   * `7` - lost_stolen
     *   * `8` - call_issuer
     *   * `9` - invalid_merchant_for_card
     *   * `10` - unsupported_payment_method
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: CreditCardAuthorizationReason;

    /**
     * The status of the authorization request.
     *
     * @remarks
     *   * `1` - succeeded
     *   * `2` - declined
     *   * `3` - error
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: CreditCardAuthorizationStatus;
}