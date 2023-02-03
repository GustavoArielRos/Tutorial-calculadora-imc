var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var female = document.getElementById("f");
var male = document.getElementById("m");

/*criando o evento de click*/
document.getElementById("submit").addEventListener("click",validadeForm);

function validadeForm(){
    if(age.value =='' || height.value == '' || weight.valeu == '' || (male.checked == false && female.checked == false)){
        alert("Todos os campos são requeridos");
        document.getElementById("submit").removeEventListener("click",calculateIMC);
    } else{
        calculateIMC();
    }

    
}

function calculateIMC(){
    var arrayPerson = [age.value,height.value,weight.value];
    /* se o male for selecionado pelo usuario  */
    if(male.checked){
        arrayPerson.push("male");/* adiciona o elemento "male" no último índice da lista */

    }else if(female.checked){
        arrayPerson.push("female");

    }

    var imc = Number(arrayPerson[2] / (Number(arrayPerson[1])/100 * Number(arrayPerson[1])/100));/*vai transformar as strings da lista em número */

    var result = '';
    if(imc < 18.5){
        result = 'Magreza';
    } else if( 18.5 <=  imc && imc<= 24.9){
        result = 'Normal';
    } else if( 24.9 <=  imc && imc<= 30 ){
        result = 'Obeso';
    } else if(imc>30){
        result = 'Obesidade extrema';
    }
    
    /*criando novas tags do html(novas linhas) no javascript */
    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');

    var t = document.createTextNode(result);/*cria um texto */
    var b = document.createTextNode('IMC: ');
    var r = document.createTextNode(parseFloat(imc).toFixed(2) + ' kg/m^2'); /*numero de casas decimais */
    
    /*adicionando no h1 e h2 */
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    
    /* adicionando no body(estrutura do html,estrutura da página) o h1 e h2 */
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    
    /*tirar o evento de clique, para que não faça dps que for usado */
    document.getElementById("submit").removeEventListener("click",calculateIMC);
    document.getElementById("submit").removeEventListener("click",validadeForm);

}

document.getElementById("submit").addEventListener("click",calculateIMC);