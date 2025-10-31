import "./index.scss"

export default function Inicio() {

    return (


        <section className="container-home">

            <div class="container-navegacao">



                <div className="icone-logo">
                    <img src="./public/image/logo.png" height={"130px"} />
                </div>


                <div class="links-containers">
                    <a href="#empresa">Nossa Equipe</a>
                    <a href="#sobre">Sobre Nós</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#contato">Contato</a>
                </div>


            </div>


            <div id="empresa" class="empresa-content">

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

            <div className="servicos-container">

                <section id="servicos" class="servicos">

                    <div class="container">

                        <div class="section-title">

                            <h1>Nossos Serviços</h1>
                            <p>Oferecemos soluções completas para modernização digital do setor público</p>

                        </div>

                        <div class="servicos-grid">

                            <div class="servico-card">

                                <div class="servico-icon">

                                    <i class="fas fa-globe"></i>

                                </div>

                                <h3>Portais Governamentais</h3>
                                <p>Desenvolvimento de portais institucionais modernos, responsivos e acessíveis para órgãos públicos</p>

                            </div>

                            <div class="servico-card">

                                <div class="servico-icon">
                                    <i class="fas fa-mobile-alt"></i>
                                </div>

                                <h3>Aplicativos Móveis</h3>
                                <p>Criação de aplicativos nativos e híbridos para iOS e Android, focados em serviços ao cidadão</p>

                            </div>

                            <div class="servico-card">

                                <div class="servico-icon">
                                    <i class="fas fa-database"></i>

                                </div>
                                <h3>Sistemas de Gestão</h3>
                                <p>Desenvolvimento de sistemas personalizados para gestão de processos internos e atendimento ao público</p>

                            </div>

                        </div>


                    </div>
                </section>


            </div>

            <section id="projetos" className="container-projetos">

                <div class="section-title">

                    <h1>Nossos Projetos</h1>
                    <p>Conheça alguns dos projetos que desenvolvemos para o setor público</p>

                </div>


                <section className="cards">

                    <div className="container-cards">


                        <div className="cards-bloco">

                            <div className="cards-icon">

                                <i class="fas fa-graduation-cap"></i>


                            </div>

                            <div className="cards-text">
                                <h3>DoeVida - Plataforma de Doação de Sangue</h3>
                                <p>Sistema completo para gestão de doadores de sangue, agendamento de doações e comunicação com hemocentros. Aumentou em 40% o número de doadores regulares.</p>


                            </div>

                            <div className="tags-container">
                                <span class="tags">React</span>
                                <span class="tags">Node.js</span>
                                <span class="tags">Mysql</span>
                                <span class="tags">API REST</span>
                            </div>

                        </div>

                    </div>

                    <div className="container-cards">

                        <div className="cards-bloco">

                            <div className="cards-icon">

                                <i class="fas fa-graduation-cap"></i>


                            </div>

                            <div className="cards-text">
                                <h3>DoeVida - Plataforma de Doação de Sangue</h3>
                                <p>Sistema completo para gestão de doadores de sangue, agendamento de doações e comunicação com hemocentros. Aumentou em 40% o número de doadores regulares.</p>


                            </div>

                            <div className="tags-container">
                                <span class="tags">React</span>
                                <span class="tags">Node.js</span>
                                <span class="tags">Mysql</span>
                                <span class="tags">API REST</span>
                            </div>

                        </div>

                    </div>
                </section>



            </section>


                <section className="container-contato">

<h1>COntato</h1>
                </section>



        </section>
    )
}