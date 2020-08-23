document.getElementById('test1').addEventListener('click', (e) => {
    e.target.style.color = "black" ? "red" : "black";
})

document.getElementById('test2').addEventListener('keypress', function(e) {
    e.target.style.color = "black" ? "red" : "black";
})

document.querySelectorAll('sas').forEach(item => {
    item.addEventListener('click', event => {
      alert("Test");
    })
  })


$('#test4').on("click", "li", function(event){
    alert();
})