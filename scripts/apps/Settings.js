/**
 * Settings
 */

export default class Settings {
	constructor({ node, header }) {
		this.node = node;
		this.header = header;

		this.date = this.node.querySelector('[data-settings-date]');
		this.time = this.node.querySelector('[data-settings-time]');
		this.battery = this.node.querySelector('[data-settings-battery]');
		this.latency = this.node.querySelector('[data-settings-latency]');
		this.credentials = this.node.querySelector('[data-settings-credentials]');

		this.init();

		this.date.addEventListener('change', this.onChangeDate.bind(this));
		this.time.addEventListener('change', this.onChangeTime.bind(this));
		this.battery.addEventListener('change', this.onChangeBattery.bind(this));
		this.latency.addEventListener('change', this.onChangeLatency.bind(this));
		this.credentials.addEventListener(
			'submit',
			this.onChangeCredentials.bind(this),
		);
	}

	init() {
		this.date.checked = this.getSettings('settings.date');
		this.time.checked = this.getSettings('settings.time');
		this.battery.checked = this.getSettings('settings.battery');
		this.latency.checked = this.getSettings('settings.latency');

		if (!this.getSettings('settings.date')) this.header.hideDate();
		if (!this.getSettings('settings.time')) this.header.hideTime();
		if (!this.getSettings('settings.battery')) this.header.hideBattery();
		if (!this.getSettings('settings.latency')) this.header.hideLatency();
	}

	getSettings(key) {
		return window.localStorage.getItem(key) === 'false' ? false : true;
	}

	onChangeDate(e) {
		window.localStorage.setItem('settings.date', e.target.checked);
		if (e.target.checked) {
			this.header.showDate();
		} else {
			this.header.hideDate();
		}
	}

	onChangeTime(e) {
		window.localStorage.setItem('settings.time', e.target.checked);
		if (e.target.checked) {
			this.header.showTime();
		} else {
			this.header.hideTime();
		}
	}

	onChangeBattery(e) {
		window.localStorage.setItem('settings.battery', e.target.checked);
		if (e.target.checked) {
			this.header.showBattery();
		} else {
			this.header.hideBattery();
		}
	}

	onChangeLatency(e) {
		window.localStorage.setItem('settings.latency', e.target.checked);
		if (e.target.checked) {
			this.header.showLatency();
		} else {
			this.header.hideLatency();
		}
	}

	onChangeCredentials(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const username = formData.get('username');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirm-password');

		// form validation
		if (!username || username.trim() === '')
			return alert('Username is required');
		if (!password || password.trim() === '')
			return alert('Password is required');
		if (!confirmPassword || confirmPassword.trim() === '')
			return alert('Password confirm is required');
		if (password !== confirmPassword) return alert("Passwords doesn't match");

		// register user
		window.localStorage.setItem('auth.username', username);
		window.localStorage.setItem('auth.password', username);
	}
}
