import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

const TypeFilter = ({ type, setType }) => {
  const Types = ["Devices", "Medicines", "Cosmetics"];

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ width: { md: 150, lg: 200, sm: 300 } }}>
      <Typography sx={{ mb: 1, fontWeight: "bold", paddingBottom: 2 }}>
        Type
      </Typography>
      <FormControl
        sx={{
          minWidth: { lg: 250, md: 150, sm: 250, xs: 300 },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#8b8989ff",
            },
            "&:hover fieldset": {
              borderColor: "var(--main-color)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--main-color)",
            },
          },
        }}
        size="small"
      >
        <InputLabel
          sx={{
            color: "#8b8989ff",
            "&.Mui-focused": {
              color: "var(--main-color)",
            },
          }}
          id="demo-select-small-label"
        >
          Type
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {Types.map((t) => (
            <MenuItem value={t}>{t}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TypeFilter;
