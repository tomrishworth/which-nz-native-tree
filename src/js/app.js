new Vue({
    el: '#app',

    data: {
        currentQuestionIndex: '1',
        previousIndex: [],
        resultIndex: '',
        breadcrumbs: [],
        questions: {

            // Start
            '1': {
                questionText: 'Select Leaf Shape',
                options: ['1', '2', '3', '4', '5', '6', '7']
            },

            //Leaves Broad
            '1-2': {
                questionText: 'Leaf length',
                options: ['11', '12']
            },
            '1-3': {
                questionText: 'Leaf colour',
                options: ['121', '122']
            },

            //Leaves hand-shaped
            '2-2': {
                questionText: 'Leaf shape',
                options: ['21', '22']
            },
            '2-3': {
                questionText: 'Teeth',
                options: ['211', '212']
            },

            //Leaves toothed
            '3-1': {
                questionText: 'Leaf size',
                options: ['31', '32']
            },
            '3-2': {
                questionText: 'Leaf size',
                options: ['311', '312']
            },
            '3-3': {
                questionText: 'Leaf shape',
                options: ['321', '322']
            },
            '3-4': {
                questionText: 'Leaf size',
                options: ['3221', '3222']
            },
            '3-5': {
                questionText: 'Leaf colour',
                options: ['32211', '32212']
            },

            //Leaves narrow
            '4-1': {
                questionText: 'Leaf colour',
                options: ['41','42']
            },
            '4-2': {
                questionText: 'Leaf length',
                options: ['421', '422']
            },
            '4-3': {
                questionText: 'Leaf characteristics',
                options: ['4221', '4222']
            },

            //Leaves very small
            '5-1': {
                questionText: 'Leaf colour',
                options: ['51', '52']
            },
            '5-2': {
                questionText: 'Leaf length',
                options: ['521', '522']
            },
            '5-3': {
                questionText: 'Leaf shape',
                options: ['5211', '5212']
            },
            '5-4': {
                questionText: 'Leaf lenght',
                options: ['52121', '52122']
            },

            //Leaves all pairs
            '6-1': {
                questionText: 'Leaf has teeth?',
                options: ['61', '62']
            },
            '6-2': {
                questionText: 'Leaf size?',
                options: ['621','622']
            }
        },
        options: {
            '1': {
                optionText: 'Leaves Broad',
                nextQuestion: ['1-2']
            },
            '11': {
                optionText: 'Less than 5cm long',
                result: ['1']
            },
            '12': {
                optionText: 'More than 5cm long',
                nextQuestion: ['1-3']
            },
            '121': {
                optionText: 'Whitish Underneath',
                result: ['2']
            },
            '122': {
                optionText: 'Not whitiesh underneath',
                result: ['3']
            },
            '2': {
                optionText: 'Leaves Hand-shaped',
                nextQuestion: ['2-2']
            },
            '21': {
                optionText: 'Teeth along edges',
                nextQuestion: ['2-3']
            },
            '22': {
                optionText: 'No teeth along edges',
                result: ['6']
            },
            '211': {
                optionText: 'Fine teeth',
                result: ['4']
            },
            '212': {
                optionText: 'Coarse teeth',
                result: ['5']
            },
            '3': {
                optionText: 'Leaves toothed',
                nextQuestion: ['3-1']
            },
            '31': {
                optionText: 'Under 5cm',
                nextQuestion: ['3-2']
            },
            '32': {
                optionText: 'Over 5cm',
                nextQuestion: ['3-3']
            },
            '311': {
                optionText: 'Under 2cm',
                result: ['7']
            },
            '312': {
                optionText: 'Over 2cm',
                result: ['8']
            },
            '321': {
                optionText: 'Broad',
                result: ['9']
            },
            '322': {
                optionText: 'Narrow',
                nextQuestion: ['3-4']
            },
            '3221': {
                optionText: 'Under 10cm long',
                nextQuestion: ['3-5']
            },
            '3222': {
                optionText: 'Over 10cm long',
                result: ['12']
            },
            '32211': {
                optionText: 'Whitish underneath',
                result: ['10']
            },
            '32212': {
                optionText: 'Not whitiesh underneath',
                result: ['11']
            },
            '4': {
                optionText: 'Leaves Narrow',
                nextQuestion: ['4-1']
            },
            '41': {
                optionText: 'Whitish underneath',
                result: ['13']
            },
            '42': {
                optionText: 'Not whitiesh underneath',
                nextQuestion: ['4-2']
            },
            '421': {
                optionText: 'Less than 4cm long',
                result: ['14']
            },
            '422': {
                optionText: 'More than 4cm long',
                nextQuestion: ['4-3']
            },
            '4221': {
                optionText: 'New shoots with fine brown hair',
                result: ['15']
            },
            '4222': {
                optionText: 'No brown hair',
                result: ['16']
            },
            '5': {
                optionText: 'Leaves very small',
                nextQuestion: ['5-1']
            },
            '51': {
                optionText: 'Many leaves, arranged flat in two rows',
                result: ['17']
            },
            '52': {
                optionText: 'Leaves not in two rows',
                nextQuestion: ['5-2']
            },
            '521': {
                optionText: 'More than 4cm long',
                nextQuestion: ['5-3']
            },
            '522': {
                optionText: 'Less than 5cm long',
                result: ['21']
            },
            '5211': {
                optionText: 'Broad',
                result: ['18']
            },
            '5212': {
                optionText: 'Not Broad',
                nextQuestion: ['5-4']
            },
            '52121': {
                optionText: 'Less than 15cm',
                result: ['19']
            },
            '52122': {
                optionText: 'More than 15cm',
                result: ['20']
            },
            '6': {
                optionText: 'Leaves all pairs',
                nextQuestion: ['6-1']
            },
            '61': {
                optionText: 'With teeth along edges',
                result: ['22']
            },
            '62': {
                optionText: 'No teeth along edges',
                nextQuestion: ['6-2']
            },
            '621': {
                optionText: 'Under 5cm long',
                result: ['23']
            },
            '622': {
                optionText: 'Over 5cm long',
                result: ['24']
            },
            '7': {
                optionText: 'Leaves very long',
                result: ['25']
            }
        },
        result: {
            '1': {
                options: ['Kohuhu', 'Mapou']
            },
            '2': {
                options: ['Rangiora', 'Taraire']
            },
            '3': {
                options: ['Kapuka', 'Karaka']
            },
            '4': {
                options: ['Pate']
            },
            '5': {
                options: ['Whauwhaupaku']
            },
            '6': {
                options: ['Puriri']
            },
            '7': {
                options: ['Tanekaha', 'Silver Beech']
            },
            '8': {
                options: ['Putaputaweta', 'Hard Beech', 'Red Beech', 'Kaikomako']
            },
            '9': {
                options: ['Kaikomako', 'Houhere']
            },
            '10': {
                options: ['Hinau', 'Kotukutuku']
            },
            '11': {
                options: ['Ngaio', 'Mahoe', 'Titoki']
            },
            '12': {
                options: ['Horoeka', 'Mahoe', 'Rewarewa']
            },
            '13': {
                options: ['Karo', 'Kotukutuku', 'Tawa']
            },
            '14': {
                options: ['Kauri']
            },
            '15': {
                options: ['Titoki', 'Tawa']
            },
            '16': {
                options: ['Akeake', 'Tarata']
            },
            '17': {
                options: ['Miro', 'Matai', 'Kowhai']
            },
            '18': {
                options: ['Mountain Beech', 'Black Beech']
            },
            '19': {
                options: ['Manuka', 'Kanuka']
            },
            '20': {
                options: ['Totara']
            },
            '21': {
                options: ['Kahikatea']
            },
            '22': {
                options: ['Kamahi', 'Porokaiwhiri', 'Pukatea', 'Makomako']
            },
            '23': {
                options: ['Rata', 'Pohutukawa']
            },
            '24': {
                options: ['Tawa', 'Kawakawa', 'Kohekohe']
            },
            '25': {
                options: ['Nikau', 'Cabbage Tree']
            }
        },
        resultOptions: {
            'Kohuhu':  {
                commonName: 'Kohuhu',
                imageUrl: 'http://www.atreeaday.com/atreeaday/Pittosporum_tenuifolium_files/shapeimage_1.png'
            },
            'Mapou': {
                commonName: 'Mapou',
                imageUrl:'http://www.tiritirimatangi.org.nz/images/Plants/Mapou.JPG'
            },
            'Rangiora': {
                commonName: 'Rangiora',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0000/2208/rangiora_leaves.jpg'
            },
            'Taraire': {
                commonName: 'Taraire',
                imageUrl: 'http://bigtree.co.nz/wp-content/uploads/2014/08/BEILSCHMIEDIATARAIRENUM2.jpg'
            },
            'Kapuka': {
                commonName: 'Kapuka',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0001/3689/Griselinia_littoralis__broadleaf_1-10-2016.JPG'
            },
            'Karaka': {
                commonName: 'Karaka',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Corynocarpuslaevigatus012.jpg/250px-Corynocarpuslaevigatus012.jpg'
            },
            'Pate': {
                commonName: 'Pate',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0005/4709/Schefflera_digitatal__Pate__Seven_Finger-003.JPG'
            },
            'Whauwhaupaku': {
                commonName: 'Whauwhaupaku',
                imageUrl: 'http://www.teara.govt.nz/files/large_images/p-13817-enz.jpg'
            },
            'Puriri': {
                commonName: 'Puriri',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/PuririLeaves.jpg/220px-PuririLeaves.jpg'
            },
            'Tanekaha': {
                commonName: 'Tanekaha',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0006/8379/Phyllocladus_trichomanoides__Tanekaha__2_.JPG'
            },
            'Silver Beech': {
                commonName: 'Silver Beech',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LophozoniaMenziesiiFoliage.jpg/220px-LophozoniaMenziesiiFoliage.jpg'
            },
            'Putaputaweta': {
                commonName: 'Putaputaweta',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0001/5574/marble_leaf__Carpodeus_serratus__Putuputuweta-4.JPG'
            },
            'Hard Beech': {
                commonName: 'Hard Beech',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0001/1699/Red_Beech_leaves_Nothofagus_fusca-2.JPG'
            },
            'Red Beech': {
                commonName: 'Red Beech',
                imageUrl: 'https://static.inaturalist.org/photos/1371792/medium.jpg?1444754057'
            },
            'Kaikomako': {
                commonName: 'Kaikomako',
                imageUrl: 'https://www.southernwoods.co.nz/uploads/Shoppingcart/product-606-2.jpg'
            },
            'Houhere': {
                commonName: 'Houhere',
                imageUrl: 'http://www.nzplantpics.com/pics_trees/hoheria_photography/hoheria_glabrata_small_08.jpg'
            },
            'Hinau': {
                commonName: 'Hinau',
                imageUrl: 'https://static.inaturalist.org/photos/1184116/medium.jpg?1444489669'
            },
            'Kotukutuku': {
                commonName: 'Kotukutuku',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fuchsia_excorticata.jpg/240px-Fuchsia_excorticata.jpg'
            },
            'Ngaio': {
                commonName: 'Ngaio',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0007/3564/Myoporum_insulare__Australian_ngaio-002.JPG'
            },
            'Mahoe': {
                commonName: 'Mahoe',
                imageUrl: 'http://www.tiritirimatangi.org.nz/images/Plants/MahoeFruit.jpg'
            },
            'Titoki': {
                commonName: 'Titoki',
                imageUrl: 'http://www.awanursery.co.nz/wp-content/uploads/2013/05/Alectryon-excelsus-grandis-Titoki-June-2013.jpg'
            },
            'Horoeka': {
                commonName: 'Horoeka',
                imageUrl: 'https://cdn.auckland.ac.nz/assets/nzplants/Seed%20Plants%20Flowering/P/Pseudopanax_crassifolius%20Araliaceae/08%20pseudopan_crass_br5(PS).jpg'
            },
            'Rewarewa': {
                commonName: 'Rewarewa',
                imageUrl: 'http://www.bushmansfriend.co.nz/site/images/161320.jpg'
            },
            'Karo': {
                commonName: 'Karo',
                imageUrl: 'http://www.piha.co.nz/wp-content/uploads/2010/11/karo-N-Piha-march-20111.jpg'
            },
            'Tawa': {
                commonName: 'Tawa',
                imageUrl: 'https://www.bimbima.com/wp-content/uploads/old/euphorbia_hirta_1.jpg'
            },
            'Kauri': {
                commonName: 'Kauri',
                imageUrl: 'http://m9.i.pbase.com/g6/96/94696/2/72759509.osZKS9IZ.jpg'
            },
            'Akeake': {
                commonName: 'Akeake',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0001/5494/Akeake__Dodonaea_viscosa-3.JPG'
            },
            'Tarata': {
                commonName: 'Tarata',
                imageUrl: 'http://blog.tepapa.govt.nz/wp-content/uploads/2014/07/Pittosporum_eugenioides_reduced.jpg'
            },
            'Miro': {
                commonName: 'Miro',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/PrumnopitysFerruginea.jpg/266px-PrumnopitysFerruginea.jpg'
            },
            'Matai': {
                commonName: 'Matai',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/MataiLeaves467.jpg/200px-MataiLeaves467.jpg'
            },
            'Kowhai': {
                commonName: 'Kowhai',
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/df/c6/6b/dfc66bfcc746cd549858f6169f77556b.jpg'
            },
            'Mountain Beech': {
                commonName: 'Mountain Beech',
                imageUrl: 'http://www.landcareresearch.co.nz/__data/assets/image/0019/50077/nothofagus.jpg'
            },
            'Black Beech': {
                commonName: 'Mountain Beech',
                imageUrl: 'http://www.backpack-newzealand.com/nz-photos/data/59/medium/IMG_4114.JPG'
            },
            'Manuka': {
                commonName: 'Manuka',
                imageUrl: 'http://www.jjnaturals.co.nz/wp-content/uploads/2013/06/manuka-flowers.jpg'
            },
            'Kanuka': {
                commonName: 'Kanuka',
                imageUrl: 'http://www.thearomary.co.nz/wp-content/uploads/2015/02/Kanuka-foliage.jpg'
            },
            'Totara': {
                commonName: 'Totara',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0002/0129/totara__Podocarpus_totara-7.JPG'
            },
            'Kahikatea': {
                commonName: 'Kahikatea',
                imageUrl: 'http://www.canadaplants.ca/photos/Dacrycarpus-dacrydioides-leaf.jpg'
            },
            'Kamahi': {
                commonName: 'Kamahi',
                imageUrl: 'https://static.inaturalist.org/photos/1698216/medium.JPG?1428383273'
            },
            'Porokaiwhiri': {
                commonName: 'Porokaiwhiri',
                imageUrl: 'http://www.tiritirimatangi.org.nz/images/Plants/PorokaiwhiriLeaf.JPG'
            },
            'Pukatea': {
                commonName: 'Pukatea',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Laurelia_novae-zelandiae_11.JPG/220px-Laurelia_novae-zelandiae_11.JPG'
            },
            'Makomako': {
                commonName: 'Makomako',
                imageUrl: 'http://www.teara.govt.nz/files/p-13802-enz.jpg'
            },
            'Rata': {
                commonName: 'Rata',
                imageUrl: 'http://ketenewplymouth.peoplesnetworknz.info/image_files/0000/0004/7984/Metrosideros_fulgens_Lake_Ianthe.JPG'
            },
            'Pohutukawa': {
                commonName: 'Pohutukawa',
                imageUrl: 'http://www.temarareo.org/Pohutukawa-S6300142C-M.jpg'
            },
            'Kawakawa': {
                commonName: 'Kawakawa',
                imageUrl: 'http://www.temarareo.org/47-Rau_Kawakawa_3280003.jpg'
            },
            'Kohekohe': {
                commonName: 'Kohekohe',
                imageUrl: 'http://www.tiritirimatangi.org.nz/images/Plants/Kohekohe.JPG'
            },
            'Nikau': {
                commonName: 'Nikau',
                imageUrl: 'http://www.virtualoceania.net/newzealand/photos/flora/nikaupalm/nz1022.jpg'
            },
            'Cabbage Tree': {
                commonName: 'Cabbage Tree',
                imageUrl: 'http://www.landcareresearch.co.nz/__data/assets/image/0014/41243/ti_kouka_chewing_damage.jpg'
            }

        }
    },



    methods: {

        goTo: function(questionIndex, currentQuestionText, currentQuestion) {
            this.currentQuestionIndex = questionIndex;
            this.previousIndex.push(currentQuestion);
            // this.breadcrumbs.push(currentQuestionText);
        },

        goToResult: function(optionResult, currentQuestionText, currentQuestion){
            this.resultIndex = optionResult;
            this.previousIndex.push(currentQuestion);
            this.currentQuestionIndex = '';
            // this.breadcrumbs.push(currentQuestionText);
        },

        goBack: function() {
            if(this.resultIndex) {
                this.currentQuestionIndex = this.previousIndex.pop();
                this.resultIndex = '';
            } else {
                this.currentQuestionIndex = this.previousIndex.pop();
            }
        }


    },

    computed: {
        showPrevious: function() {
            if (this.currentQuestionIndex == '1') {
                return false;
            }

            return true;
        },

        showAnswers: function() {
            if (this.resultIndex.length) {
                return true;
            }

            return false;
        }

    }


});