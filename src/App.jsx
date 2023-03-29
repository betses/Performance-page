import emoji from "./assets/emoji _briefcase_.png";
function App() {
  return (
    <div className="px-8">
      <div className="">
        <div className="h-[104px] w-[104px] rounded-full bg-[#FFF952] absolute" />
        <div className="relative left-8 top-5 w-[488px]">
          <h1 className="text-5xl font-bold">
            Let’s see what the stats say about our performance
          </h1>
          <p className="pt-2 text-lg font-normal">
            It’s always sunny with Fox Events!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="w-[469px] h-[469px] bg-[#E5AF22] flex flex-col justify-center pl-[100px] rounded-full self-center col-span-5">
          <h2 className="font-bold text-white text-9xl">281+</h2>
          <p className="text-xl font-bold">Engaging Experiences </p>
          <p className="text-base w-[280px]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-[695px] h-[695px] bg-[#FFF952] flex flex-col pt-[180px] pl-[176px] rounded-full col-span-7">
          <h2 className="font-bold text-white text-9xl">
            49000 <br /> Hours
          </h2>
          <p className="text-xl font-bold">Experience Organization</p>
          <p className="text-base w-[280px]">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="relative bottom-[43%] right-[42%] flex rounded-full shadow-lg items-center justify-center w-24 h-24 bg-white">
            <img className="" src={emoji} alt="breifcase" />
          </div>
          <div className="relative bottom-[30%] left-[84%] flex rounded-full shadow-lg items-center justify-center w-24 h-10 bg-white">
            <p>Birthdays</p>
          </div>
          <div className="relative bottom-9 left-[52%] flex rounded-full shadow-lg items-center justify-center w-44 h-10 bg-white">
            <p>Corporate Retreats</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
