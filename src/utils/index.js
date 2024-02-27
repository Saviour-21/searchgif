export const debouncing = (fn, delay=250) => {
    let id;
    return function(...args){
        clearTimeout(id);
        id = setTimeout(()=>{
            fn.apply(this, args);
        }, delay);
    }
}