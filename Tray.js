class Tray {

    constructor (active, colours=undefined) {
        this.active = active;
        this.colours = [];
        this.colour_ul = undefined;

        if(colours){
            this.colours = colours;
        }
    }

    addToTray (colour_disc) {
        // Create the li element
        let li = document.createElement('li');

        // Append the disc to the list
        li.appendChild(colour_disc);
        this.colour_ul.appendChild(li);
    }

    addColour (colour) {
        this.colours.push(colour);
        this.addToTray(colour.renderColourDisc());
    }

    renderTray () {
        if(this.active){
            this.colour_ul = document.getElementById('colour-ul');

            // A for each loop to create a new disc for each colour
            colours.forEach(colour => {
                // Create the disc
                const disc = colour.renderActiveColourDisc();

                // Add disc to tray
                this.addToTray(disc);
            });

        } else {
            this.colour_ul = document.createElement('ul');

            // A for each loop to create a new disc for each colour
            colours.forEach(colour => {
                // Create the disc
                const disc = colour.renderColourDisc();

                // Add disc to tray
                addToTray(disc);
            });
        }

        return this.colour_ul;
    }

    

}