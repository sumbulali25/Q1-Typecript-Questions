//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const names: string[] = ["Sana", "Maria", "Mobeen", "Rehmat", "Saima"];
const greetingMessage: string = "Hi, ";

for (let i = 0; i < names.length; i++) {
  const personalizedMessage = `${greetingMessage}${names[i]}!`;
  console.log(personalizedMessage);
}