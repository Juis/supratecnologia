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

         <div class="bloco npt">

            <section class="timeline relative fullWidth">


                <div class="posts">

                    <?php foreach($models as $key => $model): $class = ($key % 2 === 0)? 'post-model fl' : 'post-model fr'; ?>
                    <div class="<?php echo $class; ?>">

                        <figure>
                            <a href="javascript" title="<?php echo $models[$key]->titulo; ?>"><img src="<?php echo CHtml::encode(Yii::app()->theme->baseUrl.'/img/'.$models[$key]->img); ?>" width="280" height="220" alt="<?php echo $models[$key]->titulo; ?>"></a>
                        </figure>
                        <a href="materia?id=<?php echo $models[$key]->id; ?> " title="<?php echo $models[$key]->titulo; ?>">
                            <h3><?php echo $models[$key]->titulo; ?></h3>
                        </a>

                    </div>
                    <?php endforeach; ?>

                </div>

            </section>
            <?php $this->widget('CLinkPager', array('pages'=>$pages)); ?>
         </div>


    </section><!-- fim do conteudo -->

    <footer class="fullWidth">

        <div class="container-primario">
            <a href="materia" title="" class="btn-timeline">
                CARREGAR MAIS NOVIDADES
            </a>
        </div>

    </footer>

</div>