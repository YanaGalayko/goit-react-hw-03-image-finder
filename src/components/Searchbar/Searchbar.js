export const Searchbar = ({onSubmit}) => {
    return (
        <header>
    <form onSubmit={evt => onSubmit(evt)}>
    <button type="submit">
      <span>Search</span>
    </button>

    <input
      name="query"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    </form>
       </header>
    )
}