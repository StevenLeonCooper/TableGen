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

class binding {
    constructor(method, to, target, from, source) {
        this.method = method;
        this.targetSelector = target;
        this.targetData = to;
        this.sourceData = from;
        this.source = source;
        this.history = [];

    }

    update = () => {

        let target = document.querySelector(this.targetSelector);

        let data = UI.get[this.sourceData]?.(this.source);

        let result = UI.set[this.targetData]?.(target, data);

        this.history.push(result);

        console.log("test");
    };
}


const processBinding = (source, bindingString) => {

    if (!bindingString) return false;

    let values = bindingString.split(" of ").join(",").split(" with ").join(",").split(" ").join(",").split(",");

    let output = new binding(values[0], values[1], values[2], values[3], source);

    return output;
}



document.body.addEventListener("keyup", (e) => {

    let source = e.target;

    if (!source.dataset.keyup) return false;

    let binding = processBinding(source, source.dataset.keyup);

    binding.update();

});

document.body.addEventListener("change", (e) => {

    let source = e.target;

    if (!source.dataset.change) return false;

    let binding = processBinding(source, source.dataset.change);

    binding.update();

});

document.body.addEventListener("click", (e) => {

    let source = e.target;

    if (!source.dataset.click) return false;

    let binding = processBinding(source, source.dataset.click);

    Actions.click[binding.subAction]?.(source, e);

});
