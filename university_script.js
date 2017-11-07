$(document).ready(function () {
    var type = [{
        "title": "跨國課程合作",
        "className": "features1",
        "imgURL":"img/icon1.svg",
        "content":"這些特色大學透過跨國與跨校的課程，<br/>或學制創新，創造新的跨國合作機會。"
    },
    {
        "title": "跨國短期交流",
        "className": "features2",
        "imgURL": "img/icon2.svg",
        "content": "這些特色大學透過跨國與跨校的課程，<br/>或學制創新，創造新的跨國合作機會。"
    },
    {
        "title": "到海外實習、創業",
        "className": "features3",
        "imgURL": "img/icon3.svg",
        "content": "這些特色大學透過跨國與跨校的課程，<br/>或學制創新，創造新的跨國合作機會。"
    },
    {
        "title": "在地國際化",
        "className": "features4",
        "imgURL": "img/icon4.svg",
        "content": "這些特色大學透過跨國與跨校的課程，<br/>或學制創新，創造新的跨國合作機會。"
    }];

    var typeID = null;
    var arrayNumber;

    typeID = getURLParameters("type");
    arrayNum = parseInt(typeID) - 1;

    function getURLParameters(paramName) {
        var sURL = window.document.URL.toString();
        if (sURL.indexOf("?") > 0) {
            var arrParams = sURL.split("?");
            var arrURLParams = arrParams[1].split("&");
            var arrParamNames = new Array(arrURLParams.length);
            var arrParamValues = new Array(arrURLParams.length);

            var i = 0;
            for (i = 0; i < arrURLParams.length; i++) {
                var sParam = arrURLParams[i].split("=");
                arrParamNames[i] = sParam[0];
                if (sParam[1] != "") {
                    arrParamValues[i] = unescape(sParam[1]);
                } else {
                    arrParamValues[i] = "No Value";
                }
            }
            for (i = 0; i < arrURLParams.length; i++) {
                if (arrParamNames[i] == paramName) {
                    //alert("Parameter:" + arrParamValues[i]);
                    return arrParamValues[i];
                }
            }
            return "No Parameters Found";
        }
    }
    
    $(".wrapper").addClass(type[arrayNum]["className"]);
    $(".titBar h3").text(type[arrayNum]["title"]);
    $(".titBar img").attr("src", "" + type[arrayNum]["imgURL"] + "");
    $(".titBar p").append(type[arrayNum]["content"]);
    
    for (var i = 0; i < data.length; i++) {
        if (data[i]["cross_course"] === "Y" && typeID === "1") {
            $("#accordion").append("<div class='panel panel-default'><a data-toggle='collapse' data-parent='#accordion' href='#collapse" + i + "'><div class='panel-heading'>" +
                                   "<h4 class='panel-title'>" + data[i]["university"] + "</h4><span class='open'></span></div></a><div id='collapse" + i + "' class='panel-collapse collapse'>" +
                                    "<ul class='panel-body'><li><i></i>外國學生人數：" + data[i]["fori_student"] + "</li><li><i></i>本國學生出國進修、交流人數：" + data[i]["local_student"] + "</li>" +
                                    "<li><i></i>新南向海外實習人數：" + data[i]["intern_student"] + "</li><li><i></i>全英語學程數：" + data[i]["english_course"] + "</li><li><i></i>國際化特色：<br/>" + data[i]["international_point"] + "</li>" +
                                    "<li class='link'>延伸閱讀</li><a href='#'>" + data[i]["more"] + "</a></ul></div></div>");
        }
        if (data[i]["short_term"] === "Y" && typeID === "2") {
            $("#accordion").append("<div class='panel panel-default'><a data-toggle='collapse' data-parent='#accordion' href='#collapse" + i + "'><div class='panel-heading'>" +
                                "<h4 class='panel-title'>" + data[i]["university"] + "</h4><span class='open'></span></div></a><div id='collapse" + i + "' class='panel-collapse collapse'>" +
                                 "<ul class='panel-body'><li><i></i>外國學生人數：" + data[i]["fori_student"] + "</li><li><i></i>本國學生出國進修、交流人數：" + data[i]["local_student"] + "</li>" +
                                 "<li><i></i>新南向海外實習人數：" + data[i]["intern_student"] + "</li><li><i></i>全英語學程數：" + data[i]["english_course"] + "</li><li><i></i>國際化特色：<br/>" + data[i]["international_point"] + "</li>" +
                                 "<li class='link'>延伸閱讀</li><a href='#'>" + data[i]["more"] + "</a></ul></div></div>");
        }
        if (data[i]["internship"] === "Y" && typeID === "3") {
            $("#accordion").append("<div class='panel panel-default'><a data-toggle='collapse' data-parent='#accordion' href='#collapse" + i + "'><div class='panel-heading'>" +
                                 "<h4 class='panel-title'>" + data[i]["university"] + "</h4><span class='open'></span></div></a><div id='collapse" + i + "' class='panel-collapse collapse'>" +
                                  "<ul class='panel-body'><li><i></i>外國學生人數：" + data[i]["fori_student"] + "</li><li><i></i>本國學生出國進修、交流人數：" + data[i]["local_student"] + "</li>" +
                                  "<li><i></i>新南向海外實習人數：" + data[i]["intern_student"] + "</li><li><i></i>全英語學程數：" + data[i]["english_course"] + "</li><li><i></i>國際化特色：<br/>" + data[i]["international_point"] + "</li>" +
                                  "<li class='link'>延伸閱讀</li><a href='#'>" + data[i]["more"] + "</a></ul></div></div>");
        }
        if (data[i]["internalize"] === "Y" && typeID === "4") {
            $("#accordion").append("<div class='panel panel-default'><a data-toggle='collapse' data-parent='#accordion' href='#collapse" + i + "'><div class='panel-heading'>" +
                                "<h4 class='panel-title'>" + data[i]["university"] + "</h4><span class='open'></span></div></a><div id='collapse" + i + "' class='panel-collapse collapse'>" +
                                 "<ul class='panel-body'><li><i></i>外國學生人數：" + data[i]["fori_student"] + "</li><li><i></i>本國學生出國進修、交流人數：" + data[i]["local_student"] + "</li>" +
                                 "<li><i></i>新南向海外實習人數：" + data[i]["intern_student"] + "</li><li><i></i>全英語學程數：" + data[i]["english_course"] + "</li><li><i></i>國際化特色：<br/>" + data[i]["international_point"] + "</li>" +
                                 "<li class='link'>延伸閱讀</li><a href='#'>" + data[i]["more"] + "</a></ul></div></div>");
        }
    }

    function toggleIcon(e) {
        console.log(e);
        $(e.target).prev('.panel-heading')
            .find(".open")
            .toggleClass("icon-plus icon-minus");
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

});