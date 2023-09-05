import { GalleryItemsStyled,
         GalleryItemsImg } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({image}) => {
    return ( 
    <GalleryItemsStyled>
        <GalleryItemsImg src={image.webformatURL} alt={image.tags}  width={image.webformatWidth}/>
    </GalleryItemsStyled>)
   
}