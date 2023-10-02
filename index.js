let specialChar = '!@#$%^&*()_+/-.\][{}'
let smallCap = 'abcdefghijklmnopqrstuvwxyz'
let bigCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let int = '0123456789'

// console.log(specialChar.charAt(5));
// console.log(smallCap.charAt(5));
// console.log(bigCap.charAt(5));
// console.log(int.charAt(5));


let length = document.getElementById('length')
const generate = () =>{
    let temp = ""
    let i = 0
    while (i<length.value) {
        temp += specialChar.charAt(Math.floor(Math.random() * specialChar.length))
        temp += smallCap.charAt(Math.floor(Math.random() * smallCap.length))
        temp += bigCap.charAt(Math.floor(Math.random() * bigCap.length))
        temp += int.charAt(Math.floor(Math.random() * int.length))
        temp += ""
        i += 4
    }
    document.getElementById('root').innerText = temp
}