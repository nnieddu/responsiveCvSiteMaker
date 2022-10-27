'use strict'

function historyHandling (e){
    historyPath = e.composedPath()[1];
    history = e.composedPath()[1].outerHTML;
}
