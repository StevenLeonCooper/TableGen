export const UI = { set: {}, get: {} };

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
