/**
 * ==========================================================
 * CHARACTER ATLAS
 * CHARACTER RENDERER
 * ----------------------------------------------------------
 * Renders character entities into homepage.
 *
 * Phase 4:
 * Uses entity normalization layer.
 * ==========================================================
 */


import { renderEntity }
from "./entity-renderer.js";


import { renderSection }
from "./section-renderer.js";


import { normalizeEntity }
from "../utils/entity.js";



/**
 * Render character cards.
 *
 * @param {Array<Object>} characters
 */
export function renderCharacters(characters) {



    const normalizedCharacters =

        characters.map(

            character =>

                normalizeEntity(
                    character,
                    "character"
                )

        );



    /*
    ==================================================
    PHASE 4 CHANGE

    Flow:

    Before:

    characters
        |
        ↓
    renderEntity()


    After:

    characters
        |
        ↓
    normalizeEntity()
        |
        ↓
    renderEntity()


    Reason:

    All entities must follow
    one internal contract.

    ==================================================
    */


    renderSection(

        "#character-container",

        normalizedCharacters,

        renderEntity

    );


}