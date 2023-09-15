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

export default function Brand() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openBrand, setOpenBrand] = React.useState(false);
  const [brand, setBrand] = React.useState({
    'APPLE': false,
    'SAMSUNG': false,
    'WALTON': false,
    'INFINITY': false,
    "ZARA": false,
    "PRAN": false,
  });

  const firstUpdate = React.useRef(true);
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      let params = searchParams.get("brand");
      if (params) {
        let valArray = params.split("_");
        for (let i in valArray) {
          if (brand[valArray[i]] !== undefined) {
            setBrand((prev) => {
              return { ...prev, [valArray[i]]: true };
            });
          }
        }
      }
      return;
    }

    let brandQuery = "";
    for (let i in brand) {
      if (brand[i]) {
        brandQuery = brandQuery + `${i}_`;
      }
    }
    if (brandQuery === "") {
      searchParams.delete("brand");
    } else {
      searchParams.set("brand", brandQuery);
    }
    setSearchParams(searchParams);
  }, [brand, searchParams, setSearchParams]);

  return (
    <>
      <ListItemButton
        style={ListItemstyle}
        onClick={() => setOpenBrand(!openBrand)}
      >
        <ListItemText
          disableTypography
          sx={{
            fontSize: "1.1rem",
            fontWeight: "600",
          }}
          primary="Brand"
        />
        {openBrand ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openBrand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            onChange={(e) => {
              setBrand({
                ...brand,
                APPLE: !brand["APPLE"],
              });
            }}
          >
            <FilterCheckBox label="APPLE" checked={brand["APPLE"]} />
          </ListItemButton>
          <ListItemButton
            onChange={(e) => {
              setBrand({
                ...brand,
                SAMSUNG: !brand["SAMSUNG"],
              });
            }}
          >
            <FilterCheckBox label="SAMSUNG" checked={brand["SAMSUNG"]} />
          </ListItemButton>

          <ListItemButton
            onChange={(e) => {
              setBrand({
                ...brand,
                WALTON: !brand["WALTON"],
              });
            }}
          >
            <FilterCheckBox label="WALTON" checked={brand["WALTON"]} />
          </ListItemButton>

          <ListItemButton
            onChange={(e) => {
              setBrand({
                ...brand,
                INFINITY: !brand["INFINITY"],
              });
            }}
          >
            <FilterCheckBox label="INFINITY" checked={brand["INFINITY"]} />
          </ListItemButton>

          <ListItemButton
            onChange={(e) => {
              setBrand({
                ...brand,
                ZARA: !brand["ZARA"],
              });
            }}
          >
            <FilterCheckBox label="ZARA" checked={brand["ZARA"]} />
          </ListItemButton>
          <ListItemButton
            onChange={(e) => {
              setBrand({
                ...brand,
                PRAN: !brand["PRAN"],
              });
            }}
          >
            <FilterCheckBox label="PRAN" checked={brand["PRAN"]} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
