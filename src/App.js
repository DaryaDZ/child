import Home from "./Home.js";
import { Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Processes from "./conponents/Processes.js";
// import Background from "./Background.js";
import Conditions from "./conponents/Conditions.js";
import Condition from "./conponents/Condition.js";
import ConditionsLayout from "./conponents/ConditionsLayout.js";
import ProcessesNew from "./conponents/ProcessesNew.js";
import Process from "./conponents/Process.js";
import LegalIssues from "./conponents/LegalIssues.js";
import Organizations from "./conponents/Organizations.js";
import OrganizationsColleague from './conponents/OrganizationsColleague.js'
import OrganizationsResponsible from './conponents/OrganizationsResponsible.js';
import MainPage from "./conponents/MainPage.js";
import Definitions from "./conponents/Definitions.js";
import Layout from "./Layout.js";
import Background from "./Background.js";
import Recognition from "./conponents/Recognition.js";
import RecognitionStart from './conponents/RecognitionStart.js';
function App() {
  return (
    <>
      <Routes>
      {/* <Route index element={} /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Background />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/recognition/start" element={<RecognitionStart/>}/>
            <Route path="/conditions" element={<Conditions />} />
          <Route path="/definitions" element={<Definitions />} />
          <Route path="/conditions/:id" element={<Condition />} />
            <Route path="/conditions/processes/:id" element={<ProcessesNew />} />
            <Route path="/conditions/process/:id" element={<Process />} />
            <Route path="/conditions/response/:id" element={<OrganizationsResponsible />} />
            <Route path="/conditions/colleague/:id" element={<OrganizationsColleague />} />
          <Route path="/conditions/legal/:id" element={<LegalIssues />} />
          <Route path="/definition" element={<Definitions/>}/>
        </Route>
        {/* <Route path="/manipage" element={<ConditionsLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/manipage/conditions" element={<Conditions />} />
          <Route path="/manipage/definitions" element={<Definitions/>}/>
          <Route path="/manipage/conditions/:id" element={<Condition/>}/>
          <Route path="/manipage/conditions/processes/:id" element={<ProcessesNew />} />
          <Route path="/manipage/conditions/process/:id" element={<Process />} />
          <Route path="/manipage/conditions/legal/:id" element={<LegalIssues />} />
          <Route path="/manipage/conditions/organs/:id" element={<Organizations />} />
          <Route path="/manipage/conditions/Response/:id" element={<OrganizationsResponsible />} />
          <Route path="/manipage/conditions/Colleague/:id" element={<OrganizationsColleague />} />

        </Route> */}
      </Routes>
    
    
    
    </>
  );
}

export default App;
