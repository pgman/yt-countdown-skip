setInterval(() => {
	const container = document.querySelector('.ytp-autonav-endscreen-countdown-container');	
	if(container && container.style.display !== 'none' ) {
		const a = document.querySelector('a.ytp-autonav-endscreen-link-container');	
		if(a) { a.click(); }
	}
}, 100);
