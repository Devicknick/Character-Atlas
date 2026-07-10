/**
 * ==========================================================
 * CHARACTER ATLAS
 * LOGGER UTILITIES
 * ----------------------------------------------------------
 * Centralized logging utility.
 * ==========================================================
 */

import { CONFIG } from "../core/config.js";

/**
 * Log informational messages.
 *
 * @param {...any} message
 */
function info(...message) {

    if (!CONFIG.DEBUG) return;

    console.log(
        "[INFO]",
        ...message
    );

}

/**
 * Log warning messages.
 *
 * @param {...any} message
 */
function warn(...message) {

    if (!CONFIG.DEBUG) return;

    console.warn(
        "[WARN]",
        ...message
    );

}

/**
 * Log error messages.
 *
 * @param {...any} message
 */
function error(...message) {

    console.error(
        "[ERROR]",
        ...message
    );

}

/**
 * Log success messages.
 *
 * @param {...any} message
 */
function success(...message) {

    if (!CONFIG.DEBUG) return;

    console.log(
        "[SUCCESS]",
        ...message
    );

}

export const logger = {

    info,

    warn,

    error,

    success

};