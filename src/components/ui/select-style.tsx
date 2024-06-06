import React, { Dispatch, FC, SetStateAction } from "react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";

interface SelectStyleProps {
  setStyle: Dispatch<SetStateAction<"business" | "casual" | "sporty">>;
  style: "business" | "casual" | "sporty";
}

export const SelectStyle: FC<SelectStyleProps> = ({ setStyle, style }) => {
  return (
    <div>
      <label className="block font-medium mb-2" htmlFor="style">
        Style
      </label>
      <RadioGroup
        className="flex items-center gap-4"
        defaultValue={style}
        id="style"
        onValueChange={setStyle}
      >
        <Label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="style-business"
        >
          <RadioGroupItem id="style-business" value="business" />
          Business
        </Label>

        <Label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="style-casual"
        >
          <RadioGroupItem id="style-casual" value="casual" />
          Casual
        </Label>
        <Label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="style-sporty"
        >
          <RadioGroupItem id="style-sporty" value="sporty" />
          Sporty
        </Label>
      </RadioGroup>
    </div>
  );
};
