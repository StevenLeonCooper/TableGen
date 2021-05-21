
import { appBindings, binding } from './helper_bindings.js';

import { events } from './helper_events.js';

import { UI } from './helper_ui.js';

import mustache from './libs/mustache.js';

export const pageContext = {};

class SimpleTable {
    constructor(tableId) {
        this.tableId = tableId;
        this.caption = "Table Caption";
        this.tableHeading = [
            "heading"
        ];
        this.tableBody = [
            ["value"]
        ];
    }

    get element() {
        return document.getElementById(this.tableId);
    }

    get columns() {
        return this.tableHeading.length;
    }

    get rows() {
        return this.tableBody.length;
    }

    get tdTemplate() {
        let query = `.td[data-template-for="${this.tableId}"]`;
        let template = document.querySelector(query)?.innerHTML;
        return template;
    }

    get thTemplate() {
        return this.tdTemplate.replace("<td", "<th").replace("td>", "th>");
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

    get htmlOutput() {
        let headerHtml = this.tableHeading.map(value => `\n           <th>${value}</th>`).join(' ');
        let bodyHtml = "";
        this.tableBody.forEach((item) => {
            bodyHtml += ("\n      <tr>" + item.map(value => `\n         <td>${value}</td>`).join(' ') + "\n     </tr>");
        });

        let outHtml =` 
<table>
    <caption>${this.caption}</caption>
    <thead>
        <tr>${headerHtml}
        </tr>
    </thead>
    <tbody>${bodyHtml}
    </tbody>
</table>`;

        return outHtml;
    }


    updateInterface(type) {
        console.time("Update Interface");
        // This ensures we only mess with the DOM elements we NEED to mess with. 
        // It dramatically improves performance when the table gets large,
        // Especially for something simple like the caption or headings. 
        const update = {
            Caption: () => {
                this.element.querySelector("caption").textContent = this.caption;
            },
            Header: () => {
                let headerHtml = this.tableHeading.map((item, index) => {
                    let context = { column: index, row: 0, value: item, type: "Heading", first: false };
                    return mustache.render(this.thTemplate, context);
                }).join("");

                this.element.querySelector("thead").innerHTML = headerHtml;
            },
            Body: () => {
                let bodyHtml = "";

                this.tableBody.forEach((row, rowIndex) => {
                    bodyHtml += "<tr>";
                    bodyHtml += row.map((item, index) => {
                        let context = { column: index, row: rowIndex, value: item, type: "Value" };
                        context.first = index == 0 ? true: false;
                        return mustache.render(this.tdTemplate, context);
                    }).join("");
                    bodyHtml += "</tr>";
                });

                this.element.querySelector("tbody").innerHTML = bodyHtml;
            }
        };

        type = type ?? ["Caption", "Header", "Body"];

        let i = 0, len = type.length;

        for(i; i < len; i++){
            let section = type?.[i];
            let method = update?.[section];
            method.bind(this).call();
        }

        console.timeEnd("Update Interface");
    }

    updateTableHead(index, value) {
        if (this.tableHeading?.[index]) {
            this.tableHeading[index] = value;
        }
    }

    updateTableBody(row, column, value) {
        if (this.tableBody?.[row]?.[column]) {
            this.tableBody[row][column] = value;
        }
    }

}

export const mainTable = new SimpleTable("MainTable");

window._mainTable = mainTable; // Just for debugging

document.body.addEventListener("keyup", (e) => {

    let source = e.target;

    events.keyup[source.dataset.keyup]?.(source, e);

    //executeBinding(source, "keyup");
});

document.body.addEventListener("change", (e) => {

    let source = e.target;

    events.change[source.dataset.change]?.(source, e);

    //executeBinding(source, "change");
});

document.body.addEventListener("click", (e) => {

    let source = e.target;

    events.click[source.dataset.click]?.(source, e);

    //executeBinding(source, "click");
});

document.body.onload = () => {

    mainTable.updateInterface();

};

window._pageContext = pageContext;