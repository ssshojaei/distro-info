const shell = require('shelljs');
console.log();
const name = () => {
	const res = shell.exec('lsb_release -i', { silent: true }).stdout;
	return res.split(':')[1].toLocaleLowerCase().trim();
};

const desktop = () => {
	const res = shell.exec('echo $XDG_CURRENT_DESKTOP', { silent: true }).stdout;
	return res.trim().toLocaleLowerCase();
};

const version = () => {
	let res;
	switch (desktop()) {
		case 'gnome':
			res = shell.exec('gnome-shell --version', { silent: true }).stdout;
			return parseFloat(res.replace(/[^\d\.]*/g, ''));
		case 'xfce':
			res = shell.exec('xfce4-panel --version', { silent: true }).stdout;
			return parseFloat(res.replace(/[^\d\.]*/g, ''));
		case 'kde':
			res = shell.exec('plasmashell --version', { silent: true }).stdout;
			return parseFloat(res.replace(/[^\d\.]*/g, ''));
		default:
			return 0;
	}
};

const theme = () => {
	const clean = (value) => {
		const res = shell.exec(value, { silent: true }).stdout;
		return res.replace(/'/g, '').trim().toLocaleLowerCase();
	};
	return {
		gtk    : clean('gsettings get org.gnome.desktop.interface gtk-theme'),
		icon   : clean('gsettings get org.gnome.desktop.interface icon-theme'),
		font   : clean('gsettings get org.gnome.desktop.interface font-name'),
		cursor : clean('gsettings get org.gnome.desktop.interface cursor-theme'),
		shell  : clean('gsettings get org.gnome.shell.extensions.user-theme name')
	};
};
const cpu = () => {
	const output = shell.exec('lscpu', { silent: true }).stdout;

	const linedString = output.split('\n');
	let information = {};
	linedString.forEach((line) => {
		if (/: +/.test(line)) {
			// split every line with every ': '
			dividedString = line.split(/: +/g);
			let value = '';

			if (dividedString.length > 2) {
				// check two or more ': ' statements
				value = dividedString.slice(1, dividedString.length - 1);
			} else {
				value = dividedString[1];
			}
			information[dividedString[0].replace(/[-, ]/g, '_').replace(/[(,)]/g, '')] = value;
		} else {
			information[Object.keys(information)[Object.keys(information).length - 1]] += dividedString;
		}
	});
	return information;
};

module.exports = { name, desktop, version, theme, cpu };
