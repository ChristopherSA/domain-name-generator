let pronoun = ['the','our','that'];
let adj = ['great','big','awesome'];
let noun = ['jogger','racoon','muppet'];
let dom = ['.com','.net','.us','.io'];

for (let i = 0;  i <pronoun.length; i++) {

    for (let j = 0;  j <adj.length; j++) {
        
        for (let k = 0;  k <noun.length; k++) {
 
            for (let x = 0;  x <dom.length; x++) {
             
                console.log(`${pronoun[i]}${adj[j]}${noun[k]}${dom[x]}`);

            }
        }
    }
}