function mobile_bar_link_hider() {
    var x = document.getElementById("mobile_bar_links");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function copyText() {
    navigator.clipboard.writeText("play.minemelon.net");
}

$(document).ready(function() {
    $('.main_copy_ip').click(function() {
        var popup = $('<div>', { class: 'main_popup' })
        .append($('<h3 class="copy_confirm">').text('Đã copy'));
        $(this).after(popup);
        setTimeout(function() {
            popup.remove();
        }, 1000);
    });
});

const scrollLinks = document.querySelectorAll('.scroll');
scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const offsetTop = target.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});