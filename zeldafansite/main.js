// Variables
let age = 27;
console.log(age)
console.log(age)
console.log(age)
console.log(age)
console.log(age)
console.log(age)

let day = 'Tuesday'

// Conditionals
if (day == 'Monday') {
    console.log('ITS MONDAY!')
} else {
    console.log('ITS NOT MONDAY!')
}


// Loops
for (let i = 0; i < 5; i++) {
    console.log(i)
}

// Function
function customHello(name) {
    console.log("Hello, " + name)

    return name;
}

customHello('Michael')
customHello('Jacob')
customHello('John')

let functionOutput = customHello('Judy')
console.log(functionOutput)

let imageList = [
    'https://t3.ftcdn.net/jpg/06/00/36/36/360_F_600363645_Ok0bRsJWEPH5b8B5Nvq17F07X8kNnlLg.jpg',
    'https://wallpapers.com/images/hd/zelda-botw-0g0xtid5gjenf06m.jpg',
    'https://wallpapers.com/images/hd/the-legend-of-zelda-image-legend-of-zelda-link-wallpaper-pzdd8c7b87mhzh52.jpg',
    'https://live.staticflickr.com/2918/14081480194_1a80f77732_b.jpg',
    'https://r2.starryai.com/results/601573472/f17a0018-2aed-410c-b890-1a93befc6c22.webp',
    'https://img.freepik.com/premium-photo/link-legend-zelda-cartoon-chibi-cute-design_726745-189.jpg?w=2000',
    'https://r2.starryai.com/results/429277328/7ae94a4d-557a-443e-b38c-8b970a727457.webp',
    'https://r2.starryai.com/results/954780023/0673ae5c-94dc-40ec-9072-2e07798eead5.webp'

]
let index = 0

let button = document.querySelector('button')
let img = document.querySelector('img')

setInterval(() => {
    // check if image list needs to start over
    if (index == imageList.length - 1) {
        index = 0
        img.setAttribute('src', imageList[index])
    } else {
        img.setAttribute('src', imageList[index + 1])
        index += 1
    }
}, 1000)