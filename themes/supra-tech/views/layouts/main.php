<?php /* @var $this Controller */ 

$inner = (Yii::app()->controller->action->id == 'index')? '' : 'inner';
    
?>

<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="page page--home no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="<?php echo Yii::app()->theme->baseUrl; ?>/styles/main.css">
    <script src="<?php echo CHtml::encode(Yii::app()->theme->baseUrl.'/js/vendor/modernizr.js'); ?>"></script>

    <title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>
    
    <div class="doc relative <?php echo $inner; ?>">
        
        <?php include_once('includes/header.php'); ?>

        <div class="container" id="page">

            <?php echo $content; ?>

        </div><!-- page -->

        <?php  include_once('includes/footer.php');  ?>
        
        <div id="loading">
                <span class="load">
                    <i class="icon-spin5 animate-spin"></i>
                    <strong>Carregando</strong>
                </span>
        </div>
        
    </div>
    
    <!--[if lt IE 7]>
        <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->
    
    <script src="<?php echo CHtml::encode(Yii::app()->theme->baseUrl.'/js/scroll-sticky.js'); ?>"></script>
    <script src = "<?php echo CHtml::asset(Yii::getPathOfAlias('ext.yiinfinite-scroll.assets').'/jquery.infinitescroll.min.js'); ?>"></script>

</body>
</html>
