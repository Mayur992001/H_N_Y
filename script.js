// Array of wishes to be displayed randomly
const wishes = [
    "Happy New Year doston! 🎉 Is naye saal mein aapki zindagi khushiyon se bhari ho 🌟 aur har din naye safalta aur umeed ke saath aaye! 💪",
    "Naye saal ki naye shuruaat ho 🌱, har pal dosti, pyar, aur sukh-shanti se bhara ho ❤️. Happy New Year to you and your loved ones! 🥳",
    "Naye saal ki hardik subhkamnayein! 🙏 Is saal mein aapke saare sapne sach ho 💫, aur aapko har pal khushiyan milti rahein 😊.",
    "Happy New Year! 🎊 Har naye din ke saath aapki zindagi mein naye rang aayein 🌈, aur aapka har din pyar aur dosti se ghira ho 💖.",
    "Aapki zindagi mein naye saal mein naye sapne, naye khushiyan, aur naye mauke ho! 💫 Happy New Year, doston! 🎆",
    "Khush raho, sehatmand raho 💪, aur har din ko apne doston aur parivaar ke saath jeeyo ❤️. Happy New Year! 🎉",
    "Is naye saal mein aapke har din ki shuruaat khushi aur pyaar se ho 🌸. Naye saal ki hardik shubhkamnayein! ✨",
    "Happy New Year! 🥳 Zindagi mein naye safar ki shuruaat ho 🛤️, har pal pyaar aur dosti se bhara ho 💖, aur aapki har manokamna poori ho 🌟.",
    "Naye saal ki naye umeedein aur naye sapne aapko har din inspire karein 🌠. Happy New Year doston, aapka saal super awesome ho! 🤩",
    "Aapki zindagi mein naye saal mein khushiyon ka jahan ho 🌏, aur dosti ka safar aur gehra ho 👫. Happy New Year to the best friends ever! 🎉"
];

// Array of funny wishes for popups
const funnyWishes = [
    "Happy New Year doston! 🎉 Naye saal mein tumhare sapne utne hi bade ho jitni tumhari beizzati ki capacity hai 😜. Par phir bhi, tumhara saath zaroori hai! 🥂",
    "Happy New Year! 🥳 Tumhare jaise doston ke saath naye saal mein masti karna hai, par tumhare dimag ka use kabhi nahi karna 😅. Tumhe bhi pyaar, dosti aur thodi si beizzati! 😜",
    "Naye saal mein tumhara IQ thoda sa badhe, par tumhare jokes ka level waise hi rahe 😆. Happy New Year, doston! 🎉",
    "Happy New Year! 🥳 Is naye saal mein aapko itni khushiyan milein ki aap apni beizzati bhool jao 😜. Kya karoon, dosti ka bhi apna style hota hai! 😂",
    "Naye saal mein tumhare sapne sach ho... lekin tumhare 'great ideas' ko log ignore karte rahein 😆. Happy New Year, doston! 🎊",
    "Happy New Year! 🥂 Tum dono ki dosti ki wajah se hum sabko thodi aur beizzati milti hai, par kya karein, yeh pyaar hai! 😂"
];

// Function to get a random wish from the array
function getRandomWish() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    return wishes[randomIndex];
}

// Function to show a random funny popup message
function getRandomFunnyWish() {
    const randomIndex = Math.floor(Math.random() * funnyWishes.length);
    return funnyWishes[randomIndex];
}

// Set the random wish in the message section of the card
document.getElementById('wishMessage').innerHTML = getRandomWish();

// Celebrate now button click will show a random funny message
function celebrateNow() {
    alert(getRandomFunnyWish());
}
