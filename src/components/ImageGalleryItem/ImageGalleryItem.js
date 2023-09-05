export const ImageGalleryItem = ({webformatURL, tags, webformatWidth}) => {
    return ( 
    <li>
        <img src={webformatURL} alt={tags}  width={webformatWidth}/>
    </li>)
   
}