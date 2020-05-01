/*var data = ('photo','title','description')
data = {
    photo: 'img/10305389_76954fc0297934fc83dc58bf1bd38f91_wm.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
};*/

//A képeket és a szövegeket generáló rész

var photo = ['img/Forest-fire.jpg', 'img/AuroraClouds_Boffelli_2048.jpg', 'img/Will_o_the_wisp_by_fladdermuuus.jpg','img/Tulips.jpg','img/Desert.jpg','img/Hydrangeas.jpg','img/Backyard.jpg','img/Golfcourse.jpg', 'img/Rainy-street.jpg', 'img/Wimbledon-station.jpg', 'img/Londawn.jpg'];
var title = ['Tűz', 'Auróra', 'Will-o-Wisp', 'Tulipánok', 'Sivatag, kaktuszok nélkül', 'Virág (?)', 'Londoni Hátsókert, cc. 2017', 'Wimbledon Golfcourse', 'Esős londoni utca', 'Wimbledon Station', 'Londawn'];
var description = ['Ez itt egy lángoló erdő.', 'Ez itt az Aurora Borealis.', 'Ez pedig egy tündérfény.', 'Önmagáért beszél.', 'Sivatag, kaktusz nélkül.', 'Fogalmam sincs, milyen virág ez, itt volt a mappában, és egész jól néz ki.', '"...és ez itten a kert..."', 'Golfpálya, nahát. Szép hely amúgy.', 'Ez pedig a golfpálya mögötti út. A házakat úgy nézd, hogy sem te, sem én nem veszünk itt levegőn kívül soha semmit.', 'Metrómegálló a város szélén.', 'O2 Aréna, egy december reggel. Élőben szebb volt.'];

//A képek betöltéséért felelős rész
//var valami2 = 0
//console.log(valami2);

var currentPhoto = 0;


var loadPhoto = (currentPhoto) => {
    $('#image').attr('src', photo[currentPhoto]);
    $('#photo-title').text(title[currentPhoto]);
    $('#photo-description').text(description[currentPhoto]);
    $(".thumbnail-image").css('border-style', 'none', 'border-width', '0px',);
    
    var x = document.getElementById([currentPhoto]);
    console.log(x);
    $(x).css('border-style', 'ridge', 'border', 'width', '10px', 'border', 'color', 'red');
    
};

loadPhoto(currentPhoto);

//A gombok működéséért felelős rész
//megj: a képlet kicsit furcsa, de működik a dolog...
$('#button-right').click(() => {
    if (currentPhoto > photo.length -2){
        currentPhoto = -1};
    currentPhoto++;
    loadPhoto(currentPhoto);
});

$('#button-left').click(() => {
    if (currentPhoto < 1){
        currentPhoto = photo.length};
    currentPhoto--;
    loadPhoto(currentPhoto);
});

// A thumbnailek generálásáért felelős rész

photo.forEach((item, index) => {
$('#thumbnail-box').append(`<div class="thumbnail"> <img class="thumbnail-image" src="${item}" id="${index}"> </div>`);
  



//A thumbnailek klikk-reagálása
    
    $('.thumbnail').click((event) => {
        let photoindex2 = $(event.target).attr('id');
        let photoindex3 = parseInt(photoindex2);
        //console.log(photoindex3);
        //console.log(currentPhoto);
    
        loadPhoto(photoindex3);
        
        //if (photoindex3 == currentPhoto) {
        //$('.thumbnail').css('border-style', 'solid', 'border-width', '5px');};
        

        currentPhoto = (photoindex3);
    }); 
});

$(function () {
    $('#description-box-toggle').on('click', function () {
        $('#description-box').slideToggle(400);
    });
});
$(function () {
    $('#description-box').on('click', function () {
        $('#description-box').slideToggle(400);
    });
});





//Rak rá egy dobozt??
    //let valami = $('.thumbnail').attr('photoindex')
   // if (currentPhoto === valami) {$('.thumbnail').css('border-style', 'solid', 'border-width', '5px');};
    
    
    //let valami2 = parseInt(valami);
   // console.log(valami2);
    /*$('.thumbnail').click((event) => {
    let valami = $(event.target).attr('photoindex');
    let valami2 = parseInt(valami);
    if (valami2 === currentPhoto) {
    $('.thumbnail').css('border-style', 'solid', 'border-width', '5px');};
    });*/


   // $('.thumbnail').css('border-style', 'solid', 'border-width', '5px');

