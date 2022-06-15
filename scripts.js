const form = document.forms.calculadora
const btnCalculate = document.querySelector('#calculate')
const btnClear = document.querySelector('#clear')
const result = document.querySelector('#result')

const CalculateIMC = () => {
  const {name, height, weight} = form
  
  if (name.value == '' || height.value == '' || weight.value == '')  {
    result.textContent = `Preencha todos os campos`
  } else {
    const valorIMC = (weight.value / (height.value * height.value))
    let classIMC = ''
    
    if (valorIMC < 18.5) {
      classIMC = 'abaixo do peso'
    } else if (valorIMC < 25) {
      classIMC = 'com o peso ideal'
    } else if (valorIMC < 30) {
      classIMC = 'levemente acima do peso'
    } else if (valorIMC < 35) {
      classIMC = 'com obesidade grau I'
    } else if (valorIMC < 40) {
      classIMC = 'com obesidade grau II'
    } else {
      classIMC = 'com obesidade grau III'
    } 
      
    result.textContent = `${name.value} seu IMC é ${valorIMC.toFixed(1)} e você está ${classIMC}` 
  }
}

btnCalculate.addEventListener('click', (e) => {
  e.preventDefault()
  CalculateIMC()
})

btnClear.addEventListener('click', (e) => {
  form.reset()
})
