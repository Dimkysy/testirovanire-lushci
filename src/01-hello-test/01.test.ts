import {splitIntoWords, sum} from "./01";

let a:number;
let b:number;
let c:number;

beforeEach ( () => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {

    //action
    const result1 =  sum(a,b)
    a = 100
    const result2 =  sum(a, b)
    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(102)

})

test ("spliting into word", () => {
    //data
    const sent1 ="Hello my friend!"
    const sent2 = "Js - the best   programming language."

    //action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")


    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("js")


})