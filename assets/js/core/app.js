/**
 * ==========================================================
 * assets/js/core/app.js
 * CHARACTER ATLAS
 * APPLICATION CORE
 * ----------------------------------------------------------
 * Application initialization layer.
 *
 * Responsible for:
 * - Loading database
 * - Starting render process
 *
 * Does not handle:
 * - Entity formatting
 * - Section logic
 * - Card creation
 * ==========================================================
 */


import { loadApplicationData }
from "../services/data-loader.js";


import { renderNovels }
from "../renderers/novel-renderer.js";


import { renderCharacters }
from "../renderers/character-renderer.js";


import { renderUpdates }
from "../renderers/update-renderer.js";


import { logger }
from "../utils/logger.js";



/**
 * Initialize application.
 */
export async function initializeApplication() {


    logger.info("==================================");

    logger.info("Character Atlas");

    logger.info("Initializing...");

    logger.info("==================================");



    try {


        const database =
            await loadApplicationData();



        logger.info(database);



        /*
        ==================================
        DOMAIN RENDERERS

        Each renderer controls its own section.

        Example:

        Novel renderer:
        - filter featured novels
        - send to entity renderer

        Character renderer:
        - render character entities

        ==================================
        */


        renderNovels(
            database.novels
        );



        renderCharacters(
            database.characters
        );



        /*
        ==================================
        UPDATE SYSTEM

        Still independent because
        update is not entity card yet.

        ==================================
        */


        renderUpdates(
            database.events
        );



        logger.success(
            "Homepage rendered successfully."
        );


    }


    catch(error) {


        logger.error(

            "Application initialization failed:",

            error

        );


    }


}