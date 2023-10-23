import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/duckLogo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ( {selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return <nav>
    <div
      className={`${flexBetween} fixed top-0 z-30 w-full py-6`} 
    >
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/*LEFT SIDE*/}


                {/* RIGHT SIDE */}
                {isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                    <div className= {`${flexBetween} gap-8 text-sm`}>
                        <Link 
                            page= "Home" 
                            selectedPage= {selectedPage}
                            setSelectedPage= {setSelectedPage}
                        />
                        <Link 
                            page= "About"
                            selectedPage= {selectedPage}
                            setSelectedPage= {setSelectedPage}
                        />
                        <Link 
                            page= "Courses"
                            selectedPage= {selectedPage}
                            setSelectedPage= {setSelectedPage}
                        />
                        <Link 
                            page= "Contact Us"
                            selectedPage= {selectedPage}
                            setSelectedPage= {setSelectedPage}
                        />

                    </div>
                    <div className= {`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <ActionButton setSelectedPage>Become a Member</ActionButton>
                    </div>
                </div>)
                : (
                    <button 
                      className = "rounded-full bg-green-800 p-2"
                      onClick = {() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <Bars3Icon className = "h-6 w-6 text-white" />
                    </button>
              )}
            </div>
        </div>

    </div>
  </nav>;
};

export default Navbar;