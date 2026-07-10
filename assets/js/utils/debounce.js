/**
 * ==========================================================
 * CHARACTER ATLAS
 * DEBOUNCE UTILITIES
 * ----------------------------------------------------------
 * Delay function execution until the user stops triggering
 * the event for a specified amount of time.
 * This utility will be tested when we develop features that 
 * require high-frequency events (e.g. search).
 * ==========================================================
 */

/**
 * Creates a debounced version of a function.
 *
 * @param {Function} callback
 * @param {number} delay
 * @returns {Function}
 */
export function debounce(callback, delay = 300) {

    let timeoutId = null;

    return (...args) => {

        clearTimeout(timeoutId);

        timeoutId = window.setTimeout(() => {

            callback(...args);

        }, delay);

    };

}