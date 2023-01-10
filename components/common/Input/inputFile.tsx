import { Avatar, Button } from "@nextui-org/react";
import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import { DeleteIcon } from "../Icons";

interface PropsInputFile {
  name: string;
  text?: string;
  enableImage?:boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onDelete:() => void
}

export const InputFile: FC<PropsInputFile> = ({name,text='',onChange,enableImage=false,onDelete}) => {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null) as any;
  
  const previewImage = (e:FormEvent<HTMLInputElement>) => {
      const target= e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if(file){
      const reader = new FileReader();
      reader.onload = (e) => {
        const { result }:any = e.target;
        if (result) {
          setImage(result)
        }
      }
      reader.readAsDataURL(file);
    }else setImage(null);
  }
  const resetFileInput = () => {
      inputRef.current.value = null;
      setImage(null)
      const method = onDelete;
      method();
  };
  return (
    <>
      {enableImage && <div className="col-span-3  place-items-center ">
        <Avatar
          size="xl"
          src={image||'/img/image_add.svg'}
          color="gradient"
          text={text}
          bordered
          squared
          css={{ size: "$40" }}
        />
        <div className="relative  ">
        <div className="absolute h-14 w-14 -right-16 -top-10   ">
        <Button
        className="bg-white"
        type="button"
        onPress={resetFileInput}
        color='error'
        auto
        icon={<DeleteIcon fill="white"/>}
      />
        </div>
        </div>
      </div>
      }
      <div className=" col-span-3 md:col-start-2 md:col-span-1  ">
        <input
          ref={inputRef}
          name={name}
          onChange={(e)=>{onChange(e);previewImage(e)}}
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          accept="image/png,image/jpeg"
        />
      </div>
    </>
  );
};
