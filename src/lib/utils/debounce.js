/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N ms.
 *
 * @param func The function tobe debounced
 * @param wait The amount of time required after the last invocation of the function
 */
function debounce(func, wait = 20) {
  let timeout;

  return function debouncedFunc(...args) {
    const later = () => {
      timeout = null;
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (!timeout) func.apply(this, args);
  };
}

export default debounce;
