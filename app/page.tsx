'use client';

import { useEffect, useState } from "react";
import { constant } from "./constant";
import CalcDialog from "./components/CalcDialog";
import CalcHeader from "./components/CalcHeader";
import DisplayScreen from "./components/DisplayScreen";

export default function Home() {
  const [display, setDisplay] = useState<string>("");
  const [themeName, setThemeName] = useState<'one' | 'two'>('one');
  // const [theme, setTheme] = useState<'one' | 'two' | null>(null);

  const mainBg = constant[themeName].bg;
  const displayBg = constant[themeName].dispayBg;
  const buttonBg = constant[themeName].buttonBg;
  const equalButtonBg = constant[themeName].equalButtonBg;
  const equalHoverBg = constant[themeName].equalHoverBg;
  const resetDelBg = constant[themeName].resetDelBg;
  const resetDelHoverBg = constant[themeName].resetDelHoverBg;
  const integerButtonBg = constant[themeName].integerButtonBg;
  const integerHoverBg = constant[themeName].integerHoverBg;


  useEffect(() => {
    const theme = localStorage.getItem('theme') as 'one' | 'two' | null;
    if (!theme) {
      localStorage.setItem('theme', 'one');
      setThemeName('one');
      return;
    }

    setThemeName(theme);
  }, []);

  const onClickButton = (value: string) => {
    if (value === "RESET") return setDisplay("");
    if (value === "DEL") return setDisplay(display.slice(0, -1));
    if (value === "=") {
      try {
        const result = eval(display.replace("x", "*"));
        setDisplay(result.toString());
      } catch {
        setDisplay("Error");
      }
      return;
    }

    const operators = ["+", "-", "x", "/"];
    const lastChar = display[display.length - 1];

    if (operators.includes(lastChar) && operators.includes(value)) {
      setDisplay(display.slice(0, -1) + value);
      return;
    }

    setDisplay(display + value);
  };

  const toggleTheme = (newTheme: 'one' | 'two') => {
    setThemeName(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div
      style={{
        backgroundColor: `#${mainBg}`,
      }}
      className='calc-container'
    >
      <div className="calc-wrapper">
        <CalcHeader
          themeName={themeName}
          toggleTheme={toggleTheme}
          buttonBg={buttonBg}
          equalButtonBg={equalButtonBg}
        />
        <DisplayScreen
          display={display}
          displayBg={displayBg}
          themeName={themeName}
        />
        <CalcDialog
          buttonBg={buttonBg}
          equalButtonBg={equalButtonBg}
          equalHoverBg={equalHoverBg}
          resetDelBg={resetDelBg}
          resetDelHoverBg={resetDelHoverBg}
          integerButtonBg={integerButtonBg}
          integerHoverBg={integerHoverBg}
          onClickButton={onClickButton}
        />
      </div>
    </div>
  );
};
