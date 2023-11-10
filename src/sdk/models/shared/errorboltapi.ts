/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Error object containing custom error information
 */
export class ErrorBoltApi extends SpeakeasyBase {
    /**
     * Custom-defined Bolt error code. This can be used to programmatically react to specific errors.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    /**
     * Human-readable description of the error for developers. Should not be shown to users and is not localized.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}
