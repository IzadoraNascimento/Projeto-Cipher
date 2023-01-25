const cipher = {
  encode: function (chave, texto){
    if (texto,chave == null && texto,chave == undefined && texto,chave == 0) {
      alert("Preencha todos os campos");
    }
    
    let textoCodificado = "";
    texto = texto.toUpperCase();

    for (let i = 0; i < texto.length; i++){
      const position = texto.charCodeAt(i);
      
      if (position >= 65 && position <= 90){
        textoCodificado += String.fromCharCode (((position - 65 + chave) % 26) + 65);
      }
      if (position >= 32 && position <= 64){
        textoCodificado += texto.charAt(i);
      }
    }
    return textoCodificado;
  },

  decode: function (chave,texto){
    if (typeof texto !== "string" || typeof chave !== "number" || texto === "" || chave === 0){
      alert("Preencha todos os campos");
    }

    let textoDescodificado = "";
    texto = texto.toUpperCase();

    for (let i = 0; i < texto.length; i++){
      const position = texto.charCodeAt(i);
      
      if (position >= 65 && position <= 90){
        textoDescodificado += String.fromCharCode (((position + 65 - chave) % 26) + 65);
      }
      if (position >= 32 && position <= 64){
        textoDescodificado += texto.charAt(i);
      }
    }
    return textoDescodificado;
  },




};

export default cipher;
