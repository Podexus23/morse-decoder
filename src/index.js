const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
 let basic = ""
 const space = "**********"

 const recoder = (str) =>{
    let word = ''
    for(let i = 0; i<str.length ; i +=2){
       let piece = '';
       (i !== 8)? piece = str.slice(i, (str.length + (-8+i))): piece = str.slice(i);
       if(piece === "00") word += '';
       if(piece === "10") word += '.';
       if(piece === "11") word += '-';
    }
    return MORSE_TABLE[word]
 }

 for(let i = 0; i<expr.length; i += 10){
   let decripta = '';
   (i !== expr.length-10)? decripta = expr.slice(i , -(expr.length -10 - i)): decripta = expr.slice(i);
   (decripta === space)? basic += ' ': basic += recoder(decripta);
 }
 return basic
}

module.exports = {
    decode
}