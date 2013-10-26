<?php

/**
 * This is the model class for table "noticia".
 *
 * The followings are the available columns in table 'hja_cobertura':
 * @property integer $id
 * @property string $titulo
 * @property string $img
 * @property string $conteudo
 * @property TimeStamp $data_cadastro
 * @property TimeStamp $data_altera
 *
 */
class Noticia extends CActiveRecord
{
    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return Noticia the static model class
     */
    public static function model($className=__CLASS__)
    {
        return parent::model($className);
    }

    /**
     * @return string the associated database table name
     */
    public function tableName()
    {
        return 'noticia';
    }

    /**
     * @return array validation rules for model attributes.
     */
    public function rules()
    {
        return array(
            array('titulo, conteudo, img', 'required'),
            array('id, titulo, img, conteudo, data_cadastro, data_altera', 'safe', 'on'=>'search')
        );
    }

    /**
     * @return array relational rules.
     */
    public function relations()
    {
        return array();
    }

    /**
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels()
    {
        return array(
            'id' => 'ID',
            'titulo' => 'Titulo',
            'img' => 'Imagem Principal',
            'conteudo' => 'Conteúdo'
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search()
    {
        $criteria=new CDbCriteria;

        $criteria->compare('id',$this->id);
        $criteria->compare('titulo',$this->titulo,true);
        $criteria->compare('img',$this->img,true);
        $criteria->compare('conteudo',$this->conteudo,true);
        $criteria->compare('data_cadastro',$this->data_cadastro,true);
        $criteria->compare('data_altera',$this->data_altera,true);

        return new CActiveDataProvider($this, array( 'criteria'=>$criteria ));
    }
}