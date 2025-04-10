export default debounce(func, wait){
    let timer = null;
    let lastArgs = null;

    function debounced(...args){
        lastArgs = args;
        clearTimeout(timer)
        timer=setTimeout(()=>{
            func(...lastArgs);
            timer = null;
            lastArgs = null;
        },wait)
    }

    debounced.cancel = ()=>{
        clearTimeout(timer);
        timer = null;
        lastArgs = null;
    }
    debounced.flush = ()=>{
        if(timer){
            clearTimeout(timer)
            func(...lastArgs)
            timer = null;
            lastArgs = null;
        }
    }
    return debounced;
}