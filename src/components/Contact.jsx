"use client";
import { useState } from "react";
import { VscChromeMinimize, VscChromeClose } from "react-icons/vsc";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(false);
  const [mail, setMail] = useState(false);
  const [message, setMessage] = useState(false);
  //function to remove cursor
  const hideCursor = (classname) => {
    const cursor = document.querySelector(classname.toString());
    console.log(cursor);
    cursor.style.display = "none";
  };

  return (
    <div className="w-[90vw] mx-8 lg:w-[75vw] border border-white/20   rounded-3xl p-4 flex flex-col justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="text-6xl my-5 cursor-help"
      >
        Queries?
      </motion.div>

      {open && (
        <motion.div
          initial={{ height: "0%" }}
          animate={open ? { height: "100%", opacity: 1 } : { opacity: 0 }}
          className="codeBlock w-3/4 min-h-[500px]  relative flex flex-col justify-center items-center "
        >
          <div className="code w-full mx-2 border border-white/20 bg-[#151515] h-[600px]  relative  rounded-xl">
            <div className="absolute font-light font-mono  p-4 top-0 left-0 h-full w-full text-base md:text-xl">
              <Typewriter
                className=" opacity-50"
                options={{
                  delay: 15,
                  cursor: "|",
                  cursorClassName: "intro_cursor",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500)
                    .typeString(
                      "Hello there!<br>I'll be taking your query<br><br>"
                    )

                    .pauseFor(1500)
                    .callFunction(() => hideCursor(".intro_cursor"))
                    .callFunction(() => setName(true))
                    .start();
                }}
              />
              {name && (
                <form>
                  <div className="mt-8 text-green-600 font-extrabold opacity-100">
                    <Typewriter
                      options={{
                        delay: 15,
                        cursor: "|",
                        cursorClassName: "name_cursor",
                      }}
                      onInit={(typewriter) => {
                        typewriter

                          .typeString("What is your name?")
                          .callFunction(() => hideCursor(".name_cursor"))

                          .start();
                      }}
                    />
                    <span> {">>> "}</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      autoCorrect="off"
                      className="w-1/2 rounded-lg border border-white/5 bg-transparent text-white"
                      onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          setMail(true);
                        }
                      }}
                    />
                  </div>
                  {mail && (
                    <div className="mt-8 text-green-600 font-extrabold opacity-100">
                      <Typewriter
                        options={{
                          delay: 15,
                          cursor: "|",
                          cursorClassName: "mail_cursor",
                        }}
                        onInit={(typewriter) => {
                          typewriter

                            .typeString("Please enter your email :")
                            .callFunction(() => hideCursor(".mail_cursor"))

                            .start();
                        }}
                      />
                      <span> {">>> "}</span>
                      <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        autoCorrect="off"
                        className="w-1/2 rounded-lg border border-white/5 bg-transparent text-white"
                        onKeyDown={(e) => {
                          if (e.key == "Enter") {
                            setMessage(true);
                          }
                        }}
                      />
                    </div>
                  )}

                  {message && (
                    <div className="mt-8 text-green-600 font-extrabold opacity-100">
                      <Typewriter
                        options={{
                          delay: 15,
                          cursor: "|",
                          cursorClassName: "query_cursor",
                        }}
                        onInit={(typewriter) => {
                          typewriter

                            .typeString("Tell me your query : ")
                            .callFunction(() => hideCursor(".query_cursor"))

                            .start();
                        }}
                      />
                      <span> {">>> "}</span>
                      <textarea
                        name="message"
                        autoComplete="off"
                        autoCorrect="off"
                        className="w-1/2 rounded-lg border h-[150px] border-white/5 bg-transparent text-white"
                        // onKeyDown={(e) => {
                        //   if (e.key == "Enter") {
                        //     setMessage(true);
                        //   }
                        // }}
                      />
                      <br></br>
                      <br></br>
                      <button type="submit">Submit</button>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
