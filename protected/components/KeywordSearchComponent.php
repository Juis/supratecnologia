<?php
Yii::import('zii.widgets.CPortlet');

class KeywordSearchComponent extends CPortlet
{
	protected function renderContent()
	{
		$this->render('keywordSearch');
	}
}