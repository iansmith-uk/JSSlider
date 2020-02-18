var showed_box = 0;

function fNext() {
    var total = document.getElementById("sld").childElementCount - 1;
    showed_box += -500;
    if (showed_box < 0 - (total * 500))
    {
        showed_box = 0;
    }

    document.getElementById("sld").style.transform = "translateX(" + showed_box + "px)";
}

function fPrevious() {
    var total = document.getElementById("sld").childElementCount - 1;

    showed_box += 500;
    if (showed_box > 0)
    {
        showed_box = 0 - (total * 500);
    }
    document.getElementById("sld").style.transform = "translateX(" + showed_box + "px)";
}
