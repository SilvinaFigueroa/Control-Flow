// Part 1: Growing Pains

const radius = 5;
const PI = 3.1415;
const area = (PI * radius * radius).toFixed(2);
const eachPlant = 0.80;
const initCountPlant = 20;


const initPlantedArea = (initCountPlant * eachPlant);
let spaceReminder = (area - initPlantedArea).toFixed(2);
let percReminder = (100 - ((spaceReminder / area) * 100)).toFixed(2);



console.log(`The initial area used for 20 plants is ${initPlantedArea} and the total area is ${area} 
- Space remaning ${spaceReminder} and percentage ${percReminder}%`);

// __________________________________________________________________________


let week = 3;

let plantGrow = 10 * week;
let plantedArea = (initPlantedArea + (plantGrow * eachPlant));
spaceReminder = (area - plantedArea).toFixed(2);
percReminder = (100 - ((spaceReminder / area) * 100)).toFixed(2);

if (percReminder > 80) {
    console.log(`PRUNE!`);
    console.log(`Week ${week} - The area used for ${plantGrow + initCountPlant} plants is ${plantedArea} 
            and space remaning ${spaceReminder} and percentage ${percReminder}%.`);
} else if (percReminder >= 50) {
    console.log(`MONITOR!`);
    console.log(`Week ${week} - The area used for ${plantGrow + initCountPlant} plants is ${plantedArea} 
            and space remaning ${spaceReminder} and percentage ${percReminder}%.`);

} else if (percReminder < 50) {
    console.log(`PLANT!`);
    console.log(`Week ${week} - The area used for ${plantGrow + initCountPlant} plants is ${plantedArea} 
            and space remaning ${spaceReminder} and percentage ${percReminder}%.`);
}

switch (week) {
    case (percReminder > 80):
        console.log(`PRUNE!`);
        console.log(`Week ${week} - The area used for ${plantGrow + initCountPlant} plants is ${plantedArea} 
                and space remaning ${spaceReminder} and percentage ${percReminder}%.`);
        break;

    case (percReminder >= 50):
        console.log(`MONITOR!`);
        console.log(`Week ${week} - The area used for ${plantGrow + initCountPlant} plants is ${plantedArea} 
            and space remaning ${spaceReminder} and percentage ${percReminder}%.`);
        break;

    case (percReminder < 50){

        console.log(`PLANT!`);
        console.log(`Week ${week} - The area used for ${plantGrow + initCountPlant} plants is ${plantedArea} 
                    and space remaning ${spaceReminder} and percentage ${percReminder}%.`);


    }





}


