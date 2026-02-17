import { useDispatch, useSelector } from "react-redux";
import { hidePopup } from "../redux/features/popupSlice";
import { useEffect } from "react";

function Popup() {
  const dispatch = useDispatch();
  const { msg, visible } = useSelector(state => state.PopupBox);  

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        dispatch(hidePopup());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);


  return (
    <>

      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-60 mt-2 w-72 text-center
        flex justify-center items-center text-white
        alert bg-black shadow-lg
        transition-all duration-500 transform
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
      >
        <span className="text-[16px]">{msg}</span>
      </div>
    </>
  );
}

export default Popup;
