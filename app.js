document.getElementById('test1').addEventListener('click', (e) => {
    if (e.target.style.color === "black") {
        e.target.style.color = "red";
    } else {
        e.target.style.color = "black"
    }
})

document.getElementById('test2').addEventListener('keypress', function(e) {
    if (e.target.style.color === "black") {
        e.target.style.color = "red";
    } else {
        e.target.style.color = "black"
    }
})

document.getElementById('test2').addEventListener('click', function(e) {
    if (e.target.style.color === "black") {
        e.target.style.color = "red";
    } else {
        e.target.style.color = "black"
    }
})


document.querySelectorAll('sas').forEach(item => {
    item.addEventListener('click', event => {
      alert("Test");
    })
  })


$('#test6').on("click", "li", function(event){
    alert();
})

$('#test7').on("click", "li", function(event){
    alert();
})

$('#test8').on("click", function(event){
    alert();
})

document.getElementById('test9').addEventListener('mouseover', (e) => {
    if (e.target.style.color === "black") {
        e.target.style.color = "red";
    } else {
        e.target.style.color = "black"
    }
})