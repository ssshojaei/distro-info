# Distro-Info

Simple package for getting some information about distro and desktop environment

## Installing

**with npm**

    npm i distro-info

**with yarn**

    yarn add distro-info

## usage

**require / import**

CommonJS

    const distro = require('distro-info')
    // const { name, desktop } = require('distro-info')

    console.log(distro.name())
    // console.log(name());

ES6

    import { name } from 'distro-info'
    // import distro from 'distro-info'

    console.log(name())
    // console.log(distro.name())

## Available Methods

**name:**

    console.log(distro.name()) //arch

**desktop:**

    console.log(distro.desktop()) //gnome

**version:** (DE version)

    console.log(distro.version()) //3.36.0

**theme:**

    console.log(distro.theme.background.currentBackground())    
	//	'file://......'
	console.log(distro.theme.fonts.docFont())    
	//	'ubuntu mono 11'
**Cpu information:**

    console.log(distro.cpu())
    // {Architecture: 'x86_64' , ...}
    

# Contributors
Thanks for contributing.
<a href='github.com/ssshojaei'>Ordinary Saleh</a> Creator
<a href='github.com/Aslemammad'>AsleMammad</a>
