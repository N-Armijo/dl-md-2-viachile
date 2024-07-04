$(() =>{
    //smooth-scroll
    $("a").on('click',(event) => {
        if (event.currentTarget.hash !== "") {
            event.preventDefault();
            let hash = event.currentTarget.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                window.location.hash = hash;
                });
            }
        });
})