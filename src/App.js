import { useState, useEffect } from 'react';
import Foodapp from './components/FoodApp/FoodApp';
import FooterApp from './components/FooterApp/FooterApp';
import Navbar from './components/Navbar/Navbar';
import ViewApp from './components/ViewApp/ViewApp';


function App() {
  const [isMobile, setMobile] = useState(false)
  const [windowSite, setWindowSite] = useState(
    {
      width: undefined,
      height: undefined
    }
  )
  useEffect(() => {

    const handleSize = () => {
      setWindowSite({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, [])

  useEffect(() => {
    if (windowSite.width < 500) {
      setMobile(true)
    }
    else {
      setMobile(false)
    }
  }, [windowSite])




  return (
    <div className="overflow-y-auto overflow-x-hidden relative">
      <Navbar isMobile={isMobile} />
      <Foodapp isMobile={isMobile}/>
      <ViewApp isMobile={isMobile}/>
      <FooterApp isMobile={isMobile} />
    </div>
  );
}

export default App;
