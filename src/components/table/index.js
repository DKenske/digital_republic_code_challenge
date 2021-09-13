/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-return */

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#2DACA5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const DataTable = ({ data }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return <></>;
};

export default DataTable;
