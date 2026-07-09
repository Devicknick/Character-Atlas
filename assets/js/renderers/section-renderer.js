/* File ini bertugas mengerjakan pekerjaan yang selalu berulang di setiap renderer:

mencari container
validasi container
membersihkan isi lama
melakukan loop data
memasukkan hasil render ke DOM */

/**
 * ==========================================================
 * CHARACTER ATLAS
 * SECTION RENDERER
 * ----------------------------------------------------------
 * Generic renderer for rendering a collection of elements
 * into a target container.
 * ==========================================================
 */

/**
 * Render a collection of elements into a container.
 *
 * @param {string} selector
 * @param {Array<Object>} items
 * @param {(item:Object)=>HTMLElement} renderer
 */
export function renderSection(selector, items, renderer) {

    const container = document.querySelector(selector);

    if (!container) {

        console.error(`Container "${selector}" not found.`);

        return;

    }

    container.replaceChildren();

    items.forEach(item => {

        const element = renderer(item);

        container.append(element);

    });

}