/* eslint-disable consistent-return */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ImQrcode } from 'react-icons/im';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

const ICONS = `
  color: #fff !important;
  font-size: 18px !important;
`;

export const IconCodeQR = styled(ImQrcode)`
  background-color: black;
  ${ICONS}
`;

export const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 16,
    backgroundColor: '#333333',
    color: theme.palette.common.black,
  },
  body: {
    minWidth: 225,
    backgroundColor: '#c2c2c2',
    color: theme.palette.common.black,
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const StyledTableHead = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableHead);

export const StyledTableBody = withStyles((theme) => ({}))(TableBody);

export const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const Button = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-radius: 6px;
  background-color: ${(props) =>
    props.background ? props.background : '#0c1427'};
  color: #fff;
  width: 30px;
  cursor: pointer;
  margin-right: 4px;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Text = styled.span`
  font-size: 14px;
`;
