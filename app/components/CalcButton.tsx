import { useState } from "react";

const CalcButton = ({
  btn,
  hoverColor,
  baseColor,
  textColor,
  textHoverColor,
  span,
  onClickButton,
} : any) => {
  const [isHovered, setIsHovered] = useState(false);

  const dynamicBgColor = isHovered ? hoverColor : baseColor;
  const dynamicTextColor = isHovered ? textHoverColor : textColor;

  return (
    <button
      style={{
        backgroundColor: `#${dynamicBgColor}`,
        color: `#${dynamicTextColor}`,
      }}
      className={`
        ${span}
        dialog-input
      `}
      onClick={() => onClickButton(btn)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {btn}
    </button>
  )
};

export default CalcButton;