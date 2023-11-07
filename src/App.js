import './App.css';
import Banner from './components/banner/banner';
import Carousel from './components/carousel/carousel';
import Navbar from './components/navbar/navbar';

const carousels = [
  { 
    id: 1, 
    title: 'Populares na netflix',
    items: [
      { url: 'https://s3.us-west-2.amazonaws.com/org.hollywoodtheatre.m/media/images/oppenheimer_70mm_on_sale_now_16-9.width-800.jpg' },
      { url: 'https://pbs.twimg.com/media/FX6-pkraIAE0S7b.jpg' },
      { url: 'https://media.wired.co.uk/photos/606dacfc1dcb46afc3a1dac5/16:9/w_1920,h_1080,c_limit/Guardians.jpg' },
      { url: 'https://georgespigot.files.wordpress.com/2012/11/looper-01.jpg' },
      { url: 'https://wallpapers.com/images/hd/shang-chi-official-movie-poster-kgiycfo4zeh71c5c.jpg' },
      { url: 'https://pbs.twimg.com/media/E_bH_i3VcAAZEvt.jpg' },
      { url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/virus-movie-poster-facebook-ad-design-template-a2e965381bf4b751199ac78dd1662d0d_screen.jpg' },
      { url: 'https://cdn.binalogue.com/los-fierros-thumb-16-9.png' },
      { url: 'https://kfg.pl/wp-content/uploads/2020/11/MAIN_POSTER_Awaken-film-poster-01-16x9-300dpi.jpg' },
      { url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dramatic-movie-poster-template-design-f0f2c261e077379d0f82604f96b6a774_screen.jpg' },
      { url: 'https://pernambucotem.com/wp-content/uploads/2023/09/IMG_0533.jpeg' },
      { url: 'https://i0.wp.com/musically.com/wp-content/uploads/2023/08/Metal-Fest-Megadeth-Event-Key-Art-16-9.png' },
      { url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/horror-movie-facebook-video-design-template-f45b265ae0594ee9fc171ad2ba92ea1c_screen.jpg' },
    ],
  },
  { 
    id: 2,
    title: 'Em alta',
    items: [
      { url: 'https://cdn.binalogue.com/los-fierros-thumb-16-9.png' },
      { url: 'https://kfg.pl/wp-content/uploads/2020/11/MAIN_POSTER_Awaken-film-poster-01-16x9-300dpi.jpg' },
      { url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dramatic-movie-poster-template-design-f0f2c261e077379d0f82604f96b6a774_screen.jpg' },
      { url: 'https://pernambucotem.com/wp-content/uploads/2023/09/IMG_0533.jpeg' },
      { url: 'https://i0.wp.com/musically.com/wp-content/uploads/2023/08/Metal-Fest-Megadeth-Event-Key-Art-16-9.png' },
      { url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/horror-movie-facebook-video-design-template-f45b265ae0594ee9fc171ad2ba92ea1c_screen.jpg' },
      { url: 'https://www.aknowingspirit.com/wp-content/uploads/2021/05/monster-wide.jpg' },
      { url: 'https://pbs.twimg.com/media/D4pgj_BVUAAbCTd.jpg' },
      { url: 'https://s3.us-west-2.amazonaws.com/org.hollywoodtheatre.m/media/images/oppenheimer_70mm_on_sale_now_16-9.width-800.jpg' },
      { url: 'https://wallpaperswide.com/download/the_dark_knight_movie-wallpaper-960x540.jpg' },
      { url: 'https://wallpapersmug.com/download/1600x900/e5a909/star-wars-the-last-jedi-2017-movie-poster-red.jpg' },
      { url: 'https://wallpaperbat.com/img/718204-daredevil-netflix-wallpaper-top-free-daredevil-netflix-background.jpg' },
      { url: 'https://media.wired.co.uk/photos/606dacfc1dcb46afc3a1dac5/16:9/w_1920,h_1080,c_limit/Guardians.jpg' },
    ],
  },
  { 
    id: 3, 
    title: 'Séries de fantasia para maratonar',
    items: [
      { url: 'https://e1.pxfuel.com/desktop-wallpaper/478/472/desktop-wallpaper-iron-man-3-16-9-iron-man-3-poster.jpg' },
      { url: 'https://s3.us-west-2.amazonaws.com/org.hollywoodtheatre.m/media/images/oppenheimer_70mm_on_sale_now_16-9.width-800.jpg' },
      { url: 'https://pbs.twimg.com/media/D4pgj_BVUAAbCTd.jpg' },
      { url: 'https://wallpaperswide.com/download/the_dark_knight_movie-wallpaper-960x540.jpg' },
      { url: 'https://wallpapersmug.com/download/1600x900/e5a909/star-wars-the-last-jedi-2017-movie-poster-red.jpg' },
      { url: 'https://wallpaperbat.com/img/718204-daredevil-netflix-wallpaper-top-free-daredevil-netflix-background.jpg' },
      { url: 'https://media.wired.co.uk/photos/606dacfc1dcb46afc3a1dac5/16:9/w_1920,h_1080,c_limit/Guardians.jpg' },
      { url: 'https://www.aknowingspirit.com/wp-content/uploads/2021/05/monster-wide.jpg' },
      { url: 'https://images4.alphacoders.com/104/thumb-1920-1044190.jpg' },
      { url: 'https://www.desktopbackground.org/download/1600x900/2011/03/02/165570_captain-america-civil-war-movie-poster-images-hd-wallpapers-2016_1726x998_h.png' },
      { url: 'https://images4.alphacoders.com/679/679460.jpg' },
      { url: 'https://images.hdqwalls.com/download/aladdin-movie-poster-8k-e4-1366x768.jpg' },
      { url: 'https://wallpaperswide.com/download/the_flash_2023_film-wallpaper-2048x1152.jpg' },
    ],
  },
  { 
    id: 4, 
    title: 'Lançamentos',
    items: [
      { url: 'https://businesspostbd.com/files/media/daily-media/2023/06/16/9.png' },
      { url: 'https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/1da42153570573.5938fd77e87cd.jpg' },
      { url: 'https://images4.alphacoders.com/104/thumb-1920-1044190.jpg' },
      { url: 'https://www.desktopbackground.org/download/1600x900/2011/03/02/165570_captain-america-civil-war-movie-poster-images-hd-wallpapers-2016_1726x998_h.png' },
      { url: 'https://images4.alphacoders.com/679/679460.jpg' },
      { url: 'https://images.hdqwalls.com/download/aladdin-movie-poster-8k-e4-1366x768.jpg' },
      { url: 'https://wallpaperswide.com/download/the_flash_2023_film-wallpaper-2048x1152.jpg' },
      { url: 'https://e1.pxfuel.com/desktop-wallpaper/478/472/desktop-wallpaper-iron-man-3-16-9-iron-man-3-poster.jpg' },
      { url: 'https://www.10wallpaper.com/wallpaper/1366x768/1609/Doctor_Strange_Benedict_Cumberbatch-2016_Movie_Posters_Wallpaper_1366x768.jpg' },
      { url: 'https://preview.redd.it/n1jy81nakar91.png?width=640&crop=smart&auto=webp&s=848db585558e2b196fcc4b716a772640c265efe8' },
      { url: 'https://wallpapersmug.com/download/1600x900/a1b0cb/venom-movie-2018-official-poster.jpg' },
      { url: 'https://www.10wallpaper.com/wallpaper/1920x1080/1608/Resident_Evil_6_The_Final_Chapter-2016_Movie_Posters_Wallpaper_1920x1080.jpg' },
      { url: 'https://wallpapersmug.com/download/1600x900/eaad55/super-mario-bros-2023-movie.jpg' },
    ],
  },
  { 
    id: 5, 
    title: 'Séries premiadas de suspense sombrio',
    items: [
      { url: 'https://wallpapersmug.com/download/1600x900/a1b0cb/venom-movie-2018-official-poster.jpg' },
      { url: 'https://e1.pxfuel.com/desktop-wallpaper/478/472/desktop-wallpaper-iron-man-3-16-9-iron-man-3-poster.jpg' },
      { url: 'https://www.10wallpaper.com/wallpaper/1366x768/1609/Doctor_Strange_Benedict_Cumberbatch-2016_Movie_Posters_Wallpaper_1366x768.jpg' },
      { url: 'https://preview.redd.it/n1jy81nakar91.png?width=640&crop=smart&auto=webp&s=848db585558e2b196fcc4b716a772640c265efe8' },
      { url: 'https://wallpapersmug.com/download/1600x900/a1b0cb/venom-movie-2018-official-poster.jpg' },
      { url: 'https://www.10wallpaper.com/wallpaper/1920x1080/1608/Resident_Evil_6_The_Final_Chapter-2016_Movie_Posters_Wallpaper_1920x1080.jpg' },
      { url: 'https://wallpapersmug.com/download/1600x900/eaad55/super-mario-bros-2023-movie.jpg' },
      { url: 'https://businesspostbd.com/files/media/daily-media/2023/06/16/9.png' },
      { url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/universe-movie-facebook-video-design-template-8593566352520021d2cdb1ecd4dd4c08_screen.jpg' },
      { url: 'https://sportshub.cbsistatic.com/i/2023/08/03/41913cf1-435b-4619-853d-c58e670ca95b/tmnt-salone-16-9-1920x1080-nb-1106536-1920x1080.jpg' },
      { url: 'https://e1.pxfuel.com/desktop-wallpaper/931/712/desktop-wallpaper-3840x2160-coco-keyart-violin-movie-poster-u-16-9-widescreen-3840x2160-background-292.jpg' },
      { url: 'https://picstatio.com/large/4b11ac/Blade-Runner-2049-movie-poster.jpg' },
      { url: 'https://imgmedia.larepublica.pe/640x371/larepublica/original/2023/02/01/63dae07e79f7110bcb1a31ab.webp' },
    ],
  },
  { 
    id: 6, 
    title: 'Séries criativas',
    items: [
      { url: 'https://cdn.binalogue.com/los-fierros-thumb-16-9.png' },
      { url: 'https://businesspostbd.com/files/media/daily-media/2023/06/16/9.png' },
      { url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/universe-movie-facebook-video-design-template-8593566352520021d2cdb1ecd4dd4c08_screen.jpg' },
      { url: 'https://sportshub.cbsistatic.com/i/2023/08/03/41913cf1-435b-4619-853d-c58e670ca95b/tmnt-salone-16-9-1920x1080-nb-1106536-1920x1080.jpg' },
      { url: 'https://e1.pxfuel.com/desktop-wallpaper/931/712/desktop-wallpaper-3840x2160-coco-keyart-violin-movie-poster-u-16-9-widescreen-3840x2160-background-292.jpg' },
      { url: 'https://picstatio.com/large/4b11ac/Blade-Runner-2049-movie-poster.jpg' },
      { url: 'https://imgmedia.larepublica.pe/640x371/larepublica/original/2023/02/01/63dae07e79f7110bcb1a31ab.webp' },
      { url: 'https://wallpapersmug.com/download/1600x900/a1b0cb/venom-movie-2018-official-poster.jpg' },
      { url: 'https://media.wired.co.uk/photos/606dacfc1dcb46afc3a1dac5/16:9/w_1920,h_1080,c_limit/Guardians.jpg' },
      { url: 'https://georgespigot.files.wordpress.com/2012/11/looper-01.jpg' },
      { url: 'https://wallpapers.com/images/hd/shang-chi-official-movie-poster-kgiycfo4zeh71c5c.jpg' },
      { url: 'https://pbs.twimg.com/media/E_bH_i3VcAAZEvt.jpg' },
      { url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/virus-movie-poster-facebook-ad-design-template-a2e965381bf4b751199ac78dd1662d0d_screen.jpg' },
    ],
  },
];

function App() {
  return (
    <div className="netflix-clone">
      <Navbar></Navbar>
      <Banner></Banner>
      {carousels.map((carousel) => {
        return (
          <Carousel key={carousel.id} title={carousel.title} items={carousel.items}></Carousel>
        );
      })}
    </div>
  );
}

export default App;
