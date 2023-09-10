import React from "react";
import { useSearchParams } from "react-router-dom";
import { ListItemButton, ListItemText, Collapse, List } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FilterCheckBox from "./FilterCheckBox";

const ListItemstyle = {
  borderBottom: "1px solid #CCCCCC",
  paddingTop: "20px",
  paddingBottom: "20px",
};

export default function Category() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openCategory, setOpenCategory] = React.useState(false);
  const [category, setCategory] = React.useState({
    Electronics: false,
    Health: false,
    Mens: false,
    Womens: false,
    Beds: false,
    Chairs: false,
  });

  const firstUpdate = React.useRef(true);
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      let params = searchParams.get("category");
      if (params) {
        let valArray = params.split("_");
        for (let i in valArray) {
          if (category[valArray[i]] !== undefined) {
            setCategory((prev) => {
              return { ...prev, [valArray[i]]: true };
            });
          }
        }
      }
      return;
    }

    let categoryQuery = "";
    for (let i in category) {
      if (category[i]) {
        categoryQuery = categoryQuery + `${i}_`;
      }
    }

    if (categoryQuery === "") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryQuery);
    }
    setSearchParams(searchParams);
  }, [category, searchParams, setSearchParams]);

  return (
    <>
      <ListItemButton
        style={ListItemstyle}
        onClick={() => setOpenCategory(!openCategory)}
      >
        <ListItemText
          disableTypography
          sx={{
            fontSize: "1.1rem",
            fontWeight: "600",
          }}
          primary="Category"
        />
        {openCategory ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCategory} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* Electronics */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                Electronics: !category.Electronics,
              });
            }}
          >
            <FilterCheckBox
              label="Electronics"
              checked={category.Electronics}
            />
          </ListItemButton>
          {/* Health */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                Health: !category.Health,
              });
            }}
          >
            <FilterCheckBox label="Health" checked={category.Health} />
          </ListItemButton>

          {/* Mens */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                Mens: !category.Mens,
              });
            }}
          >
            <FilterCheckBox label="Mens" checked={category.Mens} />
          </ListItemButton>

          {/* Womens */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                Womens: !category["Womens"],
              });
            }}
          >
            <FilterCheckBox label="Womens" checked={category["Womens"]} />
          </ListItemButton>

          {/* Groceries */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                Groceries: !category.Groceries,
              });
            }}
          >
            <FilterCheckBox label="Groceries" checked={category["Groceries"]} />
          </ListItemButton>

          {/* Life-Style */}
          <ListItemButton
            onChange={(e) => {
              setCategory({
                ...category,
                "Life-Style": !category["Life-Style"],
              });
            }}
          >
            <FilterCheckBox
              label="Life-Style"
              checked={category["Life-Style"]}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
