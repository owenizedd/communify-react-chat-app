export function filterBadWords(string) {
    if (typeof string !== 'string') {
        return string;
    }
    string = string.trim();
    string = string.replace(/\W/g, '');
    string = string.toLowerCase();
    const badWords = ['anjing', 'babi', 'taik', 'kontol', 'memek', 'ngentot'];


    string = string.replace(/0/g, 'o');
    string = string.replace(/1/g, 'i');
    string = string.replace(/4/g, 'a');
    string = string.replace(/9/g, 'g');
    string = string.replace(/8/g, 'b');

    if (badWords.includes(string)) {
        return false;
    } else {
        return string;
    }

}