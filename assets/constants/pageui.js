import { alphabetaudios, familyaudios, numberaudios } from "./audios"
import { backgroundColor, textColor } from "./colors"
import { capital_images, en_word_images, family_images, home_abc, home_abc_small, home_family, home_number_0100, home_number_09, home_numbers, home_puzzle, home_shapes, home_word, numberimages, shape_example_images, shape_images, small_images } from "./images"

const homedata = [
    {
        id: 1,
        title: 'Letters',
        subTitle: 'Capital and Small',
        image: home_abc,
        backgroundColor: '#dcfce7',
        textColor: '#16a34a',
        path : '/letters'
    },
    {
        id: 2,
        title: 'Numbers',
        subTitle: 'Numeric Numbers',
        image: home_numbers,
        backgroundColor: '#fee2e2',
        textColor: '#dc2626',
        path : '/numbers'
    },
    {
        id: 3,
        title: 'Shapes',
        subTitle: 'Geometric shapes',
        image: home_shapes,
        backgroundColor: '#fef9c3',
        textColor: '#ca8a04',
        path : '/shapes'
    },
    {
        id: 4,
        title: 'Family Tree',
        subTitle: 'Family member introduction',
        image: home_family,
        backgroundColor: '#ecfccb',
        textColor: '#65a30d',
        path : '/family'
    },
    {
        id: 5,
        title: 'Games',
        subTitle: 'Practice Learning',
        image: home_puzzle,
        backgroundColor: '#e0e7ff',
        textColor: '#4f46e5',
        path : '/games'
    },
]

const selection = {
    Letters: [
        {
            id: 1,
            title: 'Capital Letter',
            image: home_abc,
            backgroundColor: '#dcfce7',
            textColor: '#16a34a',
            path: '/alphabet?q=capital'
        },
        {
            id: 2,
            title: 'Small Letter',
            image: home_abc_small,
            backgroundColor: '#fee2e2',
            textColor: '#dc2626',
            path: '/alphabet?q=small'
        },
        {
            id: 3,
            title: 'Alphabet Word',
            image: home_word,
            backgroundColor: '#fef9c3',
            textColor: '#ca8a04',
            path: '/alphabet/word'
        }
    ],
    Numbers: [
        {
            id: 1,
            title: '(0-9) Learn',
            image: home_number_09,
            backgroundColor: '#dcfce7',
            textColor: '#16a34a',
            path: '/numbers?q=0_9'
        },
        {
            id: 2,
            title: '(1-100) Learn',
            image: home_number_0100,
            backgroundColor: '#fee2e2',
            textColor: '#dc2626',
            path: '/numbers?q=1_100'
        }
    ]
}

const numberdata = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
].map((title, index) => ({
    id: index + 1,
    title: title,
    image: numberimages[index],
    audio: numberaudios[index]
}))

const number_0_to_100 = [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",
    "Twenty-One", "Twenty-Two", "Twenty-Three", "Twenty-Four", "Twenty-Five", "Twenty-Six", "Twenty-Seven", "Twenty-Eight", "Twenty-Nine", "Thirty",
    "Thirty-One", "Thirty-Two", "Thirty-Three", "Thirty-Four", "Thirty-Five", "Thirty-Six", "Thirty-Seven", "Thirty-Eight", "Thirty-Nine", "Forty",
    "Forty-One", "Forty-Two", "Forty-Three", "Forty-Four", "Forty-Five", "Forty-Six", "Forty-Seven", "Forty-Eight", "Forty-Nine", "Fifty",
    "Fifty-One", "Fifty-Two", "Fifty-Three", "Fifty-Four", "Fifty-Five", "Fifty-Six", "Fifty-Seven", "Fifty-Eight", "Fifty-Nine", "Sixty",
    "Sixty-One", "Sixty-Two", "Sixty-Three", "Sixty-Four", "Sixty-Five", "Sixty-Six", "Sixty-Seven", "Sixty-Eight", "Sixty-Nine", "Seventy",
    "Seventy-One", "Seventy-Two", "Seventy-Three", "Seventy-Four", "Seventy-Five", "Seventy-Six", "Seventy-Seven", "Seventy-Eight", "Seventy-Nine", "Eighty",
    "Eighty-One", "Eighty-Two", "Eighty-Three", "Eighty-Four", "Eighty-Five", "Eighty-Six", "Eighty-Seven", "Eighty-Eight", "Eighty-Nine", "Ninety",
    "Ninety-One", "Ninety-Two", "Ninety-Three", "Ninety-Four", "Ninety-Five", "Ninety-Six", "Ninety-Seven", "Ninety-Eight", "Ninety-Nine", "One Hundred"
].map((title, index) => ({
    id: index + 1,
    number: index,
    title: title,
    audio: numberaudios[index],
    backgroundColor : backgroundColor[index],
    textColor : textColor[index]
}))

