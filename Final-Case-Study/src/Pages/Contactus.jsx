import GetInTouchForm from "../components/Contact/GetInTouchForm";
import Contactbanner from "../components/Contact/Contactbanner";
import ContactDetails from "../components/Contact/ContactDetails";

const Contactus = () => {
  return (
    <div className="bg-light">
      <Contactbanner title="contact us" />

      <ContactDetails />

      <GetInTouchForm />
    </div>
  );
};

export default Contactus;
