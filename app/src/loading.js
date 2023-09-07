export function startLoading(){
    document.documentElement.classList.add('loading')

    // carrega a class loading da msg

}

export function stopLoading(){
    document.documentElement.classList.remove('loading')
    //para de carregar 
}

export function loadingMessage(msg){
    document.documentElement.dataset.message = msg
    // carrega a msg 
}