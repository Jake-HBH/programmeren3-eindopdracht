<?php
/**
 * @return array
 */
function getSkateboards()
{
    return [
        [
            "id" => 1,
            "name" => "Santa Cruz",
            "detailedName" => "Screaming Hand 8.0\" Complete",
            "image" => "images/santacruz.jpg",
        ],
        [
            "id" => 2,
            "name" => "Enjoi",
            "detailedName" => "Whitey Panda FP 7.75\" Complete",
            "image" => "images/enjoi.jpg",
        ],
        [
            "id" => 3,
            "name" => "Toy Machine",
            "detailedName" => "Vice Monster 7.75\" Complete",
            "image" => "images/toymachine.jpg",
        ],
        [
            "id" => 4,
            "name" => "Plan B",
            "detailedName" => "Bumble Black 7.75\" Complete",
            "image" => "images/planb.jpg",
        ],
        [
            "id" => 5,
            "name" => "Globe",
            "detailedName" => "G1 Digital 8.0\" Complete",
            "image" => "images/globe.jpg",
        ],
        [
            "id" => 6,
            "name" => "Girl",
            "detailedName" => "Bannerot Yin Yang 8\" Complete",
            "image" => "images/girl.jpg",
        ],
        [
            "id" => 7,
            "name" => "Blueprint",
            "detailedName" => "Home Heart 8.125\" Complete",
            "image" => "images/blueprint.jpg",
        ],
        [
            "id" => 8,
            "name" => "Zero",
            "detailedName" => "Bold 7.75\" Medium Complete",
            "image" => "images/zero.jpg",
        ],
        [
            "id" => 9,
            "name" => "Creature",
            "detailedName" => "The Thing Micro 7.5\" Complete",
            "image" => "images/creature.jpg",
        ],
        [
            "id" => 10,
            "name" => "Element",
            "detailedName" => "Out There 7.75\" Complete",
            "image" => "images/element.jpg",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getSkateboardDetails($id)
{
    $tags = [
        1 => [
            "details" => "De Screaming Hand Full Complete Skateboard van Santa Cruz is compleet voorgemonteerd, dus alles wat je hoeft te doen is uitpakken, de schroeven aandraaien en rollen.
Het dek is gemaakt van 100% Amerikaans esdoorn en overtuigt met veel pop.",
            "price" => "€ 134,95"
        ],
        2 => [
            "details" => "Met het Enjoi Whitey Panda 7.75\" compleet deck is waarschijnlijk oud maar een bewezen in de skateboard scene. Zoals altijd dient de schattige panda alleen maar om de ware kracht van dit deck af te leiden. Zeven lagen esdoornhout met epoxyhars zorgen voor een langdurige pop. Daarnaast werd alleen de hoogste skateboardhardware gebruikt.",
            "price" => "€ 129,95"
        ],
        3 => [
            "details" => "Toy Machine staat bekend om gekke ontwerpen en expressieve afbeeldingen op hun skateboards. Opgericht door Ed Templeton in 1993, is het bedrijf nog steeds één van de meest invloedrijke en succesvolle in de scène.",
            "price" => "€ 124,95"
        ],
        4 => [
            "details" => "De Plan B Bumble Black 7.75\" Complete is een duurzaam skateboard met een opvallend zwart design, ideaal voor technische tricks en stijlvol cruisen, compleet met hoogwaardige trucks, wielen en lagers voor een responsieve en soepele rit.",
            "price" => "€ 114,95"
        ],
        5 => [
            "details" => "De Globe G1 Digital Nurture 8.0\" Complete is een skateboard met een innovatief digitaal ontwerp, ideaal voor veelzijdig gebruik op straten en skateparken, en wordt geleverd met hoogwaardige trucks, wielen en lagers voor een betrouwbare en responsieve rijervaring.",
            "price" => "€ 114,95"
        ],
        6 => [
            "details" => "Girl Skateboards Yin-Yang met klassieke Girl OG logo, Simon Bannerot pro model.",
            "price" => "€ 89,95"
        ],
        7 => [
            "details" => "De Blueprint Home Heart 8.125\" Complete is een veelzijdig skateboard met een hartverwarmend design, perfect voor zowel tricks als ontspannen rijden, en wordt geleverd met hoogwaardige trucks, wielen en lagers voor een soepele en betrouwbare rit.",
            "price" => "€ 74,95"
        ],
        8 => [
            "details" => "De Zero Bold 7.75\" Complete is een robuust skateboard met een gedurfd design, geschikt voor technische manoeuvres en vlotte cruisen, en komt met hoogwaardige trucks, wielen en lagers voor optimale prestaties en rijcomfort.",
            "price" => "€ 109,95"
        ],
        9 => [
            "details" => "Ontdek de opwinding van skateboarden met het Creature The Thing Micro 7.5” Complete Skateboard Dit skateboard is speciaal ontworpen voor jongere skaters of beginners. ",
            "price" => "€ 134,95"
        ],
        10 => [
            "details" => "Het maakt niet uit of je een beginner of een gevorderde skater bent, dit Element deck past bij elke skatestijl. De beste materialen en solide afwerking zorgen voor onbeperkt skateplezier op elk terrein. ",
            "price" => "€ 109,95"
        ],
    ];

    return $tags[$id];
}