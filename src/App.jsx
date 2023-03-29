import emoji from "./assets/emoji _briefcase_.png";
import celebrate from "./assets/emoji _party popper_.png";

function App() {
  return (
    <div>
      <div className="relative top-16 pl-[112px]">
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
      <div className="grid h-[60rem] pb-16  grid-cols-12 overflow-hidden">
        <div className="self-center col-span-4">
          <div className="ml-3 w-[469px] h-[469px] bg-[#4BD6E4] flex flex-col pt-[129px] pl-[100px] rounded-full">
            <h2 className="font-bold text-white text-9xl">281+</h2>
            <p className="text-xl font-bold">Engaging Experiences </p>
            <p className="text-base w-[280px]">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="relative flex items-center justify-center h-10 bg-white rounded-full shadow-lg left-64 bottom-72 w-36">
              <p>World Expos</p>
            </div>
            <div className="relative flex items-center justify-center h-10 bg-white rounded-full shadow-lg right-20 top-8 w-28">
              <p>Sympossium</p>
            </div>
          </div>
          <div className="relative left-16 top-12 h-[104px] w-[104px] bg-[#4BD6E4] rounded-full" />
        </div>
        <div className="relative top-[60%] h-96 w-96 bg-[#4BD6E4] rounded-full pl-16 pt-[94px] col-span-3">
          <h2 className="font-bold text-white text-8xl">101+</h2>
          <p className="text-xl font-bold text-black">Partners and Vendors</p>
          <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="relative flex items-center justify-center w-24 h-10 bg-white rounded-full shadow-lg bottom-14 right-32">
            <p>Retreats</p>
          </div>
        </div>
        <div className="col-span-5">
          <div className="w-[695px] h-[695px] bg-[#FFF952] flex flex-col pl-[176px] rounded-full ">
            <div className="h-[152px] w-[153px] rounded-full bg-[#4BD6E4] relative top-[26%] right-[50%] -z-50" />
            <h2 className="font-bold text-black text-9xl">
              49000 <br /> Hours
            </h2>
            <p className="text-xl font-bold">Experience Organization</p>
            <p className="text-base w-[280px]">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="relative flex items-center justify-center w-32 h-10 bg-white rounded-full shadow-lg bottom-24 right-60">
              <p>Meetings</p>
            </div>
            <div className="relative flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg top-28 left-10">
              <img src={emoji} alt="Breifcase" />
            </div>
            <div className="relative flex items-center justify-center w-24 h-10 bg-white rounded-full shadow-lg left-[57%] bottom-8">
              <p>Seminars</p>
            </div>
          </div>
          <div className="pl-[176px] mt-16 space-y-2">
            <h2 className="text-xl font-bold">Made for you</h2>
            <p className="w-80">
              It’s all about your experience and creating your most memorable
              experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
