import { UI } from "./helper_ui.js";

import { mainTable } from "./app.js";

export const events = {
    click: {},
    change: {},
    keyup: {},
    actions: {}
};

const triggerEvent = (name, data, element) => {
    let eventData = { detail: data };
    let event = new CustomEvent(name, eventData);

    element = element ?? document;

    element.dispatchEvent?.(event, eventData);
};

const triggerEventAll = (name, data, selector) => {

    let elements = document.querySelectorAll(selector);

    elements.forEach((item) => {
        triggerEvent(name, data, item);
    });

};

events.click.addToPage = () => {

    console.log("Adding HTML...");

    if (!mainTable.isValid) {
        UI.warning(mainTable.validationError);
        return false;
    }

    triggerEvent("gadget_insert", mainTable.htmlOutput);
};

events.actions.importHtml = (html) => {

    let success = mainTable.import(html);

    if (!success) {
        UI.warning("Could Not Find Table in Imported HTML");
        return false;
    }
    mainTable.updateInterface();
};

events.click.textInput = (source) => {

    let action = source.dataset.action;

    UI.textInput(function (text) {
        events.actions[action]?.(text);
    });
};

events.click.resetTable = () => {

    let message = "Are you sure you want to reset the table? All data will be lost.";
    UI.confirm(message, () => {
        mainTable.fullReset();
    }, null);

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



events.keyup.syncColumns = (source) => {
    let targetCols = source.value ?? 1,
        currentCols = mainTable.columns,
        i = 0, cols = 0;

    if (targetCols == currentCols) return false;

    if (targetCols > currentCols) {
        i = currentCols;
        for (i; i < targetCols; i++) {
            mainTable.addColumn();
        }
    }

    if (targetCols < currentCols) {
        i = currentCols;
        for (i; i > targetCols; i--) {
            mainTable.removeColumn();
        }
    }

    console.log("Columns Synced");
};

events.keyup.syncRows = (source) => {
    let targetRows = source.value ?? 1,
        currentRows = mainTable.rows,
        i = 0, Rows = 0;

    if (targetRows == currentRows) return false;

    if (targetRows > currentRows) {
        i = currentRows;
        for (i; i < targetRows; i++) {
            mainTable.addRow();
        }
    }

    if (targetRows < currentRows) {
        i = currentRows;
        for (i; i > targetRows; i--) {
            mainTable.removeRow();
        }
    }

    console.log("Rows Synced");
};

events.change.syncColumns = (source) => {
    events.keyup.syncColumns(source);
};

events.change.syncRows = events.keyup.syncRows;

events.click.insertIntoEditor = (source) => {

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

events.click.toggleFor = (source) => {

    let target = source.dataset.for ?? "body";

    target = document.querySelector(target);

    if (!target instanceof HTMLElement) return false;

    target.classList.toggle("hidden");

};