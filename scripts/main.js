import Header from './layouts/Header.js';
import Window from './components/Window.js';
import Calculator from './apps/Calculator.js';
import TicTacToe from './apps/TicTacToe.js';
import Settings from './apps/Settings.js';

(function () {
	/**
	 * Header
	 */

	const header = new Header({
		node: document.querySelector('[data-header]'),
	});

	/**
	 * Calculator
	 */

	const calculator = new Calculator({
		node: document.querySelector('[data-calculator]'),
	});

	const calculatorWindow = new Window({
		node: document.querySelector("[data-window='calculator']"),
		width: 500,
		height: 400,
		resetCallback: function () {
			calculator.onReset();
		},
	});

	/**
	 * Tic-Tac-Toe
	 */

	const ticTacToe = new TicTacToe({
		node: document.querySelector('[data-tic-tac-toe]'),
	});

	const ticTacToeWindow = new Window({
		node: document.querySelector("[data-window='tic-tac-toe']"),
		width: 500,
		height: 400,
		resetCallback: function () {
			ticTacToe.onReset();
		},
	});

	/**
	 * Settings
	 */

	const settings = new Settings({
		node: document.querySelector('[data-settings]'),
		header,
	});

	const settingsWindow = new Window({
		node: document.querySelector("[data-window='settings']"),
		width: 500,
		height: 400,
		resetCallback: function () {},
	});
})();
