
# Distro Information in JS
Getting some informations of your Gnu/Linux Distro. You can import the index.js file in your project:).

## Installing

**with npm**

    npm i distro-info //old version

**with yarn**

    yarn add distro-info // old version

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

    console.log(distro.theme())
    //  {
    //    background : {    
	//		currentBackground : 'file://......'
	//	},
    //    gtk: {...},
    //    icon: 'mcmojave-circle',
    //    font: {...},
    //    cursor: 'deepin',
    //    shell: {...}
    //  }
**Cpu information:**

    console.log(distro.cpu())
    // {Architecture: 'x86_64' , ...}
    
    
**only one case:**

    console.log(distro.theme().gtk)
