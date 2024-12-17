document.addEventListener("DOMContentLoaded", function () {
    const fotoDocumento = document.getElementById("fotoDocumento");
    const previewImagem = document.getElementById("previewImagem");
    const ataForm = document.getElementById("ataForm");
  
    // Pré-visualização da imagem
    fotoDocumento.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewImagem.src = e.target.result;
          previewImagem.style.display = "block";
        };
        reader.readAsDataURL(file);
      } else {
        previewImagem.style.display = "none";
        previewImagem.src = "";
      }
    });
  
    // Manipulação do envio do formulário
    ataForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Aqui você pode adicionar a lógica para enviar os dados via backend
      console.log("Formulário enviado!");
  
      // Exibe o toast de sucesso
      const successToast = new bootstrap.Toast(document.getElementById("successToast"));
      successToast.show();
  
      // Reseta o formulário
      ataForm.reset();
      previewImagem.style.display = "none";
      previewImagem.src = "";
    });
  });
  