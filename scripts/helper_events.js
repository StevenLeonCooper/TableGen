import { UI } from "./helper_ui.js";

import { mainTable } from "./app.js";

export const events = {
    click: {},
    change: {},
    keyup: {}
};

events.click.addColumn = (source) => {

    if (mainTable.columns >= 10) {
        UI.alert("Having more than 10 columns is not recommended.");
    }

    let index = (source.dataset.column ?? null);

    index = (index != null) ? parseInt(index) + 1 : null;

    mainTable.addColumn(index);

    mainTable.updateInterface(["Header", "Body"]);
};

events.click.addRow = (source) => {
    if (mainTable.rows >= 30) {
        UI.alert("Tables this large can be difficult to read. Consider using multiple tables instead.");
    }

    let index = (source.dataset.row ?? null);

    index = (index != null) ? parseInt(index) + 1 : null;

    mainTable.addRow(index);

    mainTable.updateInterface(["Body"]);
};

events.click.removeColumn = (source) => {
    if (mainTable.columns === 1) {
        return UI.warning("You must have at least 1 column.");
    }

    mainTable.removeColumn(source.dataset.column);
    mainTable.updateInterface(["Header", "Body"]);

};

events.click.removeRow = (source) => {
    if (mainTable.rows === 1) {
        return UI.warning("You must have at least 1 row.");
    }
    mainTable.removeRow(source.dataset.row);
    mainTable.updateInterface(["Body"]);
};

events.change.syncHeading = (source) => {

    let location = source.dataset.location.split(",");
    mainTable.updateTableHead(location[1], source.value);
    mainTable.updateInterface(["Header"]);
}

events.change.syncValue = (source) => {
    let location = source.dataset.location.split(",");
    mainTable.updateTableBody(location[0], location[1], source.value);
    // No need to update interface, these are already IN the interface. 
}

events.keyup.syncCaption = (source) => {
    mainTable.caption = source.value;
    mainTable.updateInterface(["Caption"]);
}

events.click.getHtmlCode = () => {
    let output = `<textarea class='embed'>${mainTable.htmlOutput}</textarea>`;
    UI.modal(output);
};

events.click.previewTable = () => {
    UI.modal(mainTable.htmlOutput);
};

events.keyup.syncDefaultValue = (source) => {
    mainTable.defaultNewValue = source.value;
};