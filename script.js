const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => { //you get the innertext
    label.innerHTML = label.innerText
        .split('') // split it into an array. each letter as its own item in an array
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // map it to create an array of the letter with SPAN around it
        .join('') // then turn it back into a string
})