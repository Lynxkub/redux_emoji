const h1= document.querySelector('h1');
const happy=document.querySelector('#happy');
const sad = document.querySelector('#sad');
const winky = document.querySelector('#winky');


happy.addEventListener('click' , function (e) {
    store.dispatch({type : 'HAPPY'})
    const state = store.getState();
    h1.innerText=state.mood;
})

sad.addEventListener('click' , function (e) {
    store.dispatch({type : 'SAD'});
    const state = store.getState();
    h1.innerText = state.mood;
})

winky.addEventListener('click' , function (e) {
    store.dispatch({type : 'WINKY'});
    const state = store.getState();
    h1.innerText = state.mood;
})