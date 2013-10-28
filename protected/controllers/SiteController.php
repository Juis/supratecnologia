<?php

class SiteController extends Controller
{
    private $keywordSearchColumnArray;
    public $currentSearchValue;
    
    /**
     * Declares class-based actions.
     */
    public function actions()
    {
        return array( 'page'=>array( 'class'=>'CViewAction' ) );
    }

    public function actionIndex()
    {   
        if(isset($_GET['searchbox']) && $_GET['searchbox']):

            # busca
            $this->keywordSearchColumnArray = array('titulo');
            $criteria = new CDbCriteria();

            if (isset($_GET['searchbox']) and strlen(trim(urlEncode($_GET['searchbox']))) > 0):

                $this->currentSearchValue = trim(urlEncode($_GET['searchbox']));
                $additionalCriteria = $this->makeKeywordSearchCondition(urlEncode($_GET['searchbox']));
                $criteria->addCondition($additionalCriteria);

            endif;

            if (isset($_GET['tag'])):
                
                $criteria->addSearchCondition('tags', urlEncode($_GET['tag']));
            
            endif;
            
        else:
            
            $criteria = new CDbCriteria();
        
        endif;
        
        # paginacao
        $count = Noticia::model()->count($criteria);
        $pages = new CPagination($count);

        $pages->pageSize = 8;
        $pages->applyLimit($criteria);
        $models = Noticia::model()->findAll($criteria);
        
        $this->render('index', array(
            'models' => $models,
            'pages' => $pages)
        );
    }
    
    public function actionFaleConosco()
    {
        $model = new Contato;

        if (isset($_POST['Contato'])):

            $model->attributes = $_POST['Contato'];

            if ($model->validate()):
                
                $message = new YiiMailMessage;
                $message->setBody($model->comentario, 'text/html');
                $message->subject = 'Email Supra Site';
                $message->addTo($model->email);
                $message->from = Yii::app()->params['adminEmail'];
                
                Yii::app()->mail->send($message);
                Yii::app()->user->setFlash('sucess', "Mensagem enviada com sucesso!");
                
                $this->redirect('index');
                
            endif;

        endif;

        $this->render('faleconosco', array('model' => $model));
    }
    
    public function actionCasosDeSucesso()
    {
        $this->render('casosdesucesso');
    }
    
    public function actionBusca()
    {
        $this->render('busca');
    }
    
    public function actionGeorreferenciamentoDaAtencaoBasica()
    {
        $this->render('georreferenciamentodaatencaobasica');
    }  
    
    public function actionGestaoDeAutorizacaoDeInternacaoHospitalar()
    {
        $this->render('gestaodeautorizacaodeinternacaohospitalar');
    }  
    
    public function actionGestaoDeFarmacia()
    {
        $this->render('gestaodefarmacia');
    }  
    
    public function actionGestaoDoTratamentoForaDeDomicilioTfd()
    {
        $this->render('gestaodotratamentoforadedomiciliotfd');
    } 
    
    public function actionGestaoDosAgentesDeSaude()
    {
        $this->render('gestaodosagentesdesaude');
    }   
    
    public function actionMateria()
    {
        # busca
        $this->keywordSearchColumnArray = array('titulo');
        $criteria = new CDbCriteria();

        if (isset($_GET['searchbox']) and strlen(trim(urlEncode($_GET['searchbox']))) > 0):

            $this->currentSearchValue = trim(urlEncode($_GET['searchbox']));
            $additionalCriteria = $this->makeKeywordSearchCondition(urlEncode($_GET['searchbox']));
            $criteria->addCondition($additionalCriteria);

        endif;

        if (isset($_GET['tag']))
            $criteria->addSearchCondition('tags', urlEncode($_GET['tag']));
        
        # dados da materia
        $materia = (isset($_GET['searchbox']) && $_GET['searchbox'])? Noticia::model()->findAll($criteria) : Noticia::model()->findByPk((int) $_GET['id']);
        
        $this->render('materia', array(
            'materia_dados' => $materia)
        );
    }      
    
    public function actionModulo()
    {
        $this->render('modulo');
    }    
    
    public function actionMonitoramentoDosIndicesDoPmaq()
    {
        $this->render('monitoramentodosindicesdopmaq');
    }  
    
    public function actionNovidades()
    {
        if(isset($_GET['searchbox']) && $_GET['searchbox']):

            # busca
            $this->keywordSearchColumnArray = array('titulo');
            $criteria = new CDbCriteria();

            if (isset($_GET['searchbox']) and strlen(trim(urlEncode($_GET['searchbox']))) > 0):

                $this->currentSearchValue = trim(urlEncode($_GET['searchbox']));
                $additionalCriteria = $this->makeKeywordSearchCondition(urlEncode($_GET['searchbox']));
                $criteria->addCondition($additionalCriteria);

            endif;

            if (isset($_GET['tag'])):
                
                $criteria->addSearchCondition('tags', urlEncode($_GET['tag']));
            
            endif;
            
        else:
            
            $criteria = new CDbCriteria();
        
        endif;
        
        # paginação
        $count = Noticia::model()->count($criteria);
        $pages = new CPagination($count);

        $pages->pageSize = 8;
        $pages->applyLimit($criteria);
        $models = Noticia::model()->findAll($criteria);
        // fim paginacao
        
        $this->render('novidades', array(
            'models' => $models,
            'pages' => $pages)
        );
    }  
    
    public function actionProntuarioMedicoAmbulatorial()
    {
        $this->render('prontuariomedicoambulatorial');
    } 
    
    public function actionQuemSomos()
    {
        $this->render('quemsomos');
    } 
    
    public function actionRegulacaoDeMarcacaoConsultasExames()
    {
        $this->render('regulacaodemarcacaoconsultasexames');
    }    
    
    public function actionRegulacaoDeLeitos()
    {
        $this->render('regulacaodeleitos');
    }
    
    public function actionWebMapasDaDengue()
    {
        $this->render('webmapasdadengue');
    }       
    
    public function actionSolucoes()
    {
        $this->render('solucoes');
    }       
    
    public function action404()
    {
            if($error=Yii::app()->errorHandler->error)
            {
                    if(Yii::app()->request->isAjaxRequest)
                            echo $error['message'];
                    else
                            $this->render('404', $error);
            }
    }
    
    /**
     * Make the keyword search SQL.
     * @param String  Search string input by user
     * @return String  SQL condition
     */
    private function makeKeywordSearchCondition($keywordStr, $calendario=null)
    {
        $criteriaSql = ($calendario)? " eventoData = '".$calendario."'" : '';
        
        $elementArray = array();
        $regX = "/[\s,]*\\\"([^\\\"]+)\\\"[\s,]*|[\s,]+/";
        $tempArray = preg_split($regX, trim($keywordStr), 0, PREG_SPLIT_DELIM_CAPTURE);

        foreach ($tempArray as $ind => $str)
            if (trim($str)) array_push($elementArray, $str);

        foreach ($this->keywordSearchColumnArray as $column):

            foreach ($elementArray as $value):

                if ($criteriaSql) 
                    $criteriaSql .= ' OR';

                $criteriaSql .= " $column LIKE '%".$keywordStr."%'";

            endforeach;

        endforeach;
        
        if(Yii::app()->controller->action->id == 'materia')
            $criteriaSql .= ' LIMIT 1 ';
        
        return $criteriaSql;
    }
}