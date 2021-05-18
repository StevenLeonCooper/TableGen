
import {appBindings, binding} from './helper_bindings.js';

import {events} from './helper_events.js';

function executeBinding(source, type) {

    let bindingString = source.dataset[type];

    if (!bindingString) return false;

    let targetBinding = appBindings[source.id || source.name] ?? new binding(source, bindingString);

    targetBinding.update();
}

document.body.addEventListener("keyup", (e) => {

    let source = e.target;

    executeBinding(source, "keyup");
});

document.body.addEventListener("change", (e) => {

    let source = e.target;

    events.change[source.dataset.change]?.(source,e);

    executeBinding(source, "change");
});

document.body.addEventListener("click", (e) => {

    let source = e.target;

    events.click[source.dataset.click]?.(source, e);

    executeBinding(source, "click");
});
