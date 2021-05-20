import mustache from "./libs/mustache.js";

import {pageContext} from "./app.js";

import {UI} from "./helper_ui.js";

export const events = {
    click: {},
    change: {}
};

events.click.addRow = (source, e) =>{
    
};

events.click.addColumn = (source, e) => {

    pageContext.columnCount++;

    let newData = mustache.render(pageContext.dataTemplate, pageContext);

    let newHeader = newData.replace("td>","th>").replace("<td","<th");

    let headRow = document.querySelector("#out_thead tr");

    let bodyRows = document.querySelectorAll("#out_tbody tr");

    headRow.innerHTML = headRow.innerHTML + newHeader;

    bodyRows.forEach((el)=>{
        el.innerHTML = el.innerHTML + newData;
    });

    pageContext.updateRows(newData);

    console.log(pageContext);
};

events.click.addTableData = (source, e) => {

    
};

events.click.deleteTableData = (source, e) => {
    //TODO: Make this more specific so it truly only deletes the correct element.
    // source.parentNode.parentNode.removeChild(source.parentNode);

    let col = source.dataset.col;

    if(col == 1) {
        UI.alert("Cannot Delete Column 1");
        return false;
    }

    let query = `[data-index='${col}']`;

    document.querySelectorAll(query).forEach((target)=>{

        target.parentElement.removeChild(target);
    });

    pageContext.columnCount--;

    pageContext.rows.splice(col,1);

    pageContext.updateRows();


};

events.click.deleteRow = (source,e)=>{
    let t = UI;
};