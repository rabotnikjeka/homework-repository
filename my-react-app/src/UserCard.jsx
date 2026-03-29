import { WithLoading } from "./WithLoading";
function UserCard() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iusto
      repellendus, ducimus porro possimus eaque quis deleniti cumque tempore in!
      Quo error ullam fugit non blanditiis distinctio provident harum adipisci.
    </div>
  );
}

export default WithLoading(UserCard);
