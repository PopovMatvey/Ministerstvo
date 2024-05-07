function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

CKEDITOR.plugins.add( 'voodoolink', {
	icons: 'voodoolink',
	init: function( editor ) {

		var html =
'<div id="voodooModal" class="modal fade ckeditor-voodoo-screen-options" style="z-index:10000; background: rgba(0,0,0,0.5);" role="dialog">'+
'  <div class="modal-dialog" role="document">'+
'    <div class="modal-content">' +
'      <div class="modal-header">' +
'        <h5 class="modal-title">Вставка ссылки</h5>' +
'      </div>' +
'      <div class="modal-body">' +
'			<div class="form-group">'+
'				<label class="control-label" for="voodoo-screen-select">Выберите экран</label>' +
'   	   		<select class="voodoo-screen-select" name="voodoo-screen-select"></select>' +
'			</div>'+
'      </div>' +
'      <div class="modal-footer">' +
'        <button type="button" class="btn btn-primary btn-genesis add-voodoo-screen-link">Добавить</button>' +
'      </div>' +
'    </div>' +
'</div>' +
'</div>';
		$('body').append($(html));

		$(document).off('click.voodoo').on('click.voodoo', '.add-voodoo-screen-link', (e)=>{
			var select = $('.voodoo-screen-select');
			editor.insertHtml('<a target="_blank" href="screen.php?id=' + select.val() + '">' + select.find("option:selected").text() + '</a>');
			$('.ckeditor-voodoo-screen-options').modal('hide');
		});

		editor.addCommand('insertVoodooLink', {
			exec: function( editor ) {
				var now = new Date();
				$.ajax({
					url: "ck-api.php",
					data: {"screen_id": findGetParameter("id")},
					success: (str) => {
						var arr = JSON.parse(str);
						var select2 = arr.map((i)=>{return "<option value='" + i.id + "'>" + i.title + "</option>"}).join();

						$("#voodooModal select").html(select2);

						$('.voodoo-screen-select').select2();
						$('.ckeditor-voodoo-screen-options').modal('show');
					},
					error: () => {
						alert("Нет соединения с интернетом");
					},
				});

			}
		});
		editor.ui.addButton('VoodooLink', {
			label: 'Вставить ссылку на экран',
			command: 'insertVoodooLink',
			toolbar: 'insert'
		});
	}
});
