document.getElementById('test1').addEventListener('click', (e) => {

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


$('#test4').on("click", "li", function(event){
    alert();
})