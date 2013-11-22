<?php if(Yii::app()->controller->action->id != 'novidades'): ?>
<header id="doc-topo">

    <div class="conteudo-topo">

        <div class="inner">

            <h1 class="logo">
                <a href="index" title="" class="block fl indent" onclick="window.location.href='index'">
                    <span>SUPRA TECNOLOGIA</span>
                </a>
            </h1>

            <span class="phone">
                <i class="icon-phone"></i>
                (86) 3211-0004
            </span>

            <nav class="menu">
                <a href="index" title="Voltar ao início" class="back-to-home indent" onclick="window.location.href='index'">
                    <i class="icon-home"></i>     
                    <span>Voltar ao início</span>
                </a>
                <ul class="nostyle listfloat">
                    <li>
                        <a href="quemsomos" title="Quem Somos">
                            QUEM SOMOS
                        </a>
                    </li>
                    <li>
                        <a href="solucoes" title="Soluções">
                            SOLUÇÕES
                        </a>
                    </li>
                    <li>
                        <a href="casosdesucesso" title="Casos de Sucesso">
                            CASOS DE SUCESSO
                        </a>
                    </li>
                    <!--
                        <li>
                            <a id="btn-go-novidades" href="#bloco-conteudo" title="Novidades">
                                NOVIDADES
                            </a>
                        </li>
                    -->
                    <li>
                        <a id="btn-go-novidades" href="<?php echo CHtml::encode(Yii::app()->theme->baseUrl.'/../../index#bloco-conteudo'); ?>" title="Novidades">
                            NOVIDADES
                        </a>
                    </li>
                    <li>
                        <a href="faleconosco" title="Fale Conosco">
                            FALE CONOSCO
                        </a>
                    </li>
                </ul>
            </nav>



            

        </div>

    </div>

</header>
<?php endif; ?>