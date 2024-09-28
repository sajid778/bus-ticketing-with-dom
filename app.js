const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
const availableSeatEL = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const coupneInputFieldEl = document.getElementById('coupne-field');
const coupneBtnEL = document.getElementById('coupne-btn');
const defaultTextEl = document.getElementById('default-text');
const grandTotalEl = document.getElementById('grand-total')
const phoneNumberEl = document.getElementById('phone-number');
const nextButtonEl = document.getElementById('next-btn');

let selectedSeat = [];
let totalPrice = 0;
function handleSection(event) {
    const value = event.innerText;
    if (selectedSeat.includes(value)) {
        return alert('Seat already Booked');

    }
    else if (selectedSeat.length < 4) {


        // console.log(event.innerText);

        event.classList.add('bg-primary');
        event.classList.add('text-white');
        selectedSeat.push(event.innerText);
        totalBookedEl.innerText = selectedSeat.length;
        // decrease available Seat
        const availableSeatValue = parseFloat(availableSeatEL.innerText);
        // console.log(typeof availableSeat);
        const newAvailableValueSeat = availableSeatValue - 1;
        availableSeatEL.innerText = newAvailableValueSeat;

        // remove default text
        defaultTextEl.classList.add('hidden');


        selectedSeatEl.innerHTML += `
    <li class="text-base font-normal flex justify-between"> 
    <span>${event.innerText}</span>
    <span>Econonomy</span>
    <span>550</span>
    </li>
    `
        // console.log(selectedSeat);

        // udated total price 
        totalPrice += 550;
        totalPriceEl.innerText = totalPrice.toFixed(2);

        // activated coupne button
        if (selectedSeat.length > 3) {
            coupneInputFieldEl.removeAttribute('disabled');
            coupneBtnEL.removeAttribute('disabled');

        }
    } 
    else {
        return alert('maximum seat booked')
    }
}

document.getElementById('coupne-btn').addEventListener('click', function () {
    const couponInputValue = coupneInputFieldEl.value;
    let couponSave = 0;
    if (couponInputValue !== 'NEW50' && couponInputValue !== 'Couple 20') {
        alert('Your Provided Coupon is not valid');
        return;
    }

    if (couponInputValue === 'NEW50') {
        couponSave = totalPrice * .15;

    } else if (couponInputValue === 'Couple 20') {
        couponSave = totalPrice * .20;
    }

    const showCouponPriceEl = document.getElementById('show-coupon-price')
    showCouponPriceEl.innerHTML = `
     <p>Discount</p>
     <p>
     <span>-BDT: </span>
     <span>${couponSave.toFixed(2)}</span>
     </p>

   `

    const grandTotalValue = totalPrice - couponSave;
    grandTotalEl.innerText = grandTotalValue.toFixed(2);

});

phoneNumberEl.addEventListener('input', function (e) {
    const inputValue = e.target.value;
    if (inputValue.length >= 11) {
        nextButtonEl.removeAttribute("disabled");
    }
})

document.getElementById('btn-continue').addEventListener('click', function () {
    window.location.reload();
})


