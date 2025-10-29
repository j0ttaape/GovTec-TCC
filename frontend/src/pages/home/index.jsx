import "./index.scss"

export default function Inicio() {

    return (


        <section className="container-home">

            <div class="container-navegacao">



                <div className="icone-logo">
                    <i className="fas fa-bolt"></i>
                    <h3 href="#" ><span className="Cor-title">Gov</span>Tec</h3>
                </div>


                <div class="links-containers">
                    <a href="#empresa">Nossa Equipe</a>
                    <a href="#sobre">Sobre Nós</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#contato">Contato</a>
                </div>


            </div>


            <div class="empresa-content">

                <h1 className="title">GovPulse: Inovação Digital para o Setor Público</h1>
                <p className="textos-p">Somos uma equipe especializada no desenvolvimento de soluções digitais para o governo. Combinamos expertise técnica com compreensão das necessidades do serviço público para criar plataformas que transformam a relação entre cidadãos e governo.</p>

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

            <div className="container-equipe">

                <div className="container-equipe-conteudo">

                    <div className="title-equipe">

                    <h1 id="sobre">Sobre Nossa Equipe</h1>

                    </div>

                    <div className="texto-sobre">
                        
                    <p>A GovTec nasceu da união de profissionais com vasta experiência tanto no setor público quanto em desenvolvimento de software. Nossa missão é modernizar a interação entre governo e cidadãos através de soluções digitais eficientes, seguras e acessíveis.

                        Com mais de 8 anos de experiência no desenvolvimento de sistemas para órgãos governamentais, entendemos as particularidades e desafios do setor público. Nossa equipe multidisciplinar inclui desenvolvedores, designers UX/UI, especialistas em segurança da informação e consultores com experiência em administração pública.</p>


                    <h4>Nossa Abordagem:</h4>
                            <ul>
                                <li>Desenvolvimento ágil e iterativo</li>
                                <li>Foco na experiência do usuário</li>
                                <li>Conformidade com legislação e padrões governamentais</li>
                                <li>Segurança e proteção de dados como prioridade</li>
                                <li>Suporte contínuo e manutenção proativa</li>
                                <li>Documentação completa e transparente</li>
                            </ul>

                    <a href="#">ENTRE EM CONTATO</a>

                    </div>
                </div>


                <div className="img-tec">

                    <i class="fas fa-laptop-code"></i>

                    <h3>Tecnologia com Propósito Público</h3>

                </div>
            </div>


        </section>
    )
}