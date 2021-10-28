/*
 * animation with js
 */

$(document).ready(function () {
    // accordion
    $(".toggle").click(function (event) {
        let $this = $(this);
        accordionAnimate($this, event);
    });

    // Add smooth scrolling to all links
    $("a").click(function (event) {
        let $this = $(this);
        linkSmoothScroll($this, event);
    });
});

function linkSmoothScroll($this, event) {
    const href = $this.attr("href"); // get href from clicked item
    if (href.length > 0) {
        const hrefParts = href.split("#");
        if (hrefParts[1].trim().length > 0) {
            const hash = "#" + hrefParts[1];
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        }
    }
}

function accordionAnimate($this, e) {
    e.preventDefault();

    if ($this.next().hasClass("show")) {
        $this.next().removeClass("show");
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find("li .inner").removeClass("show");
        $this.parent().parent().find("li .inner").slideUp(350);
        $this.next().toggleClass("show");
        $this.next().slideToggle(350);
    }
}
