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

    console.log(distro.theme())
    {
        background: {
            currentBackground:  'file:///home/saleh/bg.jpg'
        },
        gtk: {
            theme:  'sierra-dark',
            colorPalette: [
                'black:white:gray50:red:purple:blue:light',
                ...
            ]
        },
        icon:  'mcmojave-circle',
        fonts: {
            font:  'ubvazir 10',
            monospaceFont:  'vazir code fd 10',
            docFont:  'ubvazir 11'
        },
        cursor:  'deepin',
        shell: {
            name:  'mojave-dark-solid',
            enabledExtensions:  '[gtile@vibou, ...]'
        }
    }

**only one case:**

    console.log(distro.theme().gtk.theme) //sierra-dark
