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

                                    <?php echo $form->checkboxList($model, 'modulos', 
                                        array(
                                            'Regulação de Marcação Consultas e Exames',
                                            'Prontuário Médico Ambulatorial',
                                            'Gestão de Autorização de Internação Hospitalar (AIH)',
                                            'Monitoramento dos índices do PMAQ',
                                            'Regulação de Leitos',
                                            'Gestão do Tratamento fora de domicílio (TFD)',
                                            'Gestão da Farmácia',
                                            'Gestão dos Agentes de Saúde com TABLET',
                                            'Georrefenciamento da Atenção Básica',
                                            'Web Mapas da Dengue' ), 
                                        array(
                                            'template' => '<div class="checkitem"> <spam class="fl mr5">{input}</spam><spam class="checklabel fl">{label}</spam></div>', 
                                            'separator' => '',
                                            'checkAll' => 'Marcar todos os módulos'
                                        )
                                    ); ?>
                                    
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