import { constant } from "../constant";

const CalcHeader = ({
  themeName,
  toggleTheme,
  buttonBg,
  equalButtonBg,
}: {
  themeName: 'one' | 'two';
  toggleTheme: (newTheme: 'one' | 'two') => void;
  buttonBg: string;
  equalButtonBg: string;
}) => {
  return (
    <div className="calc-header">
      <h1
        style={{
          color: `#${constant[themeName]?.titleColor}`,
        }}
        className='text-3xl font-bold'
      >
        Calc
      </h1>
      <div className="calc-toggle-container">
          <span
            className="text-xs font-bold"
            style={{ color: `#${constant[themeName]?.titleColor}` }}
          >
            {themeName === 'one' ? 'Dark' : 'Light'}
          </span>
          <div 
              className="calc-toggle-wrapper" 
              style={{ backgroundColor: `#${buttonBg}` }}
              onClick={() => toggleTheme(themeName === 'one' ? 'two' : 'one')}
          >
              <div
                  className={`calc-toggle`}
                  style={{
                      backgroundColor: `#${equalButtonBg}`,
                      transform: `translateX(${themeName === 'one' ? '0' : 'calc(100% + 14px)'})`,
                  }}
              />
          </div>
        </div>
    </div>
  );
};

export default CalcHeader;