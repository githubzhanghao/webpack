import _ from 'lodash';
import '../style/index.css';
// import '../style/index.scss';
import imgUrl from '../res/test.jpg';

function createDomElement() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['1', '2', 3, 4, 5], '');
    dom.className = 'box';
    let img = new Image();
    img.src = imgUrl;
    dom.appendChild(img);
    return dom;
}

// for (let i = 0; i < 10; i++) {
    document.body.appendChild(createDomElement());
// }