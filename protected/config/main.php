<?php
return array(
	'theme'=>'supra-tech',
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>':: Supra Tecnologia ::',
	'language'=>'pt_br',
	'preload'=>array('log'),
	'import'=>array(
		'application.models.*',
		'application.components.*',
		'application.extensions.yii-mail.*'
	),
	'modules'=>array( ),
	'components'=>array(
            'session' => array(
               'autoStart'=>true 
            ),
            'image'=>array(
                'class'=>'application.extensions.image.CImageComponent',
                'driver'=>'GD'
            ),
            'mail' => array(
                'class' => 'YiiMail',
                'transportType' => 'php',
                'viewPath' => 'application.views.mail',
                'logging' => true,
                'dryRun' => false
            ),
            'user'=>array(
                'allowAutoLogin'=>true
            ),
            'urlManager'=>array(
                'urlFormat'=>'path',
                'showScriptName' => false,
                'caseSensitive'=> false,
                'rules'=>array(
                    '<action>' => 'site/<action>',
                    '<controller:\w+>/<id:\d+>'=>'<controller>/view',
                    '<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>/<id>',
                    '<controller:\w+>/<action:\w+>'=>'<controller>/<action>'
                )
            ),
            /*'db'=>array(
                'connectionString' => 'sqlite:'.dirname(__FILE__).'/../data/testdrive.db',
            ),*/
            'db'=>array( 'connectionString' => 'mysql:host=localhost;dbname=supra_tech','emulatePrepare' => true, 'username' => 'root', 'password' => '', 'charset' => 'utf8', ),#lan
            'errorHandler'=>array(
                'errorAction'=>'site/error'
            ),
            'log'=>array(
                'class'=>'CLogRouter',
                'routes'=>array(
                    array(
                        'class'=>'CFileLogRoute',
                        'levels'=>'error, warning'
                    )
                )
            ),
	),
	'params'=>array(
            'adminEmail'=>'alissonplus@gmail.com'
	),
);