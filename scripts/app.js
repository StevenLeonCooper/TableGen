
import { appBindings, binding } from './helper_bindings.js';

import { events } from './helper_events.js';

class context {

    constructor() {

        this.columnCount = 1;
        this.rowCount = 1;
        this.headerTemplate = "";
        this.rowTemplate = "";
        this.columns = [];
        this.rows = [];
    }
    updateColumns = (data) => {
        this.columns.push(data);
    }

    updateRows = (data) => {
        this.rows.push(data);
        this.rowTemplate = this.rows.join("<!--|-->");
    }
};

export const contexts = new context();


if (contexts.rowTemplate.length == 0) {
    let newData = document.querySelector("#ExtraColumnTemplate").innerHTML;
    contexts.updateRows(newData);
    console.log(contexts);
}



function executeBinding(source, type) {

    let bindingString = source.dataset[type];

    if (!bindingString) return false;

    if (!bindingString.includes(":")) return false;

    let targetBinding = appBindings[source.id || source.name] ?? new binding(source, bindingString);

    targetBinding.update();
}

document.body.addEventListener("keyup", (e) => {

    let source = e.target;

    executeBinding(source, "keyup");
});

document.body.addEventListener("change", (e) => {

    let source = e.target;

    events.change[source.dataset.change]?.(source, e);

    executeBinding(source, "change");
});

document.body.addEventListener("click", (e) => {

    let source = e.target;

    events.click[source.dataset.click]?.(source, e);

    executeBinding(source, "click");
});
