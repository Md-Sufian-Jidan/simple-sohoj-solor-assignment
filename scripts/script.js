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
        const totalCost = document.getElementById('total-cost');
        sum = sum + convertedPrice ;
        totalCost.innerText = sum;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalCost.innerText;

        const applyBtn = document.getElementById('apply-btn');
        applyBtn.addEventListener('click', function(){
            
            const couponElement = document.getElementById('coupon-input').value;
            const couponCode = couponElement.split(' ').join('').toLowerCase();
            // console.log(couponCode);
            
            const convertedTotalCost = parseFloat(totalCost.innerText);
            const sit = parseFloat(sitTitle.innerText)
            if(sit === 4){
                if(couponCode === 'new15'){
                    const discount = parseInt(convertedTotalCost) * .15;

                    const totalAmount = parseFloat(convertedTotalCost) - parseFloat(discount);
                    console.log(totalAmount)
                    const grandTotal = document.getElementById('grand-total');
                    grandTotal.innerText = totalAmount;
                    // console.log(grandTotal);
                }
            }
            alert('please buy at least four tickets to get the coupon');
            applyBtn.setAttribute('disabled', true);
        })
    })
}
// const next = document.getElementById('next');
// function modal(elementId){
//     const element = document.getElementById(elementId)
// }
