import { forwardRef } from "react";

const CustomButton = forwardRef((propr, ref) => {
  return (
    <div>
      <button ref={ref}>Send</button>
    </div>
  );
});
export default CustomButton;
