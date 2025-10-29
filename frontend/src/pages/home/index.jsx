import "./index.scss"

export default function Inicio(){

    return(

        
        <section className="container-home">
        
            <div class="container-navegacao">
                <nav>
                    <a href="#" class="logo">
                    <i class="fas fa-bolt"></i> Gov<span>Pulse</span>
                    </a>

                    <ul class="nav-links">
                    <li><a href="#empresa">Nossa Equipe</a></li>
                    <li><a href="#sobre">Sobre Nós</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                    </ul>
                        <div class="mobile-menu">
                            <i class="fas fa-bars"></i>
                        </div>
                </nav>
            </div>


            <div class="container">
                <div class="empresa-content">
                    <h1>GovPulse: Inovação Digital para o Setor Público</h1>
                    <p>Somos uma equipe especializada no desenvolvimento de soluções digitais para o governo. Combinamos expertise técnica com compreensão das necessidades do serviço público para criar plataformas que transformam a relação entre cidadãos e governo.</p>
                    
                    <div class="empresa-destaque">
                        <div class="destaque-item">
                            <i class="fas fa-cogs"></i>
                            <h3>Tecnologia Avançada</h3>
                            <p>Utilizamos as mais modernas tecnologias para desenvolver soluções robustas e escaláveis</p>
                        </div>
                        <div class="destaque-item">
                            <i class="fas fa-shield-alt"></i>
                            <h3>Segurança e Conformidade</h3>
                            <p>Todas as nossas soluções seguem rigorosos padrões de segurança e conformidade governamental</p>
                        </div>
                        <div class="destaque-item">
                            <i class="fas fa-users"></i>
                            <h3>Foco no Cidadão</h3>
                            <p>Desenvolvemos pensando na experiência do usuário final, garantindo facilidade de uso e acessibilidade</p>
                        </div>
                    </div>
                </div>
            </div>        
            
        </section>
    )
}