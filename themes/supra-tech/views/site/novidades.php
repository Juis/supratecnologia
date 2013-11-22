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
                                "loadingText" => "",
                                "donetext" => "",
                                "pages" => $pages)); ?>
                        </div>
                            
                    </div>
                    <?php endforeach; ?>
                    
                <?php else: ?>
                    
                    <div class="post-model fl">
                        Nenhuma consulta encontrada!
                    </div>
                    
                <?php endif; ?>