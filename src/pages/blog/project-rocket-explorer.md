---
layout: ../../components/blogLayouts/BlogLayout.astro
title: "rocket explorer: breakdown"
date: "08-05-2025"
tags: ["project", "javascript", "html", "css"]
---

you could consider rocket explorer my first project, which it is technically. but really, i have had many projects as i grew older and fiddled more and more with technology. i even made some small video games as a child and some more through college. however it has only been in the recent years that i started taking coding as a proper career path and started to tailor my projects to things i need to know while making use of up-to-date technologies, such as ai... and if you know me, i have a love/hate relationship with ai. but that brings me here, my "first" real project that i would like to showcase and breakdown for you:

### _Rocket Explorer_

![rocket explorer title screen](https://i.imgur.com/rcvCaVm.png)

through this post i will show you what the app does, what i learned and how i did things.

__what is rocket explorer?__ it is a webapp that lets you explore the solar system, showing you the different planets, dwarf planets, and moons. as well as some basic info about them.

thats it. nothing crazy, just a simple project to help me learn.

__features__ - as straight forward as the project is, that also applies to the features.

- <span style="color: #991b1b">_title screen_</span>
-- the title screen, which you see above has a simple little pixel art logo (which all pixel art in this project was done by me, by hand), a reactive start button that gets slightly bigger when hovering, and some links to my github, an info page, and my portfolio.

![rocket explorer sun](https://i.imgur.com/SAn6ehK.png)

- <span style="color: #991b1b">_exploration_</span>
-- you start by looking at the sun and you can side scroll to the right to see other planets and moons.

![rocket explorer distance bar](https://i.imgur.com/XH1AFds.png)

while you scroll, you'll notice an animated <span style="color: #991b1b">distance traveled</span> bar at the bottom that references the distance from earth you are. -- <span style="font-size: 14px">_and yes, i just realized i spelled traveled wrong and i am not sorry._</span>

![rocket explorer search bar](https://i.imgur.com/iMbhP0m.png)

if you don't know what you're looking for, or maybe you do, you can use the <span style="color: #991b1b">search bar</span> at the bottom of the page. click the magnify glass and you will see a search bar that you can input a planet. don't know what to explore? hit "surprise me" and you'll be teleported to a random place! -- <span style="font-size: 14px">_weeeeee._</span>

![rocket explorer panel info](https://i.imgur.com/iSrRCwY.png)

okay, sure, so what happens when you click on a planet? not a whole lot to be honest. it brings up an <span style="color: #991b1b">information panel</span> that tells you how far away the sun is, how many days are in a year, what nasa missions are attributed to the planet, and a link to the nasa website in reference to the selected planet.

<span style="font-size: 14px">_wow austin so cool_</span> -- i get that its pretty simple, but it is my first project after all and i actually learned a lot from this. and it is more interactive than most developers' projects starting out. i still think its pretty cool personally. space is awesome.

__what have i learned?__ starting out, i already knew html and css pretty well. the main subject for me was <span style="color: #991b1b">javascript</span>. that was the purpose of this project. -- <span style="font-size: 14px">keep in mind that the code may be a bit messy, but who isn't messy starting out? thats how you learn.</span>

- <span style="color: #991b1b">creating a planet</span> -- the way planets were created is actually a little different than you might expect.

javascript is an <span style="color: #991b1b">object-oriented programming language</span>, which makes it kind of "game-like". and what do you find in a lot of games? <span style="color: #991b1b">objects</span>. and that is exactly what i did to create my planets.

1. i started by creating a <span style="color: #991b1b">class</span> with the properties which i would use afterwards to create each planet.
~~~
class Planet {
    constructor(radius, fog, name, description, 
    image, au, yearLength, missions, link) {
      this.radius = radius;
      this.fog = fog;
      this.name = name;
      this.description = description;
      this.image = image;
      this.au = au;
      this.yearLength = yearLength;
      this.missions = missions;
      this.link = link;
    }
  }
~~~
2. i then created an <span style="color: #991b1b">array</span> of constructed planets, creating each one.
~~~
const planets = [
    new Planet(6963.4, "plain", "Sun", "The Sun is the star at the center of the Solar System.", "<img src='https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~medium.jpg' width='200px' height='200px' alt='image of the Sun'></img>", "This is the sun, our home star and it's what we will be using to determine each objects distance.", "The sun doesn't have a 'year'", "Explorer-10, Parker Solar Probe, SDO & more", "https://science.nasa.gov/sun/facts/"),

    new Planet(2.4397, "plain", "Mercury", "Mercury is the smallest planet in our solar system.", "<img src='https://images-assets.nasa.gov/image/PIA11245/PIA11245~orig.jpg' width='200px' height='200px' alt='image of Mercury'></img>", "0.4 AU from the Sun", "88 Days in a year", "Mariner 10, MESSENGER, BepiColombo.", "https://science.nasa.gov/mercury/facts/"),

    // and so on...
]
~~~
3. and finally, the planets were then <span style="color: #991b1b">generated dynamically</span> to append to the DOM, in maybe a not so efficient way, but it gets the job done.
~~~
function generatePlanets(planetsList) {
    var webappMain = document.getElementById("webapp-main");
    for (let i = 0; i < planetsList.length; i++) {

        var planet = planetsList[i];

        var outerDiv = document.createElement("div");
        outerDiv.className = "space-content";
        outerDiv.id = "space-content";
        outerDiv.style.flexDirection = "column";

        var planetDiv = document.createElement("div");
        planetDiv.id = "planet" + planet.name;
        planetDiv.setAttribute('tabindex', '0');

        var contentTitle = document.createElement("h1");
        contentTitle.className = "space-content-title";
        contentTitle.id = planet.name.toLowerCase() + "Title";
        contentTitle.textContent = planet.name;

        var contentDescription = document.createElement("h1");
        contentDescription.className = "space-content-description";
        contentDescription.id = planet.name.toLowerCase() + "Description";
        contentDescription.textContent = planet.description;

        let planetDetails = document.createElement("div");
        planetDetails.className = "planet-details-popup";
        planetDetails.id = planet.name.toLowerCase() + "Details";
        planetDetails.style.color = "black";

        planetDetails.innerHTML = "<p>" + planet.image + "</p>" + "<p>" + planet.au + "</p>" + "<p>" + planet.yearLength + "</p>" + "<p>" + planet.missions + "</p>" + "<a href=" + planet.link + " target='_blank' rel='noopener noreferrer'>More Info</a>";
        planetDetails.style.flexDirection = "column";
        planetDetails.style.width = "250px";
        planetDetails.style.height = "500px";
        planetDetails.style.borderRadius = "10px";

        planetDetails.style.paddingTop = "25px";
        planetDetails.style.flexShrink = "0";

        let detailCloseButton = document.createElement("div");
        detailCloseButton.innerHTML = "<p>Close Details</p>";
        detailCloseButton.className = "close-button";
        detailCloseButton.id = planet.name.toLowerCase() + "CloseButton";
        detailCloseButton.setAttribute('tabindex', '0');

        const searchBarMove = document.getElementById("planetSearchBar");
        
        outerDiv.appendChild(planetDiv);
        outerDiv.appendChild(contentTitle);
        outerDiv.appendChild(contentDescription);
        outerDiv.appendChild(planetDetails);
        outerDiv.appendChild(detailCloseButton);
        outerDiv.appendChild(searchBarMove);
        webappMain.appendChild(outerDiv);
    }

    addEventListeners(planetsList);
}
~~~

as you can see its a bit bloated and there may have been a better way to go about it, but it does what its supposed to and all the planets show up on the page.

- lets take a look at the <span style="color: #991b1b">search bar</span> and how that works.

1. starting with the <span style="color: #991b1b">div</span>, you can see its just a couple buttons and a search input.
~~~
<div class="input-group mb-3" id="planetSearchBar">
    <button onclick="findPlanet()" class="btn btn-outline-secondary" type="button">Search</button>
    <button onclick="randomPlanet(planets)" class="btn btn-outline-secondary" type="button">Surprise Me!</button>
            
    <input onkeypress="lookForPlanet()" id="searchInput" input="text" class="form-control" placeholder="planet" aria-label="Type in a planet name to search for and hit enter" aria-describedby="basic-addon1">
</div>
~~~
2. then we have a function here that takes the <span style="color: #991b1b">user input</span> and finds the planet and snaps to it.
~~~
function findPlanet() {
    let input = document.getElementById("searchInput").value;
    let searchBar = document.getElementById("planetSearchBar");
    
    let planet = planets.find(plan => plan.name.toLowerCase() === input.trim().toLowerCase());
    if (planet) {
        console.log(`We found the planet ${planet.name}`);
        snapToPlanet(document.getElementById("planet" + planet.name));
        searchBar.style.visibility = "hidden";
    }
    else {
        console.log("We couldn't find the planet");
        searchBar.style.visibility = "hidden";
    }
}
~~~
3. you can see another function nested in there, lets view it:
~~~
function snapToPlanet(planetObject) {
    planetObject.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
~~~
the <span style="color: #991b1b">scrollIntoView</span> method is taking our planetObject from the user input and snapping our scrollbar to the location of that planet.

<span style="font-size: 14px">_what about the surprise me button?_</span> -- super simple, its just taking our planets and choosing a random one:
~~~
function randomPlanet(planet) {
    let randomArray = Math.floor(Math.random() * planet.length);
    let randomPlanet = planet[randomArray];

    console.log("Random Planet Found: " + randomPlanet.name);
    snapToPlanet(document.getElementById("planet" + randomPlanet.name));
};
~~~

- finally i would like to show you the <span style="color: #991b1b">distance traveled</span> function
~~~
function updateDistanceTravelled() {
    let distanceTravelled = document.getElementById("distance-travelled");
    let webappMain = document.getElementById("webapp-main");

    webappMain.addEventListener("scroll", function() {
    let distance = document.getElementById("webapp-main").scrollLeft;
    let distanceInKm = distance * 54437; // calculated based the the distance between the sun and the earth
    distanceTravelled.textContent = "Distance Travelled: " + distanceInKm + " km";
    //styling 
    distanceTravelled.style.textShadow = "2px 2px 3px #000000";
    distanceTravelled.style.fontSize = "14px";
})};
~~~
<span style="font-size: 14px">_my god, i apparently didn't know how to spell traveled._</span>

## Phew... 
in an effort to not make this blog too long and boring, i just showed you the most important parts of my small <a href="https://github.com/c0deV1king/rocket-explorer/tree/main" target="_blank" rel="noopener noreferrer">codebase.</a>

i believe in starting small and not overdoing my projects. i go in with a focus on learning a couple things at a time and i think it would help you too, at any stage in your journey. theres nothing worse than getting stuck on a project for months at a time while trying to learn a hundred different technologies that you are most likely going to forget when you open a new repo and stare at a blank page. keep it simple, keep it small, keep it focused.

as for this blog post... it is my very first one. my blog skills are at a low and i am going to improve over time. if you are here and reading this, thank you for taking the time to acknowledge my existence.

want to experience this project? <a href="https://c0dev1king.github.io/rocket-explorer/" target="_blank" rel="noopener noreferrer">find it here.</a>