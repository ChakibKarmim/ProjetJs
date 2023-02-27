class Header {
	constructor({ node }) {
		this.node = node;

		this.date = this.node.querySelector('[data-header-date]');
		this.time = this.node.querySelector('[data-header-time]');
		this.battery = this.node.querySelector('[data-header-battery]');
		this.latency = this.node.querySelector('[data-header-latency]');

		this.initDate();
		this.initBattery();
		this.initLatency();
		window.setInterval(() => {
			this.initTime();
		}, 1000);
	}

	initDate() {
		const date = new Intl.DateTimeFormat('fr-FR', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}).format(new Date());
		this.date.textContent = date;
	}

	initTime() {
		const date = new Date();
		this.time.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	}

	initLatency() {
		const startTime = new Date().getTime();
		fetch('https://jsonplaceholder.typicode.com/').then(() => {
			const endTime = new Date().getTime();
			const latency = endTime - startTime;
			this.latency.textContent = `${latency}/ms`;
		});
	}

	initBattery() {
		navigator.getBattery().then((battery) => {
			this.battery.textContent =
				battery.charging + ' ' + `${Math.floor(battery.level * 100)}%`;

			// is battery charging event
			battery.addEventListener('chargingchange', () => {
				this.battery.textContent =
					battery.charging + ' ' + `${battery.level * 100}%`;
			});

			// is battery level changes event
			battery.addEventListener('levelchange', () => {
				this.battery.textContent =
					battery.charging + ' ' + `${battery.level * 100}%`;
			});
		});
	}

	// control fileds visibility

	showDate() {
		this.date.style.visibility = 'visible';
		this.date.style.width = 'auto';
	}
	hideDate() {
		this.date.style.visibility = 'hidden';
		this.date.style.width = '0px';
	}

	showTime() {
		this.time.style.visibility = 'visible';
		this.time.style.width = 'auto';
	}
	hideTime() {
		this.time.style.visibility = 'hidden';
		this.time.style.width = '0px';
	}

	showBattery() {
		this.battery.style.visibility = 'visible';
		this.battery.style.width = 'auto';
	}
	hideBattery() {
		this.battery.style.visibility = 'hidden';
		this.battery.style.width = '0px';
	}

	showLatency() {
		this.latency.style.visibility = 'visible';
		this.latency.style.width = 'auto';
	}
	hideLatency() {
		this.latency.style.visibility = 'hidden';
		this.latency.style.width = '0px';
	}
}

export default Header;
