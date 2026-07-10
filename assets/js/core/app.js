/* import { loadApplicationData } from "../services/data-loader.js";

export async function initializeApplication() {

    console.log("=================================");
    console.log("Character Atlas");
    console.log("Initializing...");
    console.log("=================================");

    const database = await loadApplicationData();

    console.log(database);

} */
import { loadApplicationData } from "../services/data-loader.js";

import { renderNovels } from "../renderers/novel-renderer.js";
import { renderCharacters } from "../renderers/character-renderer.js";
import { renderUpdates } from "../renderers/update-renderer.js";

import { logger } from "../utils/logger.js";

/**
 * Initialize application.
 */
export async function initializeApplication() {

    logger.info("==================================");
    logger.info("Character Atlas");
    logger.info("Initializing...");
    logger.info("==================================");

    try {

        const database = await loadApplicationData();

        logger.info(database);

        renderNovels(database.novels);
        renderCharacters(database.characters);
        renderUpdates(database.events);

        logger.success("Homepage rendered successfully.");

    }

    catch (error) {

        logger.error(
            "Application initialization failed:",
            error
        );

    }

}