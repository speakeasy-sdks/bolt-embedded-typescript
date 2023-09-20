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
 * Create and manage transactions for non credit card payments such as Paypal in your Embedded Accounts experience.
 *
 * @remarks
 *
 */

export class Payments {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Finalize Payment
     *
     * @remarks
     * Finalize a Bolt Payment. NOTE: The authorization header is NOT required for payments associated with users who do not have a Bolt account.
     *
     */
    async finalizePayment(
        req: operations.FinalizePaymentRequest,
        security: operations.FinalizePaymentSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.FinalizePaymentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FinalizePaymentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/payments/{id}/finalize", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let properties: utils.SecurityProperties;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        properties = utils.parseSecurityProperties(globalSecurity);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.FinalizePaymentSecurity(security);
        }
        const localProperties = utils.parseSecurityProperties(security);
        properties = {
            params: { ...properties.params, ...localProperties.params },
            headers: { ...properties.headers, ...localProperties.headers },
        };
        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
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

        const res: operations.FinalizePaymentResponse = new operations.FinalizePaymentResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.finalizePayment200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.FinalizePayment200ApplicationJSON
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
            case httpRes?.status == 403:
                break;
        }

        return res;
    }

    /**
     * Initialize Payment
     *
     * @remarks
     * Initialize a Bolt payment token that will be used to reference this payment to Bolt when it is updated or finalized. NOTE: The authorization header is NOT required for payments associated with users who do not have a Bolt account.
     *
     */
    async initializePayment(
        req: operations.InitializePaymentRequest,
        security: operations.InitializePaymentSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.InitializePaymentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.InitializePaymentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/payments";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let properties: utils.SecurityProperties;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        properties = utils.parseSecurityProperties(globalSecurity);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.InitializePaymentSecurity(security);
        }
        const localProperties = utils.parseSecurityProperties(security);
        properties = {
            params: { ...properties.params, ...localProperties.params },
            headers: { ...properties.headers, ...localProperties.headers },
        };
        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
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

        const res: operations.InitializePaymentResponse = new operations.InitializePaymentResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.initializePayment200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.InitializePayment200ApplicationJSON
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
            case httpRes?.status == 403:
                break;
        }

        return res;
    }

    /**
     * Update Payment
     *
     * @remarks
     * Update a Bolt payment using the token given after initializing a payment.  Updates will completely replace the original top-level resource (for example, if a cart is sent in with the request it will replace the existing cart).  Any included object should be sent as complete object. NOTE: The authorization header is NOT required for payments associated with users who do not have a Bolt account.
     *
     */
    async updatePayment(
        req: operations.UpdatePaymentRequest,
        security: operations.UpdatePaymentSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdatePaymentResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdatePaymentRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/payments/{id}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let properties: utils.SecurityProperties;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        properties = utils.parseSecurityProperties(globalSecurity);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdatePaymentSecurity(security);
        }
        const localProperties = utils.parseSecurityProperties(security);
        properties = {
            params: { ...properties.params, ...localProperties.params },
            headers: { ...properties.headers, ...localProperties.headers },
        };
        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
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

        const res: operations.UpdatePaymentResponse = new operations.UpdatePaymentResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updatePayment200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.UpdatePayment200ApplicationJSON
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
            case httpRes?.status == 403:
                break;
        }

        return res;
    }
}
