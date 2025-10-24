import { constant } from "../constant";

const DisplayScreen = ({
  display,
  displayBg,
  themeName,
}: {
  display: string;
  displayBg: string;
  themeName: 'one' | 'two';
}) => {
  return (
    <div className={`flex border-[#${displayBg}] bg-[#${displayBg}] border-2 h-28 rounded-xl`}>
      <input
        type="text"
        style={{
          color: `#${constant[themeName]?.titleColor}`,
        }}
        className="display-input"
        readOnly
        value={display}
      />
    </div>
  );
};

export default DisplayScreen;