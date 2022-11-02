// Exercise 1 & 2

let i = 1;

while (i < 65536) {
    i = i*2
    console.log(i);

}

// Exercise 3

let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let conesToBuy = Math.floor(Math.random() * 5) + 1;
    if ((allCones - conesToBuy) < 0) {
        console.log("Cannot sell you" + conesToBuy + "cones I only have" + allCones + "...");
    } else {
        console.log("# of cones before sale: " + allCones);
        allCones -= conesToBuy;
        console.log(conesToBuy + "cones sold.");
    }
} while(allCones > 0);
        console.log("We sold all the cones!!");


