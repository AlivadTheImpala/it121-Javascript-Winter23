// 1. we need to state our vowels
// 2. we need to state our consonants
// 3. we need input from the user
// 4. we need to check if user word has a vowel or consonant
// 5. If word starts with vowel append 'way' to the end of the word.
// 6. if word starts with 2 consonants, move both letters to the end and append 'ay
// 7. If word starts with 1 consonant, move the first letter to the end of the word and append 'ay'

//Ill first declare what the vowels will be.
const vowels = "AEIOUYaeiouy";
//I'll use a prompt to collect the word from user input
let user_word = prompt("Please Enter a word");

//check first letter of user_word for a vowel at index 0
if (vowels.includes(user_word[0])) {
  let pig_latin = user_word + "way";
  document.write(pig_latin);

  //if the first two indeces are not a vowel, slice the two letters and store them in a new variable.
} else if (!vowels.includes(user_word[1])) {
  let sliced_consonant = user_word.slice(0, 2);
  console.log(sliced_consonant);
  //store the rest of the user_word in a new variable without the first two letters
  let sliced_user_word = user_word.slice(2);
  console.log(sliced_user_word);

  let pig_latin = sliced_user_word + sliced_consonant + "ay";

  document.write(
    "Original Word: ",
    user_word,
    "<br>",
    "Pig Latin Translation: ",
    pig_latin
  );
} else if (!vowels.includes(user_word[0])) {
  let sliced_consonant = user_word.slice(0, 1);
  console.log(sliced_consonant);

  let sliced_user_word = user_word.slice(1);
  console.log(sliced_user_word);

  let pig_latin = sliced_user_word + sliced_consonant + "ay";

  document.write(
    "Original Word: ",
    user_word,
    "<br>",
    "Pig Latin Translation: ",
    pig_latin
  );
}
