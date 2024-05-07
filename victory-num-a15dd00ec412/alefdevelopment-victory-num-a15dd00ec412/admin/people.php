<?php
    $action = $_REQUEST['action'];
    $actions = [];

    include "engine/core.php";
    include "master-include.php";

    HeadManager::add('');

    if (!in_array($_SESSION['user'][''], array(
  0 => '',
)) || $GLOBALS['unauthorized_access']==1) {
        include "menu.php";
        foreach ($menu as $m) {
            $rls = [];
            foreach (explode(",", $m["roles"]) as $r) {
                $rls[] = trim($r);
            }
            if (($m["unauthorized_access"]==1) && $m["visible"]==1) {
                header("Location: {$m['link']}");
                die("");
            }
        }

        die("У вас нет доступа");
    }


    class GLOBAL_STORAGE
    {
        public static $parent_object;
    }
    



    // обработка sql-запроса вставки данных
function processInsertQuery($sql_query_text, $params_list)
{
    return [$sql_query_text, $params_list];
}

// обработка массива данных, которые будут экспортированы в CSV
function processCSV($data)
{
    return $data;
}

    define("RPP", 150); //кол-во строк на странице

    function array2csv($array)
    {
        if (count($array) == 0) {
            return null;
        }
        ob_start();
        $df = fopen("php://output", 'w');
        fprintf($df, chr(0xEF).chr(0xBB).chr(0xBF));
        fputcsv($df, array_keys($array[0]));
        foreach ($array as $row) {
            fputcsv($df, array_values($row));
        }
        fclose($df);
        return ob_get_clean();
    }

    function download_send_headers($filename)
    {
        // disable caching
        $now = gmdate("D, d M Y H:i:s");
        header("Expires: Tue, 03 Jul 2001 06:00:00 GMT");
        header("Cache-Control: max-age=0, no-cache, must-revalidate, proxy-revalidate");
        header("Last-Modified: {$now} GMT");

        // force download
        header("Content-Type: application/force-download");
        header("Content-Type: application/octet-stream");
        header("Content-Type: application/download");

        // disposition / encoding on response body
        header("Content-Disposition: attachment;filename={$filename}");
        header("Content-Transfer-Encoding: binary");
    }

    $actions['csv'] = function () {
        if (function_exists("allowCSV")) {
            if (!allowCSV()) {
                die("У вас нет прав на экспорт CSV");
            }
        }
        download_send_headers("data_export_" . date("Y-m-d") . ".csv");
        $data = get_data(true)[0];

        if (function_exists("processCSV")) {
            $data = processCSV($data);
        }

        echo array2csv($data);
        die();
    };

    $actions['delete_group'] = function () {
        $id = $_REQUEST['id'];
        $res = ["status" => 0];
        qi("DELETE FROM  WHERE id=?", [$id]);
        die(json_encode($res));
    };

    $actions['create_group'] = function () {
        if (strlen(trim($_REQUEST['name']))==0) {
            die(json_encode(["status" => 1, "msg" => "Нельзя создать группу без названия"]));
        }
        
        $res = ["status" => 0, "id" => $new_group_id];
        die(json_encode($res));
    };

    $actions[''] = function () {
        $city_id_values = json_encode(q("SELECT name as text, id as value FROM cities", []));
        $city_id_values_text = "";
        foreach (json_decode($city_id_values, true) as $opt) {
            $city_id_values_text.="<option value=\"{$opt['value']}\">{$opt['text']}</option>";
        }
        $sex_values = '[{"text":"М", "value":"0"}, {"text":"Ж", "value":"1"}]';
        $sex_values_text = "";
        foreach (json_decode($sex_values, true) as $opt) {
            $sex_values_text.="<option value=\"{$opt['value']}\">{$opt['text']}</option>";
        }

        

        list($items, $pagination, $cnt) = get_data();

        $sort_order[$_REQUEST['sort_by']] = $_REQUEST['sort_order'];

        $next_order['city_id']='asc';
        $next_order['name']='asc';
        $next_order['f_name']='asc';
        $next_order['s_name']='asc';
        $next_order['birth_year']='asc';
        $next_order['death_year']='asc';
        $next_order['gos_stat_info']='asc';
        $next_order['war_description']='asc';
        $next_order['work_descrpiption']='asc';
        $next_order['reward_list']='asc';
        $next_order['photo']='asc';
        $next_order['position']='asc';
        $next_order['sex']='asc';

        if ($_REQUEST['sort_order']=='asc') {
            $sort_icon[$_REQUEST['sort_by']] = '<span class="fa fa-sort-alpha-up" style="margin-left:5px;"></span>';
            $next_order[$_REQUEST['sort_by']] = 'desc';
        } elseif ($_REQUEST['sort_order']=='desc') {
            $sort_icon[$_REQUEST['sort_by']] = '<span class="fa fa-sort-alpha-down" style="margin-left:5px;"></span>';
            $next_order[$_REQUEST['sort_by']] = '';
        } elseif ($_REQUEST['sort_order']=='') {
            $next_order[$_REQUEST['sort_by']] = 'asc';
        }
        $filter_caption = "";
        $show = '
		<script>
				window.onload = function ()
				{
					$(\'.big-icon\').html(\'<i class="fas fa-"></i>\');
				};


		</script>
		
		<style>
			html body.concept, html body.concept header, body.concept .table
			{
				background-color:;
				color:;
			}

			.genesis-text-color
			{
				color:;
			}

			#tableMain div.genesis-item:nth-child(even), #tableMain div.genesis-item:nth-child(even) div.genesis-item-property
			{
  				background-color:  !important;
			}

			body.concept .page-link,
			body.concept .page-link:hover{
				color: ;
			}

			html body.concept, html body.concept header, body.concept .table
			{
				color: ;
			}

		</style>
		<!-- Modal -->
		<div class="modal fade" id="csv_create_modal" role="dialog" aria-labelledby="csvCreateModal" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<form method="POST">
					<input type="hidden" name="action" value="csv_create_execute">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Массовое добавление записей</h5>
						</div>
						<div class="modal-body">
							<small>Вставьте сюда новые записи. Каждая запись на новой строчке: <b class="csv-create-format">Город, Имя, Отчество, Фамилия, Год рождения, Год смерти, Гос.стат: годы, Военное описание, Трудовое описание, Список заслуг, Фото, Род деятельности, Пол</b></small>
							<textarea name="csv"></textarea>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn cancel" data-dismiss="modal" aria-label="Close">Закрыть</button>
							<button type="submit" class="btn blue-inline" id="csv_create_execute">Сохранить</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="content-header">
			<div class="btn-wrap">
				<h2><a href="#" class="back-btn"><span class="fa fa-arrow-circle-left"></span></a> '."Люди".' </h2>
				<button class="btn blue-inline add_button" data-toggle="modal" data-target="#modal-main">ДОБАВИТЬ</button>
				<p class="small res-cnt">Кол-во результатов: <span class="cnt-number-span">'.$cnt.'</span></p>
			</div>
			
			<form class="navbar-form search-form" role="search">
				<div class="input-group">
					<input type="text" class="form-control" placeholder="Поиск" name="srch-term" id="srch-term" value="'.$_REQUEST['srch-term'].'">
					<button class="input-group-addon"><i class="fa fa-search"></i></button>
				</div>
			</form>
			
		</div>
		<div>'.
        ""
        .'</div>';

        $show .= filter_divs();

        $show.='
		';

        $show.='<div class="table-wrap" data-fl-scrolls>';
        $table='
	<div class="data-container genesis-presentation-table  table-clickable" id="tableMain">
	<div class="genesis-header">
		<div>

			<div class="genesis-header-property">
				<nobr>
					<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=city_id&sort_order='. ($next_order['city_id']) .'\' class=\'sort\' column=\'city_id\' sort_order=\''.$sort_order['city_id'].'\'>Город'. $sort_icon['city_id'].'</a>
					
			<span class=\'fa fa-filter filter btn btn-default\' data-placement=\'bottom\' data-content=\'<div class="input-group">
							<select class="form-control filter-select" name="city_id_filter">


							'.str_replace(chr(39), '&#39;', $city_id_values_text).'


							</select>
							<span class="input-group-btn">
								<button class="btn btn-primary add-filter" type="button"><span class="fa fa-filter"></a></button>
							</span>
						</div>\'>
			</span>
				</nobr>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=name&sort_order='. ($next_order['name']) .'\' class=\'sort\' column=\'name\' sort_order=\''.$sort_order['name'].'\'>Имя'. $sort_icon['name'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=f_name&sort_order='. ($next_order['f_name']) .'\' class=\'sort\' column=\'f_name\' sort_order=\''.$sort_order['f_name'].'\'>Отчество'. $sort_icon['f_name'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=s_name&sort_order='. ($next_order['s_name']) .'\' class=\'sort\' column=\'s_name\' sort_order=\''.$sort_order['s_name'].'\'>Фамилия'. $sort_icon['s_name'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=birth_year&sort_order='. ($next_order['birth_year']) .'\' class=\'sort\' column=\'birth_year\' sort_order=\''.$sort_order['birth_year'].'\'>Год рождения'. $sort_icon['birth_year'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=death_year&sort_order='. ($next_order['death_year']) .'\' class=\'sort\' column=\'death_year\' sort_order=\''.$sort_order['death_year'].'\'>Год смерти'. $sort_icon['death_year'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=gos_stat_info&sort_order='. ($next_order['gos_stat_info']) .'\' class=\'sort\' column=\'gos_stat_info\' sort_order=\''.$sort_order['gos_stat_info'].'\'>Гос.стат: годы'. $sort_icon['gos_stat_info'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=war_description&sort_order='. ($next_order['war_description']) .'\' class=\'sort\' column=\'war_description\' sort_order=\''.$sort_order['war_description'].'\'>Военное описание'. $sort_icon['war_description'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=work_descrpiption&sort_order='. ($next_order['work_descrpiption']) .'\' class=\'sort\' column=\'work_descrpiption\' sort_order=\''.$sort_order['work_descrpiption'].'\'>Трудовое описание'. $sort_icon['work_descrpiption'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=reward_list&sort_order='. ($next_order['reward_list']) .'\' class=\'sort\' column=\'reward_list\' sort_order=\''.$sort_order['reward_list'].'\'>Список заслуг'. $sort_icon['reward_list'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=photo&sort_order='. ($next_order['photo']) .'\' class=\'sort\' column=\'photo\' sort_order=\''.$sort_order['photo'].'\'>Фото'. $sort_icon['photo'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=position&sort_order='. ($next_order['position']) .'\' class=\'sort\' column=\'position\' sort_order=\''.$sort_order['position'].'\'>Род деятельности'. $sort_icon['position'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=sex&sort_order='. ($next_order['sex']) .'\' class=\'sort\' column=\'sex\' sort_order=\''.$sort_order['sex'].'\'>Пол'. $sort_icon['sex'].'</a>
			</div>
			<div class="genesis-header-property"></div>
		</div>
</div>
<div class="genesis-tbody">';


        if (count($items) > 0) {
            $agregate = get_agregate();
            foreach ($items as $item) {
                $tr = "

		<div class='genesis-item' pk='{$item['id']}'>
			
			".(function_exists("processTD")?processTD("<div class='genesis-item-property '>
				<span class='genesis-attached-column-info'>
					<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=city_id&sort_order='. ($next_order['city_id']) .'\' class=\'sort\' column=\'city_id\' sort_order=\''.$sort_order['city_id'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['city_id']) ? $sort_icon['city_id'] : '<span class="fa fa-sort"></span>')).'</a>'."
			<span class='fa fa-filter filter ' data-placement='bottom' data-content='<div class=\"input-group\">
							<select class=\"form-control filter-select\" name=\"city_id_filter\">


							".str_replace(chr(39), '&#39;', $city_id_values_text)."


							</select>
							<span class=\"input-group-btn\">
								<button class=\"btn btn-primary add-filter\" type=\"button\"><span class=\"fa fa-filter\"></a></button>
							</span>
						</div>'>
			</span></span>
					<span class='genesis-attached-column-name'>Город:</span>
				</span><span class='editable' data-inp='select' data-type='select' data-source='".htmlspecialchars($city_id_values, ENT_QUOTES, 'UTF-8')."' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='city_id'>".select_mapping($city_id_values, $item['city_id'])."</span></div>", $item, "Город"):"<div class='genesis-item-property '>
				<span class='genesis-attached-column-info'>
					<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=city_id&sort_order='. ($next_order['city_id']) .'\' class=\'sort\' column=\'city_id\' sort_order=\''.$sort_order['city_id'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['city_id']) ? $sort_icon['city_id'] : '<span class="fa fa-sort"></span>')).'</a>'."
			<span class='fa fa-filter filter ' data-placement='bottom' data-content='<div class=\"input-group\">
							<select class=\"form-control filter-select\" name=\"city_id_filter\">


							".str_replace(chr(39), '&#39;', $city_id_values_text)."


							</select>
							<span class=\"input-group-btn\">
								<button class=\"btn btn-primary add-filter\" type=\"button\"><span class=\"fa fa-filter\"></a></button>
							</span>
						</div>'>
			</span></span>
					<span class='genesis-attached-column-name'>Город:</span>
				</span><span class='editable' data-inp='select' data-type='select' data-source='".htmlspecialchars($city_id_values, ENT_QUOTES, 'UTF-8')."' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='city_id'>".select_mapping($city_id_values, $item['city_id'])."</span></div>")."
".(function_exists("processTD")?processTD("
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=name&sort_order='. ($next_order['name']) .'\' class=\'sort\' column=\'name\' sort_order=\''.$sort_order['name'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['name']) ? $sort_icon['name'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Имя:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='name'>".htmlspecialchars($item['name'])."</span>
	</div>", $item, "Имя"):"
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=name&sort_order='. ($next_order['name']) .'\' class=\'sort\' column=\'name\' sort_order=\''.$sort_order['name'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['name']) ? $sort_icon['name'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Имя:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='name'>".htmlspecialchars($item['name'])."</span>
	</div>")."
".(function_exists("processTD")?processTD("
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=f_name&sort_order='. ($next_order['f_name']) .'\' class=\'sort\' column=\'f_name\' sort_order=\''.$sort_order['f_name'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['f_name']) ? $sort_icon['f_name'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Отчество:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='f_name'>".htmlspecialchars($item['f_name'])."</span>
	</div>", $item, "Отчество"):"
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=f_name&sort_order='. ($next_order['f_name']) .'\' class=\'sort\' column=\'f_name\' sort_order=\''.$sort_order['f_name'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['f_name']) ? $sort_icon['f_name'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Отчество:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='f_name'>".htmlspecialchars($item['f_name'])."</span>
	</div>")."
".(function_exists("processTD")?processTD("
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=s_name&sort_order='. ($next_order['s_name']) .'\' class=\'sort\' column=\'s_name\' sort_order=\''.$sort_order['s_name'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['s_name']) ? $sort_icon['s_name'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Фамилия:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='s_name'>".htmlspecialchars($item['s_name'])."</span>
	</div>", $item, "Фамилия"):"
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=s_name&sort_order='. ($next_order['s_name']) .'\' class=\'sort\' column=\'s_name\' sort_order=\''.$sort_order['s_name'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['s_name']) ? $sort_icon['s_name'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Фамилия:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='s_name'>".htmlspecialchars($item['s_name'])."</span>
	</div>")."
".(function_exists("processTD")?processTD("
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=birth_year&sort_order='. ($next_order['birth_year']) .'\' class=\'sort\' column=\'birth_year\' sort_order=\''.$sort_order['birth_year'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['birth_year']) ? $sort_icon['birth_year'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Год рождения:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='birth_year'>".htmlspecialchars($item['birth_year'])."</span>
	</div>", $item, "Год рождения"):"
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=birth_year&sort_order='. ($next_order['birth_year']) .'\' class=\'sort\' column=\'birth_year\' sort_order=\''.$sort_order['birth_year'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['birth_year']) ? $sort_icon['birth_year'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Год рождения:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='birth_year'>".htmlspecialchars($item['birth_year'])."</span>
	</div>")."
".(function_exists("processTD")?processTD("
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=death_year&sort_order='. ($next_order['death_year']) .'\' class=\'sort\' column=\'death_year\' sort_order=\''.$sort_order['death_year'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['death_year']) ? $sort_icon['death_year'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Год смерти:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='death_year'>".htmlspecialchars($item['death_year'])."</span>
	</div>", $item, "Год смерти"):"
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=death_year&sort_order='. ($next_order['death_year']) .'\' class=\'sort\' column=\'death_year\' sort_order=\''.$sort_order['death_year'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['death_year']) ? $sort_icon['death_year'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Год смерти:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='death_year'>".htmlspecialchars($item['death_year'])."</span>
	</div>")."
".(function_exists("processTD")?processTD("
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=gos_stat_info&sort_order='. ($next_order['gos_stat_info']) .'\' class=\'sort\' column=\'gos_stat_info\' sort_order=\''.$sort_order['gos_stat_info'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['gos_stat_info']) ? $sort_icon['gos_stat_info'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Гос.стат: годы:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='gos_stat_info'>".htmlspecialchars($item['gos_stat_info'])."</span>
	</div>", $item, "Гос.стат: годы"):"
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=gos_stat_info&sort_order='. ($next_order['gos_stat_info']) .'\' class=\'sort\' column=\'gos_stat_info\' sort_order=\''.$sort_order['gos_stat_info'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['gos_stat_info']) ? $sort_icon['gos_stat_info'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Гос.стат: годы:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='gos_stat_info'>".htmlspecialchars($item['gos_stat_info'])."</span>
	</div>")."
".(function_exists("processTD")?processTD("<div class='genesis-item-property '>
			<span class='genesis-attached-column-info'>
				<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=war_description&sort_order='. ($next_order['war_description']) .'\' class=\'sort\' column=\'war_description\' sort_order=\''.$sort_order['war_description'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['war_description']) ? $sort_icon['war_description'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
				<span class='genesis-attached-column-name'>Военное описание:</span>
			</span><span class='editable' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='war_description'>".htmlspecialchars($item['war_description'])."</span></div>", $item, "Военное описание"):"<div class='genesis-item-property '>
			<span class='genesis-attached-column-info'>
				<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=war_description&sort_order='. ($next_order['war_description']) .'\' class=\'sort\' column=\'war_description\' sort_order=\''.$sort_order['war_description'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['war_description']) ? $sort_icon['war_description'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
				<span class='genesis-attached-column-name'>Военное описание:</span>
			</span><span class='editable' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='war_description'>".htmlspecialchars($item['war_description'])."</span></div>")."
".(function_exists("processTD")?processTD("<div class='genesis-item-property '>
			<span class='genesis-attached-column-info'>
				<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=work_descrpiption&sort_order='. ($next_order['work_descrpiption']) .'\' class=\'sort\' column=\'work_descrpiption\' sort_order=\''.$sort_order['work_descrpiption'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['work_descrpiption']) ? $sort_icon['work_descrpiption'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
				<span class='genesis-attached-column-name'>Трудовое описание:</span>
			</span><span class='editable' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='work_descrpiption'>".htmlspecialchars($item['work_descrpiption'])."</span></div>", $item, "Трудовое описание"):"<div class='genesis-item-property '>
			<span class='genesis-attached-column-info'>
				<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=work_descrpiption&sort_order='. ($next_order['work_descrpiption']) .'\' class=\'sort\' column=\'work_descrpiption\' sort_order=\''.$sort_order['work_descrpiption'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['work_descrpiption']) ? $sort_icon['work_descrpiption'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
				<span class='genesis-attached-column-name'>Трудовое описание:</span>
			</span><span class='editable' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='work_descrpiption'>".htmlspecialchars($item['work_descrpiption'])."</span></div>")."
".(function_exists("processTD")?processTD("<div class='genesis-item-property '>
			<span class='genesis-attached-column-info'>
				<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=reward_list&sort_order='. ($next_order['reward_list']) .'\' class=\'sort\' column=\'reward_list\' sort_order=\''.$sort_order['reward_list'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['reward_list']) ? $sort_icon['reward_list'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
				<span class='genesis-attached-column-name'>Список заслуг:</span>
			</span><span class='editable' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='reward_list'>".htmlspecialchars($item['reward_list'])."</span></div>", $item, "Список заслуг"):"<div class='genesis-item-property '>
			<span class='genesis-attached-column-info'>
				<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=reward_list&sort_order='. ($next_order['reward_list']) .'\' class=\'sort\' column=\'reward_list\' sort_order=\''.$sort_order['reward_list'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['reward_list']) ? $sort_icon['reward_list'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
				<span class='genesis-attached-column-name'>Список заслуг:</span>
			</span><span class='editable' data-placeholder='' data-inp='textarea' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='reward_list'>".htmlspecialchars($item['reward_list'])."</span></div>")."
".(function_exists("processTD")?processTD("<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=photo&sort_order='. ($next_order['photo']) .'\' class=\'sort\' column=\'photo\' sort_order=\''.$sort_order['photo'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['photo']) ? $sort_icon['photo'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Фото:</span>
		</span>
					". ($item['photo']?"<a href='#' data-featherlight='{$item['photo']}'>":"") ."
						<img class='genesis-image js-quotable'
						onerror=\"this.onerror=null; this.src=this.dataset['file-exists']==1?'style/badformat.png':'style/placeholder.jpg'; this.setAttribute('image-url', this.src); this.parentElement.dataset.featherlight = this.src; this.style.objectFit = 'contain';\"
						data-file-exists='".(file_exists($_SERVER['DOCUMENT_ROOT'].'/'.($item['photo']?$item['photo']:"style/placeholder.jpg"))?"1":"0")."'
						src='".($item['photo']?$item['photo']:"style/placeholder.jpg")."'
						 image-url='".($item['photo']?$item['photo']:"style/placeholder.jpg")."' />
					". ($item['photo']?"</a>":"") ."
				</div>", $item, "Фото"):"<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=photo&sort_order='. ($next_order['photo']) .'\' class=\'sort\' column=\'photo\' sort_order=\''.$sort_order['photo'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['photo']) ? $sort_icon['photo'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Фото:</span>
		</span>
					". ($item['photo']?"<a href='#' data-featherlight='{$item['photo']}'>":"") ."
						<img class='genesis-image js-quotable'
						onerror=\"this.onerror=null; this.src=this.dataset['file-exists']==1?'style/badformat.png':'style/placeholder.jpg'; this.setAttribute('image-url', this.src); this.parentElement.dataset.featherlight = this.src; this.style.objectFit = 'contain';\"
						data-file-exists='".(file_exists($_SERVER['DOCUMENT_ROOT'].'/'.($item['photo']?$item['photo']:"style/placeholder.jpg"))?"1":"0")."'
						src='".($item['photo']?$item['photo']:"style/placeholder.jpg")."'
						 image-url='".($item['photo']?$item['photo']:"style/placeholder.jpg")."' />
					". ($item['photo']?"</a>":"") ."
				</div>")."
".(function_exists("processTD")?processTD("
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=position&sort_order='. ($next_order['position']) .'\' class=\'sort\' column=\'position\' sort_order=\''.$sort_order['position'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['position']) ? $sort_icon['position'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Род деятельности:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='position'>".htmlspecialchars($item['position'])."</span>
	</div>", $item, "Род деятельности"):"
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=position&sort_order='. ($next_order['position']) .'\' class=\'sort\' column=\'position\' sort_order=\''.$sort_order['position'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['position']) ? $sort_icon['position'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Род деятельности:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='position'>".htmlspecialchars($item['position'])."</span>
	</div>")."
".(function_exists("processTD")?processTD("<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=sex&sort_order='. ($next_order['sex']) .'\' class=\'sort\' column=\'sex\' sort_order=\''.$sort_order['sex'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['sex']) ? $sort_icon['sex'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Пол:</span>
		</span>
		<span class='editable' data-inp='select' data-type='select' data-source='".htmlspecialchars($sex_values, ENT_QUOTES, 'UTF-8')."' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='sex'>".select_mapping($sex_values, $item['sex'])."</span>
		</div>", $item, "Пол"):"<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=sex&sort_order='. ($next_order['sex']) .'\' class=\'sort\' column=\'sex\' sort_order=\''.$sort_order['sex'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['sex']) ? $sort_icon['sex'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Пол:</span>
		</span>
		<span class='editable' data-inp='select' data-type='select' data-source='".htmlspecialchars($sex_values, ENT_QUOTES, 'UTF-8')."' data-url='engine/ajax.php?action=editable&table=people' data-pk='{$item['id']}' data-name='sex'>".select_mapping($sex_values, $item['sex'])."</span>
		</div>")."
			<div class='genesis-control-cell'><a href='#' class='edit_btn'><i class='fa fa-edit' style='color:grey;'></i></a> <a href='#' class='delete_btn'><i class='fa fa-trash' style='color:red;'></i></a></div>
		</div>";

                if (function_exists("processTR")) {
                    $tr = processTR($tr, $item);
                }

                $table.=$tr;
            }



            $table .= "</div></div></div>".$pagination;
        } else {
            $table.=' </div></div><div class="empty_table">Нет информации</div>';
        }

        if (function_exists("processTable")) {
            $table = processTable($table);
        }

        $show.=$table;


        $show.="<div></div>".'<button class="btn blue-inline csv-button float-right">СКАЧАТЬ CSV</button> <button class="btn blue-inline js-csv-create-button float-right" data-toggle="modal" data-target="#csv_create_modal">СОЗДАТЬ ИЗ CSV</button>';



        $show .= <<<'EOT'
		<style></style>
		<script></script>
EOT;


        return $show;
    };



    $actions['edit'] = function () {
        $id = $_REQUEST['genesis_edit_id'];
        if (isset($id)) {
            $item = q("SELECT * FROM people WHERE id=?", [$id]);
            $item = $item[0];
        }

        
        $city_id_options = q("SELECT name as text, id as value FROM cities", []);
        $city_id_options_html = "";
        foreach ($city_id_options as $o) {
            $city_id_options_html .= "<option value=\"{$o['value']}\" ".($o["value"]==$item["city_id"]?"selected":"").">{$o['text']}</option>";
        }
            

        $html = '
			<form class="form" enctype="multipart/form-data" method="POST">
				<fieldset>'.
                    (
                        isset($id)?
                    '<input type="hidden" name="id" value="'.$id.'">
					<input type="hidden" name="action" value="edit_execute">'
                    :
                    '<input type="hidden" name="action" value="create_execute">'
                    )
                    .'

					
				<div class="form-group">
					<label class="control-label" for="textinput">Город</label>
					<div>
						<select id="city_id" name="city_id" class="form-control input-md " >
							'.$city_id_options_html.'
							</select>
					</div>
				</div>

			


								<div class="form-group">
									<label class="control-label" for="textinput">Имя</label>
									<div>
										<input id="name" name="name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["name"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Отчество</label>
									<div>
										<input id="f_name" name="f_name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["f_name"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Фамилия</label>
									<div>
										<input id="s_name" name="s_name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["s_name"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Год рождения</label>
									<div>
										<input id="birth_year" name="birth_year" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["birth_year"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Год смерти</label>
									<div>
										<input id="death_year" name="death_year" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["death_year"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Гос.стат: годы</label>
									<div>
										<input id="gos_stat_info" name="gos_stat_info" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["gos_stat_info"]).'">
									</div>
								</div>

							


							<div class="form-group">
								<label class="control-label" for="textinput">Военное описание</label>
								<div>
									<textarea id="war_description" name="war_description" class="form-control input-md  ckeditor" style="height:500px;" >'.htmlspecialchars($item["war_description"]).'</textarea>
								</div>
							</div>

						


							<div class="form-group">
								<label class="control-label" for="textinput">Трудовое описание</label>
								<div>
									<textarea id="work_descrpiption" name="work_descrpiption" class="form-control input-md  ckeditor" style="height:500px;" >'.htmlspecialchars($item["work_descrpiption"]).'</textarea>
								</div>
							</div>

						


							<div class="form-group">
								<label class="control-label" for="textinput">Список заслуг</label>
								<div>
									<textarea id="reward_list" name="reward_list" class="form-control input-md  ckeditor" style="height:500px;" >'.htmlspecialchars($item["reward_list"]).'</textarea>
								</div>
							</div>

						


						<div class="form-group form-group-position-relative">
							<label class="control-label" for="textinput">Фото</label>
							<div class="">
								<img
								onerror="this.onerror=null; this.src=this.dataset[\'file-exists\']==1?\'style/badformat.png\':\'style/placeholder.jpg\'; this.setAttribute(\'image-url\', this.src); this.dataset.featherlight = this.src; this.style.objectFit = \'contain\';"
								data-file-exists="'.((!empty($item["photo"]))&&(file_exists($_SERVER["DOCUMENT_ROOT"].'/'.$item["photo"]))?"1":"0").'"
								src="'.$item["photo"].'" image-url="'.$item["photo"].'" class="genesis-image js-quotable" style="max-width:200px; max-height:200px;" /><label for="photo" class="file"> Выберите изображение <input type="file" name="photo" id="photo" /></label></div>
						</div>

					


								<div class="form-group">
									<label class="control-label" for="textinput">Род деятельности</label>
									<div>
										<input id="position" name="position" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["position"]).'">
									</div>
								</div>

							



				<div class="form-group">
					<label class="control-label" for="textinput">Пол</label>
					<div>
						<select id="sex" name="sex" class="form-control input-md ">
							<option value="0" '.($item["sex"]=="0"?"selected":"").'>М</option> 
<option value="1" '.($item["sex"]=="1"?"selected":"").'>Ж</option> 

						</select>
					</div>
				</div>

			
					<div class="text-center not-editable">
						
					</div>

				</fieldset>
			</form>

		';

        if (function_exists("processEditModalHTML")) {
            $html = processEditModalHTML($html);
        }
        die($html);
    };

    $actions['create'] = function () {
        $city_id_options = q("SELECT name as text, id as value FROM cities", []);
        $city_id_options_html = "";
        foreach ($city_id_options as $o) {
            $city_id_options_html .= "<option value=\"{$o['value']}\" ".($o["value"]==$item["city_id"]?"selected":"").">{$o['text']}</option>";
        }
            

        $html = '
			<form class="form" enctype="multipart/form-data" method="POST">
				<fieldset>
					<input type="hidden" name="action" value="create_execute">
					
				<div class="form-group">
					<label class="control-label" for="textinput">Город</label>
					<div>
						<select id="city_id" name="city_id" class="form-control input-md " >
							'.$city_id_options_html.'
							</select>
					</div>
				</div>

			


								<div class="form-group">
									<label class="control-label" for="textinput">Имя</label>
									<div>
										<input id="name" name="name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["name"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Отчество</label>
									<div>
										<input id="f_name" name="f_name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["f_name"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Фамилия</label>
									<div>
										<input id="s_name" name="s_name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["s_name"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Год рождения</label>
									<div>
										<input id="birth_year" name="birth_year" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["birth_year"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Год смерти</label>
									<div>
										<input id="death_year" name="death_year" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["death_year"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Гос.стат: годы</label>
									<div>
										<input id="gos_stat_info" name="gos_stat_info" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["gos_stat_info"]).'">
									</div>
								</div>

							


							<div class="form-group">
								<label class="control-label" for="textinput">Военное описание</label>
								<div>
									<textarea id="war_description" name="war_description" class="form-control input-md  ckeditor" style="height:500px;" >'.htmlspecialchars($item["war_description"]).'</textarea>
								</div>
							</div>

						


							<div class="form-group">
								<label class="control-label" for="textinput">Трудовое описание</label>
								<div>
									<textarea id="work_descrpiption" name="work_descrpiption" class="form-control input-md  ckeditor" style="height:500px;" >'.htmlspecialchars($item["work_descrpiption"]).'</textarea>
								</div>
							</div>

						


							<div class="form-group">
								<label class="control-label" for="textinput">Список заслуг</label>
								<div>
									<textarea id="reward_list" name="reward_list" class="form-control input-md  ckeditor" style="height:500px;" >'.htmlspecialchars($item["reward_list"]).'</textarea>
								</div>
							</div>

						


						<div class="form-group form-group-position-relative">
							<label class="control-label" for="textinput">Фото</label>
							<div class="">
								<img
								onerror="this.onerror=null; this.src=this.dataset[\'file-exists\']==1?\'style/badformat.png\':\'style/placeholder.jpg\'; this.setAttribute(\'image-url\', this.src); this.dataset.featherlight = this.src; this.style.objectFit = \'contain\';"
								data-file-exists="'.((!empty($item["photo"]))&&(file_exists($_SERVER["DOCUMENT_ROOT"].'/'.$item["photo"]))?"1":"0").'"
								src="'.$item["photo"].'" image-url="'.$item["photo"].'" class="genesis-image js-quotable" style="max-width:200px; max-height:200px;" /><label for="photo" class="file"> Выберите изображение <input type="file" name="photo" id="photo" /></label></div>
						</div>

					


								<div class="form-group">
									<label class="control-label" for="textinput">Род деятельности</label>
									<div>
										<input id="position" name="position" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["position"]).'">
									</div>
								</div>

							



				<div class="form-group">
					<label class="control-label" for="textinput">Пол</label>
					<div>
						<select id="sex" name="sex" class="form-control input-md ">
							<option value="0" '.($item["sex"]=="0"?"selected":"").'>М</option> 
<option value="1" '.($item["sex"]=="1"?"selected":"").'>Ж</option> 

						</select>
					</div>
				</div>

			
					<div class="text-center not-editable">
						
					</div>
				</fieldset>
			</form>

		';

        if (function_exists("processCreateModalHTML")) {
            $html = processCreateModalHTML($html);
        }
        die($html);
    };


    $actions['edit_page'] = function () {
        $id = $_REQUEST['genesis_edit_id'];
        if (isset($id)) {
            $item = q("SELECT * FROM people WHERE id=?", [$id]);
            $item = $item[0];
        } else {
            die("Ошибка. Редактирование несуществующей записи (вы не указали id)");
        }

        
        $city_id_options = q("SELECT name as text, id as value FROM cities", []);
        $city_id_options_html = "";
        foreach ($city_id_options as $o) {
            $city_id_options_html .= "<option value=\"{$o['value']}\" ".($o["value"]==$item["city_id"]?"selected":"").">{$o['text']}</option>";
        }
            


        $html = '
			<h1 style="line-height: 30px"> Редактирование <br /><small>'."Люди".' #'.$id.'</small></h1>
			<form class="form" enctype="multipart/form-data" method="POST">
				<input type="hidden" name="back" value="'.$_SERVER['HTTP_REFERER'].'">
				<fieldset>'.
                    (
                        isset($id)?
                    '<input type="hidden" name="id" value="'.$id.'">
					<input type="hidden" name="action" value="edit_execute">'
                    :
                    '<input type="hidden" name="action" value="create_execute">'
                    )
                    .'

					
				<div class="form-group">
					<label class="control-label" for="textinput">Город</label>
					<div>
						<select id="city_id" name="city_id" class="form-control input-md " >
							'.$city_id_options_html.'
							</select>
					</div>
				</div>

			


								<div class="form-group">
									<label class="control-label" for="textinput">Имя</label>
									<div>
										<input id="name" name="name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["name"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Отчество</label>
									<div>
										<input id="f_name" name="f_name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["f_name"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Фамилия</label>
									<div>
										<input id="s_name" name="s_name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["s_name"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Год рождения</label>
									<div>
										<input id="birth_year" name="birth_year" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["birth_year"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Год смерти</label>
									<div>
										<input id="death_year" name="death_year" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["death_year"]).'">
									</div>
								</div>

							


								<div class="form-group">
									<label class="control-label" for="textinput">Гос.стат: годы</label>
									<div>
										<input id="gos_stat_info" name="gos_stat_info" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["gos_stat_info"]).'">
									</div>
								</div>

							


							<div class="form-group">
								<label class="control-label" for="textinput">Военное описание</label>
								<div>
									<textarea id="war_description" name="war_description" class="form-control input-md  ckeditor" style="height:500px;" >'.htmlspecialchars($item["war_description"]).'</textarea>
								</div>
							</div>

						


							<div class="form-group">
								<label class="control-label" for="textinput">Трудовое описание</label>
								<div>
									<textarea id="work_descrpiption" name="work_descrpiption" class="form-control input-md  ckeditor" style="height:500px;" >'.htmlspecialchars($item["work_descrpiption"]).'</textarea>
								</div>
							</div>

						


							<div class="form-group">
								<label class="control-label" for="textinput">Список заслуг</label>
								<div>
									<textarea id="reward_list" name="reward_list" class="form-control input-md  ckeditor" style="height:500px;" >'.htmlspecialchars($item["reward_list"]).'</textarea>
								</div>
							</div>

						


						<div class="form-group form-group-position-relative">
							<label class="control-label" for="textinput">Фото</label>
							<div class="">
								<img
								onerror="this.onerror=null; this.src=this.dataset[\'file-exists\']==1?\'style/badformat.png\':\'style/placeholder.jpg\'; this.setAttribute(\'image-url\', this.src); this.dataset.featherlight = this.src; this.style.objectFit = \'contain\';"
								data-file-exists="'.((!empty($item["photo"]))&&(file_exists($_SERVER["DOCUMENT_ROOT"].'/'.$item["photo"]))?"1":"0").'"
								src="'.$item["photo"].'" image-url="'.$item["photo"].'" class="genesis-image js-quotable" style="max-width:200px; max-height:200px;" /><label for="photo" class="file"> Выберите изображение <input type="file" name="photo" id="photo" /></label></div>
						</div>

					


								<div class="form-group">
									<label class="control-label" for="textinput">Род деятельности</label>
									<div>
										<input id="position" name="position" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["position"]).'">
									</div>
								</div>

							



				<div class="form-group">
					<label class="control-label" for="textinput">Пол</label>
					<div>
						<select id="sex" name="sex" class="form-control input-md ">
							<option value="0" '.($item["sex"]=="0"?"selected":"").'>М</option> 
<option value="1" '.($item["sex"]=="1"?"selected":"").'>Ж</option> 

						</select>
					</div>
				</div>

			

				</fieldset>
				<div>
					<a href="?'.(http_build_query(array_filter($_REQUEST, function ($k) {
                        return !in_array($k, ['action', 'genesis_edit_id']);
                    }, ARRAY_FILTER_USE_KEY))).'" class="btn cancel" >Закрыть</a>
					<button type="button" class="btn blue-inline" id="edit_page_save">Сохранить</a>
				</div>
			</form>

		';

        if (function_exists("processEditPageHTML")) {
            $html = processEditPageHTML($html);
        }
        return $html;
    };

    $actions['reorder'] = function () {
        $line = json_decode($_REQUEST['genesis_ids_in_order'], true);
        for ($i=0; $i < count($line); $i++) {
            qi("UPDATE `people` SET `` = ? WHERE id = ?", [$i, $line[$i]]);
        }


        die(json_encode(['status'=>0]));
    };



    $actions['change_group'] = function () {
        $id = $_REQUEST['id'];
        $group_id = $_REQUEST['group_id'];
        $prev_group_id = $_REQUEST['prev_group_id'];
        qi("UPDATE `people` SET `` = ? WHERE id = ?", [$group_id, $id]);

        $agregate = get_agregate($group_id);
        $agregate_html = "";

        $agregate = get_agregate($prev_group_id);
        $prev_agregate_html = "";

        die(json_encode(['status' => 0, 'agregate'=>$agregate_html, 'prev_agregate'=>$prev_agregate_html]));
    };

    $actions['groups_reorder'] = function () {
        $line = json_decode($_REQUEST['genesis_ids_in_order'], true);
        for ($i=0; $i < count($line); $i++) {
            qi("UPDATE `` SET `` = ? WHERE id = ?", [$i, $line[$i]]);
        }


        die(json_encode(['status'=>0]));
    };


    $actions['csv_create_execute'] = function () {
        if (function_exists("allowInsert")) {
            if (!allowInsert()) {
                header("Location: ".$_SERVER['HTTP_REFERER']);
                die("");
            }
        }


        $sql = "INSERT IGNORE INTO people (`city_id`, `name`, `f_name`, `s_name`, `birth_year`, `death_year`, `gos_stat_info`, `war_description`, `work_descrpiption`, `reward_list`, `photo`, `position`, `sex`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $lines = preg_split("/\r\n|\n|\r/", $_REQUEST['csv']);
        $success_count = 0;
        $errors_count = 0;
        foreach ($lines as $line) {
            $line = str_getcsv($line);
            qi($sql, [trim($line[0]), trim($line[1]), trim($line[2]), trim($line[3]), trim($line[4]), trim($line[5]), trim($line[6]), trim($line[7]), trim($line[8]), trim($line[9]), trim($line[10]), trim($line[11]), trim($line[12])]);
            $last_id = qInsertId();
            if ($last_id && $last_id>0) {
                $success_count++;
            } else {
                $errors_count++;
            }

            if (function_exists("afterInsert")) {
                afterInsert($last_id);
            }
        }

        buildMsg(
            ($success_count>0?"Успешно добавлено: {$success_count}<br>":"").
            ($errors_count>0?"Ошибок: {$errors_count}":""),
            $errors_count==0?"success":"danger"
        );





        header("Location: ".$_SERVER['HTTP_REFERER']);
        die("");
    };

    $actions['create_execute'] = function () {
        if (function_exists("allowInsert")) {
            if (!allowInsert()) {
                header("Location: ".$_SERVER['HTTP_REFERER']);
                die("");
            }
        }
        $city_id = $_REQUEST['city_id'];
        $name = $_REQUEST['name'];
        $f_name = $_REQUEST['f_name'];
        $s_name = $_REQUEST['s_name'];
        $birth_year = $_REQUEST['birth_year'];
        $death_year = $_REQUEST['death_year'];
        $gos_stat_info = $_REQUEST['gos_stat_info'];
        $war_description = $_REQUEST['war_description'];
        $work_descrpiption = $_REQUEST['work_descrpiption'];
        $reward_list = $_REQUEST['reward_list'];


        $photo = $_FILES['photo'];
        if (isset($photo) && $photo['name']!=="") {
            $ignore=0;
            @mkdir($_SERVER['DOCUMENT_ROOT'].'/uploads');
            chmod($_SERVER['DOCUMENT_ROOT'].'/uploads', 0777);
            if (!file_exists($_SERVER['DOCUMENT_ROOT'].'/uploads')) {
                die("Не удается создать папку uploads в корневой директории. Создайте ее самостоятельно и предоставьте системе доступ к ней.");
            }
            $tm = time();
            $ext = ".".pathinfo($photo['name'], PATHINFO_EXTENSION);
            $target_file = $_SERVER['DOCUMENT_ROOT']."/uploads/".$tm."_".md5($photo['name']).$ext;
            if (move_uploaded_file($photo['tmp_name'], $target_file)) {
                compressImage($target_file);
                $photo = "/uploads/".$tm."_".md5($photo['name']).$ext;
            } else {
                $set[] = "`photo`=''";
                buildMsg("Не удается загрузить изображение. Попробуйте отправить файл меньшего размера.", "danger");
            }
        } else {
            $photo="";
        }


                                
        $position = $_REQUEST['position'];
        $sex = $_REQUEST['sex'];

        $params = [$city_id, $name, $f_name, $s_name, $birth_year, $death_year, $gos_stat_info, $war_description, $work_descrpiption, $reward_list, $photo, $position, $sex];
        $sql = "INSERT INTO people (`city_id`, `name`, `f_name`, `s_name`, `birth_year`, `death_year`, `gos_stat_info`, `war_description`, `work_descrpiption`, `reward_list`, `photo`, `position`, `sex`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        if (function_exists("processInsertQuery")) {
            list($sql, $params) = processInsertQuery($sql, $params);
        }

        qi($sql, array_values($params));
        $last_id = qInsertId();

        if (function_exists("afterInsert")) {
            afterInsert($last_id);
        }

        

        header("Location: ".$_SERVER['HTTP_REFERER']);
        die("");
    };

    $actions['edit_execute'] = function () {
        $skip = false;
        if (function_exists("allowUpdate")) {
            if (!allowUpdate()) {
                $skip = true;
            }
        }
        if (!$skip) {
            $id = $_REQUEST['id'];
            $set = [];

            $set[] = is_null($_REQUEST['city_id'])?"`city_id`=NULL":"`city_id`='".addslashes($_REQUEST['city_id'])."'";
            $set[] = is_null($_REQUEST['name'])?"`name`=NULL":"`name`='".addslashes($_REQUEST['name'])."'";
            $set[] = is_null($_REQUEST['f_name'])?"`f_name`=NULL":"`f_name`='".addslashes($_REQUEST['f_name'])."'";
            $set[] = is_null($_REQUEST['s_name'])?"`s_name`=NULL":"`s_name`='".addslashes($_REQUEST['s_name'])."'";
            $set[] = is_null($_REQUEST['birth_year'])?"`birth_year`=NULL":"`birth_year`='".addslashes($_REQUEST['birth_year'])."'";
            $set[] = is_null($_REQUEST['death_year'])?"`death_year`=NULL":"`death_year`='".addslashes($_REQUEST['death_year'])."'";
            $set[] = is_null($_REQUEST['gos_stat_info'])?"`gos_stat_info`=NULL":"`gos_stat_info`='".addslashes($_REQUEST['gos_stat_info'])."'";
            $set[] = is_null($_REQUEST['war_description'])?"`war_description`=NULL":"`war_description`='".addslashes($_REQUEST['war_description'])."'";
            $set[] = is_null($_REQUEST['work_descrpiption'])?"`work_descrpiption`=NULL":"`work_descrpiption`='".addslashes($_REQUEST['work_descrpiption'])."'";
            $set[] = is_null($_REQUEST['reward_list'])?"`reward_list`=NULL":"`reward_list`='".addslashes($_REQUEST['reward_list'])."'";


            $photo = $_FILES['photo'];
            if (isset($_FILES['photo']) && $photo['name']!=="") {
                $ignore=0;
                @mkdir($_SERVER['DOCUMENT_ROOT'].'/uploads');
                chmod($_SERVER['DOCUMENT_ROOT'].'/uploads', 0777);
                if (!file_exists($_SERVER['DOCUMENT_ROOT'].'/uploads')) {
                    die("Не удается создать папку uploads в корневой директории. Создайте ее самостоятельно и предоставьте системе доступ к ней.");
                }
                $tm = time();
                $ext = ".".pathinfo($photo['name'], PATHINFO_EXTENSION);
                $target_file = $_SERVER['DOCUMENT_ROOT']."/uploads/".$tm."_".md5($photo['name']).$ext;
                if (move_uploaded_file($photo['tmp_name'], $target_file)) {
                    compressImage($target_file);
                    $set[] = "`photo`='".("/uploads/".$tm."_".md5($photo['name'])).$ext."'";
                } else {
                    $set[] = "`photo`=''";
                    buildMsg("Не удается загрузить изображение. Попробуйте отправить файл меньшего размера.", "danger");
                }
            } else {
                $photo = "";
            }

                                    
            $set[] = is_null($_REQUEST['position'])?"`position`=NULL":"`position`='".addslashes($_REQUEST['position'])."'";
            $set[] = is_null($_REQUEST['sex'])?"`sex`=NULL":"`sex`='".addslashes($_REQUEST['sex'])."'";

            if (count($set)>0) {
                $set = implode(", ", $set);
                $sql = "UPDATE people SET $set WHERE id=?";
                if (function_exists("processUpdateQuery")) {
                    $sql = processUpdateQuery($sql);
                }

                qi($sql, [$id]);
                if (function_exists("afterUpdate")) {
                    afterUpdate($id);
                }
            }
        }

        if (isset($_REQUEST['back'])) {
            header("Location: {$_REQUEST['back']}");
        } else {
            header("Location: ".$_SERVER['HTTP_REFERER']);
        }
        die("");
    };



    $actions['delete'] = function () {
        if (function_exists("allowDelete")) {
            if (!allowDelete()) {
                die("0");
            }
        }

        $id = $_REQUEST['id'];
        try {
            qi("DELETE FROM people WHERE id=?", [$id]);
            if (function_exists("afterDelete")) {
                afterDelete();
            }
            echo "1";
        } catch (Exception $e) {
            echo "0";
        }

        die("");
    };

    function filter_query($srch)
    {
        $filters = [];
        
        if (isset2($_REQUEST['city_id_filter'])) {
            $filters[] = "`city_id` = '{$_REQUEST['city_id_filter']}'";
        }
                

        $filter="";
        if (count($filters)>0) {
            $filter = implode(" AND ", $filters);
            if ($srch=="") {
                $filter = " WHERE $filter";
            } else {
                $filter = " AND ($filter)";
            }
        }
        return $filter;
    }

    function filter_divs()
    {
        $city_id_values = json_encode(q("SELECT name as text, id as value FROM cities", []));
        $city_id_values_text = "";
        foreach (json_decode($city_id_values, true) as $opt) {
            $city_id_values_text.="<option value=\"{$opt['value']}\">{$opt['text']}</option>";
        }
        $sex_values = '[{"text":"М", "value":"0"}, {"text":"Ж", "value":"1"}]';
        $sex_values_text = "";
        foreach (json_decode($sex_values, true) as $opt) {
            $sex_values_text.="<option value=\"{$opt['value']}\">{$opt['text']}</option>";
        }

        
        
        $text_option = array_filter(json_decode($city_id_values, true), function ($i) {
            return $i['value']==$_REQUEST['city_id_filter'];
        });
        $text_option = array_values($text_option)[0]['text'];
        if (isset2($_REQUEST['city_id_filter'])) {
            $filter_divs .= "
			<div class='filter-tag'>
					<input type='hidden' class='filter' name='city_id_filter' value='{$_REQUEST['city_id_filter']}'>
					<span class='fa fa-times remove-tag'></span> Город: <b>{$text_option}</b>
			</div>";

            $filter_caption = "Фильтры: ";
        }
                
        $show = $filter_caption.$filter_divs;

        return $show;
    }

    function get_agregate($group_id = "")
    {
        $items = [];

        $srch = "";
        
        if ($_REQUEST['srch-term']) {
            $escaped_srch = str_replace('\'', '\\\'', $_REQUEST['srch-term']);
            $escaped_srch = str_replace('%', '^%', $escaped_srch);
            $escaped_srch = str_replace('_', '^_', $escaped_srch);
            $srch = "WHERE ((`name` LIKE '%".$escaped_srch."%' ESCAPE '^') or (`f_name` LIKE '%".$escaped_srch."%' ESCAPE '^') or (`s_name` LIKE '%".$escaped_srch."%' ESCAPE '^'))";
            $srch = preg_replace('/\\\\+\'/m', '\\\'', $srch);
        }

        $filter = filter_query($srch);
        $where = "";
        if ($where != "") {
            if ($filter!='' || $srch !='') {
                $where = " AND ($where)";
            } else {
                $where = " WHERE ($where)";
            }
        }

        $group_where = "";
        if (isset($group_id) && !empty($group_id)) {
            $group_id = str_replace("'", "\'", $group_id);
            if ($filter!='' || $srch !='' || $where !='') {
                $group_where = " AND (`` = '{$group_id}')";
            } else {
                $group_where = " WHERE (`` = '{$group_id}')";
            }
        }

        $sql = "SELECT 1 as stub  FROM (SELECT main_table.*  FROM people main_table) temp $srch $filter $where $group_where $order";

        $debug = (isset($_REQUEST['alef_debug']) && $_REQUEST['alef_debug']==1);
        if (in_array($_SERVER['SERVER_NAME'], ["test-genesis.alef.im", "devtest-genesis.alef.im", "localhost"]) || $debug) {
            if ($_REQUEST['action']=='') {
                echo "<!--SQL AGREGATE {$sql} -->\n";
            }
        }

        $result = q($sql, []);
        return $result[0];
    }

    function get_data($force_kill_pagination=false)
    {
        if (function_exists("allowSelect")) {
            if (!allowSelect()) {
                die("У вас нет доступа к данной странице");
            }
        }

        $pagination = 1;
        if ($force_kill_pagination==true) {
            $pagination = 0;
        }
        $items = [];

        $srch = "";
        
        if ($_REQUEST['srch-term']) {
            $escaped_srch = str_replace('\'', '\\\'', $_REQUEST['srch-term']);
            $escaped_srch = str_replace('%', '^%', $escaped_srch);
            $escaped_srch = str_replace('_', '^_', $escaped_srch);
            $srch = "WHERE ((`name` LIKE '%".$escaped_srch."%' ESCAPE '^') or (`f_name` LIKE '%".$escaped_srch."%' ESCAPE '^') or (`s_name` LIKE '%".$escaped_srch."%' ESCAPE '^'))";
            $srch = preg_replace('/\\\\+\'/m', '\\\'', $srch);
        }

        $filter = filter_query($srch);
        $where = "";
        if ($where != "") {
            if ($filter!='' || $srch !='') {
                $where = " AND ($where)";
            } else {
                $where = " WHERE ($where)";
            }
        }


        
        $default_sort_by = '';
        $default_sort_order = '';
            

        if (isset($default_sort_by) && $default_sort_by) {
            $order = "ORDER BY $default_sort_by $default_sort_order";
        }

        if (isset($_REQUEST['sort_by']) && $_REQUEST['sort_by']!="") {
            $order = "ORDER BY {$_REQUEST['sort_by']} {$_REQUEST['sort_order']}";
        }

        $debug = (isset($_REQUEST['alef_debug']) && $_REQUEST['alef_debug']==1);
        if ($pagination == 1) {
            $sql = "SELECT SQL_CALC_FOUND_ROWS * FROM (SELECT  main_table.*  FROM people main_table) temp $srch $filter $where $order LIMIT :start, :limit";
            if (function_exists("processSelectQuery")) {
                $sql = processSelectQuery($sql);
            }


            if (in_array($_SERVER['SERVER_NAME'], ["test-genesis.alef.im", "devtest-genesis.alef.im", "localhost"]) || $debug) {
                if ($_REQUEST['action']=='') {
                    echo "<!--SQL DATA {$sql} -->\n";
                }
            }

            $items = q(
                $sql,
                [
                    'start' => MAX(($_GET['page']-1), 0)*RPP,
                    'limit' => RPP
                ]
            );
            $cnt = qRows();
            $pagination = pagination($cnt);
        } else {
            $sql = "SELECT SQL_CALC_FOUND_ROWS * FROM (SELECT main_table.*  FROM people main_table) temp $srch $filter $where $order";
            if (in_array($_SERVER['SERVER_NAME'], ["test-genesis.alef.im", "devtest-genesis.alef.im", "localhost"]) || $debug) {
                if ($_REQUEST['action']=='') {
                    echo "<!--SQL DATA {$sql} -->";
                }
            }
            if (function_exists("processSelectQuery")) {
                $sql = processSelectQuery($sql);
            }
            $items = q($sql, []);
            $cnt = qRows();
            $pagination = "";
        }

        if (function_exists("processData")) {
            $items = processData($items);
        }

        return [$items, $pagination, $cnt];
    }

    

    $content = $actions[$action]();
    $finalPage = masterRender("Люди", $content, 2, "genesis-body-presentation-table genesis-grouping-style-");
    if (function_exists("processPage")) {
        $finalPage = processPage($finalPage);
    }
    echo $finalPage;
