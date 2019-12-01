class Colour {

    constructor (colour_name, price) {
        this.colour = colour_name;
        this.price = price;
        this.element = undefined;
    }

    colour () {
        return this.colour;
    }

    getPrice (discount) {
        return this.price * (1 - discount / 100);
    }

    element () {
        return this.element;
    }


    setPrices () {
        // Get price elements
        let price_element = document.getElementById('price');
        let discount_element = document.getElementById('discount');

        // Set price elements
        price_element.innerHTML = '$' + this.getPrice(0);
        discount_element.innerHTML = '$' + this.getPrice(25);        
    }

    renderColourDisc () {
        // Create the disc
        let disc = document.createElement('div');

        // Give the div it's circle class
        disc.classList.add('circle');

        // Add the background colour and id tag
        disc.style.background = this.colour.toLowerCase();
        disc.id = this.colour;
        
        this.element = disc;

        return disc;
    }

    renderActiveColourDisc () {
        // Get the Colour disc element
        let disc = this.renderColourDisc();

        // Create the disc's border
        let border = document.createElement('div');

        // Give the div it's circle class
        border.classList.add('circle');
        border.classList.add('myborder');

        let tempSetPrices = this.setPrices;
    
        // Add the onclick listener to change the outline and colour name displayed 
        disc.onclick = function(){
        
            // Get the elements id and consequently its colour
            let colour = this.id;

            // Display the colour name
            let colour_desc = document.getElementById('colour-desc');
            
            // Remove the outline of the previously selected element
            document.getElementsByClassName('selected')[0].classList.remove('selected');

            // Add selected class to the border object
            this.firstChild.classList.add('selected'); 

            console.log(this.firstChild);
            
            colour_desc.innerHTML = colour;

            tempSetPrices();



        };

        // Add the border to the disc
        disc.append(border);

        return disc;
    }


}