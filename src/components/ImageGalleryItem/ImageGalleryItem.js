import { ModalWindow } from "components/Modal/modal"
import { GalleryItemsStyled } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({image}) => {
    return ( 
    <GalleryItemsStyled>
        <ModalWindow
        webformatURL={image.webformatURL}
        largeImageURL={image.largeImageURL}
        tag={image.tag}/>
    </GalleryItemsStyled>)
   
}