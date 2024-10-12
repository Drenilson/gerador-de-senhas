document.querySelector('#gerar-senha').addEventListener('click', function() {
    const senha = gerarSenha(12);
    document.querySelector('#senha-gerada').innerText = senha;
});

document.querySelector('#copiar-senha').addEventListener('click', copiarSenha);

function gerarSenha(comprimentoDaSenha) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let senha = '';
    for (let i = 0; i < comprimentoDaSenha; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    return senha;
}

function copiarSenha() {
    const senhaGerada = document.querySelector('#senha-gerada').innerText;

    if (senhaGerada) {
        navigator.clipboard.writeText(senhaGerada)
            .then(() => {
                alert('Senha copiada para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar a senha: ', err);
            });
    } else {
        alert('Nenhuma senha gerada para copiar.');
    }
}
