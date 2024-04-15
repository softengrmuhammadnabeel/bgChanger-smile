import { useEffect, useState } from 'react'


function App() {
  let [Color, setColor] = useState('black')
  // logic to getting the value of Mouse Moving
  let [Angle, setAngle] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      console.log(e.clientX, e.clientY)
      let MouseX = e.clientX;
      let MouseY = e.clientY;

      let deltaX = MouseX - (window.innerWidth / 2);
      let deltaY = MouseY - (window.innerHeight / 2);

      let distance = Math.atan2(deltaY, deltaX);
      let deg = distance * (180 / Math.PI);

      setAngle(deg - 180)
    })

  })


  return (
    <>
      <div className='w-[1024px] xl:w-full min-h-screen px-20 py-8 mx-auto my-auto grid' style={{ backgroundColor: Color }}>
        <div className='w-full flex justify-center items-center'>
          <h1 className='text-6xl text-black font-semibold tracking-tight font-sans relative top-8'>Welcome to Bg-Changer</h1>
        </div>

        {/* Eyes  */}
        <div className='w-full flex top-5 justify-center items-center gap-5 relative'>
          <div className='border-t-[10px]  border-black rounded-full'>

            <div className='bg-white gap-10 rounded-full flex items-center justify-center size-[130px] '>
              <div className='line  w-full duration-[100ms]' style={{ transform: `translate(115%,0%) rotate(${Angle}deg)` }}>
                <div className='bg-black p-2 rounded-full size-[50px]'>
                </div>

              </div>
            </div>
          </div>
          <div className='border-t-[10px]  border-black rounded-full'>

            <div className='bg-white   rounded-full flex items-center justify-center size-[130px] '>
              <div className='line  w-full duration-[100ms]' style={{ transform: `translate(-115%,0%) rotate(${Angle}deg)` }}>
                <div className='bg-black p-2 rounded-full size-[50px]'>
                </div>

              </div>
            </div>

          </div>
        </div>

      {/* smile  */}
        <div className='relative top-2'>
          <div className='border-b-[12px]  mx-auto w-[100px] border-black rounded-b-full'>
          {/* to give smooth round */}
            <div className='p-10'></div> 
          </div>
        </div>

        <div className='w-full h-[100px] bg-black self-end flex rounded-2xl items-center justify-center'>
          <div className='w-full grid grid-flow-col  justify-around'>

            <div className="color bg-[red] rounded-2xl text-lg px-6 py-2 font-bold font-sans  cursor-pointer hover:scale-110 duration-200" onClick={() => setColor('red')}>Red</div>
            <div className="color bg-[blue] rounded-2xl text-lg px-6 py-2 font-bold font-sans  cursor-pointer hover:scale-110 duration-200" onClick={() => setColor('blue')}>Blue</div>
            <div className="color bg-[green] rounded-2xl text-lg px-6 py-2 font-bold font-sans   cursor-pointer hover:scale-110 duration-200" onClick={() => setColor('green')}>Green</div>


            <div className="color bg-[yellow] rounded-2xl text-lg px-6 py-2 font-bold font-sans   cursor-pointer hover:scale-110 duration-200" onClick={() => setColor('yellow')}>Yellow</div>
            <div className="color bg-[orange] rounded-2xl text-lg px-6 py-2 font-bold font-sans   cursor-pointer hover:scale-110 duration-200" onClick={() => setColor('orange')}>Orange</div>
            <div className="color bg-[brown] rounded-2xl text-lg px-6 py-2 font-bold font-sans   cursor-pointer hover:scale-110 duration-200" onClick={() => setColor('brown')}>Brown</div>
            <div className="color bg-[purple] rounded-2xl text-lg px-6 py-2 font-bold font-sans   cursor-pointer hover:scale-110 duration-200" onClick={() => setColor('purple')}>Purple</div>
          </div>
        </div>
      </div>
    </>


  )
}

export default App
