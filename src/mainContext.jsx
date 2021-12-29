import { createContext, useState, useEffect } from "react";
import Pack from "./features/Pack";
import Chrome from "./software/Chrome";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ReactCalculator } from "simple-react-calculator";
import ClockApp from "./software/ClockApp";
import CameraApp from "./software/CameraApp";
import Terminal from "./software/Terminal";
import Gallery from "./software/Gallery";
export const contxt = createContext();

export default function MainContext({ children }) {
  const [appsOnDesktop, setAppOnDesktop] = useState();
  const [wifi, setWifi] = useState(navigator.onLine);
  const [bluetooth, setBluetooth] = useState(true);
  const [nearByLight, setNearByLight] = useState(false);
  const [brightness, setBrightness] = useState(10);
  const [volume, setVolume] = useState(10);
  const [mute, setMute] = useState(false);
  const [windowOpen, setWindowOpen] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [wallpaper, setWallpaper] = useState(
    "https://wallpapers.com/images/high/moon-drops-chromebook-wallpaper-4vxd42cftjwu4rgw.jpg"
  );
  const [profile, setProfile] = useState(
    "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
  );
  const [desktop, setDesktop] = useState(false);
  const [apps, setApps] = useState([
    {
      icon: "https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/chrome.png",
      name: "chrome",
      key: "com.chrome",
      orientation: { w: "wfull", h: "hfull" },
      app: <Chrome />,
      active: false,
      pin:false
    },
    {
      icon: "https://i.pinimg.com/originals/03/fd/28/03fd284948387458641483ef58822e3c.png",
      name: "clock",
      key: "com.clock",
      orientation: { w: "auto", h: "auto" },
      app: <ClockApp />,
      active: false,
      pin:false
    },
    {
      icon: "https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Calculator-icon.png",
      name: "calculator",
      key: "com.calculator",
      orientation: { w: "auto", h: "auto" },
      app: <ReactCalculator />,
      active: false,
      pin:false
    },
    {
      icon: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png",
      name: "calendar",
      key: "com.calendar",
      orientation: { w: "auto", h: "auto" },
      app: <Calendar locale="us-US" />,
      active: false,
    },
    {
      icon: "https://i.pinimg.com/originals/e2/bc/2b/e2bc2b005d593253f62a4727d3da5d4f.png",
      name: "camera",
      key: "com.camera",
      orientation: { w: "auto", h: "auto" },
      app: <CameraApp />,
      active: false,
      task: "",
      pin:true
    },
    {
      icon: "https://raw.githubusercontent.com/fabiospampinato/vscode-terminals/master/resources/logo.png",
      name: "terminal",
      key: "com.terminal",
      orientation: { w: "whalf", h: "hhalf" },
      app: <Terminal />,
      active: false,
      pin:false
    },
    {
      icon: "https://purepng.com/public/uploads/large/purepng.com-gallery-icon-galaxy-s6symbolsiconssamsungapp-iconsgalaxy-s6-icons-721522597459ut72n.png",
      name: "gallery",
      key: "com.gallery",
      orientation: { w: "wfull", h: "hfull" },
      app:<Gallery/>,
      active: false,
      pin:true
    },
  ]);
 

  useEffect(() => {
    window.addEventListener("online", () => {
      setWifi(true);
    });
    window.addEventListener("offline", () => {
      setWifi(false);
    });
  }, []);
  return (
    <contxt.Provider
      value={{
        appsOnDesktop,
        setAppOnDesktop,
        wallpaper,
        setWallpaper,
        profile,
        setProfile,
        nearByLight,
        wifi,
        bluetooth,
        setWifi,
        setBluetooth,
        setNearByLight,
        brightness,
        setBrightness,
        volume,
        setVolume,
        mute,
        setMute,
        windowOpen,
        setWindowOpen,
        apps,
        setApps,
        desktop,
        setDesktop,
        photos,
        setPhotos
      }}
    >
      {children}
    </contxt.Provider>
  );
}
