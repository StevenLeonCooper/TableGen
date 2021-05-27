import { events } from './helper_events.js';

import {SimpleTable} from "./class_SimpleTable.js";

import {setupGadget} from "./setup_gadget.js";

export const pageContext = {};

export const mainTable = new SimpleTable("MainTable");

window._mainTable = mainTable; // Just for debugging

document.body.addEventListener("keyup", (e) => {

    let source = e.target;

    events.keyup[source.dataset.keyup]?.(source, e);
});

document.body.addEventListener("change", (e) => {

    let source = e.target;

    events.change[source.dataset.change]?.(source, e);
});

document.body.addEventListener("click", (e) => {

    let source = e.target;

    events.click[source.dataset.click]?.(source, e);
});

document.body.onload = () => {

    mainTable.updateInterface();
};

if (document.readyState != 'loading') {
    setupGadget();
} else {
    document.addEventListener('DOMContentLoaded', setupGadget);
}

window._debug = {
    context: pageContext,
    mainTable: mainTable,
    events: events,
    ou: true
};