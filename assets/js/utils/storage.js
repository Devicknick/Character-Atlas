/**
 * ==========================================================
 * CHARACTER ATLAS
 * STORAGE UTILITIES
 * ----------------------------------------------------------
 * Wrapper around browser Local Storage.
 * 
 * Goal: 
 * Provide a simple API to consistently access Local Storage.
 * ==========================================================
 */

/**
 * Save a value into Local Storage.
 *
 * @param {string} key
 * @param {*} value
 */
export function set(key, value) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}

/**
 * Retrieve a value from Local Storage.
 *
 * @param {string} key
 * @param {*} defaultValue
 * @returns {*}
 */
export function get(key, defaultValue = null) {

    const value = localStorage.getItem(key);

    if (value === null) {
        return defaultValue;
    }

    return JSON.parse(value);

}

/**
 * Remove a value from Local Storage.
 *
 * @param {string} key
 */
export function remove(key) {

    localStorage.removeItem(key);

}

/**
 * Clear all Local Storage.
 */
export function clear() {

    localStorage.clear();

}