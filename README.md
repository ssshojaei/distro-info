## simple package for get distribution information

### install

**with npm**

    npm i distro-info

**with yarn**

    yarn add distro-info

### usage

**require / import**

    // CommonJS
    const distro = require('distro-info')
    console.log(distro.name())

    // ES6
    import { name } from 'distro-info'
    console.log(name)

### Available Methods

**name:**

    console.log(distro.name()) //arch

**desktop:**

    console.log(distro.desktop()) //gnome

**version:** (DE version)

    console.log(distro.desktop()) //3.36.0

**theme:**

    console.log(distro.theme())
    //  {
    //    gtk: 'sierra-dark',
    //    icon: 'mcmojave-circle',
    //    font: 'ubvazir 10',
    //    cursor: 'deepin',
    //    shell: 'mojave-dark-solid'
    //  }

**only one case:**

    console.log(distro.theme().gtk)
