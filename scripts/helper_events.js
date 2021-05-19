import mustache from "./libs/mustache.js";

import {contexts} from "./app.js";

export const events = {
    click: {},
    change: {}
};

events.click.addRow = (source, e) =>{

    if(contexts.rowTemplate.length == 0)
    {
        let newData = document.querySelector("#ExtraColumnTemplate").innerHTML;
        contexts.rowTemplate.push(newData);
    }

    outputTemplate = contexts.rowTemplate.join("<!-- | -->");

};


events.click.addColumn = (source, e) => {

    let newData = document.querySelector("#ExtraColumnTemplate").innerHTML;

    let newHeader = newData.replace("td>","th>");

    let headRow = document.querySelector("#out_thead tr");
    let bodyRows = document.querySelectorAll("#out_tbody tr");

    headRow.innerHTML = headRow.innerHTML + newHeader;

    bodyRows.forEach((el)=>{
        el.innerHTML = el.innerHTML + newData;
    });

    contexts.columnCount++;
    contexts.updateRows(newData);

    console.log(contexts);
};

events.click.addTableData = (source, e) => {

    let template = document.querySelector("#ExtraColumnTemplate");

    let newContent = template.content.cloneNode(true);

    let thisRow = source.parentNode.parentNode;

    thisRow.appendChild(newContent);

    let headRow = document.querySelector("#out_thead tr");

    let currentCount = headRow.children.length;
    let newCount = thisRow.children.length;

    if (newCount > currentCount) {
        headRow.innerHTML = headRow.innerHTML + `<th><button data-click="deleteColumn" title="Delete">-</button>Heading</th>`;
    }
};

events.click.deleteColumn = (source, e) => {
    //TODO: Make this more specific so it truly only deletes the correct element.
    source.parentNode.parentNode.removeChild(source.parentNode);

};