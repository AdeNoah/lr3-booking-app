const MailList = () => {
  return (
    <>
      <div className="mail w-full max-w-[1024px] bg-[#003580] text-white flex flex-col justify-center items-center gap-[15px] p-[50px]">
        <h2 className="mail-title">Save time, save money</h2>
        <span className="mail-description">
          Sign-up and we'd send the best deals to you{" "}
        </span>
        <div
          className="mailing-input-container w-[350px] h-[30px] p-[10px] border-0 
                [&>input]:mr-[10px] [&>input]:bg-white [&>input]:text-black [&>input]:border-0 [&>input]:outline-none [&>input]:text-[14px] [&>input]:p-[4px]
                [&>button]:h-[30px] [&>button]:bg-[#0071c2] [&>button]:px-[10px] [&>button]:font-semibold"
        >
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default MailList;
