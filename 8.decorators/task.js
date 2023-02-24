//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args){
        const hash = args.join(',');
        let result = cache.find(item => item.hash === hash);
        if (result) {
            console.log("Из кэша: " + result.value);
            return 'Из кэша: ' + result.value;
        }
        let value = func.call(this, ...args);
        cache.push({hash, value});
        if(cache.length > 5){
            cache.shift();
        }
        cache.push({hash, value});
        console.log('Вычисляем: ' + value);
        return 'Вычисляем: ' + value;
    }
    return wrapper;
  
}

//Задача № 2
function debounceDecoratorNew(func, ms) {
    let timeout = null;
    function wrapper(...args) {
      wrapper.allCount++;
      if (!timeout) {
        wrapper.count++;
        func.call(this, ...args);
      }
      clearTimeout(timeout);
  
      timeout = setTimeout(() => {
        wrapper.count++;
        func.call(this, ...args);
      }, ms);
    };
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
  }