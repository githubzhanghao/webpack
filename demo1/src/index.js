
import _ from 'lodash';

function createDomElement() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['aaaaa','bbbbb','c'], 'd');
    return dom;
}

let divDom = createDomElement();
document.body.appendChild(divDom);