import { AiOutlinePicture } from "react-icons/ai";
import styles from "./styles.module.scss";

import { useRef } from "react";

type changeEvent = React.ChangeEvent<HTMLInputElement>;

type Props = {
  className?:string;
  id:string;
  maxLength?:number;
  onChange:(e:changeEvent) => void;
  placeholder?:string;
  value:string;
}

const ChatInput = (props:Props) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const selectBrowserFile = () => fileRef.current?.click();
  
  return (
    <div className={ styles.input_container }>

      <label hidden htmlFor={ props.id }>
        Type your message here
      </label>

      <input
        className={ styles.input }
        id={ props.id }
        onChange={ props.onChange }
        placeholder={ props.placeholder }
        maxLength={ props.maxLength }
        value={ props.value }
      />

      <label hidden htmlFor="file">
        Select a file
      </label>

      <input 
        hidden
        id="file" 
        ref={ fileRef } 
        type="file"
      />

      <AiOutlinePicture 
        className={ styles.picture_icon } 
        fontSize={ 25 }
        onClick={ () => selectBrowserFile() }
      />
    </div>
  );
};

export default ChatInput;