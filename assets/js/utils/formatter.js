/**
 * ==========================================================
 * CHARACTER ATLAS
 * FORMATTER UTILITIES
 * ----------------------------------------------------------
 * Common formatting helper functions.
 * ==========================================================
 */

/**
 * Convert text to Title Case.
 *
 * Example:
 * "lord of the mysteries"
 * =>
 * "Lord Of The Mysteries"
 *
 * @param {string} text
 * @returns {string}
 */
export function titleCase(text = "") {

    return text
        .toLowerCase()
        .split(" ")
        .filter(Boolean)
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");

}

/**
 * Convert snake_case into readable text.
 *
 * Example:
 * sequence_0
 * =>
 * Sequence 0
 *
 * @param {string} text
 * @returns {string}
 */
export function humanize(text = "") {

    return titleCase(
        text.replaceAll("_", " ")
    );

}

/**
 * Truncate long text.
 *
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(text = "", maxLength = 120) {

    if (text.length <= maxLength) {
        return text;
    }

    return text.slice(0, maxLength).trimEnd() + "...";

}

/**
 * Format ISO date into locale date.
 *
 * @param {string} date
 * @returns {string}
 */
export function formatDate(date) {

    return new Date(date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );

}