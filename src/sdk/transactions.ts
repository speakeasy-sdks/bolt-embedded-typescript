/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Authorize credit card transactions and perform operations on those transactions with Bolt's transaction API.
 *
 * @remarks
 *
 */

export class Transactions {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Authorize a Card
     *
     * @remarks
     * This endpoint authorizes card payments and has three main use cases:
     * * • Authorize a payment using an unsaved payment method for a guest or logged-in shopper.
     * * • Authorize a payment using a saved payment method for a logged-in shopper.
     * *  • Re-charge a previous transaction using the `credit_card_id` of the transaction.
     *
     */
    async authorizeTransaction(
        req: operations.AuthorizeTransactionRequest,
        security: operations.AuthorizeTransactionSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.AuthorizeTransactionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AuthorizeTransactionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/merchant/transactions/authorize";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.AuthorizeTransactionSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
        };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.AuthorizeTransactionResponse =
            new operations.AuthorizeTransactionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.iAuthorizeResultView = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.IAuthorizeResultView
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Capture a Transaction
     *
     * @remarks
     * This captures funds for the designated transaction. A capture can be done for any partial amount or for the total authorized amount.
     *
     * Although the response returns the standard `transaction_view` object, only `captures` and either `id` or `reference` are needed.
     *
     */
    async captureTransaction(
        req: operations.CaptureTransactionRequest,
        security: operations.CaptureTransactionSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CaptureTransactionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CaptureTransactionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/merchant/transactions/capture";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "captureTransactionWithReference",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.CaptureTransactionSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
        };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CaptureTransactionResponse =
            new operations.CaptureTransactionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.transactionView = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.TransactionView
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [403, 404].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorsBoltApiResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorsBoltApiResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.captureTransaction422ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.CaptureTransaction422ApplicationJSON
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Transaction Details
     *
     * @remarks
     * This allows you to pull the full transaction details for a given transaction.
     *
     *  **Note**: All objects and fields marked `required` in the Transaction Details response are also **nullable**. This includes any sub-components (objects or fields) also marked `required`.
     *
     */
    async getTransactionDetails(
        req: operations.GetTransactionDetailsRequest,
        security: operations.GetTransactionDetailsSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTransactionDetailsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTransactionDetailsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/merchant/transactions/{REFERENCE}",
            req
        );

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetTransactionDetailsSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTransactionDetailsResponse =
            new operations.GetTransactionDetailsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getTransactionDetails200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetTransactionDetails200ApplicationJSON
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [403, 422].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorsBoltApiResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorsBoltApiResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Refund a Transaction
     *
     * @remarks
     * This refunds a captured transaction. Refunds can be done for any partial amount or for the total authorized amount. These refunds are processed synchronously and return information about the refunded transaction in the standard `transaction_view` object.
     */
    async refundTransaction(
        req: operations.RefundTransactionRequest,
        security: operations.RefundTransactionSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.RefundTransactionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RefundTransactionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/merchant/transactions/credit";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.RefundTransactionSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
        };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.RefundTransactionResponse = new operations.RefundTransactionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.transactionView = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.TransactionView
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 422:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorsBoltApiResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorsBoltApiResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update a Transaction
     *
     * @remarks
     * This allows you to update certain transaction properties post-authorization.
     */
    async updateTransaction(
        req: operations.UpdateTransactionRequest,
        security: operations.UpdateTransactionSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateTransactionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateTransactionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/merchant/transactions/{REFERENCE}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateTransactionSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
        };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "patch",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateTransactionResponse = new operations.UpdateTransactionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateTransaction200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.UpdateTransaction200ApplicationJSON
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [403, 404].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorsBoltApiResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorsBoltApiResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Void a Transaction
     *
     * @remarks
     * This voids the authorization for a given transaction. Voids must be completed before the authorization is captured.
     * In the request, either `transaction_id` or `transaction_reference` is required.
     * Although the response returns the standard `transaction_view` object, only `status` and either `id` or `reference` are needed.
     *
     */
    async voidTransaction(
        req: operations.VoidTransactionRequest,
        security: operations.VoidTransactionSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.VoidTransactionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.VoidTransactionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/merchant/transactions/void";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "creditCardVoid", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.VoidTransactionSecurity(security);
        }
        const client: AxiosInstance = utils.createSecurityClient(
            this.sdkConfiguration.defaultClient,
            security
        );

        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
        };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.VoidTransactionResponse = new operations.VoidTransactionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.transactionView = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.TransactionView
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [403, 404].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorsBoltApiResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorsBoltApiResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
