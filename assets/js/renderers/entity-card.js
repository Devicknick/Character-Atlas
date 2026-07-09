// File ini hanya bertugas membuat HTML untuk sebuah card.

/**
 * ==========================================================
 * CHARACTER ATLAS
 * ENTITY CARD RENDERER
 * ----------------------------------------------------------
 * Creates a reusable entity card element.
 * Returns an HTMLElement.
 * ==========================================================
 */

/**
 * Create a reusable entity card.
 *
 * @param {Object} entity
 * @returns {HTMLElement}
 */
export function createEntityCard(entity) {

    const article = document.createElement("article");
    article.className = "entity-card";

    /*
    ============================
    IMAGE
    ============================
    */

    const imageContainer = document.createElement("div");
    imageContainer.className = "card-image";

    const image = document.createElement("img");

    image.src =
        entity.image ||
        "https://placehold.co/600x400?text=Character+Atlas";

    image.alt =
        entity.title ||
        entity.name ||
        "Entity";

    image.loading = "lazy";

    imageContainer.append(image);

    /*
    ============================
    BODY
    ============================
    */

    const body = document.createElement("div");
    body.className = "card-body";

    /*
    TITLE
    */

    const title = document.createElement("h3");
    title.className = "card-title";

    title.textContent =
        entity.title ||
        entity.name ||
        "Unknown";

    /*
    DESCRIPTION
    */

    const description = document.createElement("p");
    description.className = "card-description";

    description.textContent =
        entity.description ||
        "No description available.";

    /*
    META
    */

    const meta = document.createElement("div");
    meta.className = "card-meta";

    if (entity.status) {

        const badge = document.createElement("span");

        badge.className =
            "badge badge-primary";

        badge.textContent =
            entity.status;

        meta.append(badge);

    }

    /*
    Assemble
    */

    body.append(title);
    body.append(description);
    body.append(meta);

    article.append(imageContainer);
    article.append(body);

    return article;

}