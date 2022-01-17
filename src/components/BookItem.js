const BookItem = () => (
  <article className="book-item">
    <div className="book-info-container">
      <p>Action</p>
      <h2 className="book-title">The Hunger Games</h2>
      <h4 className="book-author">Suzanne Collins</h4>
      <div className="book-functions">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="current-chapter">
      <h4>CURRENT CHAPTER</h4>
      <h5>chapter 17</h5>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </article>
);

export default BookItem;
