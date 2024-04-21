function checkForSpam(message) {
    const newMessage  = message.toLowerCase();
// const saleMessage.toLowerCase = 'SALE';
    // const spamMessage.toLowerCase = 'SPAM';
    // const hasSale = newMessage.includes('sale');
    // const hasSpam = newMessage.includes('spam');
    const type = newMessage.includes('sale') || newMessage.includes('spam') ? true : false;
    return type;
    // return  newMessage.includes('sale') || newMessage.includes('spam');
//     if (newMessage.includes('sale') || newMessage.includes('spam')) {
    //    let message = message.toLowerCase;
//     return true;
// } else {
//     return false;
//     }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true