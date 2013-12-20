                <?php if($data): ?>
                    
                    <?php 
                            #foreach($models as $key => $model): $class = ($key % 2 === 0)? 'post-model fl' : 'post-model fr'; 
                            $imgUrl = ($data->tipo)? 'img-modulos/'.$data->img : $data->img;
                            $ulrMateria = ($data->tipo)? $data->tipo_url : 'materia?id='.$data->id;
                    ?>
                    <div class="<?php echo ($data->id % 2)?'post-model fl' : 'post-model fr';#$class; ?>">

                        <figure>
                            <a href="<?php echo $ulrMateria; ?>" title="<?php echo $data->titulo; ?>"><img src="<?php echo CHtml::encode(Yii::app()->theme->baseUrl.'/img/'.$imgUrl); ?>" width="280" height="220" alt="<?php echo $data->titulo; ?>"></a>
                        </figure>
                        <a href="<?php echo $ulrMateria; ?>" title="<?php echo $data->titulo; ?>">
                            <h3><?php echo $data->titulo; ?></h3>
                        </a>
                       
                    </div>
                    <?php #endforeach; ?>
                    
                <?php else: ?>
                    
                    <div class="post-model fl">
                        Nenhuma consulta encontrada!
                    </div>
                    
                <?php endif; ?>