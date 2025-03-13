function calculateTax(amount) {
    taxValue = amount * 0.1;

    return taxValue;
}

function convertToUpperCase(text) {
    convertedText = text.toUpperCase();

    return convertedText;
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        maximum = num1;
    } else {
        maximum = num2;
    }

    return maximum;
}

function isPalindrome(word) {
    reverseWord = word.split('').reverse().join('');
    if (word == reverseWord){
        return true;
    } else {
        return false;
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    if (discountPercentage > 100) {
        discountedPrice = originalPrice - (originalPrice * discountPercentage / 100);
        return discountedPrice;
    } else if ( discountPercentage == 100 ) {
        return 0;
    } else if (0 < discountPercentage < 100) {
        discountedPrice = originalPrice - (originalPrice * discountPercentage / 100);
        return discountedPrice;
    } else if (discountPercentage == 0) {
        return originalPrice;
    }
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };