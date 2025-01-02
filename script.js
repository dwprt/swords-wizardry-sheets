
/**
 * 1)  Grab references (DOM elements)
 * 
 * document.getElementById('someID) returns
 * the element in the HTML that has that ID.
 */
const classSelect = document.getElementById('charClass');
const primeInput = document.getElementById('charPrimeAttribute');

/**
 * 2) Create a mapping (an Object in Javascript)
 * that associates each class with its prime attribute
 * 
 * - The 'key' is the class (e.g. "fighter"),
 * - The 'value' is the prime attribute (e.g. "Strength").
 * 
 * We'll use the EXACT values from <option value="...">
 * in HTML as keys here.
 */
const classToPrimeMap = {
    assassin: 'Dex, Str, and Int 13+',
    cleric: 'Wis 13+',
    druid: 'Wis and Cha 13+',
    fighter: 'Str 13+',
    'magic-user': 'Int 13+',
    monk: 'Wis 13+',
    paladin: 'Str 13+',
    ranger: 'Str 13+',
    thief: 'Dex 13+'
};

/**
 * 3) Add an event listener to the classSelect <select>/
 * - 'change' is the event that fires whenever
 * the user picks a different option.
 */
classSelect.addEventListener('change', function() {
/**
 * Inside here, 'this' refers to classSelect,
 * so 'this.value' is the currently selected class
 * (e.g. "fighter" if the user picked Fighter).
 */
const selectedClass = this.value;

// 4) Look up the corresponding prime attribute in the map
const prime = classToPrimeMap[selectedClass];

// 5) If we found a match, set the primeInput's value
//  That auto-fills the text field
if (prime) {
    primeInput.value = prime;
} else {
    // If for some reason there's no match, clear it out
    primeInput.value = '';
}
});