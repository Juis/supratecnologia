<div id="doc-conteudo" class="novidades-page">

    <section id="bloco-conteudo" class="bgParallax" data-speed="5">

        <div class="topo-novidades sticky">
            <header class="container-primario nbg">
                <h2 class="fl">NOVIDADES</h2>

                <a href="index" title="" class="fr">voltar ao início <i class="icon-angle-double-right"></i></a>

                <div class="busca-timeline mt20 mr20 fr">
                    <form class="form-busca" action="busca" method="">
                        <input type="search" name="" placeholder="encontre novidades...">
                        <button type="submit">BUSCAR</button> 
                        <i class="icon-search"></i>
                    </form>
                </div>
            </header>
        </div>


        <div id="materia" class="container-primario pt20 pb40">

            <div class="topo-materia fullWidth mb20">
                <small class="date mb20"><?php echo $materia_dados->data_cadastro; ?></small>
                <h1><?php echo $materia_dados->titulo; ?></h1>
            </div>


            <div class="container-materia fullWidth">
                
                <?php echo $materia_dados->conteudo; ?>
            
            </div>

            <div class="outras-materias">

                <div class="fullWidth">
                    <h2 class="fl">Outras novidades</h2>
                </div>

                <div class="grid-6 primeiro">

                    <figure class="fl mr15">
                        <a href="materia" title=""><img src="<?php echo CHtml::encode(Yii::app()->theme->baseUrl.'/img/904b7cd5.img6.jpg'); ?>" width="120" height="110" alt=""></a>
                    </figure>

                    <span class="fl">ANTERIOR</span>
                    <a href="materia" title="">
                        <h3>Como sincronizar páginas de web com o Chrome no PC e no celular</h3>
                    </a>

                </div>

                <div class="grid-6 ultimo txt-right">

                    <figure class="fr ml15">
                        <a href="materia" title=""><img src="<?php echo CHtml::encode(Yii::app()->theme->baseUrl.'/img/904b7cd5.img6.jpg'); ?>" width="120" height="110" alt=""></a>
                    </figure>

                    <span class="fr">PRÓXIMO</span>
                    <a href="materia" title="">
                        <h3>Como sincronizar páginas de web com o Chrome no PC e no celular</h3>
                    </a>

                </div>

            </div>

        </div>

     </section>

</div><!-- fim do content -->