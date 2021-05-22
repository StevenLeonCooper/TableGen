import mustache from "./libs/mustache.js";

import {pageContext} from "./app.js";

import {events} from "./helper_events.js";

export const UI = {};

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

        let selector = `[data-for='${source.id || source.name}']`;

        let html = document.querySelector(selector).innerHTML;

        let rendered = mustache.render(html, pageContext);

        return rendered;
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

const closeModal = ()=>{
    document.getElementById("ModalWrapper")?.remove();
};

UI.modal = (content)=>{

    events.click.closeModal = events.click.closeModal || closeModal;

    let template = `<div data-click="closeModal" id="ModalContent">${content}</div>`;
    
    let wrapper = document.createElement("div");
    
    wrapper.id="ModalWrapper";
    
    wrapper.dataset.click = "closeModal";
    
    wrapper.innerHTML = template;
    
    document.body.appendChild(wrapper);
};

UI.alert = (message)=>{
    let template = `<div id="Alert">${message}<hr><button data-click="closeModal">Okay</button></div>`;

    UI.modal(template);
    
};

UI.warning = (message)=>{

    let template = `<div id="Warning">${message}<hr><button data-click="closeModal">Okay</button></div>`;

    UI.modal(template);

    return false;
}



// Mustache

// let exampleFunc =  function () {
//     return function (object, render) {
//         var rendered = render(object);
//          return rendered;          
//     };
// },