const familyTree = [
    {
        name: {
            title: 'Grandfather',
            image: family_images.grandfather,
            audio : familyaudios[0]
        },
        spouse: {
            title: 'Grandmother',
            image: family_images.grandmother,
            audio : familyaudios[1]
        },
        children: [
            {
                name: {
                    title: 'Father',
                    image: family_images.father,
                    audio : familyaudios[2]
                },
                spouse: {
                    title: 'Mother',
                    image: family_images.mother,
                    audio : familyaudios[3]
                },
                children: [
                    {
                        name: 'Brother',
                        image: family_images.brother,
                        audio : familyaudios[4]
                    },
                    {
                        name: 'Sister',
                        image: family_images.sister,
                        audio : familyaudios[5]
                    },
                    {
                        name: 'Me',
                        image: family_images.me,
                        audio : familyaudios[9]
                    }
                ]
            },
            {
                name: {
                    title: 'Uncle',
                    image: family_images.uncle,
                    audio : familyaudios[6]
                },
                spouse: {
                    title: 'Aunt',
                    image: family_images.aunt,
                    audio : familyaudios[7]
                },
                children: [
                    {
                        name: 'Cousin',
                        image: family_images.cousin_male,
                        audio : familyaudios[8]
                    },
                    {
                        name: 'Cousin',
                        image: family_images.cousin_female,
                        audio : familyaudios[8]
                    }
                ]
            }
        ]
    }
];

const alphabets = [
    { capital: 'A', small: 'a', word: 'Ant' },
    { capital: 'B', small: 'b', word: 'Bus' },
    { capital: 'C', small: 'c', word: 'Cat' },
    { capital: 'D', small: 'd', word: 'Dog' },
    { capital: 'E', small: 'e', word: 'Elephant' },
    { capital: 'F', small: 'f', word: 'Frog' },
    { capital: 'G', small: 'g', word: 'Gun' },
    { capital: 'H', small: 'h', word: 'Hen' },
    { capital: 'I', small: 'i', word: 'Ice-cream' },
    { capital: 'J', small: 'j', word: 'Jelly' },
    { capital: 'K', small: 'k', word: 'Key' },
    { capital: 'L', small: 'l', word: 'Lion' },
    { capital: 'M', small: 'm', word: 'Mango' },
    { capital: 'N', small: 'n', word: 'Net' },
    { capital: 'O', small: 'o', word: 'Ox' },
    { capital: 'P', small: 'p', word: 'Pen' },
    { capital: 'Q', small: 'q', word: 'Queen' },
    { capital: 'R', small: 'r', word: 'Rabbit' },
    { capital: 'S', small: 's', word: 'Sun' },
    { capital: 'T', small: 't', word: 'Tiger' },
    { capital: 'U', small: 'u', word: 'Umbrella' },
    { capital: 'V', small: 'v', word: 'Violin' },
    { capital: 'W', small: 'w', word: 'Watch' },
    { capital: 'X', small: 'x', word: 'Xylophon' },
    { capital: 'Y', small: 'y', word: 'Yalk' },
    { capital: 'Z', small: 'z', word: 'Zabra' }
].map((alphabet,index)=>({
    id : index + 1,
    ...alphabet,
    audio : alphabetaudios[index],
    word_image : en_word_images[index],
    capital_image : capital_images[index],
    small_image : small_images[index],
    backgroundColor : backgroundColor[index],
    textColor : textColor[index]
}))

const shapes = ['Circle','Oval','Square','Triangle','Rectangle','Heart','Parallelogram','Pentagon','Star','Trapezium','Sphere','Diamond','Pyramid','Pie','Cube','Crescent','Cilinder'].map((item,index)=>({
    id : index+1,
    name : item,
    image : shape_images[index],
    example : shape_example_images[index]
}))


export {
    homedata,
    selection,
    numberdata,
    number_0_to_100,
    familyTree,
    alphabets,
    shapes
}