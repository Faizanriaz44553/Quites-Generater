function quaitesGenerator() {
    let qauites = ["The only way to do great work is to love what you do." ,
         "In the middle of difficulty lies opportunity." ,
       "Success is not final, failure is not fatal: It is the courage to continue that counts." ,
        "The best way to predict the future is to invent it." ,
        "Believe you can and you're halfway there." ,
        "Happiness is not something ready made. It comes from your own actions." ,
       "The only limit to our realization of tomorrow will be our doubts of today." ,
        "Life is 10% what happens to us and 90% how we react to it." ,
        "The only person you are destined to become is the person you decide to be." ,
        "Strive not to be a success, but rather to be of value." ,
         "In the end, it's not the years in your life that count. It's the life in your years." ,
        "It does not matter how slowly you go as long as you do not stop." ,
         "Change your thoughts and you change your world." ,
        "Do not go where the path may lead, go instead where there is no path and leave a trail." ,
         "The only true wisdom is in knowing you know nothing." ,
        "The future belongs to those who believe in the beauty of their dreams." ,
         "The journey of a thousand miles begins with one step." ,
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." ,
        "You miss 100% of the shots you don't take." ,
         "Opportunities don't happen, you create them." ,
        "I have not failed. I've just found 10,000 ways that won't work." ,
       "Life isn't about finding yourself. Life is about creating yourself." ,
         "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
        "You must be the change you wish to see in the world." ,
         "The only way to do great work is to love what you do." ,
         "If you want to lift yourself up, lift up someone else." ,
         "The secret of getting ahead is getting started." ,
       "Success is not how high you have climbed, but how you make a positive difference to the world." ,
        "The greatest wealth is to live content with little." ,
        "The best revenge is massive success." ,
        ]
let para = document.querySelector("#para")
let remdomQuates = Math.random() * qauites.length
let equal = Math.floor(remdomQuates)
console.log(`"${qauites[equal]}"`);
para.innerHTML = (`"${qauites[equal]}"`);


}
