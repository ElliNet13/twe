(function (ext) {
    // Convert letter to number
    ext.letterToNumber = function (letter) {
        var code = letter.toUpperCase().charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return code - 64;
        } else {
            return 0; // Return 0 for non-alphabetic characters
        }
    };

    // Convert number to letter
    ext.numberToLetter = function (number) {
        if (number >= 1 && number <= 26) {
            return String.fromCharCode(number + 64);
        } else {
            return ''; // Return empty string for out of range numbers
        }
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'letter %s to number', 'letterToNumber', 'A'],
            ['r', 'number %n to letter', 'numberToLetter', 1]
        ],
        menus: {}
    };

    // Register the extension
    ScratchExtensions.register('ABCs Converter', descriptor, ext);
})({});
