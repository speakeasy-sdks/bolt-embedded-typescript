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
 * Create Embedded Accounts user flows for logged-in and guest experiences by interacting with and updating shopper data.
 *
 * @remarks
 *
 */

export class Account {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Add Address
     *
     * @remarks
     * Add an address to a shopper's account address book.
     */
    async addAddress(
        req: operations.AddAddressRequest,
        security: operations.AddAddressSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.AddAddressResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddAddressRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/account/addresses";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "addressAccount", "json");
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
            security = new operations.AddAddressSecurity(security);
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

        const res: operations.AddAddressResponse = new operations.AddAddressResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.addAddress200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.AddAddress200ApplicationJSON
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
     * Add Payment Method
     *
     * @remarks
     * Add a payment method to a shopper's Bolt account Wallet. For security purposes, this request must come from your backend because authentication requires the use of your private key.
     *
     * **Note**: Before using this API, the credit card details must be tokenized using Bolt's JavaScript library function, which is documented in [Install the Bolt Tokenizer](https://help.bolt.com/developers/references/bolt-tokenizer).
     *
     */
    async addPaymentMethod(
        req: operations.AddPaymentMethodRequest,
        security: operations.AddPaymentMethodSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.AddPaymentMethodResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddPaymentMethodRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/account/payment_methods";

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
            security = new operations.AddPaymentMethodSecurity(security);
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

        const res: operations.AddPaymentMethodResponse = new operations.AddPaymentMethodResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.savedCreditCardView = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.SavedCreditCardView
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
     * Create Bolt Account
     *
     * @remarks
     * Create a Bolt shopping account.
     */
    async createAccount(
        req: operations.CreateAccountRequest,
        security: operations.CreateAccountSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateAccountResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateAccountRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/account";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "createAccountInput",
                "json"
            );
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
            security = new operations.CreateAccountSecurity(security);
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

        const res: operations.CreateAccountResponse = new operations.CreateAccountResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.accountDetails = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.AccountDetails
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
     * Delete Address
     *
     * @remarks
     * Deletes an existing address in a shopper's address book.
     *
     */
    async deleteAddress(
        req: operations.DeleteAddressRequest,
        security: operations.DeleteAddressSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteAddressResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteAddressRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/account/addresses/{id}", req);
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
            security = new operations.DeleteAddressSecurity(security);
        }
        const localProperties = utils.parseSecurityProperties(security);
        properties = {
            params: { ...properties.params, ...localProperties.params },
            headers: { ...properties.headers, ...localProperties.headers },
        };
        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "*/*";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteAddressResponse = new operations.DeleteAddressResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                break;
        }

        return res;
    }

    /**
     * Delete Payment Method
     *
     * @remarks
     * Delete a saved payment method from a shopper's Bolt account Wallet.
     */
    async deletePaymentMethod(
        req: operations.DeletePaymentMethodRequest,
        security: operations.DeletePaymentMethodSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.DeletePaymentMethodResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeletePaymentMethodRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/account/payment_methods/{payment_method_id}",
            req
        );
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
            security = new operations.DeletePaymentMethodSecurity(security);
        }
        const localProperties = utils.parseSecurityProperties(security);
        properties = {
            params: { ...properties.params, ...localProperties.params },
            headers: { ...properties.headers, ...localProperties.headers },
        };
        const headers = {
            ...utils.getHeadersFromRequest(req),
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
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeletePaymentMethodResponse =
            new operations.DeletePaymentMethodResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
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
     * Detect Account
     *
     * @remarks
     * Check whether an account exists using one of `email`, `phone`, or `sha256_email` as the unique identifier.
     */
    async detectAccount(
        req: operations.DetectAccountRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DetectAccountResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DetectAccountRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/account/exists";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DetectAccountResponse = new operations.DetectAccountResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.v1AccountsView = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.V1AccountsView
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
     * Edit Address
     *
     * @remarks
     * Edit an existing address in a shopper's address book.
     * This endpoint fully replaces the information for an existing address while retaining the same address ID.
     *
     */
    async editAddress(
        req: operations.EditAddressRequest,
        security: operations.EditAddressSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.EditAddressResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.EditAddressRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/account/addresses/{id}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "addressAccount", "json");
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
            security = new operations.EditAddressSecurity(security);
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
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.EditAddressResponse = new operations.EditAddressResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.editAddress200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.EditAddress200ApplicationJSON
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
     * Get Account Details
     *
     * @remarks
     * Fetch a shopper's account details to pre-fill checkout fields. This request must come from your backend for security purposes, as it requires the use of your private key to authenticate. For PCI compliance, only limited information is returned for each credit card available in the shopper’s wallet.
     */
    async getAccount(
        req: operations.GetAccountRequest,
        security: operations.GetAccountSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetAccountResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/account";
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
            security = new operations.GetAccountSecurity(security);
        }
        const localProperties = utils.parseSecurityProperties(security);
        properties = {
            params: { ...properties.params, ...localProperties.params },
            headers: { ...properties.headers, ...localProperties.headers },
        };
        const headers = {
            ...utils.getHeadersFromRequest(req),
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
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetAccountResponse = new operations.GetAccountResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.accountDetails = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.AccountDetails
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
     * Replace Address
     *
     * @remarks
     * Replace an existing address in a shopper's address book.
     * These changes delete the existing address and create a new one.
     *
     */
    async replaceAddress(
        req: operations.ReplaceAddressRequest,
        security: operations.ReplaceAddressSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ReplaceAddressResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ReplaceAddressRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/account/addresses/{id}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "addressAccount", "json");
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
            security = new operations.ReplaceAddressSecurity(security);
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

        const res: operations.ReplaceAddressResponse = new operations.ReplaceAddressResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.replaceAddress200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.ReplaceAddress200ApplicationJSON
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
     * Update Profile
     *
     * @remarks
     * Update the identifiers for a shopper's profile (first name or last name).
     */
    async updateAccountProfile(
        req: operations.UpdateAccountProfileRequest,
        security: operations.UpdateAccountProfileSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateAccountProfileResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateAccountProfileRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/account/profile";

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
            security = new operations.UpdateAccountProfileSecurity(security);
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

        const res: operations.UpdateAccountProfileResponse =
            new operations.UpdateAccountProfileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.profileView = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ProfileView
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
