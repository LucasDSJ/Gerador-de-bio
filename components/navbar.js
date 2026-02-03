const NavbarComponent = {
    template: `
        <nav class="navbar navbar-expand-lg border-bottom border-light p-3" data-bs-theme="dark" style="background: rgb(71, 53, 148);">
        <div class="container-fluid">
            <a class="navbar-brand" style="font-size: 25pt" href="/index.html" >Gerador de Bio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
                    <li class="nav-item" style="font-size: 15pt">
                        <a class="nav-link active me-3" aria-current="page" href="sobre.html">Sobre o projeto</a>
                    </li>
                    <li class="nav-item" style="font-size: 15pt">
                        <a class="nav-link active" href="contato.html">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}