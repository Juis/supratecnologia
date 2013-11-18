<div id="doc-conteudo" class="novidades-page">

   <section id="bloco-conteudo" class="bgParallax" data-speed="5">

        <div class="topo-novidades sticky">
            <header class="container-primario nbg">
                <h2 class="fl">NOVIDADES</h2>

                <a href="index" title="" class="fr">voltar ao in√≠cio <i class="icon-angle-double-right"></i></a>
                
                <?php $this->widget('application.components.KeywordSearchComponent'); ?>

            </header>
        </div>

         <div class="bloco npt">

            <section class="timeline relative fullWidth">


                <div class="posts" id="posts_timeline">
                    
                <?php if($models): ?>
                    
                    <?php foreach($models as $key => $model): $class = ($key % 2 === 0)? 'post-model fl' : 'post-model fr'; ?>
                    <div class="<?php echo $class; ?>">

                        <figure>
                            <a href="javascript" title="<?php echo $models[$key]->titulo; ?>"><img src="<?php echo CHtml::encode(Yii::app()->theme->baseUrl.'/img/'.$models[$key]->img); ?>" width="280" height="220" alt="<?php echo $models[$key]->titulo; ?>"></a>
                        </figure>
                        <a href="materia?id=<?php echo $models[$key]->id; ?> " title="<?php echo $models[$key]->titulo; ?>">
                            <h3><?php echo $models[$key]->titulo; ?></h3>
                        </a>
                        
                        <div id="infinite_navigation">
                            <?php $this->widget("ext.yiinfinite-scroll.YiinfiniteScroller", array(
                                "contentSelector" => "#posts_timeline",
                                "itemSelector" => "div.post-model",
                                "loadingText" => "CARREGANDO...",
                                "donetext" => "fim da lista, obrigado por ler nossas matÈrias!",
                                "pages" => $pages)); ?>
                        </div>
                            
                    </div>
                    <?php endforeach; ?>
                    
                <?php else: ?>
                    
                    <div class="post-model fl">
                        Nenhuma consulta encontrada!
                    </div>
                    
                <?php endif; ?>
                    
                </div>

            </section>
            
         </div>


    </section><!-- fim do conteudo -->

    <!--<footer class="fullWidth">

        <div class="container-primario">
            <a href="materia" title="" class="btn-timeline">
                CARREGAR MAIS NOVIDADES
            </a>
        </div>

    </footer>-->

</div>