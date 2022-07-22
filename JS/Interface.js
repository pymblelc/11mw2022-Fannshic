console.log("start")

// Properties/////////////////////////////////////////////

//Cam + Photo
let startBtn = document.getElementById("btnStart");
let photoBtn = document.getElementById("btnPhoto");
let canvas = document.getElementById("Photo");
let cam = document.getElementById("Cam")

//Playlist
let myBtn = document.getElementById("btnGenerate");
let list = document.getElementById("btnList");
let intro = document.getElementsByClassName("Intro")
let playlist = document.getElementsByClassName("Playlist")
var songs = document.getElementById("Songs");
var random = "";


// Cam + Photo/////////////////////////////////////////////
startBtn.addEventListener("click", async function () {
    let stream = null;

    let finalInfo = "click 4 something to happen";
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        });
    } catch (error) {
        alert(error.message);
        return;
    }

    cam.srcObject = stream;

    cam.style.display = "block";
    photoBtn.style.display = "block";


    //startBtn.style.display = "none";
});

photoBtn.addEventListener("click", function () {
    canvas.getContext("2d").drawImage(cam, 0, 0, canvas.width, canvas.height);
});

// Playlist /////////////////////////////////////////////

// Array of songs - (0-6)
// orgininally i was going to nest arrays to be able to have songnames, artist names and length,
// but effort and i ran out of time
const angersongs = ["Usewa", "angery ppl", "Rät", "jgsod", "fdsgfs", "grhuisejks", "anger222"];
const contemptsongs = ["contemp1", "contemp2", "contemp3", "contemp4", "contemp5", "contemp6", "contemp7"];
const disgustsongs = ["geuiap", "dfsa", "gafsgtse", "dsg", "fsg", "fsd", "gfsdgre"];
const fearsongs = ["fsgds", "fgafd", "fgafa", "sagrd", "fdgsagrdaa", "fsafsg", "agsgfdsgfd"];
const happinesssongs = ["gsdgds", "sagfs", "hjkhk", "jkhu", "esgre", "fgsdbfsd", "sagdf"];
const neutralsongs = ["gfdagag", "fdsgf", "gfsga", "gfdsgdf", "dsgd", "dgsgfd", "dsgfd"];
const sadnesssongs = ["gfsdgfds", "fsdgfd", "sgfd", "sgfds", "fdsgf", "sgfds", "fdxgdfb"];

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

//so that they are randomly generated ---
const random1 = Math.floor(Math.random() * angersongs.length);
const random2 = Math.floor(Math.random() * contemptsongs.length);
const random3 = Math.floor(Math.random() * disgustsongs.length);
const random4 = Math.floor(Math.random() * fearsongs.length);
const random5 = Math.floor(Math.random() * happinesssongs.length);
const random6 = Math.floor(Math.random() * neutralsongs.length);
const random7 = Math.floor(Math.random() * sadnesssongs.length);


// generate button
myBtn.addEventListener("click", function () {
    canvas.toBlob(function (blob) {
        ImageAPI.analyseFacesBlob(blob, function (data) {
            for (let w = 0; w < data.length; w++) {
                TransformStream.addEventListener
                console.log(data)
                console.log(random1, angersongs[random1]);

                // Info - variables, all these add up to 1
                let age = data[w].faceAttributes.age;
                let anger = data[w].faceAttributes.anger;
                let contempt = data[w].faceAttributes.contempt;
                let disgust = data[w].faceAttributes.disgust;
                let fear = data[w].faceAttributes.fear;
                let happiness = data[w].faceAttributes.happiness;
                let neutral = data[w].faceAttributes.neutral;
                let sadness = data[w].faceAttributes.sadness;
                let surprise = data[w].faceAttributes.surprise;

                //Generate
                //i couldn't figure out how randome thing works
                //sorry josh
                //anger
                if (anger => 0.5 ) {
                    console.log("angery")
                    songs.innerHTML = 
                    (random, angersongs[random2]) 
                    + (random, angersongs[random5]) 
                    + (random, angersongs[random1]) 
                    + (random, angersongs[random1])
                    + (random, angersongs[random1])
                    + (random, angersongs[random1])
                    + (random, angersongs[random1]);
                }
                if (anger => 0.2 ) {
                    console.log("less angery");
                    songs.innerHTML = 
                    (random, angersongs[random1]) 
                    + (random, angersongs[random1]);
                }
                else {
                    console.log("not angery")
                }
                //disguest
                if (anger => 0.5 ) {
                    console.log("angery")
                    songs.innerHTML = 
                    (random, angersongs[random2]) 
                    + (random, angersongs[random5]) 
                    + (random, angersongs[random1]) 
                    + (random, angersongs[random1])
                    + (random, angersongs[random1])
                    + (random, angersongs[random1])
                    + (random, angersongs[random1]);
                }
                if (anger => 0.2 ) {
                    console.log("less angery");
                    songs.innerHTML = 
                    (random, angersongs[random1]) 
                    + (random, angersongs[random1]);
                }
                else {
                    console.log("not angery")
                }
                //fear
                // happy 
                if (happiness => 0.5 ) {
                    console.log("happy")
                    songs.innerHTML = 
                    (random, happinesssongs[random2]) 
                    + (random, happinesssongs[random5]) 
                    + (random, happinesssongs[random1]) 
                    + (random, happinesssongs[random1])
                    + (random, happinesssongs[random1])
                    + (random, happinesssongs[random1])
                    + (random, happinesssongs[random1]);
                }
                if (happiness => 0.2 ) {
                    console.log("less happy");
                    songs.innerHTML = 
                    (random, angersongs[random1]) 
                    + (random, angersongs[random1]);
                }
                else {
                    console.log("not happy")
                }
                //neutral
                //sadness
                //surprise



                
                photoBtn.style.display = "";
            }
        });
    });
});
