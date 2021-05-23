import mustache from './libs/mustache.js';

import { UI } from './helper_ui.js';

import { Benchmark } from "./class_Benchmark.js";

export class SimpleTable {
    constructor(tableId) {
        this.tableId = tableId;
        this.caption = "Table Caption";
        this.tableHeading = ["Heading"];
        this.tableBody = [["Value"]];
        this.defaultNewValue = "New Value";
        this.templates = {};
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
        if (this.templates.td) return this.templates.td;
        let query = `.td[data-template-for="${this.tableId}"]`;
        let template = document.querySelector(query)?.innerHTML;
        this.templates.td = template;
        return template;
    }

    get thTemplate() {
        if (this.templates.th) return this.templates.th;
        let query = `.th[data-template-for="${this.tableId}"]`;
        let template = document.querySelector(query)?.innerHTML;
        this.templates.th = template;
        return template;
    }

    get rowTemplate() {
        if (this.templates.row) return this.templates.row;
        let query = `.row[data-template-for="${this.tableId}"]`;
        let template = document.querySelector(query)?.innerHTML;
        this.templates.row = template;
        return template;
    }

    addColumn(insertIndex) {

        insertIndex = insertIndex ?? this.tableHeading.length;

        this.tableHeading.splice(insertIndex, 0, "New Heading");

        this.tableBody.forEach((item, index) => {
            // item.push(this.defaultNewValue);
            item.splice(insertIndex, 0, this.defaultNewValue)
        });
    }
    addRow(insertIndex) {
        insertIndex = insertIndex ?? this.tableBody.length;

        let newRow = [];

        this.tableHeading.forEach((item, idex) => {
            newRow.push(this.defaultNewValue);
        });

        this.tableBody.splice(insertIndex, 0, newRow);
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

        let outHtml = ` 
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
    /**
     * WARNING: _functions are not "public" & may yeild unexpected results.  
     */
    _uiCaption() {
        this.element.querySelector("caption").textContent = this.caption;
    }

    /**
     * WARNING: _functions are not "public" & may yeild unexpected results.  
     */
    _uiHeader() {
        let headerHtml = this.tableHeading.map((item, index) => {

            let context = { column: index, row: 0, value: item, type: "Heading", first: false };

            return mustache.render(this.thTemplate, context);

        }).join("");

        debugger;

        this.element.querySelector("thead").innerHTML = headerHtml;
    }

    /**
     * WARNING: _functions are not "public" & may yeild unexpected results.  
     */
    _uiBody() {
        let bodyHtml = "";
        let columnCount = this.columns + 1;

        this.tableBody.forEach((rowItem, rowIndex) => {


            let context = {
                rowContent: rowItem.map((item, index) => {
                    let context = { column: index, row: rowIndex, value: item, type: "Value" };
                    context.first = index == 0 ? true : false;
                    return mustache.render(this.tdTemplate, context);
                }).join(""),
                row: rowIndex,
                nextRow: rowIndex + 1,
                columns: columnCount
            };

            
            
            bodyHtml += mustache.render(this.rowTemplate, context);
        });

        this.element.querySelector("tbody").innerHTML = bodyHtml;
    }

    updateInterface(type, location) {
        let bench = new Benchmark("Update UI");

        type = type ?? ["Caption", "Header", "Body"];

        let i = 0, len = type.length;

        for (i; i < len; i++) {
            let section = `_ui${type?.[i]}`;
            let method = this?.[section];
            method.bind(this).call();
        }

        console.log(bench.stop().detailedResults);
        if (bench.result > 50) {
            UI.alert("The performance of this application is lower than normal. This table may be too large.");
        }

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