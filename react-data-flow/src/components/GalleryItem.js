export default function GalleryItem(props) {
    return (
        <div className="gallery__item">
            <img alt="fruit" src={props.src}/>
        </div>
    );
}