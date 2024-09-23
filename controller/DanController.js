const m = {
    main:(req, res) =>{
        res.render('index');
    },
    home:(req, res) =>{
        res.render('home');
    },
    about:(req, res) =>{
        res.render('about');
    },
    contact:(req, res) =>{
        res.render('contact');
    },
    services:(req, res) =>{
        res.render('services');
    },
    gallery:(req, res) =>{
        res.render('gallery');
    },
    _about:(req, res) =>{
        res.render('_about');
    },
    _services:(req, res) =>{
        res.render('_services');
    },
    banner:(req, res) =>{
        res.render('banner');
    }
};

module.exports = m;
