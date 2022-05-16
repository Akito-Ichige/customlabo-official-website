import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-[120vh] mt-26 bg-orange-50 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/aa7e5bf4-a49e-4ddb-af72-0181c11d3d94"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-400 text-black">
            Contact
          </p>
          <p className="text-black py-4">
            // Submit the form the below or shoot me an email -
            myemail@gmail.com
          </p>
        </div>
        <input
          className="bg-white border rounded-md p-2"
          type="text"
          placeholder="お名前"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white border rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white border rounded-md"
          name="message"
          rows="10"
          placeholder="お問い合わせ内容"
        ></textarea>
        <button className="text-white font-bold border rounded-md bg-orange-400 hover:bg-orange-300 hover:border-orabg-orange-300 px-4 py-3 my-8 mx-auto flex items-center">
          送信する
        </button>
      </form>
    </div>
  );
};

export default Contact;
