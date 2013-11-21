<?php

/**
 * Contato class.
 * Contato is the data structure for keeping
 */
class Contato extends CFormModel
{
    public $nome;
    public $email;
    public $modulos;
    public $municipio;
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
            'comentario'=>'Gostaria de deixar um comentário?'
        ); 
    }
}