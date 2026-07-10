/**
 * ==========================================================
 * CHARACTER ATLAS
 * DOM UTILITIES
 * ----------------------------------------------------------
 * Common helper functions for DOM manipulation.
 * ==========================================================
 */

/**
 * Select a single element.
 *
 * @param {string} selector
 * @returns {Element|null}
 */
export function $(selector) {
    return document.querySelector(selector);
}

/**
 * Select multiple elements.
 *
 * @param {string} selector
 * @returns {NodeListOf<Element>}
 */
export function $$(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Create an HTML element.
 *
 * @param {string} tagName
 * @returns {HTMLElement}
 */
export function create(tagName) {
    return document.createElement(tagName);
}

/**
 * Remove all child elements.
 *
 * @param {HTMLElement} element
 */
export function clear(element) {
    element.replaceChildren();
}