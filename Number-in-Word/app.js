let a=["","one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "eventeen ", "eighteen ","nineteen"]
let b=["","", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
function convertInWord(input){
    if (typeof input != 'number') return "empty value";
    let output="";
    let num=("000000000000"+input).slice(-12).match(/^(\d{2})(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    output += (num[1] !=0) ? (a[num[1]] ||  b[num[1][0]] + ' ' + a[num[1][1]]) + " thousand crore " : "";    
    output += (num[2] !=0) ? (a[num[2]] ||  b[num[2][0]] + ' ' + a[num[2][1]]) + " hundred crore " : "";
    output += (num[3] !=0) ? (a[num[3]] ||  b[num[3][0]] + ' ' + a[num[3][1]]) + " crore " : "";
    output += (num[4] !=0) ? (a[num[4]] ||  b[num[4][0]] + ' ' + a[num[4][1]]) + " lakh " : "";
    output += (num[5] !=0) ? (a[num[5]] ||  b[num[5][0]] + ' ' + a[num[5][1]]) + " thousand " : "";
    output += (num[6] !=0) ? (a[num[6]] ||  b[num[6][0]] + ' ' + a[num[6][1]]) + " hundred " : "";
    output += (num[7] !=0) ? ((output !="") ? "and " : "") + (a[num[7]] ||  b[num[7][0]] + ' ' + a[num[7][1]]) + " only" : "";
    return output
}

let _convertInWord=convertInWord(200000000)
console.log(_convertInWord)