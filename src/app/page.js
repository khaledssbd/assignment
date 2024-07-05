import { IoIosLock } from 'react-icons/io';

export default function Home() {
  return (
    <main className="bg-[#323232]">
      <header className="h-20">
        <h4>Course</h4>
      </header>
      <div className="grid grid-cols-3 h-screen gap-20">
        <div className="col-span-2 flex flex-col justify-center items-center bg-[#222124] h-1/2 w-full">
          <h3 className="text-2xl">Course 3</h3>
          <h3>Topic 2</h3>
        </div>
        <div className="bg-[#222124] h-2/3 w-full">
          <div className="px-10 pt-10 pb-2 space-y-2">
            <h3>01. Course 1</h3>
            <h3>02. Course 2</h3>
            <h3>
              <details>
                <summary className="flex justify-between">
                  03. Course 3<h4>Active</h4>
                </summary>
                <ul class="bg-base-100 rounded-t-none p-2 space-y-2">
                  <li>
                    <a>3.1. Topic 1</a>
                  </li>
                  <li>
                    <a>3.2. Topic 2</a>
                  </li>
                  <li>
                    <a>3.3. Topic 3</a>
                  </li>
                </ul>
              </details>
            </h3>
          </div>
          <div className="space-y-2 px-4">
            <h3 className="flex gap-2 items-center text-[#848484]">
              <IoIosLock /> 04. Course 4
            </h3>
            <h3 className="flex gap-2 items-center text-[#848484]">
              <IoIosLock /> 05. Course 5
            </h3>
            <h3 className="flex gap-2 items-center text-[#848484]">
              <IoIosLock /> 06. Course 6
            </h3>
            <h3 className="flex gap-2 items-center text-[#848484]">
              <IoIosLock /> 07. Course 7
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
