import React from 'react'
import CalcButton from './CalcButton';
import { buttons } from '../constant';

export default function CalcDialog({
  buttonBg,
  equalButtonBg,
  equalHoverBg,
  resetDelBg,
  resetDelHoverBg,
  integerButtonBg,
  integerHoverBg,
  onClickButton
}: {
  buttonBg: string;
  equalButtonBg: string;
  equalHoverBg: string;
  resetDelBg: string;
  resetDelHoverBg: string;
  integerButtonBg: string;
  integerHoverBg: string;
  onClickButton: (value: string) => void;
}) {
  return (
    <div className={`grid grid-cols-4 gap-5 flex-1 bg-[#${buttonBg}] border-2 border-[#${buttonBg}] rounded-xl p-7`}>
      {buttons.map((btn, index) => {
        const isEqualSign = index === buttons.length - 1;
        const isReset = index === buttons.length - 2;
        const isDel = index === 3;

        let baseColor, hoverColor, textColor, textHoverColor, span = '';

        if (isEqualSign) {
          baseColor = equalButtonBg;
          hoverColor = equalHoverBg;
          textColor = 'fff';
          span = 'col-span-2 text-md md:text-xl';
        } else if (isReset) {
          baseColor = resetDelBg;
          hoverColor = resetDelHoverBg;
          textColor = textColor;
          span = 'col-span-2 text-md md:text-xl py-2'
        } else if (isDel) {
          baseColor = resetDelBg;
          hoverColor = resetDelHoverBg;
          textColor = 'fff';
          span = 'text-md md:text-xl py-2';
        } else {
          baseColor = integerButtonBg;
          hoverColor = integerHoverBg;
          textColor = '444b5a';
          span = 'text-2xl md:text-4xl'
        }

        return (
          <CalcButton
            key={index}
            btn={btn}
            onClickButton={onClickButton}
            baseColor={baseColor}
            hoverColor={hoverColor}
            textColor={textColor}
            textHoverColor={textHoverColor}
            span={span}
          />
        )
      })}
    </div>
  )
}
