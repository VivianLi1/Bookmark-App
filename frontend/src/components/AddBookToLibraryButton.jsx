const AddBookToLibraryButton = ({ onClick }) => {

    return(
        <div className="add-book-to-library-button">
            <button onClick={onClick}>
                <i className="far fa-bookmark"></i>
            </button>
        </div>
    );
};

export default AddBookToLibraryButton;