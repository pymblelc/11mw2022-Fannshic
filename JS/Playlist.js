// myBtn.addEventListener("click", function () {
//     canvas.toBlob(function (blob) {
//         ImageAPI.analyseFacesBlob(blob, function (data) {
//             for (let w = 0; w < data.length; w++) {
//                 // Info - variables, all these add up to 1
//                 let age = data[w].faceAttributes.age;
//                 let anger = data[w].faceAttributes.anger;
//                 let contempt = data[w].faceAttributes.contempt;
//                 let disgust = data[w].faceAttributes.disgust;
//                 let fear = data[w].faceAttributes.fear;
//                 let happiness = data[w].faceAttributes.happiness;
//                 let neutral = data[w].faceAttributes.neutral;
//                 let sadness = data[w].faceAttributes.sadness;
//                 let surprise = data[w].faceAttributes.surprise;

//                 // document.getElementById("MyText").innerHTML = age;
//                 // if (age => 15) {
//                 //     document.getElementById("MyText").innerHTML = "33"
//                 // }
//             }
//             console.log(data)
//             if (data[0].faceAttributes.emotion.anger < 0.5) {
//                 angerInfo = "The customer doesn't look very angry, "
//             }
// if (data[0].faceAttributes.emotion.anger > 0.5) {
//                 angerInfo = "The customer looks angry, "
//             }
//         });
//     });
// });
