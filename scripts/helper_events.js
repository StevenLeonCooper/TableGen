export const events = {
    click: {},
    change: {}
};

events.click.addColumn = (source, e) => {

    let template = document.querySelector("#ExtraColumnTemplate");

    let newContent = template.content.cloneNode(true);

    let thisRow = source.parentNode.parentNode;
    
    thisRow.appendChild(newContent); 

    let headRow = document.querySelector("#out_thead tr");

    let currentCount = headRow.children.length;
    let newCount = thisRow.children.length;

    if(newCount > currentCount){
        headRow.innerHTML = headRow.innerHTML + "<th>Extra Column</th>";
    }
};

events.click.deleteColumn = (source, e) =>{

    source.parentNode.parentNode.removeChild(source.parentNode);

};