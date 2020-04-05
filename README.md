## simple package for get distribution information

### install

**with npm**

    npm i distro-info

**with yarn**

    yarn add distro-info

### usage

**require / import**

    // CommonJS
    const { name } = require('distro-info')
    console.log(name())

    // ES6
    import { name } from 'distro-info'
    console.log(name)

### Available Methods

**name:**

    console.log(name()) //arch

**desktop:**

    console.log(desktop()) //gnome

**version:** (DE version)

    console.log(desktop()) //3.36.0

**theme:**

fonts:

	theme.fonts.font_name = 'Vazir 10'
	console.log(theme.fonts.font_name) // Vazir 10
	
	theme.fonts.document_font = 'ubvazir 11'
	console.log(theme.fonts.document_font) // ubvazir 11
	
	theme.fonts.monospace_font = 'VazirCode 11'
	console.log(theme.fonts.monospace_font) // VazirCode 11
		
	theme.fonts.font = 'Tanha 10'
	console.log(theme.fonts.font) // Tanha 10
	
background:
	
	theme.background = 'file:///home/saleh/background.jpg'
	console.log(theme.background) // 'file:///home/saleh/background.jpg'
		
gtk:
	
	theme.gtk.theme = 'Sierra-dark'
	console.log(theme.gtk.theme) // Sierra-dark

	theme.gtk.colorPalette = 'black:white:gray50,...'
	console.log(theme.gtk.colorPalette) // black:white:gray50,...

icon:
	
	theme.icon = 'McMojave-circle'
	console.log(theme.icon) // 'McMojave-circle'
	
cursor:
	
	theme.cursor = 'deepin'
	console.log(theme.cursor) // 'deepin'
		
shell:
	
	theme.shell = 'Mojave-dark-solid'
	console.log(theme.shell) // 'Mojave-dark-solid'
			
extensions:
	
	console.log(theme.extensions.enabled()) // ['caffeine@patapon.info', 'user-theme', ...]
	theme.extensions.enable('hibernate-status@dromi')
	theme.extensions.disable('hibernate-status@dromi')
	