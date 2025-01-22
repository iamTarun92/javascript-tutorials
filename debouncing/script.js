const inputElement = document.querySelector("input");
const handlelnput = (e) => {
  console.log(e.target.value);
};
const debounce = (func, delay) => {
  let debounceTimer;
  return (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func(e);
    }, delay);
  };
};

const debouncedHandleInput = debounce(handlelnput, 300);
inputElement.addEventListener("input", debouncedHandleInput);
