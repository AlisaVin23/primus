const primusContainer = document.querySelector('.primusContainer')
//++
function testPrimzahl() {
  let testPrime = document.getElementById('num_input').value;
  testPrime = parseInt(testPrime);

  if (isPrime(testPrime)) {
    let outputDo = testPrime + " ist eine Primzahl ( ͡° ͜ʖ ͡ -)"
    document.getElementById('primus_result').innerText = outputDo;
  }
  else {
    let outputDont = testPrime + " ist keine Primzahl ┐( ͡° ʖ̯ ͡°)┌"
    document.getElementById('primus_result').innerText = outputDont;
  } 
}
//++
function isPrime(testPrime) {
  if (testPrime < 2) {
    return false;
}
  for (let i = 2; i <= Math.sqrt(testPrime); i++) {
    if (testPrime % i === 0) {
      return false;
    }
  }
  return true;
}
//++
let primes = [];
/*function findPrimesInArray(start, end) {

  move();
  primes = [];  
  for (let number = Math.max(2, start); number <= end; number++) {
    if (isPrime(number)) {
      primes.push(' ' + number)
    }
  }
  console.log(primes.indexOf((primes.lenght) - 1));
  return primes;
}*/

//++
document.getElementById('progress__bar').style.display = 'none';

function primesOutput() {                                                    
  document.getElementById('progress__bar').style.display = 'block';
  loadedData();
  function findPrimesInArray(start, end) {
    primes = [];  
    for (let number = Math.max(2, start); number <= end; number++) {
      if (isPrime(number)) {
        primes.push(' ' + number)
      }
    }
    return primes;
  }
  let parameter1 = document.getElementById('num_input_area_from').value;
  let parameter2 = document.getElementById('num_input_area_to').value;
  
  let result = findPrimesInArray(parameter1, parameter2);
  
  if (result.length >= 1) {                                                   //++
    document.getElementById('num_output').innerText = result;
  } else {
    let noResult = "Hier gibt es keine Primzahlen (ㆆ_ㆆ)";
    document.getElementById('num_output').innerText = noResult;
  }

  let divElement = document.getElementById('num_output');
  divElement.style.wordBreak = 'normal'; 
  divElement.style.overflow = 'auto';                                      
}
//++
function deleteItem() {
  let element = document.getElementById('num_input');
  element.value = "";
  let answer = document.getElementById('primus_result');
  answer.innerText = "";
}
//++
function deleteOutput() {
  let output = document.getElementById('num_output');
  output.innerText = "";
  let valuePar1 = document.getElementById('num_input_area_from');
  valuePar1.value = "";
  let valuePar2 = document.getElementById('num_input_area_to');
  valuePar2.value = "";
  document.getElementById('progress__bar').style.display = 'none';
}

// Muss noch angepasst werden

/*function loadedData() {
  let id = setInterval(frame, 1);
  let elem = document.getElementById('progress__bar');
  let width = 1;

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      document.getElementById('btn_search').disabled = false;
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById('progress__bar').innerHTML = width * 1 + '%';
      document.getElementById('btn_search').disabled = true;
    }
  }
}*/

// ++
function saveTextContentAsFile() {
  let textAreaContent = document.getElementById('num_output').innerText;
  let blob = new Blob([textAreaContent], { type: 'text/plain' });
  let anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(blob);
  anchor.download = 'textarea_content.txt';
  anchor.click();
  URL.revokeObjectURL(anchor.href);
}

function loadedData() {                                         //WICTIG NACHZUBEARBEITEN!!!! DAS HAT MAN FAST GESCHAFFT
  let elem = document.getElementById('progress__bar');
  let totalData = primes.length;   // 100%
  let onePercent = totalData / 100;
  let width = 50;
  let loading = setInterval(loadd, 1)
  function loadd() {
    if (width >= onePercent * 100) {
      clearInterval(loading);
      //document.getElementById('btn_search').disabled = true;
    } else {
      width += onePercent;                                    // gibt das Ergebnis vom ganzen Array (ugf. 1000000)
      elem.style.width = width + '%';
      document.getElementById('progress__bar').innerHTML = width * 1 + '%';
    }
  }
}