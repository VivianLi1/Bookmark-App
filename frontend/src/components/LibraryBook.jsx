import { useEffect, useState } from "react";
import { Rating } from '@mui/material';
import ReadButton from "./ReadButton";
import DeleteBookButton from "./DeleteBookButton";
import axios from "axios";

const LibraryBook = ({ book, deleteFromBooks }) => {

    const [read, setRead] = useState(book.read);
    const [rating, setRating] = useState(book.rating);

	const [isDeleting, setIsDeleting] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	useEffect(() => {
		if(isDeleting){
			axios({
				method: "delete",
				url: `https://secure-anchorage-65790.herokuapp.com/https://bookmark-backend-app.herokuapp.com/users/${book.user.id}/books/${book.id}`,
			})
				.then((response) => {
					setIsDeleting(false);
					deleteFromBooks(book);
					console.log(response.data);
				})
				.catch((error) => {
					setIsDeleting(false);
					console.log(error);
				});
		}
	}, [isDeleting]);

	useEffect(() => {
		if(isUpdating){
			axios({
				method: "put",
				url: `https://secure-anchorage-65790.herokuapp.com/https://bookmark-backend-app.herokuapp.com/users/${book.user.id}/books/${book.id}`,
				data: {
					id: book.id,
                    title: book.title,
                    author: book.author,
                    coverId: book.coverId,
                    hasRead: read,
                    publishYear: book.publishYear,
                    rating: rating,
                    user_id: book.user.id
				}
			})
				.then((response) => {
					setIsUpdating(false);
					console.log(response.data);
				})
				.catch((error) => {
					setIsUpdating(false);
					console.log(error);
				});
		}
	}, [isUpdating]);


	const deleteBook = () => {
		setIsDeleting(true);
	}

	const updateBook = () => {
		setIsUpdating(true);
	}

	return (
		<div className="library-book-div">
		<div className="library-book">
			<div className="library-book-image">
				<img
					src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
					alt={book.title}
				/>
			</div>
			<div className="library-book-info">
				<div className="book-title"><h3>{book.title}</h3></div>
				<div className="book-author"><h4>{book.author}</h4></div>
				<div className="book-year"><p>pub. {book.publishYear}</p></div>
			</div>
			<div className="library-book-custom">
				<div>
					<ReadButton onClick={() => {
						setRead(!read); 
						updateBook();
					}} 
						read={read} 
						disabled={isUpdating}
					/>
				</div>
				<div>
					<Rating
						name="simple-controlled"
						value={rating}
						disabled={isUpdating}
						onChange={(event, newValue) => {
							setRating(newValue);
							updateBook();
						}}
					/>
				</div>
			</div>
			<i className="fa-solid fa-xmark"></i>
			<DeleteBookButton onClick={deleteBook} isDeleting={isDeleting}/>
		</div>
		<hr></hr>
		</div>
	);
};

export default LibraryBook;
