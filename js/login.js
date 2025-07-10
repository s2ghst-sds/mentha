
// load no conteudo
document.addEventListener("DOMContentLoaded", () => {

    // carrega os usuarios já cadastrados, "ou" cria um array vazio
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    //função para salvar usuarios, transformando-os em string's.
    const saveUser = () => {
        localStorage.setItem('usuarios', JSONstringfy(usuarios));
    };
    
    //mostra no console os usuarios ja salvos, caso tenha
    console.log(usuarios);
    
    //faz com que ao click do botão de cadastro a div "aparecer-cad" aparece ou desapareça.
    document.getElementById("btn-cad").addEventListener("click", () => {
        document.getElementById("div-form-cad").classList.toggle("aparecer-cad")
    });
    
    //e.preventDefault, não permite que a pagina recarregue ao enviar os dados.
    // recebe os dados do novo usuario, os adiciona na array de usuarios (principal)
    // atualiza o array "usuarios", transformando-os em string's
    // fecha a div "aparecer-cad"
    // e limpa os campos de usuario e senha.
    document.getElementById("form-cad").addEventListener("submit", (e) => {
        e.preventDefault();
    
        const newuser = {
            usuario: document.getElementById("novo-user").value.trim(),
            senha: document.getElementById("nova-senha").value.trim()
        };
    
        usuarios.push(newuser);
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        alert("cadastro realizado");
    
        document.getElementById("form-cad").classList.toggle("aparecer-cad");
        document.getElementById("novo-user").value = "";
        document.getElementById("nova-senha").value = "";
    
    });
    
    //não permite o recarregamento da pag ao enviar o form, recebe usuario e senha,
    //valida os dados, redireciona a outra pagina, caso contrario acesso negado, com alert.
    document.getElementById("form-login").addEventListener("submit", (e) => {
        e.preventDefault();
    
        const nUser = document.getElementById("usuario").value;
        const nSenha = document.getElementById("senha").value;
    
        const validUser = usuarios.find((u) => u.usuario === nUser && u.senha === nSenha);
    
        if (validUser) {
            alert("acesso autorizado");
            window.open("sugestão.html", "_blank");
        }
    
        else {
            alert("usuarios ou senha invalidos")
        }
    });
    
    });
    