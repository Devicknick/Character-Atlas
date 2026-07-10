/**
 * ==========================================================
 * CHARACTER ATLAS
 * ENTITY RENDERER
 * ----------------------------------------------------------
 * Universal renderer for all Character Atlas entities.
 *
 * Phase 4 Entity System:
 * Converts Entity Contract format into
 * existing Entity Card format.
 *
 * ==========================================================
 */


import { createEntityCard }
from "./entity-card.js";



/**
 * Render entity into reusable card.
 *
 * @param {Object} entity
 * @returns {HTMLElement}
 */
export function renderEntity(entity) {


    if (!entity) {

        return null;

    }



    /*
    ==================================================
    PHASE 4 ADAPTER

    Entity Contract:

    {
        title,
        subtitle,
        image,
        type
    }


    Entity Card currently expects:

    {
        title,
        description,
        image,
        status
    }


    We keep entity-card.js unchanged.

    Reason:

    entity-card.js is already stable from Phase 2.

    ==================================================
    */


    const cardData = {


        title:
            entity.title ||
            entity.name ||
            "Unknown Entity",



        description:
            entity.subtitle ||
            entity.description ||
            "No description available.",



        image:
            entity.image ||
            entity.cover ||
            null,



        status:
            entity.type ||
            entity.status ||
            null


    };



    return createEntityCard(cardData);

}