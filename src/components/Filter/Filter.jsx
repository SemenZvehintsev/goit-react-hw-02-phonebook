export const Filter = ({filter, onChangeFilter}) => {
    return <>
    <label htmlFor="filter">Find contacts by name</label>
    <input type="text" id="filter" name="filter" value={filter} onChange={onChangeFilter}/>
    </>
}