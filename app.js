document.getElementById('test1').addEventListener('click', () => {
    console.log('testtest');
})

var function2 = function() {
    console.log('trust...');
}


document.getElementById('test2').addEventListener('keypress', function() {
    console.log('fdas')
})

document.querySelectorAll('sas').forEach(item => {
    item.addEventListener('click', event => {
      console.log('fasd')
    })
  })

  var eventElements = document.querySelectorAll("[event='yes']");
  var countEventElements = eventElements.length;