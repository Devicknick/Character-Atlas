/* import { loadApplicationData } from "../services/data-loader.js";

export async function initializeApplication() {

    console.log("=================================");
    console.log("Character Atlas");
    console.log("Initializing...");
    console.log("=================================");

    const database = await loadApplicationData();

    console.log(database);

} */


    /**
 * ==========================================================
 * CHARACTER ATLAS
 * APPLICATION CORE
 * ----------------------------------------------------------
 * Application entry after DOM is ready.
 * Loads data and renders homepage sections.
 * ==========================================================
 */

import { loadApplicationData } from "../services/data-loader.js";

import { renderNovels } from "../renderers/novel-renderer.js";

import { renderCharacters } from "../renderers/character-renderer.js";

import { renderUpdates } from "../renderers/update-renderer.js";

/**
 * Initialize application.
 */
export async function initializeApplication() {

    console.log("==================================");
    console.log("Character Atlas");
    console.log("Initializing...");
    console.log("==================================");

    try {

        /*
        ===================================
        Load database
        ===================================
        */

        const database = await loadApplicationData();

        console.log(database);

        /*
        ===================================
        Render Homepage
        ===================================
        */

        renderNovels(database.novels);

        renderCharacters(database.characters);

        renderUpdates(database.events);

        console.log("Homepage rendered successfully.");

    }

    catch (error) {

        console.error(
            "Application initialization failed:",
            error
        );

    }

}