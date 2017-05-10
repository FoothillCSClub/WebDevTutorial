var blogEntries = [
    {
        title:"Monday",
        text:"Curabitur vulputate neque ut turpis laoreet efficitur. Donec tincidunt efficitur sem vitae molestie. Ut hendrerit sagittis aliquam. Quisque mollis, felis eu scelerisque malesuada, justo dolor malesuada diam, nec auctor sem libero porta velit. Integer velit massa, maximus non risus id, tincidunt vehicula purus."
    },
    {
        title:"Tuesday",
        text:"Maecenas at arcu in nulla faucibus varius. Vestibulum in viverra arcu. Vestibulum ultrices enim sed mi elementum finibus. Etiam elementum arcu dolor, placerat pellentesque risus rutrum nec. Maecenas at viverra massa. Aenean commodo quam nulla, eu dictum ipsum pulvinar nec."
    },
    {
        title:"Wednesday",
        text:"Etiam eu imperdiet orci. Etiam viverra turpis sit amet nisi tincidunt, eget egestas ex tempus. Proin dignissim pretium libero, eget ullamcorper mi mollis in. Curabitur vitae urna non enim lobortis cursus. Sed semper facilisis urna quis dapibus."
    }
];

window.onreadystatechange = loadBlog();

function loadBlog() {
    var blog = document.getElementById('blog');
    for (var i = 0; i < blogEntries.length; i++) {
        var title = document.createElement('h2');
        title.innerHTML = blogEntries[i].title;
        blog.appendChild(title);
        var text = document.createElement('p');
        text.innerHTML = blogEntries[i].text;
        blog.appendChild(text);
    }

    goto('blog');
}

function goto(section) {
    var content = document.getElementById('content');
    content.className = '';
    content.classList.add(section);
}