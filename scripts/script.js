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

        const btn = document.getElementById('seat-count').innerText;
        const convertedBtn = parseFloat(btn)
        console.log(convertedBtn);

        if (convertedBtn > 3) {
            alert('you cannot buy more than four tickets');
            return;
        };

        const sitTitle = document.getElementById('seat-count');
        sitTitle.innerText = count++;

        const leftSeat = document.getElementById('left-seat').innerText;
        const convertedSeat = parseInt(leftSeat);
        const totalSeat = convertedSeat - left;

        document.getElementById('left-seat').innerText = totalSeat;
        const div = document.getElementById('title-economy');
        const li = document.createElement('li')
        li.classList = ('li');
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

        const limited = document.getElementById('seat-count').innerText
        const convertedSit = parseInt(limited);
        console.log(convertedSit);

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


        const applyBtn = document.getElementById('apply-btn');
        applyBtn.addEventListener('click', function () {

            const couponElement = document.getElementById('coupon-input').value;
            const couponCode = couponElement.split(' ').join('').toLowerCase();

            const convertedTotalCost = parseFloat(totalCost.innerText);
            const sit = parseFloat(sitTitle.innerText);
            // console.log(sit);
            if (sit === 4) {
                if (couponCode === 'new15') {
                    const discount = parseInt(convertedTotalCost) * .15;

                    const totalAmount = parseFloat(convertedTotalCost) - parseFloat(discount);
                    console.log(totalAmount)
                    const grandTotal = document.getElementById('grand-total');
                    grandTotal.innerText = totalAmount;
                    console.log(grandTotal);
                    const couponInput = document.getElementById('label-hidden');
                    couponInput.classList.add('hidden');
                }
                else if (couponCode === 'couple20') {
                    const discount = parseInt(convertedTotalCost) * .20;

                    const totalAmount = parseFloat(convertedTotalCost) - parseFloat(discount);
                    console.log(totalAmount)
                    const grandTotal = document.getElementById('grand-total');
                    grandTotal.innerText = totalAmount;
                    const couponInput = document.getElementById('label-hidden');
                    couponInput.classList.add('hidden');
                }
            }
            else if(couponCode !== 'new15' && couponCode !== 'couple20') {
                alert('invalid Coupon');
                // return;
            };
            applyBtn.setAttribute('disabled', true);
        });
    });
};

function scrollWin() {
    window.scrollTo(0, 1770);
}