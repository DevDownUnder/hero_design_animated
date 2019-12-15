window.
    onload
    = function () {
        Particles.
            init
            ({
                selector:
                    '.background',
                maxParticles:
                    300
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
            400
        ,

        // options for breakpoints
        responsive: [
            {
                breakpoint:
                    768
                ,
                options: {
                    maxParticles:
                        200
                    ,
                    color:
                    '#ffffff'
                    ,
                    connectParticles:
                        false
                }
            }, {
                breakpoint:
                    425
                ,
                options: {
                    maxParticles:
                        100
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