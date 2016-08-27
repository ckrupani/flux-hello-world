import * as flux from 'flux';

const dispatcher = new flux.Dispatcher();

dispatcher.register((action) => {
    var p;

    switch (action.type) {
        case 'hello': {
            p = document.createElement('p');
            p.textContent = action.payload;
            document.body.appendChild(p);
            break;
        }
        case 'world': {
            p = document.createElement('p');
            p.textContent = `${action.payload}!`;
            document.body.appendChild(p);
            break;
        }
        default:
            break;
    }
});

dispatcher.dispatch({
    type: 'hello',
    payload: 'Hello'
});

dispatcher.dispatch({
    type: 'world',
    payload: 'Chirag'
});