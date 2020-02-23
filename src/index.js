module.exports = function toReadable (number) {

    if(number == 0){
        return "zero";
    }

    const numsBefore20 = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",       
    };

    const decades ={
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let str = "";
    let mid = Math.round(number - number%100);

    if(number < 20){ // <20
        return numsBefore20[number];
    } else if(number < 100 && number >= 20 && number%10 == 0){ // 20 < <100 %10 ex: 10, 20....
        return decades[number/10];
    } else if( number < 100 && number >= 20){ // 20 < <100 ex: 91, 87
        str = decades[Math.round(number/10 - number%10/10)] + ' ' + numsBefore20[number%10];
        return str;
    } else if( number >= 100 && number%100 == 0){ //  100 < < 1000 %100 ex: 100, 200... 
        return numsBefore20[number/100] + ' hundred';
    } else if (Math.round((number-mid)/10 - (number-mid)%10/10) == 0) { // ex: 901, 706....
        return numsBefore20[Math.round(number/100 - number%100/100)] + ' hundred ' + numsBefore20[number%10];
    } else if(number >= 100 && number%10 == 0){ // ex: 560, 780....
        return numsBefore20[Math.round(number/100 - number%100/100)] + ' hundred ' + decades[Math.round((number-mid)/10)];
    } else if(number >= 100 && (number-mid) < 20){ // 513, 611, 719.... 
        return numsBefore20[Math.round(number/100 - number%100/100)] + ' hundred ' + numsBefore20[Math.round(number-mid)];
    }else if( number >= 100){ // another <100
        str = numsBefore20[Math.round(number/100 - number%100/100)] + ' hundred ' + decades[Math.round((number-mid)/10 - (number-mid)%10/10)] + ' ' + numsBefore20[number%10];
        return str; 
    }

    
        
}
