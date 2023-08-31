/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Account } from "./account";
import * as shared from "./models/shared";
import { OAuth } from "./oauth";
import { Payments } from "./payments";
import { Testing } from "./testing";
import { Transactions } from "./transactions";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * The Production URL (Live Data).
     */
    "https://api.bolt.com",
    /**
     * The Sandbox URL (Test Data).
     */
    "https://api-sandbox.bolt.com",
    /**
     * The Staging URL (Staged Data).
     */
    "https://api-staging.bolt.com",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.1";
    sdkVersion = "0.3.0";
    genVersion = "2.89.1";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Embedded API Reference: Postman Collection:
 *
 * @remarks
 *
 * [![](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/9136127-55d2bde1-a248-473f-95b5-64cfd02fb445?action=collection%2Ffork&collection-url=entityId%3D9136127-55d2bde1-a248-473f-95b5-64cfd02fb445%26entityType%3Dcollection%26workspaceId%3D78beee89-4238-4c5f-bd1f-7e98978744b4#?env%5BBolt%20Sandbox%20Environment%5D=W3sia2V5IjoiYXBpX2Jhc2VfdXJsIiwidmFsdWUiOiJodHRwczovL2FwaS1zYW5kYm94LmJvbHQuY29tIiwidHlwZSI6ImRlZmF1bHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InRrX2Jhc2UiLCJ2YWx1ZSI6Imh0dHBzOi8vc2FuZGJveC5ib2x0dGsuY29tIiwidHlwZSI6ImRlZmF1bHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImFwaV9rZXkiLCJ2YWx1ZSI6IjxyZXBsYWNlIHdpdGggeW91ciBCb2x0IFNhbmRib3ggQVBJIGtleT4iLCJ0eXBlIjoic2VjcmV0IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJwdWJsaXNoYWJsZV9rZXkiLCJ2YWx1ZSI6IjxyZXBsYWNlIHdpdGggeW91ciBCb2x0IFNhbmRib3ggcHVibGlzaGFibGUga2V5PiIsInR5cGUiOiJkZWZhdWx0IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJkaXZpc2lvbl9pZCIsInZhbHVlIjoiPHJlcGxhY2Ugd2l0aCB5b3VyIEJvbHQgU2FuZGJveCBwdWJsaWMgZGl2aXNpb24gSUQ+IiwidHlwZSI6ImRlZmF1bHQiLCJlbmFibGVkIjp0cnVlfV0=)
 *
 * ## About
 * The Embedded API reference is a consolidation of critical APIs that a developer will use when integrating with Bolt's Embedded Accounts product suite.
 *
 */
export class BoltEmbeddedApi {
    /**
     * Create Embedded Accounts user flows for logged-in and guest experiences by interacting with and updating shopper data.
     *
     * @remarks
     *
     */
    public account: Account;
    /**
     * Interact with Shopper data by completing the Bolt OAuth process.
     *
     * @remarks
     *
     */
    public oAuth: OAuth;
    /**
     * Create and manage transactions for non credit card payments such as Paypal in your Embedded Accounts experience.
     *
     * @remarks
     *
     */
    public payments: Payments;
    /**
     * A collection of endpoints that provide useful functionality to assist in testing your Bolt integration.
     *
     * @remarks
     *
     */
    public testing: Testing;
    /**
     * Authorize credit card transactions and perform operations on those transactions with Bolt's transaction API.
     *
     * @remarks
     *
     */
    public transactions: Transactions;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.account = new Account(this.sdkConfiguration);
        this.oAuth = new OAuth(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.testing = new Testing(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}