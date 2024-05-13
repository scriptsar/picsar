interface SidebarProps {
  onDownloadCropClick: () => void; // Adjust the type according to your function's signature
  hiddenAnchorRef: React.RefObject<HTMLAnchorElement>;
}
const Sidebar = ({ onDownloadCropClick, hiddenAnchorRef }: SidebarProps) => {
  return (
    <div
      className="mt-2 bg-gray-800 hidden h-full  border-r lg:block border-r-irGray-200 dark:border-r-darkSurface-600 dark:bg-darkSurface-100 dark:text-white"
      style={{ minWidth: "250px", width: "360px", maxWidth: "360px" }}
    >
      <div className="flex-grow w-full overflow-y-auto scroll">
        <div className="w-full max-h-full pt-6 scroll select-none flex flex-col h-full">
          <div className="px-6 flex-grow-0 flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="capitalize text-2xl  font-semibold whitespace-nowrap">
                Crop Rectangle
              </div>
            </div>
          </div>
          <div className="h-full max-h-full overflow-y-hidden w-full">
            <div className="flex flex-col h-full max-h-full">
              <div className="flex-grow overflow-y-scroll scroll lg:gap-8 px-6 pt-6 pb-6">
                <p>width</p>
                <input type="text" className="" />
                <span>width</span>
                <input type="text" className="" />
                <p>aspect ration</p>
                <select name="" id="">
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>

                <p>crop postion </p>
                <p>position x</p>
                <input type="text" name="" id="" />
                <p>position y</p>
                <input type="text" name="" id="" />

                {/* need to restyle the default scroll bar  */}
              </div>
              <div className="flex-shrink-0 w-full flex py-2 gap-2 border-t border-t-irGray-200 dark:border-t-darkSurface-600 px-2">
                <button className=" hover:bg-blue-800 text-white  bg-blue-500  py-2 px-4 rounded-md" onClick={onDownloadCropClick}>download</button>
                <a
                  href="#hidden"
                  ref={hiddenAnchorRef}
                  download
                  style={{
                    position: "absolute",
                    top: "-200vh",
                    visibility: "hidden",
                  }}
                >
                  Hidden download
                </a>
                <button className="hover:bg-orange-800 py-2 px-4 rounded-md bg-orange-600">reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
