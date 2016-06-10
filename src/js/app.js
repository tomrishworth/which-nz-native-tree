new Vue({
    el: '#app',

    data: {
        currentQuestionIndex: '1',
        previousIndex: '',
        resultIndex: '',
        breadcrumbs: [],
        questions: {

            // Start
            '1': {
                questionText: 'Start here',
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
                type: 'Tree'
            },
            'Mapou': {
                commonName: 'Mapou',
                type: 'Shrub'
            },
            'Rangiora': {
                commonName: 'Rangiora',
            },
            'Taraire': {
                commonName: 'Taraire',
            },
            'Kapuka': {
                commonName: 'Kapuka',
            },
            'Karaka': {
                commonName: 'Karaka',
            },
            'Pate': {
                commonName: 'Pate',
            },
            'Whauwhaupaku': {
                commonName: 'Whauwhaupaku',
            },
            'Puriri': {
                commonName: 'Puriri',
            },
            'Tanekaha': {
                commonName: 'Tanekaha',
            },
            'Silver Beech': {
                commonName: 'Silver Beech',
            },
            'Putaputaweta': {
                commonName: 'Putaputaweta',
            },
            'Hard Beech': {
                commonName: 'Hard Beech',
            },
            'Red Beech': {
                commonName: 'Red Beech',
            },
            'Kaikomako': {
                commonName: 'Kaikomako',
            },
            'Houhere': {
                commonName: 'Houhere',
            },
            'Hinau': {
                commonName: 'Hinau',
            },
            'Kotukutuku': {
                commonName: 'Kotukutuku'
            },
            'Ngaio': {
                commonName: 'Ngaio',
            },
            'Mahoe': {
                commonName: 'Mahoe',
            },
            'Titoki': {
                commonName: 'Titoki',
            },
            'Horoeka': {
                commonName: 'Horoeka',
            },
            'Rewarewa': {
                commonName: 'Rewarewa',
            },
            'Karo': {
                commonName: 'Karo',
            },
            'Tawa': {
                commonName: 'Tawa',
            },
            'Kauri': {
                commonName: 'Kauri',
            },
            'Akeake': {
                commonName: 'Akeake',
            },
            'Tarata': {
                commonName: 'Tarata',
            },
            'Miro': {
                commonName: 'Miro',
            },
            'Matai': {
                commonName: 'Matai',
            },
            'Kowhai': {
                commonName: 'Kowhai',
            },
            'Mountain Beech': {
                commonName: 'Mountain Beech',
            },
            'Black Beech': {
                commonName: 'Mountain Beech',
            },
            'Manuka': {
                commonName: 'Manuka',
            },
            'Kanuka': {
                commonName: 'Kanuka',
            },
            'Totara': {
                commonName: 'Totara',
            },
            'Kahikatea': {
                commonName: 'Kahikatea',
            },
            'Kamahi': {
                commonName: 'Kamahi',
            },
            'Porokaiwhiri': {
                commonName: 'Porokaiwhiri',
            },
            'Pukatea': {
                commonName: 'Pukatea',
            },
            'Makomako': {
                commonName: 'Makomako',
            },
            'Rata': {
                commonName: 'Rata',
            },
            'Pohutukawa': {
                commonName: 'Pohutukawa',
            },
            'Kawakawa': {
                commonName: 'Kawakawa',
            },
            'Kohekohe': {
                commonName: 'Kohekohe',
            },
            'Nikau': {
                commonName: 'Nikau',
            },
            'Cabbage Tree': {
                commonName: 'Cabbage Tree',
            }

        }
    },



    methods: {
        // stepCounter: function() {
        //     this.step += 1;
        // },

        goTo: function(questionIndex, currentQuestionText) {

            this.currentQuestionIndex = questionIndex;

            this.breadcrumbs.push(currentQuestionText);
        },

        goToResult: function(blah, currentQuestionText){
            this.resultIndex = blah;

            this.breadcrumbs.push(currentQuestionText);
        },

        // goBack: function() {
        //     var previousIndex = this.breadcrumbs.pop();
        //     this.stepNumber = this.breadcrumbs.length;
        //     this.currentQuestionIndex = previousIndex;
        // }


    },


});