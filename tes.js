const ranks = [3,4,3,0,2,2,3,0,0];

function solution(ranks) {    
    if (ranks.length > 0) {
        let reports = 0;
        let currentNum;
        let currentNumCounter = 1;
        ranks.sort();     
        currentNum = ranks[0];        
        for (let index = 1; index < ranks.length; index++) {            
            if (currentNum === ranks[index]) {
                currentNumCounter += 1;
            } else if (ranks[index] === currentNum + 1) {
                reports += currentNumCounter;
                currentNum = ranks[index];
                currentNumCounter = 1;
            } else {
                currentNumCounter = 0;
                currentNum = ranks[index];
                currentNumCounter = 1;
            }                        
        }    
        return reports;
    } else {
        return 0;
    }    
}

// console.log(solution(ranks));

const string = 'accvacc';
// console.log(string.substring(0, 1));
// console.log(string.substring(1, string.length - 1));

function solution2(S) {
    let biggest = 0;
    let prefix;
    let suffix;
    if (S.length > 0) {
        for (let index = 0; index < S.length; index++) {
            // get prefix            
            prefix = S.substring(0, index + 1);
            suffix = S.substring(S.length, S.length - (index + 1));                        
            if (prefix === suffix && prefix.length < S.length && suffix.length < S.length) {                                
                biggest = suffix.length;
            }            
        }
        return biggest;
    } else {
        return 0;
    }
}
// console.log('answer = ', solution2(string));


const treeTest = {
    x: 4,
    l: {
        x: 5,
        l:{
            x:4,
            l: {
                x:5,
                r: null,
                l: null
            },       
            r: null
        },
        r: null
    },
    r: {
        x: 6,
        r: {
            x: 6,
            r: null,
            l: null
        },
        l: {
            x:1,
            r: null,
            l: null
        }
    }
}


function solution3(tree, counter, list) {        
    if(tree !== null && !list.includes(tree.x))
    {   
        list.includes(1);
        list.push(tree.x);
        console.log(list);        
        // console.log(tree.x);        
        const left = solution3(tree.l, counter, list);                 
        const right = solution3(tree.r, counter, list);                             
        // finish the list        
        return list = [...left, ...right];
    } else {
        return [];
    }     
}
const array = [];
solution3(treeTest, 0, array);