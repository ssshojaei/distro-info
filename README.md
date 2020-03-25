
# Distro Information in JS
Getting some informations of your Gnu/Linux Distro

## Installing

**with npm**

    npm i distro-info

**with yarn**

    yarn add distro-info

## usage

**require / import**

    // CommonJS
    const distro = require('distro-info')
    console.log(distro.name())

    // ES6
    import { name } from 'distro-info'
    console.log(name)

## Available Methods

**name:**

    console.log(distro.name()) //arch

**desktop:**

    console.log(distro.desktop()) //gnome

**version:** (DE version)

    console.log(distro.desktop()) //3.36.0

**theme:**

    console.log(distro.theme.background.currentBackground())    
	//	'file://......'
	console.log(distro.theme.fonts.docFont())    
	//	'ubuntu mono 11'
**Cpu information:**

    console.log(distro.cpu())
    // {Architecture: 'x86_64' , ...}
    
    
**only one case:**

    console.log(distro.theme().gtk)
# Contributors
Thanks for contributing.
<a href='github.com/ssshojaei'>Ordinary Saleh</a> Creator
<a href='github.com/Aslemammad'>AsleMammad</a>