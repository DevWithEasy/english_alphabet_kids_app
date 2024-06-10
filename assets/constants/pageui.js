import { numberaudios } from "./audios"
import { family_images, home_abc, home_family, home_numbers, home_puzzle, home_shapes, numberimages } from "./images"

const homedata = [
    {
        id: 1,
        title: 'Letters',
        subTitle: 'Capital and Small',
        image: home_abc,
        backgroundColor: '#dcfce7',
        textColor: '#16a34a'
    },
    {
        id: 2,
        title: 'Numbers',
        subTitle: 'Numeric Numbers',
        image: home_numbers,
        backgroundColor: '#fee2e2',
        textColor: '#dc2626'
    },
    {
        id: 3,
        title: 'Shapes',
        subTitle: 'Geometric shapes',
        image: home_shapes,
        backgroundColor: '#fef9c3',
        textColor: '#ca8a04'
    },
    {
        id: 4,
        title: 'Family Tree',
        subTitle: 'Family member introduction',
        image: home_family,
        backgroundColor: '#ecfccb',
        textColor: '#65a30d'
    },
    {
        id: 5,
        title: 'Games',
        subTitle: 'Practice Learning',
        image: home_puzzle,
        backgroundColor: '#e0e7ff',
        textColor: '#4f46e5'
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
            path: ''
        },
        {
            id: 2,
            title: 'Small Letter',
            image: home_abc,
            backgroundColor: '#fee2e2',
            textColor: '#dc2626',
            path: ''
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
    audio: numberaudios[index]
}))

const familyTree = [
    {
        name: {
            title: 'Grandfather',
            image: family_images.grandfather
        },
        spouse: {
            title: 'Grandmother',
            image: family_images.grandmother
        },
        children: [
            {
                name: {
                    title: 'Father',
                    image: family_images.father
                },
                spouse: {
                    title: 'Mother',
                    image: family_images.mother
                },
                children: [
                    {
                        name: 'Brother',
                        image: family_images.brother
                    },
                    {
                        name: 'Sister',
                        image: family_images.sister
                    },
                    {
                        name: 'Me',
                        image: family_images.me
                    }
                ]
            },
            {
                name: {
                    title: 'Uncle',
                    image: family_images.uncle
                },
                spouse: {
                    title: 'Aunt',
                    image: family_images.aunt
                },
                children: [
                    {
                        name: 'Cousin',
                        image: family_images.cousin_male
                    },
                    {
                        name: 'Cousin',
                        image: family_images.cousin_female
                    }
                ]
            }
        ]
    }
];




export {
    homedata,
    selection,
    numberdata,
    number_0_to_100,
    familyTree
}