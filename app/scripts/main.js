'use strict'

var app = angular.module('myApp', ['ngRoute']);

app.directive('letFooter', function() {
    return {
        restrict: 'E',
        templateUrl: '../views/fixed/footer.html'
    };
});

app.directive('letHeader', function() {
    return {
        restrict: 'E',
        templateUrl: '../views/fixed/header.html'
    };
});

app.controller('subCtrl', ['$scope', function($scope) {
    $scope.boardMembers = [
        {
            'name' : 'Amaury Libaud',
            'description' : 'Diplômé de l\'Université Paris II Panthéon Assas en droit social, président d\'une startup dans le conseil en RH, co-fondateur et président de Quid Juris pour améliorer l\'accès au droit.',
            'linkedin' : 'https://www.linkedin.com/in/amaury-libaud-460a7a38?trk=nav_responsive_tab_profile_pic',
            'profileImage' : '../images/profiles/armaury_libaud.png'
        },{
            'name' : 'Maya Benkhdim',
            'description' : 'Diplômée d\'une Maîtrise en droit des affaires et fiscalité de l\'Université Paris II Panthéon Assas, en parcours Stratégie du programme Grande Ecole de emlyon business school et co-fondatrice et vice présidente de Quid Juris.',
            'linkedin' : 'https://www.linkedin.com/in/maya-benkhdim-103272ab',
            'profileImage' : '../images/profiles/maya_benkhdim.png'
        },{
            'name' : 'Alice Malaisé',
            'description' : 'Elève avocate, en parcours Grande Ecole de emlyon business school, co fondatrice et secrétaire générale de Quid Juris.',
            'linkedin' : 'https://www.linkedin.com/in/alice-malais%C3%A9-501095103/',
            'profileImage' : '../images/profiles/alice_malaise.png'
        },{
            'name' : 'Morgan Marquis',
            'description' : 'Élève d\'emlyon business school actuellement en parcours Banque d\'Affaires du Programme Grande École, diplômé d\'une Maîtrise de Conseil et d\'une Licence de mathématiques appliquées et sciences sociales de l\'Université Paris Diderot. Co-fondateur et Trésorier de Quid Juris, aussi passionné de nouvelles technologies.',
            'linkedin' : 'https://fr.linkedin.com/in/morganmarquis',
            'profileImage' : '../images/profiles/morgan_marquis.png'
        }
    ];
    $scope.members = [
        {
            'name' : 'Eléonore Carrel',
            'description' : 'Licenciée de droit de la faculté Paris Descartes, je suis passionnée par la matière et en particulier par le droit social. Très heureuse de faire partie de l\'aventure Quid Juris !',
            'linkedin' : 'https://www.linkedin.com/in/el%C3%A9onore-carrel-billiard-6bb73b83/'
        },{
            'name' : 'Ileana Santos',
            'description' : 'Licenciée de droit privé de la faculté de Poitiers, je suis globetrotteuse et citoyenne engagée. Faire partie de Quid Juris, c\'est partager une vision, la déployer au sein de notre école et sur le territoire Lyonnais, mais surtout donner l\'envie aux membres de s\'engager.',
            'linkedin' : 'https://www.linkedin.com/in/ileana-santos-243b31108/'
        },{
            'name' : 'Colin Maillebuau',
            'description' : 'Etudiant en double diplôme Droit privé/Management à emlyon business school. A travers Quid Juris, je m\'investis dans des missions qui me préparent à mon avenir professionnel.',
            'linkedin' : 'https://www.linkedin.com/in/colin-maillebuau-41099963/'
        },{
            'name' : 'Hugo Belin',
            'description' : 'Depuis ma licence, je m\'intéresse aux rapports entre le droit et l\'économie. Juriste et entrepreneur, j\'agis pour le développement externe de Quid Juris.',
            'linkedin' : 'https://www.linkedin.com/in/hugo-belin-88570490/'
        },{
            'name' : 'Vanille Courbit',
            'description' : 'Passionnée de littérature française et de phénoménologie, j\'ai obtenu ma licence de philosophie à l\'Institut Catholique de Paris. Je m\'investis dans Quid Juris en tant que community manager au sein du pôle communication.',
            'linkedin' : 'http://linkedin.com/in/vanille-courbit-153bb7104'
        },{
            'name' : 'Capucine Roque',
            'description' : 'Diplômée du Master 2 Droit de la propriété intellectuelle appliquée de l\'Université Paris Est, j\'ai intégré le Programme Grande Ecole de emlyon business school pour compléter ma formation. Chez Quid Juris, je fais partie du pôle événements.',
            'linkedin' : 'https://www.linkedin.com/in/capucine-roque-876884109/'
        },{
            'name' : 'Andréa Quesney',
            'description' : 'Etudiante en double-diplôme droit des affaires / MSc in Management à emlyon, je suis ravie de découvrir la matière et je compte appliquer mes connaissance au sein du pôle mission de Quid Juris.',
            'linkedin' : 'https://fr.linkedin.com/in/andréa-quesney-601b69b2'
        },{
            'name' : 'Eric Vong',
            'description' : 'Titulaire d\'un Master 1 en Droit des affaires à l\'Université Panthéon-Assas et entrepreneur, je suis responsable du Pôle Démarchage de Quid Juris, composé d\'une équipe motivée, pour trouver des partenaires.',
            'linkedin' : 'https://www.linkedin.com/in/eric-vong-9724b7107'
        },{
            'name' : 'Arthur Rebuffie',
            'description' : 'Licencié en droit de l\'Université Panthéon-Assas, juriste amateur, installé en Chine, membre du pôle mission.',
            'linkedin' : 'https://www.linkedin.com/in/arthur-rebuffie-35365784'
        },{
            'name' : 'Hugo Casteran',
            'description' : 'Bien qu\'ayant suivi un parcours en classe préparatoire économique, je n\'ai pas laissé de côté ma passion pour le droit que je compte explorer via le parcours droit de emlyon business school. Membre du pôle démarchage.',
            'linkedin' : 'https://fr.linkedin.com/in/morganmarquis'
        },{
            'name' : 'Apolline Vanrenterghem',
            'description' : 'Etudiante en double diplôme droit des affaires / Msc in Management à emlyon business school. A travers Quid Juris je développe mon intérêt pour la matière.',
            'linkedin' : 'http://wwww.linkedin.com/in/apollinevanrenterghem'
        },{
            'name' : 'Rebeka Roharova',
            'description' : 'Etudiante en MS Juriste Manager International et titulaire d\'un Master en droit des affaires, je suis membre du pôle évènements. A travers Quid Juris, je vis aujourd\'hui une belle aventure humaine !',
            'linkedin' : 'https://www.linkedin.com/in/rebeka-roharova-926080ba'
        },{
            'name' : 'Aindiche Azadharf',
            'description' : 'Après une Bi-licence de Droit Franco - Allemand et deux ans d\'expérience en tant que commercial, je souhaite m\'investir au développement de QUID JURIS à travers son pôle développement commercial dont le but est d\'apporter notre aide à ceux pour qui le droit reste méconnu.',
            'linkedin' : 'https://fr.linkedin.com/in/aindiché-azadharf-a95491111'
        },{
            'name' : 'Alice Clot',
            'description' : 'Titulaire d\'un Master 1 de droit des affaires de l\'Université Paris-Nanterre, j\'ai plaisir à faire partie du pôle communication de Quid Juris depuis sa création.',
            'linkedin' : 'https://www.linkedin.com/in/alice-clot-66010b77'
        },{
            'name' : 'Florian Zinck',
            'description' : 'Diplômé d\'un Master 1 en Droit des affaires de l\'Université de Strasbourg et actuellement étudiant au sein du Programme Grande Ecole d\'emlyon business school, Quid Juris me permet de continuer à développer cette double compétence.',
            'linkedin' : 'https://www.linkedin.com/in/florian-zinck-332575103'
        },{
            'name' : 'Selim Mikou',
            'description' : 'Etudiant du programme grande école et menant parallèlement une licence en droit à Paris I. Membre du pôle démarchage de Quid Juris où je développe ma passion où le droit.',
            'linkedin' : 'https://www.linkedin.com/in/selim-mikou-8b7a34122/'
        },{
            'name' : 'Thomas Ferrandis',
            'description' : 'Diplômé d\'une Maîtrise en Droit International privé à l\'Université Jean Moulin Lyon 3 et actuellement étudiant au sein du programme grande école de l\'emlyon Business School. Je suis soucieux d\'utiliser et de faire progresser l\'ensemble de mes compétences. Quid Juris représente pour moi la parfaite alliance entre la pratique entrepreneuriale et la pratique juridique. Je suis membre du pôle communication.',
            'linkedin' : ' http://linkedin.com/in/thomas-ferrandis-43a327107'
        },{
            'name' : 'Clotilde Bouvat-Martin',
            'description' : 'Titulaire d\'un Master 2 en Droit des affaires de l\'Université Panthéon-Assas Paris 2, je tiens à faire découvrir et partager le monde du droit, autour d\'évènements regroupant étudiants et professionnels du droit.',
            'linkedin' : 'https://fr.linkedin.com/in/clotilde-bouvatmartin'
        }
    ];
    $scope.poles =[
        {
            title: 'Pôle mission',
            function: 'Pôle central de l\'association, les membres chargés des missions sont tous des juristes ou des élèves avocats, et ont pour ambition de remplir au mieux les attentes de ses clients : une recherche juridique précise, exhaustive et à jour, pour permettre à chacun, quel que soit son projet, d\'avoir un accès compréhensible au droit applicable.'
        }, {
            title: 'Pôle développement externe',
            function: 'A l\'affût de nouvelles opportunités, le pôle promeut l\'action de Quid Juris auprès d\'acteurs extérieurs. A travers le pôle, Quid Juris veut tisser des liens forts avec ses partenaires.'
        }, {
            title: 'Pôle démarchage',
            function: 'Ce pôle a pour but de trouver des partenaires afin de soutenir, de manière financière ou en nature, le développement de Quid Juris et ses événements tout au long de l\'année. Soutenir Quid Juris permet aux partenaires d\'être en contact direct avec les étudiants de l\'école et de l\'aider à concrétiser ses projets.'
        }, {
            title: 'Pôle évènements',
            function: 'Nous avons à coeur d\'organiser des événements qui nous ressemblent. Nos motivations au pôle event sont d\'innover, de fédérer et de rassembler autour de nos actions.\nInnover par le format de nos événements : conférence interactive, House coffee.\nFédérer par notre volonté de réunir autour de Quid Juris, associations de juristes de Lyon, des professionnels du droit et des profils écoles de commerce.'
        }, {
            title: 'Pôle communication',
            function: 'Faire la promotion du droit dans une école de commerce ? Rendre ce vaste sujet intéressant ? Le pôle communication use (mais jamais n\'abuse) de toutes les innovations actuelles pour permettre à tous de nous connaître, et de pouvoir nous contacter avec rapidité et efficacité. '
        }, {
            title: 'Pôle qualité',
            function: 'Quid Juris est une association certes étudiante, mais animée avec professionnalisme et rigueur. Le pôle qualité en est la garantie finale. '
        }
    ];
}]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/poles', {
        templateUrl : 'views/poles.html',
        controller : 'subCtrl'
    })
    .when('/fondateurs', {
        templateUrl : 'views/fondateurs.html',
        controller : 'subCtrl'
    })
    .when('/mandat', {
        templateUrl : 'views/mandat.html',
        controller : 'subCtrl'
    })
    .when('/partenaires', {
        templateUrl : 'views/partenaires.html',
        controller : 'subCtrl'
    })
    .when('/contacts', {
        templateUrl : 'views/contacts.html',
        controller : 'subCtrl'
    })
    .otherwise({templateUrl : 'views/home.html'});
}).run(['$rootScope', '$location', function($rootScope, $location){
    var path = function() { return $location.path();};
    $rootScope.$watch(path, function(newVal, oldVal){
        $rootScope.activetab = newVal;
    });
}]);
