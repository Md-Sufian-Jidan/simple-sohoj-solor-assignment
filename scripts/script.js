// alert('connected');
function setInnerTextById(ElementId, value) {
    const element = document.getElementById(ElementId);
    element.innerText = value;
}

let count = 1;
let left = 1;
let sum = 0;

const allSits = document.querySelectorAll('.seat-no');

for (const sit of allSits) {

    sit.addEventListener('click', function (e) {
        const sitTitle = document.getElementById('seat-count');
        sitTitle.innerText = count++;

        const leftSeat = document.getElementById('left-seat').innerText;
        const convertedSeat = parseInt(leftSeat);
        const totalSeat = convertedSeat - left;

        document.getElementById('left-seat').innerText = totalSeat;
        // const seat = e.target.innerText
        // const title = document.getElementById('title');
        // title.innerText = seat;
        // title see
        const div = document.getElementById('title-economy');
        const li = document.createElement('li')
        const seat = e.target.innerText

        const p = document.createElement('p')
        p.innerText = seat;

        const p2 = document.createElement('p');
        p2.innerText = 'economy';

        const p3 = document.createElement('p');
        p3.innerText = 550;
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);

        div.appendChild(li);

        const disable = e.target;
        disable.setAttribute('disabled', true);


        const price = p3.innerText;
        // console.log(price);
        const convertedPrice = parseInt(price);
        sit.style.backgroundColor = '#1dd100';
        sit.style.color = '#ffffff'
        const totalCost = document.getElementById('total-cost');
        sum = sum + convertedPrice;
        totalCost.innerText = sum;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalCost.innerText;
        // console.log(grandTotal);

        const applyBtn = document.getElementById('apply-btn');
        applyBtn.addEventListener('click', function () {

            const couponElement = document.getElementById('coupon-input').value;
            const couponCode = couponElement.split(' ').join('').toLowerCase();

            const convertedTotalCost = parseFloat(totalCost.innerText);
            const sit = parseFloat(sitTitle.innerText)
            if (sit === 4) {
                if (couponCode === 'new15') {
                    const discount = parseInt(convertedTotalCost) * .15;

                    const totalAmount = parseFloat(convertedTotalCost) - parseFloat(discount);
                    console.log(totalAmount)
                    const grandTotal = document.getElementById('grand-total');
                    grandTotal.innerText = totalAmount;
                    console.log(grandTotal);
                }
                else if (couponCode === 'couple20') {
                    const discount = parseInt(convertedTotalCost) * .20;

                    const totalAmount = parseFloat(convertedTotalCost) - parseFloat(discount);
                    console.log(totalAmount)
                    const grandTotal = document.getElementById('grand-total');
                    grandTotal.innerText = totalAmount;
                    // console.log(grandTotal);
                }
            }
            applyBtn.setAttribute('disabled', true);
        });
    });
};

function scrollWin() {
    window.scrollTo(0, 1770);
}