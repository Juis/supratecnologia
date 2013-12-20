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
        if(isset($_POST['searchbox']) && $_POST['searchbox']):

            # busca
            $this->keywordSearchColumnArray = array('titulo');
            $criteria = new CDbCriteria();

            if (isset($_POST['searchbox']) and strlen(trim(urlEncode($_POST['searchbox']))) > 0):

                $this->currentSearchValue = trim(urlEncode($_POST['searchbox']));
                $additionalCriteria = $this->makeKeywordSearchCondition(urlEncode($_POST['searchbox']));
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

        $pages->pageSize = 1;
        $pages->applyLimit($criteria);
        $models = Noticia::model()->findAll($criteria);
        
        $dataProvider = new CActiveDataProvider('Noticia', array(
                                'criteria' => $criteria,
                                'pagination'=>array(
                                    'pageSize'=>4,
                                ),
                            )
                        );
        
        $this->render('index', array(
            'models' => $models,
            'pages' => $pages,
            'dataProvider' => $dataProvider)
        );
    }
    
    public function actionFaleConosco()
    {
        $model = new Contato;
        $modulos = '';
        
        if (isset($_POST['Contato'])):

            $model->attributes = $_POST['Contato'];

            if ($model->validate()):
                var_dump($_POST['Contato']['modulos']);
                if($_POST['Contato']['modulos']):
                    
                    $modulos = "modulos: \n";
                    $arrayModulos = array(
                        1=>'Regulação de Marcação Consultas e Exames',
                        2=>'Prontuário Médico Ambulatorial',
                        3=>'Gestão de Autorização de Internação Hospitalar (AIH)',
                        4=>'Monitoramento dos índices do PMAQ',
                        5=>'Regulação de Leitos',
                        6=>'Gestão do Tratamento fora de domicílio (TFD)',
                        7=>'Gestão da Farmácia',
                        8=>'Gestão dos Agentes de Saúde com TABLET',
                        9=>'Georrefenciamento da Atenção Básica',
                        10=>'Web Mapas da Dengue'
                    );
                
                    foreach($_POST['Contato']['modulos'] as $key=>$value):
                                   
                        if(array_key_exists($_POST['Contato']['modulos'][$key], $arrayModulos)):
                        
                            $modulos .= '> '.$arrayModulos[$_POST['Contato']['modulos'][$key]]."; \n";
                        
                        endif;

                    endforeach;
                    
                    $modulos .= substr($modulos, 0, -1);
                    
                endif;
                
                $message = new YiiMailMessage;
                $message->setBody($modulos."\n \n".$model->comentario, 'text/html');
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

        if (isset($_POST['searchbox']) and strlen(trim(urlEncode($_POST['searchbox']))) > 0):

            $this->currentSearchValue = trim(urlEncode($_POST['searchbox']));
            $additionalCriteria = $this->makeKeywordSearchCondition(urlEncode($_POST['searchbox']));
            $criteria->addCondition($additionalCriteria);

        endif;

        if (isset($_GET['tag']))
            $criteria->addSearchCondition('tags', urlEncode($_GET['tag']));
        
        # dados da materia
        $materia = (isset($_POST['searchbox']) && $_POST['searchbox'])? Noticia::model()->findAll($criteria) : Noticia::model()->findByPk((int) $_GET['id']);
        
        # dados outras materias
        $materiaAnterior = Noticia::model()->findAll(array('condition'=>'id < :x', 'params'=>array(':x'=>(int) $_GET['id']), 'order' => 'id DESC', 'limit' => 1));
        $materiaProxima = Noticia::model()->findAll(array('condition'=>'id > :x', 'params'=>array(':x'=>(int) $_GET['id']), 'order' => 'id ASC', 'limit' => 1));
        
        $this->render('materia', array(
                'materia_dados' => $materia,
                'materia_anterior' => $materiaAnterior,
                'materia_proxima' => $materiaProxima
            )
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
        if(isset($_POST['searchbox']) && $_POST['searchbox']):
            
            # busca
            $this->keywordSearchColumnArray = array('titulo');
            $criteria = new CDbCriteria();

            if (strlen(trim(urlEncode($_POST['searchbox']))) > 0):

                $this->currentSearchValue = trim(urlEncode($_POST['searchbox']));
                $additionalCriteria = $this->makeKeywordSearchCondition(urlEncode($_POST['searchbox']));
                $criteria->addCondition($additionalCriteria);

            endif;
            
        else:
            
            $criteria = new CDbCriteria();
        
        endif;
        
        # pagina��o
        $count = Noticia::model()->count($criteria);
        $pages = new CPagination($count);

        $pages->pageSize = 1;
        $pages->applyLimit($criteria);
        $models = Noticia::model()->findAll($criteria);
        // fim paginacao
        
        $dataProvider = new CActiveDataProvider('Noticia', array(
                                'criteria' => $criteria,
                                'pagination'=>array(
                                    'pageSize'=>4,
                                ),
                            )
                        );
        
        $this->renderPartial('novidades', array(
            'models' => $models,
            'pages' => $pages,
            'dataProvider' => $dataProvider)
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