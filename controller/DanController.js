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
    }
};

module.exports = m;