const nome = prompt("Digite seu nome:");
funcao(nome);


function funcao(nome){
  console.log("Olá," + nome + "!");
  console.log("Nos esforçamos muito para que os nossos serviços estejam a altura de suas espectativas...")
}

const nota = Number(prompt("Por favor insira de 1 a 10 a sua satisfação com os nossos serviços."));

if(nota > 6){
  console.log("Ficamos MUITO felizes de saber que esta satisfeito com os nossos serviços!!")
  console.log("Agradecemos pela sua satisfação e espero que tenha um otimo dia")
}else{
  console.log("Infelizmente estamos muito tristes com a sua satisfação, mas nos esforçamos para que o nosso cliente tenha uma boa experiência com os nossos serviços.")
  console.log("Agradecemos pela sua satisfação e espero que tenha um otimo dia")
}
