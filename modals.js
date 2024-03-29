

// Modals

// Add to Cart

// Get the modal
let add_modal = document.getElementById('modal-add');

// Get the button that opens the modal
let add_to_cart = document.getElementById('add-to-cart');

// Agree button
let agree = document.getElementById('agree');

// Cancel button
let cancel = document.getElementById('cancel');

// Open Modal on "Add to Cart"
add_to_cart.onclick = function() {
    add_modal.style.display = 'block';
    document.getElementById('selected-colour').innerHTML = document.getElementById('colour-desc').innerHTML;
}


// Close on cancel
cancel.onclick = function(){
    add_modal.style.display = 'none';
}


// Close and take quantity on Agree
agree.onclick = function(){
    // Get chosen amount
    let count = document.getElementById('count');
    count_val = Number(count.innerHTML);
    
    if(count_val != 0){

        // Set the final amount to be the chosen amount
        amount = document.getElementById('amount');
        let amount_val = Number(amount.innerHTML);
        amount.innerHTML = amount_val + count_val;
        count.innerHTML = 0;

        // Close modal
        add_modal.style.display = 'none';

        // Make checkout button visible
        let checkout = document.getElementById('checkout');
        checkout.style.display = 'inline';



        // Adding the colour discs to description

        // Get the colour name
        let colour_desc = document.getElementById('colour-desc');
        let colour = colour_desc.innerHTML;

        // Get Details section list
        let detsec = document.getElementById('details-ul');

        // Create new circles
        for (let index = 0; index < count_val; index++) {
            let disc = document.createElement('div');
            disc.classList.add('circle');
            disc.style.background = colour;
            let li = document.createElement('li');
            li.appendChild(disc);
            detsec.appendChild(li);
        }
    } else {
        add_modal.style.display = 'none';
    }
    
}


// Increment button
let incr = document.getElementById('increment');

// Decrement button
let decr = document.getElementById('decrement');


// Increment count
incr.onclick = function(){
    let count = document.getElementById('count');

    let num = Number(count.innerHTML);
    console.log(num);
    console.log(typeof num);


    count.innerHTML = num + 1;
}

// Decrement count
decr.onclick = function(){
    let count = document.getElementById('count');
    
    let num = count.innerHTML;
    console.log(num);
    console.log(typeof num);

    if(num >= 1){
        count.innerHTML = num - 1;
    }
}

// Need Help Modal


// Get the modal
let help_modal = document.getElementById('modal-help');

// Get the button that opens the modal
let need_help = document.getElementById('need-help');

// Close button
close = document.getElementById("close-button")

// Open Modal on "Add to Cart"
need_help.onclick = function() {
    help_modal.style.display = 'block';
}


// Close on cancel
close.onclick = function(){
    help_modal.style.display = 'none';
}
