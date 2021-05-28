import { events } from './helper_events.js';

import { SimpleTable } from "./class_SimpleTable.js";

export const mainTable = new SimpleTable("MainTable");

/**
 * Here we add event listeners and setup the app. 
 */
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

/**
 * This allows the script to work in gadget or app mode without
 * recompiling. The gadget requires jQuery but our app does not
 * and we don't want to waste resources importing modules we don't need. 
 * The gadget.html file sets this property so it's only true for the gadget.
 */
if (window.isGadget === true) {
    import("./setup_gadget.js").then((module) => {

        const setupGadget = module.default;
        
        if (document.readyState != 'loading') {
            setupGadget();
        } else {
            document.addEventListener('DOMContentLoaded', setupGadget);
        }
    });
}
