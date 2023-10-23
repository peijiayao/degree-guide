import Navbar from "@/scenes/Navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div className="app bg-[rgb(251,244,207)]">
      <Navbar
        selectedPage= {selectedPage}
        setSelectedPage= {setSelectedPage} 
      />
    </div>);
}

export default App;
