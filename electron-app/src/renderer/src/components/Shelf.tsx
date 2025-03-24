import { Book } from './Shelfs'

interface ShelfData {
  letter: string
  books: Book[]
}

function Shelf({ letter, books }: ShelfData): JSX.Element {
  return (
    <div className="flex flex-row gap-2 border-b-2 border-[#964B00] align-items-center">
      <h2>{letter}:</h2>
      {books.map((book, index) => (
        <div key={index}>{book.name}</div>
      ))}
    </div>
  )
}

export default Shelf
