import Accordion from "../../ui/Accordion/Accordion";

export default function Faq() {
  return (
    <section id="faq" className="">
      <div className="cssContainer">
        <header className="header">
          <h2 className="">Frequently Asked Questions</h2>
        </header>

        {/* Accordion*/}
        <div className=" max-w-200 mx-auto space-y-4">
          <Accordion question={"How do I create an account?"}>
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </Accordion>

          <Accordion question={"How do I create an account?"}>
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </Accordion>

          <Accordion question={"How do I create an account?"}>
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </Accordion>

          <Accordion question={"How do I create an account?"}>
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </Accordion>

          <Accordion question={"How do I create an account?"}>
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </Accordion>

          <Accordion question={"How do I create an account?"}>
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </Accordion>

          <Accordion question={"How do I create an account?"}>
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </Accordion>
        </div>
      </div>
    </section>
  );
}
