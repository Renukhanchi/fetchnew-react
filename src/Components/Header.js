import React from "react";

const Header = (props) => {
    const {search,onInputChange} = props;
    return (
        <div className="jumbotron">
            <h1 className="display-1">
            <span className="material-symbols-rounded ">fastfood</span>
             All Time News
            </h1>
            <div className="input-group w-50 mx-auto">
  <input type="text" className="form-control " value={search} onChange={onInputChange} placeholder="Search Your Recipe..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <button className="btn btn-dark">Search Recipe</button>
</div>
        </div>
    );
}

export default Header ;