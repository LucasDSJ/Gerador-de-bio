function mostrarNotificacao(mensagem, cor) {
    Toastify({
        text: mensagem,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: cor,
        
        stopOnFocus: true,
        style: {
            borderRadius: "15px",
            boxShadow: `0 2px 10px ${cor}`
        }
    }).showToast();
}