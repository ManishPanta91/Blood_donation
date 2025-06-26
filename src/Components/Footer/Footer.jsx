const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full  bottom-0 p-10 bg-[#CD1C18] text-white mt-10">
      <div className="flex pl-60 space-x-30 items-center">
        <p className="">@2025 LifeDrop</p>

        <div className="flex flex-col items-center justify-center">
          <h1 className="mr-10 text-2xl mb-5 ml-8">Quick Links</h1>
          <div className="flex gap-10 items-center justify-center">
            <div>
              <h2>Home</h2>
              <h2>About</h2>
            </div>
            <div>
              <h2>About</h2>
              <h2>Contact</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
