
/*******************************************************************************
Custom JS application specific
****************************************************************************/

//#region Namespaces 
app.footer = {};
app.footer.render = {};

//Set Contact info
app.footer.render.contact = function () {
    $("#footer [name=phone]").html(app.config.template.footer.contact.phone).attr("href", "tel:" + app.config.template.footer.contact.phone);
    $("#footer [name=email]").html(app.config.template.footer.contact.email).attr("href", "mailto:" + app.config.template.footer.contact.email);
    $("#footer address").text(app.config.template.footer.contact.address);
};

//Set Links
app.footer.render.links = function () {
    $.each(app.config.template.footer.links, function (index, value) {
        $("#footer [name=footer-links]").append($("<li>", {
            "html": $("<a>", {
                "href": value.url,
                "text": value.text,
                "target": "_blank",
                "class": "text-light",
                "rel": "noreferrer" // Best practice for cross-origin links
            }).get(0).outerHTML
        }));
    });

    $("#footer [name=footer-links]").append($("<li>", {
        "html": $("<a>", {
            "href": "#",
            "text": app.label.static["privacy"],
            "name": "privacy",
            "class": "text-light"
        }).get(0).outerHTML
    }));

    $("#footer [name=footer-links]").append($("<li>", {
        "html": $("<a>", {
            "href": "#",
            "text": app.label.static["manage-cookies"],
            "name": "cookie-manage",
            "class": "text-light",
        }).get(0).outerHTML
    }));

};

//Set Social Media
app.footer.render.social = function () {
    $.each(app.config.template.footer.social, function (index, value) {
        $("#footer [name=footer-social]").append($("<a>", {
            "href": value.url,
            "target": "_blank",
            "rel": "noreferrer" // Best practice for cross-origin links
        }).append($("<i>", {
            "class": value.icon + " fa-3x mr-2 text-white",
            "title": app.label.social[value.label],
            "data-toggle": "tooltip",
            "data-placement": "top"
        })).get(0).outerHTML);
    });

};

app.footer.render.watermark = function () {
    $("#footer").find("[name=logo-link]").attr("href", app.config.template.footer.watermark.url);
    $("#footer").find("[name=logo]").attr("alt", app.config.template.footer.watermark.alt);
    $("#footer").find("[name=logo]").attr("src", app.config.template.footer.watermark.src);
}

app.footer.render.breakPoint = function () {

    $("#footer").find("[name=bs-breakpoint]").text(
        function () {
            if (window.innerWidth < 576) {
                return window.innerWidth + " / extra-small"
            }
            else if (window.innerWidth < 767) {
                return "small"
            }
            else if (window.innerWidth < 991) {
                return window.innerWidth + " / medium"
            }
            else if (window.innerWidth < 1199) {
                return window.innerWidth + " / large"
            }
            else {
                return window.innerWidth + " / extra-large"
            }
        }

    );
}
//#endregion