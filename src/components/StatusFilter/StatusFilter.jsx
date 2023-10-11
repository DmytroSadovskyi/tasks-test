import React from "react";
import Button from "../Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../../redux/constants";
import { useSelector } from "react-redux";
import { getStatusFilter } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/actions";

const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        className={
          filter === statusFilters.all ? css.selectedButton : css.button
        }
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        className={
          filter === statusFilters.active ? css.selectedButton : css.button
        }
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        className={
          filter === statusFilters.completed ? css.selectedButton : css.button
        }
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
