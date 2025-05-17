import {
  Img,
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectItems,
  Heading,
} from "@/components/ui";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
  lineimage1?: string;
  listingname1?: React.ReactNode;
  group272?: boolean;
  lineimage2?: string;
  listingname2?: React.ReactNode;
  group280?: boolean;
  lineimage3?: string;
  listingname3?: React.ReactNode;
  group276?: boolean;
  lineimage4?: string;
  listingname4?: React.ReactNode;
  group284?: boolean;
  lineimage5?: string;
  listingname5?: React.ReactNode;
  group274?: boolean;
  lineimage6?: string;
  listingname6?: React.ReactNode;
  group282?: boolean;
  lineimage7?: string;
  listingname7?: React.ReactNode;
  group278?: boolean;
  lineimage8?: string;
  listingname8?: React.ReactNode;
  group286?: boolean;
  lineimage9?: string;
  listingname9?: React.ReactNode;
  group288?: boolean;
}

export default function VisibilityList({
  lineimage1,
  listingname1,
  group272,
  lineimage2,
  listingname2,
  group280,
  lineimage3,
  listingname3,
  group276,
  lineimage4,
  listingname4,
  group284,
  lineimage5,
  listingname5,
  group274,
  lineimage6,
  listingname6,
  group282,
  lineimage7,
  listingname7,
  group278,
  lineimage8,
  listingname8,
  group286,
  lineimage9,
  listingname9,
  group288,
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[268px] gap-6`}>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex h-[60px] items-center border-[3px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_47.svg)] bg-cover bg-no-repeat">
          {!!lineimage1 ? (
            <Img src={lineimage1} width={104} height={56} alt="Line 48" className="h-[56px] w-[98%] object-contain" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {!!listingname1 ? (
            <Heading as="p" className="ml-1 text-[16px] font-bold">
              {listingname1}
            </Heading>
          ) : null}
          <Select name="Group 272">
            {!!group272 ? (
              <SelectTrigger
                shape="round"
                indicator={
                  <Img
                    src="img_dashiconsarrowdown.svg"
                    width={30}
                    height={30}
                    alt="Dashicons-arrow-down"
                    className="h-[30px] w-[30px]"
                  />
                }
                className="gap-4 self-stretch rounded-[5px] border-[3px] border-solid border-black-900"
              >
                <SelectValue placeholder={`Visibility`} />
              </SelectTrigger>
            ) : null}
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex h-[60px] items-center border-[3px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_47.svg)] bg-cover bg-no-repeat">
          {!!lineimage2 ? (
            <Img src={lineimage2} width={104} height={56} alt="Line 48" className="h-[56px] w-[98%] object-contain" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {!!listingname2 ? (
            <Heading as="p" className="ml-1 text-[16px] font-bold">
              {listingname2}
            </Heading>
          ) : null}
          <Select name="Group 280">
            {!!group280 ? (
              <SelectTrigger
                shape="round"
                indicator={
                  <Img
                    src="img_dashiconsarrowdown.svg"
                    width={30}
                    height={30}
                    alt="Dashicons-arrow-down"
                    className="h-[30px] w-[30px]"
                  />
                }
                className="gap-4 self-stretch rounded-[5px] border-[3px] border-solid border-black-900"
              >
                <SelectValue placeholder={`Visibility`} />
              </SelectTrigger>
            ) : null}
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex h-[60px] items-center border-[3px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_47.svg)] bg-cover bg-no-repeat">
          {!!lineimage3 ? (
            <Img src={lineimage3} width={104} height={56} alt="Line 48" className="h-[56px] w-[98%] object-contain" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {!!listingname3 ? (
            <Heading as="p" className="ml-1 text-[16px] font-bold">
              {listingname3}
            </Heading>
          ) : null}
          <Select name="Group 276">
            {!!group276 ? (
              <SelectTrigger
                shape="round"
                indicator={
                  <Img
                    src="img_dashiconsarrowdown.svg"
                    width={30}
                    height={30}
                    alt="Dashicons-arrow-down"
                    className="h-[30px] w-[30px]"
                  />
                }
                className="gap-4 self-stretch rounded-[5px] border-[3px] border-solid border-black-900"
              >
                <SelectValue placeholder={`Visibility`} />
              </SelectTrigger>
            ) : null}
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex h-[60px] items-center border-[3px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_47.svg)] bg-cover bg-no-repeat">
          {!!lineimage4 ? (
            <Img src={lineimage4} width={104} height={56} alt="Line 48" className="h-[56px] w-[98%] object-contain" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {!!listingname4 ? (
            <Heading as="p" className="ml-1 text-[16px] font-bold">
              {listingname4}
            </Heading>
          ) : null}
          <Select name="Group 284">
            {!!group284 ? (
              <SelectTrigger
                shape="round"
                indicator={
                  <Img
                    src="img_dashiconsarrowdown.svg"
                    width={30}
                    height={30}
                    alt="Dashicons-arrow-down"
                    className="h-[30px] w-[30px]"
                  />
                }
                className="gap-4 self-stretch rounded-[5px] border-[3px] border-solid border-black-900"
              >
                <SelectValue placeholder={`Visibility`} />
              </SelectTrigger>
            ) : null}
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex h-[60px] items-center border-[3px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_47.svg)] bg-cover bg-no-repeat">
          {!!lineimage5 ? (
            <Img src={lineimage5} width={104} height={56} alt="Line 48" className="h-[56px] w-[98%] object-contain" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {!!listingname5 ? (
            <Heading as="p" className="ml-1 text-[16px] font-bold">
              {listingname5}
            </Heading>
          ) : null}
          <Select name="Group 274">
            {!!group274 ? (
              <SelectTrigger
                shape="round"
                indicator={
                  <Img
                    src="img_dashiconsarrowdown.svg"
                    width={30}
                    height={30}
                    alt="Dashicons-arrow-down"
                    className="h-[30px] w-[30px]"
                  />
                }
                className="gap-4 self-stretch rounded-[5px] border-[3px] border-solid border-black-900"
              >
                <SelectValue placeholder={`Visibility`} />
              </SelectTrigger>
            ) : null}
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex h-[60px] items-center border-[3px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_47.svg)] bg-cover bg-no-repeat">
          {!!lineimage6 ? (
            <Img src={lineimage6} width={104} height={56} alt="Line 48" className="h-[56px] w-[98%] object-contain" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {!!listingname6 ? (
            <Heading as="p" className="ml-1 text-[16px] font-bold">
              {listingname6}
            </Heading>
          ) : null}
          <Select name="Group 282">
            {!!group282 ? (
              <SelectTrigger
                shape="round"
                indicator={
                  <Img
                    src="img_dashiconsarrowdown.svg"
                    width={30}
                    height={30}
                    alt="Dashicons-arrow-down"
                    className="h-[30px] w-[30px]"
                  />
                }
                className="gap-4 self-stretch rounded-[5px] border-[3px] border-solid border-black-900"
              >
                <SelectValue placeholder={`Visibility`} />
              </SelectTrigger>
            ) : null}
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex h-[60px] items-center border-[3px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_47.svg)] bg-cover bg-no-repeat">
          {!!lineimage7 ? (
            <Img src={lineimage7} width={104} height={56} alt="Line 48" className="h-[56px] w-[98%] object-contain" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {!!listingname7 ? (
            <Heading as="p" className="ml-1 text-[16px] font-bold">
              {listingname7}
            </Heading>
          ) : null}
          <Select name="Group 278">
            {!!group278 ? (
              <SelectTrigger
                shape="round"
                indicator={
                  <Img
                    src="img_dashiconsarrowdown.svg"
                    width={30}
                    height={30}
                    alt="Dashicons-arrow-down"
                    className="h-[30px] w-[30px]"
                  />
                }
                className="gap-4 self-stretch rounded-[5px] border-[3px] border-solid border-black-900"
              >
                <SelectValue placeholder={`Visibility`} />
              </SelectTrigger>
            ) : null}
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex h-[60px] items-center border-[3px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_47.svg)] bg-cover bg-no-repeat">
          {!!lineimage8 ? (
            <Img src={lineimage8} width={104} height={56} alt="Line 48" className="h-[56px] w-[98%] object-contain" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {!!listingname8 ? (
            <Heading as="p" className="ml-1 text-[16px] font-bold">
              {listingname8}
            </Heading>
          ) : null}
          <Select name="Group 286">
            {!!group286 ? (
              <SelectTrigger
                shape="round"
                indicator={
                  <Img
                    src="img_dashiconsarrowdown.svg"
                    width={30}
                    height={30}
                    alt="Dashicons-arrow-down"
                    className="h-[30px] w-[30px]"
                  />
                }
                className="gap-4 self-stretch rounded-[5px] border-[3px] border-solid border-black-900"
              >
                <SelectValue placeholder={`Visibility`} />
              </SelectTrigger>
            ) : null}
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 self-stretch">
        <div className="flex h-[60px] items-center border-[3px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_47.svg)] bg-cover bg-no-repeat">
          {!!lineimage9 ? (
            <Img src={lineimage9} width={104} height={56} alt="Line 48" className="h-[56px] w-[98%] object-contain" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5">
          {!!listingname9 ? (
            <Heading as="p" className="ml-1 text-[16px] font-bold">
              {listingname9}
            </Heading>
          ) : null}
          <Select name="Group 288">
            {!!group288 ? (
              <SelectTrigger
                shape="round"
                indicator={
                  <Img
                    src="img_dashiconsarrowdown.svg"
                    width={30}
                    height={30}
                    alt="Dashicons-arrow-down"
                    className="h-[30px] w-[30px]"
                  />
                }
                className="gap-4 self-stretch rounded-[5px] border-[3px] border-solid border-black-900"
              >
                <SelectValue placeholder={`Visibility`} />
              </SelectTrigger>
            ) : null}
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
