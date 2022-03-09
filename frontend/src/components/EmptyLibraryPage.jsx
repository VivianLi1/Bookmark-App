import AddBookButton from "./AddBookButton";

const EmptyLibraryPage = () => {
    return (
        <div className="empty-library-page">
            <h3>your library is empty :(</h3>
            <AddBookButton />
        </div>
    );
}

export default EmptyLibraryPage;