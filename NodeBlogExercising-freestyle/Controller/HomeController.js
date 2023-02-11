import Home from '../Models/HomeModel.js'
import Nav from '../Models/NavModel.js'

const homeController = (req, res, next) => {
    const home = new Home();
    const nav = new Nav();

    const navData = home.getData(homeData => {
        
        const NavData = nav.getData(navData =>{
            console.log(homeData);
            res.render('Home', {
                navLi : navData,
                home : homeData,
                headerTitle : homeData.headerTitle
            });
        });
    
    });
}

export default homeController;