

               <?php if($dataProvider): ?>
                   <?php 
                        $this->widget('zii.widgets.CListView', array(
                                'id' => 'PostList',
                                'dataProvider' => $dataProvider,
                                'itemView' => '_viewnovidades',
                                'template' => '{items} {pager}',
                                'pager' => array(
                                     'class' => 'ext.infiniteScroll.IasPager', 
                                     'rowSelector'=>'.post-model', 
                                     'listViewId' => 'PostList', 
                                     'header' => '',
                                     'loaderText'=>'Loading...',
                                     'options' => array(
                                         'history' => false, 
                                         'triggerPageTreshold' => 8, 
                                         'trigger'=>'<footer class="fullWidth">
                                                        <div class="container-primario">
                                                            <a href="materia" title="" class="btn-timeline">
                                                                CARREGAR MAIS NOVIDADES
                                                            </a>
                                                        </div>
                                                    </footer>'
                                    ),
                                )
                             )
                        ); 
                   ?>
                    
                <?php else: ?>
                    
                    <div class="post-model fl">
                        Nenhuma consulta encontrada!
                    </div>
                    
                <?php endif; ?>