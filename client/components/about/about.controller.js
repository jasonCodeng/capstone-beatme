(function () {
    'use strict';

    angular
        .module('app')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['$sce', 'authentication'];

    function AboutCtrl($sce, authentication) {
        var vm = this;

        vm.isLoggedIn = authentication.isLoggedIn();

        vm.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(src);
        };

        vm.data = {
            team: [{
                name: 'Jason Deng',
                picture: 'vendor/img/profile-pics/jason.jpg',
                github: {
                    href: 'https://github.com/jasonCodeng'
                },
                linkedin: {
                    href: 'https://www.linkedin.com/in/jasondeng94'
                },
                role: 'Frontend Developer',
                column: 'col-md-4',
                description: 'Engaging learner interested in Android and Web development. '
            }, {
                name: 'Itzhak Koren Kloussner ',
                picture: 'vendor/img/profile-pics/itzak2.jpg',
                github: {
                    href: 'https://github.com/zackoren'
                },
                linkedin: {
                    href: 'https://www.linkedin.com/in/isaac-koren-5101b9118'
                },
                role: 'iOS Developer',
                column: 'col-md-4',
                description: 'Motivated B.A Computer Science Undergraduate looking for a challenging software engineering role'

            }, {
                name: 'Satbir Tanda',
                picture: "vendor/img/profile-pics/satbir.png",
                github: {
                    href: 'https://github.com/sst-1'
                },
                linkedin: {
                    href: 'https://www.linkedin.com/in/satbir-singh-tanda-92751b116'
                },
                role: 'iOS Developer',
                column: 'col-md-4',
                description: 'Im a student at hunter and I like math'

            }, {
                name: 'Cheng Pan',
                picture: "vendor/img/profile-pics/cheng.jpg",
                github: {
                    href: 'https://github.com/cpanz'
                },
                linkedin: {
                    href: 'https://www.linkedin.com/in/cheng-pan-435047b8'
                },
                role: 'Backend Developer',
                column: 'col-md-4 col-sm-offset-2',
                description: 'Aspiring full-stack developer with experience working with the MEAN stack'

            }, {
                name: 'Lizhou Cao',
                picture: "vendor/img/profile-pics/alan3.png",
                github: {
                    href: 'https://github.com/newtext'
                },
                linkedin: {
                    href: 'https://www.linkedin.com/in/lizhou-cao-a69aabb6'
                },
                role: 'Data Visualization',
                column: 'col-md-4',
                description: 'I am a Computer Science student at Hunter College.'

            }]
        };
    }
})();
