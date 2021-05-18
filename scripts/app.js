const UI = { set: {}, get: {} };

UI.get = {
    innerHTML: (source) => {
        return source.innerHTML;
    },
    textContent: (source) => {
        return source.textContent;
    },
    value: (source) => {
        return source.value;
    },
    template: (source) => {
        let selector = `template[data-for='${source.id || source.name}']`;

        let html = document.querySelector(selector).innerHTML;

        return html;
    }
}

UI.set = {
    innerHTML: (target, data) => {
        target.innerHTML = data;
        return `target HTML is now ${data}`;
    },
    textContent: (target, data) => {
        target.textContent = data;
        return `target text is now ${data}`;
    },
    value: (target, data) => {
        target.value = data;
        return `target value is now ${data}`;
    }
}

UI.add = {
    innerHTML: (target, data) => {
        target.innerHTML = target.innerHTML + data;
    },
    textContent: (target, data) => {
        target.textContent = target.textContent + data;
    },
    value: (target, data) => {
        target.value = target.value + data;
    }
}

const appBindings = {};

class binding {
    constructor(sourceElement, bindingString) {

        let values = bindingString.split(" of ").join(",").split(" with ").join(",").split(" ").join(",").split(",");

        this.method = values[0];
        this.targetData = values[1];
        this.targetSelector = values[2];
        this.sourceData = values[3];
        this.source = sourceElement;
        this.history = [];

        appBindings[this.source.id || this.source.name] = this;

    }

    replace = () => {

        let target = document.querySelector(this.targetSelector);

        let data = UI.get[this.sourceData]?.(this.source);

        let result = UI.set[this.targetData]?.(target, data);

        this.history.push(result);
    };

    insert = () => {

        let target = document.querySelector(this.targetSelector);

        let data = UI.get[this.sourceData]?.(this.source);

        let result = UI.add[this.targetData]?.(target, data);

        this.history.push(result);
    }

    update = () => {
        this[this.method]?.();
    }

}


function executeBinding(source, type) {

    let bindingString = source.dataset[type];

    if (!bindingString) return false;

    let keyupBinding = appBindings[source.id || source.name] ?? new binding(source, bindingString);

    keyupBinding.update();
}



document.body.addEventListener("keyup", (e) => {

    let source = e.target;

    executeBinding(source, "keyup");
});

document.body.addEventListener("change", (e) => {

    let source = e.target;

    executeBinding(source, "change");

});

document.body.addEventListener("click", (e) => {

    let source = e.target;

    executeBinding(source, "click");

});
