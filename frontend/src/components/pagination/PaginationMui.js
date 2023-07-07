// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { makeStyles } from '@mui/styles';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';

// const useStyles = makeStyles({
//   pagination: {
//     '& .MuiPagination-ul': {
//       justifyContent: 'center',
//       margin: '0 auto',
//       padding: '10px 0',
//       '& .Mui-selected': {
//         color: '#5856d6',
//         backgroundColor: '#5856d6',
//         '&:hover': {
//           backgroundColor: '#5856d6',
//         },
//         '&:not(.Mui-disabled)': {
//           color: '#fff',
//         },
//       },
//       '& .MuiPaginationItem-root': {
//         color: '#5856d6',
//         '&:hover': {
//           backgroundColor: 'rgba(88, 86, 214, 0.08)',
//         },
//       },
//       '& .MuiPaginationItem-icon': {
//         color: 'green', // Set color of arrow icons to green
//       },
//     },
//   },
// });

// export default function PaginationMui() {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(1);

//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <Stack spacing={2}>
//       <Pagination
//         className={classes.pagination}
//         count={10}
//         variant="outlined"
//         shape="rounded"
//         page={page}
//         onChange={handleChange}
//         nextIconButtonProps={{ color: 'inherit' }} // Change color of forward arrow to inherit
//         previousIconButtonProps={{ color: 'inherit' }} // Change color of backward arrow to inherit
//         nextIcon={<KeyboardArrowRight />} // Use custom forward arrow icon
//         prevIcon={<KeyboardArrowLeft />} // Use custom backward arrow icon
//       />
//     </Stack>
//   );
// }
