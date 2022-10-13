import { settingStateFunc } from "../../../store/modules/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function RoomBook() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (settingState === true) {
      dispatch(settingStateFunc(false));
    }
  }, []);
  
  return (
    <>
      <div>RoomBook</div>
    </>
  );
}
