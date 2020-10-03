{
	const callback = () =>{}
	const $list;
	const lightboxOptions = {
		'resizeDuration': 200,
		'wrapAround': true,
		'albumLabel': "Ponentes"
	}

	const init = ()=>{
		$list = $('#lista');
		lightbox.option(lightboxOptions)
		loadSpeakersList(callback);
	}

	const loadSpeakersList = ()=>{
		weekDays.each((day) => showDay(day))
	}

	const showSpeakers = (datos)=>{
		$.each(datos,function(key,value){
			let $div = $('<div class="ponente"></div>')
			const $image = $('<img>').prop('src',value.imagen);
			let $link =  $('<a data-lightbox="roadtrip"></a>').prop("href",value.imagen);
			const $speaker = $('<p></p>').html(value.ponente);

			$link.append($image);
			$div.append($link, $speaker);
			$list.append($div);
		});
	}

	const showDay =(day)=>{
		$.getJSON(`./js/${day}.json`, function(data) {
			showSpeakers(data['actividades']);
		})
	}

	$(init);
}
