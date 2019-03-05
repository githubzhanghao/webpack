
import _ from 'lodash';

function addDom(){
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['1', '2', '3'], '4');
    return dom;
}

let divDom = addDom();
document.body.appendChild(divDom);
