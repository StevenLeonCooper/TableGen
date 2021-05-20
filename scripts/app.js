
import { appBindings, binding } from './helper_bindings.js';

import { events } from './helper_events.js';

import { UI } from './helper_ui.js';
import mustache from './libs/mustache.js';


class SimpleTable {
    constructor(name) {
        this.name = name;
        this.caption = "Table Caption";
        this.tableHeading = [
            "heading"
        ];
        this.tableBody = [
            ["value"]
        ];
    }

    getColumnCount() {
        return this.tableHeading.length;
    }

    getRowCount() {
        return this.tableBody.length;
    }

    addColumn() {
        this.tableHeading.push("New Heading");
        this.tableBody.forEach((item, index) => {
            item.push("New Value");
        });
    }
    addRow() {
        let newRow = [];

        this.tableHeading.forEach((item, idex) => {
            newRow.push("New Value");
        });
        this.tableBody.push(newRow);
    }

    removeColumn(index) {
        this.tableHeading.splice(index, 1);
        this.tableBody.forEach((item, i) => {
            item.splice(index, 1);
        });
    }

    removeRow(index) {
        this.tableBody.splice(index, 1);
    }

    getHtml() {
        let headerHtml = this.tableHeading.map(value => `<th>${value}</th>`).join(' ');
        let bodyHtml = "";
        this.tableBody.forEach((item) => {
            bodyHtml += ("<tr>" + item.map(value => `<td>${value}</td>`).join(' ') + "</tr>");
        });

        let outHtml = `<table>
                        <caption>${this.caption}</caption>
                        <thead><tr>${headerHtml}</tr></thead>
                        <tbody>${bodyHtml}</tbody>
                        </table>`;

        return outHtml;
    }

    updateTableBody(row, column, value) {
        if (this.tableBody?.[row]?.[column]) {
            this.tableBody[row][column] = value;
        }
    }

}

export const mainTable = new SimpleTable("Main");
window._mainTable = mainTable;

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