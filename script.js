const incrementButton = document.querySelector('#incrementButton');
const decrementButton = document.querySelector('#decrementButton');
const reset = document.querySelector('#Reset');
const counterValue = document.querySelector('#counterValue');
const incrementBy = document.querySelector('#incrementBy');

incrementButton.addEventListener('click',()=>{
   const countValue = parseInt(counterValue.innerText);
   const changeByValue = parseInt(incrementBy.value);
   counterValue.innerText = countValue + changeByValue;
})

decrementButton.addEventListener('click',()=>{
    const countValue = parseInt(counterValue.innerText);
    const changeByValue = parseInt(incrementBy.value)
    counterValue.innerText = countValue - changeByValue
})

reset.addEventListener('click',()=>{
    counterValue.innerText = 0;
    incrementBy.innerText =0;

})