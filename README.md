# TableGen
This is a simple, small web app that can be used to output a table with the appropriate tag hierarchy and required tags/attributes to satisfy WCAG and/or Section 508 compliance rules. (Use at your own risk, I make no guaratees regarding 508 compliance.)

# App or Gadget
This comes in 2 flavors: A regular web app meant for a large screen where you can pre-enter the cell values and a small "gadget" for use in the OmniCMS setting. 

The Gadget version of this app uses the GadgetLib.js library and jQuery to allow you to insert the HTML output directly into an OmniCMS page. 

The App version of this app does not import GadgetLib.js or jQuery so it has a lighter footprint. 

# Built with Parcel

Included in package.json are 2 build scripts for use with Parcel V2, one for each app type. Building/bundling is not required unless you want to maximize browser compatibility. Each script outputs files to the "dist" folder. 

Build Command (after installing via npm i parcel): npm run build || npm run gadget_build
