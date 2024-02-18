// alert('connected');
let count = 1;
let left = 1;
let sum= 0;

const allSits = document.querySelectorAll('.seat-no');

for(const sit of allSits){
    // console.log(sit)
    sit.addEventListener('click', function(e){
        const sitTitle = document.getElementById('seat-count');
        sitTitle.innerText = count++;

        const leftSeat = document.getElementById('left-seat').innerText;
        const convertedSeat = parseInt(leftSeat);
        const totalSeat = convertedSeat - left;

        document.getElementById('left-seat').innerText = totalSeat;
        // const seat = e.target.innerText
        // const title = document.getElementById('title');
        // title.innerText = seat;
        const disable = e.target;

        disable.setAttribute('disabled', true);
        
        const price = document.getElementById('price').innerText;
        const convertedPrice = parseInt(price);
        sit.style.backgroundColor = '#1dd100';
        // console.log(title)
        const totalCost = document.getElementById('total-cost');
        sum = sum + convertedPrice ;
        totalCost.innerText = sum;
        const couponCode = document.getElementById('coupon-code').innerText




        if(sitTitle === 4){
            if(couponCode === 'new15'){
            const discount = totalCost *.15;
            }
        }
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalCost.innerText;
        
    })
}
// const next = document.getElementById('next');
// function modal(elementId){
//     const element = document.getElementById(elementId)
// }
