//Customised by MallowTech
(function () {
	'use strict';
    Sortable.create(document.getElementById('cards'), {
			sort: false,
			group: {
                    name: 'card-system',
                    pull: 'clone',
                    put: false
                },
			animation: 150
		});
    Sortable.create(document.getElementById('cards-box'), {
			sort: true,
			group: {
                name: 'card-system',
                pull: false,
                put: true
            },
            handle: '.drag-handle',
			animation: 150,
            onAdd: function (evt) {
                if($(evt.item).closest('#cards-box').length){
                    var target = $(evt.item).data('card');
                    (evt.item).innerHTML = $(target).html();
                    $(evt.item).removeClass('hide-card');
                    $(evt.item).addClass('show-card');
                }
            }
		});
})();



