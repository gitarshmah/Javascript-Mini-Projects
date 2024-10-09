const input = document.getElementById('input')

function typedvalue() {
    alert('You typed ' + input.value)
    return input.value
}

function checkpalindrome(puttext) {
    var newarray = puttext.split('')
    var reversearray = newarray.reverse()
    var newtext = reversearray.join('')

    if (puttext === newtext){
        return "This is a palindrome"
    } else{
        return "This is not a palindrome"
    }
       
   
}

const x = document.getElementById('pali')

x.addEventListener("click", function(){
    var y = document.getElementById('demo')
    y.innerHTML = checkpalindrome(input.value)
})



