import React, { Dispatch, FC, SetStateAction } from "react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";

interface SelectGenderProps {
  setGender: Dispatch<SetStateAction<string>>;
  gender: string;
}

export const SelectGender: FC<SelectGenderProps> = ({ setGender, gender }) => {
  return (
    <div>
      <label className="block font-medium mb-2" htmlFor="gender">
        Gender
      </label>
      <RadioGroup
        className="flex items-center gap-4"
        defaultValue="female"
        id="gender"
        onValueChange={(value) => console.log(value)}
      >
        <Label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="gender-female"
        >
          <RadioGroupItem id="gender-female" value="female" />
          Female
        </Label>

        <Label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="gender-male"
        >
          <RadioGroupItem id="gender-male" value="male" />
          Male
        </Label>
        <Label
          className="flex items-center gap-2 cursor-pointer"
          htmlFor="gender-other"
        >
          <RadioGroupItem id="gender-other" value="other" />
          Other
        </Label>
      </RadioGroup>
    </div>
  );
};
