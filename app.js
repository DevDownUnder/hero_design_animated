window.
    onload
    = function () {
        Particles.
            init
            ({
                selector:
                    '.background',
                maxParticles:
                    250
                ,
                color:
                    '#ffffff'
                ,
                /* optional multi colors
                color: ['#DA0463', '#404B69', '#DBEDF3'],
                */
                connectParticles:
                    true,

            });
    };



//RESPONSIVE DESIGN
Particles.
    init
    ({

        // normal options
        selector:
            '.background'
        ,
        maxParticles:
            200
        ,

        // options for breakpoints
        responsive: [
            {
                breakpoint:
                    768
                ,
                options: {
                    maxParticles:
                        150
                    ,
                    color:
                    '#ffffff'
                    ,
                    connectParticles:
                        true
                }
            }, {
                breakpoint:
                    425
                ,
                options: {
                    maxParticles:
                        60
                    ,
                    connectParticles:
                        true
                }
            }, {
                breakpoint:
                    320
                ,
                options: {
                    maxParticles:
                        0

                    // disables particles.js
                }
            }
        ]
    });