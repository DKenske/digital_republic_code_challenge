/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useMemo } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import {
  Tabs,
  TableCell,
  TableBody,
  TableRow,
  Table,
  AppBar,
  ListItem,
  ListItemText,
  Collapse,
  List,
} from '@material-ui/core';
import {
  ExpandLess,
  ExpandMore,
  PermDataSetting,
  SettingsInputComponent,
} from '@material-ui/icons';
import { showTransactionRequest } from '../../../store/modules/transactionShow/actions';
import Modal from '../../modal/index';
import { StyledTableCell, StyledTableRow, Text } from './styles';
import { StyledTableHead } from '../../../pages/reports/styles';
import LoadingComponent from '../../loading';

const GetTransactionModal = ({ id, open, closeModal }) => {
  const { t, i18n } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(0);
  const [openClientLogs, setOpenClientLogs] = useState(false);
  const [openAcquirerLogs, setOpenAcquirerLogs] = useState(false);
  const [openDashboardLogs, setOpenDashboardLogs] = useState(false);
  const [isOpen, setIsOpen] = useState({});
  const token = useSelector((state) => state.auth.token);
  const showTransaction = useSelector((state) => state.showTransaction);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleClickList = (listId) => {
    setIsOpen((prevState) => ({ ...prevState, [listId]: !prevState[listId] }));
  };

  const handleClick = (n) => {
    switch (n) {
      case 'openClientLogs': {
        setOpenClientLogs(!openClientLogs);
        break;
      }
      case 'openAcquirerLogs': {
        setOpenAcquirerLogs(!openAcquirerLogs);
        break;
      }
      default:
    }
  };

  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(showTransactionRequest(token, id));
  }, []);

  return (
    <>
      <Modal
        modalState={open}
        onBackdropClick={closeModal}
        fullWidth
        maxWidth="md"
      >
        {showTransaction?.data ? (
          <>
            <AppBar position="static" color="#000000">
              <Tabs
                indicatorColor="primary"
                variant="fullWidth"
                value={selectedTab}
                onChange={handleChange}
              >
                <Tab label="Transaction" />
                {/* {showTransaction?.data?.transaction?.pix_payer ? (
                  <Tab label="Pix Payer" />
                ) : <Tab label="Pix Payer" disabled />} */}
                <Tab label="Payer" />
                {showTransaction?.data?.transaction?.clientLogs[0] ||
                  showTransaction?.data?.transaction?.acquirerLogs[0] ?
                  (
                    <Tab label="Logs" />
                  ) : (
                    <Tab label="Logs" disabled />
                  )}
              </Tabs>
            </AppBar>
            {selectedTab === 0 && (
              <>
                <Table>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell>
                        {t('table.transaction_type')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.transactionType}
                      </TableCell>
                    </StyledTableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.transaction_id')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.id}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.acquirer_id')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.acquirer_id}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.pix_key')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_key}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.qr_code')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.qr_code}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.qr_code')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.qr_code_base64 && (
                          <img
                            src={
                              showTransaction?.data?.transaction?.qr_code_base64
                            }
                            alt="qrcode"
                          />
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.value')}</StyledTableCell>
                      <TableCell>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(
                          showTransaction?.data?.transaction?.value / 100
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.paid_value')}</StyledTableCell>
                      <TableCell>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(
                          showTransaction?.data?.transaction?.paid_value / 100
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.description')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.description}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>Webhook</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.webhook_url}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.paid_at')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.paid_at}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.status')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.status}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.delivered_at')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.delivered_at}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.currency')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.currency}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.paid_currency')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.paid_currency}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.created_at')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.created_at}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </>
            )}
            {/* {selectedTab === 1 && (
              <>
                <Table>
                  <TableBody>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.transaction_type')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_payer?.id}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.name')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_payer?.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.date')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_payer?.date}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.person_type')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_payer?.person_type}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.bank_name')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_payer?.bank_name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.bank_agency')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_payer?.bank_agency}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.bank_account')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_payer?.bank_account}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.bank_account_type')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_payer?.bank_account_type}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>
                        {t('table.created_at')}
                      </StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.pix_payer?.created_at}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </>
            )} */}
            {selectedTab === 1 && (
              <>
                <Table>
                  <TableBody>
                    <TableRow>
                      <StyledTableCell>{t('table.id')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.payer?.id}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.name')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.payer?.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.document')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.payer?.document}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>Email</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.payer?.email}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell>{t('table.type')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.payer?.type}
                      </TableCell>
                    </TableRow>
                    {showTransaction?.data?.transaction?.payer?.address && (
                      <>
                        <TableRow>
                          <StyledTableCell>
                            {t('table.address')}
                          </StyledTableCell>
                          <TableCell>
                            {showTransaction?.data?.transaction?.payer?.address}
                          </TableCell>
                        </TableRow>
                      </>
                    )}
                    {showTransaction?.data?.transaction?.payer?.number && (
                      <>
                        <TableRow>
                          <StyledTableCell>{t('table.number')}</StyledTableCell>
                          <TableCell>
                            {showTransaction?.data?.transaction?.payer?.number}
                          </TableCell>
                        </TableRow>
                      </>
                    )}
                    {showTransaction?.data?.transaction?.payer
                      ?.neighborhood && (
                        <>
                          <TableRow>
                            <StyledTableCell>
                              {t('table.neighborhood')}
                            </StyledTableCell>
                            <TableCell>
                              {
                                showTransaction?.data?.transaction?.payer
                                  ?.neighborhood
                              }
                            </TableCell>
                          </TableRow>
                        </>
                      )}
                    {showTransaction?.data?.transaction?.payer?.city && (
                      <>
                        <TableRow>
                          <StyledTableCell>{t('table.city')}</StyledTableCell>
                          <TableCell>
                            {showTransaction?.data?.transaction?.payer?.city}
                          </TableCell>
                        </TableRow>
                      </>
                    )}
                    <TableRow>
                      <StyledTableCell>{t('table.created_at')}</StyledTableCell>
                      <TableCell>
                        {showTransaction?.data?.transaction?.payer?.created_at}
                      </TableCell>
                    </TableRow>
                    {showTransaction?.data?.transaction?.payer?.zip_code && (
                      <>
                        <TableRow>
                          <StyledTableCell>
                            {t('table.zipcode')}
                          </StyledTableCell>
                          <TableCell>
                            {
                              showTransaction?.data?.transaction?.payer
                                ?.zip_code
                            }
                          </TableCell>
                        </TableRow>
                      </>
                    )}
                    {showTransaction?.data?.transaction?.payer?.state && (
                      <>
                        <TableRow>
                          <StyledTableCell>{t('table.state')}</StyledTableCell>
                          <TableCell>
                            {showTransaction?.data?.transaction?.payer?.state}
                          </TableCell>
                        </TableRow>
                      </>
                    )}
                    {showTransaction?.data?.transaction?.payer?.ddi && (
                      <>
                        <TableRow>
                          <StyledTableCell>{t('table.ddi')}</StyledTableCell>
                          <TableCell>
                            {showTransaction?.data?.transaction?.payer?.ddi}
                          </TableCell>
                        </TableRow>
                      </>
                    )}
                    {showTransaction?.data?.transaction?.payer?.ddd && (
                      <>
                        <TableRow>
                          <StyledTableCell>{t('table.ddd')}</StyledTableCell>
                          <TableCell>
                            {showTransaction?.data?.transaction?.payer?.ddd}
                          </TableCell>
                        </TableRow>
                      </>
                    )}
                    {showTransaction?.data?.transaction?.payer?.cellphone && (
                      <>
                        <TableRow>
                          <StyledTableCell>
                            {t('table.cellphone')}
                          </StyledTableCell>
                          <TableCell>
                            {
                              showTransaction?.data?.transaction?.payer
                                ?.cellphone
                            }
                          </TableCell>
                        </TableRow>
                      </>
                    )}
                  </TableBody>
                </Table>
              </>
            )}
            {selectedTab === 2 && (
              <>
                {showTransaction?.data?.transaction?.clientLogs[0] && (
                  <>
                    <ListItem style={{ backgroundColor: '#c2c2c2' }} button>
                      <ListItemText
                        primary={t('table.client_logs')}
                        onClick={(n) => handleClick('openClientLogs')}
                      />
                      {openClientLogs ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openClientLogs} timeout="auto" unmountOnEnter>
                      <Table>
                        <TableBody>
                          {showTransaction?.data?.transaction?.clientLogs.map(
                            (value) => (
                              <>
                                <ListItem button>
                                  <ListItemText
                                    primary={moment.utc(value.date).format()}
                                    onClick={(e) => handleClickList(value._id)}
                                  />
                                  {isOpen[value._id] ? (
                                    <ExpandLess />
                                  ) : (
                                    <ExpandMore />
                                  )}
                                </ListItem>
                                <Collapse
                                  style={{ width: 300 }}
                                  in={isOpen[value._id]}
                                  timeout="auto"
                                  unmountOnEnter
                                >
                                  <TableBody>
                                    <pre>{JSON.stringify(value, null, 2)}</pre>
                                  </TableBody>
                                </Collapse>
                              </>
                            )
                          )}
                        </TableBody>
                      </Table>
                    </Collapse>
                  </>
                )}
                {showTransaction?.data?.transaction?.acquirerLogs[0] && (
                  <>
                    <ListItem style={{ backgroundColor: '#c2c2c2' }} button>
                      <ListItemText
                        primary={t('table.acquirer_logs')}
                        onClick={(n) => handleClick('openAcquirerLogs')}
                      />
                      {openAcquirerLogs ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                      in={openAcquirerLogs}
                      timeout="auto"
                      unmountOnEnter
                    >
                      <Table>
                        <TableBody>
                          {showTransaction?.data?.transaction?.acquirerLogs.map(
                            (value) => (
                              <>
                                <ListItem button>
                                  <ListItemText
                                    primary={moment(value.date).format()}
                                    onClick={(e) => handleClickList(value._id)}
                                  />
                                  {isOpen[value._id] ? (
                                    <ExpandLess />
                                  ) : (
                                    <ExpandMore />
                                  )}
                                </ListItem>
                                <Collapse
                                  in={isOpen[value._id]}
                                  timeout="auto"
                                  unmountOnEnter
                                >
                                  <pre>{JSON.stringify(value, null, 2)}</pre>
                                </Collapse>
                              </>
                            )
                          )}
                        </TableBody>
                      </Table>
                    </Collapse>
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <LoadingComponent />
        )}
      </Modal>
    </>
  );
};

export default GetTransactionModal;
