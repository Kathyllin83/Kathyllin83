window.onload = function () {
    carregarImovelSalvo();
  };
  
  function cadastrarImovel() {
    var imovel = document.getElementById("imovel").value;
    var descricao = document.getElementById("descricao").value;
  
    if (imovel && descricao) { 
      var novoImovel = {
        imovel: imovel, 
        descricao: descricao,
      };
  
      salvarImovel(novoImovel);
  
      
      adicionarImovelNaLista(novoImovel);
  
      
      document.getElementById("imovel").value = ""; 
    
      document.getElementById("descricao").value = "";
      window.location.href = "listaImóveis.html";
    } 
    else {
    alert("Preencha todos os campos do formulário.");
    }  
  }
  
  function adicionarImovelNaLista(imovel) {
    var listaImovel = document.getElementById("listaImovel");
    var novoImovel = document.createElement("li");
    novoImovel.innerHTML = `<strong>${imovel.imovel}</strong>: ${imovel.descricao}`; 
    listaImovel.appendChild(novoImovel);
  }
  localStorage.setItem("Imovel", JSON.stringify(imoveisAtualizados));
  os.forEach(adicionarImovelNaLista);
  
  function salvarImovel(imovel) {
    
    var imoveisSalvos = JSON.parse(localStorage.getItem("Imovel")) || [];
  
    imoveisSalvos.push(imovel);
  
    
    localStorage.setItem("Imovel", JSON.stringify(imoveisSalvos));
  }
  
  function carregarImovelSalvo() {
  
    var imoveisSalvos = JSON.parse(localStorage.getItem("Imovel")) || [];
  
  
    imoveisSalvos.forEach(adicionarImovelNaLista);
  }                                                                 