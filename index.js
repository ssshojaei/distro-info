const shell = require('shelljs')

const name = () => {
	const res = shell.exec('lsb_release -i', { silent: true }).stdout
	return res.split(':')[1].toLocaleLowerCase().trim()
}

const desktop = () => {
	const res = shell.exec('echo $XDG_CURRENT_DESKTOP', { silent: true }).stdout
	return res.trim().toLocaleLowerCase()
}

const version = () => {
	let res
	switch (desktop()) {
		case 'gnome':
			res = shell.exec('gnome-shell --version', { silent: true }).stdout
			return parseFloat(res.replace(/[^\d\.]*/g, ''))
		case 'xfce':
			res = shell.exec('xfce4-panel --version', { silent: true }).stdout
			return parseFloat(res.replace(/[^\d\.]*/g, ''))
		case 'kde':
			res = shell.exec('plasmashell --version', { silent: true }).stdout
			return parseFloat(res.replace(/[^\d\.]*/g, ''))
		default:
			return 0
	}
}

const clean = (value) => {
	const res = shell.exec(value, { silent: true }).stdout
	return res.replace(/'/g, '').trim()
}

const theme = {
	fonts: {
		get font_name() {
			return clean('gsettings get org.gnome.desktop.interface font-name')
		},
		set font_name(val) {
			shell.exec(
				`gsettings set org.gnome.desktop.interface font-name '${val}'`,
				{ silent: true }
			)
		},
		get document_font() {
			return clean(
				'gsettings get org.gnome.desktop.interface document-font-name'
			)
		},
		set document_font(val) {
			shell.exec(
				`gsettings set org.gnome.desktop.interface document-font-name '${val}'`,
				{ silent: true }
			)
		},
		get monospace_font() {
			return clean(
				'gsettings get org.gnome.desktop.interface monospace-font-name'
			)
		},
		set monospace_font(val) {
			shell.exec(
				`gsettings set org.gnome.desktop.interface monospace-font-name '${val}'`,
				{ silent: true }
			)
		},
		get font() {
			return clean('gsettings get org.gnome.desktop.interface font-name')
		},
		set font(val) {
			shell.exec(
				`gsettings set org.gnome.desktop.interface font-name '${val}'`,
				{ silent: true }
			)
		},
	},
	get background() {
		return clean('gsettings get org.gnome.desktop.background picture-uri')
	},
	set background(val) {
		shell.exec(
			`gsettings set org.gnome.desktop.background picture-uri '${val}'`,
			{ silent: true }
		)
	},
	gtk: {
		get theme() {
			return clean('gsettings get org.gnome.desktop.interface gtk-theme')
		},
		set theme(val) {
			shell.exec(
				`gsettings set org.gnome.desktop.interface gtk-theme '${val}'`,
				{ silent: true }
			)
		},
		get colorPalette() {
			return clean(
				'gsettings get org.gnome.desktop.interface gtk-color-palette'
			)
		},
		set colorPalette(val) {
			shell.exec(
				`gsettings set org.gnome.desktop.interface gtk-color-palette '${val}'`,
				{ silent: true }
			)
		},
	},
	get icon() {
		return clean('gsettings get org.gnome.desktop.interface icon-theme')
	},
	set icon(val) {
		shell.exec(
			`gsettings set org.gnome.desktop.interface icon-theme '${val}'`,
			{ silent: true }
		)
	},
	get cursor() {
		return clean('gsettings get org.gnome.desktop.interface cursor-theme')
	},
	set cursor(val) {
		shell.exec(
			`gsettings set org.gnome.desktop.interface cursor-theme '${val}'`,
			{ silent: true }
		)
	},
	get shell() {
		return clean('gsettings get org.gnome.shell.extensions.user-theme name')
	},
	set shell(val) {
		shell.exec(
			`gsettings set org.gnome.shell.extensions.user-theme name '${val}'`,
			{ silent: true }
		)
	},
	extensions: {
		enabled() {
			return clean('gsettings get org.gnome.shell enabled-extensions')
		},
		enable(val) {
			shell.exec(`gnome-shell-extension-tool -e '${val}'`, { silent: true })
		},
		disable(val) {
			shell.exec(`gnome-shell-extension-tool -d '${val}'`, { silent: true })
		},
	},
}
module.exports = { name, desktop, version, theme }
