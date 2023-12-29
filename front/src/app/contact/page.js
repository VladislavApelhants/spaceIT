import Contact from "@/components/pages/home/Contact/Contact";
import TopDecor from "@/components/common/TopDecor/TopDecor";
import HiddenWrapper from "@/components/common/HiddenWrapper/HiddenWrapper";
import Contacts from "@/components/pages/contact/Contacts/Contacts";
export default function ContactUs() {
  return (
    <>
      <TopDecor />
      <HiddenWrapper>
        <Contacts />
        <Contact />
      </HiddenWrapper>
    </>
  );
}
