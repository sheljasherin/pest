import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RiceSheethImage from '../assets/rice-sheeth.jpg'; // Import the rice sheeth image
import SheathBlightImage from '../assets/sheath-blight.jpg'; // Import the sheath blight image
import RiceBlastImage from '../assets/rice-blath.jpg'; // Import the rice blast image
import BacterialBlithImage from '../assets/bacterial-blith.jpg'; // Import the bacterial blight image

function News() {
  const [news, setNews] = useState([]);
  const [feedLanguage, setFeedLanguage] = useState('English');

  useEffect(() => {
    document.title = "Click to Fetch News";
  }, []);

  const fetchNews = async () => {
    const response = await fetch('https://newsapi.org/v2/everything?q=agriculture&apiKey=f8033cfe89e847a2add3b655cf3a2f44');
    const data = await response.json();
    setNews(data.articles);
  };

  const toggleFeedLanguage = () => {
    setFeedLanguage(feedLanguage === 'English' ? 'Malayalam' : 'English');
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Static translation data for Malayalam
  const malayalamTranslations = {
    "Rice Blast": "റൈസ് ബ്ലാസ്റ്റ്",
    "A fungal disease causing lesions on leaves, leading to poor crop yield.": "ഇലകളിൽ പുണ്ണുകൾ ഉണ്ടാക്കുന്ന ഒരു ഫംഗസ് രോഗം, ഇത് വിളവ് കുറയ്ക്കുന്നു.",
    "Bacterial Blight": "ബാക്ടീരിയൽ ബ്ലൈറ്റ്",
    "A bacterial infection that turns rice leaves yellow and reduces productivity.": "അരി ഇലകൾ മഞ്ഞയായി മാറ്റുന്ന ഒരു ബാക്ടീരിയൽ രോഗം, ഇത് ഉൽപാദനക്ഷമത കുറയ്ക്കുന്നു.",
    "Sheath Blight": "ഷീത് ബ്ലൈറ്റ്",
    "A fungal disease affecting the lower parts of the plant, leading to rot.": "ചെടിയുടെ താഴെയുള്ള ഭാഗങ്ങളെ ബാധിക്കുന്ന ഒരു ഫംഗസ് രോഗം, ഇത് ചീഞ്ഞുപോകുന്നതിന് കാരണമാകുന്നു.",
  };

  const translateText = (text) => {
    return feedLanguage === 'Malayalam' ? malayalamTranslations[text] || text : text;
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
            <img src={article.urlToImage || RiceSheethImage} alt="News" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">{article.title}</h3>
              <p className="text-gray-500 mt-2">{article.description}</p>
              <a href={article.url} className="text-green-600 font-medium hover:underline mt-2 inline-block">Read more</a>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20">
  <div className="flex justify-center">
    <Slider {...carouselSettings} className="overflow-hidden mt-5">
      <div className="p-4 text-center">
        <img src={RiceBlastImage} alt="Rice Blast" className="rounded-lg shadow-lg w-full h-64 object-cover" />
        <h3 className="text-lg font-semibold mt-2">{translateText("Rice Blast")}</h3>
        <p className="text-gray-500">{translateText("A fungal disease causing lesions on leaves, leading to poor crop yield.")}</p>
      </div>
      <div className="p-4 text-center">
        <img src={BacterialBlithImage} alt="Bacterial Blight" className="rounded-lg shadow-lg w-full h-64 object-cover" />
        <h3 className="text-lg font-semibold mt-2">{translateText("Bacterial Blight")}</h3>
        <p className="text-gray-500">{translateText("A bacterial infection that turns rice leaves yellow and reduces productivity.")}</p>
      </div>
      <div className="p-4 text-center">
        <img src={SheathBlightImage} alt="Sheath Blight" className="rounded-lg shadow-lg w-full h-64 object-cover" />
        <h3 className="text-lg font-semibold mt-2">{translateText("Sheath Blight")}</h3>
        <p className="text-gray-500">{translateText("A fungal disease affecting the lower parts of the plant, leading to rot.")}</p>
      </div>
      <div className="p-4 text-center">
        <img src={RiceSheethImage} alt="Brown Spot" className="rounded-lg shadow-lg w-full h-64 object-cover" />
        <h3 className="text-lg font-semibold mt-2">{translateText("Brown Spot")}</h3>
        <p className="text-gray-500">{translateText("A fungal disease causing brown spots on leaves, reducing photosynthesis.")}</p>
      </div>
    </Slider>
  </div>
</div>


      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-12 flex justify-center gap-4 mb-12">
        <div className="text-center w-full">
          <button onClick={fetchNews} className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
            Fetch News
          </button>
        </div>
        <div className="text-center w-full">
          <button onClick={toggleFeedLanguage} className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
            {feedLanguage === 'English' ? 'Translate to Malayalam' : 'Translate to English'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
