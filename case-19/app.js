'use strict'






















function getYearName(year) {



    const baseYear = 1984;

    const animals = ['Mouse', 'Cow', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    const elements = ['Green', 'Red', 'Yellow', 'White', 'Black'];


    let cycleOffset = (year - baseYear) % 60;
    let elementIndex = Math.floor(cycleOffset / 12);
    let animalIndex = cycleOffset % 12;



    let element;

    switch (elementIndex) {
        case 0:

            console.log(element = 'Green');

            break;
        case 1:

            console.log(element = 'Red');

            break;
        case 2:

            console.log(element = 'Yellow');

            break;
        case 3:

            console.log(element = 'White');

            break;
        case 4:

            console.log(element = 'Black');

            break;
        default:

            console.log(element = 'Unknown');

    }


    let animal;
    switch (animalIndex) {
        case 0:

            console.log(animal = 'Mouse');
            break;
        case 1:

            console.log(animal = 'Cow');



            break;
        case 2:

            console.log(animal = 'Tiger');



            break;
        case 3:

            console.log(animal = 'Rabbit');



            break;
        case 4:

            console.log(animal = 'Dragon');



            break;
        case 5:

            console.log(animal = 'Snake');



            break;
        case 6:

            console.log(animal = 'Horse');



            break;
        case 7:

            console.log(animal = 'Sheep');



            break;
        case 8:

            console.log(animal = 'Monkey');



            break;
        case 9:

            console.log(animal = 'Rooster');



            break;
        case 10:

            console.log(animal = 'Dog');



            break;
        case 11:

            console.log(animal = 'Pig');



            break;
        default:
            animal = 'Unknown';

    }

}