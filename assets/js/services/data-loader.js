import { CONFIG } from "../core/config.js";

const DATABASE_FILES = [

    "novels",
    "characters",
    "organizations",
    "races",
    "planets",
    "artifacts",
    "events"

];

/* export async function loadApplicationData() {

    const database = {};

    for (const file of DATABASE_FILES) {

        const response = await fetch(
            `${CONFIG.DATA_DIRECTORY}/${file}.json`
        );

        database[file] = await response.json();

    }

    return database;

} */

    export async function loadApplicationData() {

    const database = {};

    for (const file of DATABASE_FILES) {

        console.log("Loading:", file);

        const response = await fetch(
            `${CONFIG.DATA_DIRECTORY}/${file}.json`
        );

        console.log(file, response.status);

        database[file] = await response.json();

    }

    return database;

}