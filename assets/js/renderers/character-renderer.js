/**
 * ==========================================================
 * CHARACTER ATLAS
 * CHARACTER RENDERER
 * ----------------------------------------------------------
 * Renders character cards into the homepage.
 * ==========================================================
 */

import { createEntityCard } from "./entity-card.js";
import { renderSection } from "./section-renderer.js";

/**
 * Render character cards.
 *
 * @param {Array<Object>} characters
 */
export function renderCharacters(characters) {

    renderSection(
        "#character-container",
        characters,
        (character) => createEntityCard({

            title: character.name,

            description: character.description,

            image: character.image,

            status: character.rank

        })
    );

}