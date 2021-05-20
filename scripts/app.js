
import { appBindings, binding } from './helper_bindings.js';

import { events } from './helper_events.js';

import { UI } from './helper_ui.js';
import mustache from './libs/mustache.js';

class context {

    constructor() {

        this.columnCount = 1;
        this.rowCount = 1;
        this.headerTemplate = "";
        this.rowTemplate = "";
        this.dataTemplate = "";
        this.columns = [];
        this.rows = [];
        this.toTH = () => {
            return function (object, render) {
                var rendered = render(object);
                rendered = rendered.replace("td>", "th>").replace("<td", "<th");
                return rendered;
            };
        }
    }
    updateColumns = (data) => {
        this.columns.push(data);
    }

    updateRows = (data) => {
        if (data) { this.rows.push(data); }
        this.rowTemplate = this.rows.join("<!--|-->");
    }
};

export const pageContext = new context();


function setupRowTemplate(newData) {
    if (pageContext.rowTemplate.length == 0) {
        newData = `${newData}`;
        pageContext.updateRows(newData);
    }
};

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

document.body.onload = () => {

    let source = document.body;

    let dataTemplate = document.getElementById("TableDataTemplate").innerHTML;

    let dataTemplateFirstRun = mustache.render(dataTemplate, pageContext);

    pageContext.dataTemplate = dataTemplateFirstRun;

    let mainTableHtml = UI.get.template(source);

    pageContext.dataTemplate = dataTemplate;

    setupRowTemplate(dataTemplateFirstRun);

    let mainTable = document.getElementById("MainTable");

    UI.set.innerHTML(mainTable, mainTableHtml);
};

window._pageContext = pageContext;