import { forwardRef } from "react";

const CustomButton = forwardRef((proprs, ref) => {
  return (
    <div>
      <button ref={ref}>Send</button>
    </div>
  );
});
export default CustomButton;
