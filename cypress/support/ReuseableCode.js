
export class ReuseableCode{

getRandomFirstName()
{
let firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack', 'Katherine', 'Liam', 'Mia', 'Noah', 'Olivia', 'Peyton', 'Quinn', 'Ryan', 'Sophia'];
let randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]
// Remove double quotes from the string
const firstNameWithoutQuotes = randomFirstName.replace(/"/g, '');
return firstNameWithoutQuotes
}

getRandomLastName() {
    const lastNames = ['Johnson', 'Smith', 'Williams', 'Davis', 'Miller', 'Wilson', 'Moore', 'Anderson', 'Thomas', 'Harris', 'Lee', 'Garcia', 'Martinez', 'Brown', 'Jones', 'Jackson', 'Taylor', 'White', 'Clark', 'Young'];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    // Remove double quotes from the string
    const lastNameWithoutQuotes = randomLastName.replace(/"/g, '');
    return lastNameWithoutQuotes;
  }

getRandomPhoneNumber() {
    // Generate a random 10-digit number
    const randomDigits = Math.floor(1000000000 + Math.random() * 9000000000);
  
    // Format the number as a phone number without the '+'
    const formattedPhoneNumber = `1${randomDigits}`;
  
    return formattedPhoneNumber;
  }
}