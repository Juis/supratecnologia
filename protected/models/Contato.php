<?php

/**
 * Contato class.
 * Contato is the data structure for keeping
 */
class Contato extends CFormModel
{
    public $nome;
    public $email;
    public $municipio;
    public $regulacao_marcacao_consultas_exames;
    public $prontuario_medico_ambulatorial;
    public $gestao_autorizacao_internacao_hospitalar;
    public $monitoramento_indices_pmaq;
    public $regulacao_leitos;
    public $gestao_tratamento_domicilio;
    public $gestao_farmacia;
    public $gestao_agentes_saude_tablet;
    public $georrefenciamento_atencao_basica;
    public $web_mapa_dengue;
    public $marcar_todos_modulos;
    public $comentario;

    public function rules() 
    {
        return array( array('nome, email, municipio', 'required') );
    }

    public function attributeLabels()
    { 
        return array( 
            'nome'=>'Qual &eacute; o seu nome?', 
            'email'=>'..e o seu e-mail?', 
            'municipio'=>'Qual o seu munic&iacute;pio/institui&ccedil;&atilde;o?',
            'regulacao_marcacao_consultas_exames'=>'Regulação de Marcação Consultas e Exames',
            'prontuario_medico_ambulatorial'=>'Prontuário Médico Ambulatorial',
            'gestao_autorizacao_internacao_hospitalar'=>'Gestão de Autorização de Internação Hospitalar (AIH)',
            'monitoramento_indices_pmaq'=>'Monitoramento dos índices do PMAQ',
            'regulacao_leitos'=>'Regulação de Leitos',
            'gestao_tratamento_domicilio'=>'Gestão do Tratamento fora de domicílio (TFD)',
            'gestao_farmacia'=>'Gestão da Farmácia',
            'gestao_agentes_saude_tablet'=>'Gestão dos Agentes de Saúde com TABLET',
            'georrefenciamento_atencao_basica'=>'Georrefenciamento da Atenção Básica',
            'web_mapa_dengue'=>'Web Mapas da Dengue',
            'marcar_todos_modulos'=>'Marcar todos os módulos',
            'comentario'=>'Gostaria de deixar um coment�rio?'
        ); 
    }
}