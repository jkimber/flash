import { FlashType } from './constants';

export const getData = (flashType: FlashType) => {
    switch (flashType) {
        case 'Binomial':
            return BinomialData.map(d => [d[0], d[1].split(','), d[2]]);
        case 'Nutrient':
            return NutrientData;
        default:
            return GlossaryData;
    }
};

const NutrientData = [
    [
        'Nitrogen',
        'Mobile',
        'Chlorophyll, protein synthesis, amino acids, healthy growth of stems and leaves',
        'poor new growth, leaf yellowing from middle outwards, fewer and smaller fruit, stunted growth',
    ],
    [
        'Phosphorous',
        'Partially mobile',
        'protein synthesis, ATP, cell membrane, root growth, cell division, meristem tissues, protein formation, respiration',
        'purple or reddish leaf discoloration, poor growth, poor roots, early fruit drop',
    ],
    [
        'Potassium',
        'Mobile',
        'Regulates water loss, flower growth, fruit and seed development, respiration and transpiration, accumulates in vacuole, thickens cell walls',
        'Yellow leaf margins and veins, leaf roll and crinkle, lowered hardiness',
    ],
    [
        'Calcium',
        'Immobile',
        'Cell wall formation',
        'Yellow new growth, tissue death',
    ],
    [
        'Magnesium',
        'Mobile',
        'Key component of chlorophyll, mobility of phosphorous, abundant in clay, inhibited b high potassium or calcium',
        'Interveinal chlorosis',
    ],
    [
        'Sulphur',
        'Mobile',
        'proteins, enzymes, vitamins, chlorophyll',
        'overall yellowing, dying tips, narrow leaves, stunted growth',
    ],
    [
        'Boron',
        'Immobile',
        'Seed and fruit formation, sugar transport',
        'stunted tips, organ deformity',
    ],
    [
        'Iron',
        'Immobile',
        'Chlorophll and enzyme production',
        'yellow new growth, ivory coloured leaves in severe cases',
    ],
    ['Copper', 'Immobile', 'metbolism', 'pale green new growth'],
    [
        'Manganese',
        'Immobile',
        'photosynthesis and respiration',
        'interveinal chlorosis on new growth',
    ],
    [
        'Zinc',
        'Immobile',
        'enzyme production',
        'interveinal chlorosis on new growth',
    ],
    [
        'Molybdenum',
        'Immobile',
        'Nitrogen cycle',
        'yellow leaf margins on new growth',
    ],
];

const GlossaryData = [
    [
        'petiole',
        'Where it is present in a plant, it attaches the leaf blade (lamina) of some plants to a stem',
    ],
    [
        'axillary bud',
        'Forming in the axil join between leaf and stem, a form of lateral bud and can develop into stem and flower shoots',
    ],
    [
        'perrenation',
        'The storage of food within a plant structure (eg tuber, corm, rhizome) to allow the plant to survive from one season to another (eg overwintering)',
    ],
    [
        'respiration',
        'Process that utilises complex carbohydrates, most commonly in the presence of oxygen, to release energy (ATP) with water vapour and carbon dioxide as waste products (and ethanol if anaerobic)',
    ],
    ['biotic impact', 'pest and disease disorders'],
    ['abiotic impact', 'non-living disorders. eg environment, nutrition'],
    ['rose balling', 'wet flowers failing to open'],
    [
        'frost damage',
        'distortion or blackening of flowers, buds, shoots, leaves.  cracked cambium',
    ],
    ['frost lift (heave)', 'root lift due to frost-thaw cycles'],
    [
        'advection',
        'the transference of heat energy in a horizontal stream of gas, esp of air',
    ],
    [
        'blossom end rot',
        'lack of calcium uptake due to inconsistent water supply (tomatoes)',
    ],
    [
        'bitter pit',
        'lack of calcium uptake due to inconsistent water supply (apples)',
    ],
    ['etiolated', 'grown in absence of light.  lacking chlorophyll'],
    ['pneumatophores', 'snorkel roots to enable air (oxygen) intake'],
    [
        'fasciation',
        'seemingly random mutations resulting in bands, bundles, flattening, fusing',
    ],
    ['tetraploid', '4 sets of chromosomes instead of usual 2'],
];

const BinomialData = [
    ['Vinca minor', 'lesser periwinkle,dwarf periwinkle'],
    [
        'Vinca major',
        'bigleaf periwinkle,large periwinkle,greater periwinkle,blue periwinkle',
    ],
    ['Digitalis purpurea', 'common foxglove'],
    ['Lamium orvala', 'balm-leaved red deadnettle'],
    ['Tagetes patula', 'french marigold'],
    ['Ginkgo biloba', 'maidenhair tree'],
    ['Quercus robur', 'common oak'],
    ['Rudbeckia hirta', 'black-eyed susan'],
    ['Cirsium arvense', 'creeping thistle,spear thistle'],
    ['Fallopia japonica', 'japanese knotweed'],
    ['Equisetum arvense', 'common horsetail'],
    ['Fagus sylvatica', 'common beech'],
    ['Euphorbia helioscopa', "sun spurge,cat's milk"],
    ['Alcea rosea', 'hollyhock'],
    ['Dianthus barbatus', 'sweet william'],
    ['Dipsacus fullonum', "common teasel,barber's brushes"],
    ['Erysimum cheiri', 'common wallflower,bleeding heart'],
    [
        'Senecio jacobaea',
        "common ragwort,ragweed,stinking willy,st james's wort",
    ],
    ['Cirsium vulgare', 'spear thistle'],
    ['Arctium minus', 'lesser burdock'],
    ['Lathyrus odoratus', 'sweet pea'],
    ['Berberis thunbergii', 'japanese barberry'],
    ['Euonymus japonicus', 'evergreen spindle'],
    ['Pinus sylvestris', 'scots pine'],
    ['Cotoneaster bullatus', 'hollyberry cotoneaster'],
    ['Allium giganteum', 'giant onion'],
    ['Coriandrum sativum', 'coriander,chinese parsley,cilantro'],
    ['Sambucus nigra', 'common elder'],
    ['Myosotis sylvatica', 'garden forget-me-not'],
    ['Syringa vulgaris', 'common lilac'],
    ['Phlomis fruticosa', 'jerusalem sage'],
    ['Pisum sativum', 'garden pea'],
    ['Papaver somniferum', 'opium poppy'],
    ['Aquilegia vulgaris', "common columbine,granny's bonnets"],
    ['Acer campestre', 'field maple'],
    ['Juglans regia', 'common walnut'],
    ['Sorbus acuparia', 'rowan,mountain ash'],
    ['Aesculus hippocastanum', 'horse chestnut'],
    ['Enkianthus campanulatus', 'redvein enkianthus'],
    ['Solanum tuberosum', 'potato'],
    ['Solanum lycopersicum', 'tomato'],
    ['Lavandula augustifolia', 'english lavender,common lavender'],
    ['Sequoia sempervirens', 'coastal redwood'],
    ['Euphorbia lathyris', 'caper spurge,mole plant'],
    ['Coleus caninus', 'scat,scaredy cat'],
    ['Sedum rosea', 'dark purple stonecrop,roseroot'],
    ['Betula nigra', 'black birch'],
];