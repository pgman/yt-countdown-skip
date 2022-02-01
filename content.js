setInterval(() => {
	const $elm = $('.ytp-autonav-endscreen-countdown-container');		
	if($elm.css('display') !== 'none' && $elm.length) {
		const $a = $elm.find('a.ytp-autonav-endscreen-link-container');
		$a[0].click();
	}
}, 100);
