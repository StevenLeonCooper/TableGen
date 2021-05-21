import mustache from "./libs/mustache.js";

import { UI } from "./helper_ui.js";

import { mainTable } from "./app.js";

export const events = {
    click: {},
    change: {},
    keyup: {}
};

events.click.addColumn = () => {

    mainTable.addColumn();
    mainTable.updateInterface();
};

events.click.addRow = () => {
    mainTable.addRow();
    mainTable.updateInterface();
};

events.click.removeColumn = (source) => {

    mainTable.removeColumn(source.dataset.column);
    mainTable.updateInterface();

};

events.click.removeRow = (source) => {
    mainTable.removeRow(source.dataset.row);
    mainTable.updateInterface();
};

events.change.syncHeading = (source) => {

    let location = source.dataset.location.split(",");
    mainTable.updateTableHead(location[1], source.value);
    mainTable.updateInterface();
}

events.change.syncValue = (source) => {
    let location = source.dataset.location.split(",");
    mainTable.updateTableBody(location[0], location[1], source.value);
    mainTable.updateInterface();
}

events.keyup.syncCaption = (source) =>{
    mainTable.caption = source.value;
    mainTable.updateInterface();
}

events.click.getHtmlCode = (source) =>{
  let output = `<textarea class='embed'>${mainTable.htmlOutput}</textarea>`;
  UI.modal(output);
};