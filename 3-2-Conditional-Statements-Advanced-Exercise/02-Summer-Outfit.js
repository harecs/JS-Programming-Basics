function chooseOutfit([arg1, arg2]) {
    let temperature = parseInt(arg1);
    let timeOfDay = arg2.toLowerCase();
    let outfit = "";
    let shoes = "";

    switch (timeOfDay) {
        case "morning":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (temperature > 18 && temperature <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "afternoon":
            if (temperature >= 10 && temperature <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temperature > 18 && temperature <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (temperature >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case "evening":
            outfit = "Shirt";
            shoes = "Moccasins";
            break;
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}