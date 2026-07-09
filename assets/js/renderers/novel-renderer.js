// Jadi tanggung jawabnya hanya:

// menerima data novel
// mencari container
// membuat card
// memasukkan card ke halaman
/**
 * ==========================================================
 * CHARACTER ATLAS
 * NOVEL RENDERER
 * ----------------------------------------------------------
 * Render featured novels into the homepage.
 * ==========================================================
 */

import { createEntityCard } from "./entity-card.js";
import { renderSection } from "./section-renderer.js";

/**
 * Render featured novels.
 *
 * @param {Array<Object>} novels
 */
export function renderNovels(novels) {

    const featuredNovels = novels.filter(
        novel => novel.featured === true
    );

    renderSection(
        "#novel-container",
        featuredNovels,
        (novel) => createEntityCard({

            title: novel.title,

            description: novel.description,

            image: novel.cover,

            status: novel.status

        })
    );

}