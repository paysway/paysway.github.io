import stl from "./EmbeddedFormsIllustration.module.scss";

import AdminPanel from "../../../public/images/embeddedFormsAdminPanel.svg?inline";
import GBPEmbeddedForm from "../../../public/images/gbpEmbeddedForm.svg?inline";
import Tabs from "../Tabs/Tabs";

const tabs = [
  {
    name: "UI",
    content: <GBPEmbeddedForm />,
  },
  {
    name: "Admin",
    content: <AdminPanel />,
  },
];

function EmbeddedFormsIllustration() {
  const labels = tabs.map((tab) => tab.name);
  return (
    <Tabs labels={labels}>
      {tabs.map((tab, idx) => (
        <div className={stl.tabBox} key={idx}>
          {tab.content}
        </div>
      ))}
    </Tabs>
  );
}

export default EmbeddedFormsIllustration;
