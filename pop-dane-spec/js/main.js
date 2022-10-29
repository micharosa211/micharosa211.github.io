$(document).ready(function () {

    $('button').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {
                let divDane = $('<div></div').attr("id", "dane-programisty");
                $('body').append(divDane);
                let pImie = $('<p></P>').text(`Imie: ${data.imie}`);
                $(divDane).append(pImie);
                let pNazwisko = $('<p></P>').text(`Nazwisko: ${data.nazwisko}`);
                $(divDane).append(pNazwisko);
                let pZawod = $('<p></P>').text(`Zawód: ${data.zawod}`);
                $(divDane).append(pZawod);
                let pFirma = $('<p></P>').text(`Firma: ${data.firma}`);
                $(divDane).append(pFirma);
            })
    })


});

