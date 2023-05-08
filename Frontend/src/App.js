import Place from "./Components/Place";
import { Route, Routes } from "react-router-dom";
import GST from "./Components/GST";
import EntityInfo from "./Components/EntityInfo";
import AdditionalInfo from "./Components/AdditionalInfo";
import Header from "./Components/Header";
import Entity from "./Components/Entity";
import First from "./Components/First";
export default function App() {
 

  return (
    <div>
    <Header/>
   
   
    <div className="container">
     
    <Routes>
    <Route exact path="/" element={<First/>} />
       <Route exact path="/Entity" element={<Entity />} />
      <Route exact path="/addressinfo" element={<Place />} />
      <Route exact path="/gst" element={<GST/>} />
      <Route exact path="/entityinfo" element={<EntityInfo/>} />
      <Route exact path="/additionalinfo" element={<AdditionalInfo/>} />
      </Routes>
    </div>
    </div>
  );
}
