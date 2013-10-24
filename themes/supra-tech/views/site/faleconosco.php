<div id="doc-conteudo">

     <section id="bloco-conteudo" class="bgParallax" data-speed="5">

        <div class="bloco">
            <header class="fullWidth nbg">
                <h2 class="fl">Fale Conosco</h2>
                <a href="index.html" title="" class="fr">voltar ao início <i class="icon-angle-double-right"></i></a>
            </header>
        </div>

        <div id="contato" class="container-primario pt20 pb40">


           <div class="grid-9 nml">
               <div class="alert">
                    <strong>Olá, Seja bem vindo!</strong><br>
                    Teremos imenso prazer em atendê-lo;

               </div>
               <div class="form-contato">
                    <?php $form=$this->beginWidget('CActiveForm', array(
                        'id'=>'contato-form',
                        'enableClientValidation'=>true,
                        'clientOptions'=>array( 'validateOnSubmit'=>true )
                    )); ?>
                        <ul class="nostyle listfloat">
                            <li>
                                <?php echo $form->labelEx($model,'nome').$form->error($model,'nome'); ?>
				<?php echo $form->textField($model,'nome', array('id'=>'nome', 'placeholder'=>'..digite aqui o seu nome', 'required'=>'true', 'autofocus'=>'')); ?>
                            </li>
                            <li>
                                <?php echo $form->labelEx($model,'email').$form->error($model,'email'); ?>
				<?php echo $form->textField($model,'email', array('id'=>'mail', 'placeholder'=>'..digite aqui o seu e-mail', 'required'=>'true')); ?>
                            </li>
                            <li>
                                <?php echo $form->labelEx($model,'municipio').$form->error($model,'municipio'); ?>
				<?php echo $form->textField($model,'municipio', array('id'=>'mail', 'placeholder'=>'..município e instituição', 'required'=>'true')); ?>
                            </li>
                             <li>
                                
                                <label for="modulo">Quais os módulos de seu interesse?</label>

                                <div class="label-check">

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'regulacao_marcacao_consultas_exames', array('class'=>'fl mr5', 'id'=>'Checkbox1', 'value'=>'1')); ?>
                                        <?php echo $form->labelEx($model,'regulacao_marcacao_consultas_exames', array('class'=>'checklabel fl')).$form->error($model,'regulacao_marcacao_consultas_exames'); ?>
                                    </div>

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'prontuario_medico_ambulatorial', array('class'=>'fl mr5', 'id'=>'Checkbox2', 'value'=>'2')); ?>
                                        <?php echo $form->labelEx($model,'prontuario_medico_ambulatorial', array('class'=>'checklabel fl')).$form->error($model,'prontuario_medico_ambulatorial'); ?>
                                    </div>

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'gestao_autorizacao_internacao_hospitalar', array('class'=>'fl mr5', 'id'=>'Checkbox3', 'value'=>'3')); ?>
                                        <?php echo $form->labelEx($model,'gestao_autorizacao_internacao_hospitalar', array('class'=>'checklabel fl')).$form->error($model,'gestao_autorizacao_internacao_hospitalar'); ?>
                                    </div>

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'monitoramento_indices_pmaq', array('class'=>'fl mr5', 'id'=>'Checkbox4', 'value'=>'4')); ?>
                                        <?php echo $form->labelEx($model,'monitoramento_indices_pmaq', array('class'=>'checklabel fl')).$form->error($model,'monitoramento_indices_pmaq'); ?>
                                    </div>

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'regulacao_leitos', array('class'=>'fl mr5', 'id'=>'Checkbox5', 'value'=>'5')); ?>
                                        <?php echo $form->labelEx($model,'regulacao_leitos', array('class'=>'checklabel fl')).$form->error($model,'regulacao_leitos'); ?>
                                    </div>

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'gestao_tratamento_domicilio', array('class'=>'fl mr5', 'id'=>'Checkbox6', 'value'=>'6')); ?>
                                        <?php echo $form->labelEx($model,'gestao_tratamento_domicilio', array('class'=>'checklabel fl')).$form->error($model,'gestao_tratamento_domicilio'); ?>
                                    </div>

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'gestao_farmacia', array('class'=>'fl mr5', 'id'=>'Checkbox7', 'value'=>'7')); ?>
                                        <?php echo $form->labelEx($model,'gestao_farmacia', array('class'=>'checklabel fl')).$form->error($model,'gestao_farmacia'); ?>
                                    </div>

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'gestao_agentes_saude_tablet', array('class'=>'fl mr5', 'id'=>'Checkbox8', 'value'=>'8')); ?>
                                        <?php echo $form->labelEx($model,'gestao_agentes_saude_tablet', array('class'=>'checklabel fl')).$form->error($model,'gestao_agentes_saude_tablet'); ?>
                                    </div>

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'georrefenciamento_atencao_basica', array('class'=>'fl mr5', 'id'=>'Checkbox9', 'value'=>'9')); ?>
                                        <?php echo $form->labelEx($model,'georrefenciamento_atencao_basica', array('class'=>'checklabel fl')).$form->error($model,'georrefenciamento_atencao_basica'); ?>
                                    </div>

                                    <div class="checkitem">
                                        <?php echo $form->checkBox($model,'web_mapa_dengue', array('class'=>'fl mr5', 'id'=>'Checkbox10', 'value'=>'10')); ?>
                                        <?php echo $form->labelEx($model,'web_mapa_dengue', array('class'=>'checklabel fl')).$form->error($model,'web_mapa_dengue'); ?>
                                    </div>

                                    <!--<div class="checkitem pt20">
                                        <?php #echo $form->checkBox($model,'marcar_todos_modulos', array('class'=>'fl mr5', 'id'=>'toggle', 'value'=>'select', 'onclick'=>'do_this()')); ?>
                                        <?php #echo $form->labelEx($model,'marcar_todos_modulos', array('class'=>'checklabel fl')).$form->error($model,'marcar_todos_modulos'); ?>
                                    </div> -->

                                </div>

                            </li>
                            <li>
                                <label for="msg">Gostaria de deixar um comentário?</label>
                                <textarea cols="" rows="" id="msg" name="msg"></textarea>
                            </li>
                            <li>
                                <?php echo CHtml::submitButton('Enviar mensagem', array('class'=>'fr')); ?>
                                
                            </li>
                        </ul>
                    <?php $this->endWidget(); ?>
               </div>

            </div>



            <div class="grid-3">

                <address>
                    <i class="email_amarelo"></i>
                    <span class="phone fullWidth">
                        <i class="icon-phone"></i>
                        (86) 3211-0004
                    </span>
                    <a href="mailto" title="" class="fullWidth mb5">atendimento@supratecnologia.com</a>

                </address>

            </div>



        </div>


     </section>

</div><!-- fim do content -->