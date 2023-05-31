import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchproduct } from "../store/slices/searchproductsSlice";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState();
  const [listproduct, setListproduct] = useState();
  const searchdata = useSelector((state) => state.searchproductdata);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    dispatch(searchproduct(searchInput));
    setListproduct(searchdata);
  }, [searchInput]);

  const onhandlerSubmit = (e) => {
    e.preventDefault();
    // navigate(`/products/searchlist?search=${searchInput}`);
    alert("Page is not available");
    setListproduct(false);
  };

  return (
    <div>
      <div className="mx-10">
        <form onSubmit={onhandlerSubmit}>
          <input
            type="text"
            placeholder="Search product"
            value={searchInput}
            onChange={onChangeHandler}
          />
        </form>
      </div>
      {searchInput?.length > 1 &&
        listproduct?.products?.map((items, index) => {
          // console.log("items>>>", items);
          return (
            <div key={index}>
              <ul>
                <li>
                  <Link
                    to={`/products/productdetail/${items.id}`}
                    onClick={() => setSearchInput("")}
                  >
                    {items.title}
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};
export default SearchProduct;
