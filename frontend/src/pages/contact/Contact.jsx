import "./contact.css";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Accordian from "../../components/accordian/Accordian";

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="section__container bg-primary-light">
          <h2 className="section__header capitalize">Contact Us</h2>
          <p className="section__subheader"></p>
        </section>

        <section className="section__container flex flex-col items-center">
          <h3 className="capitalize text-xl flex justify-center ">
            for enquiries about:
          </h3>
          <ul className="flex flex-col items-center mt-5">
            <li>Orders</li>
            <li>Shipping</li>
            <li>Pick-ups</li>
            <li>Materials</li>
            <li>Current pricing</li>
            <li>Measurements</li>
          </ul>
          <p className="mt-10">please contact us via the following channels:</p>

          <motion.div
            className="contact__wrapper container"
            variants={variants}
            initial="initial"
            whileInView="animate"
          >
            <motion.a
              href="https://wa.me/+2348134115489"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </motion.a>

            <motion.a
              // href="https://instagram.com/direct/t/17846334708255363"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiInstagramFill />
            </motion.a>

            <motion.a
              href="mailto:softouchclothing4@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </motion.a>
          </motion.div>

        <Accordian />
        </section>
      </motion.div>
    </>
  );
};

export default Contact;
