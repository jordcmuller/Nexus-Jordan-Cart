// Declare the function to make the list of colour discs
function makeSelectionList(colour_list, price_list){
//     let colour_ul = document.getElementById('colour-ul');

//     // A for each loop to create a new disc for each colour
//     colours.forEach(function (colour) {

//         // Create the li and circle (disc)
//         let li = document.createElement('li');
//         let disc = document.createElement('div');
//         let border = document.createElement('div');

//         // Give the div it's circle class
//         disc.classList.add('circle');
//         border.classList.add('circle');
//         border.classList.add('myborder');

//         // Add the background colour and id tag
//         disc.style.background = colour.toLowerCase();
//         disc.id = colour;

//         // Add the onclick listener to change the outline and colour name displayed 
//         disc.onclick = function(){

//         // Get the elements id and consequently its colour
//             let colour = this.id;

//             // Display the colour name
//             let colour_desc = document.getElementById('colour-desc');
            
//             // Remove the outline of the previously selected element
//             document.getElementsByClassName('selected')[0].classList.remove('selected');

//             // Add selected class to the border object
//             this.firstChild.classList.add('selected'); 

//             console.log(this.firstChild);
            
//             colour_desc.innerHTML = colour;
//         };

//         disc.append(border);

//         // Append the elements together
//         li.appendChild(disc);
//         colour_ul.appendChild(li);



//     });

    colours = [];

    for(i = 0; i < colour_list.length; i++){
        colours.push(new Colour(colour_list[i], price_list[i]));
    }

    // colour_list.forEach(colour => colours.push(new Colour(colour)));
    let colour_tray = new Tray(true, colours);

    colour_tray.renderTray();


    // Set the selected colour to the first colour in the list
    let colour_desc = document.getElementById('colour-desc');
    colour_desc.innerHTML = colour_tray.colours[0].colour;
    colour_tray.colours[0].setPrices();

    // Outline the first colour disc in the list
    let firstElement = colour_tray.colours[0].element;
            //document.getElementById(colours[0]);
            // firstElement.getElementsByClassName('border')[0].classList.add('selected');
    child = firstElement.firstChild;
    // console.log(child);
    child.classList.add('selected');
}

// main
// Define the colour list
let colours = ['Cyan', 'Red', 'Yellow', 'Orange', 'Purple', 'Pink', 'Green', 'Gray']
let prices = [23.00, 32.00, 34.00, 54.00, 7.00, 43.00, 76.56, 17.99]

makeSelectionList(colours, prices);


