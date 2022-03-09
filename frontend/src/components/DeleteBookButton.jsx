const DeleteBookButton = ({onClick, isDeleting}) => {

    return (
        <div className="delete-book-button">
            <button onClick={onClick} disabled={isDeleting}>
                X
            </button>
        </div>
    )
}

export default DeleteBookButton;