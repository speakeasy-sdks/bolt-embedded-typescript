/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorBoltApi } from "./errorboltapi";
import { RequestResult } from "./requestresult";
import { Expose, Type } from "class-transformer";

export class ErrorsBoltApiResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ErrorBoltApi })
    @Expose({ name: "errors" })
    @Type(() => ErrorBoltApi)
    errors?: ErrorBoltApi[];

    /**
     * Custom-defined Bolt result object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "result" })
    @Type(() => RequestResult)
    result?: RequestResult;
}
