import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import Search from '../../assets/icons/Search.svg';


// eslint-disable-next-line react/prop-types
const SearchBar = ({returnToFirstPage}) => {
  const dispatch = useDispatch()

  const [name, setName] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    event.preventDefault();
    setName(value);

    if (value.trim() !== '') {
      dispatch(searchByName(value))
      .then(() => {returnToFirstPage()})
    }
  };

  return (
    <div className="mt-6 w-2/5 max-w-lg mx-auto h-14 flex justify-evenly items-center rounded-full p-6 border border-secondaryColor" >
      <img src={Search} alt="search" />
      <input
        className="w-full bg-transparent m-4 placeholder-DarkTextPurple/50 border border-none outline-none"
        type="text"
        placeholder="Busca tu evento"
        value={name}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default SearchBar;