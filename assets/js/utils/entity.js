/**
 * ==========================================================
 * CHARACTER ATLAS
 * ENTITY UTILITIES
 * ----------------------------------------------------------
 * Helper functions for normalizing
 * different data sources into Entity Contract.
 * ==========================================================
 */


/**
 * Normalize any object into Entity format.
 *
 * @param {Object} entity
 * @param {string} type
 *
 * @returns {Object}
 */
export function normalizeEntity(
    entity,
    type
) {


    return {


        id:
            entity.id ||
            null,


        type,


        title:
            entity.title ||
            entity.name ||
            "Unknown",


        subtitle:
            entity.subtitle ||
            entity.role ||
            entity.status ||
            "",


        image:
            entity.image ||
            entity.cover ||
            null,


        description:
            entity.description ||
            "",


        tags:
            entity.tags ||
            [],


        metadata:
            {

                ...entity

            }


    };

}