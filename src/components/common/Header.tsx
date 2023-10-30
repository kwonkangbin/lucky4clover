import classNames from "classnames";

const Header = () => {
  return (
    <div
      className={classNames(
        "w-screen h-[60px] bg-gray-700 flex items-center px-40",
      )}
    >
      <div
        className={classNames(
          "flex justify-between items-center items-center gap-[8px]",
        )}
      >
        <p className={classNames("font-headline-4")}>DUTYFUL</p>
      </div>
    </div>
  );
};

export default Header;
