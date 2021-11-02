// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs, { tabsClasses } from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import '../App.css';

// export default function ScrollableTabsButtonVisible() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ flexGrow: 1, maxWidth: 480, bgcolor: 'background.paper ' , margin : '0px auto' , marginTop : 15 , marginBottom : 100  }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons
//         aria-label="visible arrows tabs example"
//         sx={{
//           [`& .${tabsClasses.scrollButtons}`]: {
//             '&.Mui-disabled': { opacity: 0.8 },
//           },
//         }}
//       >
//         <Tab label="Item One" />
//         <Tab label="Item Two" />
//         <Tab label="Item Three" />
//         <Tab label="Item Four" />
//         <Tab label="Item Five" />
//         <Tab label="Item Six" />
//         <Tab label="Item Seven" />
//       </Tabs>
//     </Box>
//   );
// }


import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}

    >
      {value === index && (
        <Box sx={{ p: 3   }} >
          <Typography>{children}</Typography>
        </Box>
      )}    
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 1200 ,  margin : '0px auto' , marginTop : 15 , marginBottom : 100 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Jiu Jitsu" {...a11yProps(0)} />
          <Tab label="Judo" {...a11yProps(1)} />
          <Tab label="Karate" {...a11yProps(2)} />
          <Tab label="Taekwondo" {...a11yProps(3)} />
          <Tab label="Boxing" {...a11yProps(4)} />
          <Tab label="MMA" {...a11yProps(5)} />
          <Tab label="Sports wear" {...a11yProps(6)} />
          <Tab label="Apparel" {...a11yProps(7)} />
          <Tab label="Sports Gloves" {...a11yProps(8)} />
          <Tab label="Accessoroes" {...a11yProps(9)} />

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={9} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={10   } dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={11 } dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

