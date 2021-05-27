// JQUERY IS REQUIRED 

import gadget from './libs/gadgetlib.js';

export const setupGadget = () => {
        gadget.ready().then(gadget.fetch).then(function () {
            console.log(`FZ: ${gadget.getConfig('font_size')}`);
        });


        document.body.addEventListener("gadget_insert", function (data) {
            let htmlCode = data.detail;

            gadget.oucInsertAtCursor(htmlCode).then(function (result) {
                if (result.error) {
                    alert(result.error);
                }
            });
        });
        console.log(window.message ?? "No Message, Setup Done.");

    $ = $ || window.$;
    
    $(gadget).on({
        'expanded': function (evt) {
            // This event is triggered when the user expands (makes visible) a sidebar gadget.
            console.log('Gadget expanded.');
        },
        'collapsed': function (evt) {
            // This event is triggered when the user collapses (hides) a sidebar gadget.
            console.log('Gadget collapsed.');
        },
        'configuration': function (evt, config) {
            // If the user changes the gadget's configuration through the configuration modal,
            // the gadget will hear about it and get the new config in the data argument here.
            console.log('New config:', config);
            $('#main').css({ 'font-size': config.font_size });
        },
        'notification': function (evt, notification) {
            // If the gadget's config.xml contains a "notification" entry, any notifications
            // of the specified type(s) generated by OU Campus will trigger 'notification'
            // events that can be handled here.
            console.log('Notification received:', notification);
        }
    });
};

