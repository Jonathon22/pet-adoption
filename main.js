  
const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
  },
  {
    name: "Trouble",
    color: "Poop-Colored",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
  },
  {
    name: "Sassy",
    color: "Poop-Colored",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    name: "Smokey",
    color: "Poop-Colored",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://images.ctfassets.net/cnu0m8re1exe/70JhB0XIHJmprEsQmEIMx3/eee66f1505b8b1d53ff0f3b18b305a5e/shutterstock_1099958171.jpg?w=650&h=433&fit=fill"
  },
  {
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
  },
  {
    name: "Salem",
    color: "Poop-Colored",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QN3vISAT25F-KT1Lcg8mV6Mb-m54jIK7c3aETyJ2nTZawskO&s"
  },
  {
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "data:image/jpeg;base64,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"
  },
  {
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
  },
  {
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjSElgsaPm-Rin71t-zk4kvTDfRQKJCYkBQg&usqp=CAU"
  },
  {
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaC7lvmRy-Uv7Mp89d6EO7SbpirQLIQpCqWw&usqp=CAU"
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
  },
  {
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://i.ytimg.com/vi/KR9kjuuxRO0/maxresdefault.jpg"
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe_ULQai55nkh2yf5KFUcX9Zi2KwcQia4oSQ&usqp=CAU"
  },
  {
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl: "https://static.scientificamerican.com/blogs/cache/file/15FE462A-E256-45D7-85D0302504B221BD_source.jpg?w=590&h=800&D9301959-CE94-4235-9BA99A771721E91F"
  }
];

const handleButtonClick = (e) => {
  console.log("click me!"); 
  const buttonId = e.target.id;



const selectedPets = [];

for (let i = 0; i < pets.length; i++){
  if (pets[i].type === buttonId) {
    selectedPets.push(pets[i])
 
}
buildPetAdoption(selectedPets);
}


if (buttonId === 'All' || buttonId === e.currentTarget.id) {
  buildPetAdoption(pets)
} else {
 buildPetAdoption(selectedPets);
}
}

// if (buttonId === 'dog'){
//   console.log("doggie!!!");
// }else {
//   console.log("its working");
// }

const printToDom = (divId, textToPrint ) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint; 
}




const buildPetAdoption = (monkeyButts) => {

  let domString = '';


for (let i=0; i < monkeyButts.length; i++) {
  domString += `<div class="pet">`
  domString += `<div class="pet-name">${monkeyButts[i].name}</div>`
  domString += `<img src="${monkeyButts[i].imageUrl}"/>`
  domString += `<div class="pet-color">${monkeyButts[i].color}</div>`
  domString += `<div class="pet-specialSkill">${monkeyButts[i].specialSkill}</div>`
  domString += `<div class="pet-type">${monkeyButts[i].type}</div>`
  domString += `</div>`
  
}

printToDom('pets', domString);


}

const buttonEvents = () => {
  document.getElementById('animal-buttons').addEventListener('click', handleButtonClick);

  
}

const init = () => {
buildPetAdoption(pets);
buttonEvents();

}

init();
