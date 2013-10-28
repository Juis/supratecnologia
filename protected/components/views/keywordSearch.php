        <div class="busca-timeline mt20 mr20 fr">
            <?php $id = (isset($_GET['id'])? $_GET['id'] : 0) ?>
            <?php echo CHtml::beginForm(array($this->controller->getRoute(), 'id'=>$id), 'get', array('class'=>'form-busca')); ?>
                        <?php echo Chtml::textField('searchbox', $this->controller->currentSearchValue, array('placeholder'=>'encontre novidades...')); ?>
                        <?php echo CHtml::submitButton('', array('value'=> 'BUSCAR')); ?>
                        <i class="icon-search"></i>
                    </form>
            <?php echo CHtml::endForm(); ?>	
        </div>