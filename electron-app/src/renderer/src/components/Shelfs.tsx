import { useState } from 'react'
import Shelf from './Shelf'

export interface Book {
  name: string
}

function Shelfs(): JSX.Element {
  const [books, setBooks] = useState<Book[]>([])

  const addBook = (name: string): void => {
    console.log('added')
    setBooks([...books, { name }])
    console.log(books)
  }

  const sortedBooks = [...books].sort((a, b) => a.name.localeCompare(b.name))

  const booksByShelf: Record<string, Book[]> = sortedBooks.reduce(
    (acc, book) => {
      const firstLetter = book.name[0].toUpperCase()
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(book)
      return acc
    },
    {} as Record<string, Book[]>
  )

  return (
    <div className="h-full w-full p-5 grid grid-rows-26">
      {Object.keys(booksByShelf)
        .sort()
        .map((letter) => (
          <Shelf key={letter} letter={letter} books={booksByShelf[letter]} />
        ))}

      <button onClick={() => addBook('Bok')}>Add Book</button>
    </div>
  )
}

export default Shelfs
