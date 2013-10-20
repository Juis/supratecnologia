<?php

class SiteController extends Controller
{
    /**
     * Declares class-based actions.
     */
    public function actions()
    {
        return array( 'page'=>array( 'class'=>'CViewAction' ) );
    }

    public function actionIndex()
    {
        $this->render('index');
    }
    
    public function actionFaleConosco()
    {
        $this->render('faleconosco');
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
        $this->render('materia');
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
        $this->render('novidades');
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
}