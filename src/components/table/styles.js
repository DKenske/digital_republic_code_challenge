/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import TablePagination from '@material-ui/core/TablePagination';
import { BsCardList } from 'react-icons/bs';
import { FaUserNurse, FaRoute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const ICONS = `
  color: #fff !important;
  font-size: 18px !important;
`;

export const MainTable = styled.div`
  display: grid;
  margin-top: 10px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1), 0 1px 0 1px rgba(0, 0, 0, 0.06);
  overflow-x: scroll;
  grid-template-rows: ${(props) => {
    for (let i = 0; i < props.rowQnt; i += 1) {
      (' 1fr');
    }
  }};
`;

export const Row = styled.div`
  display: grid;

  border-top: 1px solid #c1d1d1;
  grid-template-columns: ${(props) => {
    if (props.userType === 'operator') {
      return ' repeat(8, 12%);';
    }
    return 'repeat(6, 16%);';
  }};
  grid-template-rows: 1fr;
`;

export const FeeOpt = styled.div`
  padding: 10px 45px;
  color: black;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: #dfe4ed;
    color: black;
  }
`;

export const ColumnId = styled.div`
  display: flex;
  padding: 4%;
  align-items: center;
  background-color: white;
  grid-column: 1/1;
  padding: 10px;
  color: black;
  font-weight: ${(props) => {
    if (props.type === 'title') {
      return 'bold';
    }
    return 'normal';
  }};
`;

export const ColumnName = styled.div`
  display: flex;
  padding: 4%;
  align-items: center;
  background-color: white;
  grid-column: 3/3;
  font-size: 100%;
  color: black;
  font-weight: ${(props) => {
    if (props.type === 'title') {
      return 'bold';
    }
    return 'normal';
  }};
`;

export const ColumnUser = styled.div`
  display: flex;
  padding: 4%;
  align-items: center;
  background-color: #00769775;
  grid-column: 2/2;
  grid-row: 1/1;
  font-size: 100%;
  color: white;
  font-weight: ${(props) => {
    if (props.type === 'title') {
      return 'bold';
    }
    return 'normal';
  }};
`;
export const ColumnRoute = styled.div`
  display: flex;
  padding: 4%;
  align-items: center;
  padding: 4%;
  background-color: ${(props) => {
    if (props.selected === true) {
      return '#007699';
    }
    return 'white';
  }};
  grid-column: 5/5;
  grid-row: 1/1;
  color: black;
  font-weight: ${(props) => {
    if (props.type === 'title') {
      return 'bold';
    }
    return 'normal';
  }};
`;

export const ColumnDistributor = styled.div`
  display: flex;
  padding: 4%;
  align-items: center;
  padding: 4%;
  background-color: ${(props) => {
    if (props.selected === true) {
      return '#007699';
    }
    return 'white';
  }};
  grid-column: 4/4;
  grid-row: 1/1;
  color: black;
  font-weight: ${(props) => {
    if (props.type === 'title') {
      return 'bold';
    }
    return 'normal';
  }};
`;

export const ColumnLastSign = styled.div`
  display: flex;
  padding: 4%;
  align-items: center;
  background-color: white;
  grid-column: ${(props) => {
    if (props.userType === 'operator') {
      return '6/6;';
    }
    return '4/4;';
  }};
  padding: 10px;
  color: black;
  font-weight: ${(props) => {
    if (props.type === 'title') {
      return 'bold';
    }
    return 'normal';
  }};
`;

export const ColumnStatus = styled.div`
  display: flex;
  padding: 4%;
  align-items: center;
  justify-content: center;
  background-color: white;
  grid-column: ${(props) => {
    if (props.userType === 'operator') {
      return '7/7;';
    }
    return '5/5;';
  }};
  padding: 10px;
  color: black;
  font-weight: ${(props) => {
    if (props.type === 'title') {
      return 'bold';
    }
    return 'normal';
  }};
`;

export const ColumnActions = styled.div`
  display: flex;
  padding: 4%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    if (props.selected === true) {
      return '#007699';
    }
    return 'white';
  }};
  grid-column: ${(props) => {
    if (props.userType === 'operator') {
      return '8/8;';
    }
    return '6/6;';
  }};
  color: black;
  font-weight: ${(props) => {
    if (props.type === 'title') {
      return 'bold';
    }
    return 'normal';
  }};
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  border-radius: 6px;
  background-color: ${(props) =>
    props.background ? props.background : '#0c1427'};
  color: #fff;
  width: 30px;
  cursor: pointer;
  margin-right: 4px;
`;

export const ButtonAddUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: end;
  justify-self: end;
  border-radius: 6px;
  background-color: #006691;
  color: #fff;
  width: 100px;
  margin-left: auto;
  height: 100%;
  cursor: pointer;
  grid-column: 2/2;
  grid-row: 1/1;
`;

export const TableHeader = styled.div`
  display: grid;
  margin-top: 5px;
  margin-bottom: 5px;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 6fr 6fr;
  grid-gap: 5px;
  width: 12fr;
`;

export const TableFooter = styled.div`
  font-size: 15px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const HeaderInputBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  grid-column: 2/2;
  grid-row: 2/2;
  margin-left: auto;
`;

export const HeaderFilterByDistributor = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  grid-column: 1/1;
  grid-row: 2/2;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Text = styled.span`
  font-size: 14px;
`;

export const ArrowDown = styled(ArrowDownwardIcon)`
  font-size: 16px !important;
  position: relative !important;
  top: 3px;
  margin-left: 5px !important;
  cursor: pointer;
`;

export const ArrowUp = styled(ArrowUpwardIcon)`
  font-size: 16px !important;
  position: relative !important;
  top: 3px;
  margin-left: 5px !important;
  cursor: pointer;
`;

export const PaginationCount = styled.div`
  font-size: 16px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-columns: 3/3;
`;

export const IconArrowBack = styled(ArrowBack)`
  color: red;
  background-color: red;
  grid-columns: 2/2;
  ${ICONS}
`;

export const IconArrowForward = styled(ArrowForward)`
  grid-columns: 4/4;
  color: red;
  background-color: red;
  ${ICONS}
`;

export const ErrorMessage = styled.div`
  display: flex;
  padding: 4%;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 10px;
  color: black;
  font-weight: ${(props) => {
    if (props.type === 'title') {
      return 'bold';
    }
    return 'normal';
  }};
`;
export const IconOperador = styled(FaUserNurse)`
  ${ICONS}
`;

export const IconPoint = styled(IoLocationSharp)`
  ${ICONS}
`;

export const PaginationTable = styled(TablePagination)`
  color: ${({ theme }) => theme.text} !important;

  .MuiIconButton-root.Mui-disabled {
    color: ${({ theme }) => theme.text} !important;
  }

  .MuiSelect-icon {
    color: ${({ theme }) => theme.text} !important;
  }
`;

export const IconEdit = styled(EditIcon)`
  ${ICONS}
`;

export const IconDelete = styled(DeleteIcon)`
  ${ICONS}
`;

export const IconEditPermissions = styled(BsCardList)`
  ${ICONS}
`;

export const IconAdd = styled(AddIcon)`
  ${ICONS}
`;

export const IconRoute = styled(FaRoute)`
  ${ICONS}
`;
