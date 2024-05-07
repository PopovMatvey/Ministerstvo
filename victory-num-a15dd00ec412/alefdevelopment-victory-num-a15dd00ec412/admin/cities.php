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
    



    

    define("RPP", 50); //кол-во строк на странице

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
        $region_id_values = json_encode(q("SELECT name as text, id as value FROM regions", []));
        $region_id_values_text = "";
        foreach (json_decode($region_id_values, true) as $opt) {
            $region_id_values_text.="<option value=\"{$opt['value']}\">{$opt['text']}</option>";
        }

        list($items, $pagination, $cnt) = get_data();

        $sort_order[$_REQUEST['sort_by']] = $_REQUEST['sort_order'];

        $next_order['id']='asc';
        $next_order['name']='asc';
        $next_order['region_id']='asc';

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
							<small>Вставьте сюда новые записи. Каждая запись на новой строчке: <b class="csv-create-format">ID, Название, Область</b></small>
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
				<h2><a href="#" class="back-btn"><span class="fa fa-arrow-circle-left"></span></a> '."Города".' </h2>
				<button class="btn blue-inline add_button" data-toggle="modal" data-target="#modal-main">ДОБАВИТЬ</button>
				<p class="small res-cnt">Кол-во результатов: <span class="cnt-number-span">'.$cnt.'</span></p>
			</div>
			
			
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
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=id&sort_order='. ($next_order['id']) .'\' class=\'sort\' column=\'id\' sort_order=\''.$sort_order['id'].'\'>ID'. $sort_icon['id'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=name&sort_order='. ($next_order['name']) .'\' class=\'sort\' column=\'name\' sort_order=\''.$sort_order['name'].'\'>Название'. $sort_icon['name'].'</a>
			</div>

			<div class="genesis-header-property">
				   <a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=region_id&sort_order='. ($next_order['region_id']) .'\' class=\'sort\' column=\'region_id\' sort_order=\''.$sort_order['region_id'].'\'>Область'. $sort_icon['region_id'].'</a>
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
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=id&sort_order='. ($next_order['id']) .'\' class=\'sort\' column=\'id\' sort_order=\''.$sort_order['id'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['id']) ? $sort_icon['id'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>ID:</span>
		</span><div class='js-quotable'>".htmlspecialchars($item['id'])."</div></div>", $item, "ID"):"<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=id&sort_order='. ($next_order['id']) .'\' class=\'sort\' column=\'id\' sort_order=\''.$sort_order['id'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['id']) ? $sort_icon['id'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>ID:</span>
		</span><div class='js-quotable'>".htmlspecialchars($item['id'])."</div></div>")."
".(function_exists("processTD")?processTD("
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=name&sort_order='. ($next_order['name']) .'\' class=\'sort\' column=\'name\' sort_order=\''.$sort_order['name'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['name']) ? $sort_icon['name'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Название:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=cities' data-pk='{$item['id']}' data-name='name'>".htmlspecialchars($item['name'])."</span>
	</div>", $item, "Название"):"
	<div class='genesis-item-property '>
		<span class='genesis-attached-column-info'>
			<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=name&sort_order='. ($next_order['name']) .'\' class=\'sort\' column=\'name\' sort_order=\''.$sort_order['name'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['name']) ? $sort_icon['name'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
			<span class='genesis-attached-column-name'>Название:</span>
		</span>
		<span class='editable' data-placeholder='' data-inp='text' data-url='engine/ajax.php?action=editable&table=cities' data-pk='{$item['id']}' data-name='name'>".htmlspecialchars($item['name'])."</span>
	</div>")."
".(function_exists("processTD")?processTD("<div class='genesis-item-property '>
				<span class='genesis-attached-column-info'>
					<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=region_id&sort_order='. ($next_order['region_id']) .'\' class=\'sort\' column=\'region_id\' sort_order=\''.$sort_order['region_id'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['region_id']) ? $sort_icon['region_id'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
					<span class='genesis-attached-column-name'>Область:</span>
				</span><span class='editable' data-inp='select' data-type='select' data-source='".htmlspecialchars($region_id_values, ENT_QUOTES, 'UTF-8')."' data-url='engine/ajax.php?action=editable&table=cities' data-pk='{$item['id']}' data-name='region_id'>".select_mapping($region_id_values, $item['region_id'])."</span></div>", $item, "Область"):"<div class='genesis-item-property '>
				<span class='genesis-attached-column-info'>
					<span class='buttons-panel'>".'<a href=\'?'.get_query().'&srch-term='.$_REQUEST['srch-term'].'&sort_by=region_id&sort_order='. ($next_order['region_id']) .'\' class=\'sort\' column=\'region_id\' sort_order=\''.$sort_order['region_id'].'\'>'. (str_replace('style="margin-left:5px;"', '', !empty($sort_icon['region_id']) ? $sort_icon['region_id'] : '<span class="fa fa-sort"></span>')).'</a>'."</span>
					<span class='genesis-attached-column-name'>Область:</span>
				</span><span class='editable' data-inp='select' data-type='select' data-source='".htmlspecialchars($region_id_values, ENT_QUOTES, 'UTF-8')."' data-url='engine/ajax.php?action=editable&table=cities' data-pk='{$item['id']}' data-name='region_id'>".select_mapping($region_id_values, $item['region_id'])."</span></div>")."
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


        $show.="<div></div>".' ';



        $show .= <<<'EOT'
		<style></style>
		<script></script>
EOT;


        return $show;
    };



    $actions['edit'] = function () {
        $id = $_REQUEST['genesis_edit_id'];
        if (isset($id)) {
            $item = q("SELECT * FROM cities WHERE id=?", [$id]);
            $item = $item[0];
        }

        
        $region_id_options = q("SELECT name as text, id as value FROM regions", []);
        $region_id_options_html = "";
        foreach ($region_id_options as $o) {
            $region_id_options_html .= "<option value=\"{$o['value']}\" ".($o["value"]==$item["region_id"]?"selected":"").">{$o['text']}</option>";
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

					
		          <div class="form-group not-editable">
		            <label class="control-label" for="textinput">ID</label>
		            <div class="js-quotable">
		            <p>
		              '.$item["id"].'
		            </p>
		            </div>
		          </div>

		          


								<div class="form-group">
									<label class="control-label" for="textinput">Название</label>
									<div>
										<input id="name" name="name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["name"]).'">
									</div>
								</div>

							

				<div class="form-group">
					<label class="control-label" for="textinput">Область</label>
					<div>
						<select id="region_id" name="region_id" class="form-control input-md " >
							'.$region_id_options_html.'
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
        $region_id_options = q("SELECT name as text, id as value FROM regions", []);
        $region_id_options_html = "";
        foreach ($region_id_options as $o) {
            $region_id_options_html .= "<option value=\"{$o['value']}\" ".($o["value"]==$item["region_id"]?"selected":"").">{$o['text']}</option>";
        }
            

        $html = '
			<form class="form" enctype="multipart/form-data" method="POST">
				<fieldset>
					<input type="hidden" name="action" value="create_execute">
					
		          <div class="form-group not-editable">
		            <label class="control-label" for="textinput">ID</label>
		            <div class="js-quotable">
		            <p>
		              '.$item["id"].'
		            </p>
		            </div>
		          </div>

		          


								<div class="form-group">
									<label class="control-label" for="textinput">Название</label>
									<div>
										<input id="name" name="name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["name"]).'">
									</div>
								</div>

							

				<div class="form-group">
					<label class="control-label" for="textinput">Область</label>
					<div>
						<select id="region_id" name="region_id" class="form-control input-md " >
							'.$region_id_options_html.'
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
            $item = q("SELECT * FROM cities WHERE id=?", [$id]);
            $item = $item[0];
        } else {
            die("Ошибка. Редактирование несуществующей записи (вы не указали id)");
        }

        
        $region_id_options = q("SELECT name as text, id as value FROM regions", []);
        $region_id_options_html = "";
        foreach ($region_id_options as $o) {
            $region_id_options_html .= "<option value=\"{$o['value']}\" ".($o["value"]==$item["region_id"]?"selected":"").">{$o['text']}</option>";
        }
            


        $html = '
			<h1 style="line-height: 30px"> Редактирование <br /><small>'."Города".' #'.$id.'</small></h1>
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

					
		          <div class="form-group not-editable">
		            <label class="control-label" for="textinput">ID</label>
		            <div class="js-quotable">
		            <p>
		              '.$item["id"].'
		            </p>
		            </div>
		          </div>

		          


								<div class="form-group">
									<label class="control-label" for="textinput">Название</label>
									<div>
										<input id="name" name="name" type="text"  placeholder="" class="form-control input-md " value="'.htmlspecialchars($item["name"]).'">
									</div>
								</div>

							

				<div class="form-group">
					<label class="control-label" for="textinput">Область</label>
					<div>
						<select id="region_id" name="region_id" class="form-control input-md " >
							'.$region_id_options_html.'
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
            qi("UPDATE `cities` SET `` = ? WHERE id = ?", [$i, $line[$i]]);
        }


        die(json_encode(['status'=>0]));
    };



    $actions['change_group'] = function () {
        $id = $_REQUEST['id'];
        $group_id = $_REQUEST['group_id'];
        $prev_group_id = $_REQUEST['prev_group_id'];
        qi("UPDATE `cities` SET `` = ? WHERE id = ?", [$group_id, $id]);

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


        $sql = "INSERT IGNORE INTO cities (`name`, `region_id`) VALUES (?, ?)";

        $lines = preg_split("/\r\n|\n|\r/", $_REQUEST['csv']);
        $success_count = 0;
        $errors_count = 0;
        foreach ($lines as $line) {
            $line = str_getcsv($line);
            qi($sql, [trim($line[0]), trim($line[1]), trim($line[2])]);
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
        $name = $_REQUEST['name'];
        $region_id = $_REQUEST['region_id'];

        $params = [$name, $region_id];
        $sql = "INSERT INTO cities (`name`, `region_id`) VALUES (?, ?)";
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

            $set[] = is_null($_REQUEST['name'])?"`name`=NULL":"`name`='".addslashes($_REQUEST['name'])."'";
            $set[] = is_null($_REQUEST['region_id'])?"`region_id`=NULL":"`region_id`='".addslashes($_REQUEST['region_id'])."'";

            if (count($set)>0) {
                $set = implode(", ", $set);
                $sql = "UPDATE cities SET $set WHERE id=?";
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
            qi("DELETE FROM cities WHERE id=?", [$id]);
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
        $region_id_values = json_encode(q("SELECT name as text, id as value FROM regions", []));
        $region_id_values_text = "";
        foreach (json_decode($region_id_values, true) as $opt) {
            $region_id_values_text.="<option value=\"{$opt['value']}\">{$opt['text']}</option>";
        }
        
        $show = $filter_caption.$filter_divs;

        return $show;
    }

    function get_agregate($group_id = "")
    {
        $items = [];

        $srch = "";
        

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

        $sql = "SELECT 1 as stub  FROM (SELECT main_table.*  FROM cities main_table) temp $srch $filter $where $group_where $order";

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

        $pagination = 0;
        if ($force_kill_pagination==true) {
            $pagination = 0;
        }
        $items = [];

        $srch = "";
        

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
            $sql = "SELECT SQL_CALC_FOUND_ROWS * FROM (SELECT  main_table.*  FROM cities main_table) temp $srch $filter $where $order LIMIT :start, :limit";
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
            $sql = "SELECT SQL_CALC_FOUND_ROWS * FROM (SELECT main_table.*  FROM cities main_table) temp $srch $filter $where $order";
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
    $finalPage = masterRender("Города", $content, 0, "genesis-body-presentation-table genesis-grouping-style-");
    if (function_exists("processPage")) {
        $finalPage = processPage($finalPage);
    }
    echo $finalPage;
