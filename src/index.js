
import './style/index.css';
import _ from 'lodash';
function createDomElement() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['aicode', 'com', 'wow'], '');
    dom.classList.add('box');
    return dom;
}

let divDom = createDomElement();
let body = document.documentElement || document.body;
body.appendChild(divDom);
