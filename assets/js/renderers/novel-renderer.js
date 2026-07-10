/**
 * ==========================================================
 * CHARACTER ATLAS
 * NOVEL RENDERER
 * ----------------------------------------------------------
 * Render featured novels into homepage.
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
 * Render featured novels.
 *
 * @param {Array<Object>} novels
 */
export function renderNovels(novels) {



    const featuredNovels =

        novels.filter(

            novel =>

                novel.featured === true

        );



    const normalizedNovels =

        featuredNovels.map(

            novel =>

                normalizeEntity(
                    novel,
                    "novel"
                )

        );



    /*
    ==================================================
    PHASE 4 CHANGE

    Flow:

    novels.json

        ↓

    filter featured

        ↓

    normalizeEntity()

        ↓

    renderEntity()


    ==================================================
    */


    renderSection(

        "#novel-container",

        normalizedNovels,

        renderEntity

    );


}