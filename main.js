const form =document.getElementById('agenda');

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeContato=document.getElementById('nome-contato');
    const inputNumeroTelefone=document.getElementById('numero-telefone');

    

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    //linha += `<td>${}</td>`;
    //linha += `<td>${}</td>`;

    linhas += linha;

    const corpoTabela =document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
   // alert(`contato: ${inputNomeContato.value} -Telefone: ${inputNumeroTelefone.value}`);

   inputNomeContato.value='';
   inputNumeroTelefone.value='';
});



