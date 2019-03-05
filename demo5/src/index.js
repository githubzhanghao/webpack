

import _ from 'lodash';
import './style/index.css';


function createDom() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['1','222','3'], '44');

    dom.classList.add('box');

    return dom;
}

let div = createDom();
document.body.appendChild(div);
