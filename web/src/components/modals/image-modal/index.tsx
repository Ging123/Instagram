import styles from "./styles.module.scss";
import Image from "next/image";

type Props = {
  close:() => void;
  src:string;
}

const ImageModal = ({ close, src }: Props) => {
  return (
    /*eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions*/
    <div 
      className={ styles.modal } 
      onClick={ close } 
      role="dialog"
    >
      <div className={ styles.modal_image }>
        <Image
          alt="Image"
          fill
          src={ src }
        />
      </div>
    </div>
  );
};

export default ImageModal;