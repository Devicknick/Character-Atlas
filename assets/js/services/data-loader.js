/**
 * ==========================================================
 * CHARACTER ATLAS
 * DATA LOADER SERVICE
 * ----------------------------------------------------------
 * Load all JSON database files.
 * ==========================================================
 */

import { CONFIG } from "../core/config.js";
import { logger } from "../utils/logger.js";

const DATABASE_FILES = [

    "novels",
    "characters",
    "organizations",
    "races",
    "planets",
    "artifacts",
    "events"

];

/**
 * Load every JSON database.
 *
 * @returns {Promise<Object>}
 */
export async function loadApplicationData() {

    const database = {};

    for (const file of DATABASE_FILES) {

        logger.info(`Loading: ${file}`);

        const response = await fetch(
            `${CONFIG.DATA_DIRECTORY}/${file}.json`
        );

        logger.info(`${file} ${response.status}`);

        database[file] = await response.json();

    }

    return database;

}