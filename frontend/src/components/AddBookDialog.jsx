import Dialog from '@mui/material/Dialog';

const AddBookDialog = (props) => {

    const { onClose, selectedValue, open, book } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };
  
  
    return (
      <Dialog onClose={handleClose} open={open}>
            <div className='add-book-dialog'>
                <h3>{book.title} has been added to your library!</h3>
            </div>
      </Dialog>
    );
}

export default AddBookDialog;