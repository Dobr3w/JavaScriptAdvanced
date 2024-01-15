function wordUpper(str) {
   let text = str.split(/[^a-zA-Z0-9]+/)
                 .join(' ')
                 .trim()
                 .split(' ')
                 .map(x => x.toUpperCase())
                 .join(', ');
                 
console.log(text);
}


wordUpper('Hi, how are you?');
wordUpper('hello');