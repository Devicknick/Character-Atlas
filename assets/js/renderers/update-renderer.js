/**
 * ==========================================================
 * CHARACTER ATLAS
 * UPDATE RENDERER
 * ----------------------------------------------------------
 * Renders latest updates into homepage.
 * ==========================================================
 */

/**
 * Render latest updates.
 *
 * @param {Array<Object>} events
 */
export function renderUpdates(events) {

    const container =
        document.querySelector("#update-container");

    if (!container) {

        console.error(
            'Container "#update-container" not found.'
        );

        return;

    }

    /*
    ===================================
    Clear previous render
    ===================================
    */

    container.replaceChildren();

    /*
    ===================================
    Render updates
    ===================================
    */

    events.forEach(event => {

        const item = document.createElement("article");
        item.className = "update-item";

        const title = document.createElement("h3");
        title.className = "update-title";
        title.textContent = event.name;

        const description = document.createElement("p");
        description.className = "update-description";
        description.textContent = event.description;

        const date = document.createElement("span");
        date.className = "update-time";
        date.textContent = event.date || "Unknown";

        item.append(title);
        item.append(description);
        item.append(date);

        container.append(item);

    });

}