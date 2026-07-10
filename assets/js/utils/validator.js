/**
 * ==========================================================
 * CHARACTER ATLAS
 * VALIDATOR UTILITIES
 * ----------------------------------------------------------
 * Common validation helper functions.
 * ==========================================================
 */

/**
 * Check if value is null or undefined.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isNil(value) {
    return value === null || value === undefined;
}

/**
 * Check if value is a string.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isString(value) {
    return typeof value === "string";
}

/**
 * Check if string is empty after trimming.
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isEmpty(value) {

    if (!isString(value)) {
        return true;
    }

    return value.trim().length === 0;

}

/**
 * Check if value is an array.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isArray(value) {
    return Array.isArray(value);
}

/**
 * Check if value is a plain object.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isObject(value) {

    return (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
    );

}

/**
 * Check if object has a property.
 *
 * @param {Object} object
 * @param {string} property
 * @returns {boolean}
 */
export function hasProperty(object, property) {

    if (!isObject(object)) {
        return false;
    }

    return Object.prototype.hasOwnProperty.call(
        object,
        property
    );

}